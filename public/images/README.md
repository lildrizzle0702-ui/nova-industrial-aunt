# Factory images

Place real photography here:

- `factory/` — workshop/facility photos used on the Factory Tour section.
- `products/` — product photos, grouped by slug (e.g. `products/schuko-socket-16a/`).
- `certificates/` — certificate scans (ISO, CE, RoHS, UKCA, etc.).

After adding images, register the slots in `src/config/media.ts` and set `mediaMode: 'client'`.
Empty slots fall back to the built-in SVG demo visuals.
