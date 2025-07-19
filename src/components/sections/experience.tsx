import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          My Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 pl-8">
              <div className="absolute left-[-24px] top-1 flex items-center justify-center bg-background">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-base">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                   <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
