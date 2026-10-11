import type { CompanyConfig, FactoryStat } from '../data/types';

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
