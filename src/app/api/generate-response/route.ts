import { NextRequest, NextResponse } from 'next/server';
import { generatePerspectiveResponse } from '@/lib/anthropic';
import { GenerateResponseRequest, GenerateResponseResponse, PerspectiveId } from '@/lib/types';

// Simple in-memory rate limiting (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count };
}

const validPerspectives: PerspectiveId[] = [
  'far-right',
  'center-right',
  'moderate-conservative',
  'far-left',
  'progressive',
  'center-left',
  'cynical'
];

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    const rateLimitInfo = getRateLimitInfo(ip);
    if (!rateLimitInfo.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded', message: 'Please wait a minute before making more requests.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60'
          }
        }
      );
    }

    // Parse request body
    const body: GenerateResponseRequest = await request.json();
    const { question, perspectiveId } = body;

    // Validate input
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request', message: 'Question is required and must be a string.' },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return NextResponse.json(
        { error: 'Invalid request', message: 'Question must be 500 characters or less.' },
        { status: 400 }
      );
    }

    if (!perspectiveId || !validPerspectives.includes(perspectiveId)) {
      return NextResponse.json(
        { error: 'Invalid request', message: 'Valid perspective ID is required.' },
        { status: 400 }
      );
    }

    // Check for API key (supports both BYOK and ANTHROPIC_API_KEY)
    if (!process.env.BYOK && !process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Configuration error', message: 'API key not configured.' },
        { status: 500 }
      );
    }

    // Generate response
    const { response, perspectiveName } = await generatePerspectiveResponse(question, perspectiveId);

    const responseData: GenerateResponseResponse = {
      response,
      perspective: perspectiveName,
      perspectiveId
    };

    return NextResponse.json(responseData, {
      headers: {
        'X-RateLimit-Remaining': rateLimitInfo.remaining.toString()
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    
    // Handle Anthropic API errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'Authentication error', message: 'Invalid API configuration.' },
          { status: 500 }
        );
      }
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Service busy', message: 'AI service is busy. Please try again in a moment.' },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Server error', message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
