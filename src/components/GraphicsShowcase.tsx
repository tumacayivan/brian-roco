import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { illustrationIds } from "@/data/illustrations";
import DriveImage from "@/components/DriveImage";

const thumb = (id: string, w: number) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;

const GraphicsShowcase = () => {
  const [active, setActive] = useState<number | null>(null);
  const rail = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const step = (dir: number) =>
    setActive((i) => (i === null ? i : (i + dir + illustrationIds.length) % illustrationIds.length));

  const scrollRail = (dir: number) =>
    rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.7, behavior: reduce ? "auto" : "smooth" });

  return (
    <section id="graphics" className="section alt">
      <div className="inner flex flex-wrap items-end justify-between gap-x-10 gap-y-7">
        <h2 className="section-title">
          Illustration
          <br />
          <span className="text-primary">&amp; Print</span>
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            aria-label="Scroll illustrations left"
            className="border border-border p-3.5 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            aria-label="Scroll illustrations right"
            className="border border-border p-3.5 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <p className="section-lead inner mt-6">
        Apparel graphics, signage, postcards and product art drawn in Illustrator and Photoshop for
        US marketing and fundraising clients.
      </p>

      {/* Horizontal rail, running off the right edge of the viewport */}
      <div
        ref={rail}
        className="no-scrollbar mt-[clamp(2.5rem,5vw,4rem)] flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-2"
      >
        {illustrationIds.map((id, i) => (
          <motion.button
            key={id}
            type="button"
            onClick={() => setActive(i)}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: Math.min(i, 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-[76vw] shrink-0 snap-start overflow-hidden bg-card sm:w-[46vw] lg:w-[30vw] xl:w-[23vw]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <DriveImage
                id={id}
                alt={`Illustration ${i + 1}`}
                width={900}
                className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
            </div>
          </motion.button>
        ))}
      </div>

      <div className="inner mt-[clamp(2.5rem,5vw,4rem)]">
        <Link to="/graphics" className="btn btn-primary">
          Browse all illustration <ArrowRight />
        </Link>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[min(1100px,94vw)] border-border bg-background p-0 [&>button]:hidden">
          {active !== null && (
            <div>
              <DialogTitle className="sr-only">Illustration {active + 1}</DialogTitle>
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
                <p className="meta">
                  {active + 1} of {illustrationIds.length}
                </p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous illustration"
                    className="p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next illustration"
                    className="p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close viewer"
                    className="p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <img
                src={thumb(illustrationIds[active], 2000)}
                alt={`Illustration ${active + 1}`}
                className="max-h-[78vh] w-full bg-secondary object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GraphicsShowcase;
