import TypingAnimation from "@/components/ui/typing-animation";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 animate-in fade-in duration-700">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter">
          John Doe
        </h1>
        <h2 className="mt-2 text-3xl md:text-5xl font-semibold font-headline text-primary">
          AI & Machine Learning Developer
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Welcome to my portfolio. I specialize in building intelligent systems and leveraging data to create impactful AI/ML solutions.
        </p>
        <div className="mt-8 text-lg md:text-2xl font-semibold font-headline text-accent">
          <TypingAnimation
            sequences={[
              "Natural Language Processing",
              2000,
              "Computer Vision",
              2000,
              "Deep Learning Frameworks",
              2000,
              "Predictive Analytics",
              2000,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
