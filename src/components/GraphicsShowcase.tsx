import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Convert Google Drive file links to direct image URLs
const getDriveImageUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

// Graphics images from Google Drive
const graphicsImages = [
  {
    id: "14E1CHWwKNuqwcE3Y5Os9DdJ3EDv_YA3Z",
    alt: "Graphic Design 1",
    driveLink: "https://drive.google.com/file/d/14E1CHWwKNuqwcE3Y5Os9DdJ3EDv_YA3Z/view?usp=drive_link",
  },
  {
    id: "1qLs86u9entGSnPg3dCo1u5PTQVcLq3FZ",
    alt: "Graphic Design 2",
    driveLink: "https://drive.google.com/file/d/1qLs86u9entGSnPg3dCo1u5PTQVcLq3FZ/view?usp=drive_link",
  },
  {
    id: "1IsDzHHcNdcLg4bLshjKzp581SYpujwSR",
    alt: "Graphic Design 3",
    driveLink: "https://drive.google.com/file/d/1IsDzHHcNdcLg4bLshjKzp581SYpujwSR/view?usp=drive_link",
  },
  {
    id: "1j0GnAG0c4C3IE74fV5QO1iQEFbI2_6rl",
    alt: "Graphic Design 4",
    driveLink: "https://drive.google.com/file/d/1j0GnAG0c4C3IE74fV5QO1iQEFbI2_6rl/view?usp=drive_link",
  },
  {
    id: "1iKplJOsbZanEf7iLl7reAuILwJryBv9c",
    alt: "Graphic Design 5",
    driveLink: "https://drive.google.com/file/d/1iKplJOsbZanEf7iLl7reAuILwJryBv9c/view?usp=drive_link",
  },
  {
    id: "1aAEvUGRLKIk8_TWEf9G0zzhunUvFyTS2",
    alt: "Graphic Design 6",
    driveLink: "https://drive.google.com/file/d/1aAEvUGRLKIk8_TWEf9G0zzhunUvFyTS2/view?usp=drive_link",
  },
  {
    id: "1R8Sbd5GY1c64_pV9bliF94H86uSDmoXM",
    alt: "Graphic Design 7",
    driveLink: "https://drive.google.com/file/d/1R8Sbd5GY1c64_pV9bliF94H86uSDmoXM/view?usp=drive_link",
  },
  {
    id: "1UHOD3X23GOsg32l5RCZLg6Sy8rnB6ctE",
    alt: "Graphic Design 8",
    driveLink: "https://drive.google.com/file/d/1UHOD3X23GOsg32l5RCZLg6Sy8rnB6ctE/view?usp=drive_link",
  },
  {
    id: "1jg1dcsF7I3MvYnZT6alM63KipQn8FNIw",
    alt: "Graphic Design 9",
    driveLink: "https://drive.google.com/file/d/1jg1dcsF7I3MvYnZT6alM63KipQn8FNIw/view?usp=drive_link",
  },
  {
    id: "1orZ-fuDXVQnAbr3WzRN0v0nagV0_OjfF",
    alt: "Graphic Design 10",
    driveLink: "https://drive.google.com/file/d/1orZ-fuDXVQnAbr3WzRN0v0nagV0_OjfF/view?usp=drive_link",
  },
  {
    id: "1BML-JWVPaBK5D-orQncaj2F3OlqkWSJH",
    alt: "Graphic Design 11",
    driveLink: "https://drive.google.com/file/d/1BML-JWVPaBK5D-orQncaj2F3OlqkWSJH/view?usp=drive_link",
  },
  {
    id: "1tRTq_MlkcwUuA6iyDSefhTOH40QKv2ww",
    alt: "Graphic Design 12",
    driveLink: "https://drive.google.com/file/d/1tRTq_MlkcwUuA6iyDSefhTOH40QKv2ww/view?usp=drive_link",
  },
  {
    id: "18lf40HCgUyvSpkKHHXamjwcNpo0HDANG",
    alt: "Graphic Design 13",
    driveLink: "https://drive.google.com/file/d/18lf40HCgUyvSpkKHHXamjwcNpo0HDANG/view?usp=drive_link",
  },
  {
    id: "11ze9IpA_WaDx1covaqOcC-6WSfiCoZGD",
    alt: "Graphic Design 14",
    driveLink: "https://drive.google.com/file/d/11ze9IpA_WaDx1covaqOcC-6WSfiCoZGD/view?usp=drive_link",
  },
  {
    id: "1otn-5yWqn7mW5IIq507xDhVqUNu22JSP",
    alt: "Graphic Design 15",
    driveLink: "https://drive.google.com/file/d/1otn-5yWqn7mW5IIq507xDhVqUNu22JSP/view?usp=drive_link",
  },
];

const GraphicsShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const googleDriveLink = "https://drive.google.com/drive/folders/1m_Kr2MkQUtSOJswjIGXKebG7GrlsW8Ft";

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % graphicsImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + graphicsImages.length) % graphicsImages.length);
    }
  };

  return (
    <section id="graphics" className="section alt">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Design</span>
          <h2 className="section-title">
            Featured
            <br />
            Graphics
          </h2>
          <p className="section-lead">
            A selection of Adobe design work, branding, social media graphics, marketing materials, and visual storytelling projects.
          </p>
        </motion.div>

        <div className="pt-[clamp(3rem,6vw,5rem)]">
          <h3 className="mb-6 flex items-baseline gap-4 font-display font-extrabold text-[clamp(1.7rem,4vw,3rem)] tracking-[-0.02em]">
            Adobe Works
            <span className="font-body font-medium text-[0.95rem] tracking-[0.1em] text-muted-foreground">
              {graphicsImages.length} pieces
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[clamp(0.8rem,1.4vw,1.3rem)]">
            {graphicsImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="group relative aspect-[3/4] rounded-[14px] overflow-hidden bg-card border border-border cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={getDriveImageUrl(image.id)}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if direct image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`;
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="grid place-items-center w-14 h-14 rounded-full bg-primary text-primary-foreground">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            View all Adobe works &amp; graphics on Google Drive
            <ArrowUpRight />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none [&>button]:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-14 right-0 z-10 grid place-items-center w-11 h-11 rounded-full border border-foreground/20 bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:rotate-90 transition-all duration-300"
                  aria-label="Close image"
                >
                  <X className="w-5 h-5" />
                </button>

                <img
                  src={getDriveImageUrl(graphicsImages[selectedImage].id)}
                  alt={graphicsImages[selectedImage].alt}
                  className="w-auto max-w-full h-auto rounded-2xl max-h-[78vh] object-contain mx-auto shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://drive.google.com/thumbnail?id=${graphicsImages[selectedImage].id}&sz=w2000`;
                  }}
                />

                <div className="mt-4 flex items-center justify-between gap-3 text-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="grid place-items-center w-11 h-11 rounded-full border border-white/25 hover:bg-primary hover:border-primary transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="text-center">
                    <p className="text-sm font-semibold">{graphicsImages[selectedImage].alt}</p>
                    <a
                      href={graphicsImages[selectedImage].driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/70 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {selectedImage + 1} of {graphicsImages.length} · Open in Google Drive ↗
                    </a>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="grid place-items-center w-11 h-11 rounded-full border border-white/25 hover:bg-primary hover:border-primary transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GraphicsShowcase;
