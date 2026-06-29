import { Play, Image } from "lucide-react";
import BackLink from "./BackLink";

interface ArtworkInfoProps {
  title: string;
  subtitle?: string;
  year?: number;
  categoryLabel: string;
  imageIndex: number;
  imageCount: number;
  showVideo: boolean;
  hasMultipleImages: boolean;
  videoSrc?: string;
  viewArtworkLabel: string;
  watchProcessLabel: string;
  onToggleVideo: () => void;
  backLabel: string;
  backHref: string;
}

const ArtworkInfo = ({
  title,
  subtitle,
  year,
  categoryLabel,
  imageIndex,
  imageCount,
  showVideo,
  hasMultipleImages,
  videoSrc,
  viewArtworkLabel,
  watchProcessLabel,
  onToggleVideo,
  backLabel,
  backHref,
}: ArtworkInfoProps) => (
  <div className="flex-1 flex flex-col justify-center min-w-0">
    <div className="hidden md:block">
      <BackLink href={backHref} label={backLabel} />
    </div>

    <h1 className="font-display text-3xl md:text-5xl text-foreground leading-tight mt-8">
      {title}
    </h1>

    {subtitle && (
      <p className="font-body text-sm text-muted-foreground mt-3">{subtitle}</p>
    )}

    <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-6">
      {categoryLabel}{year ? ` — ${year}` : ""}
    </p>

    {hasMultipleImages && !showVideo && (
      <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mt-6 hidden md:block">
        {imageIndex + 1} / {imageCount}
      </p>
    )}

    {videoSrc && (
      <button
        onClick={onToggleVideo}
        className="mt-6 inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1 self-start"
      >
        {showVideo ? (
          <>
            <Image size={12} />
            {viewArtworkLabel}
          </>
        ) : (
          <>
            <Play size={12} />
            {watchProcessLabel}
          </>
        )}
      </button>
    )}
  </div>
);

export default ArtworkInfo;
