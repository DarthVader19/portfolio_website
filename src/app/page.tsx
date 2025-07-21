import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import BlogSection from "@/components/sections/blog";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import Chatbot from "@/components/chatbot/chatbot";
import TechCarousel from "@/components/sections/carousel";
// import TechCarousel2 from "@/components/sections/TechCarousel2";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <div className="my-8">
            <h2 className="text-2xl font-bold text-center mb-4">Worked on</h2>
            <TechCarousel />
          </div>
          {/* <TechCarousel2 /> */}
          <ProjectsSection />
          <ExperienceSection />
          <BlogSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
