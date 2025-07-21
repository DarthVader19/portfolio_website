
import { techStack } from "../../lib/data";
import Image from "next/image";


export default function TechCarousel2() {
  return (
    <div className="overflow-hidden w-full py-4 bg-transparent">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {techStack.concat(techStack).map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[100px]">
            <Image src={tech.icon} alt={tech.name} width={40} height={40} />
            <span className="mt-2 text-sm text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}