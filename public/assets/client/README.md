# /assets/client/ — Client Photography Directory

Drop the real company media here and register the slots in
`src/config/media.ts` (set `mediaMode: 'client'`). Any slot left
empty automatically falls back to the built-in SVG demo visual —
a missing file can never break the layout.

Suggested structure:

```
/assets/client/
  brand/
    logo.png        square mark next to the wordmark
    favicon.png     applied to <link rel="icon"> at startup
  factory/
    plant-exterior.jpg   (home hero / factory hero)
    assembly-line.jpg    (production)
    qc-lab.jpg           (quality)
    warehouse.jpg
    packing.jpg          (packaging / export)
  products/
    <product-slug>/
      hero.jpg           main product photo
      technical.png      dimensioned drawing
      detail.jpg         material / finish macro
      extra-1.jpg        appended to the gallery
```

`<product-slug>` is the same key used in `src/data/products.ts`
(e.g. `schuko-socket-16a`) — that is how every page finds the
right file. No component changes are ever required.
