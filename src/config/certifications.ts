import type { Certification, Capability, FaqItem } from '../data/types';

export const certifications: Certification[] = [
  {
    id: 'ce',
    code: 'CE',
    name: 'CE Conformity',
    description:
      'All switch and socket ranges carry CE marking under the Low Voltage Directive 2014/35/EU, with Declaration of Conformity available per product family.',
    descriptionZh: '全系列开关插座贴 CE 标志，符合低电压指令 2014/35/EU，按系列提供符合性声明。',
    scope: 'All ranges · EU / EEA',
  },
  {
    id: 'rohs',
    code: 'RoHS',
    name: 'RoHS 2.0 (EU 2015/863)',
    description:
      'Every plastic part and plating is screened for the ten restricted substances. Batch-level reports accompany all EU-bound shipments.',
    descriptionZh: '所有塑料件与电镀层经十项限用物质筛查，输欧货物随附批次检测报告。',
    scope: 'All ranges · EU',
  },
  {
    id: 'ukca',
    code: 'UKCA',
    name: 'UKCA Marking',
    description:
      'British-standard socket and switch ranges are UKCA-assessed for the UK market, including BS 1363-2 and BS 5733 compliance.',
    descriptionZh: '英式开关插座系列通过 UKCA 评估，符合 BS 1363-2 与 BS 5733。',
    scope: 'BS-pattern ranges · United Kingdom',
  },
  {
    id: 'iso9001',
    code: 'ISO 9001',
    name: 'ISO 9001:2015',
    description:
      'Quality management system certified since 2009 and re-audited annually. Scope covers design, molding, assembly and export of wiring devices.',
    descriptionZh: '质量管理体系自 2009 年认证并每年复审，覆盖电工产品的设计、注塑、组装与出口。',
    scope: 'Site-wide · Wenzhou facility',
  },
  {
    id: 'iec',
    code: 'IEC',
    name: 'IEC Product Standards',
    description:
      'Products are type-tested to IEC 60669-1 (switches), IEC 60884-1 (sockets) and BS 1363-2, with independent lab reports from Intertek and SGS.',
    descriptionZh: '产品按 IEC 60669-1（开关）、IEC 60884-1（插座）、BS 1363-2 型式试验，附 Intertek/SGS 独立报告。',
    scope: 'Switches · sockets · weatherproof',
  },
  {
    id: 'saso',
    code: 'SASO',
    name: 'SASO / IECEE',
    description:
      'Selected ranges are certified under Saudi SASO IECEE recognition for Middle East distribution programs.',
    descriptionZh: '部分系列通过沙特 SASO IECEE 认可，适用于中东分销项目。',
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
    descriptionZh: '成型、冲压、触点组装、包装同厂同计划完成，关键环节无外包。',
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
    descriptionZh: '面板、包装、纸箱贴您的品牌，工艺成熟，品牌归您。',
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
    descriptionZh: '基于现有平台适配目标市场——插脚、保护门、表面处理、通讯协议改型，无需全新开模。',
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
    descriptionZh: '专职实验室按 IEC 标准逐批检测，结果存档可追溯。',
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
    descriptionZh: '包装工程兼顾海运耐受与货架陈列——设计、打样、包装内部完成。',
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
    descriptionZh: '距宁波港 40 分钟，保税仓储；单证团队每月向 40+ 市场发货。',
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
    answerZh: '可以。OEM 贴牌起订量 1,000 件/色，面板与包装可印您的 Logo；ODM 改型（插脚、保护门、表面处理、通讯协议）3,000 件起，全新模具 25–40 天于自有模具车间完成。',
  },
  {
    question: 'What is your MOQ?',
    answer:
      'Standard catalog items ship from 1,000 units per finish. Less than container load is acceptable for stocked lines. For mixed orders we consolidate SKUs into a single container loading plan.',
    answerZh: '常规产品起订量 1,000 件/色。现货系列可拼箱；多品类订单我们统一制定拼箱方案。',
  },
  {
    question: 'Can you provide samples before we order?',
    answer:
      'Yes. We send production-intent samples within 7 days — three pieces free of charge, freight collected. Sample finishes and pin types can be mixed so your team can evaluate the range side by side.',
    answerZh: '可以。7 天内寄出量产标准样品——3 件免费，运费到付。样品可混搭颜色与插脚类型，便于对比评估。',
  },
  {
    question: 'Which certifications can you supply?',
    answer:
      'CE and RoHS on all ranges, UKCA on British-standard products, SASO IECEE for selected Middle East lines, and type-test reports to IEC 60669-1 / IEC 60884-1 / BS 1363-2 from Intertek and SGS. Declarations of Conformity are issued per shipment on request.',
    answerZh: '全系列 CE、RoHS；英式产品 UKCA；部分中东系列 SASO IECEE；型式试验报告（IEC 60669-1 / IEC 60884-1 / BS 1363-2）由 Intertek、SGS 出具。符合性声明可按需提供。',
  },
  {
    question: 'Which markets do you currently serve?',
    answer:
      'Distributors and OEM buyers in more than 40 countries across Europe, North America, the Middle East and Southeast Asia. Our most common programs are private-label ranges for electrical wholesalers and project supply for hospitality developers.',
    answerZh: '欧洲、北美、中东、东南亚 40 多个国家的经销商与 OEM 采购商。主要项目为电气批发商贴牌系列及酒店工程供货。',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Use the Request a Quote form, or add products to the inquiry basket and submit the list together. Include quantities, target market and any certification or packaging requirements — our sales engineers reply within one business day.',
    answerZh: '使用询价表单，或将产品加入询盘清单一并提交。请注明数量、目标市场及认证/包装要求——销售工程师一个工作日内回复。',
  },
  {
    question: 'What are your payment and delivery terms?',
    answer:
      'Standard terms are 30% deposit with balance against B/L copy, T/T or L/C at sight. Lead time is 35–45 days after deposit for production orders; FOB, CIF and DDP are all workable from Ningbo.',
    answerZh: '常规条款：30% 定金，余款凭提单副本支付，电汇或即期信用证。生产订单收到定金后 35–45 天交货；FOB、CIF、DDP 均可自宁波出运。',
  },
  {
    question: 'What warranty do your products carry?',
    answer:
      'Five years on mechanical construction and finishes, two years on electronic components — backed by a kept-defect analysis program that feeds results back into production within the same quarter.',
    answerZh: '机械结构与表面处理 5 年，电子元件 2 年——配套不良品分析机制，检测结果当季反馈至生产。',
  },
];
