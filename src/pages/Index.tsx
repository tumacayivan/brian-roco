import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import PortfolioSection from "@/components/PortfolioSection";
import GraphicsShowcase from "@/components/GraphicsShowcase";
import EducationSection from "@/components/EducationSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ExperienceSection />
        <GraphicsShowcase />
        <SkillsSection />
        <ToolsSection />
        <EducationSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
