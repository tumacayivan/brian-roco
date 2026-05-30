import { motion } from "framer-motion";

const experiences = [
  {
    title: "Graphic Designer",
    company: "UZ Marketing (U.S.)",
    period: "Graphic Design",
    description:
      "Designed marketing materials using Adobe Illustrator and Photoshop, including flyers, premium postcards, yard signs, banners, car magnets, brochures, sidewalk signage, business cards, stickers, and t-shirts — all aligned to brand identity and client specifications.",
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Rovawork Philippines (Timmerman Industries)",
    period: "Video & Design",
    description:
      "Collaborated with a dynamic creative team to produce engaging video content for corporate clients, marketing initiatives, and digital platforms. Transformed raw footage into polished, high-quality visual narratives that reflected client branding and strategic goals.",
  },
  {
    title: "Graphic Designer",
    company: "Fundraiser Blankets",
    period: "Product Design",
    description:
      "Designed product graphics for blankets, towels, and rally items for various schools using Adobe Photoshop, Adobe Illustrator, and Canva. Created visually appealing layouts that matched brand identity and client specifications.",
  },
  {
    title: "Property Specialist",
    company: "Ayala Land, Inc. (Philippines)",
    period: "Real Estate",
    description:
      "Managed real estate transactions and client acquisitions for the Philippines' leading developer. Excelled in lead generation, contract negotiation, and marketing strategies, providing tailored investment solutions while ensuring a seamless buying experience.",
  },
  {
    title: "Web Designer",
    company: "Exoskill Creatives",
    period: "2024–Present",
    description:
      "Created and developed websites that were both visually engaging and user-friendly, customized to meet each client's needs. Focused on blending creativity with functionality, ensuring every site offered a smooth user experience while staying true to the client's brand identity.",
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
