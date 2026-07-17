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
  dimensions?: string;
  description?: LocalizedText;
  images?: number;
  video?: string;
}

type GalleryManifest = Record<string, GalleryEntry[]>;

function humanize(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function imageFilenames(count: number): string[] {
  return Array.from({ length: count }, (_, index) => `${String(index + 1).padStart(2, "0")}.jpg`);
}

export interface ArtworkPageData {
  slug: string;
  category: string;
  images: { src: string; alt: string }[];
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  year?: number;
  dimensions?: string;
  description?: { en: string; es: string };
  videoSrc?: string;
}

export function getStaticPaths() {
  return fetchArtworks().then((artworks) =>
    artworks.map((artwork) => ({
      params: { slug: artwork.slug },
      props: { artwork },
    }))
  );
}

export async function fetchArtworks(): Promise<ArtworkPageData[]> {
  const res = await fetch(`${R2}/gallery.json`);
  if (!res.ok) throw new Error(`Failed to fetch gallery manifest: ${res.status}`);
  const manifest: GalleryManifest = await res.json();

  return Object.entries(manifest).flatMap(([category, entries]) =>
    entries.map(({ slug, title, subtitle, year, dimensions, description, images, video }) => {
      const basePath = `${R2}/artwork/${category}/${slug}`;
      const fallbackTitle = humanize(slug);

      return {
        slug: `${category}-${slug}`,
        category,
        images: imageFilenames(images ?? 1).map((file) => ({
          src: `${basePath}/${file}`,
          alt: title?.en || fallbackTitle,
        })),
        title: {
          en: title?.en || fallbackTitle,
          es: title?.es || fallbackTitle,
        },
        subtitle: {
          en: subtitle?.en || "",
          es: subtitle?.es || "",
        },
        ...(year ? { year } : {}),
        ...(dimensions ? { dimensions } : {}),
        ...(description ? { description: { en: description.en || "", es: description.es || "" } } : {}),
        ...(video ? { videoSrc: `${basePath}/${video}` } : {}),
      };
    })
  );
}
