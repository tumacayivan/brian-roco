import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Clip = {
  title: string;
  company: string;
  discipline: string;
  description: string;
  /** Lane the clip sits on, matching the track list on the left. */
  track: "V2" | "V1" | "A1";
  /** Position and width across the timeline, as percentages. */
  start: number;
  width: number;
};

const clips: Clip[] = [
  {
    title: "Graphic Designer",
    company: "UZ Marketing",
    discipline: "Print & Signage",
    description:
      "Flyers, premium postcards, yard signs, banners, car magnets, brochures, business cards, stickers and apparel, all drawn to brand spec in Illustrator and Photoshop.",
    track: "V1",
    start: 0,
    width: 26,
  },
  {
    title: "Graphic Designer",
    company: "Fundraiser Blankets",
    discipline: "Product Art",
    description:
      "Product graphics for blankets, towels and rally items across a roster of schools, matching each school's identity.",
    track: "V1",
    start: 27,
    width: 24,
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Rovawork Philippines",
    discipline: "Video & Design",
    description:
      "Corporate video for Timmerman Industries and other clients. Turned raw footage into finished narratives for marketing and digital channels.",
    track: "V2",
    start: 52,
    width: 48,
  },
  {
    title: "Property Specialist",
    company: "Ayala Land",
    discipline: "Real Estate",
    description:
      "Managed transactions and client acquisition for the country's largest developer. Lead generation, negotiation and listing marketing.",
    track: "A1",
    start: 8,
    width: 30,
  },
];

const tracks: Clip["track"][] = ["V2", "V1", "A1"];

const trackTone: Record<Clip["track"], string> = {
  // Premiere colours its video clips violet and its audio clips green.
  V2: "bg-primary/22 border-primary/60 hover:bg-primary/32",
  V1: "bg-primary/14 border-primary/45 hover:bg-primary/26",
  A1: "bg-[#3fb27f]/16 border-[#3fb27f]/50 hover:bg-[#3fb27f]/28",
};

const ExperienceSection = () => {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  const active = clips[open];

  return (
    <section id="experience" className="section alt">
      <div className="inner">
        <h2 className="section-title">
          Career
          <br />
          <span className="text-primary">Timeline</span>
        </h2>
        <p className="section-lead mt-7">
          Four roles laid out on tracks. Pick a clip to read what the work involved.
        </p>
      </div>

      {/* Timeline panel */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] border-y border-border bg-background">
        <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[4.5rem_1fr]">
          {tracks.map((track) => (
            <div key={track} className="contents">
              {/* Track head */}
              <div className="flex items-center justify-center border-b border-r border-border bg-card py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                {track}
              </div>
              {/* Lane */}
              <div className="relative border-b border-border" style={{ minHeight: "4.25rem" }}>
                <div className="ruler absolute inset-0 opacity-25" aria-hidden="true" />
                {clips.map((clip, i) =>
                  clip.track !== track ? null : (
                    <motion.button
                      key={clip.title + clip.company}
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-pressed={open === i}
                      initial={reduce ? false : { scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        left: `${clip.start}%`,
                        width: `${clip.width}%`,
                        transformOrigin: "left center",
                      }}
                      className={`absolute inset-y-2 flex flex-col justify-center overflow-hidden border px-3 text-left transition-colors duration-300 ${
                        trackTone[clip.track]
                      } ${open === i ? "ring-1 ring-inset ring-foreground/70" : ""}`}
                    >
                      <span className="truncate font-mono text-[0.68rem] uppercase tracking-[0.12em] text-foreground/70">
                        {clip.discipline}
                      </span>
                      <span className="truncate text-[0.9rem] font-semibold leading-tight text-foreground">
                        {clip.company}
                      </span>
                    </motion.button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected clip detail */}
      <div className="inner mt-[clamp(2rem,4vw,3.5rem)]">
        <motion.div
          key={active.title + active.company}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-x-12 gap-y-5 md:grid-cols-[1fr_1.25fr]"
        >
          <div>
            <p className="meta text-primary">{active.discipline}</p>
            <h3 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              {active.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{active.company}</p>
          </div>
          <p className="max-w-[62ch] text-[1.02rem] leading-relaxed text-muted-foreground">
            {active.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
