# Gallery System

How the artwork gallery works end-to-end: data model, image storage, thumbnails, and how to add new work.

## Architecture

The gallery is driven by a single `gallery.json` manifest hosted on Cloudflare R2. The site is Astro SSG, so pages are generated at build time by fetching this manifest.

Two consumers read the manifest independently:

- **`gallery-data.ts`** — used by Astro's `getStaticPaths` to generate individual artwork pages (`/gallery/{category}-{slug}`)
- **`useRemoteArtworks.ts`** — React hook used by the gallery grid component on the homepage

Both must stay in sync with the manifest schema. If one is updated without the other, pages will silently break (404s or missing data).

## gallery.json Schema

The manifest is a JSON object keyed by category (`oil`, `charcoal`, `digital`, `pastel`):

```json
{
  "oil": [
    {
      "slug": "painting-slug",
      "title": { "en": "English Title", "es": "Spanish Title" },
      "subtitle": { "en": "...", "es": "..." },
      "images": 3,
      "thumbnail": "thumb.jpg",
      "year": 2026,
      "dimensions": "46x55cm",
      "video": "01.mp4"
    }
  ]
}
```

| Field | Required | Notes |
|-------|----------|-------|
| `slug` | Yes | Kebab-case. No category prefix — the code prepends `{category}-` automatically. |
| `title` | No | Localized. Falls back to humanized slug if omitted. |
| `subtitle` | No | Localized. |
| `images` | No | Number of full-res images. Defaults to 1. |
| `thumbnail` | No | Explicit filename for the grid thumbnail. Not auto-detected. |
| `video` | No | Filename for process video. |
| `year` | No | Year the work was created. |
| `dimensions` | No | Physical dimensions as a string. |

## Image Storage (Cloudflare R2)

Images are stored at: `{R2_URL}/artwork/{category}/{slug}/`

### Full-resolution images

- Named sequentially with zero-padding: `01.jpg`, `02.jpg`, `03.jpg`, ...
- Used on the detail page (`/gallery/{category}-{slug}`)
- The `images` count in `gallery.json` must match the number of files

### Thumbnails

- Filename specified explicitly in the `thumbnail` field (typically `thumb.jpg`)
- Used in the gallery grid on the homepage for faster loading and to avoid moire patterns from downscaling large images
- If no thumbnail is specified, the grid falls back to the first full-res image
- Should be a smaller, optimized version of the painting — enough quality for grid display, not full detail

### Videos

- Optional process videos stored in the same folder
- Referenced by the `video` field in the manifest

## URL Structure

- Gallery grid: `/#gallery` (homepage section)
- Detail page: `/gallery/{category}-{slug}` (e.g., `/gallery/oil-dama-con-abanico`)
- Spanish: `/es/gallery/{category}-{slug}`

## Adding New Artwork

1. **Upload images to R2** at `artwork/{category}/{slug}/`
   - Full-res: `01.jpg`, `02.jpg`, etc.
   - Thumbnail: `thumb.jpg` (recommended)

2. **Update `gallery.json` on R2** — add the entry to the appropriate category array

3. **Redeploy the website** — this is the step that's easy to forget. Since Astro generates pages at build time, the site won't have a page for the new artwork until it's rebuilt.
   - Vercel dashboard: open the project, click "Redeploy" on the latest production deployment
   - Or push any commit to `main` via PR

4. **Verify** — visit the detail page URL and check the gallery grid
