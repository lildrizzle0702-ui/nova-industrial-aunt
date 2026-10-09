/* ============================================================
   DATA MODEL — every entity the template renders.
   All page content flows from these types via src/config + src/data.
   ============================================================ */

/* ---------- Brand & company ---------- */

export interface BrandConfig {
  name: string;
  /** Two-line lockup: primary word + secondary word (e.g. "NOVA" / "INDUSTRIAL") */
  wordmarkPrimary: string;
  wordmarkSecondary: string;
  tagline: string;
  description: string;
}

export interface CompanyConfig {
  legalName: string;
  founded: number;
  headquarters: string;
  markets: string[];
  employees: string;
  factoryArea: string;
  annualCapacity: string;
  experience: string;
}

export interface FactoryStat {
  value: string;
  label: string;
  note?: string;
}

export interface ContactConfig {
  email: string;
  salesEmail: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  addressLines: string[];
  country: string;
  businessHours: string;
  responseTime: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface NavigationConfig {
  header: NavItem[];
  headerCta: NavItem;
  footerColumns: FooterColumn[];
}

/* ---------- Theme (mirrors styles/tokens.css for runtime use) ---------- */

export interface ThemeConfig {
  colors: {
    background: string;
    surface: string;
    surfaceMuted: string;
    ink: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    borderStrong: string;
    primary: string;
    primaryHover: string;
    accent: string;
    success: string;
    error: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
}

/* ---------- SEO ---------- */

export interface SeoConfig {
  siteUrl: string;
  siteName: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
}

/* ---------- Catalogue ---------- */

export type Finish = 'white' | 'black' | 'chrome' | 'champagne' | 'graphite';

export interface Category {
  id: string;
  slug: string;
  name: string;
  /** Chinese display name — used when locale is zh. */
  nameZh?: string;
  shortName: string;
  /** Chinese short name — used when locale is zh. */
  shortNameZh?: string;
  description: string;
  /** Chinese description — used when locale is zh. */
  descriptionZh?: string;
  longDescription: string;
  keywords: string[];
}

export interface Certification {
  id: string;
  code: string;
  name: string;
  description: string;
  /** Which products / markets this certification covers. */
  scope: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductVisualSpec {
  /** Which renderer draws this product (matches category family) */
  kind: 'rocker' | 'socket' | 'usb' | 'smart' | 'accessory';
  /** Index of the face variant within the renderer (gang count, port count, ...) */
  variant: number;
  finish: Finish;
}

/** Optional real photography per slot — overrides the SVG demo renderer when present. */
export interface ProductImages {
  hero?: { src: string; alt?: string; position?: string };
  technical?: { src: string; alt?: string; position?: string };
  detail?: { src: string; alt?: string; position?: string };
  /** Extra photos appended to the product detail gallery. */
  gallery?: { src: string; alt?: string; position?: string }[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Chinese display name — used when locale is zh. */
  nameZh?: string;
  sku: string;
  categoryId: string;
  shortDescription: string;
  /** Chinese short description — used when locale is zh. */
  shortDescriptionZh?: string;
  description: string;
  features: string[];
  specifications: SpecRow[];
  applications: string[];
  certificationIds: string[];
  keywords: string[];
  featured?: boolean;
  /** Catalogue heroes — rendered large on the home page. */
  flagship?: boolean;
  visual: ProductVisualSpec;
  /** Real photography slots; absent views fall back to the SVG demo renderer. */
  images?: ProductImages;
  colors: string[];
  warranty: string;
  packaging: string;
  moq: string;
  leadTime: string;
  relatedSlugs?: string[];
}

/* ---------- Marketing sections ---------- */

export interface HeroConfig {
  eyebrow: string;
  titleLines: string[];
  description: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  /** Technical metadata line — rendered as quiet mono annotation, not badges. */
  footnote: string;
  /** Caption under the hero visual, styled like a drawing title block. */
  visualCaption: string;
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CtaBandConfig {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
}

/* ---------- Inquiry ---------- */

export interface InquiryLine {
  productId: string;
  quantity: number;
}

export interface InquiryContactForm {
  name: string;
  company: string;
  email: string;
  country: string;
  /** Optional procurement requirements. */
  certification?: string;
  packaging?: string;
  message: string;
}
