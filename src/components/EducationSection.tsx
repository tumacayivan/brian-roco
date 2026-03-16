import { motion } from "framer-motion";

const education = [
  {
    school: "Dr. Emilio B. Espinosa Sr. Memorial State College of Agriculture and Technology",
    degree: "Bachelor of Secondary Education – Major in English",
    period: "Completed 3 years in college",
  },
  {
    school: "Aroroy National High School",
    degree: "Secondary Education",
    period: "2012–2018",
  },
  {
    school: "Aroroy East Central School",
    degree: "Elementary Education",
    period: "2006–2011",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">Education</h2>
        <div className="w-24 h-2 bg-primary mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <p className="text-primary text-sm md:text-base uppercase tracking-widest mb-3 font-body font-bold">
              {edu.period}
            </p>
            <h3 className="font-display font-black text-2xl md:text-3xl mb-2">{edu.school}</h3>
            <p className="text-foreground font-semibold text-base md:text-lg font-body">{edu.degree}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
