import type { Certification, Capability, FaqItem } from '../data/types';

export const certifications: Certification[] = [
  {
    id: 'ce',
    code: 'CE',
    name: 'CE Conformity',
    description:
      'All switch and socket ranges carry CE marking under the Low Voltage Directive 2014/35/EU, with Declaration of Conformity available per product family.',
    scope: 'All ranges · EU / EEA',
  },
  {
    id: 'rohs',
    code: 'RoHS',
    name: 'RoHS 2.0 (EU 2015/863)',
    description:
      'Every plastic part and plating is screened for the ten restricted substances. Batch-level reports accompany all EU-bound shipments.',
    scope: 'All ranges · EU',
  },
  {
    id: 'ukca',
    code: 'UKCA',
    name: 'UKCA Marking',
    description:
      'British-standard socket and switch ranges are UKCA-assessed for the UK market, including BS 1363-2 and BS 5733 compliance.',
    scope: 'BS-pattern ranges · United Kingdom',
  },
  {
    id: 'iso9001',
    code: 'ISO 9001',
    name: 'ISO 9001:2015',
    description:
      'Quality management system certified since 2009 and re-audited annually. Scope covers design, molding, assembly and export of wiring devices.',
    scope: 'Site-wide · Wenzhou facility',
  },
  {
    id: 'iec',
    code: 'IEC',
    name: 'IEC Product Standards',
    description:
      'Products are type-tested to IEC 60669-1 (switches), IEC 60884-1 (sockets) and BS 1363-2, with independent lab reports from Intertek and SGS.',
    scope: 'Switches · sockets · weatherproof',
  },
  {
    id: 'saso',
    code: 'SASO',
    name: 'SASO / IECEE',
    description:
      'Selected ranges are certified under Saudi SASO IECEE recognition for Middle East distribution programs.',
    scope: 'Selected ranges · Saudi Arabia / GCC',
  },
];

export const capabilities: Capability[] = [
  {
    id: 'manufacturing',
    index: '01',
    title: 'Precision Manufacturing',
    description:
      'Molding, stamping, contact assembly and final packing run inside one facility on the same production plan — no outsourced steps in the critical path.',
    points: [
      '24 injection molding machines, 80–650T clamping force',
      'High-speed progressive stamping for contact bridges and terminals',
      '8 automated assembly lines with vision inspection',
      '12M units annual output across 5 product families',
    ],
  },
  {
    id: 'oem',
    index: '02',
    title: 'OEM Service',
    description:
      'Private-label production with your branding on plates, retail packaging and cartons — proven processes, your identity.',
    points: [
      'Logo engraving or pad printing, artwork proof in 3 days',
      'Retail-ready blister, constructor or plain export packing',
      'MOQ from 1,000 units per finish',
      'GS1 barcode labeling to your standard',
    ],
  },
  {
    id: 'odm',
    index: '03',
    title: 'ODM Development',
    description:
      'Existing platforms adapted to your market requirements — pin types, shutters, finishes and connectivity re-engineered without full custom tooling.',
    points: [
      'Platform modifications from 3,000 pcs',
      'New tooling in-house: 25–40 days typical',
      'First-article inspection before every mass run',
      'Sample submission within 7 days of drawing sign-off',
    ],
  },
  {
    id: 'quality-control',
    index: '04',
    title: 'Quality Control & Testing',
    description:
      'A dedicated lab runs IEC-aligned test schedules on every production batch, with results archived for traceability.',
    points: [
      'Endurance rigs: 50,000-cycle switch and 10,000-cycle socket tests',
      'Dielectric 2,000V / 1min and insulation resistance testing',
      'IPX5/IPX6 spray chamber for weatherproof ranges',
      'Temperature cycling −25°C to +85°C',
    ],
  },
  {
    id: 'packaging',
    index: '05',
    title: 'Packaging & Private Label',
    description:
      'Packaging engineering that survives the sea freight and sells on the shelf — specified, proofed and packed in-house.',
    points: [
      'Drop-tested export cartons, 20kg max per master box',
      'Bilingual retail artwork support',
      'Blister, box, constructor and bulk packing options',
      'Container loading plans with utilization report',
    ],
  },
  {
    id: 'export-logistics',
    index: '06',
    title: 'Export Logistics',
    description:
      'Forty minutes from Ningbo port with bonded warehousing; our documentation team ships to 40+ markets every month.',
    points: [
      'FOB / CIF / DDP terms on request',
      'Certificate of Origin, L/C and Embassy attestation handled',
      'Consolidated multi-SKU container loading',
      'Dedicated documentation clerk per account',
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Do you support OEM and ODM orders?',
    answer:
      'Yes — both. OEM private-label production starts at 1,000 units per finish, with your logo engraved or printed on plates and packaging. ODM platform modifications (pin types, shutters, finishes, connectivity) start at 3,000 pcs, and full custom tooling runs 25–40 days in our own mold shop.',
  },
  {
    question: 'What is your MOQ?',
    answer:
      'Standard catalog items ship from 1,000 units per finish. Less than container load is acceptable for stocked lines. For mixed orders we consolidate SKUs into a single container loading plan.',
  },
  {
    question: 'Can you provide samples before we order?',
    answer:
      'Yes. We send production-intent samples within 7 days — three pieces free of charge, freight collected. Sample finishes and pin types can be mixed so your team can evaluate the range side by side.',
  },
  {
    question: 'Which certifications can you supply?',
    answer:
      'CE and RoHS on all ranges, UKCA on British-standard products, SASO IECEE for selected Middle East lines, and type-test reports to IEC 60669-1 / IEC 60884-1 / BS 1363-2 from Intertek and SGS. Declarations of Conformity are issued per shipment on request.',
  },
  {
    question: 'Which markets do you currently serve?',
    answer:
      'Distributors and OEM buyers in more than 40 countries across Europe, North America, the Middle East and Southeast Asia. Our most common programs are private-label ranges for electrical wholesalers and project supply for hospitality developers.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Use the Request a Quote form, or add products to the inquiry basket and submit the list together. Include quantities, target market and any certification or packaging requirements — our sales engineers reply within one business day.',
  },
  {
    question: 'What are your payment and delivery terms?',
    answer:
      'Standard terms are 30% deposit with balance against B/L copy, T/T or L/C at sight. Lead time is 35–45 days after deposit for production orders; FOB, CIF and DDP are all workable from Ningbo.',
  },
  {
    question: 'What warranty do your products carry?',
    answer:
      'Five years on mechanical construction and finishes, two years on electronic components — backed by a kept-defect analysis program that feeds results back into production within the same quarter.',
  },
];
