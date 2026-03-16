import { motion } from "framer-motion";

const experiences = [
  {
    title: "Property Specialist",
    company: "Real Estate",
    period: "1 year",
    description:
      "Assisted clients in finding suitable properties, presented property listings and explained features to buyers, and helped guide clients through property inquiries and purchase decisions. Focused on understanding client needs and providing personalized property consultation services.",
  },
  {
    title: "Web Designer",
    company: "Exoskill Creatives",
    period: "2024–Present",
    description:
      "Created and developed websites that were both visually engaging and user-friendly, customized to meet each client's needs. Focused on blending creativity with functionality, ensuring every site offered a smooth user experience while staying true to the client's brand identity.",
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Freelance (Handled Multiple Clients)",
    period: "2021–Present",
    description:
      "Partnered with a wide range of clients including content creators, small businesses, marketing agencies, and independent filmmakers. Work centers on producing visually captivating and emotionally resonant videos that align with each client's specific objectives.",
  },
  {
    title: "Graphic Designer, Social Media Manager & Video Editor",
    company: "Next Generation Church (Jesus Culture)",
    period: "2017–2018",
    description:
      "Inspired believers worldwide by uniting in faith through powerful and engaging worship experiences. Produced content providing opportunities for worship, fellowship, and authentic connection, touching the lives of people from diverse backgrounds.",
  },
  {
    title: "Graphic Designer and Video Editor",
    company: "Rovawork Philippines",
    period: "2021–2023",
    description:
      "Collaborated with a dynamic creative team to produce engaging video content for corporate clients, marketing initiatives, and digital platforms. Transformed raw footage into polished, high-quality visual narratives that reflected client branding and strategic goals.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">Work Experience</h2>
          <div className="w-24 h-2 bg-primary mb-12" />
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-border/50 last:border-b-0"
            >
              <p className="text-primary font-body font-bold text-base md:text-lg tracking-wider">
                {exp.period}
              </p>
              <div>
                <h3 className="font-display font-black text-3xl md:text-4xl mb-2">{exp.title}</h3>
                <p className="text-primary font-semibold text-lg md:text-xl mb-4 font-body">
                  {exp.company}
                </p>
                <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed font-body">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
