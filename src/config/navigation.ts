import type { NavigationConfig } from '../data/types';

export const navigation: NavigationConfig = {
  header: [
    { label: 'Products', href: '/products' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Quality', href: '/quality' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  headerCta: { label: 'Request a Quote', href: '/request-quote' },
  footerColumns: [
    {
      title: 'Products',
      links: [
        { label: 'Wall Switches', href: '/products?category=wall-switches' },
        { label: 'Electrical Sockets', href: '/products?category=electrical-sockets' },
        { label: 'USB Wall Chargers', href: '/products?category=usb-wall-chargers' },
        { label: 'Smart Controls', href: '/products?category=smart-controls' },
        { label: 'Plates & Accessories', href: '/products?category=plates-accessories' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Quality', href: '/quality' },
        { label: 'Contact', href: '/contact' },
        { label: 'Request a Quote', href: '/request-quote' },
      ],
    },
    {
      title: 'Buyers',
      links: [
        { label: 'OEM & ODM Service', href: '/capabilities#oem' },
        { label: 'Certifications', href: '/quality#certifications' },
        { label: 'FAQ', href: '/contact#faq' },
        { label: 'Inquiry Basket', href: '/inquiry' },
      ],
    },
  ],
};
