/* ---------- About page content (all rebrand-editable) ---------- */

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const factSheet: { label: string; value: string }[] = [
  { label: 'Founded', value: '2004 · Wenzhou, Zhejiang' },
  { label: 'Facility', value: '52,000 m² · owned' },
  { label: 'Certified', value: 'ISO 9001:2015 since 2009' },
  { label: 'Markets', value: '40+ export countries' },
];

/** The physical production sequence — proof of real manufacturing capability. */
export const manufacturingProcess: ProcessStep[] = [
  { step: '01', title: 'Tooling', body: 'Mold design and steel cutting in the 14-person mold shop; 25–40 days for a new tool.' },
  { step: '02', title: 'Injection molding', body: '24 machines, 80–650T, molding PC and nylon housings around the clock.' },
  { step: '03', title: 'Contact stamping', body: 'High-speed progressive dies stamp silver-alloy contacts and brass terminals in-house.' },
  { step: '04', title: 'Assembly', body: '8 automated lines with vision inspection at every critical station.' },
  { step: '05', title: 'Testing', body: 'Batch sampling on endurance, dielectric and IP rigs before any carton is sealed.' },
  { step: '06', title: 'Packing', body: 'Blister, box or bulk packing with drop-tested cartons and GS1 labeling.' },
  { step: '07', title: 'Export', body: 'Bonded warehouse, container loading plans and documentation 40 minutes from Ningbo port.' },
];

/** Photo strip used on the Capabilities page — PHOTO + CAPTION + CONTEXT. */
export const factoryMediaStrip: { subject: 'production' | 'quality' | 'packaging'; caption: string }[] = [
  { subject: 'production', caption: 'Injection molding — 24 machines, 80–650T' },
  { subject: 'quality', caption: 'Dimensional and electrical testing, per batch' },
  { subject: 'packaging', caption: 'Carton-level export preparation, Ningbo' },
];

export const milestones: { year: string; text: string }[] = [
  { year: '2004', text: 'Founded in Wenzhou with two molding machines producing wall switches for domestic brands.' },
  { year: '2009', text: 'ISO 9001 certification; first European distributor program launches in Germany.' },
  { year: '2013', text: 'In-house testing lab commissioned; IEC type-testing moved on-site.' },
  { year: '2016', text: 'New 52,000 m² plant; USB charging and modular ranges added.' },
  { year: '2020', text: 'Smart controls platform developed — Wi-Fi and Zigbee lines for project business.' },
  { year: '2024', text: '40th export market; annual capacity reaches 12 million units.' },
];
