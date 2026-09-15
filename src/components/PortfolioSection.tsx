import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section">
      <div className="inner">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div {...reveal}>
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title">Portfolio</h2>
          </motion.div>
          <motion.p {...reveal} className="section-lead">
            Explore my complete body of work — from property consultation and real estate videos to graphic design,
            video editing, and web development projects. Each project showcases my{" "}
            <span className="text-foreground font-semibold">commitment to quality, creativity, and client satisfaction</span> across
            diverse industries and creative disciplines.
          </motion.p>
        </div>

        {/* Services — hairline grid */}
        <div className="mt-[clamp(3rem,6vw,5rem)] grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-[18px] overflow-hidden">
          {categories.map((cat, i) => {
            const isGraphicDesign = cat.title === "Graphic Design";
            const body = (
              <>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display font-semibold text-primary text-lg">{String(i + 1).padStart(2, "0")}</span>
                  {isGraphicDesign && (
                    <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
                  )}
                </div>
                <h3 className="mt-4 font-display font-extrabold text-[clamp(1.4rem,2.2vw,1.9rem)] tracking-[-0.02em] leading-[1.05] group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-[0.97rem] leading-relaxed">{cat.description}</p>
              </>
            );
            const cls = "group block h-full bg-background p-[clamp(1.6rem,3vw,2.4rem)] transition-colors duration-500 hover:bg-card";

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
                className="bg-background"
              >
                {isGraphicDesign ? (
                  <Link to="/graphics" className={cls}>{body}</Link>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <VideoShowcase />

        <motion.div {...reveal} className="mt-[clamp(3.5rem,7vw,6rem)] flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Full Portfolio on Google Drive
            <ArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
