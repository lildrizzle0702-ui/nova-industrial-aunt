/* ============================================================
   MEDIA CONFIGURATION — the single source of truth for imagery.

   Two modes:
   - "demo"   → the deterministic SVG visual system renders every
                slot. The template is fully usable as-is.
   - "client" → real photography is resolved from the registry
                below (conventionally files under /assets/client/),
                with per-slot fallback to the demo SVG whenever an
                entry is missing or fails to load. A client site can
                therefore never show a broken image, `undefined` or
                a collapsed layout.

   Page components never reference image paths — they render
   <ProductMedia> / <EditorialMedia> slots and this layer decides
   what fills them. Rebranding a client = replace /assets/client/
   files + edit this file. No JSX changes.
   ============================================================ */

import type { EditorialSubject } from '../components/visuals/EditorialVisual';
import type { ProductView } from '../components/visuals/ProductVisual';

/* ---------- Mode switch ---------- */

export type MediaMode = 'demo' | 'client';

/** Flip to 'client' to activate real photography below. */
export const mediaMode: MediaMode = 'demo';

/* ---------- Slot shapes ---------- */

export interface MediaAsset {
  src: string;
  /** Optional — falls back to the slot's default alt text. */
  alt?: string;
  /** object-position for editorial crops, e.g. '50% 30%' / '50% 20%' (worker portraits). */
  position?: string;
  /** Optional art-direction aspect ratio, e.g. '16 / 7' (wide factory) or '3 / 4' (portrait product). */
  aspect?: string;
  /** Optional photo caption — rendered as a small technical annotation under the visual. */
  caption?: string;
}

/** Convenience: a bare string is treated as { src }. */
export type MediaSlot = string | MediaAsset;

export interface ClientProductMedia {
  /** Main product photo. */
  hero?: MediaSlot;
  /** Dimensioned drawing / datasheet image. */
  technical?: MediaSlot;
  /** Material / finish macro. */
  detail?: MediaSlot;
  /** Additional photos appended to the product detail gallery. */
  gallery?: MediaSlot[];
}

export interface ClientBrandMedia {
  /** Square mark rendered next to the wordmark (replaces the SVG mark). */
  logo?: MediaSlot;
  /** Favicon swap applied at startup. */
  favicon?: MediaSlot;
}

export interface ClientHomeMedia {
  /** Home hero visual (also used by factory 'hero' resolution). */
  hero?: MediaSlot;
}

/**
 * Factory / editorial slots. Keys match the EditorialSubject used by
 * the section components:
 *   hero · production · quality · engineering · warehouse · packaging · markets
 */
export type ClientFactoryMedia = Partial<Record<EditorialSubject, MediaSlot>>;

export interface ClientMedia {
  brand: ClientBrandMedia;
  home: ClientHomeMedia;
  factory: ClientFactoryMedia;
  /** Factory tour gallery — 6 to 8 workshop shots. */
  factoryTour: MediaSlot[];
  /** Certificate scan slots keyed by certification id. */
  certificateScans: Partial<Record<string, MediaSlot>>;
  /** Key: product slug — the same key every page renders by. */
  products: Record<string, ClientProductMedia>;
}

/* ---------- Client registry ----------
   Fill this in (or point slots at files under /assets/client/) and
   set mediaMode = 'client'. Missing slots fall back to demo SVG. */

export const clientMedia: ClientMedia = {
  brand: {},
  home: {},
  factory: {},
  factoryTour: [],
  certificateScans: {},
  products: {},

  // ---- Example of a filled client registry: ----
  // brand: {
  //   logo: '/assets/img/brand/logo.png',
  //   favicon: '/assets/img/brand/favicon.png',
  // },
  // home: {
  //   hero: '/assets/img/factory/plant-exterior.jpg',
  // },
  // factory: {
  //   production: '/assets/img/factory/assembly-line.jpg',
  //   quality: '/assets/img/factory/qc-lab.jpg',
  //   warehouse: '/assets/img/factory/warehouse.jpg',
  //   packaging: '/assets/img/factory/packing.jpg',
  // },
  // factoryTour: [
  //   '/assets/img/factory-workshop-01.jpg',
  //   '/assets/img/factory-workshop-02.jpg',
  //   '/assets/img/factory-workshop-03.jpg',
  //   '/assets/img/factory-workshop-04.jpg',
  //   '/assets/img/factory-workshop-05.jpg',
  //   '/assets/img/factory-workshop-06.jpg',
  // ],
  // certificateScans: {
  //   iso9001: '/assets/img/cert-iso9001.jpg',
  //   ce: '/assets/img/cert-ce.jpg',
  //   rohs: '/assets/img/cert-rohs.jpg',
  //   ukca: '/assets/img/cert-ukca.jpg',
  // },
  // products: {
  //   'schuko-socket-16a': {
  //     hero: { src: '/assets/img/products/e116-front.jpg', alt: 'NV-E116 in matte white' },
  //     technical: '/assets/img/products/e116-drawing.png',
  //     gallery: ['/assets/img/products/e116-detail-1.jpg'],
  //   },
  // },
};

/* ---------- Resolution helpers (pure) ---------- */

export function normalizeSlot(slot: MediaSlot | undefined): MediaAsset | undefined {
  if (!slot) return undefined;
  return typeof slot === 'string' ? { src: slot } : slot;
}

/** Client product media for a view; product-level overrides win over the registry. */
export function resolveProductMedia(
  slug: string,
  view: ProductView,
  productLevel?: Partial<Record<ProductView, MediaSlot>> & { gallery?: MediaSlot[] },
): MediaAsset | undefined {
  if (mediaMode !== 'client') return undefined;
  const own = normalizeSlot(productLevel?.[view]);
  if (own) return own;
  return normalizeSlot(clientMedia.products[slug]?.[view]);
}

/** Gallery assets: product-level first, then registry entries. */
export function resolveProductGallery(
  slug: string,
  productLevel?: MediaSlot[],
): MediaAsset[] {
  if (mediaMode !== 'client') return [];
  const own = (productLevel ?? []).map((s) => normalizeSlot(s)).filter((a): a is MediaAsset => Boolean(a));
  const registry = (clientMedia.products[slug]?.gallery ?? [])
    .map((s) => normalizeSlot(s))
    .filter((a): a is MediaAsset => Boolean(a));
  return [...own, ...registry];
}

/** Factory / editorial / home-hero slot resolution. */
export function resolveEditorialMedia(subject: EditorialSubject): MediaAsset | undefined {
  if (mediaMode !== 'client') return undefined;
  const homeHero = subject === 'hero' ? normalizeSlot(clientMedia.home.hero) : undefined;
  return homeHero ?? normalizeSlot(clientMedia.factory[subject]);
}

/** Factory tour gallery slots. */
export function resolveFactoryTourMedia(): MediaAsset[] {
  if (mediaMode !== 'client') return [];
  return clientMedia.factoryTour
    .map((s) => normalizeSlot(s))
    .filter((a): a is MediaAsset => Boolean(a));
}

/** Certificate scan slot by certification id. */
export function resolveCertificateScan(certId: string): MediaAsset | undefined {
  if (mediaMode !== 'client') return undefined;
  return normalizeSlot(clientMedia.certificateScans[certId]);
}

/** Brand logo for the header/footer mark. */
export function resolveBrandLogo(): MediaAsset | undefined {
  if (mediaMode !== 'client') return undefined;
  return normalizeSlot(clientMedia.brand.logo);
}
