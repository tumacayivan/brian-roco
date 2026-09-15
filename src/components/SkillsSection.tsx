import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Graphic Design Software",
    skills: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Canva",
      "Figma",
    ],
  },
  {
    title: "Video Editing Software",
    skills: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "CapCut Pro",
      "Final Cut Pro",
    ],
  },
  {
    title: "AI Generation Tools",
    skills: [
      "Google Flow",
      "OpenAI Sora 2 / Sora 2 Pro",
      "Runway Gen-4.5",
      "ElevenLabs",
      "HeyGen",
      "Higgsfield",
      "MagicShot",
    ],
  },
  {
    title: "Web & E-commerce",
    skills: [
      "Shopify",
      "WordPress",
      "WooCommerce",
      "HTML/CSS",
    ],
  },
  {
    title: "Property & Real Estate",
    skills: [
      "Property Consultation",
      "Client Relations",
      "Property Presentation",
      "Market Analysis",
      "Sales & Negotiation",
    ],
  },
];

const preferencesSkills = [
  "Video Editing",
  "HTML/CSS",
  "Motion Graphics",
  "Color Grading",
  "Graphic Design",
  "Content Creation",
  "Social Media Content",
  "Social Media Ads",
  "Clipping",
  "AI Generation",
  "Web Design",
  "Ad Management",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">Softwares</h2>
        </motion.div>

        {/* Software categories */}
        <div className="hairline-list mt-[clamp(2.5rem,5vw,4rem)]">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="hairline-row grid md:grid-cols-[0.6fr_1.4fr] gap-4 md:gap-8 items-baseline"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-extrabold text-[clamp(1.3rem,2.2vw,1.8rem)] tracking-[-0.02em] leading-[1.05]">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip chip-tool">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preferences | Skills */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[clamp(3rem,6vw,5rem)]"
        >
          <h3 className="flex items-baseline gap-4 font-display font-extrabold text-[clamp(1.7rem,4vw,3rem)] tracking-[-0.02em]">
            Preferences <span className="text-muted-foreground font-normal">|</span> Skills
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {preferencesSkills.map((s) => (
              <span key={s} className="chip hover:border-primary hover:text-primary transition-colors">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
