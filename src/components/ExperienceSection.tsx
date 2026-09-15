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
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Career</span>
          <h2 className="section-title">
            Work
            <br />
            Experience
          </h2>
        </motion.div>

        <div className="hairline-list mt-[clamp(2.5rem,5vw,4rem)]">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="hairline-row grid md:grid-cols-[0.6fr_1.4fr_1fr] gap-3 md:gap-8"
            >
              <p className="text-primary font-semibold text-[0.95rem] tracking-[0.04em]">{exp.period}</p>
              <div>
                <h3 className="font-display font-extrabold text-[clamp(1.4rem,2.6vw,2.1rem)] tracking-[-0.02em] leading-[1.05]">
                  {exp.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{exp.company}</p>
              </div>
              <p className="relative pl-[1.1rem] text-muted-foreground text-[0.97rem] leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
