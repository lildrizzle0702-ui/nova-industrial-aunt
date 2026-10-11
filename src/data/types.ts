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
  taglineZh?: string;
  descriptionZh?: string;
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
  legalNameZh?: string;
  headquartersZh?: string;
  marketsZh?: string[];
  employeesZh?: string;
  factoryAreaZh?: string;
  annualCapacityZh?: string;
  experienceZh?: string;
}

export interface FactoryStat {
  value: string;
  label: string;
  note?: string;
  labelZh?: string;
  noteZh?: string;
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
  addressLinesZh?: string[];
  countryZh?: string;
  businessHoursZh?: string;
  responseTimeZh?: string;
}

export interface NavItem {
  label: string;
  href: string;
  labelZh?: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
  titleZh?: string;
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
  /** Chinese description — used when locale is zh. */
  descriptionZh?: string;
  nameZh?: string;
  /** Which products / markets this certification covers. */
  scope: string;
  scopeZh?: string;
}

export interface SpecRow {
  label: string;
  value: string;
  labelZh?: string;
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
  /** Chinese full description — used when locale is zh. */
  descriptionZh?: string;
  description: string;
  features: string[];
  /** Chinese features, index-matched — used when locale is zh. */
  featuresZh?: string[];
  specifications: SpecRow[];
  applications: string[];
  applicationsZh?: string[];
  certificationIds: string[];
  keywords: string[];
  featured?: boolean;
  /** Catalogue heroes — rendered large on the home page. */
  flagship?: boolean;
  visual: ProductVisualSpec;
  /** Real photography slots; absent views fall back to the SVG demo renderer. */
  images?: ProductImages;
  colors: string[];
  colorsZh?: string[];
  warranty: string;
  warrantyZh?: string;
  packaging: string;
  packagingZh?: string;
  moq: string;
  moqZh?: string;
  leadTime: string;
  leadTimeZh?: string;
  relatedSlugs?: string[];
}

/* ---------- Marketing sections ---------- */

export interface HeroConfig {
  eyebrow: string;
  eyebrowZh?: string;
  titleLines: string[];
  titleLinesZh?: string[];
  description: string;
  descriptionZh?: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  /** Technical metadata line — rendered as quiet mono annotation, not badges. */
  footnote: string;
  footnoteZh?: string;
  /** Caption under the hero visual, styled like a drawing title block. */
  visualCaption: string;
  visualCaptionZh?: string;
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  /** Chinese title — used when locale is zh. */
  titleZh?: string;
  description: string;
  points: string[];
  /** Chinese description/points, index-matched — used when locale is zh. */
  descriptionZh?: string;
  pointsZh?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Chinese question — used when locale is zh. */
  questionZh?: string;
  /** Chinese answer — used when locale is zh. */
  answerZh?: string;
}

export interface CtaBandConfig {
  eyebrow: string;
  eyebrowZh?: string;
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
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

/* ---------- Insights / Blog ---------- */

export interface InsightSection {
  heading: string;
  paragraphs: string[];
}

export interface Insight {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: string;
  categoryZh: string;
  readTime: string;
  readTimeZh: string;
  excerpt: string;
  excerptZh: string;
  sections: InsightSection[];
}
