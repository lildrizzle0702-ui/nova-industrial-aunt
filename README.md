# NOVA Industrial Template

Premium B2B industrial / export website template (Vite + React + TypeScript).
Demo brand: **NOVA INDUSTRIAL** — electrical components manufacturer, 23 SKUs,
5 product families. Everything visual and textual is config/data/media-driven;
pages never contain brand, copy, or image paths.

## Local development

```bash
npm install
npm run dev        # http://localhost:5180
```

## Production build

```bash
npm run build      # typecheck + bundle → dist/
npm run preview    # serve dist/ locally
```

## Rebrand (NOVA INDUSTRIAL → your client)

Edit config/data only — no JSX changes:

| What | File |
|---|---|
| Brand name, wordmark, tagline | `src/config/brand.ts` |
| Colors (theme tokens) | `src/styles/tokens.css` + `src/config/theme.ts` (keep in sync) |
| Company facts, stats | `src/config/company.ts` |
| Contact info | `src/config/contact.ts` |
| Navigation / footer links | `src/config/navigation.ts` |
| Product families | `src/config/categories.ts` |
| Product catalogue (23 SKUs) | `src/data/products.ts` |
| Home / quote copy, CTA | `src/config/hero.ts` |
| Certifications, capabilities, FAQ | `src/config/certifications.ts` |
| About story, process, milestones | `src/config/about.ts` |
| SEO defaults, **siteUrl** | `src/config/theme.ts` → `seo.siteUrl` |
| Favicon | `public/favicon.svg` |

Also update the domain in `public/robots.txt` and `public/sitemap.xml`
when the real domain is known.

## Media (client photography)

The template ships with a deterministic SVG demo visual system.
To switch a client to real photography:

1. Put files under `public/assets/client/` (see `public/assets/client/README.md`
   for the folder convention: `brand/`, `factory/`, `products/<slug>/`).
2. Register the slots in `src/config/media.ts` and set
   `mediaMode: 'client'`.

Any slot left empty falls back to the demo SVG automatically — a missing
file can never break the layout.

## Deployment (Vercel)

- Framework preset: **Vite** — build `npm run build`, output `dist/`.
- `vercel.json` rewrites all paths to `index.html`, so deep links like
  `/products/schuko-socket-16a` resolve on refresh (SPA fallback).
- Set the production domain in `src/config/theme.ts` (`seo.siteUrl`),
  `public/robots.txt`, and `public/sitemap.xml` before going live.

## Template workflow

```
MASTER TEMPLATE (this repo, tag v3.0.0)
  → Duplicate / clone
  → Rename project to the client
  → Edit src/config/* + src/data/* (brand, company, catalogue, copy)
  → Edit src/config/theme.ts (colors) + public/favicon.svg
  → Add client photos to public/assets/client/ + src/config/media.ts
  → Update robots.txt / sitemap.xml / seo.siteUrl with the real domain
  → npm run build
  → Deploy
```
