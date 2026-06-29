import { ChevronLeft, ChevronRight } from "lucide-react";
import ZoomableImage from "./ZoomableImage";

interface ImageViewerProps {
  images: { src: string; alt: string }[];
  imageIndex: number;
  videoSrc?: string;
  showVideo: boolean;
  onPrev: () => void;
  onNext: () => void;
  hasMultipleImages: boolean;
}

const ImageViewer = ({
  images,
  imageIndex,
  videoSrc,
  showVideo,
  onPrev,
  onNext,
  hasMultipleImages,
}: ImageViewerProps) => {
  const showCarousel = hasMultipleImages && !showVideo;

  return (
    <div className="md:w-2/3 flex-shrink-0">
      <div className="relative flex items-center md:h-[85vh]">
        {showVideo && videoSrc ? (
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <ZoomableImage images={images} activeIndex={imageIndex} />
        )}

        {showCarousel && (
          <>
            <button
              onClick={onPrev}
              className="absolute -left-12 text-muted-foreground hover:text-foreground transition-colors hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={onNext}
              className="absolute -right-12 text-muted-foreground hover:text-foreground transition-colors hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}
      </div>

      {showCarousel && (
        <div className="flex items-center justify-center gap-4 mt-4 md:hidden">
          <button
            onClick={onPrev}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="font-body text-[10px] tracking-[0.2em] text-muted-foreground">
            {imageIndex + 1} / {images.length}
          </span>
          <button
            onClick={onNext}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
