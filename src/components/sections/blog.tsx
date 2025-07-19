import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 animate-in fade-in zoom-in-95 duration-500">
              <CardHeader>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint="technology blog"
                  />
                </div>
                <CardTitle className="font-headline">{post.title}</CardTitle>
                 <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="group p-0">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
