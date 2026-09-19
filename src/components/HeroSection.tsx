import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

/*
  Hero reads as a Premiere workspace: source column on the left,
  program monitor on the right, playhead ruler along the bottom seam.
*/
const HeroSection = () => {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <header
      id="top"
      className="relative grid min-h-[100dvh] grid-cols-1 items-stretch pt-14 lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* Source column */}
      <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] pb-16 pt-14 lg:border-r lg:border-border lg:pb-24 lg:pt-10">
        <motion.div {...rise(0.05)} className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 bg-[#3fb27f]" aria-hidden="true" />
          <span className="meta text-foreground">Available for new projects</span>
        </motion.div>

        <motion.h1
          {...rise(0.14)}
          className="font-display text-[clamp(3rem,9.5vw,8.5rem)] font-black leading-[0.88] tracking-[-0.03em]"
        >
          Brian
          <br />
          Roco<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          {...rise(0.26)}
          className="max-w-[44ch] text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.45] text-muted-foreground"
        >
          <span className="font-semibold text-foreground">Video editor and illustrator.</span> I cut
          film and draw brand work in Premiere, After Effects, Illustrator and Photoshop.
        </motion.p>

        <motion.div {...rise(0.38)} className="flex flex-wrap gap-3">
          <a href="#portfolio" className="btn btn-primary">
            View work <ArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            <Mail /> Email me
          </a>
        </motion.div>
      </div>

      {/* Program monitor */}
      <div className="relative order-first flex min-h-[54svh] flex-col lg:order-last lg:min-h-full">
        <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2.5">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
            Program Monitor
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">
            Editor / Illustrator
          </span>
        </div>

        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 overflow-hidden bg-secondary"
        >
          <img
            src="/profile-picture.jpg"
            alt="Brian Roco"
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(200deg,transparent_50%,hsl(var(--background)/0.5))]"
            aria-hidden="true"
          />
        </motion.div>

        {/* Playhead ruler along the panel foot */}
        <div
          className="relative h-8 overflow-hidden border-t border-border bg-card"
          aria-hidden="true"
        >
          <div className="ruler absolute inset-x-0 top-0 h-2.5 opacity-70" />
          {/* transform-only playhead: the wrapper is full width, so x:34% lands at 34% of the ruler */}
          <motion.div
            initial={reduce ? false : { x: "0%" }}
            animate={{ x: "34%" }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 left-0 w-full"
          >
            <span className="absolute inset-y-0 left-0 w-px bg-primary" />
            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 bg-primary" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
