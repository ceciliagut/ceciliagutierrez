# Design System

Reference for all design tokens, patterns, and conventions used across the personal website.

> This document is the source of truth. The live visual reference is at `/design-system` when running `npm run dev`.

---

## Color Tokens

All colors are defined as HSL values in CSS custom properties (`src/styles/global.css`) and consumed via Tailwind (`tailwind.config.ts`).

### Palette

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | `0 0% 100%` (white) | `25 40% 14%` (warm dark brown) | Page background |
| `--foreground` | `25 40% 22%` (warm brown) | `0 0% 100%` (white) | Primary text, headings |
| `--primary` | `355 67% 48%` (crimson) | `355 67% 48%` (same) | Link hover, accent actions |
| `--primary-foreground` | `0 0% 100%` | `0 0% 100%` | Text on primary |
| `--muted` | `1 30% 93%` (pale blush) | `25 25% 18%` (dark warm) | Subtle backgrounds, shimmer |
| `--muted-foreground` | `25 25% 40%` (warm gray) | `0 0% 70%` (light gray) | Body text, labels, metadata |
| `--card-foreground` | `25 40% 22%` | `0 0% 100%` | Gallery heading, 404 heading |
| `--border` | `1 20% 88%` (warm gray) | `25 25% 22%` (dark warm) | Borders, dividers |

### Other Tokens

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.25rem` | Base border radius |

### Selection Colors

- Light: `hsl(38 70% 60% / 0.3)` background, `hsl(25 40% 15%)` text
- Dark: `hsl(38 50% 50% / 0.2)` background, white text

---

## Typography

Three font families, each with a specific role:

| Family | CSS Variable | Tailwind Class | Role |
|---|---|---|---|
| Cormorant Garamond | `--font-display` | `font-display` | Headings, artwork titles, section names |
| DM Sans | `--font-body` | `font-body` | Body text, labels, navigation, metadata |
| JetBrains Mono | `--font-mono` | `font-mono` | Code, technical content |

### Type Scale (in use)

| Pattern | Font | Size | Weight | Other | Where |
|---|---|---|---|---|---|
| Page title (hero) | display | `text-6xl` / `md:text-8xl` / `lg:text-9xl` | medium | `leading-[0.9] tracking-tight` | Hero `h1` |
| Section heading | display | `text-4xl` / `md:text-6xl` | medium | With italic `<span>` accent | All sections |
| Artwork title (detail) | display | `text-3xl` / `md:text-5xl` | normal | `leading-tight` | ArtworkInfo |
| Subsection heading | display | `text-xl` / `md:text-2xl` | medium | | SubstackFeed, buttons |
| Card title | display | `text-2xl` / `md:text-3xl` | medium | | Writing cards |
| Section label | body | `text-[11px]` | normal | `tracking-[0.4em] uppercase` | Above every section heading |
| Nav items | body | `text-[11px]` | normal | `tracking-[0.25em] uppercase` | Navigation bar |
| Body text | body | `text-base` / `md:text-lg` | normal | `leading-[1.8]` | About, Mentoring paragraphs |
| Small body | body | `text-sm` | normal | `leading-[1.8]` | Card descriptions, subtitles |
| Metadata | body | `text-[10px]` or `text-[11px]` | normal | `tracking-[0.3em] uppercase` | Category labels, counters, footer |
| Language switcher | body | `text-[11px]` | normal | `tracking-[0.15em] uppercase` | Nav |

### Conventions

- Headings always use `font-display`. Never DM Sans for headings.
- Labels and metadata always use `font-body` with `uppercase` + wide letter-spacing.
- The italic accent pattern: section headings pair a regular word with an italic `<span>`. Example: `Selected <span class="italic">Work</span>`.
- Body paragraphs use `leading-[1.8]` for generous line height.

---

## Spacing & Layout

### Section Padding

- Standard section: `py-16 md:py-24 px-8 md:px-16`
- Gallery section: `pt-10 pb-20 md:pt-16 md:pb-28 px-8 md:px-16`
- Full-bleed sections (Hero, Connect): no side padding, use viewport-height

### Container Widths

| Context | Max Width |
|---|---|
| Text content sections | `max-w-3xl mx-auto` |
| Gallery grid | `max-w-6xl mx-auto` |
| Text paragraphs | `max-w-2xl mx-auto` (inside the 3xl container) |
| Contact links | `max-w-lg mx-auto` |
| Tailwind container | `max-w-[1400px]` (via config, rarely used directly) |

### Spacing Between Elements

- Section label to heading: `mb-6` on label
- Heading to content: `mb-16` or `mb-20`
- Between paragraphs: `space-y-8`
- Divider margin: `mt-24`

---

## Components

### Section Label

The small uppercase text above every section heading.

```html
<span class="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
  Label Text
</span>
```

### Section Heading

```html
<h2 class="font-display text-4xl md:text-6xl font-medium">
  Regular Text <span class="italic">Italic Accent</span>
</h2>
```

### Inline Link

Used in body text (About, Mentoring).

```html
<a href="..." class="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors duration-300">
  Link Text
</a>
```

### Bordered Card

Used in Writing section.

```html
<a class="group block p-10 md:p-12 border border-border hover:border-foreground/20 transition-all duration-500 relative">
  <!-- content -->
</a>
```

### Bordered Button (CTA)

Used in Mentoring section.

```html
<a class="group inline-flex items-center gap-3 px-10 py-5 border border-border hover:border-foreground/20 transition-all duration-500">
  <span class="font-display text-xl md:text-2xl font-medium text-foreground">Label</span>
  <!-- ArrowUpRight icon -->
</a>
```

### Category Filter Tabs

```html
<button class="transition-colors duration-300 pb-2 border-b text-muted-foreground border-transparent hover:text-foreground">
  Category
</button>
<!-- Active state: text-foreground border-foreground -->
```

### Back Link

```html
<a class="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors">
  <!-- ArrowLeft icon --> Back
</a>
```

### Divider

```html
<div class="h-px bg-border origin-center max-w-xs mx-auto"></div>
```

With scroll-reveal: `data-animate="scale-x"` + `transition-transform duration-1000`.

### Image Grid Card

Aspect ratio `aspect-[3/4]`, shimmer loading, hover overlay with title.

### Shimmer Skeleton

Applied via `.shimmer` class. Animated gradient placeholder for lazy-loaded images.

---

## Animations

### CSS Keyframes (Tailwind)

| Name | Effect | Duration | Tailwind Class |
|---|---|---|---|
| `fade-up` | Opacity 0 + translateY(30px) to visible | 0.8s ease-out | `animate-fade-up` |
| `fade-in` | Opacity 0 to 1 | 0.6s ease-out | `animate-fade-in` |
| `slide-reveal` | translateX(-100%) to 0 | 0.8s ease-out | `animate-slide-reveal` |

All use `forwards` fill mode. Staggered with inline `animation-delay`.

### Scroll Reveal (`data-animate`)

Elements with `data-animate` start invisible (`opacity: 0; transform: translateY(30px)`) and transition to visible when `.is-visible` is added by `src/scripts/scroll-reveal.ts` (IntersectionObserver).

Variants:
- Default: fade up
- `data-animate="fade-in"`: fade only (no translate)
- `data-animate="scale-x"`: horizontal scale from center (dividers)

### Transition Defaults

- Color transitions: `duration-300`
- Layout/border transitions: `duration-500`
- Image scale on hover: `duration-700`
- Scroll reveal: `0.8s ease-out` (CSS transition)

---

## Icons

- **Lucide React** for React components: `ArrowLeft`, `ChevronLeft`, `ChevronRight`, `Play`, `Image`, `Layers`
- **Custom Astro SVG** for static components: `ArrowUpRight.astro` (inline SVG with configurable `size` prop)
- Standard size: `14-18px` depending on context
- Color: inherits `currentColor`, typically `text-muted-foreground` with `hover:text-foreground`

---

## Dark Mode

- Toggled via `.dark` class on `<html>` (class-based, not media query)
- Persisted in `localStorage` under `"theme"` key
- FOUC prevention: inline script in `<head>` applies `.dark` before first paint
- Selection colors change between modes

### Key Differences

The palette inverts warm-to-cool:
- Light: warm whites and browns, with rose and blush tints
- Dark: deep warm browns, with muted earth tones

Primary (crimson) remains constant across modes.

---

## Responsive Breakpoints

Uses Tailwind default breakpoints, mobile-first:

| Prefix | Min Width | Usage |
|---|---|---|
| (none) | 0px | Mobile default |
| `md:` | 768px | Desktop layout, larger type, nav visibility |
| `lg:` | 1024px | Hero title size only (`lg:text-9xl`) |

Navigation links are hidden on mobile (`hidden md:block`). Only language switcher and theme toggle show on mobile.

---

## File Structure

```
src/
  styles/
    global.css          -- CSS variables, base styles, animations
  components/
    ui/
      Divider.astro     -- Horizontal rule component
    icons/
      ArrowUpRight.astro -- Custom SVG icon
    sections/
      Hero.astro        -- Hero + nav bar
      About.astro       -- Bio section
      Gallery.astro     -- Gallery grid (Astro wrapper)
      Writing.astro     -- Writing links + Substack feed
      SubstackFeed.astro -- Substack RSS integration
      Mentoring.astro   -- Mentoring CTA
      Connect.astro     -- Contact + footer
    gallery/
      GalleryIsland.tsx -- React island: gallery with filters
      ArtworkGrid.tsx   -- Grid of artwork cards
      ArtworkDetail.tsx -- Single artwork detail view
      ArtworkInfo.tsx   -- Artwork metadata panel
      ImageViewer.tsx   -- Image carousel + video toggle
      ZoomableImage.tsx -- Pinch/zoom image viewer
      CategoryFilters.tsx -- Filter tab bar
      BackLink.tsx      -- Navigation back link
      types.ts          -- Artwork types
      gallery-data.ts   -- Static gallery data + getStaticPaths
      useRemoteArtworks.ts -- Remote artwork data hook
    LanguageSwitcher.astro
    ThemeToggle.astro
    HomePage.astro
  layouts/
    BaseLayout.astro    -- HTML shell, fonts, meta, analytics
  pages/
    index.astro         -- EN home
    es/index.astro      -- ES home
    gallery/[slug].astro -- EN artwork detail
    es/gallery/[slug].astro -- ES artwork detail
    design-system.astro -- Design system visual reference
    404.astro
```
