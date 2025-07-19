'use server';

/**
 * @fileOverview Implements an AI-powered project recommendation flow based on visitor behavior.
 *
 * - projectRecommendation - Recommends projects or portfolio sections based on visitor behavior.
 * - ProjectRecommendationInput - The input type for the projectRecommendation function.
 * - ProjectRecommendationOutput - The return type for the projectRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  visitorHistory: z
    .string()
    .describe(
      'The browsing history of the visitor, including pages visited and time spent on each page.'
    ),
  interests: z.string().optional().describe('The stated interests of the visitor, if available.'),
});
export type ProjectRecommendationInput = z.infer<typeof ProjectRecommendationInputSchema>;

const ProjectRecommendationOutputSchema = z.object({
  recommendedProjects: z
    .array(z.string())
    .describe('A list of recommended project IDs based on visitor behavior.'),
  recommendedSections: z
    .array(z.string())
    .describe('A list of recommended portfolio sections based on visitor behavior.'),
  reasoning: z
    .string()
    .describe('The AI reasoning behind the project and section recommendations.'),
});
export type ProjectRecommendationOutput = z.infer<typeof ProjectRecommendationOutputSchema>;

export async function projectRecommendation(input: ProjectRecommendationInput): Promise<ProjectRecommendationOutput> {
  return projectRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectRecommendationPrompt',
  input: {schema: ProjectRecommendationInputSchema},
  output: {schema: ProjectRecommendationOutputSchema},
  prompt: `You are an AI portfolio assistant. Your job is to analyze visitor behavior and recommend projects and portfolio sections that might interest them.

Visitor History: {{{visitorHistory}}}
Visitor Interests: {{{interests}}}

Based on this information, recommend specific projects (by ID) and portfolio sections that the visitor should check out. Provide a brief explanation of your reasoning.

{{#if visitorHistory}}
  Given the visitor history of {{{visitorHistory}}}, I recommend the following:
{{else}}
  Given the visitor interests of {{{interests}}}, I recommend the following:
{{/if}}

Output in JSON format:
{
  "recommendedProjects": ["project1", "project2"],
  "recommendedSections": ["section1", "section2"],
  "reasoning": "Because of their interest in X, they might like project Y."
}
`,
});

const projectRecommendationFlow = ai.defineFlow(
  {
    name: 'projectRecommendationFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
