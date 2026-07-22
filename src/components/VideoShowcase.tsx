import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
          Featured Videos
        </h3>
        <p className="text-foreground font-semibold text-lg md:text-xl text-center mb-12 font-body max-w-3xl mx-auto">
          A selection of <span className="highlight-text">AI-generated videos</span> and other <span className="highlight-text">creative video content</span> with autoplay previews.
        </p>

        {videoCategories.map((category, catIdx) => {
          const offset = videoCategories
            .slice(0, catIdx)
            .reduce((n, c) => n + c.videos.length, 0);
          return (
            <div key={category.name} className={catIdx > 0 ? "mt-14" : ""}>
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <h4 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
                  {category.name}
                </h4>
                <a
                  href={category.folderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  View folder
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {category.videos.map((video, i) => {
                  const index = offset + i;
                  return (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                      className="group relative overflow-hidden rounded-lg glass-card cursor-pointer aspect-[9/16]"
                      onClick={() => setSelectedVideo(index)}
                    >
                      <div className="w-full h-full relative bg-secondary/20">
                        <iframe
                          src={getDriveVideoUrl(video.id, true)}
                          title={video.title}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                          loading="lazy"
                          style={{ pointerEvents: 'none' }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex items-center gap-2 text-white">
                            <Play className="w-8 h-8" />
                            <span className="font-body text-sm font-semibold">Click to view fullscreen</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white font-body text-xs">{video.title}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selectedVideo !== null && (
          <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>

                {videoFiles.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevVideo();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextVideo();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="relative">
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <iframe
                      src={getDriveVideoUrl(videoFiles[selectedVideo].id, true)}
                      title={videoFiles[selectedVideo].title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-body text-base">
                        {videoFiles[selectedVideo].title}
                      </p>
                      <a
                        href={videoFiles[selectedVideo].driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open in Google Drive
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    {videoFiles.length > 1 && (
                      <p className="text-white/70 text-xs mt-2 font-body">
                        {selectedVideo + 1} of {videoFiles.length}
                      </p>
                    )}
                  </div>
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
