import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Configure a free OpenAI-compatible provider (Pollinations API)
// This bypasses the need for an implicit process.env.OPENAI_API_KEY
const pollinations = createOpenAI({
  apiKey: 'dummy-key',
  baseURL: 'https://text.pollinations.ai/openai/',
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: pollinations('openai'),
    system: `You are Genesis, the premium AI assistant for Robot Genie, an elite AI engineering education platform.
    Your tone is authoritative, concise, and highly professional, resembling high-end tech companies like Tesla, Apple, or OpenAI.
    Your goal is to guide ambitious professionals to enroll in Robot Genie's elite training programs.
    Use Markdown heavily to format your responses. Use bold text for key terms, lists for advantages, and keep paragraphs short.
    Always be helpful, but steer conversations towards booking a free demo or exploring the curriculum.
    If asked about placement, mention the 84 LPA highest salary and 94% placement rate at top companies like Google, Microsoft, and OpenAI.`,
    messages,
  });

  return result.toDataStreamResponse();
}
