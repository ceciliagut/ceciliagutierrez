# Tech Stack & Architecture

> Decision log and rationale for the current stack.

## Current Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Astro 6 (SSG) | Static site generation -- HTML at build time. Hero image is in the markup from the start, solving the LCP problem structurally. |
| **Interactive islands** | React 18 via `@astrojs/react` | Gallery section loads React + Framer Motion only when scrolled into view (`client:visible`). All other sections are zero-JS Astro components. |
| **Language** | TypeScript | Type safety across components, translations, and props. |
| **Styling** | Tailwind CSS 3 + semantic design tokens | Consistent theming via CSS custom properties (HSL). Dark mode via `class` strategy. |
| **Animations** | CSS keyframes + IntersectionObserver | Static sections use CSS `animation-delay` for entry effects and `data-animate` for scroll-triggered reveals. No JS framework needed. |
| **Gallery animations** | Framer Motion | Inside the React island only -- filter transitions, lightbox open/close, image carousel. |
| **i18n** | Astro file-based routing + translations file | `/` = English, `/es/` = Spanish. Translations passed as props, no React context. |
| **Theme** | `localStorage` + inline `<script>` | Dark/light toggle with FOUC prevention. No dependencies. |
| **Icons** | Inline SVG (static) + Lucide React (gallery) | Static sections use hand-inlined SVGs. Gallery island uses Lucide since it already loads React. |
| **SEO** | Built-in: hreflang, canonical, OG/Twitter, sitemap | `@astrojs/sitemap` generates sitemap. Per-page meta tags with correct locale. |

## Why Astro over Vite SPA?

The previous Vite SPA had a 3.19s LCP because the hero image couldn't paint until a 471KB JS bundle parsed and React rendered the DOM. This is a fundamental SPA limitation for content sites.

Astro SSG generates HTML at build time. The hero `<img>` exists in the markup from the start. Only the gallery section ships JavaScript (React + Framer Motion, loaded lazily via `client:visible`).

## Architecture

```
Static (zero JS)          React island (client:visible)
-----------------         ----------------------------
Hero                      Gallery
About                       - CategoryFilters
Writing                     - ArtworkGrid
Mentoring                   - Lightbox
Connect                     - Show more
404
```

## Image Strategy

Artwork source images are stored privately (not in the git repo). They're referenced from `public/artwork/` as static paths. Videos live in `public/videos/` with poster frames in `public/posters/`.

Future: Astro's built-in `<Picture>` component will handle responsive AVIF/WebP generation once source images are set up on Cloudflare R2 and pulled locally for builds.

## Deployment

- **Host**: Vercel (static output)
- **Cache**: `/_astro/` assets cached immutably (1 year). Artwork and video assets cached immutably.
- **Domain**: www.ceciliagutierrez.me

## Future Considerations

- Astro `<Picture>` for responsive image optimization (requires source images in `src/assets/`)
- CMS integration for artwork management
- E-commerce for prints/commissions
- Contact form
