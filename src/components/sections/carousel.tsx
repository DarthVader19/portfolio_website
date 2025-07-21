"use client";
import { techStack } from "@/lib/data";

export default function TechCarousel() {
  // Duplicate the stack for seamless looping
  const items = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-transparent">
      <div className="marquee flex items-center gap-8">
        {items.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[100px]"
            >
              <Icon size={56} className="text-blue-500 dark:text-blue-300" />
              <span className="mt-2 text-xs md:text-sm text-foreground">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .marquee {
          animation: scroll-marquee 10s linear infinite;
          will-change: transform;
        }
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
