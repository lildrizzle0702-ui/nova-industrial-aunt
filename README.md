# Factory Export Website Template

A reusable bilingual factory / B2B export website template (Vite + React + TypeScript).

Demo brand: **NOVA INDUSTRIAL** — electrical components manufacturer.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # typecheck + bundle + sitemap → dist/
npm run preview    # serve dist/ locally
```

## Rebrand for a new client

Almost everything lives in one file:

| What | File |
|---|---|
| Brand name, tagline, description | `src/config/factory.config.ts` → `brand` |
| Company facts, factory stats | `src/config/factory.config.ts` → `company`, `factoryStats`, `statsBand` |
| Contact info, WhatsApp, address | `src/config/factory.config.ts` → `contact` |
| SEO: siteUrl, title, description, keywords | `src/config/factory.config.ts` → `seo` |
| Colors / theme tokens | `src/config/factory.config.ts` → `theme` (keep in sync with `src/styles/tokens.css`) |
| Product families | `src/config/factory.config.ts` → `categories` |
| Certifications, capabilities, FAQ | `src/config/factory.config.ts` → `certifications`, `capabilities`, `faqs` |
| About story, process, milestones | `src/config/factory.config.ts` → `factSheet`, `manufacturingProcess`, `milestones` |
| Home copy, hero, CTAs | `src/config/factory.config.ts` → `hero`, `ctaBand`, `homeSections` |
| Navigation / footer links | `src/config/factory.config.ts` → `navigation` |
| Product catalogue | `src/config/factory.config.ts` → `products` |

The old `src/config/*.ts` and `src/data/products.ts` files now re-export from `factory.config.ts`, so pages and components do not need re-wiring.

## Service placeholders

Replace these before going live:

| Service | File | Placeholder |
|---|---|---|
| Formspree form endpoint | `src/config/thirdParty.ts` | `FORMSPREE_FORM_ID` |
| WhatsApp number (English pages) | `src/config/thirdParty.ts` | `8613800000000` |
| WeChat QR code (Chinese pages) | `src/config/thirdParty.ts` | `/assets/img/wechat-qr-placeholder.png` |
| Microsoft Clarity | `src/config/thirdParty.ts` | `CLARITY_PROJECT_ID` |
| Google Analytics 4 | `src/config/thirdParty.ts` | `GA_MEASUREMENT_ID` |

## Media / photography

The template ships with a deterministic SVG demo visual system.
To switch to real photography:

1. Put files under `public/assets/client/` (see `public/assets/client/README.md`).
2. Register slots in `src/config/media.ts` and set `mediaMode: 'client'`.

Empty slots automatically fall back to the demo SVG.

## SEO

- Unique title/meta/OG/hreflang are injected per page by `src/lib/seo.ts`.
- `npm run build` auto-generates `dist/sitemap.xml` and `dist/robots.txt` from the routes in `factory.config.ts` and `src/data/insights.ts`.
- Set the real domain in `src/config/factory.config.ts` (`seo.siteUrl`).

## Deployment

### GitHub Pages

- Build: `npm run build`
- Publish folder: `dist/`
- `base` in `vite.config.ts` is set to `/nova-industrial-template/`; change it to `/` for a custom domain.
- `dist/404.html` is copied from `dist/index.html` after build so deep links work on refresh.

### Cloudflare Pages

- Build command: `npm run build`
- Build output: `dist/`
- Set `base` in `vite.config.ts` to `/` for root hosting.
- `_headers` and `_redirects` files in `dist/` are generated/ignored as needed.
