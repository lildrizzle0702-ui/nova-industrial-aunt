import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { EditorialSubject } from '../visuals/EditorialVisual';
import type { ProductView } from '../visuals/ProductVisual';
import { ProductVisual } from '../visuals/ProductVisual';
import { EditorialVisual } from '../visuals/EditorialVisual';
import {
  resolveBrandLogo,
  resolveEditorialMedia,
  resolveProductMedia,
  type MediaAsset,
  type MediaSlot,
} from '../../config/media';

/* ============================================================
   MEDIA COMPONENTS
   <Media> is the single renderer for real photography: it keeps
   the demo SVG underneath until the bitmap has actually painted
   and swaps back to it on load error — so a missing file can
   never produce a broken image, a flash of empty box or a layout
   collapse. <ProductMedia> / <EditorialMedia> / <BrandMark> are
   the slot components page components use; they consult
   config/media.ts and render pure SVG in demo mode.
   ============================================================ */

interface MediaProps {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. '1 / 1' or '4 / 3'. Omit when the parent fixes the box. */
  aspectRatio?: string;
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  /** Demo visual rendered beneath the photo; also the error fallback. */
  fallback?: ReactNode;
}

export function Media({
  src,
  alt,
  aspectRatio,
  objectFit = 'cover',
  objectPosition,
  loading = 'lazy',
  className,
  fallback,
}: MediaProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const showImage = !failed;

  return (
    <div className={`media ${className ?? ''}`} style={aspectRatio ? { aspectRatio } : undefined}>
      {fallback && (!loaded || failed) ? <div className="media__fallback">{fallback}</div> : null}
      {showImage && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={`media__img ${loaded ? 'is-loaded' : ''}`}
          style={{ objectFit, objectPosition }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ---------- Product media slot ---------- */

export function ProductMedia({
  slug,
  spec,
  images,
  view = 'hero',
  title,
  alt,
  className,
  aspectRatio,
  objectFit = 'cover',
}: {
  slug: string;
  spec: Parameters<typeof ProductVisual>[0]['spec'];
  /** Product-level client assets (Product.images) — take precedence over the registry. */
  images?: Partial<Record<ProductView, MediaSlot>> & { gallery?: MediaSlot[] };
  view?: ProductView;
  title: string;
  /** English alt text for the product image (used for SEO). */
  alt?: string;
  className?: string;
  aspectRatio?: string;
  objectFit?: CSSProperties['objectFit'];
}) {
  const asset: MediaAsset | undefined = resolveProductMedia(slug, view, images);
  const fallback = <ProductVisual spec={spec} view={view} title={title} />;

  if (!asset) return fallback;

  return (
    <Media
      src={asset.src}
      alt={asset.alt ?? alt ?? title}
      aspectRatio={aspectRatio}
      objectFit={objectFit}
      objectPosition={asset.position}
      className={className}
      fallback={fallback}
    />
  );
}

/* ---------- Factory / editorial media slot ---------- */

export function EditorialMedia({
  subject,
  title,
  className,
  aspectRatio,
  caption,
}: {
  subject: EditorialSubject;
  title: string;
  className?: string;
  aspectRatio?: string;
  /** Caption from the caller (section config). An asset-level caption wins. */
  caption?: string;
}) {
  const asset = resolveEditorialMedia(subject);
  const cap = caption ?? asset?.caption;
  const fallback = <EditorialVisual subject={subject} title={title} className={className} />;

  if (!asset && !cap) return fallback;

  return (
    <figure className="media-figure">
      {asset ? (
        <Media
          src={asset.src}
          alt={asset.alt ?? title}
          aspectRatio={aspectRatio ?? asset.aspect}
          objectFit="cover"
          objectPosition={asset.position}
          className={className}
          fallback={fallback}
        />
      ) : (
        fallback
      )}
      {cap && <figcaption className="media-caption mono">{cap}</figcaption>}
    </figure>
  );
}

/* ---------- Brand mark (logo) slot ---------- */

export function BrandMark({ size = 34, className }: { size?: number; className?: string }) {
  const logo = resolveBrandLogo();

  if (!logo) return <LogoMarkSvg size={size} />;

  return (
    <span className={`brand-mark ${className ?? ''}`} style={{ width: size, height: size }}>
      <Media
        src={logo.src}
        alt={logo.alt ?? 'Company logo'}
        objectFit="contain"
        loading="eager"
        fallback={<LogoMarkSvg size={size} />}
      />
    </span>
  );
}

/** Inline SVG mark — the demo brand logo. */
export function LogoMarkSvg({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="3" fill="var(--primary)" />
      <path d="M11 30V10h4.4L27 26.2V10h4v20h-4.4L15 13.8V30z" fill="var(--bg)" />
      <rect x="8" y="33" width="24" height="2.2" fill="var(--accent)" />
    </svg>
  );
}
