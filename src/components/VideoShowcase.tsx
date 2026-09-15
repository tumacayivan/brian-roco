import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Convert Google Drive file links to embeddable video URLs
const getDriveVideoUrl = (fileId: string, autoplay: boolean = false) => {
  // Google Drive preview URL - autoplay may be limited by browser policies
  const baseUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  return baseUrl;
};

// Video portfolio organized by categories
const videoCategories = [
  {
    name: "AI Generated Videos",
    folderLink: "https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS?usp=sharing",
    videos: [
      { id: "1Z2eevSVZCNp_iw-CjwhCfcvJgPAQFIQs", title: "AI Video 1", driveLink: "https://drive.google.com/file/d/1Z2eevSVZCNp_iw-CjwhCfcvJgPAQFIQs/view?usp=sharing" },
      { id: "1nsc0JJFismuIbmrNXzGRIM32-aOxKPYl", title: "AI Video 2", driveLink: "https://drive.google.com/file/d/1nsc0JJFismuIbmrNXzGRIM32-aOxKPYl/view?usp=sharing" },
      { id: "10onuUhqQA2n07Px9buaPry9lirC-3wPc", title: "AI Video 3", driveLink: "https://drive.google.com/file/d/10onuUhqQA2n07Px9buaPry9lirC-3wPc/view?usp=sharing" },
      { id: "1WG4BE4OctpTpjCCwn6-he6ZOn6bCypyB", title: "AI Video 4", driveLink: "https://drive.google.com/file/d/1WG4BE4OctpTpjCCwn6-he6ZOn6bCypyB/view?usp=sharing" },
      { id: "1h1ZXQfw8dolxcmRIf95ATsOZO3o0wsXu", title: "AI Video 5", driveLink: "https://drive.google.com/file/d/1h1ZXQfw8dolxcmRIf95ATsOZO3o0wsXu/view?usp=sharing" },
      { id: "1-8Ln6qh15eazWXAdciURNU8GbQPEq2Ac", title: "AI Video 6", driveLink: "https://drive.google.com/file/d/1-8Ln6qh15eazWXAdciURNU8GbQPEq2Ac/view?usp=sharing" },
      { id: "1XTsX3dZaqenOZStJqWcJR6F9nZDt6ayg", title: "AI Video 7", driveLink: "https://drive.google.com/file/d/1XTsX3dZaqenOZStJqWcJR6F9nZDt6ayg/view?usp=sharing" },
      { id: "1vohpjFCuYi1QEmfEZkzSUyybL-Ok1B0C", title: "AI Video 8", driveLink: "https://drive.google.com/file/d/1vohpjFCuYi1QEmfEZkzSUyybL-Ok1B0C/view?usp=sharing" },
      { id: "1VAChnJ8-ArRM_fxtKzlX_UWCuFbhp7es", title: "AI Video 9", driveLink: "https://drive.google.com/file/d/1VAChnJ8-ArRM_fxtKzlX_UWCuFbhp7es/view?usp=sharing" },
      { id: "1jYCmety_a-afMpgbTrp-rTf9iBg7-cTK", title: "AI Video 10", driveLink: "https://drive.google.com/file/d/1jYCmety_a-afMpgbTrp-rTf9iBg7-cTK/view?usp=sharing" },
      { id: "1KX0CWdidG9Tv3A5hht5gHN007vb7DLHk", title: "AI Video 11", driveLink: "https://drive.google.com/file/d/1KX0CWdidG9Tv3A5hht5gHN007vb7DLHk/view?usp=sharing" },
      { id: "139UJfiU-izsnwZjl6eyxeebJtTvGEaz7", title: "AI Video 12", driveLink: "https://drive.google.com/file/d/139UJfiU-izsnwZjl6eyxeebJtTvGEaz7/view?usp=sharing" },
      { id: "11ASUg0ZrBmrFYcnqN02pJyMatA8kcYm5", title: "AI Video 13", driveLink: "https://drive.google.com/file/d/11ASUg0ZrBmrFYcnqN02pJyMatA8kcYm5/view?usp=sharing" },
      { id: "1xSI9as9n2AaEdCOM8ttPgtO7Q5KfDWKV", title: "AI Video 14", driveLink: "https://drive.google.com/file/d/1xSI9as9n2AaEdCOM8ttPgtO7Q5KfDWKV/view?usp=sharing" },
      { id: "18P6UULgkbgB-IW61uUVIp9164R4m5RH6", title: "AI Video 15", driveLink: "https://drive.google.com/file/d/18P6UULgkbgB-IW61uUVIp9164R4m5RH6/view?usp=sharing" },
      { id: "1398jmyaexU2WFZNPdiG0x1b0Xo7wriaj", title: "AI Video 16", driveLink: "https://drive.google.com/file/d/1398jmyaexU2WFZNPdiG0x1b0Xo7wriaj/view?usp=sharing" },
      { id: "18FxLzAxnZWB_QO0ct-2FmszpiFVf1pBN", title: "AI Video 17", driveLink: "https://drive.google.com/file/d/18FxLzAxnZWB_QO0ct-2FmszpiFVf1pBN/view?usp=sharing" },
    ],
  },
  {
    name: "Random",
    folderLink: "https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS?usp=sharing",
    videos: [
      { id: "1QSukmj-MahdVKrrdK81uaYYksM7Zjmk8", title: "Random 1", driveLink: "https://drive.google.com/file/d/1QSukmj-MahdVKrrdK81uaYYksM7Zjmk8/view?usp=drive_link" },
      { id: "1xtFqXmXNZzWBmCg-ubLDWs-lS85g8msp", title: "Random 2", driveLink: "https://drive.google.com/file/d/1xtFqXmXNZzWBmCg-ubLDWs-lS85g8msp/view?usp=drive_link" },
      { id: "1OQLCI4QWpWbvI8VjlUDWdy0hCWGp0T-u", title: "Random 3", driveLink: "https://drive.google.com/file/d/1OQLCI4QWpWbvI8VjlUDWdy0hCWGp0T-u/view?usp=drive_link" },
      { id: "1iG1pyxZcKWzibsRJ9odiCmoptCSbOecy", title: "Random 4", driveLink: "https://drive.google.com/file/d/1iG1pyxZcKWzibsRJ9odiCmoptCSbOecy/view?usp=drive_link" },
      { id: "1wcwVRPTXHa6vp2x7CWl48ikKVJBtmmpy", title: "Random 5", driveLink: "https://drive.google.com/file/d/1wcwVRPTXHa6vp2x7CWl48ikKVJBtmmpy/view?usp=drive_link" },
      { id: "17HU8RQTwLR3iI5Q75G78ctwsdcagOclq", title: "Random 6", driveLink: "https://drive.google.com/file/d/17HU8RQTwLR3iI5Q75G78ctwsdcagOclq/view?usp=drive_link" },
      { id: "1xgGQK5zCB1VF2Bx3RZK6gnShyExUX5R8", title: "Random 7", driveLink: "https://drive.google.com/file/d/1xgGQK5zCB1VF2Bx3RZK6gnShyExUX5R8/view?usp=drive_link" },
      { id: "1ArONvOsSIfk6I96PZg7t13v7n1cx3zZ1", title: "Random 8", driveLink: "https://drive.google.com/file/d/1ArONvOsSIfk6I96PZg7t13v7n1cx3zZ1/view?usp=drive_link" },
      { id: "1jXT_SqklvwOwUvox0_LXEYeEdI3w1d11", title: "Random 9", driveLink: "https://drive.google.com/file/d/1jXT_SqklvwOwUvox0_LXEYeEdI3w1d11/view?usp=sharing" },
      { id: "1fATsis7Ta6l-t8UQi-oeWOvvXTBxs0Wr", title: "Random 10", driveLink: "https://drive.google.com/file/d/1fATsis7Ta6l-t8UQi-oeWOvvXTBxs0Wr/view?usp=sharing" },
      { id: "1BRr0czDTlIsFuXV7jVFFHr-IPcgk-qbj", title: "Random 11", driveLink: "https://drive.google.com/file/d/1BRr0czDTlIsFuXV7jVFFHr-IPcgk-qbj/view?usp=sharing" },
      { id: "1btrXzlgmRtqjd4hHysknCiLxOwFiI1JX", title: "Random 12", driveLink: "https://drive.google.com/file/d/1btrXzlgmRtqjd4hHysknCiLxOwFiI1JX/view?usp=sharing" },
      { id: "103re9PIYEWCLEKI9A7PJdXSOqoZhFnEX", title: "Random 13", driveLink: "https://drive.google.com/file/d/103re9PIYEWCLEKI9A7PJdXSOqoZhFnEX/view?usp=sharing" },
      { id: "1MkBcnygN4vqmMs9EsxsHVNZWwIoxDv22", title: "Random 14", driveLink: "https://drive.google.com/file/d/1MkBcnygN4vqmMs9EsxsHVNZWwIoxDv22/view?usp=sharing" },
      { id: "15gW6LQ4ncWnsyzDanK2BHPt1mx7bMuV6", title: "Random 15", driveLink: "https://drive.google.com/file/d/15gW6LQ4ncWnsyzDanK2BHPt1mx7bMuV6/view?usp=sharing" },
    ],
  },
];

// Flatten all videos for the showcase
const videoFiles = videoCategories.flatMap(category => category.videos);

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const nextVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo + 1) % videoFiles.length);
    }
  };

  const prevVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo - 1 + videoFiles.length) % videoFiles.length);
    }
  };

  return (
    <>
      <div className="mt-[clamp(4rem,8vw,7rem)] flex flex-wrap items-end justify-between gap-8">
        <motion.h3
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[clamp(2.2rem,5.5vw,4.6rem)] leading-[0.96] tracking-[-0.03em]"
        >
          Featured
          <br />
          Videos
        </motion.h3>
        <p className="section-lead">
          A selection of <span className="text-foreground font-semibold">AI-generated videos</span> and other{" "}
          <span className="text-foreground font-semibold">creative video content</span> with autoplay previews.
        </p>
      </div>

      {videoCategories.map((category, catIdx) => {
        const offset = videoCategories
          .slice(0, catIdx)
          .reduce((n, c) => n + c.videos.length, 0);
        return (
          <div key={category.name} className="pt-[clamp(3rem,6vw,5rem)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-baseline justify-between gap-6 mb-[clamp(1.8rem,3vw,2.8rem)]"
            >
              <div className="flex flex-wrap items-baseline gap-5">
                <span className="font-display font-semibold text-primary text-lg">{String(catIdx + 1).padStart(2, "0")}</span>
                <h4 className="font-display font-extrabold text-[clamp(2rem,5vw,3.8rem)] tracking-[-0.03em] leading-none">
                  {category.name}
                </h4>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[0.85rem] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                  {category.videos.length} Projects
                </span>
                <a
                  href={category.folderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  View folder
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[clamp(0.7rem,1.6vw,1.5rem)]">
              {category.videos.map((video, i) => {
                const index = offset + i;
                return (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 38 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] hover:border-foreground/20"
                      onClick={() => setSelectedVideo(index)}
                    >
                      <iframe
                        src={getDriveVideoUrl(video.id, true)}
                        title={video.title}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-[1.07]"
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        style={{ pointerEvents: "none" }}
                      />
                      <span className="absolute top-3 left-3 rounded-md bg-background/55 backdrop-blur-sm px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-foreground">
                        {category.name}
                      </span>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 grid place-items-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-sm font-semibold">{video.title}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}

      <AnimatePresence>
        {selectedVideo !== null && (
          <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-[min(92vw,460px)] w-full p-0 bg-transparent border-none shadow-none [&>button]:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-14 right-0 z-10 grid place-items-center w-11 h-11 rounded-full border border-foreground/20 bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:rotate-90 transition-all duration-300"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[9/16] max-h-[78vh] mx-auto w-full bg-black rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
                  <iframe
                    src={getDriveVideoUrl(videoFiles[selectedVideo].id, true)}
                    title={videoFiles[selectedVideo].title}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 text-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevVideo();
                    }}
                    className="grid place-items-center w-11 h-11 rounded-full border border-white/25 hover:bg-primary hover:border-primary transition-colors"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="text-center">
                    <p className="text-sm font-semibold">{videoFiles[selectedVideo].title}</p>
                    <a
                      href={videoFiles[selectedVideo].driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/70 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {selectedVideo + 1} of {videoFiles.length} · Open in Google Drive ↗
                    </a>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextVideo();
                    }}
                    className="grid place-items-center w-11 h-11 rounded-full border border-white/25 hover:bg-primary hover:border-primary transition-colors"
                    aria-label="Next video"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoShowcase;
