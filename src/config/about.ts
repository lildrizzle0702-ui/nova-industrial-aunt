/* ---------- About page content (all rebrand-editable) ---------- */

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
  bodyZh?: string;
}

export const factSheet: { label: string; value: string }[] = [
  { label: 'Founded', value: '2004 · Wenzhou, Zhejiang' },
  { label: 'Facility', value: '52,000 m² · owned' },
  { label: 'Certified', value: 'ISO 9001:2015 since 2009' },
  { label: 'Markets', value: '40+ export countries' },
];

/** The physical production sequence — proof of real manufacturing capability. */
export const manufacturingProcess: ProcessStep[] = [
  { step: '01', title: 'Tooling', body: 'Mold design and steel cutting in the 14-person mold shop; 25–40 days for a new tool.', bodyZh: '14 人模具车间负责模具设计与钢材加工，新模具周期 25–40 天。' },
  { step: '02', title: 'Injection molding', body: '24 machines, 80–650T, molding PC and nylon housings around the clock.', bodyZh: '24 台注塑机（80–650T）全天候成型 PC 与尼龙外壳。' },
  { step: '03', title: 'Contact stamping', body: 'High-speed progressive dies stamp silver-alloy contacts and brass terminals in-house.', bodyZh: '高速级进模内部冲压银合金触点与铜端子。' },
  { step: '04', title: 'Assembly', body: '8 automated lines with vision inspection at every critical station.', bodyZh: '8 条自动化产线，关键工位均配视觉检测。' },
  { step: '05', title: 'Testing', body: 'Batch sampling on endurance, dielectric and IP rigs before any carton is sealed.', bodyZh: '封箱前按批次抽样进行寿命、耐压及 IP 防护测试。' },
  { step: '06', title: 'Packing', body: 'Blister, box or bulk packing with drop-tested cartons and GS1 labeling.', bodyZh: '吸塑、彩盒或散装包装，纸箱经跌落测试，贴 GS1 标签。' },
  { step: '07', title: 'Export', body: 'Bonded warehouse, container loading plans and documentation 40 minutes from Ningbo port.', bodyZh: '保税仓、装箱方案与单证，距宁波港 40 分钟。' },
];

/** Photo strip used on the Capabilities page — PHOTO + CAPTION + CONTEXT. */
export const factoryMediaStrip: { subject: 'production' | 'quality' | 'packaging'; caption: string }[] = [
  { subject: 'production', caption: 'Injection molding — 24 machines, 80–650T' },
  { subject: 'quality', caption: 'Dimensional and electrical testing, per batch' },
  { subject: 'packaging', caption: 'Carton-level export preparation, Ningbo' },
];

export const milestones: { year: string; text: string; textZh?: string }[] = [
  { year: '2004', text: 'Founded in Wenzhou with two molding machines producing wall switches for domestic brands.', textZh: '温州创立，两台注塑机为国产品牌生产墙壁开关。' },
  { year: '2009', text: 'ISO 9001 certification; first European distributor program launches in Germany.', textZh: '通过 ISO 9001 认证；首个德国经销商项目启动。' },
  { year: '2013', text: 'In-house testing lab commissioned; IEC type-testing moved on-site.', textZh: '自有检测实验室投入使用；IEC 型式试验移至厂内。' },
  { year: '2016', text: 'New 52,000 m² plant; USB charging and modular ranges added.', textZh: '5.2 万平方米新厂投产；新增 USB 充电与模块系列。' },
  { year: '2020', text: 'Smart controls platform developed — Wi-Fi and Zigbee lines for project business.', textZh: '开发智能控制平台——面向工程业务的 Wi-Fi 与 Zigbee 产品线。' },
  { year: '2024', text: '40th export market; annual capacity reaches 12 million units.', textZh: '出口第 40 个市场；年产能达 1200 万件。' },
];
