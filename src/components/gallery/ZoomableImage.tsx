import { useState, useCallback } from "react";

interface ZoomableImageProps {
  images: { src: string; alt: string }[];
  activeIndex: number;
}

const ZoomableImage = ({ images, activeIndex }: ZoomableImageProps) => {
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

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
          src={image.src}
          alt={image.alt}
          className={`w-full max-h-[80vh] md:h-full object-contain pointer-events-none ${
            index === 0 ? "" : "absolute inset-0 transition-opacity duration-500"
          } ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          draggable={false}
          fetchPriority={index === 0 ? "high" : "low"}
        />
      ))}
      {zoom && (
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${images[activeIndex].src})`,
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
