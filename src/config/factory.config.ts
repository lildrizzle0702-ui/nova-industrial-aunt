/* ============================================================
   FACTORY CONFIG — single file to rebrand this template.
   Edit values here; pages, components and SEO pull from this source.
   ============================================================ */

import type {
  Product,
  BrandConfig,
  CompanyConfig,
  FactoryStat,
  ContactConfig,
  SeoConfig,
  ThemeConfig,
  Category,
  Certification,
  Capability,
  FaqItem,
  HeroConfig,
  CtaBandConfig,
  NavigationConfig,
} from '../data/types';


/* ---------- brand.ts ---------- */

export const brand: BrandConfig = {
  name: 'NOVA INDUSTRIAL',
  wordmarkPrimary: 'NOVA',
  wordmarkSecondary: 'INDUSTRIAL',
  tagline: 'Wiring devices built to specification.',
  taglineZh: '按规格生产的电工产品。',
  description:
    'NOVA INDUSTRIAL manufactures wall switches, sockets, USB chargers and smart controls for importers, distributors and OEM buyers worldwide.',
  descriptionZh:
    'NOVA INDUSTRIAL 为全球进口商、经销商及 OEM 采购商生产墙壁开关、插座、USB 充电器与智能控制产品。',
};

/* ---------- company.ts ---------- */

export const company: CompanyConfig = {
  legalName: 'Nova Industrial Electric Co., Ltd.',
  legalNameZh: '诺华工业电气有限公司',
  founded: 2004,
  headquarters: 'Wenzhou, Zhejiang, China',
  headquartersZh: '中国浙江省温州市',
  markets: ['Europe', 'North America', 'Middle East', 'Southeast Asia'],
  marketsZh: ['欧洲', '北美', '中东', '东南亚'],
  employees: '230+',
  employeesZh: '230 余人',
  factoryArea: '52,000 m²',
  factoryAreaZh: '5.2 万平方米',
  annualCapacity: '12M units',
  annualCapacityZh: '1200 万件',
  experience: '20+ years',
  experienceZh: '20 余年',
};

export const factoryStats: FactoryStat[] = [
  { value: '20+', label: 'Years of manufacturing', labelZh: '年制造经验', note: 'Founded in 2004', noteZh: '2004 年创立' },
  { value: '40+', label: 'Export markets', labelZh: '出口市场', note: 'Europe · North America · MEA · SEA', noteZh: '欧洲 · 北美 · 中东 · 东南亚' },
  { value: '52,000', label: 'm² production facility', labelZh: '平方米生产基地', note: 'Molding · assembly · QC under one roof', noteZh: '注塑 · 组装 · 质检同厂完成' },
  { value: '12M', label: 'Units annual capacity', labelZh: '件年产能', note: '8 automated assembly lines', noteZh: '8 条自动化产线' },
];

export const statsBand: FactoryStat[] = [
  { value: '20+', label: 'Years manufacturing', labelZh: '年制造经验' },
  { value: '40+', label: 'Export markets', labelZh: '出口市场' },
  { value: '12M', label: 'Units per year', labelZh: '年产能（件）' },
  { value: '98.6%', label: 'QC pass rate', labelZh: '质检合格率' },
];

/* ---------- contact.ts ---------- */

export const contact: ContactConfig = {
  email: '{{EMAIL_PLACEHOLDER}}',
  salesEmail: '{{SALES_EMAIL_PLACEHOLDER}}',
  phone: '{{PHONE_PLACEHOLDER}}',
  phoneHref: '{{PHONE_HREF_PLACEHOLDER}}',
  whatsapp: '{{WHATSAPP_PLACEHOLDER}}',
  whatsappHref: '{{WHATSAPP_HREF_PLACEHOLDER}}',
  addressLines: ['{{ADDRESS_LINE_1_PLACEHOLDER}}', '{{ADDRESS_LINE_2_PLACEHOLDER}}', '{{ADDRESS_LINE_3_PLACEHOLDER}}'],
  addressLinesZh: ['{{ADDRESS_LINE_1_ZH_PLACEHOLDER}}', '{{ADDRESS_LINE_2_ZH_PLACEHOLDER}}', '{{ADDRESS_LINE_3_ZH_PLACEHOLDER}}'],
  country: '{{COUNTRY_PLACEHOLDER}}',
  countryZh: '{{COUNTRY_ZH_PLACEHOLDER}}',
  businessHours: '{{BUSINESS_HOURS_PLACEHOLDER}}',
  businessHoursZh: '{{BUSINESS_HOURS_ZH_PLACEHOLDER}}',
  responseTime: '{{RESPONSE_TIME_PLACEHOLDER}}',
  responseTimeZh: '{{RESPONSE_TIME_ZH_PLACEHOLDER}}',
};

/* ---------- theme.ts ---------- */

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

/* ---------- categories.ts ---------- */

export const categories: Category[] = [
  {
    id: 'wall-switches',
    slug: 'wall-switches',
    name: 'Wall Switches',
    nameZh: '墙壁开关',
    shortName: 'Switches',
    shortNameZh: '开关',
    description: 'Rocker, bell-press and dimmer switches in screwed and screwless plates, 10AX rated.',
    descriptionZh: '翘板、门铃、调光开关，螺钉/无框面板可选，额定 10AX。',
    longDescription:
      'Mechanical switches built on a shared 86mm platform: silver-alloy contacts, phosphor-bronze terminals and flame-retardant polycarbonate housings. Rated 10AX 250V~ and endurance-tested to 50,000 operations per IEC 60669-1.',
    keywords: ['rocker switch', 'dimmer', 'bell press', 'light switch', '1 gang', '2 gang'],
  },
  {
    id: 'electrical-sockets',
    slug: 'electrical-sockets',
    name: 'Electrical Sockets',
    nameZh: '电气插座',
    shortName: 'Sockets',
    shortNameZh: '插座',
    description: 'Schuko, BS 1363 and universal receptacles with child-protection shutters, 16A.',
    descriptionZh: '德式、英式及通用插座，带儿童保护门，额定 16A。',
    longDescription:
      'Receptacles for European, British and international mounting standards. Double-wipe contacts, protected shutters and screwless faceplates; every batch passes 10,000-cycle insertion testing to IEC 60884-1.',
    keywords: ['schuko', 'socket outlet', 'receptacle', 'BS 1363', '13A', '16A', 'universal socket'],
  },
  {
    id: 'usb-wall-chargers',
    slug: 'usb-wall-chargers',
    name: 'USB Wall Chargers',
    nameZh: 'USB 墙壁充电插座',
    shortName: 'USB Chargers',
    shortNameZh: 'USB 充电',
    description: 'USB-A and USB-C charging outlets, 12W to 45W, PD-capable, flush-mounted.',
    descriptionZh: 'USB-A/C 充电插座，12–45W，支持 PD 快充，暗装。',
    longDescription:
      'Charging outlets that replace or combine with standard receptacles. Built-in EMI filtering and over-current protection; USB-C ports deliver up to 45W with Power Delivery for phones, tablets and laptops.',
    keywords: ['usb outlet', 'usb c', 'power delivery', 'fast charge', 'gan', 'charging socket'],
  },
  {
    id: 'smart-controls',
    slug: 'smart-controls',
    name: 'Smart Controls',
    nameZh: '智能控制',
    shortName: 'Smart',
    shortNameZh: '智能',
    description: 'Wi-Fi and Zigbee touch switches, dimmers and metered sockets for projects.',
    descriptionZh: 'Wi-Fi/Zigbee 触控开关、调光及带计量插座，适用于工程项目。',
    longDescription:
      'Glass-capacitive touch controls that retrofit standard 86mm boxes. Wi-Fi models work with the Tuya ecosystem (Smart Life); Zigbee models integrate with common hubs. Neutral-wire-free versions available for retrofit markets.',
    keywords: ['smart switch', 'touch switch', 'wifi', 'zigbee', 'smart dimmer', 'energy monitoring'],
  },
  {
    id: 'plates-accessories',
    slug: 'plates-accessories',
    name: 'Plates & Accessories',
    nameZh: '面板与配件',
    shortName: 'Accessories',
    shortNameZh: '配件',
    description: 'Screwless wall plates, modular inserts, surface boxes and connection outlets.',
    descriptionZh: '无框面板、模块插芯、明装底盒及出线座。',
    longDescription:
      'The parts that finish an installation: blank and modular faceplates, 86mm surface boxes, TV/network outlets and cord outlets with cable clamps — all dimensioned to the same grid as our switch and socket ranges.',
    keywords: ['wall plate', 'blank plate', 'surface box', 'modular', 'tv outlet', 'network outlet'],
  },
];

export const categoryById = (id: string): Category => {
  const found = categories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown category id: ${id}`);
  return found;
};

/* ---------- certifications.ts ---------- */

export const certifications: Certification[] = [
  {
    id: 'ce',
    code: 'CE',
    name: 'CE Conformity',
    nameZh: 'CE 符合性',
    description:
      'All switch and socket ranges carry CE marking under the Low Voltage Directive 2014/35/EU, with Declaration of Conformity available per product family.',
    descriptionZh: '全系列开关插座贴 CE 标志，符合低电压指令 2014/35/EU，按系列提供符合性声明。',
    scope: 'All ranges · EU / EEA',
    scopeZh: '全系列 · 欧盟/欧洲经济区',
  },
  {
    id: 'rohs',
    code: 'RoHS',
    name: 'RoHS 2.0 (EU 2015/863)',
    nameZh: 'RoHS 2.0（EU 2015/863）',
    description:
      'Every plastic part and plating is screened for the ten restricted substances. Batch-level reports accompany all EU-bound shipments.',
    descriptionZh: '所有塑料件与电镀层经十项限用物质筛查，输欧货物随附批次检测报告。',
    scope: 'All ranges · EU',
    scopeZh: '全系列 · 欧盟',
  },
  {
    id: 'ukca',
    code: 'UKCA',
    name: 'UKCA Marking',
    nameZh: 'UKCA 标志',
    description:
      'British-standard socket and switch ranges are UKCA-assessed for the UK market, including BS 1363-2 and BS 5733 compliance.',
    descriptionZh: '英式开关插座系列通过 UKCA 评估，符合 BS 1363-2 与 BS 5733。',
    scope: 'BS-pattern ranges · United Kingdom',
    scopeZh: '英式系列 · 英国',
  },
  {
    id: 'iso9001',
    code: 'ISO 9001',
    name: 'ISO 9001:2015',
    nameZh: 'ISO 9001:2015',
    description:
      'Quality management system certified since 2009 and re-audited annually. Scope covers design, molding, assembly and export of wiring devices.',
    descriptionZh: '质量管理体系自 2009 年认证并每年复审，覆盖电工产品的设计、注塑、组装与出口。',
    scope: 'Site-wide · Wenzhou facility',
    scopeZh: '全厂 · 温州工厂',
  },
  {
    id: 'iec',
    code: 'IEC',
    name: 'IEC Product Standards',
    nameZh: 'IEC 产品标准',
    description:
      'Products are type-tested to IEC 60669-1 (switches), IEC 60884-1 (sockets) and BS 1363-2, with independent lab reports from Intertek and SGS.',
    descriptionZh: '产品按 IEC 60669-1（开关）、IEC 60884-1（插座）、BS 1363-2 型式试验，附 Intertek/SGS 独立报告。',
    scope: 'Switches · sockets · weatherproof',
    scopeZh: '开关 · 插座 · 防水系列',
  },
  {
    id: 'saso',
    code: 'SASO',
    name: 'SASO / IECEE',
    nameZh: 'SASO / IECEE',
    description:
      'Selected ranges are certified under Saudi SASO IECEE recognition for Middle East distribution programs.',
    descriptionZh: '部分系列通过沙特 SASO IECEE 认可，适用于中东分销项目。',
    scope: 'Selected ranges · Saudi Arabia / GCC',
    scopeZh: '部分系列 · 沙特/海合会',
  },
];

export const capabilities: Capability[] = [
  {
    id: 'manufacturing',
    index: '01',
    title: 'Precision Manufacturing',
    titleZh: '精密制造',
    description:
      'Molding, stamping, contact assembly and final packing run inside one facility on the same production plan — no outsourced steps in the critical path.',
    descriptionZh: '成型、冲压、触点组装、包装同厂同计划完成，关键环节无外包。',
    points: [
      '24 injection molding machines, 80–650T clamping force',
      'High-speed progressive stamping for contact bridges and terminals',
      '8 automated assembly lines with vision inspection',
      '12M units annual output across 5 product families',
    ],
    pointsZh: [
      '24 台注塑机，锁模力 80–650T',
      '高速级进模冲压触点桥与端子',
      '8 条自动化产线，配视觉检测',
      '五大产品系列年产能 1200 万件',
    ],
  },
  {
    id: 'oem',
    index: '02',
    title: 'OEM Service',
    titleZh: 'OEM 服务',
    description:
      'Private-label production with your branding on plates, retail packaging and cartons — proven processes, your identity.',
    descriptionZh: '面板、包装、纸箱贴您的品牌，工艺成熟，品牌归您。',
    points: [
      'Logo engraving or pad printing, artwork proof in 3 days',
      'Retail-ready blister, constructor or plain export packing',
      'MOQ from 1,000 units per finish',
      'GS1 barcode labeling to your standard',
    ],
    pointsZh: [
      'Logo 镭雕或移印，3 天出稿确认',
      '零售吸塑、工程包装或普通出口包装',
      '起订量 1,000 件/色',
      '按您的标准贴 GS1 条码标签',
    ],
  },
  {
    id: 'odm',
    index: '03',
    title: 'ODM Development',
    titleZh: 'ODM 开发',
    description:
      'Existing platforms adapted to your market requirements — pin types, shutters, finishes and connectivity re-engineered without full custom tooling.',
    descriptionZh: '基于现有平台适配目标市场——插脚、保护门、表面处理、通讯协议改型，无需全新开模。',
    points: [
      'Platform modifications from 3,000 pcs',
      'New tooling in-house: 25–40 days typical',
      'First-article inspection before every mass run',
      'Sample submission within 7 days of drawing sign-off',
    ],
    pointsZh: [
      '平台改型 3,000 件起',
      '自有模具车间，新模通常 25–40 天',
      '每批量产前首件检验',
      '图纸确认后 7 天内交样',
    ],
  },
  {
    id: 'quality-control',
    index: '04',
    title: 'Quality Control & Testing',
    titleZh: '质量控制与检测',
    description:
      'A dedicated lab runs IEC-aligned test schedules on every production batch, with results archived for traceability.',
    descriptionZh: '专职实验室按 IEC 标准逐批检测，结果存档可追溯。',
    points: [
      'Endurance rigs: 50,000-cycle switch and 10,000-cycle socket tests',
      'Dielectric 2,000V / 1min and insulation resistance testing',
      'IPX5/IPX6 spray chamber for weatherproof ranges',
      'Temperature cycling −25°C to +85°C',
    ],
    pointsZh: [
      '寿命测试台：开关 50,000 次、插座 10,000 次插拔',
      '耐压 2,000V/1min 及绝缘电阻测试',
      'IPX5/IPX6 喷淋箱，用于防水系列',
      '温度循环 −25°C 至 +85°C',
    ],
  },
  {
    id: 'packaging',
    index: '05',
    title: 'Packaging & Private Label',
    titleZh: '包装与贴牌',
    description:
      'Packaging engineering that survives the sea freight and sells on the shelf — specified, proofed and packed in-house.',
    descriptionZh: '包装工程兼顾海运耐受与货架陈列——设计、打样、包装内部完成。',
    points: [
      'Drop-tested export cartons, 20kg max per master box',
      'Bilingual retail artwork support',
      'Blister, box, constructor and bulk packing options',
      'Container loading plans with utilization report',
    ],
    pointsZh: [
      '纸箱经跌落测试，单箱最重 20kg',
      '支持双语零售版面设计',
      '吸塑、彩盒、工程包装及散装可选',
      '提供集装箱装载方案及利用率报告',
    ],
  },
  {
    id: 'export-logistics',
    index: '06',
    title: 'Export Logistics',
    titleZh: '出口物流',
    description:
      'Forty minutes from Ningbo port with bonded warehousing; our documentation team ships to 40+ markets every month.',
    descriptionZh: '距宁波港 40 分钟，保税仓储；单证团队每月向 40+ 市场发货。',
    points: [
      'FOB / CIF / DDP terms on request',
      'Certificate of Origin, L/C and Embassy attestation handled',
      'Consolidated multi-SKU container loading',
      'Dedicated documentation clerk per account',
    ],
    pointsZh: [
      '可按需提供 FOB/CIF/DDP 条款',
      '代办原产地证、信用证及使馆认证',
      '多 SKU 拼箱装载',
      '每客户配备专职单证员',
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Do you support OEM and ODM orders?',
    questionZh: '是否支持 OEM 与 ODM 订单？',
    answer:
      'Yes — both. OEM private-label production starts at 1,000 units per finish, with your logo engraved or printed on plates and packaging. ODM platform modifications (pin types, shutters, finishes, connectivity) start at 3,000 pcs, and full custom tooling runs 25–40 days in our own mold shop.',
    answerZh: '可以。OEM 贴牌起订量 1,000 件/色，面板与包装可印您的 Logo；ODM 改型（插脚、保护门、表面处理、通讯协议）3,000 件起，全新模具 25–40 天于自有模具车间完成。',
  },
  {
    question: 'What is your MOQ?',
    questionZh: '起订量是多少？',
    answer:
      'Standard catalog items ship from 1,000 units per finish. Less than container load is acceptable for stocked lines. For mixed orders we consolidate SKUs into a single container loading plan.',
    answerZh: '常规产品起订量 1,000 件/色。现货系列可拼箱；多品类订单我们统一制定拼箱方案。',
  },
  {
    question: 'Can you provide samples before we order?',
    questionZh: '下单前能否提供样品？',
    answer:
      'Yes. We send production-intent samples within 7 days — three pieces free of charge, freight collected. Sample finishes and pin types can be mixed so your team can evaluate the range side by side.',
    answerZh: '可以。7 天内寄出量产标准样品——3 件免费，运费到付。样品可混搭颜色与插脚类型，便于对比评估。',
  },
  {
    question: 'Which certifications can you supply?',
    questionZh: '可提供哪些认证？',
    answer:
      'CE and RoHS on all ranges, UKCA on British-standard products, SASO IECEE for selected Middle East lines, and type-test reports to IEC 60669-1 / IEC 60884-1 / BS 1363-2 from Intertek and SGS. Declarations of Conformity are issued per shipment on request.',
    answerZh: '全系列 CE、RoHS；英式产品 UKCA；部分中东系列 SASO IECEE；型式试验报告（IEC 60669-1 / IEC 60884-1 / BS 1363-2）由 Intertek、SGS 出具。符合性声明可按需提供。',
  },
  {
    question: 'Which markets do you currently serve?',
    questionZh: '目前服务哪些市场？',
    answer:
      'Distributors and OEM buyers in more than 40 countries across Europe, North America, the Middle East and Southeast Asia. Our most common programs are private-label ranges for electrical wholesalers and project supply for hospitality developers.',
    answerZh: '欧洲、北美、中东、东南亚 40 多个国家的经销商与 OEM 采购商。主要项目为电气批发商贴牌系列及酒店工程供货。',
  },
  {
    question: 'How do I request a quote?',
    questionZh: '如何询价？',
    answer:
      'Use the Request a Quote form, or add products to the inquiry basket and submit the list together. Include quantities, target market and any certification or packaging requirements — our sales engineers reply within one business day.',
    answerZh: '使用询价表单，或将产品加入询盘清单一并提交。请注明数量、目标市场及认证/包装要求——销售工程师一个工作日内回复。',
  },
  {
    question: 'What are your payment and delivery terms?',
    questionZh: '付款与交货条款是什么？',
    answer:
      'Standard terms are 30% deposit with balance against B/L copy, T/T or L/C at sight. Lead time is 35–45 days after deposit for production orders; FOB, CIF and DDP are all workable from Ningbo.',
    answerZh: '常规条款：30% 定金，余款凭提单副本支付，电汇或即期信用证。生产订单收到定金后 35–45 天交货；FOB、CIF、DDP 均可自宁波出运。',
  },
  {
    question: 'What warranty do your products carry?',
    questionZh: '产品保修期多久？',
    answer:
      'Five years on mechanical construction and finishes, two years on electronic components — backed by a kept-defect analysis program that feeds results back into production within the same quarter.',
    answerZh: '机械结构与表面处理 5 年，电子元件 2 年——配套不良品分析机制，检测结果当季反馈至生产。',
  },
];

/* ---------- about.ts ---------- */

/* ---------- About page content (all rebrand-editable) ---------- */

export interface ProcessStep {
  step: string;
  title: string;
  titleZh?: string;
  body: string;
  bodyZh?: string;
}

export const factSheet: { label: string; labelZh?: string; value: string }[] = [
  { label: 'Founded', labelZh: '成立', value: '2004 · Wenzhou, Zhejiang' },
  { label: 'Facility', labelZh: '工厂', value: '52,000 m² · owned' },
  { label: 'Certified', labelZh: '认证', value: 'ISO 9001:2015 since 2009' },
  { label: 'Markets', labelZh: '市场', value: '40+ export countries' },
];

/** The physical production sequence — proof of real manufacturing capability. */
export const manufacturingProcess: ProcessStep[] = [
  { step: '01', title: 'Tooling', titleZh: '模具', body: 'Mold design and steel cutting in the 14-person mold shop; 25–40 days for a new tool.', bodyZh: '14 人模具车间负责模具设计与钢材加工，新模具周期 25–40 天。' },
  { step: '02', title: 'Injection molding', titleZh: '注塑', body: '24 machines, 80–650T, molding PC and nylon housings around the clock.', bodyZh: '24 台注塑机（80–650T）全天候成型 PC 与尼龙外壳。' },
  { step: '03', title: 'Contact stamping', titleZh: '触点冲压', body: 'High-speed progressive dies stamp silver-alloy contacts and brass terminals in-house.', bodyZh: '高速级进模内部冲压银合金触点与铜端子。' },
  { step: '04', title: 'Assembly', titleZh: '组装', body: '8 automated lines with vision inspection at every critical station.', bodyZh: '8 条自动化产线，关键工位均配视觉检测。' },
  { step: '05', title: 'Testing', titleZh: '测试', body: 'Batch sampling on endurance, dielectric and IP rigs before any carton is sealed.', bodyZh: '封箱前按批次抽样进行寿命、耐压及 IP 防护测试。' },
  { step: '06', title: 'Packing', titleZh: '包装', body: 'Blister, box or bulk packing with drop-tested cartons and GS1 labeling.', bodyZh: '吸塑、彩盒或散装包装，纸箱经跌落测试，贴 GS1 标签。' },
  { step: '07', title: 'Export', titleZh: '出口', body: 'Bonded warehouse, container loading plans and documentation 40 minutes from Ningbo port.', bodyZh: '保税仓、装箱方案与单证，距宁波港 40 分钟。' },
];

/** Photo strip used on the Capabilities page — PHOTO + CAPTION + CONTEXT. */
export const factoryMediaStrip: { subject: 'production' | 'quality' | 'packaging'; caption: string; captionZh?: string }[] = [
  { subject: 'production', caption: 'Injection molding — 24 machines, 80–650T', captionZh: '注塑车间——24 台机器，80–650T' },
  { subject: 'quality', caption: 'Dimensional and electrical testing, per batch', captionZh: '每批尺寸与电气测试' },
  { subject: 'packaging', caption: 'Carton-level export preparation, Ningbo', captionZh: '宁波港纸箱级出口准备' },
];

export const milestones: { year: string; text: string; textZh?: string }[] = [
  { year: '2004', text: 'Founded in Wenzhou with two molding machines producing wall switches for domestic brands.', textZh: '温州创立，两台注塑机为国产品牌生产墙壁开关。' },
  { year: '2009', text: 'ISO 9001 certification; first European distributor program launches in Germany.', textZh: '通过 ISO 9001 认证；首个德国经销商项目启动。' },
  { year: '2013', text: 'In-house testing lab commissioned; IEC type-testing moved on-site.', textZh: '自有检测实验室投入使用；IEC 型式试验移至厂内。' },
  { year: '2016', text: 'New 52,000 m² plant; USB charging and modular ranges added.', textZh: '5.2 万平方米新厂投产；新增 USB 充电与模块系列。' },
  { year: '2020', text: 'Smart controls platform developed — Wi-Fi and Zigbee lines for project business.', textZh: '开发智能控制平台——面向工程业务的 Wi-Fi 与 Zigbee 产品线。' },
  { year: '2024', text: '40th export market; annual capacity reaches 12 million units.', textZh: '出口第 40 个市场；年产能达 1200 万件。' },
];

/* ---------- hero.ts ---------- */

export const hero: HeroConfig = {
  eyebrow: 'Electrical Components Manufacturer — Est. 2004',
  eyebrowZh: '电工产品制造商 — 成立于 2004 年',
  titleLines: ['Wiring devices', 'built to specification.'],
  titleLinesZh: ['按规格生产的', '电工产品'],
  description:
    `${brand.name} manufactures wall switches, sockets, USB chargers and smart controls for distributors, contractors and OEM buyers in 40+ markets. In-house tooling, IEC-compliant testing, ${company.annualCapacity} of annual capacity.`,
  descriptionZh:
    `${brand.name} 为 40 多个市场的经销商、承包商及 OEM 采购商生产墙壁开关、插座、USB 充电器与智能控制产品。自有模具、IEC 标准检测、年产能 ${company.annualCapacityZh ?? company.annualCapacity}。`,
  primaryCta: { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
  secondaryCta: { label: 'Explore Products', labelZh: '浏览产品', href: '/products' },
  footnote: 'MOQ from 1,000 units · OEM & ODM · Samples in 7 days',
  footnoteZh: '起订量 1,000 件 · 支持 OEM/ODM · 样品 7 天',
  visualCaption: 'NV-210 series · 86 × 86 × 9 mm · IEC 60669-1 · screwless plate system',
  visualCaptionZh: 'NV-210 系列 · 86 × 86 × 9 mm · IEC 60669-1 · 无框面板系统',
};

export const ctaBand: CtaBandConfig = {
  eyebrow: 'Request a Quote',
  eyebrowZh: '询价',
  title: 'Tell us what your market needs.',
  titleZh: '告诉我们您的市场需求。',
  description:
    'Send quantities, target market and certification requirements. Our sales engineers respond within one business day with pricing, lead time and sample options.',
  descriptionZh:
    '发送数量、目标市场及认证要求，销售工程师一个工作日内回复报价、交期与样品方案。',
  primaryCta: { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
  secondaryCta: { label: 'Browse the Catalogue', labelZh: '浏览产品目录', href: '/products' },
};

/* ---------- Request Quote page: quiet commercial metadata under the hero ---------- */

export const quotePageMeta: { label: string; value: string; valueZh: string }[] = [
  { label: 'MOQ', value: 'from 1,000 units', valueZh: '1,000 件起' },
  { label: 'Samples', value: '7 days, 3 pcs free', valueZh: '7 天交样，3 件免费' },
  { label: 'Reply', value: 'within one business day', valueZh: '一个工作日内回复' },
  { label: 'OEM / ODM', value: 'from 3,000 pcs', valueZh: '3,000 件起' },
];

/* ---------- PDP commercial note ---------- */

export const pdpConfig = {
  oemLabel: 'OEM / ODM',
  oemNote: 'Private label and platform modifications — from 1,000 pcs',
  oemNoteZh: '贴牌及平台改型——1,000 件起',
  oemHref: '/capabilities#oem',
};

/* ---------- Footer CTA (small, quiet, above the link columns) ---------- */

export const footerCta = {
  title: 'Ready to specify your next program?',
  titleZh: '准备为下一个项目选型？',
  cta: { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
};

/* ---------- Home section copy ---------- */

export const homeSections = {
  categories: {
    index: '01',
    label: 'Product Range',
    labelZh: '产品系列',
    title: 'Five product families. One production standard.',
    titleZh: '五大产品系列，统一生产标准。',
    description:
      'Every product is molded, assembled and tested in our Wenzhou facility to the same IEC-aligned process — whether it ships as NOVA branded stock or your private label.',
    descriptionZh:
      '所有产品均在温州工厂按统一 IEC 标准流程成型、组装、测试，无论贴 NOVA 品牌还是您的自主品牌。',
  },
  factory: {
    index: '02',
    label: 'Manufacturing',
    labelZh: '制造能力',
    title: `${company.factoryArea} of controlled production.`,
    titleZh: `${company.factoryAreaZh ?? company.factoryArea} 可控生产基地。`,
    description:
      'From mold design to final carton, every stage happens inside our own facility. That control is why our defect rates stay low and our lead times stay predictable.',
    descriptionZh:
      '从模具设计到最终纸箱，每一道工序都在自有工厂内完成。正是这种控制让我们的缺陷率保持低位、交期可控。',
    points: [
      '24 injection molding machines, 80–650T, running engineering-grade PC and nylon',
      '8 automated assembly lines with vision inspection at every critical station',
      'In-house testing lab: endurance rigs, temperature cycling, IPX5/IPX6 spray chambers',
      'Bonded warehouse and export packing line 40 minutes from Ningbo port',
    ],
    pointsZh: [
      '24 台注塑机（80–650T），加工工程级 PC 与尼龙',
      '8 条自动化产线，关键工位均配视觉检测',
      '自有检测实验室：寿命测试、温度循环、IPX5/IPX6 喷淋',
      '保税仓与出口包装线，距宁波港 40 分钟',
    ],
    visual: 'production' as const,
  },
  featured: {
    index: '03',
    label: 'Featured Products',
    labelZh: '精选产品',
    title: 'The lines distributors reorder.',
    titleZh: '经销商反复补货的产品。',
    description:
      'Four catalogue heroes — proven sellers across European, British and smart-home programs, each available under private label.',
    descriptionZh:
      '四款目录热销产品——欧洲、英式及智能家居方案中的验证品，均可贴牌生产。',
  },
  capabilities: {
    index: '04',
    label: 'Capabilities',
    labelZh: '核心能力',
    title: 'What we do in-house.',
    titleZh: '全部工序内部完成。',
    description:
      'Six disciplines under one roof keep quality consistent and lead times honest.',
    descriptionZh:
      '六大工序同厂完成，品质稳定、交期可控。',
  },
  oem: {
    index: '05',
    label: 'OEM / ODM',
    labelZh: 'OEM / ODM',
    title: 'Your brand. Our production line.',
    titleZh: '您的品牌，我们的产线。',
    description:
      'We produce wiring devices under private label for distributors and retail chains across four continents. Send us a sample or a drawing — we handle tooling, certification mapping and packaging to your standard.',
    descriptionZh:
      '为四大洲经销商与连锁商超提供贴牌生产。寄样或提供图纸即可，模具、认证与包装按您的标准执行。',
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
    pointsZh: [
      {
        title: 'OEM 贴牌',
        body: '面板与包装镭雕或移印您的 Logo，3 天出稿，起订量 1,000 件/色。',
      },
      {
        title: 'ODM 开发',
        body: '基于现有平台适配目标市场：插脚类型、保护门、表面处理、无线协议改型，无需全新开模。',
      },
      {
        title: '定制包装',
        body: '零售吸塑盒、工程包装或普通出口纸箱——含按您 GS1 标准打印的条码标签。',
      },
      {
        title: '工程支持',
        body: '指定项目工程师审图、确认材料，并在量产前执行首件检验。',
      },
    ],
  },
  quality: {
    index: '06',
    label: 'Quality & Compliance',
    labelZh: '质量与认证',
    title: 'Tested here. Certified for your market.',
    titleZh: '本地检测，符合您市场标准。',
    description:
      'Every batch passes endurance and dielectric testing before it leaves the floor. Our lab runs to IEC 60669-1, IEC 60884-1 and BS 1363-2 schedules, and the facility is audited annually to ISO 9001:2015.',
    descriptionZh:
      '每批产品出厂前完成寿命与耐压测试。实验室按 IEC 60669-1、IEC 60884-1、BS 1363-2 标准执行，工厂每年通过 ISO 9001:2015 审核。',
  },
  export: {
    index: '07',
    label: 'Export & Markets',
    labelZh: '出口与市场',
    title: 'Shipping from Ningbo to 40+ markets.',
    titleZh: '宁波港直发，覆盖 40+ 市场。',
    description:
      'The plant gate is 40 minutes from Ningbo port. Documentation teams handle Certificates of Origin, L/C shipments and attestation per market, so mixed-SKU containers clear without surprises.',
    descriptionZh:
      '工厂距宁波港 40 分钟。单证团队办理原产地证、信用证及各市场使馆认证，多品类拼箱清关无忧。',
    facts: [
      { label: 'Terms', labelZh: '贸易条款', value: 'FOB · CIF · DDP' },
      { label: 'Documents', labelZh: '单证', value: 'CoO · L/C · attestation' },
      { label: 'Loading', labelZh: '装载', value: 'Consolidated multi-SKU' },
      { label: 'Markets', labelZh: '市场', value: 'EU · NA · MEA · SEA' },
    ],
    visual: 'packaging' as const,
  },
  tour: {
    index: '08',
    label: 'Factory Tour',
    labelZh: '车间导览',
    title: 'Inside the plant.',
    titleZh: '走进工厂。',
    description:
      'A walk through the workshop floor — molding, stamping, assembly, testing and packing — all in one controlled facility.',
    descriptionZh: '从注塑、冲压、组装、测试到包装，全部在同一受控基地内完成。',
    slots: [
      { image: '/assets/img/factory-workshop-01.jpg', subject: 'production' as const, caption: 'Injection molding floor', captionZh: '注塑车间' },
      { image: '/assets/img/factory-workshop-02.jpg', subject: 'quality' as const, caption: 'QC laboratory', captionZh: '质检实验室' },
      { image: '/assets/img/factory-workshop-03.jpg', subject: 'engineering' as const, caption: 'Tooling room', captionZh: '模具车间' },
      { image: '/assets/img/factory-workshop-04.jpg', subject: 'warehouse' as const, caption: 'Raw-material warehouse', captionZh: '原料仓' },
      { image: '/assets/img/factory-workshop-05.jpg', subject: 'packaging' as const, caption: 'Export packing line', captionZh: '出口包装线' },
      { image: '/assets/img/factory-workshop-06.jpg', subject: 'markets' as const, caption: 'Container loading bay', captionZh: '集装箱装货区' },
    ],
  },
  certificates: {
    index: '09',
    label: 'Certifications',
    labelZh: '认证扫描件',
    title: 'Paperwork your import desk can use.',
    titleZh: '进口清关可用的认证文件。',
    description:
      'High-resolution scans of ISO, CE, RoHS and UKCA certificates are available for every shipment on request.',
    descriptionZh: '可按需提供 ISO、CE、RoHS、UKCA 证书高清扫描件。',
  },
  trust: {
    index: '10',
    label: 'Why Buyers Trust Us',
    labelZh: '采购商为何信任我们',
    title: 'Numbers that matter to a purchase order.',
    titleZh: '采购订单上真正关心的数字。',
    description:
      'Consistent capacity, controlled quality and transparent lead times — the data points buyers verify before placing a program.',
    descriptionZh: '稳定的产能、可控的品质、透明的交期——下单前采购商都会核实的指标。',
    points: [
      { value: '12M', label: 'Annual capacity', labelZh: '年产能' },
      { value: '98.6%', label: 'QC pass rate', labelZh: '质检合格率' },
      { value: '35–45', label: 'Days lead time', labelZh: '天生产交期' },
      { value: '7', label: 'Days for samples', labelZh: '天出样' },
      { value: '40+', label: 'Export markets', labelZh: '出口市场' },
      { value: '20+', label: 'Years in business', labelZh: '年行业经验' },
    ],
  },
};

/* ---------- navigation.ts ---------- */

export const navigation: NavigationConfig = {
  header: [
    { label: 'Products', labelZh: '产品', href: '/products' },
    { label: 'Capabilities', labelZh: '生产能力', href: '/capabilities' },
    { label: 'Quality', labelZh: '质量', href: '/quality' },
    { label: 'Insights', labelZh: '洞察', href: '/insights' },
    { label: 'About', labelZh: '关于我们', href: '/about' },
    { label: 'Contact', labelZh: '联系我们', href: '/contact' },
  ],
  headerCta: { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
  footerColumns: [
    {
      title: 'Products',
      titleZh: '产品',
      links: [
        { label: 'Wall Switches', labelZh: '墙壁开关', href: '/products?category=wall-switches' },
        { label: 'Electrical Sockets', labelZh: '电气插座', href: '/products?category=electrical-sockets' },
        { label: 'USB Wall Chargers', labelZh: 'USB 充电插座', href: '/products?category=usb-wall-chargers' },
        { label: 'Smart Controls', labelZh: '智能控制', href: '/products?category=smart-controls' },
        { label: 'Plates & Accessories', labelZh: '面板与配件', href: '/products?category=plates-accessories' },
      ],
    },
    {
      title: 'Company',
      titleZh: '公司',
      links: [
        { label: 'About', labelZh: '关于我们', href: '/about' },
        { label: 'Capabilities', labelZh: '生产能力', href: '/capabilities' },
        { label: 'Quality', labelZh: '质量', href: '/quality' },
        { label: 'Insights', labelZh: '洞察', href: '/insights' },
        { label: 'Contact', labelZh: '联系我们', href: '/contact' },
        { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
      ],
    },
    {
      title: 'Buyers',
      titleZh: '采购商',
      links: [
        { label: 'OEM & ODM Service', labelZh: 'OEM / ODM 服务', href: '/capabilities#oem' },
        { label: 'Certifications', labelZh: '认证', href: '/quality#certifications' },
        { label: 'FAQ', labelZh: '常见问题', href: '/contact#faq' },
        { label: 'Inquiry', labelZh: '询盘', href: '/inquiry' },
      ],
    },
  ],
};

/* ---------- products.ts ---------- */

/* ============================================================
   PRODUCT CATALOGUE — 23 SKUs across 5 families.
   All catalogue-driven pages render from this file.
   ============================================================ */

const WTY = '5-year mechanical · 2-year on electronics';
const LEAD = 'Samples 7 days · production 35–45 days';

export const products: Product[] = [
  /* ---------------- WALL SWITCHES ---------------- */

  {
    id: 'nv-s110',
    slug: 'rocker-switch-1-gang-10ax',
    name: '1-Gang 10AX Rocker Switch',
    nameZh: '单联 10AX 翘板开关',
    sku: 'NV-S110',
    categoryId: 'wall-switches',
    shortDescription:
      'Single-gang rocker switch on the 86mm platform, rated 10AX 250V~ with silver-alloy contacts.',
    shortDescriptionZh: '86mm 平台单联翘板开关，额定 10AX 250V~，银合金触点。',
    description:
      'The NV-S110 is the baseline switch of the NOVA range: a large rocker on a screwless faceplate, molded from V-0 polycarbonate with a 1.4mm wall section. Silver-alloy contacts carry 10AX inductive loads, and phosphor-bronze terminals accept 2×2.5mm² conductors. The rocker mechanism is rated for 50,000 operations and passes the IEC 60669-1 endurance schedule.',
    descriptionZh:
      'NV-S110 是 NOVA 系列的基础款翘板开关：大翘板配无框面板，壳体采用 V-0 级聚碳酸酯注塑，壁厚 1.4mm。银合金触点可承载 10AX 感性负载，磷青铜端子可接入 2×2.5mm² 导线。翘板机构寿命 50,000 次，通过 IEC 60669-1 耐久测试。',
    features: [
      '10AX 250V~ rating for lighting and inductive loads',
      'Silver-alloy contacts, 50,000-cycle mechanical endurance',
      'Screwless clip-on faceplate, zero visible fixings',
      'Flame-retardant polycarbonate housing to UL94 V-0',
      'Phosphor-bronze terminals accept 2×2.5mm² conductors',
    ],
    featuresZh: [
      '额定 10AX 250V~，适用于照明及感性负载',
      '银合金触点，机械寿命 50,000 次',
      '无框卡扣面板，无可见螺丝',
      '阻燃聚碳酸酯壳体，达 UL94 V-0',
      '磷青铜端子，可接 2×2.5mm² 导线',
    ],
    specifications: [
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '10AX (inductive)' },
      { label: 'Endurance', value: '50,000 operations' },
      { label: 'Terminal capacity', value: '2 × 2.5mm² solid / flexible' },
      { label: 'Housing material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Faceplate', value: 'Screwless clip-on, 1.4mm wall' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Standard', value: 'IEC 60669-1' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec', 'iso9001'],
    keywords: ['light switch', 'rocker', '1 gang', '10AX', 'screwless'],
    featured: true,
    flagship: true,
    visual: { kind: 'rocker', variant: 1, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 11.5 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 11.5 kg',
    moq: '1,000 pcs (finishes may be mixed)',
    moqZh: '1,000 件（可混色）',
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-2-gang', 'schuko-socket-16a', 'dual-usb-a-outlet', 'screwless-wall-plate'],
  },

  {
    id: 'nv-s210',
    slug: 'rocker-switch-2-gang-2-way',
    name: '2-Gang 2-Way Rocker Switch',
    nameZh: '双联双控翘板开关',
    sku: 'NV-S210',
    categoryId: 'wall-switches',
    shortDescription:
      'Two independent rockers on a single plate for stairway and corridor 2-way circuits.',
    shortDescriptionZh: '单面板双翘板，适用于楼梯、走廊双控回路。',
    description:
      'The NV-S210 doubles circuit control without widening the plate: two independent 10AX rockers with separate terminal chambers on the standard 86mm grid. Common applications are 2-way stairway switching and paired lighting zones in hotels and offices.',
    descriptionZh:
      'NV-S210 在不加宽面板的前提下实现双路控制：标准 86mm 网格内装有两组独立 10AX 翘板，端子腔分离。常用于楼梯双控及酒店、办公区的成对照明分区。',
    features: [
      'Two independent 10AX circuits behind one plate',
      '2-way switching for stairway / corridor circuits',
      'Color-coded terminal screws with captive clamps',
      'Shared terminal chamber simplifies loop-in wiring',
      'Same screwless plate system as the full NOVA range',
    ],
    featuresZh: [
      '单面板内置两路独立 10AX 电路',
      '支持楼梯/走廊双控接线',
      '彩色端子螺丝，配防松夹',
      '共用端子腔，简化并线接线',
      '与全系列 NOVA 产品共用无框面板系统',
    ],
    specifications: [
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '2 × 10AX' },
      { label: 'Switching', value: '2-way' },
      { label: 'Endurance', value: '50,000 operations' },
      { label: 'Terminal capacity', value: '2 × 2.5mm² per gang' },
      { label: 'Housing material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Standard', value: 'IEC 60669-1' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['2 gang switch', '2 way', 'stairway', 'corridor'],
    visual: { kind: 'rocker', variant: 2, finish: 'white' },
    colors: ['Matte White', 'Gloss Black'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 12 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 12 kg',
    moq: '1,000 pcs (finishes may be mixed)',
    moqZh: '1,000 件（可混色）',
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-1-gang-10ax', 'rotary-led-dimmer-250w', 'schuko-socket-16a'],
  },

  {
    id: 'nv-s130',
    slug: 'bell-press-momentary-switch',
    name: 'Bell-Press Momentary Switch',
    nameZh: '门铃式点动开关',
    sku: 'NV-S130',
    categoryId: 'wall-switches',
    shortDescription:
      'Spring-return push switch for doorbells, hold-to-run controls and impulse relays.',
    shortDescriptionZh: '弹簧复位点动开关，适用于门铃、点动控制及脉冲继电器。',
    description:
      'The NV-S130 returns to rest the moment it is released, making it the right switch for bell circuits, impulse relay systems (latching actuators) and hold-to-run machine stations. The deep-travel push button gives a clear tactile confirmation that reads well in commercial corridors.',
    descriptionZh:
      'NV-S130 松手即复位，适用于门铃回路、脉冲继电器系统（自锁执行器）及点动控制工位。4mm 深行程按键触感明确，在商用走廊中操作反馈清晰。',
    features: [
      'Spring-return momentary action, 10A 250V~',
      'Impulse-relay compatible for modern latching circuits',
      'Deep 4mm travel with positive tactile feedback',
      'Interchangeable button caps in five finishes',
      'Suitable for doorbell and hold-to-run duty',
    ],
    featuresZh: [
      '弹簧复位点动，10A 250V~',
      '兼容脉冲继电器，适配现代自锁电路',
      '4mm 深行程，触感反馈明确',
      '五色可选按键盖，可互换',
      '适用于门铃及点动运行控制',
    ],
    specifications: [
      { label: 'Contact type', value: 'NO, momentary (spring return)' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '10A' },
      { label: 'Endurance', value: '100,000 operations' },
      { label: 'Terminal capacity', value: '2 × 2.5mm²' },
      { label: 'Housing material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Standard', value: 'IEC 60669-1' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Commercial', 'Residential', 'Industrial'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['bell press', 'momentary', 'push button', 'doorbell', 'impulse relay'],
    visual: { kind: 'rocker', variant: 3, finish: 'chrome' },
    colors: ['Polished Chrome', 'Matte White', 'Gloss Black'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 11 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 11 kg',
    moq: '1,000 pcs (finishes may be mixed)',
    moqZh: '1,000 件（可混色）',
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-1-gang-10ax', 'rotary-led-dimmer-250w'],
  },

  {
    id: 'nv-s150',
    slug: 'rotary-led-dimmer-250w',
    name: 'Rotary LED Dimmer 250W',
    nameZh: '旋转 LED 调光器 250W',
    sku: 'NV-S150',
    categoryId: 'wall-switches',
    shortDescription:
      'Push-on/off rotary dimmer with trailing-edge control, tuned for LED downlight loads from 5W.',
    shortDescriptionZh: '按压开关旋转调光，后沿控制，LED 筒灯 5W 起可调。',
    description:
      'The NV-S150 is a trailing-edge dimmer developed for the LED era: a stable dimming curve down to 5W loads without flicker or low-end dropout, with a minimum-load setting adjusted by the installer. Press the knob for on/off, turn for level. A replaceable trim ring covers retrofit plates from the NOVA accessory range.',
    descriptionZh:
      'NV-S150 是面向 LED 时代开发的后沿调光器：低至 5W 负载仍可保持稳定调光曲线，无闪烁、无低端熄灭，最小负载可由安装人员设定。按压旋钮开关，旋转调节亮度。可更换装饰环适配 NOVA 配件系列的改装面板。',
    features: [
      'Trailing-edge control, 5–250W LED / 40–400W halogen',
      'Flicker-free low-end with installer-adjustable minimum load',
      'Push-on / push-off switching through the knob',
      'Short-circuit and over-temperature protection',
      'Rotary knob interchangeable across NOVA finishes',
    ],
    featuresZh: [
      '后沿控制，LED 5–250W / 卤素灯 40–400W',
      '低端无闪烁，最小负载可由安装人员调节',
      '按压式开关，旋钮一体',
      '短路及过温保护',
      '旋钮可与 NOVA 全系列颜色互换',
    ],
    specifications: [
      { label: 'Control type', value: 'Trailing edge (reverse phase)' },
      { label: 'LED load range', value: '5–250W' },
      { label: 'Halogen load range', value: '40–400W' },
      { label: 'Rated voltage', value: '220–240V~, 50Hz' },
      { label: 'Protection', value: 'Short-circuit · over-temperature' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Standard', value: 'IEC 60669-2-1' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Hospitality', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['dimmer', 'trailing edge', 'led dimmer', 'rotary', '250w'],
    visual: { kind: 'rocker', variant: 4, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Champagne'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 60 pcs/ctn · 9.5 kg',
    packagingZh: '双泡罩，1 件/盒 · 60 件/箱 · 9.5 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['wifi-smart-dimmer-2g', 'rocker-switch-1-gang-10ax', 'led-downlight-plate'],
  },

  {
    id: 'nv-s660',
    slug: 'weatherproof-switch-ip66',
    name: 'IP66 Weatherproof Switch',
    nameZh: 'IP66 防水开关',
    sku: 'NV-S660',
    categoryId: 'wall-switches',
    shortDescription:
      'Sealed 20A rocker switch with hinged transparent cover for outdoor and wash-down areas.',
    shortDescriptionZh: '密封 20A 翘板开关，透明翻盖，适用于户外及冲洗区域。',
    description:
      'The NV-S660 puts a 20A industrial rocker behind a gasket-sealed, UV-stabilized housing with a hinged clear cover. It holds IP66 under hose-down conditions, which makes it standard equipment for outdoor lighting, pump rooms, food-processing wash areas and Gulf-region exterior circuits.',
    descriptionZh:
      'NV-S660 将 20A 工业翘板开关置于密封圈防护、抗 UV 老化外壳中，配透明翻盖。在喷淋条件下仍保持 IP66 防护等级，是户外照明、泵房、食品加工冲洗区及海湾地区室外电路的标配。',
    features: [
      'IP66 sealing with dual-lip gasket and hinged cover',
      'UV-stabilized grey polycarbonate, resistant to Gulf sun loads',
      '20A switch mechanism with silver contacts',
      'Padlockable cover for maintenance lock-out',
      'Cable glands top and bottom, M20 / M25',
    ],
    featuresZh: [
      'IP66 密封，双唇密封圈配翻盖',
      '抗 UV 灰色聚碳酸酯，耐受海湾地区日照',
      '20A 开关机构，银触点',
      '翻盖可挂锁，便于检修锁定',
      '顶部/底部配 M20/M25 电缆接头',
    ],
    specifications: [
      { label: 'Ingress protection', value: 'IP66' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '20A' },
      { label: 'Endurance', value: '50,000 operations' },
      { label: 'Housing material', value: 'UV-stabilized polycarbonate, grey RAL 7035' },
      { label: 'Cable entry', value: 'M20 / M25 glands, top + bottom' },
      { label: 'Operating temperature', value: '−25°C to +60°C' },
      { label: 'Standard', value: 'IEC 60669-1 · IP66 to IEC 60529' },
      { label: 'Dimensions', value: '120 × 120 × 95mm' },
    ],
    applications: ['Outdoor', 'Industrial', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iec', 'saso'],
    keywords: ['weatherproof switch', 'IP66', 'outdoor', '20A', 'waterproof'],
    visual: { kind: 'rocker', variant: 5, finish: 'graphite' },
    colors: ['Industrial Grey (RAL 7035)'],
    warranty: WTY,
    packaging: 'Inner box, 1 pc · 40 pcs/ctn · 14 kg',
    packagingZh: '内盒，1 件/盒 · 40 件/箱 · 14 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['weatherproof-socket-ip66', 'rocker-switch-1-gang-10ax'],
  },

  /* ---------------- ELECTRICAL SOCKETS ---------------- */

  {
    id: 'nv-e116',
    slug: 'schuko-socket-16a',
    name: 'Schuko Socket Outlet 16A',
    nameZh: '德式 Schuko 插座 16A',
    sku: 'NV-E116',
    categoryId: 'electrical-sockets',
    shortDescription:
      'German-standard CEE 7 receptacle with double-wipe contacts and child-protection shutters.',
    shortDescriptionZh: '德标 CEE 7 插座，双擦拭触点，带儿童保护门。',
    description:
      'The NV-E116 is our highest-volume receptacle: a Schuko outlet to CEE 7 / IEC 60884-1 with double-wipe contact springs that hold insertion force across 10,000 cycles. Patented child shutters block single-pole access, and the screwless plate finishes the wall line with the rest of the NOVA range.',
    descriptionZh:
      'NV-E116 是我们出货量最大的插座：符合 CEE 7 / IEC 60884-1 的 Schuko 插座，双擦拭触点弹簧在 10,000 次插拔后仍保持插拔力。专利儿童保护门防止单极插入，无框面板与 NOVA 全系列墙面产品线保持统一。',
    features: [
      'CEE 7 standard sheet, 16A 250V~',
      'Double-wipe contacts, 10,000-cycle insertion endurance',
      'Child-protection shutters block single-pole access',
      'Integrated earthing clips both sides',
      'Screwless clip-on faceplate, zero visible fixings',
    ],
    featuresZh: [
      'CEE 7 标准，16A 250V~',
      '双擦拭触点，10,000 次插拔寿命',
      '儿童保护门，防止单极插入',
      '两侧一体接地弹片',
      '无框卡扣面板，无可见螺丝',
    ],
    specifications: [
      { label: 'Standard', value: 'CEE 7 · IEC 60884-1' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '16A' },
      { label: 'Shutter system', value: 'Child protection, double-pole release' },
      { label: 'Contact material', value: 'Brass, 0.5mm silver plating' },
      { label: 'Endurance', value: '10,000 insertion cycles' },
      { label: 'Terminal capacity', value: '3 × 2.5mm²' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec', 'iso9001'],
    keywords: ['schuko', 'socket outlet', 'CEE 7', '16A', 'german socket'],
    featured: true,
    flagship: true,
    visual: { kind: 'socket', variant: 1, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 13 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 13 kg',
    moq: '1,000 pcs (finishes may be mixed)',
    moqZh: '1,000 件（可混色）',
    leadTime: LEAD,
    relatedSlugs: ['british-switched-socket-13a', 'dual-usb-a-outlet', 'usb-c-pd-outlet-30w', 'rocker-switch-1-gang-10ax'],
  },

  {
    id: 'nv-e213',
    slug: 'british-switched-socket-13a',
    name: 'British Switched Socket 13A',
    nameZh: '英式带开关插座 13A',
    sku: 'NV-E213',
    categoryId: 'electrical-sockets',
    shortDescription:
      'BS 1363 twin switched socket with integral 13A fuse and individually switched outlets.',
    shortDescriptionZh: 'BS 1363 双位带开关插座，内置 13A 保险丝，分位独立开关。',
    description:
      'Built to BS 1363-2 for UK, Gulf and Commonwealth markets, the NV-E213 pairs a twin 13A outlet with individually switched rockers and an accessible fuse holder. Shuttered pin entries, brass earth pin and color-coded screws make it the workhorse of UK-spec residential and hospitality programs.',
    descriptionZh:
      'NV-E213 按 BS 1363-2 为英国、海湾及英联邦市场设计：双位 13A 插座配独立开关翘板，保险丝座可便捷更换。带保护门插孔、黄铜接地脚及彩色端子螺丝，是英国标准住宅及酒店项目的可靠主力。',
    features: [
      'BS 1363-2 twin outlet, 13A with integral fuse',
      'Individually switched per gang',
      'Shuttered live and neutral entries',
      'Brass earth pin, double-wipe contacts',
      'UKCA-assessed, Gulf-market proven',
    ],
    featuresZh: [
      'BS 1363-2 双位插座，13A 内置保险丝',
      '每位独立开关',
      '火线/零线孔带保护门',
      '黄铜接地脚，双擦拭触点',
      'UKCA 评估，海湾市场验证',
    ],
    specifications: [
      { label: 'Standard', value: 'BS 1363-2' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '13A per gang' },
      { label: 'Fuse', value: '13A BS 1362, replaceable' },
      { label: 'Switching', value: 'Double-pole per gang' },
      { label: 'Terminal capacity', value: '3 × 4mm²' },
      { label: 'Mounting', value: '86mm flush box, 60.3mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Hospitality', 'Commercial'],
    certificationIds: ['ce', 'ukca', 'rohs', 'iec', 'saso'],
    keywords: ['BS 1363', '13A socket', 'switched socket', 'UK socket', 'twin socket'],
    featured: true,
    visual: { kind: 'socket', variant: 2, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 14 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 14 kg',
    moq: '1,000 pcs (finishes may be mixed)',
    moqZh: '1,000 件（可混色）',
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'universal-receptacle-2pe', 'usb-a-usb-c-outlet'],
  },

  {
    id: 'nv-e310',
    slug: 'universal-receptacle-2pe',
    name: 'Universal Receptacle 2P+E',
    nameZh: '万能插座 2P+E',
    sku: 'NV-E310',
    categoryId: 'electrical-sockets',
    shortDescription:
      'Multi-standard outlet that accepts Euro, UK, US, Australian and Chinese plugs.',
    shortDescriptionZh: '多标准插座，兼容欧式、英式、美式、澳式及中式插头。',
    description:
      'The NV-E310 solves the mixed-plug problem in one plate: shutters and contact sets arranged to accept Europlug, BS 1363, NEMA 5-15, AS/NZS 3112 and GB 1002 plugs. It is the default receptacle for international hotels, serviced apartments and airport lounges where guest plug types cannot be predicted.',
    descriptionZh:
      'NV-E310 在一块面板上解决多国插头问题：保护门与触点组可兼容 Europlug、BS 1363、NEMA 5-15、AS/NZS 3112 及 GB 1002 插头。是国际酒店、服务式公寓及机场贵宾室的默认选择，应对不确定的客用插头类型。',
    features: [
      'Accepts Euro, UK, US, Australian and Chinese plugs',
      'Universal shutter geometry, child-safe single-pole block',
      '16A 250V~ rating with 0.5mm silver-plated contacts',
      'Preferred receptacle for hospitality projects',
      'Interchangeable with all NOVA 86mm-grid products',
    ],
    featuresZh: [
      '兼容欧式、英式、美式、澳式及中式插头',
      '通用保护门结构，单极防儿童误插',
      '额定 16A 250V~，0.5mm 镀银触点',
      '酒店项目首选插座',
      '可与所有 NOVA 86mm 网格产品互换',
    ],
    specifications: [
      { label: 'Plug compatibility', value: 'CEE 7 · BS 1363 · NEMA 5-15 · AS/NZS 3112 · GB 1002' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '16A' },
      { label: 'Shutter system', value: 'Universal, child protection' },
      { label: 'Contact material', value: 'Brass, 0.5mm silver plating' },
      { label: 'Endurance', value: '10,000 insertion cycles' },
      { label: 'Terminal capacity', value: '3 × 2.5mm²' },
      { label: 'Standard', value: 'IEC 60884-1 (universal type)' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Hospitality', 'Commercial', 'Residential'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['universal socket', 'multi standard', 'hotel socket', 'travel', '2P+E'],
    featured: true,
    visual: { kind: 'socket', variant: 3, finish: 'white' },
    colors: ['Matte White', 'Polished Chrome', 'Champagne'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 13.5 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 13.5 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'usb-a-usb-c-outlet', 'zigbee-scene-panel-4-zone'],
  },

  {
    id: 'nv-e415',
    slug: 'tamper-resistant-duplex-15a',
    name: 'Tamper-Resistant Duplex Receptacle 15A',
    nameZh: '防误插双联插座 15A',
    sku: 'NV-E415',
    categoryId: 'electrical-sockets',
    shortDescription:
      'NEMA 5-15R duplex outlet with tamper-resistant shutters for North American programs.',
    shortDescriptionZh: 'NEMA 5-15R 双联插座，带防误插保护门，适用于北美项目。',
    description:
      'Developed for North American distributor programs, the NV-E415 is a NEMA 5-15R duplex receptacle with TR shutters that release only under simultaneous two-pole pressure. Break-off tabs allow split-wiring, and the self-grounding yoke speeds rough-in work.',
    descriptionZh:
      'NV-E415 面向北美经销商项目开发：NEMA 5-15R 双联插座配 TR 防误插保护门，仅在两极同时受压时打开。可掰离分接片支持分路接线，自接地支架加快粗装施工。',
    features: [
      'NEMA 5-15R, 15A 125V~, TR shutters',
      'Break-off tab for split-circuit wiring',
      'Self-grounding yoke, back and side wiring',
      'Heavy-gauge brass strap and contacts',
      'Complements US-market wiring device lines',
    ],
    featuresZh: [
      'NEMA 5-15R，15A 125V~，TR 保护门',
      '可掰离分接片，支持分路接线',
      '自接地支架，支持背部与侧部接线',
      '加厚黄铜支架与触点',
      '适配美国市场电工产品线',
    ],
    specifications: [
      { label: 'Standard', value: 'NEMA 5-15R · UL 498 style' },
      { label: 'Rated voltage', value: '125V~' },
      { label: 'Rated current', value: '15A' },
      { label: 'Shutter system', value: 'Tamper-resistant (TR)' },
      { label: 'Wiring', value: 'Back-wire clamp + side screw' },
      { label: 'Mounting', value: 'Single-gang US box' },
      { label: 'Operating temperature', value: '−20°C to +60°C' },
      { label: 'Dimensions', value: '70 × 115mm (strap)' },
    ],
    applications: ['Residential', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iso9001'],
    keywords: ['duplex receptacle', 'NEMA 5-15', 'tamper resistant', 'US socket', '15A'],
    visual: { kind: 'socket', variant: 4, finish: 'white' },
    colors: ['Matte White', 'Ivory'],
    warranty: WTY,
    packaging: 'Inner box, 1 pc · 100 pcs/ctn · 12 kg',
    packagingZh: '内盒，1 件/盒 · 100 件/箱 · 12 kg',
    moq: '2,000 pcs',
    moqZh: '2,000 件',
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'dual-usb-a-outlet'],
  },

  {
    id: 'nv-e660',
    slug: 'weatherproof-socket-ip66',
    name: 'IP66 Weatherproof Socket 16A',
    nameZh: 'IP66 防水插座 16A',
    sku: 'NV-E660',
    categoryId: 'electrical-sockets',
    shortDescription:
      'Sealed Schuko outlet in a hinged-cover enclosure for outdoor and industrial duty.',
    shortDescriptionZh: '翻盖密封外壳德式插座，适用于户外及工业环境。',
    description:
      'The NV-E660 packages our Schuko mechanism in the same IP66 enclosure family as the NV-S660 switch: dual-lip gasket, hinged clear cover and M20/M25 gland entries. Facilities teams use it for exterior power, workshops and agricultural buildings where hose-down and dust are routine.',
    descriptionZh:
      'NV-E660 将我们的 Schuko 机构封装在与 NV-S660 开关同系列的 IP66 外壳中：双唇密封圈、透明翻盖及 M20/M25 电缆接头。设施团队将其用于室外供电、车间及农业建筑，这些场所日常需要冲洗且灰尘较多。',
    features: [
      'IP66 enclosure with padlockable hinged cover',
      '16A Schuko mechanism with child shutters',
      'UV-stabilized grey polycarbonate housing',
      'M20 / M25 cable glands top and bottom',
      'Gulf and tropical climate proven',
    ],
    featuresZh: [
      'IP66 外壳，翻盖可挂锁',
      '16A Schuko 机构，带儿童保护门',
      '抗 UV 灰色聚碳酸酯外壳',
      '顶部/底部 M20/M25 电缆接头',
      '海湾及热带气候验证',
    ],
    specifications: [
      { label: 'Ingress protection', value: 'IP66' },
      { label: 'Standard', value: 'CEE 7 · IEC 60884-1' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '16A' },
      { label: 'Housing material', value: 'UV-stabilized polycarbonate, grey RAL 7035' },
      { label: 'Cable entry', value: 'M20 / M25 glands, top + bottom' },
      { label: 'Operating temperature', value: '−25°C to +60°C' },
      { label: 'Standard reference', value: 'IEC 60529 (IP66)' },
      { label: 'Dimensions', value: '120 × 120 × 95mm' },
    ],
    applications: ['Outdoor', 'Industrial', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iec', 'saso'],
    keywords: ['weatherproof socket', 'IP66', 'outdoor socket', 'waterproof', '16A'],
    visual: { kind: 'socket', variant: 5, finish: 'graphite' },
    colors: ['Industrial Grey (RAL 7035)'],
    warranty: WTY,
    packaging: 'Inner box, 1 pc · 40 pcs/ctn · 15 kg',
    packagingZh: '内盒，1 件/盒 · 40 件/箱 · 15 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['weatherproof-switch-ip66', 'schuko-socket-16a'],
  },

  /* ---------------- USB WALL CHARGERS ---------------- */

  {
    id: 'nv-u212',
    slug: 'dual-usb-a-outlet',
    name: 'Dual USB-A Charging Outlet 12W',
    nameZh: '双 USB-A 充电插座 12W',
    sku: 'NV-U212',
    categoryId: 'usb-wall-chargers',
    shortDescription:
      'Two USB-A ports behind a standard plate, 2.4A per port for guest rooms and offices.',
    shortDescriptionZh: '标准面板内嵌双 USB-A 端口，单口 2.4A，适用于客房与办公。',
    description:
      'The NV-U212 replaces a blank plate with two USB-A charging ports rated 5V/2.4A each — the configuration hospitality buyers still standardize on for bedside and desk power. EMI filtering keeps the radio-quiet profile hotel Wi-Fi surveys demand, and the converter module is replaceable from the front.',
    descriptionZh:
      'NV-U212 用两个 USB-A 充电端口取代空白面板，单口 5V/2.4A——这是酒店采购方仍为床头与桌面供电标准化的配置。EMI 滤波满足酒店 Wi-Fi 勘测对电磁静默的要求，转换模块可从正面更换。',
    features: [
      '2 × USB-A, 5V/2.4A each, 12W total',
      'Replaceable converter module, service from the front',
      'EMI filtering to EN 55032 Class B',
      'Over-current and over-temperature protection',
      'Combines with Schuko or universal receptacles',
    ],
    featuresZh: [
      '2 × USB-A，单口 5V/2.4A，共 12W',
      '转换模块可更换，正面即可维护',
      'EMI 滤波符合 EN 55032 Class B',
      '过流及过温保护',
      '可与 Schuko 或万能插座组合安装',
    ],
    specifications: [
      { label: 'Output', value: '2 × 5V / 2.4A (12W total)' },
      { label: 'Input', value: '220–240V~, 50/60Hz' },
      { label: 'Conversion efficiency', value: '≥ 85%' },
      { label: 'Protection', value: 'OCP · OTP · short-circuit' },
      { label: 'EMC', value: 'EN 55032 Class B' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Module service', value: 'Front-replaceable converter' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Hospitality', 'Residential', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['usb outlet', 'usb a', 'charging socket', '12W', 'hotel'],
    visual: { kind: 'usb', variant: 1, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 12.5 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 12.5 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['usb-c-pd-outlet-30w', 'usb-a-usb-c-outlet', 'schuko-socket-16a'],
  },

  {
    id: 'nv-u330',
    slug: 'usb-c-pd-outlet-30w',
    name: 'USB-C PD Charging Outlet 30W',
    nameZh: 'USB-C PD 充电插座 30W',
    sku: 'NV-U330',
    categoryId: 'usb-wall-chargers',
    shortDescription:
      'Single USB-C Power Delivery port, 30W — charges phones, tablets and most laptops.',
    shortDescriptionZh: '单 USB-C PD 端口 30W，可为手机、平板及多数笔记本充电。',
    description:
      'The NV-U330 delivers USB-C Power Delivery at 30W: full-speed charging for MacBook Air-class laptops, tablets and every current phone. Active PD negotiation and a GaN-based converter stage keep the module cool inside the wall, and a status LED confirms live output without lighting up a dark bedroom.',
    descriptionZh:
      'NV-U330 提供 30W USB-C PD 快充：可为 MacBook Air 级别笔记本、平板及当前主流手机全速充电。主动 PD 协议协商与 GaN 转换级让墙内模块保持低温，状态 LED 可确认输出状态，又不至于在暗室中过亮。',
    features: [
      'USB-C PD 3.0 output, 30W (5/9/12/15/20V profiles)',
      'GaN converter stage, cool wall operation',
      'Active PD negotiation with connected devices',
      'Sub-lumen status LED, dusk-friendly',
      'Charges laptops, tablets and phones from one plate',
    ],
    featuresZh: [
      'USB-C PD 3.0 输出，30W（5/9/12/15/20V 档位）',
      'GaN 转换级，墙内低温运行',
      '与连接设备主动协商 PD 协议',
      '亚流明状态灯，夜间不刺眼',
      '一块面板即可为笔记本、平板和手机充电',
    ],
    specifications: [
      { label: 'Output', value: 'USB-C PD 3.0, 30W max' },
      { label: 'PD profiles', value: '5V/3A · 9V/3A · 12V/2.5A · 15V/2A · 20V/1.5A' },
      { label: 'Input', value: '220–240V~, 50/60Hz' },
      { label: 'Converter', value: 'GaN-based, ≥ 90% efficiency' },
      { label: 'Protection', value: 'OCP · OVP · OTP · short-circuit' },
      { label: 'EMC', value: 'EN 55032 Class B' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Hospitality', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['usb c', 'power delivery', 'PD', '30W', 'laptop charging', 'fast charge'],
    featured: true,
    flagship: true,
    visual: { kind: 'usb', variant: 2, finish: 'white' },
    colors: ['Matte White', 'Gloss Black'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 13 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 13 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['usb-a-usb-c-outlet', 'gan-module-45w', 'schuko-socket-16a'],
  },

  {
    id: 'nv-u420',
    slug: 'usb-a-usb-c-outlet',
    name: 'USB-A + USB-C Combo Outlet 20W',
    nameZh: 'USB-A + USB-C 组合插座 20W',
    sku: 'NV-U420',
    categoryId: 'usb-wall-chargers',
    shortDescription:
      'USB-C PD and USB-A in one plate — the mixed-device answer for offices and hotels.',
    shortDescriptionZh: 'USB-C PD 与 USB-A 同板设计，兼顾新旧设备，适用于办公与酒店。',
    description:
      'Guests carry both cable types, so the NV-U420 puts one 20W USB-C PD port beside a 5V/2.4A USB-A port on a single plate. Port power is negotiated independently, and the mixed layout fits every 86mm-box program in the NOVA range without an oversized plate.',
    descriptionZh:
      '住客常携带两种线缆，因此 NV-U420 在单面板上并排布置一个 20W USB-C PD 端口与一个 5V/2.4A USB-A 端口。两端口独立协商功率，混合布局适配 NOVA 系列所有 86mm 底盒方案，无需加大面板。',
    features: [
      'USB-C 20W PD + USB-A 5V/2.4A, independent negotiation',
      'One plate covers legacy and current devices',
      'GaN converter, ≥ 88% efficiency',
      'Full protection suite: OCP, OVP, OTP',
      'Matches all NOVA plate finishes',
    ],
    featuresZh: [
      'USB-C 20W PD + USB-A 5V/2.4A，独立协商',
      '一块面板兼容新旧设备',
      'GaN 转换器，效率 ≥ 88%',
      '完整保护：OCP、OVP、OTP',
      '匹配 NOVA 全系列面板颜色',
    ],
    specifications: [
      { label: 'Output', value: 'USB-C 20W PD · USB-A 5V/2.4A' },
      { label: 'PD profiles', value: '5V/3A · 9V/2.22A · 12V/1.67A' },
      { label: 'Input', value: '220–240V~, 50/60Hz' },
      { label: 'Converter', value: 'GaN-based, ≥ 88% efficiency' },
      { label: 'Protection', value: 'OCP · OVP · OTP · short-circuit' },
      { label: 'EMC', value: 'EN 55032 Class B' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Hospitality', 'Commercial', 'Residential'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['usb c', 'usb a', 'combo outlet', '20W', 'charging'],
    featured: true,
    visual: { kind: 'usb', variant: 3, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 13 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 13 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['usb-c-pd-outlet-30w', 'dual-usb-a-outlet', 'universal-receptacle-2pe'],
  },

  {
    id: 'nv-u445',
    slug: 'gan-module-45w',
    name: 'GaN Fast-Charge Module 45W',
    nameZh: '氮化镓快充模块 45W',
    sku: 'NV-U445',
    categoryId: 'usb-wall-chargers',
    shortDescription:
      'Modular 45W GaN insert for 2-module faceplates — the highest output in the range.',
    shortDescriptionZh: '2 模块面板氮化镓插芯，45W 输出，为本系列最高功率。',
    description:
      'The NV-U445 is a 45W GaN charging module built to the European 2-module format: it snaps into the NV-P102 faceplate beside a socket or switch insert. One port negotiates PD up to 45W for laptop charging; the second serves USB-A. Service crews replace the module in under a minute, without disturbing the wall.',
    descriptionZh:
      'NV-U445 是 45W GaN 充电模块，按欧式 2 模块规格设计：可卡入 NV-P102 面板，与插座或开关插芯并排。C 口 PD 最高 45W，可为笔记本充电；A 口供普通设备。维护人员可在 1 分钟内更换模块，无需拆墙。',
    features: [
      'USB-C PD 45W (PPS supported) + USB-A 12W',
      'European 2-module format, tool-free snap-in',
      'GaN converter with active thermal rollback',
      'Front-serviceable module, 1-minute swap',
      'PPS profile for Samsung and modern Android fast charge',
    ],
    featuresZh: [
      'USB-C PD 45W（支持 PPS）+ USB-A 12W',
      '欧式 2 模块规格，免工具卡入',
      'GaN 转换器，主动热降额',
      '正面可维护模块，1 分钟快速更换',
      '支持 PPS，适配三星及主流安卓快充',
    ],
    specifications: [
      { label: 'Output', value: 'USB-C 45W PD/PPS · USB-A 5V/2.4A' },
      { label: 'PD profiles', value: '5V/3A · 9V/3A · 15V/3A · 20V/2.25A · PPS' },
      { label: 'Input', value: '220–240V~, 50/60Hz' },
      { label: 'Converter', value: 'GaN, ≥ 92% efficiency' },
      { label: 'Thermal', value: 'Active rollback at 75°C internal' },
      { label: 'Format', value: '2-module snap-in (55 × 55mm)' },
      { label: 'Mounting', value: 'NV-P102 faceplate / 2-gang frame' },
      { label: 'Dimensions', value: '55 × 55 × 32mm (module)' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['gan', '45W', 'module', 'pps', 'laptop', 'fast charge'],
    visual: { kind: 'usb', variant: 4, finish: 'graphite' },
    colors: ['Graphite', 'Matte White'],
    warranty: WTY,
    packaging: 'Inner box, 1 pc · 60 pcs/ctn · 9 kg',
    packagingZh: '内盒，1 件/盒 · 60 件/箱 · 9 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['modular-faceplate-2-module', 'usb-c-pd-outlet-30w'],
  },

  /* ---------------- SMART CONTROLS ---------------- */

  {
    id: 'nv-t110',
    slug: 'wifi-touch-switch-1g',
    name: 'Wi-Fi Touch Switch 1-Gang',
    nameZh: 'Wi-Fi 触控开关 单联',
    sku: 'NV-T110',
    categoryId: 'smart-controls',
    shortDescription:
      'Tempered-glass capacitive touch switch with Wi-Fi control and scheduling via Smart Life.',
    shortDescriptionZh: '钢化玻璃电容触控开关，支持 Wi-Fi 控制与涂鸦智能定时。',
    description:
      'The NV-T110 replaces a mechanical rocker with a tempered-glass capacitive panel that pairs to 2.4GHz Wi-Fi through the Smart Life / Tuya platform. Installers commission in about two minutes; residents get app control, scheduling, countdown timers and voice control through Alexa and Google Home. No hub required.',
    descriptionZh:
      'NV-T110 以钢化玻璃电容面板取代机械翘板，通过 Smart Life / 涂鸦平台接入 2.4GHz Wi-Fi。安装人员约 2 分钟即可完成配网；用户可通过 APP 控制、定时、倒计时，并支持 Alexa 与 Google Home 语音控制。无需网关。',
    features: [
      'Wi-Fi 2.4GHz, no hub required (Smart Life / Tuya)',
      'Tempered-glass panel, capacitive touch, LED backlight',
      'Schedules, countdown timers and grouping in app',
      'Works with Amazon Alexa and Google Home',
      'Neutral required · retrofit neutral-free version on request',
    ],
    featuresZh: [
      'Wi-Fi 2.4GHz，无需网关（Smart Life / 涂鸦）',
      '钢化玻璃面板，电容触控，LED 背光',
      'APP 支持定时、倒计时及分组',
      '兼容 Amazon Alexa 与 Google Home',
      '需零线 · 可提供免零线改装版本',
    ],
    specifications: [
      { label: 'Connectivity', value: 'Wi-Fi 2.4GHz (Smart Life / Tuya)' },
      { label: 'Voice control', value: 'Amazon Alexa · Google Home' },
      { label: 'Rated voltage', value: '110–240V~, neutral required' },
      { label: 'Load per gang', value: 'LED ≤ 200W · incandescent ≤ 500W' },
      { label: 'Panel', value: 'Tempered glass, 4mm, capacitive' },
      { label: 'Standby power', value: '< 0.3W' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 11mm' },
    ],
    applications: ['Residential', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['smart switch', 'wifi switch', 'touch switch', 'smart life', 'tuya'],
    featured: true,
    flagship: true,
    visual: { kind: 'smart', variant: 1, finish: 'black' },
    colors: ['Black Glass', 'White Glass'],
    warranty: WTY,
    packaging: 'Colour box, 1 pc · 60 pcs/ctn · 10 kg',
    packagingZh: '彩盒，1 件/盒 · 60 件/箱 · 10 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['wifi-smart-dimmer-2g', 'zigbee-scene-panel-4-zone', 'smart-socket-metered-16a'],
  },

  {
    id: 'nv-t220',
    slug: 'wifi-smart-dimmer-2g',
    name: 'Wi-Fi Smart Dimmer 2-Gang',
    nameZh: 'Wi-Fi 智能调光器 双联',
    sku: 'NV-T220',
    categoryId: 'smart-controls',
    shortDescription:
      'Two-channel glass touch dimmer with app, voice and slide dimming for LED loads.',
    shortDescriptionZh: '双路玻璃触控调光，支持 APP、语音及滑动调光，适配 LED 负载。',
    description:
      'The NV-T220 dims two independent LED circuits from one glass panel: touch for on/off, slide for level, or control remotely through Smart Life. Trailing-edge output is tuned for low minimum loads, so dimmable LED downlights hold a stable low-end without flicker — the detail that decides whether a hotel project signs off.',
    descriptionZh:
      'NV-T220 在一块玻璃面板上独立调光两路 LED：触控开关，滑动调光，也可通过 Smart Life 远程控制。后沿输出针对低最小负载调校，可调光 LED 筒灯在低亮度端稳定无闪烁——这正是酒店项目能否验收的关键细节。',
    features: [
      '2 × 150W LED trailing-edge dimming channels',
      'Touch on/off + slide brightness, or full app control',
      'Stable low-end from 5W, no flicker',
      'Scene and schedule support via Smart Life',
      'Alexa and Google Home voice control',
    ],
    featuresZh: [
      '2 × 150W LED 后沿调光通道',
      '触控开关 + 滑动调光，或全 APP 控制',
      '5W 起稳定低亮，无闪烁',
      'Smart Life 支持场景与定时',
      '支持 Alexa 与 Google Home 语音控制',
    ],
    specifications: [
      { label: 'Connectivity', value: 'Wi-Fi 2.4GHz (Smart Life / Tuya)' },
      { label: 'Channels', value: '2 independent dimming circuits' },
      { label: 'Load per channel', value: 'LED ≤ 150W · incandescent ≤ 300W' },
      { label: 'Control type', value: 'Trailing edge, 5W minimum load' },
      { label: 'Rated voltage', value: '110–240V~, neutral required' },
      { label: 'Panel', value: 'Tempered glass, 4mm, capacitive' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 11mm' },
    ],
    applications: ['Residential', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['smart dimmer', 'touch dimmer', 'wifi dimmer', 'led dimming'],
    featured: true,
    visual: { kind: 'smart', variant: 2, finish: 'black' },
    colors: ['Black Glass', 'White Glass'],
    warranty: WTY,
    packaging: 'Colour box, 1 pc · 60 pcs/ctn · 10.5 kg',
    packagingZh: '彩盒，1 件/盒 · 60 件/箱 · 10.5 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['wifi-touch-switch-1g', 'rotary-led-dimmer-250w', 'zigbee-scene-panel-4-zone'],
  },

  {
    id: 'nv-t316',
    slug: 'smart-socket-metered-16a',
    name: 'Smart Socket 16A with Energy Monitoring',
    nameZh: '智能插座 16A 带电量监测',
    sku: 'NV-T316',
    categoryId: 'smart-controls',
    shortDescription:
      'Schuko smart socket with per-outlet metering, remote switching and consumption history.',
    shortDescriptionZh: '德式智能插座，单口计量、远程开关及用电记录。',
    description:
      'The NV-T316 is a connected Schuko outlet: switch it remotely, set schedules, and read live power plus cumulative kWh per outlet from the app. Facility managers use it for after-hours load control and energy audits; residents use it for heater and appliance automation with hard 16A protection.',
    descriptionZh:
      'NV-T316 是一款联网 Schuko 插座：可远程开关、设定定时，并在 APP 中查看实时功率及单口累计 kWh。设施管理人员用于非工作时段负载控制与能耗审计；家庭用户用于取暖器与家电自动化，具备硬 16A 保护。',
    features: [
      'Live power (W) and cumulative kWh per outlet',
      'Remote switching and schedules via Smart Life',
      '16A Schuko mechanism with child shutters',
      'Overload cutoff with app notification',
      'Consumption history export for energy audits',
    ],
    featuresZh: [
      '单口实时功率（W）与累计 kWh',
      'Smart Life 远程开关与定时',
      '16A Schuko 机构，带儿童保护门',
      '过载自动断电并推送 APP 通知',
      '用电历史可导出，便于能耗审计',
    ],
    specifications: [
      { label: 'Connectivity', value: 'Wi-Fi 2.4GHz (Smart Life / Tuya)' },
      { label: 'Metering', value: 'Voltage · current · power · kWh' },
      { label: 'Metering accuracy', value: '± 1%' },
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '16A, overload cutoff' },
      { label: 'Standard', value: 'CEE 7 · IEC 60884-1' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 11mm' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['smart socket', 'energy monitoring', 'metering', 'wifi socket', 'kwh'],
    visual: { kind: 'smart', variant: 3, finish: 'white' },
    colors: ['Matte White'],
    warranty: WTY,
    packaging: 'Colour box, 1 pc · 60 pcs/ctn · 11 kg',
    packagingZh: '彩盒，1 件/盒 · 60 件/箱 · 11 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'wifi-touch-switch-1g'],
  },

  {
    id: 'nv-t440',
    slug: 'zigbee-scene-panel-4-zone',
    name: 'Zigbee Scene Panel 4-Zone',
    nameZh: 'Zigbee 场景面板 四区',
    sku: 'NV-T440',
    categoryId: 'smart-controls',
    shortDescription:
      'Battery-free Zigbee scene controller with four backlit zones for hotel and office projects.',
    shortDescriptionZh: '免电池 Zigbee 场景控制器，四区背光，适用于酒店与办公项目。',
    description:
      'The NV-T440 is a self-powered Zigbee scene controller: four zones trigger lighting scenes through the project hub with no battery and no neutral wiring, because the press generates its own energy. Installers bind zones in seconds; hotel and office operators use it at every entrance as the scene recall point.',
    descriptionZh:
      'NV-T440 是自供电 Zigbee 场景控制器：四区按键通过项目网关触发灯光场景，无需电池、无需零线，按压自发电。安装人员数秒完成绑定；酒店与办公运营方将其装于各入口作为场景召回面板。',
    features: [
      'Zigbee 3.0, self-powered — no battery, no neutral',
      '4 scene zones, each binding up to 30 devices',
      'Enocean-style energy harvesting push generator',
      '2-year memory retention of bindings',
      'Ideal entrance-panel for hotel and office scenes',
    ],
    featuresZh: [
      'Zigbee 3.0，自供电——无需电池与零线',
      '4 个场景区，每区最多绑定 30 个设备',
      'Enocean 式压电取能发电机构',
      '绑定关系断电记忆 2 年',
      '酒店与办公场景的理想入口面板',
    ],
    specifications: [
      { label: 'Connectivity', value: 'Zigbee 3.0, hub required' },
      { label: 'Zones', value: '4, up to 30 devices each' },
      { label: 'Power', value: 'Energy harvesting, no battery' },
      { label: 'Range', value: '30m indoor typical' },
      { label: 'Panel', value: 'Tempered glass, capacitive zones' },
      { label: 'Mounting', value: '86mm flush box, neutral not required' },
      { label: 'Radio compliance', value: 'ETSI EN 300 328' },
      { label: 'Dimensions', value: '86 × 86 × 11mm' },
    ],
    applications: ['Hospitality', 'Commercial'],
    certificationIds: ['ce', 'rohs'],
    keywords: ['zigbee', 'scene controller', 'smart panel', 'energy harvesting', 'hotel'],
    visual: { kind: 'smart', variant: 4, finish: 'black' },
    colors: ['Black Glass'],
    warranty: WTY,
    packaging: 'Colour box, 1 pc · 60 pcs/ctn · 9 kg',
    packagingZh: '彩盒，1 件/盒 · 60 件/箱 · 9 kg',
    moq: '500 pcs',
    moqZh: '500 件',
    leadTime: LEAD,
    relatedSlugs: ['wifi-touch-switch-1g', 'wifi-smart-dimmer-2g', 'rocker-switch-2-gang-2-way'],
  },

  /* ---------------- PLATES & ACCESSORIES ---------------- */

  {
    id: 'nv-p001',
    slug: 'screwless-wall-plate',
    name: 'Screwless Wall Plate',
    nameZh: '无框墙壁面板',
    sku: 'NV-P001',
    categoryId: 'plates-accessories',
    shortDescription:
      'Blank screwless faceplate that clips over any NOVA mechanism — the range signature finish.',
    shortDescriptionZh: '无框空白面板，卡扣适配全系列功能件，系列标志性外观。',
    description:
      'The NV-P001 is the plate that defines the NOVA look: a 1.4mm screwless face with a 2mm shadow gap, clipped over switches, sockets and modules alike. It snaps on by hand, aligns flush to the wall in one action, and can be removed for service without tools.',
    descriptionZh:
      'NV-P001 是定义 NOVA 外观的面板：1.4mm 厚无框面板配 2mm 阴影缝，可卡扣覆盖开关、插座与模块。单手按压即可安装，一步贴合墙面，维护时可徒手拆卸。',
    features: [
      'Screwless clip-on design, 2mm shadow gap',
      'Fits every mechanism in the NOVA 86mm range',
      'Tool-free removal for service and re-decoration',
      'Available in all five range finishes',
      '1.4mm wall section, UV-stable colorants',
    ],
    featuresZh: [
      '无框卡扣设计，2mm 阴影缝',
      '适配 NOVA 86mm 全系列功能件',
      '免工具拆卸，便于维护与翻新',
      '提供全系列五种颜色',
      '1.4mm 壁厚，抗 UV 色母',
    ],
    specifications: [
      { label: 'Type', value: 'Blank screwless faceplate' },
      { label: 'Material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Wall section', value: '1.4mm' },
      { label: 'Fixing', value: 'Hand-clip, no screws' },
      { label: 'Compatibility', value: 'All NOVA 86mm mechanisms' },
      { label: 'Dimensions', value: '86 × 86 × 9mm' },
      { label: 'Finish options', value: 'White · Black · Chrome · Champagne · Graphite' },
      { label: 'Standard', value: 'IEC 60669-1 (mechanical)' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs'],
    keywords: ['wall plate', 'blank plate', 'screwless', 'faceplate'],
    visual: { kind: 'accessory', variant: 1, finish: 'chrome' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome', 'Champagne', 'Graphite'],
    warranty: WTY,
    packaging: 'Bulk box · 500 pcs/ctn · 14 kg',
    packagingZh: '散装盒 · 500 件/箱 · 14 kg',
    moq: '1,000 pcs (finishes may be mixed)',
    moqZh: '1,000 件（可混色）',
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-1-gang-10ax', 'schuko-socket-16a', 'modular-faceplate-2-module'],
  },

  {
    id: 'nv-p102',
    slug: 'modular-faceplate-2-module',
    name: 'Modular Faceplate 2-Module',
    nameZh: '模块化面板 2 位',
    sku: 'NV-P102',
    categoryId: 'plates-accessories',
    shortDescription:
      'Two-module European frame that mixes switches, sockets, USB and data inserts.',
    shortDescriptionZh: '欧式 2 模块框架，可混搭开关、插座、USB 及数据插芯。',
    description:
      'The NV-P102 is the European 2-module frame that lets one plate carry whatever the room needs: a Schuko insert beside a USB module, a data jack beside a switch. Inserts snap in tool-free and stay interchangeable for the life of the installation.',
    descriptionZh:
      'NV-P102 是欧式 2 模块框架，让一块面板承载房间所需任意组合：Schuko 插芯旁配 USB 模块，数据口旁配开关。插芯免工具卡入，且在安装生命周期内可随时更换。',
    features: [
      'Standard European 2-module (55 × 55mm) format',
      'Mix and match NOVA and compatible inserts',
      'Tool-free snap-in assembly',
      'Center bridge aligns inserts to one plane',
      'Also hosts the NV-U445 GaN charge module',
    ],
    featuresZh: [
      '标准欧式 2 模块（55 × 55mm）规格',
      '可混搭 NOVA 及兼容插芯',
      '免工具卡入组装',
      '中心桥将插芯对齐同一平面',
      '亦可安装 NV-U445 GaN 充电模块',
    ],
    specifications: [
      { label: 'Format', value: 'European 2-module (2 × 55 × 55mm)' },
      { label: 'Material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Insert retention', value: 'Snap-in, tool-free' },
      { label: 'Compatible inserts', value: 'NOVA modular range · NV-U445' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
      { label: 'Finish options', value: 'White · Black · Chrome · Graphite' },
      { label: 'Standard', value: 'DIN 49075 frame format' },
    ],
    applications: ['Residential', 'Commercial'],
    certificationIds: ['ce', 'rohs'],
    keywords: ['modular', '2 module', 'faceplate', 'frame', 'insert'],
    visual: { kind: 'accessory', variant: 2, finish: 'white' },
    colors: ['Matte White', 'Gloss Black', 'Polished Chrome', 'Graphite'],
    warranty: WTY,
    packaging: 'Bulk box · 400 pcs/ctn · 13 kg',
    packagingZh: '散装盒 · 400 件/箱 · 13 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['gan-module-45w', 'screwless-wall-plate', 'tv-network-outlet'],
  },

  {
    id: 'nv-p086',
    slug: 'surface-mount-box-86mm',
    name: 'Surface Mount Box 86mm',
    nameZh: '明装底盒 86mm',
    sku: 'NV-P086',
    categoryId: 'plates-accessories',
    shortDescription:
      '32mm-deep surface box for concrete walls and retrofit installations, 86mm grid.',
    shortDescriptionZh: '32mm 深明装底盒，适用于混凝土墙及改造项目，86mm 网格。',
    description:
      'Where chasing concrete is not economical, the NV-P086 carries the full NOVA range on the wall surface: a 32mm-deep box with molded landings for conduit entry, cable clamps and the same 60mm fixing centres as our flush products.',
    descriptionZh:
      '在混凝土墙面开槽不经济时，NV-P086 可将全系列 NOVA 产品明装于墙面：32mm 深底盒，带一体化线管入口平台、压线夹，安装孔距 60mm，与暗装产品一致。',
    features: [
      '32mm depth fits smart modules and dimmer bodies',
      'Molded conduit landings, 20mm top and bottom',
      'Integral cable clamps, no loose parts',
      'Same 60mm centres as flush range',
      'Powder-coat-friendly surface for project colors',
    ],
    featuresZh: [
      '32mm 深度可容纳智能模块与调光器本体',
      '顶部/底部一体化 20mm 线管入口平台',
      '内置压线夹，无松散零件',
      '安装孔距 60mm，与暗装系列一致',
      '表面适合喷涂，便于项目定制颜色',
    ],
    specifications: [
      { label: 'Depth', value: '32mm' },
      { label: 'Footprint', value: '86 × 86mm' },
      { label: 'Material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Conduit entry', value: '20mm, top + bottom landings' },
      { label: 'Fixing centres', value: '60mm' },
      { label: 'Cable clamps', value: 'Integral, 2 × 2.5mm²' },
      { label: 'Dimensions', value: '86 × 86 × 32mm' },
    ],
    applications: ['Residential', 'Commercial', 'Industrial'],
    certificationIds: ['ce', 'rohs'],
    keywords: ['surface box', 'mounting box', '86mm', 'retrofit'],
    visual: { kind: 'accessory', variant: 3, finish: 'white' },
    colors: ['Matte White'],
    warranty: WTY,
    packaging: 'Bulk box · 300 pcs/ctn · 12 kg',
    packagingZh: '散装盒 · 300 件/箱 · 12 kg',
    moq: '2,000 pcs',
    moqZh: '2,000 件',
    leadTime: LEAD,
    relatedSlugs: ['screwless-wall-plate', 'modular-faceplate-2-module'],
  },

  {
    id: 'nv-p502',
    slug: 'tv-network-outlet',
    name: 'TV + Network Wall Outlet',
    nameZh: '电视+网络墙壁插座',
    sku: 'NV-P502',
    categoryId: 'plates-accessories',
    shortDescription:
      'Coax F-connector and Cat6 RJ45 jack on one plate, with tool-free termination.',
    shortDescriptionZh: '同板集成同轴 F 头与 Cat6 网口，免工具接线。',
    description:
      'The NV-P502 puts a screened coax F-outlet and a Cat6 RJ45 jack behind one NOVA plate. Both modules terminate tool-free — IDC contacts for the Cat6 jack, captive F-connector for coax — and the assembly is shielded end-to-end for Gigabit-class networks.',
    descriptionZh:
      'NV-P502 在同一块 NOVA 面板后集成屏蔽同轴 F 头与 Cat6 RJ45 网口。两个模块均免工具接线——Cat6 网口用 IDC 触点，同轴用固定式 F 头——整体屏蔽端到端，满足千兆网络要求。',
    features: [
      'Cat6 RJ45 jack, tool-free IDC termination',
      'Screened coax F-connector, 75Ω',
      'Shielded assembly for Gigabit networks',
      'Modules removable independently',
      'T568A / T568B compatible labeling',
    ],
    featuresZh: [
      'Cat6 RJ45 网口，IDC 免工具接线',
      '屏蔽同轴 F 头，75Ω',
      '整体屏蔽，适配千兆网络',
      '两模块可独立拆卸',
      '兼容 T568A/T568B 标识',
    ],
    specifications: [
      { label: 'Data module', value: 'Cat6 UTP/FTP RJ45, IDC' },
      { label: 'TV module', value: 'F-connector female, 75Ω, 5–2400MHz' },
      { label: 'Shielding', value: 'End-to-end screened housing' },
      { label: 'Termination', value: 'Tool-free (IDC + captive F)' },
      { label: 'Wiring scheme', value: 'T568A / T568B' },
      { label: 'Mounting', value: '86mm flush box, 60mm centres' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Commercial', 'Hospitality'],
    certificationIds: ['ce', 'rohs'],
    keywords: ['network outlet', 'cat6', 'rj45', 'tv outlet', 'coax', 'f connector'],
    visual: { kind: 'accessory', variant: 4, finish: 'white' },
    colors: ['Matte White', 'Gloss Black'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 12 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 12 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['modular-faceplate-2-module', 'screwless-wall-plate'],
  },

  {
    id: 'nv-p616',
    slug: 'cord-outlet-16a',
    name: 'Cord Outlet 16A with Cable Clamp',
    nameZh: '出线座 16A 带压线夹',
    sku: 'NV-P616',
    categoryId: 'plates-accessories',
    shortDescription:
      'Hard-wired cord exit with strain-relief clamp for fixed appliances and furniture power.',
    shortDescriptionZh: '硬接线出线座，带防拉线夹，适用于固定电器及家具供电。',
    description:
      'The NV-P616 provides a clean, code-compliant cord exit where a plug is not wanted: a 16A terminal block behind a plate with an adjustable strain-relief clamp that grips 6–10mm cables. Kitchens, furniture power and fixed appliance connections are the standard applications.',
    descriptionZh:
      'NV-P616 在不需要插头的地方提供整洁、合规的出线方案：面板后装 16A 端子台，配可调防拉线夹，夹持 6–10mm 电缆。厨房、家具供电及固定电器连接是典型应用。',
    features: [
      '16A terminal block, 3-pole',
      'Adjustable strain-relief clamp, 6–10mm cables',
      'Captive cord-grip screws cannot be dropped',
      'Flush or surface installation',
      'Completes appliance and furniture power circuits',
    ],
    featuresZh: [
      '16A 端子台，3 极',
      '可调防拉线夹，适配 6–10mm 电缆',
      '防松压线螺丝，不易脱落',
      '暗装或明装均可',
      '完善电器与家具供电回路',
    ],
    specifications: [
      { label: 'Rated voltage', value: '250V~' },
      { label: 'Rated current', value: '16A' },
      { label: 'Terminals', value: '3-pole, 2 × 2.5mm² each' },
      { label: 'Cable grip', value: '6–10mm dia., adjustable clamp' },
      { label: 'Mounting', value: '86mm flush or surface box' },
      { label: 'Material', value: 'Polycarbonate, UL94 V-0' },
      { label: 'Dimensions', value: '86 × 86 × 9mm (plate)' },
    ],
    applications: ['Residential', 'Commercial'],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['cord outlet', 'strain relief', 'appliance outlet', 'furniture power'],
    visual: { kind: 'accessory', variant: 5, finish: 'white' },
    colors: ['Matte White', 'Gloss Black'],
    warranty: WTY,
    packaging: 'Double blister, 1 pc/box · 100 pcs/ctn · 11 kg',
    packagingZh: '双泡罩，1 件/盒 · 100 件/箱 · 11 kg',
    moq: '1,000 pcs',
    moqZh: '1,000 件',
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'surface-mount-box-86mm'],
  },
];

/* Catalogue references used by copy blocks */
export const productCount = products.length;

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
