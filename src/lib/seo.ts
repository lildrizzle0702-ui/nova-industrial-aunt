import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seo } from '../config/theme';

interface PageMeta {
  title: string;
  description?: string;
  /** Route path used to build the canonical URL (defaults to current pathname) */
  path?: string;
  /** JSON-LD graph to append for this page */
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLd(data: Record<string, unknown>) {
  const id = 'page-jsonld';
  document.getElementById(id)?.remove();
  const el = document.createElement('script');
  el.id = id;
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

/** Per-route document head management for the SPA. */
export function usePageMeta({ title, description, path, jsonLd }: PageMeta) {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;

  useEffect(() => {
    const fullTitle = title.includes(seo.siteName) ? title : seo.titleTemplate.replace('%s', title);
    const desc = description ?? seo.defaultDescription;

    document.title = fullTitle;
    setMeta('name', 'description', desc);

    const url = `${seo.siteUrl}${canonicalPath}`;
    setCanonical(url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', seo.siteName);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);

    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      document.getElementById('page-jsonld')?.remove();
    }
  }, [title, description, canonicalPath, jsonLd]);
}

/* ---------- Shared JSON-LD builders ---------- */

export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seo.siteName,
    url: seo.siteUrl,
    description: seo.defaultDescription,
  };
}

export function productJsonLd(params: {
  name: string;
  sku: string;
  description: string;
  category: string;
  path: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    sku: params.sku,
    description: params.description,
    category: params.category,
    url: `${seo.siteUrl}${params.path}`,
    brand: { '@type': 'Brand', name: seo.siteName },
    manufacturer: { '@type': 'Organization', name: seo.siteName },
  };
}
