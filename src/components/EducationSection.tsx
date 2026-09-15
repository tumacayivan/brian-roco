import { motion } from "framer-motion";

const education = [
  {
    school: "Dr. Emilio B. Espinosa Sr. Memorial State College of Agriculture and Technology (DEBESMSCAT)",
    degree: "Bachelor of Secondary Education – Major in English",
    period: "2020–2024",
  },
  {
    school: "Aroroy National High School",
    degree: "Junior High School & Senior High School",
    period: "2014–2020",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Background</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="hairline-list mt-[clamp(2.5rem,5vw,4rem)]">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="hairline-row grid md:grid-cols-[0.6fr_1.4fr_1fr] gap-3 md:gap-8"
            >
              <p className="text-primary font-semibold text-[0.95rem] tracking-[0.04em]">{edu.period}</p>
              <h3 className="font-display font-extrabold text-[clamp(1.3rem,2.4vw,1.9rem)] tracking-[-0.02em] leading-[1.1]">
                {edu.school}
              </h3>
              <p className="text-muted-foreground">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
