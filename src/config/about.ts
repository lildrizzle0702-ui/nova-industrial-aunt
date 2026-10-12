export interface ProcessStep {
  step: string;
  title: string;
  titleZh?: string;
  body: string;
  bodyZh?: string;
}

export { factSheet, manufacturingProcess, factoryMediaStrip, milestones } from './factory.config';
