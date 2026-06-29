import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const showCarousel = hasMultipleImages && !showVideo;

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

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
          <div
            className="relative w-full md:h-full overflow-hidden cursor-default"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMouseMove}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`w-full max-h-[80vh] md:h-full object-contain pointer-events-none ${
                  index === 0 ? "" : "absolute inset-0 transition-opacity duration-500"
                } ${index === imageIndex ? "opacity-100" : "opacity-0"}`}
                draggable={false}
                fetchPriority={index === 0 ? "high" : "low"}
              />
            ))}
            {zoom && (
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  backgroundImage: `url(${images[imageIndex].src})`,
                  backgroundSize: "200%",
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
          </div>
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
