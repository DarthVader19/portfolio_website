"use server";

import {
  projectRecommendation,
  type ProjectRecommendationInput,
  type ProjectRecommendationOutput,
} from "@/ai/flows/project-recommendation";

export async function getProjectRecommendation(
  input: ProjectRecommendationInput
): Promise<ProjectRecommendationOutput | null> {
  try {
    const output = await projectRecommendation(input);
    return output;
  } catch (error) {
    console.error("Error in project recommendation flow:", error);
    return null;
  }
}
