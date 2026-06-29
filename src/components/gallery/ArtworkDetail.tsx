import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageViewer from "./ImageViewer";
import ArtworkInfo from "./ArtworkInfo";
import BackLink from "./BackLink";

interface ArtworkDetailProps {
  images: { src: string; alt: string }[];
  videoSrc?: string;
  title: string;
  subtitle?: string;
  year?: number;
  categoryLabel: string;
  viewArtworkLabel: string;
  watchProcessLabel: string;
  backLabel: string;
  backHref: string;
}

const ArtworkDetail = ({
  images,
  videoSrc,
  title,
  subtitle,
  year,
  categoryLabel,
  viewArtworkLabel,
  watchProcessLabel,
  backLabel,
  backHref,
}: ArtworkDetailProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const goPrev = () => setImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const goNext = () => setImageIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && !showVideo) goPrev();
      if (event.key === "ArrowRight" && !showVideo) goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showVideo]);

  return (
    <div className="min-h-screen px-8 md:px-16 py-12 md:flex md:items-center">
      <div className="mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="md:hidden mb-4">
            <BackLink href={backHref} label={backLabel} />
          </div>

          <ImageViewer
            images={images}
            imageIndex={imageIndex}
            videoSrc={videoSrc}
            showVideo={showVideo}
            onPrev={goPrev}
            onNext={goNext}
            hasMultipleImages={hasMultipleImages}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArtworkInfo
              title={title}
              subtitle={subtitle}
              year={year}
              categoryLabel={categoryLabel}
              imageIndex={imageIndex}
              imageCount={images.length}
              showVideo={showVideo}
              hasMultipleImages={hasMultipleImages}
              videoSrc={videoSrc}
              viewArtworkLabel={viewArtworkLabel}
              watchProcessLabel={watchProcessLabel}
              onToggleVideo={() => setShowVideo(!showVideo)}
              backLabel={backLabel}
              backHref={backHref}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
