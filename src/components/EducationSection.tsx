import { motion, useReducedMotion } from "framer-motion";

const education = [
  {
    school: "DEBESMSCAT",
    full: "Dr. Emilio B. Espinosa Sr. Memorial State College of Agriculture and Technology",
    degree: "BSEd, Major in English",
    period: "2020-2024",
  },
  {
    school: "Aroroy National High School",
    full: "Junior and Senior High School",
    degree: "Academic track",
    period: "2014-2020",
  },
];

const references = [
  {
    name: "Audrean Dan Lamoste",
    role: "CEO, ExoSkill Creatives",
    phone: "+63 803 265 5762",
  },
  {
    name: "Mac Neil Ivan Tumacay",
    role: "COO, Rovawork Philippines",
    phone: "+63 991 686 8942",
  },
];

const EducationSection = () => {
  const reduce = useReducedMotion();
  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="education" className="section">
      <div className="inner grid gap-x-[clamp(2.5rem,6vw,7rem)] gap-y-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Background</span>
          <div className="mt-8 border-t border-border">
            {education.map((item, i) => (
              <motion.div key={item.school} {...reveal(i)} className="border-b border-border py-7">
                <p className="meta text-primary">{item.period}</p>
                <h3 className="mt-3 font-display text-[clamp(1.35rem,2.4vw,2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
                  {item.school}
                </h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{item.full}</p>
                <p className="mt-1 text-[0.95rem] text-foreground">{item.degree}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="references">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.03em]">
            References
          </h2>
          <div className="mt-8 border-t border-border">
            {references.map((person, i) => (
              <motion.div
                key={person.name}
                {...reveal(i)}
                className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-border py-7"
              >
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-extrabold leading-tight tracking-[-0.025em]">
                    {person.name}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{person.role}</p>
                </div>
                <a
                  href={`tel:${person.phone.replace(/\s/g, "")}`}
                  className="font-mono text-[0.8rem] tracking-[0.06em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {person.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
