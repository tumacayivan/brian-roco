import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
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
            <span className="font-bold text-primary">Creative and detail-oriented Property Specialist</span> with expertise in <span className="highlight-text">real estate</span>
            and <span className="highlight-text">digital content creation</span>. Experienced in assisting clients with property
            inquiries, presenting property listings, and guiding clients through purchase
            decisions. <span className="font-bold">Skilled in video editing and graphic design</span>, producing high-quality
            visual content that enhances property presentations and marketing materials.
          </p>
          <p className="font-semibold text-lg md:text-xl">
            Proficient in <span className="highlight-text">industry-standard tools</span> such as <span className="font-bold">Adobe Creative Suite</span>
            (Premiere Pro, After Effects, Photoshop, Illustrator), with strong skills in
            <span className="highlight-text"> critical thinking</span>, <span className="highlight-text">leadership</span>, <span className="highlight-text">communication</span>, and <span className="highlight-text">multitasking</span>. Passionate about
            <span className="highlight-text"> digital art</span>, <span className="highlight-text">drawing</span>, and creating engaging visual content.
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
            { label: "Location", value: "Pasay City, Philippines" },
            { label: "Email", value: "rocobrian28@gmail.com" },
            { label: "Phone", value: "09456323478" },
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
