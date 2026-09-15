import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

const roles = ["Video Editor", "Graphic Designer", "Social Media Ad Manager", "General Virtual Assistant"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const HeroSection = () => {
  return (
    <header id="top" className="grid lg:grid-cols-[1.05fr_1fr] min-h-[100svh] bg-background">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-[60svh] lg:min-h-[100svh]"
      >
        <img
          src="/profile-picture.jpg"
          alt="Brian Rizo Roco"
          className="absolute inset-0 w-full h-full object-cover object-[center_22%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,hsl(var(--background)/0.65))]" />
        <div className="absolute left-5 bottom-5 md:left-8 md:bottom-8 z-10 flex items-center gap-3 rounded-full border border-foreground/20 bg-background/55 backdrop-blur-md px-4 py-2 text-sm font-medium">
          <span className="pulse-dot w-[9px] h-[9px] rounded-full bg-[#36d399]" />
          Open to new projects
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-7 px-[clamp(1.25rem,6vw,6rem)] py-12 lg:py-24">
        <motion.span {...fadeUp(0.1)} className="eyebrow">
          Graphic Designer &amp; Video Editor
        </motion.span>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold text-[clamp(3.2rem,8.5vw,8.5rem)] leading-[0.86] tracking-[-0.04em]"
        >
          Brian
          <br />
          <span className="text-primary">Roco.</span>
        </motion.h1>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2.5">
          {roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border px-3.5 py-1.5 text-[0.8rem] uppercase tracking-[0.08em] text-muted-foreground"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          {...fadeUp(0.4)}
          className="max-w-[46ch] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-muted-foreground"
        >
          <span className="text-foreground font-semibold">Graphic Designer &amp; Video Editor</span> with strong expertise in{" "}
          <span className="text-foreground font-semibold">Adobe Illustrator, Photoshop, Premiere Pro, and After Effects</span>. I specialize in
          creating impactful graphics and <span className="text-primary font-semibold">AI-powered video content</span>, using next-generation
          tools like Google Flow, ElevenLabs, and Runway to deliver engaging, high-converting visuals.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
          <a href="#portfolio" className="btn btn-primary">
            View Portfolio <ArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            <Mail /> Get in Touch
          </a>
        </motion.div>

        <motion.a
          {...fadeUp(0.6)}
          href="https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          View Full Info &amp; Portfolio on Google Drive
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>

        <motion.div
          {...fadeUp(0.7)}
          className="hidden lg:flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="scroll-line relative w-[50px] h-px overflow-hidden bg-muted-foreground" />
          Scroll to explore
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
