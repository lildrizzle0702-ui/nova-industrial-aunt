import type { HeroConfig, CtaBandConfig } from '../data/types';
import { company } from './company';
import { brand } from './brand';

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
