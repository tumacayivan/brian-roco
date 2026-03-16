import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Image, Palette, Instagram, FileImage, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const graphicsCategories = [
  {
    icon: Palette,
    title: "Brand Kits",
    description: "Complete brand identity packages and design systems",
  },
  {
    icon: Instagram,
    title: "Social Media Graphics",
    description: "Instagram stories, posts, and social media content",
  },
  {
    icon: FileImage,
    title: "Marketing Materials",
    description: "Thumbnails, quotes, and promotional designs",
  },
  {
    icon: Sparkles,
    title: "Creative Projects",
    description: "Unique designs and visual storytelling pieces",
  },
];

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

const GraphicsPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const googleDriveLink = "https://drive.google.com/drive/folders/1qUntbeDGNkOa7lOXwSQ6TntDrMEXy_m4";

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
    <section className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl mb-4">Graphics Portfolio</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            A collection of branding, social media graphics, marketing materials, and visual storytelling projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Image className="w-10 h-10 text-primary" />
              </div>
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              View Complete Graphics Collection
            </h2>
            <p className="text-muted-foreground mb-8 font-body max-w-xl mx-auto">
              Explore all graphics work including brand kits, social media designs, marketing materials, 
              and creative projects in the Google Drive folder.
            </p>
            <a
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base tracking-wide rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              <span>Open Graphics Portfolio on Google Drive</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl mb-8 text-center">
            Featured Graphics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicsImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group relative overflow-hidden rounded-lg glass-card cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square overflow-hidden bg-secondary/20">
                  <img
                    src={getDriveImageUrl(image.id)}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if direct image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-body text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-display text-2xl md:text-3xl mb-8 text-center">
            Portfolio Categories
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graphicsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-display text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-body">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage !== null && (
            <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
              <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative"
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  {graphicsImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  <div className="relative">
                    <img
                      src={getDriveImageUrl(graphicsImages[selectedImage].id)}
                      alt={graphicsImages[selectedImage].alt}
                      className="w-full h-auto rounded-lg max-h-[85vh] object-contain mx-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://drive.google.com/thumbnail?id=${graphicsImages[selectedImage].id}&sz=w2000`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                      <div className="flex items-center justify-between">
                        <p className="text-white font-body text-base">
                          {graphicsImages[selectedImage].alt}
                        </p>
                        <a
                          href={graphicsImages[selectedImage].driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Open in Google Drive
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      {graphicsImages.length > 1 && (
                        <p className="text-white/70 text-xs mt-2 font-body">
                          {selectedImage + 1} of {graphicsImages.length}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-body text-sm">
            All graphics are available for viewing and download in the Google Drive folder above.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicsPortfolio;
