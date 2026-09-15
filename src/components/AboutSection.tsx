import { motion } from "framer-motion";

// `wide` cells span both columns so long values don't break mid-word
const info = [
  { label: "Email", value: "rocobrian06@gmail.com", wide: true },
  { label: "Location", value: "Cavite, Philippines" },
  { label: "Phone", value: "+63 964 170 5633" },
  { label: "Languages", value: "English, Filipino/Tagalog, Native Minasbate", wide: true },
];

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const AboutSection = () => {
  return (
    <section id="about" className="section alt">
      <div className="inner">
        <motion.div {...reveal}>
          <span className="eyebrow">About Me</span>
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-[clamp(2.5rem,6vw,6rem)] items-center">
          <motion.p
            {...reveal}
            className="font-display font-normal text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.25] tracking-[-0.02em]"
          >
            <b className="font-extrabold text-primary">Graphic Designer &amp; Video Editor</b> with strong expertise in Adobe
            Illustrator, Photoshop, Premiere Pro, and After Effects. I specialize in creating{" "}
            <b className="font-extrabold text-primary">impactful graphics</b> and{" "}
            <b className="font-extrabold text-primary">AI-powered video content</b>, using next-generation tools like Google Flow,
            ElevenLabs, and Runway to streamline production and deliver engaging, high-converting visuals.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-[18px] overflow-hidden">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className={`bg-card p-[clamp(1.4rem,2.5vw,2.2rem)] ${item.wide ? "sm:col-span-2" : ""}`}
              >
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-primary font-semibold">{item.label}</p>
                <p className="mt-3 text-[1.05rem] font-semibold leading-snug break-words">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
