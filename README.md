# Real Padel — Landing Page

Modern marketing site for **Real Padel**, a padel centre in Florence.

## Stack

- **Next.js 14** (App Router) — statically prerendered
- **Tailwind CSS** — themed from our design-system tokens
- **Framer Motion** — scroll reveals, hover states, entrance/page animation
- **TypeScript**

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build && npm start   # production
```

## Structure

```
app/
  layout.tsx     next/font (Inter + Sora), SEO + OpenGraph metadata
  page.tsx       composes the sections
  globals.css    design tokens (HSL CSS vars) + reduced-motion + court grid
components/
  ui/            button · container · section · emoji-rating
  motion/        reveal (scroll-reveal + stagger variants)
  sections/      navbar · hero · features · social-proof · pricing · faq · footer
lib/             content.ts (all copy/data) · utils.ts
```

## Sections

Sticky navbar → Hero → Features (3 cards) → Social proof / Community →
Pricing (3 tiers, monthly/annual) → FAQ (accordion) → Footer (CTA band).

## Design tokens

Three-layer architecture (primitive → semantic → component) from the
`design-system` skill. Brand layer (Real Padel): emerald court-green primary,
lime court-line accent, deep-ink text, and a warm Florentine amber accent.
All exposed as Tailwind colors backed by CSS variables in `app/globals.css`.

## Performance (toward Lighthouse 90+)

- Static prerender, minimal client JS (~150 kB First Load)
- `next/font` with `display: swap` — no layout shift, no render-blocking
- CSS/SVG-driven visuals (no hero raster image)
- `prefers-reduced-motion` respected across all animations
- Below-the-fold sections animate on scroll, not on load

> Note: the Lighthouse score has not been measured in CI yet — these are the
> practices that get it to 90+. Run `npx lighthouse http://localhost:3000`
> against a production build to confirm.

## Notes

- **21st.dev components**: the hero/features/pricing were intended to be pulled
  from 21st.dev, but that host is unreachable from the build environment
  (allowlist + Cloudflare). They are implemented here as clean-room equivalents
  in the same visual style, using our own tokens.
- **Security**: pinned to the latest Next.js 14.x (`14.2.35`). A few advisories
  are only fully patched in Next 16 (a breaking major); they are mostly
  self-hosted DoS/cache issues, low risk for a static marketing page.
