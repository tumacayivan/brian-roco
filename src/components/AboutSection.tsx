import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">About Me</h2>
        <div className="w-16 h-1 bg-primary mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-foreground leading-relaxed"
        >
          <p className="font-semibold text-lg md:text-xl">
            <span className="font-bold text-primary">Graphic Designer & Video Editor</span> with strong expertise in <span className="font-bold">Adobe Illustrator, Photoshop, Premiere Pro, and After Effects</span>. I specialize in creating <span className="highlight-text">impactful graphics</span> and <span className="highlight-text">AI-powered video content</span>, using next-generation tools like <span className="font-bold">Google Flow, ElevenLabs, and Runway</span> to streamline production and deliver <span className="highlight-text">engaging, high-converting visuals</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {[
            { label: "Location", value: "Cavite, Philippines" },
            { label: "Email", value: "rocobrian06@gmail.com" },
            { label: "Phone", value: "+63 964 170 5633" },
            // { label: "Website", value: "www.reallygreatsite.com" },
            { label: "Languages", value: "English, Filipino/Tagalog, Native Minasbate" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-5 md:p-6 break-words overflow-hidden">
              <p className="text-primary text-sm md:text-base uppercase tracking-widest mb-3 font-body font-bold">
                {item.label}
              </p>
              <p className="text-foreground text-base md:text-lg font-body font-semibold break-words leading-relaxed">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
