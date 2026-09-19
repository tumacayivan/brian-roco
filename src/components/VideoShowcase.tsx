import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import DriveImage from "@/components/DriveImage";

type Video = { id: string; title: string; kind: string };

/*
  Every id below was checked against Drive and returns a real file.
  Entries that 404'd ("Sorry, the file you have requested does not exist")
  have been dropped rather than rendered as broken embeds.
*/
const clientWork: Video[] = [
  { id: "1xtFqXmXNZzWBmCg-ubLDWs-lS85g8msp", title: "Riduge Brand Film", kind: "Brand" },
  { id: "1OQLCI4QWpWbvI8VjlUDWdy0hCWGp0T-u", title: "Riduge Moments", kind: "Brand" },
  { id: "1BRr0czDTlIsFuXV7jVFFHr-IPcgk-qbj", title: "Real Estate Walkthrough", kind: "Property" },
  { id: "1btrXzlgmRtqjd4hHysknCiLxOwFiI1JX", title: "Event Highlights", kind: "Highlights" },
];

const aiFilms: Video[] = [
  { id: "1Z2eevSVZCNp_iw-CjwhCfcvJgPAQFIQs", title: "AI Film 01", kind: "AI" },
  { id: "1nsc0JJFismuIbmrNXzGRIM32-aOxKPYl", title: "AI Film 02", kind: "AI" },
  { id: "1-8Ln6qh15eazWXAdciURNU8GbQPEq2Ac", title: "AI Film 03", kind: "AI" },
  { id: "1XTsX3dZaqenOZStJqWcJR6F9nZDt6ayg", title: "AI Film 04", kind: "AI" },
  { id: "1vohpjFCuYi1QEmfEZkzSUyybL-Ok1B0C", title: "AI Film 05", kind: "AI" },
  { id: "1VAChnJ8-ArRM_fxtKzlX_UWCuFbhp7es", title: "AI Film 06", kind: "AI" },
  { id: "1KX0CWdidG9Tv3A5hht5gHN007vb7DLHk", title: "AI Film 07", kind: "AI" },
  { id: "139UJfiU-izsnwZjl6eyxeebJtTvGEaz7", title: "AI Film 08", kind: "AI" },
  { id: "11ASUg0ZrBmrFYcnqN02pJyMatA8kcYm5", title: "AI Film 09", kind: "AI" },
  { id: "1xSI9as9n2AaEdCOM8ttPgtO7Q5KfDWKV", title: "AI Film 10", kind: "AI" },
  { id: "18FxLzAxnZWB_QO0ct-2FmszpiFVf1pBN", title: "AI Film 11", kind: "AI" },
];

const allVideos = [...clientWork, ...aiFilms];

const VideoShowcase = () => {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const step = (dir: number) =>
    setActive((i) => (i === null ? i : (i + dir + allVideos.length) % allVideos.length));

  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="portfolio" className="section pb-0">
      <div className="inner">
        <h2 className="section-title">
          Selected
          <br />
          <span className="text-primary">Film</span>
        </h2>
        <p className="section-lead mt-7">
          Brand films, property tours and AI-generated work. Fifteen pieces, cut for social and
          client delivery.
        </p>
      </div>

      {/* Client work: four large landscape frames, two up */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-1 gap-px bg-border md:grid-cols-2">
        {clientWork.map((video, i) => (
          <motion.button
            key={video.id}
            {...reveal(i)}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden bg-card text-left"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <DriveImage
                id={video.id}
                alt={video.title}
                width={1600}
                fallbackLabel={video.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center border border-white/60 bg-black/35 backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary group-hover:border-primary">
                  <Play className="h-6 w-6 translate-x-[2px] fill-white text-white" />
                </span>
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-extrabold leading-tight tracking-[-0.02em] text-white">
                  {video.title}
                </h3>
                <span className="meta shrink-0 text-white/75">{video.kind}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* AI films: dense poster wall, edge to edge */}
      <div className="mt-[clamp(3rem,6vw,5rem)]">
        <div className="inner mb-7 flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.8rem)] font-extrabold tracking-[-0.03em]">
            AI generated
          </h3>
          <span className="meta">{aiFilms.length} pieces</span>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {aiFilms.map((video, i) => (
            <motion.button
              key={video.id}
              {...reveal(i)}
              type="button"
              onClick={() => setActive(clientWork.length + i)}
              className="group relative block w-full overflow-hidden bg-card text-left"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <DriveImage
                  id={video.id}
                  alt={video.title}
                  fallbackLabel={video.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center border border-white/70 bg-black/40 backdrop-blur-sm">
                    <Play className="h-4 w-4 translate-x-[1px] fill-white text-white" />
                  </span>
                </span>
                <span className="meta absolute left-3 top-3 text-white/85 mix-blend-difference">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Player */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[min(1200px,94vw)] border-border bg-background p-0 [&>button]:hidden">
          {active !== null && (
            <div>
              <DialogTitle className="sr-only">{allVideos[active].title}</DialogTitle>
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-extrabold tracking-[-0.02em]">
                    {allVideos[active].title}
                  </p>
                  <p className="meta mt-0.5">
                    {active + 1} of {allVideos.length}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous video"
                    className="p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next video"
                    className="p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close player"
                    className="p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe
                  key={allVideos[active].id}
                  src={`https://drive.google.com/file/d/${allVideos[active].id}/preview`}
                  title={allVideos[active].title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoShowcase;
