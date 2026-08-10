# Svarniq Jewels — Website

Marketing storefront for Svarniq Jewels (Indian + Western jewellery), built from
the Figma homepage design.

## Stack

- **Next.js 14** (App Router) + **TypeScript** — SSG homepage, SEO-friendly
- **Tailwind CSS** with theme tokens (`tailwind.config.ts` is the design system)
- **next/font** self-hosting the three type families

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (homepage prerenders as static)
```

## Design tokens

The Figma file defines **no** variables, so `tailwind.config.ts` is the single
source of truth. Colours were sampled from the comps:

| Token | Value | Use |
|-------|-------|-----|
| `cream` / `ivory` | `#F5EDE0` / `#FFFDF9` | page + section backgrounds |
| `gold` | `#AF6200` | CTAs, script accent, links (exact design value) |
| `cocoa` | `#583100` | hero display heading (exact design value) |
| `chartreuse` | `#D5E24A` | announcement bar |
| `ink` / `ink-muted` / `ink-soft` | `#141414` … | section headings / body / meta (exact design value) |
| `tint-*` | peach, rose, lilac, sand, mint | card backgrounds |
| `bg-why-gradient` | yellow → pink | "Why Svarniq" band |

Fluid display sizes (`text-display-xl/lg/md`, `text-script`, `text-eyebrow`),
`rounded-card/pill/cta`, and `shadow-card/soft` are defined there too.

## Fonts (see `app/fonts.ts`)

The design uses three commercial-ish families; here's what we ship and why:

| Role | Figma design | We use | Note |
|------|--------------|--------|------|
| Body / nav / UI | Archivo | **Archivo** | exact match — free (OFL) |
| Display serif | Askha (commercial) | **Playfair Display** | closest free high-contrast serif |
| Script accent | Palmaton (commercial) | **Great Vibes** | free stand-in signature script |

Body is pixel-accurate. To go fully faithful on headings/script, license Askha +
Palmaton and self-host them via `next/font/local` (swap in `app/fonts.ts` only —
everything references the CSS variables `--font-display/script/body`).

## Responsive decisions (authored — Figma is desktop-only at 1920px)

- Content band → `max-w-container` (1520px) with gutters stepping `16 → 24 → 40 → 64px`.
- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`.
- **Header**: full nav from `lg`; hamburger + slide-down drawer below.
- **Carousels** (categories, bestsellers): scroll-snap + arrow controls on
  mobile/tablet; static grid on `lg`/`xl`.
- **Two Worlds / feature strips / testimonials**: multi-column on desktop,
  collapse to 1–2 columns down the breakpoints.

## Structure

```
app/            layout (fonts + header/footer), page (section composition), globals.css, fonts.ts
components/
  layout/       AnnouncementBar, Header, Footer, NewsletterForm
  sections/     HeroCarousel, TrustBar, TwoWorlds, CategoryCarousel,
                FeatureStrip, BestsellersCarousel, Testimonials, WhySvarniq
  ui/           Button, ProductCard, CategoryCard, TestimonialCard, FeatureItem,
                SectionHeading, Price, Rating, Icon, Media, Container
data/           navigation, hero, worlds, categories, features, products,
                testimonials, valueProps, footer  (typed content — cards render from these)
lib/            types.ts, cn.ts
```

Repeated Figma frames are collapsed into single components fed by `data/`
arrays: `CategoryCarousel` is reused for Indian (4) + Western (3), `FeatureStrip`
twice, `ProductCard` ×5, `TestimonialCard` ×5, `Button` ~10×.

## Assets

Real assets are exported from Figma into `/public/images/**` and served through
`next/image` (`components/ui/Media.tsx`):

- `hero/` — 3 hero banners (1920×737, text-free; live copy overlays them)
- `worlds/` — Indian + Western split-card photos (875×624)
- `categories/` — 7 category photos (Indian 417×558, Western 569×352)
- `products/` — 5 bestseller photos (331×283)
- `avatars/` — 5 testimonial avatars
- `brand/logo.svg` — wordmark (served `unoptimized`, via `components/ui/Logo.tsx`)

To refresh an asset, re-export the node from Figma and overwrite the file.

## Icons

19 brand glyphs are exported from Figma to `/public/icons/*.svg` and rendered by
`components/ui/Icon.tsx` as **CSS masks tinted with `currentColor`** — so one
monochrome source recolours per context (ink nav icons, gold feature bullets,
gold hover). Generic UI arrows/chevrons stay as inline vectors. A few key names
(`women`, `diamond`, `medal`, `truck`) render the design's actual glyph for that
slot rather than a literal namesake.

## Still to do (placeholders in the scaffold)

- **Fonts** — confirm/replace the three families (licensing for commercial use).
- **Backends** — newsletter submit, search, cart, and wishlist are stubbed.
```
