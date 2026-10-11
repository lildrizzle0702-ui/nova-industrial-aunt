import type { NavigationConfig } from '../data/types';

export const navigation: NavigationConfig = {
  header: [
    { label: 'Products', labelZh: '产品', href: '/products' },
    { label: 'Capabilities', labelZh: '生产能力', href: '/capabilities' },
    { label: 'Quality', labelZh: '质量', href: '/quality' },
    { label: 'Insights', labelZh: '洞察', href: '/insights' },
    { label: 'About', labelZh: '关于我们', href: '/about' },
    { label: 'Contact', labelZh: '联系我们', href: '/contact' },
  ],
  headerCta: { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
  footerColumns: [
    {
      title: 'Products',
      titleZh: '产品',
      links: [
        { label: 'Wall Switches', labelZh: '墙壁开关', href: '/products?category=wall-switches' },
        { label: 'Electrical Sockets', labelZh: '电气插座', href: '/products?category=electrical-sockets' },
        { label: 'USB Wall Chargers', labelZh: 'USB 充电插座', href: '/products?category=usb-wall-chargers' },
        { label: 'Smart Controls', labelZh: '智能控制', href: '/products?category=smart-controls' },
        { label: 'Plates & Accessories', labelZh: '面板与配件', href: '/products?category=plates-accessories' },
      ],
    },
    {
      title: 'Company',
      titleZh: '公司',
      links: [
        { label: 'About', labelZh: '关于我们', href: '/about' },
        { label: 'Capabilities', labelZh: '生产能力', href: '/capabilities' },
        { label: 'Quality', labelZh: '质量', href: '/quality' },
        { label: 'Insights', labelZh: '洞察', href: '/insights' },
        { label: 'Contact', labelZh: '联系我们', href: '/contact' },
        { label: 'Request a Quote', labelZh: '询价', href: '/request-quote' },
      ],
    },
    {
      title: 'Buyers',
      titleZh: '采购商',
      links: [
        { label: 'OEM & ODM Service', labelZh: 'OEM / ODM 服务', href: '/capabilities#oem' },
        { label: 'Certifications', labelZh: '认证', href: '/quality#certifications' },
        { label: 'FAQ', labelZh: '常见问题', href: '/contact#faq' },
        { label: 'Inquiry Basket', labelZh: '询盘清单', href: '/inquiry' },
      ],
    },
  ],
};
