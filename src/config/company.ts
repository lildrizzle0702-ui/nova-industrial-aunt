import type { CompanyConfig, FactoryStat } from '../data/types';

export const company: CompanyConfig = {
  legalName: 'Nova Industrial Electric Co., Ltd.',
  founded: 2004,
  headquarters: 'Wenzhou, Zhejiang, China',
  markets: ['Europe', 'North America', 'Middle East', 'Southeast Asia'],
  employees: '230+',
  factoryArea: '52,000 m²',
  annualCapacity: '12M units',
  experience: '20+ years',
};

export const factoryStats: FactoryStat[] = [
  { value: '20+', label: 'Years of manufacturing', note: 'Founded in 2004' },
  { value: '40+', label: 'Export markets', note: 'Europe · North America · MEA · SEA' },
  { value: '52,000', label: 'm² production facility', note: 'Molding · assembly · QC under one roof' },
  { value: '12M', label: 'Units annual capacity', note: '8 automated assembly lines' },
];

export const statsBand: FactoryStat[] = [
  { value: '20+', label: 'Years manufacturing' },
  { value: '40+', label: 'Export markets' },
  { value: '12M', label: 'Units per year' },
  { value: '98.6%', label: 'QC pass rate' },
];
