import Anthropic from '@anthropic-ai/sdk';
import { PerspectiveId } from './types';
import { getPromptByPerspective, getPerspectiveById } from './prompts';

const anthropic = new Anthropic({
  apiKey: process.env.BYOK || process.env.ANTHROPIC_API_KEY,
});

export async function generatePerspectiveResponse(
  question: string,
  perspectiveId: PerspectiveId
): Promise<{ response: string; perspectiveName: string }> {
  const systemPrompt = getPromptByPerspective(perspectiveId);
  const perspective = getPerspectiveById(perspectiveId);

  if (!systemPrompt || !perspective) {
    throw new Error(`Invalid perspective: ${perspectiveId}`);
  }

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: `Please answer the following question from your political perspective:\n\n${question}`
      }
    ]
  });

  // Extract text from the response
  const textContent = message.content.find(block => block.type === 'text');
  const responseText = textContent ? textContent.text : 'Unable to generate response.';

  return {
    response: responseText,
    perspectiveName: perspective.name
  };
}
