import type { Certification, Capability, FaqItem } from '../data/types';

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
