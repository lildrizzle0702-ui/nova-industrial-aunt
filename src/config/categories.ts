import type { Category } from '../data/types';

export const categories: Category[] = [
  {
    id: 'wall-switches',
    slug: 'wall-switches',
    name: 'Wall Switches',
    shortName: 'Switches',
    description: 'Rocker, bell-press and dimmer switches in screwed and screwless plates, 10AX rated.',
    longDescription:
      'Mechanical switches built on a shared 86mm platform: silver-alloy contacts, phosphor-bronze terminals and flame-retardant polycarbonate housings. Rated 10AX 250V~ and endurance-tested to 50,000 operations per IEC 60669-1.',
    keywords: ['rocker switch', 'dimmer', 'bell press', 'light switch', '1 gang', '2 gang'],
  },
  {
    id: 'electrical-sockets',
    slug: 'electrical-sockets',
    name: 'Electrical Sockets',
    shortName: 'Sockets',
    description: 'Schuko, BS 1363 and universal receptacles with child-protection shutters, 16A.',
    longDescription:
      'Receptacles for European, British and international mounting standards. Double-wipe contacts, protected shutters and screwless faceplates; every batch passes 10,000-cycle insertion testing to IEC 60884-1.',
    keywords: ['schuko', 'socket outlet', 'receptacle', 'BS 1363', '13A', '16A', 'universal socket'],
  },
  {
    id: 'usb-wall-chargers',
    slug: 'usb-wall-chargers',
    name: 'USB Wall Chargers',
    shortName: 'USB Chargers',
    description: 'USB-A and USB-C charging outlets, 12W to 45W, PD-capable, flush-mounted.',
    longDescription:
      'Charging outlets that replace or combine with standard receptacles. Built-in EMI filtering and over-current protection; USB-C ports deliver up to 45W with Power Delivery for phones, tablets and laptops.',
    keywords: ['usb outlet', 'usb c', 'power delivery', 'fast charge', 'gan', 'charging socket'],
  },
  {
    id: 'smart-controls',
    slug: 'smart-controls',
    name: 'Smart Controls',
    shortName: 'Smart',
    description: 'Wi-Fi and Zigbee touch switches, dimmers and metered sockets for projects.',
    longDescription:
      'Glass-capacitive touch controls that retrofit standard 86mm boxes. Wi-Fi models work with the Tuya ecosystem (Smart Life); Zigbee models integrate with common hubs. Neutral-wire-free versions available for retrofit markets.',
    keywords: ['smart switch', 'touch switch', 'wifi', 'zigbee', 'smart dimmer', 'energy monitoring'],
  },
  {
    id: 'plates-accessories',
    slug: 'plates-accessories',
    name: 'Plates & Accessories',
    shortName: 'Accessories',
    description: 'Screwless wall plates, modular inserts, surface boxes and connection outlets.',
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
