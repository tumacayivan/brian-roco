import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const bins = [
  {
    name: "Video editing",
    items: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut Pro", "Final Cut Pro", "Adobe Audition"],
  },
  {
    name: "Design & illustration",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Lightroom", "Adobe InDesign", "Figma", "Canva"],
  },
  {
    name: "AI generation",
    items: ["Google Flow", "Sora 2 Pro", "Runway Gen-4.5", "ElevenLabs", "HeyGen", "Higgsfield", "MagicShot"],
  },
  {
    name: "Web & commerce",
    items: ["Shopify", "WordPress", "WooCommerce", "HTML/CSS"],
  },
];

const craft = [
  "Storytelling",
  "Pacing",
  "Colour grading",
  "Motion graphics",
  "Sound design",
  "Clipping",
  "Social ad creative",
  "Brand identity",
  "Ad management",
];

const SkillsSection = () => {
  const [openBin, setOpenBin] = useState<string | null>(bins[0].name);
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="section">
      <div className="inner">
        <h2 className="section-title">
          The
          <br />
          <span className="text-primary">Toolkit</span>
        </h2>
      </div>

      {/* Project-bin style disclosure list, two columns of folders */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-1 gap-px border-y border-border bg-border lg:grid-cols-2">
        {bins.map((bin, i) => {
          const isOpen = openBin === bin.name;
          return (
            <motion.div
              key={bin.name}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background"
            >
              <button
                type="button"
                onClick={() => setOpenBin(isOpen ? null : bin.name)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-[var(--gutter)] py-6 text-left transition-colors hover:bg-card"
              >
                <ChevronRight
                  className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
                <span className="font-display text-[clamp(1.3rem,2.2vw,1.9rem)] font-extrabold tracking-[-0.025em]">
                  {bin.name}
                </span>
                <span className="meta ml-auto shrink-0">{bin.items.length}</span>
              </button>

              {isOpen && (
                <motion.ul
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-[var(--gutter)] pb-7"
                >
                  {bin.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-t border-border py-2.5 pl-8 text-[0.95rem] text-muted-foreground"
                    >
                      <span className="h-1.5 w-4 shrink-0 bg-primary/60" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="inner mt-[clamp(2.5rem,5vw,4rem)]">
        <h3 className="font-display text-[clamp(1.4rem,2.6vw,2.2rem)] font-extrabold tracking-[-0.03em]">
          Craft
        </h3>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {craft.map((item) => (
            <span key={item} className="chip hover:border-primary hover:text-primary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
