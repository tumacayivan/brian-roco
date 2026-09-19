import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { illustrationIds } from "@/data/illustrations";
import DriveImage from "@/components/DriveImage";

const thumb = (id: string, w: number) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;

const GraphicsPortfolio = () => {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const step = (dir: number) =>
    setActive((i) => (i === null ? i : (i + dir + illustrationIds.length) % illustrationIds.length));

  return (
    <main className="pt-14">
      <section className="section pb-[clamp(2rem,4vw,3rem)]">
        <div className="inner">
          <Link
            to="/#graphics"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <h1 className="section-title mt-8">
            Illustration
            <br />
            <span className="text-primary">Archive</span>
          </h1>
          <p className="section-lead mt-7">
            Apparel graphics, signage, postcards and product art drawn in Illustrator and Photoshop.
          </p>
          <p className="meta mt-6">{illustrationIds.length} pieces</p>
        </div>
      </section>

      {/* Masonry bin, edge to edge */}
      <div className="columns-2 gap-px bg-border md:columns-3 xl:columns-4 [&>*]:mb-px">
        {illustrationIds.map((id, i) => (
          <motion.button
            key={id}
            type="button"
            onClick={() => setActive(i)}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block w-full break-inside-avoid overflow-hidden bg-card"
          >
            <DriveImage
              id={id}
              alt={`Illustration ${i + 1}`}
              width={900}
              className="block w-full transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />
          </motion.button>
        ))}
      </div>

      <section className="section">
        <div className="inner">
          <Link to="/#contact" className="btn btn-primary">
            Email me
          </Link>
        </div>
      </section>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[min(1100px,94vw)] border-border bg-background p-0 [&>button]:hidden">
          {active !== null && (
            <div>
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
    </main>
  );
};

export default GraphicsPortfolio;
