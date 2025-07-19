import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import RecommendationSection from "@/components/sections/recommendation";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <ProjectsSection />
          <RecommendationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
