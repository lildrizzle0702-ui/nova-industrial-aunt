import { clientMedia, mediaMode, normalizeSlot } from '../config/media';

/**
 * Startup-time brand asset swaps that cannot be expressed as components —
 * currently the favicon. Safe no-op in demo mode.
 */
export function applyClientBrandAssets(): void {
  if (mediaMode !== 'client') return;

  const favicon = normalizeSlot(clientMedia.brand.favicon);
  if (favicon) {
    const link = document.head.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (link) link.setAttribute('href', favicon.src);
  }
}
