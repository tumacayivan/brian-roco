import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body font-bold text-lg md:text-xl lg:text-2xl tracking-[0.3em] uppercase mb-6"
        >
          <span className="highlight-bg">Property Specialist</span> / <span className="highlight-bg">Video Editor</span> / <span className="highlight-bg">Graphic Designer</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-black text-7xl md:text-9xl lg:text-[12rem] tracking-wide leading-none mb-8"
        >
          <span className="font-black">BRIAN</span>
          <br />
          <span className="text-gradient font-black">ROCO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-foreground font-body font-semibold text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          <span className="font-bold">Creative and detail-oriented professional</span> with expertise in <span className="highlight-text">real estate</span>
          and <span className="highlight-text">digital content creation</span>. Experienced in <span className="highlight-text">property consultation</span>,
          <span className="highlight-text"> video editing</span>, and <span className="highlight-text">graphic design</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-base md:text-lg tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-primary text-primary font-body font-bold text-base md:text-lg tracking-wider uppercase rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
