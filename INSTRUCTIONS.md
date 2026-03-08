# Cecilia Gutierrez — Personal Website Design Instructions

> This file defines the design system and creative direction for the site.
> All future edits (by Claude, Lovable, or any AI assistant) MUST follow these rules.

## Aesthetic Direction

- **White background as a canvas** — clean, no gradients, no noise overlays
- The site should feel like an **art book** or **editorial layout**, not a SaaS product
- **Unexpected and experimental** — layered compositions, editorial typography, hand-crafted + digital feel
- **AVOID**: purple gradients, generic portfolio aesthetics, stock photo vibes, dark themes
- The site should feel like it was made by someone who **codes AND paints**

## Color Palette

- **Background**: Pure white (`0 0% 100%`)
- **Foreground/text**: Near-black (`20 10% 12%`)
- **Primary accent**: Warm amber (`32 80% 55%`) — used sparingly for emphasis
- **Secondary accent**: Deep burgundy/terracotta (`8 60% 45%`)
- **Muted text**: Warm gray (`25 12% 50%`)
- **Borders**: Light warm gray (`25 15% 88%`)
- **NO gradients on backgrounds**. Flat, clean surfaces. Let the art and typography do the work.

## Typography

- **Display / headings**: `"Cormorant Garamond"` from Google Fonts — weight 600–700, large sizes, editorial and painterly
- **Body / UI**: `"DM Sans"` from Google Fonts — clean, geometric, readable
- **Monospace accents** (code references, tech tags): `"JetBrains Mono"` from Google Fonts
- **NEVER use**: Inter, Roboto, Poppins, or system fonts
- All fonts loaded via Google Fonts CDN

## Layout Principles

- White space is sacred — generous padding and margins
- Images should be large and immersive (the art is the star)
- Asymmetric, editorial layouts preferred over rigid grids
- Mobile-first, fully responsive

## Animation

- Framer Motion for scroll-triggered reveals and hover states
- Subtle, intentional — not flashy
- No parallax unless explicitly requested

## Technical Stack

- React + Vite + TypeScript
- Tailwind CSS with semantic design tokens (defined in `index.css` and `tailwind.config.ts`)
- Framer Motion for animations
- All colors via CSS custom properties in HSL format
- Components use Tailwind semantic classes (`bg-background`, `text-foreground`, etc.), NEVER raw color values

## Sections

1. **Hero** — warm, surprising intro. Name + duality tagline + location
2. **About** — personal note, not a bio. Engineer at N26 + artist
3. **Artwork Gallery** — masonry/editorial grid, category filters, lightbox
4. **Writing** — Medium + Substack links as cards
5. **Connect** — Email + LinkedIn, inviting tone, simple footer

## Contact Info

- Email: ceciliainesgutierrez@gmail.com
- LinkedIn: https://www.linkedin.com/in/gutierrez-cecilia/
- Medium: https://medium.com/@gutierrez-cecilia
- Substack: https://substack.com/@ceciliagutierrez
