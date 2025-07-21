import TypingAnimation from "@/components/ui/typing-animation";
import { user as User } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 animate-in fade-in duration-700">
      <div className="container mx-auto text-center">
        {/* Name with gradient and fade-in */}
        <h1 className=" text-6xl md:text-8xl font-bold font-headline tracking-tighter" 
        
        >Hi, I am {" "}
             <span className="text-6xl md:text-8xl font-bold font-headline tracking-tighter
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            text-transparent bg-clip-text
            opacity-0 animate-fade-in-down"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            {User.name}

        </span>
          
        </h1>
        {/* Title with fade-in and delay */}
        <h2
          className="mt-2 text-3xl md:text-5xl font-semibold font-headline text-blue-300
            opacity-0 animate-fade-in-down"
          style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
        >
          {User.title}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {User.description}
        </p>
        <div className="mt-8 text-lg md:text-2xl font-semibold font-headline text-accent">
          <TypingAnimation
            sequences={[
              User.skills[0],
              2000,
              User.skills[1],
              2000,
              User.skills[2],
              2000,
              User.skills[3],
              2000,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
