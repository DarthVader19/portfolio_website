"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 2 })] // speed: 2 for slow, continuous scroll
  );

  // Scale animation for active slide
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-12  md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          My Projects
        </h2>
        <div className="relative">
          {/* Embla Carousel */}
          <div
            className="overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "1400px",
              margin: "0 8px",
            }}
            ref={emblaRef}
          >
            <div className="flex">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`flex-shrink-0 snap-center px-2 md:px-4 transition-transform duration-700 ease-in-out
                    ${selectedIndex === idx
                      ? "scale-100 z-10"
                      : "scale-90 opacity-60"}
                  `}
                  style={{
                    minWidth: "320px",
                    maxWidth: "360px",
                    mdMinWidth: "400px",
                    mdMaxWidth: "440px",
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          {/* Mobile scroll hint text */}
          <div className="md:hidden text-center mt-2 text-sm text-muted-foreground">
            &#8594; Swipe to scroll &#8592;
          </div>
        </div>
      </div>
    </section>
  );
}