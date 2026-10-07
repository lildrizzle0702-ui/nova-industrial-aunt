import type { SeoConfig, ThemeConfig } from '../data/types';

export const seo: SeoConfig = {
  siteUrl: 'https://www.novaindustrial.example',
  siteName: 'NOVA INDUSTRIAL',
  titleTemplate: '%s — NOVA INDUSTRIAL',
  defaultTitle: 'NOVA INDUSTRIAL — Electrical Components Manufacturer',
  defaultDescription:
    'Manufacturer of wall switches, sockets, USB chargers and smart controls for importers, distributors and OEM buyers across Europe, North America, the Middle East and Southeast Asia.',
  defaultKeywords: [
    'wall switch manufacturer',
    'electrical socket factory',
    'OEM wiring devices',
    'USB wall charger manufacturer',
    'smart switch OEM',
  ],
};

/**
 * Runtime mirror of styles/tokens.css.
 * Used for SEO metadata, og tags and the rebrand test.
 * Keep values in sync with tokens.css.
 */
export const theme: ThemeConfig = {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    surfaceMuted: '#f1efe9',
    ink: '#14181b',
    text: '#171b1e',
    textSecondary: '#44494e',
    textMuted: '#767c81',
    border: '#e3e0d8',
    borderStrong: '#ccc8bf',
    primary: '#1b2328',
    primaryHover: '#2e3940',
    accent: '#c2703e',
    success: '#2e7d53',
    error: '#b3402f',
  },
  fonts: {
    sans: 'Archivo',
    mono: 'IBM Plex Mono',
  },
};
