'use client';

import { Perspective } from '@/lib/types';

interface ResponseDisplayProps {
  response: string;
  perspective: Perspective;
  question: string;
  onAskAnother: () => void;
  onTryDifferent: () => void;
}

export default function ResponseDisplay({
  response,
  perspective,
  question,
  onAskAnother,
  onTryDifferent
}: ResponseDisplayProps) {
  return (
    <div className="w-full animate-fadeIn">
      {/* Perspective Label */}
      <div 
        className="flex items-center gap-3 mb-4 pb-4 border-b"
        style={{ borderColor: perspective.color + '40' }}
      >
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: perspective.color }}
        >
          {perspective.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900" style={{ color: perspective.color }}>
            {perspective.name} Perspective
          </h3>
          <p className="text-sm text-gray-500">{perspective.spectrum === 'blue' ? 'Conservative' : perspective.spectrum === 'red' ? 'Liberal' : 'Cynical'} Spectrum</p>
        </div>
      </div>

      {/* Original Question */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500 mb-1">Your question:</p>
        <p className="text-gray-800 font-medium">{question}</p>
      </div>

      {/* Response */}
      <div className="prose prose-gray max-w-none">
        <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{response}</p>
        </div>
      </div>

      {/* Educational Note */}
      <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
        <p className="flex items-start">
          <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>
            <strong>Educational Note:</strong> This is an AI-generated simulation of how someone with this political perspective might respond. 
            It&apos;s designed to help understand different viewpoints, not to represent any individual&apos;s actual views.
          </span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={onAskAnother}
          className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Ask Another Question
        </button>
        
        <button
          onClick={onTryDifferent}
          className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Different Perspective
        </button>
      </div>

      {/* Future Feature Placeholders */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <button 
          className="px-4 py-2 text-sm text-gray-400 border border-gray-200 rounded-lg cursor-not-allowed"
          disabled
          title="Coming soon"
        >
          📊 Compare Perspectives (Coming Soon)
        </button>
        <button 
          className="px-4 py-2 text-sm text-gray-400 border border-gray-200 rounded-lg cursor-not-allowed"
          disabled
          title="Coming soon"
        >
          📤 Share Response (Coming Soon)
        </button>
      </div>
    </div>
  );
}
