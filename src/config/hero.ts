import type { HeroConfig, CtaBandConfig } from '../data/types';
import { company } from './company';
import { brand } from './brand';

export const hero: HeroConfig = {
  eyebrow: 'Electrical Components Manufacturer — Est. 2004',
  titleLines: ['Wiring devices', 'built to specification.'],
  description:
    `${brand.name} manufactures wall switches, sockets, USB chargers and smart controls for distributors, contractors and OEM buyers in 40+ markets. In-house tooling, IEC-compliant testing, ${company.annualCapacity} of annual capacity.`,
  primaryCta: { label: 'Request a Quote', href: '/request-quote' },
  secondaryCta: { label: 'Explore Products', href: '/products' },
  footnote: 'MOQ from 1,000 units · OEM & ODM · Samples in 7 days',
  visualCaption: 'NV-210 series · 86 × 86 × 9 mm · IEC 60669-1 · screwless plate system',
};

export const ctaBand: CtaBandConfig = {
  eyebrow: 'Request a Quote',
  title: 'Tell us what your market needs.',
  description:
    'Send quantities, target market and certification requirements. Our sales engineers respond within one business day with pricing, lead time and sample options.',
  primaryCta: { label: 'Request a Quote', href: '/request-quote' },
  secondaryCta: { label: 'Browse the Catalogue', href: '/products' },
};

/* ---------- Request Quote page: quiet commercial metadata under the hero ---------- */

export const quotePageMeta: { label: string; value: string }[] = [
  { label: 'MOQ', value: 'from 1,000 units' },
  { label: 'Samples', value: '7 days, 3 pcs free' },
  { label: 'Reply', value: 'within one business day' },
  { label: 'OEM / ODM', value: 'from 3,000 pcs' },
];

/* ---------- PDP commercial note ---------- */

export const pdpConfig = {
  oemLabel: 'OEM / ODM',
  oemNote: 'Private label and platform modifications — from 1,000 pcs',
  oemHref: '/capabilities#oem',
};

/* ---------- Footer CTA (small, quiet, above the link columns) ---------- */

export const footerCta = {
  title: 'Ready to specify your next program?',
  cta: { label: 'Request a Quote', href: '/request-quote' },
};

/* ---------- Home section copy ---------- */

export const homeSections = {
  categories: {
    index: '01',
    label: 'Product Range',
    title: 'Five product families. One production standard.',
    description:
      'Every product is molded, assembled and tested in our Wenzhou facility to the same IEC-aligned process — whether it ships as NOVA branded stock or your private label.',
  },
  factory: {
    index: '02',
    label: 'Manufacturing',
    title: `${company.factoryArea} of controlled production.`,
    description:
      'From mold design to final carton, every stage happens inside our own facility. That control is why our defect rates stay low and our lead times stay predictable.',
    points: [
      '24 injection molding machines, 80–650T, running engineering-grade PC and nylon',
      '8 automated assembly lines with vision inspection at every critical station',
      'In-house testing lab: endurance rigs, temperature cycling, IPX5/IPX6 spray chambers',
      'Bonded warehouse and export packing line 40 minutes from Ningbo port',
    ],
    visual: 'production' as const,
  },
  featured: {
    index: '03',
    label: 'Featured Products',
    title: 'The lines distributors reorder.',
    description:
      'Four catalogue heroes — proven sellers across European, British and smart-home programs, each available under private label.',
  },
  capabilities: {
    index: '04',
    label: 'Capabilities',
    title: 'What we do in-house.',
    description:
      'Six disciplines under one roof keep quality consistent and lead times honest.',
  },
  oem: {
    index: '05',
    label: 'OEM / ODM',
    title: 'Your brand. Our production line.',
    description:
      'We produce wiring devices under private label for distributors and retail chains across four continents. Send us a sample or a drawing — we handle tooling, certification mapping and packaging to your standard.',
    points: [
      {
        title: 'OEM private label',
        body: 'Your logo engraved or pad-printed on plates and packaging. Artwork proofed in 3 days, MOQ from 1,000 units per finish.',
      },
      {
        title: 'ODM development',
        body: 'Existing platforms adapted to your market: pin types, shutter systems, finishes and radio standards re-engineered without a full custom tooling cycle.',
      },
      {
        title: 'Custom packaging',
        body: 'Retail-ready blister boxes, constructor packs or plain export cartons — barcode labeling to your GS1 standard included.',
      },
      {
        title: 'Engineering support',
        body: 'A dedicated project engineer reviews drawings, confirms materials and runs first-article inspection before mass production.',
      },
    ],
  },
  quality: {
    index: '06',
    label: 'Quality & Compliance',
    title: 'Tested here. Certified for your market.',
    description:
      'Every batch passes endurance and dielectric testing before it leaves the floor. Our lab runs to IEC 60669-1, IEC 60884-1 and BS 1363-2 schedules, and the facility is audited annually to ISO 9001:2015.',
  },
  export: {
    index: '07',
    label: 'Export & Markets',
    title: 'Shipping from Ningbo to 40+ markets.',
    description:
      'The plant gate is 40 minutes from Ningbo port. Documentation teams handle Certificates of Origin, L/C shipments and attestation per market, so mixed-SKU containers clear without surprises.',
    facts: [
      { label: 'Terms', value: 'FOB · CIF · DDP' },
      { label: 'Documents', value: 'CoO · L/C · attestation' },
      { label: 'Loading', value: 'Consolidated multi-SKU' },
      { label: 'Markets', value: 'EU · NA · MEA · SEA' },
    ],
    visual: 'packaging' as const,
  },
};
