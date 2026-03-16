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
      "Power Director",
    ],
  },
  {
    title: "Web Design & Development",
    skills: [
      "WordPress",
      "Wix",
      "HTML/CSS",
      "UI/UX Design",
      "SEO Basics",
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

const skills = [
  "Video Editing",
  "Graphic Design",
  "Web Design",
  "Property Consultation",
  "Computer Skills",
  "Critical Thinking",
  "Leadership",
  "Communication Skills",
  "Multitasking",
  "Drawing / Digital Art",
  "Social Media Management",
  "Content Creation",
  "Brand Identity Design",
  "Motion Graphics",
  "Color Grading",
  "Storytelling",
];

const competencies = [
  "Critical Thinking",
  "Leadership",
  "Communication Skills",
  "Multitasking",
  "Creativity",
  "Attention to Detail",
  "Problem-Solving",
  "Adaptability",
  "Client Relations",
  "Time Management",
  "Collaboration",
  "Organization",
  "Visual Storytelling",
  "Brand Development",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">Skills & Softwares</h2>
        <div className="w-24 h-2 bg-primary mb-12" />
      </motion.div>

      {/* Software categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, i) => {
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-5 text-primary">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground font-semibold text-base md:text-lg font-body flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Skills & Competencies */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-4 py-2 text-sm md:text-base font-body font-bold bg-primary/10 text-primary border-2 border-primary/30 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-6">Key Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {competencies.map((c) => (
              <span key={c} className="px-4 py-2 text-sm md:text-base font-body font-bold bg-primary/10 text-primary border-2 border-primary/30 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
