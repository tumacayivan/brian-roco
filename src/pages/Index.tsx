import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import GraphicsShowcase from "@/components/GraphicsShowcase";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <HeroSection />
      <VideoShowcase />
      <GraphicsShowcase />
      <PortfolioSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ToolsSection />
      <EducationSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
