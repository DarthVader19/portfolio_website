import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 animate-in fade-in zoom-in-95 duration-500">
      <CardHeader>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint={`${project.title.toLowerCase().split(' ').slice(0,2).join(' ')}`}
          />
        </div>
        <CardTitle className="font-headline">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-1 mt-1">
        <Button asChild variant="outline" size="sm" className="group">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="default" size="sm" className="group bg-accent hover:bg-accent/90">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-1 h-4 w-2 transition-transform group-hover:scale-110" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
