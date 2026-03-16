import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GraphicsShowcase from "./GraphicsShowcase";
import VideoShowcase from "./VideoShowcase";

const categories = [
  { 
    title: "Video Edits", 
    description: "Professional video editing services including reels, podcasts, montages, music videos, vlogs, TikTok content, and sports highlights. Expertise in storytelling, pacing, and visual narrative." 
  },
  { 
    title: "AI-Generated Videos", 
    description: "Cutting-edge AI-powered video content and creative experiments. Exploring innovative techniques in automated video generation and AI-assisted editing workflows." 
  },
  { 
    title: "Graphic Design", 
    description: "Comprehensive graphic design services including branding, social media graphics, marketing materials, and visual storytelling. Specialized in Adobe Illustrator and Photoshop." 
  },
  { 
    title: "Real Estate Videos", 
    description: "Property showcase videos and real estate marketing content. Creating engaging visual presentations that highlight property features and attract potential buyers." 
  },
  { 
    title: "Web Design", 
    description: "User-friendly, visually engaging websites customized to client brand identity. Expertise in WordPress, Wix, and custom HTML/CSS development with focus on UI/UX design." 
  },
  { 
    title: "Social Media Content", 
    description: "Complete social media management and content creation. Producing visually captivating graphics and videos optimized for various social media platforms." 
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">Portfolio</h2>
          <div className="w-24 h-2 bg-primary mb-8" />
          <p className="text-foreground font-semibold text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 font-body leading-relaxed">
            Explore my complete body of work — from <span className="highlight-text">property consultation</span> and <span className="highlight-text">real estate videos</span> to <span className="highlight-text">graphic design</span>, 
            <span className="highlight-text"> video editing</span>, and <span className="highlight-text">web development</span> projects. Each project showcases my <span className="font-bold text-primary">commitment to quality, creativity, 
            and client satisfaction</span> across diverse industries and creative disciplines.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => {
            const isGraphicDesign = cat.title === "Graphic Design";
            const CardWrapper = isGraphicDesign ? Link : motion.div;
            const wrapperProps = isGraphicDesign 
              ? { to: "/graphics", className: "block" }
              : {};

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CardWrapper
                  {...wrapperProps}
                  className="glass-card p-6 group hover:border-primary/50 transition-colors block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-2xl md:text-3xl group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    {isGraphicDesign && (
                      <ArrowRight className="w-6 h-6 text-primary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <p className="text-foreground font-semibold text-base md:text-lg font-body leading-relaxed">
                    {cat.description}
                  </p>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Video Showcase */}
        <VideoShowcase />

        {/* Graphics Showcase */}
        <GraphicsShowcase />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1-K_ir1dY1wtNaT8qPPF4EMQVQxgMObGZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-base md:text-lg tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            View Full Portfolio on Google Drive
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
