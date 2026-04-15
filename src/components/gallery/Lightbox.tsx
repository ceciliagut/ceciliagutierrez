import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Artwork } from "./types";

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const Lightbox = ({ artwork, onClose }: LightboxProps) => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hasMultipleImages = artwork ? artwork.images.length > 1 : false;

  const handleClose = useCallback(() => {
    setShowVideo(false);
    setImageIndex(0);
    onClose();
  }, [onClose]);

  const goPrev = useCallback(() => {
    setImageIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    if (!artwork) return;
    setImageIndex((i) => Math.min(i + 1, artwork.images.length - 1));
  }, [artwork]);

  // Reset state when artwork changes
  useEffect(() => {
    setImageIndex(0);
    setShowVideo(false);
  }, [artwork?.id]);

  // Keyboard navigation
  useEffect(() => {
    if (!artwork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft" && !showVideo) goPrev();
      if (e.key === "ArrowRight" && !showVideo) goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [artwork, showVideo, handleClose, goPrev, goNext]);

  // Preload other images
  useEffect(() => {
    if (!artwork) return;
    artwork.images.forEach((img, i) => {
      if (i !== 0) {
        const preload = new window.Image();
        preload.src = img.src;
      }
    });
  }, [artwork]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={handleClose}
        >
          <button
            className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
            onClick={handleClose}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center">
              {/* Left arrow */}
              {hasMultipleImages && !showVideo && (
                <button
                  onClick={goPrev}
                  disabled={imageIndex === 0}
                  className="absolute -left-14 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-20 disabled:cursor-default"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {showVideo && artwork.videoSrc ? (
                <video
                  src={artwork.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <img
                  key={imageIndex}
                  src={artwork.images[imageIndex].src}
                  alt={artwork.images[imageIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}

              {/* Right arrow */}
              {hasMultipleImages && !showVideo && (
                <button
                  onClick={goNext}
                  disabled={imageIndex === artwork.images.length - 1}
                  className="absolute -right-14 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-20 disabled:cursor-default"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="font-display text-2xl text-foreground">{t.gallery.titles[artwork.titleKey]}</p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {t.gallery.categories[artwork.category]}
              </p>
              {hasMultipleImages && !showVideo && (
                <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mt-2">
                  {imageIndex + 1} / {artwork.images.length}
                </p>
              )}
              {artwork.videoSrc && (
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="mt-4 inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1"
                >
                  {showVideo ? (
                    <>
                      <Image size={12} />
                      {t.gallery.viewArtwork}
                    </>
                  ) : (
                    <>
                      <Play size={12} />
                      {t.gallery.watchProcess}
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
