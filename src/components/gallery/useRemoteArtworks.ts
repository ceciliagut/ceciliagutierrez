import { useState, useEffect } from "react";
import type { Artwork, ArtworkCategory } from "./types";

const R2 = import.meta.env.PUBLIC_R2_URL;

interface LocalizedText {
  en: string;
  es: string;
}

interface GalleryEntry {
  slug: string;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  year?: number;
  images?: number;
  video?: string;
}

type GalleryManifest = Record<string, GalleryEntry[]>;
type Locale = "en" | "es";

interface RemoteGallery {
  artworks: Artwork[];
  titles: Record<string, string>;
  subtitles: Record<string, string>;
}

function getLocale(): Locale {
  if (typeof window !== "undefined" && window.location.pathname.startsWith("/es")) {
    return "es";
  }
  return "en";
}

function humanize(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function imageFilenames(count: number): string[] {
  return Array.from({ length: count }, (_, index) => `${String(index + 1).padStart(2, "0")}.jpg`);
}

export function useRemoteArtworks(): RemoteGallery {
  const [gallery, setGallery] = useState<RemoteGallery>({
    artworks: [],
    titles: {},
    subtitles: {},
  });

  useEffect(() => {
    const locale = getLocale();

    fetch(`${R2}/gallery.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((manifest: GalleryManifest | null) => {
        if (!manifest) return;

        const titles: Record<string, string> = {};
        const subtitles: Record<string, string> = {};

        const resolved = Object.entries(manifest).flatMap(([category, entries]) =>
          entries.map(({ slug, title, subtitle, year, images, video }): Artwork => {
            const artworkId = `${category}-${slug}`;
            const basePath = `${R2}/artwork/${category}/${slug}`;

            if (title?.[locale]) titles[artworkId] = title[locale];
            if (subtitle?.[locale]) subtitles[artworkId] = subtitle[locale];

            return {
              id: artworkId,
              images: imageFilenames(images ?? 1).map((file) => ({
                src: `${basePath}/${file}`,
                alt: title?.[locale] || humanize(slug),
              })),
              category: category as Exclude<ArtworkCategory, "all">,
              titleKey: artworkId,
              ...(year ? { year } : {}),
              ...(video ? { videoSrc: `${basePath}/${video}` } : {}),
            };
          })
        );

        setGallery({ artworks: resolved, titles, subtitles });
      })
      .catch(() => {});
  }, []);

  return gallery;
}
