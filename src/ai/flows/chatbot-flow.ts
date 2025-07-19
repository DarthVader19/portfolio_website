'use server';
/**
 * @fileOverview A chatbot flow that answers questions about the portfolio.
 *
 * - askChatbot - A function that handles the chatbot interaction.
 * - ChatbotInput - The input type for the askChatbot function.
 * - ChatbotOutput - The return type for the askChatbot function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { projects, experiences, blogPosts } from '@/lib/data';

const ChatbotInputSchema = z.object({
  question: z.string().describe('The question from the user.'),
  history: z.string().describe('The conversation history.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export type ChatbotOutput = string;

export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const portfolioData = `
My Projects:
${projects.map(p => `- ${p.title}: ${p.description}`).join('\n')}

My Experience:
${experiences.map(e => `- ${e.role} at ${e.company}: ${e.description}`).join('\n')}

My Blog Posts:
${blogPosts.map(b => `- ${b.title}: ${b.description}`).join('\n')}

Contact Information:
You can contact me through the form on the website or via the social links provided.
`;

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: { schema: ChatbotInputSchema },
  prompt: `You are a helpful AI assistant for a developer portfolio website. Your name is "Portfolio Pal".
You are chatting with a visitor to the site.
Your goal is to answer questions about the portfolio owner, their projects, experience, and blog posts.
Be friendly, concise, and helpful.
Do not make up information. If you don't know the answer, say that you don't have that information.

Here is the data from the portfolio:
${portfolioData}

Here is the current conversation history:
{{{history}}}

Here is the user's latest question:
{{{question}}}

Your response:`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { text } = await prompt.generate(input);
    return text;
  }
);
