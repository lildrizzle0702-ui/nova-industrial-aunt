import type { Category } from '../data/types';

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
