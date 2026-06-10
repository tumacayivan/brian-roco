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
            <span className="font-bold text-primary">Graphic Designer & Video Editor</span> with strong Adobe skills and a passion for <span className="highlight-text">visual storytelling</span>. I specialize in <span className="highlight-text">generative AI</span> for video creation and editing, leveraging next-gen tools like <span className="font-bold">Google Flow, ElevenLabs, and Runway</span> to help businesses streamline production and build high-converting video content.
          </p>
          <p className="font-semibold text-lg md:text-xl">
            Proficient in <span className="highlight-text">industry-standard tools</span> such as the <span className="font-bold">Adobe Creative Suite</span>
            (Premiere Pro, After Effects, Photoshop, Illustrator) alongside <span className="highlight-text">web design</span> and <span className="highlight-text">real estate</span> experience. Skilled in
            <span className="highlight-text"> communication</span>, <span className="highlight-text">time management</span>, <span className="highlight-text">color grading</span>, and <span className="highlight-text">AI prompting</span>, with a focus on creating engaging visual content.
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
