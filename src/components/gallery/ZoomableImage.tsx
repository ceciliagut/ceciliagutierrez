import { useState, useCallback } from "react";

interface ZoomableImageProps {
  images: { src: string; alt: string }[];
  activeIndex: number;
}

const ZoomableImage = ({ images, activeIndex }: ZoomableImageProps) => {
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [resolvedSrcs, setResolvedSrcs] = useState<Record<number, string>>({});

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const getResolvedSrc = (index: number) => resolvedSrcs[index] ?? images[index].src;

  return (
    <div
      className="relative w-full md:h-full overflow-hidden cursor-default"
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onMouseMove={handleMouseMove}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={getResolvedSrc(index)}
          alt={image.alt}
          className={`w-full max-h-[80vh] md:h-full object-contain pointer-events-none transition-opacity duration-500 ${
            index === activeIndex
              ? "relative z-10 opacity-100"
              : "absolute inset-0 opacity-0"
          }`}
          draggable={false}
          fetchPriority={index === 0 ? "high" : "low"}
          loading={index === 0 ? "eager" : "lazy"}
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (img.src.endsWith('.jpg')) {
              const uppercaseSrc = image.src.replace(/\.jpg$/, '.JPG');
              setResolvedSrcs((prev) => ({ ...prev, [index]: uppercaseSrc }));
            }
          }}
        />
      ))}
      {zoom && (
        <div
          className="absolute inset-0 z-20 hidden md:block"
          style={{
            backgroundImage: `url(${getResolvedSrc(activeIndex)})`,
            backgroundSize: "200%",
            backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
};

export default ZoomableImage;
