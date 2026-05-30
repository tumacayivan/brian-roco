import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left column - full-height, full-width profile picture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] lg:h-screen w-full"
        >
          <img
            src="/profile-picture.jpg"
            alt="Brian Rizo Roco"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
        </motion.div>

        {/* Right column - information */}
        <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-body font-bold text-sm md:text-base lg:text-lg tracking-[0.25em] uppercase mb-6"
            >
              <span className="highlight-bg">Video Editor</span> / <span className="highlight-bg">Graphic Designer</span> / <span className="highlight-bg">Web Designer</span> / <span className="highlight-bg">Virtual Assistant</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display font-black text-6xl md:text-8xl lg:text-8xl xl:text-9xl tracking-wide leading-none mb-6"
            >
              <span className="font-black">BRIAN</span>
              <br />
              <span className="text-gradient font-black">ROCO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-foreground font-body font-semibold text-base md:text-lg lg:text-xl mb-10 leading-relaxed"
            >
              <span className="font-bold">Graphic Designer &amp; Video Editor</span> with strong Adobe skills and a passion for <span className="highlight-text">visual storytelling</span>. I specialize in <span className="highlight-text">generative AI</span> for video creation, leveraging next-gen tools like Google Flow, ElevenLabs, and Runway to help businesses build high-converting content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-base tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-colors shadow-lg text-center"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary font-body font-bold text-base tracking-wider uppercase rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg text-center"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-4"
            >
              <a
                href="https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-body font-bold text-sm md:text-base tracking-wider uppercase hover:underline underline-offset-4"
              >
                View Full Info &amp; Portfolio on Google Drive
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
