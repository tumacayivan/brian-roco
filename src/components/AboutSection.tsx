import { motion, useReducedMotion } from "framer-motion";

const properties = [
  { key: "Email", value: "rocobrian06@gmail.com", href: "mailto:rocobrian06@gmail.com" },
  { key: "Phone", value: "+63 964 170 5633", href: "tel:+639641705633" },
  { key: "Based in", value: "Cavite, Philippines" },
  { key: "Languages", value: "English, Filipino, Minasbate" },
  { key: "Editing", value: "Premiere Pro, After Effects, CapCut" },
  { key: "Design", value: "Illustrator, Photoshop, Lightroom" },
];

const AboutSection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section">
      <div className="inner grid gap-x-[clamp(2.5rem,5vw,6rem)] gap-y-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">About</span>
          <p className="mt-8 font-display text-[clamp(1.6rem,3.4vw,3rem)] font-normal leading-[1.2] tracking-[-0.025em]">
            I started in print and signage, moved into video, and now spend most weeks doing both.
            The design work sharpens the frames.{" "}
            <b className="font-extrabold text-primary">The editing keeps the design moving.</b>
          </p>
          <p className="mt-8 max-w-[62ch] text-[1.05rem] leading-relaxed text-muted-foreground">
            Lately that means a lot of AI generated film. Google Flow, Sora and Runway for shots,
            ElevenLabs for voice, then the whole thing assembled and graded in Premiere like any
            other cut.
          </p>
        </motion.div>

        {/* Effect-controls style property list */}
        <motion.dl
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="self-start border border-border bg-card"
        >
          <div className="border-b border-border px-4 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
            Properties
          </div>
          {properties.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border px-4 py-3.5 last:border-b-0 sm:grid-cols-[8rem_1fr]"
            >
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                {row.key}
              </dt>
              <dd className="break-words text-[0.95rem] font-medium">
                {row.href ? (
                  <a href={row.href} className="transition-colors hover:text-primary">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default AboutSection;
