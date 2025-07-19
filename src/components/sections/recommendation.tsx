"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BrainCircuit, Loader2, Sparkles } from "lucide-react";
import { getProjectRecommendation } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { ProjectRecommendationOutput } from "@/ai/flows/project-recommendation";

const formSchema = z.object({
  interests: z.string().min(10, {
    message: "Please tell us a bit more about your interests.",
  }),
});

export default function RecommendationSection() {
  const [recommendation, setRecommendation] = useState<ProjectRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await getProjectRecommendation({ interests: values.interests });
      if (result) {
        setRecommendation(result);
      } else {
        throw new Error("AI response was empty.");
      }
    } catch (error) {
      console.error("Failed to get recommendation:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get project recommendations. Please try again.",
      });
    }
    setIsLoading(false);
  }

  return (
    <section id="recommendation" className="py-12 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl md:text-3xl font-bold font-headline text-center gap-2">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span>AI Project Recommender</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Not sure where to start? Describe your interests, and our AI will suggest the most relevant projects for you.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Interests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I'm interested in computer vision for autonomous vehicles' or 'I want to see projects using reinforcement learning.'"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Thinking...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Recommendations
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {recommendation && (
              <div className="mt-8 p-4 border rounded-lg bg-background animate-in fade-in duration-500">
                <h4 className="font-bold text-lg mb-2 text-accent font-headline">AI Suggestion:</h4>
                <p className="text-sm text-muted-foreground mb-4">{recommendation.reasoning}</p>
                <div className="space-y-2">
                  {recommendation.recommendedProjects.length > 0 && (
                    <div>
                      <h5 className="font-semibold">Recommended Projects:</h5>
                      <ul className="list-disc list-inside text-sm">
                        {recommendation.recommendedProjects.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {recommendation.recommendedSections.length > 0 && (
                     <div>
                       <h5 className="font-semibold">Recommended Sections:</h5>
                       <ul className="list-disc list-inside text-sm">
                         {recommendation.recommendedSections.map((s) => (
                           <li key={s}>{s}</li>
                         ))}
                       </ul>
                     </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
