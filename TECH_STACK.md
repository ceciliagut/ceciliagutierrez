# Tech Stack & Architecture -- Roadmap Reference

> Decision log and rationale for the current stack. Use this for future planning.

## Current Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | React 18 + Vite 5 | Fast builds, instant HMR, zero-config. Ideal for a single-page portfolio site. |
| **Language** | TypeScript | Type safety across components, translations, and props. |
| **Styling** | Tailwind CSS + semantic design tokens | Consistent theming via CSS custom properties (HSL). No raw colors in components. |
| **Animations** | Framer Motion | Scroll-triggered reveals, layout transitions, hover states. Declarative and composable. |
| **UI primitives** | Radix UI + shadcn/ui | Accessible, unstyled primitives. Customized with Tailwind to match the editorial aesthetic. |
| **Routing** | React Router v6 | Client-side routing (currently single-page, but ready to expand). |
| **i18n** | Custom context + translations file | Lightweight EN/ES switching without heavy libraries. Type-safe keys. |
| **Theme** | next-themes | Dark/light mode toggle with system preference detection. |
| **Icons** | Lucide React | Clean, consistent icon set. |
| **Backend (planned)** | Supabase | Auth, database, storage, and edge functions. Not yet integrated -- will be added when we need contact forms, a CMS for artwork, or user auth. |
| **E-commerce (planned)** | Shopify | For selling prints, commissions, or merch. Revisit when ready to sell. |

## Why Not Next.js?

1. **No server-side needs (yet)** -- This is a static portfolio. There's no database, no auth, no API routes. Vite builds a fast static bundle that can be deployed anywhere.
2. **Simpler mental model** -- No file-based routing, no server/client component boundaries, no hydration gotchas. Just React.
3. **Faster dev experience** -- Vite's HMR is near-instant. Next.js adds overhead we don't need.

### When to reconsider Next.js
- If we add a **blog with dynamic content** (MDX, CMS integration)
- If we need **SEO beyond static meta tags** (SSR/ISR for dynamic pages)
- If we add **API routes** (contact form backend, analytics)
- If we move to **image optimization at scale** (Next/Image is hard to beat)

For now, Vite + static deploy is the right call. Revisit when the site outgrows a single-page architecture.

## Deployment

- **Recommended**: Vercel, Netlify, or Cloudflare Pages (all handle Vite static builds natively)
- **Custom domain**: Point DNS + deploy from GitHub

## Future Roadmap Considerations

### Short-term
- [ ] Add OG/meta tags per section for social sharing
- [ ] Optimize images (WebP/AVIF conversion, lazy loading)
- [ ] Add a contact form (Supabase or external service)

### Medium-term
- [ ] CMS integration for artwork (avoid hardcoding gallery items)
- [ ] Analytics

### Long-term (may trigger migration)
- [ ] E-commerce for prints/commissions
- [ ] Multi-page architecture with individual artwork pages

## Dependencies to Watch

Some installed packages are **shadcn defaults not currently used** (recharts, react-hook-form, react-day-picker, etc.). Consider pruning unused deps to keep the bundle lean.
