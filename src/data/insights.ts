import type { Insight } from './types';

export const insights: Insight[] = [
  {
    slug: 'how-to-choose-wall-switches-for-the-european-market',
    title: 'How to Choose Wall Switches for the European Market',
    metaTitle: 'How to Choose Wall Switches for the European Market | NOVA INDUSTRIAL',
    metaDescription:
      'A practical buyer guide to selecting wall switches for Europe: standards, finishes, ratings, and what to verify before placing an order.',
    date: '2026-10-05',
    category: 'Market Guide',
    categoryZh: '市场指南',
    readTime: '6 min',
    readTimeZh: '6 分钟',
    excerpt:
      'European buyers face a mix of national norms and EU-wide directives. This guide breaks down the key specifications, finishes, and compliance checks that matter when sourcing wall switches for the continent.',
    excerptZh:
      '欧洲采购商需应对各国标准与欧盟指令的混合要求。本文拆解为欧洲市场采购墙壁开关时必须关注的关键规格、表面处理与合规检查点。',
    sections: [
      {
        heading: 'Start with the right standards',
        paragraphs: [
          'The European market is not a single standard. IEC 60669-1 is the baseline for switches, but many countries add national deviations. Germany expects VDE markings, France requires NF compliance, and Italy often looks for IMQ. If you plan to sell across borders, CE marking under the Low Voltage Directive 2014/35/EU is the minimum entry ticket, but it does not replace local approvals in every member state.',
          'Before you request samples, ask your supplier for a Declaration of Conformity that lists the harmonized standards and any third-party test reports. A generic CE sticker on the box is not enough for a professional importer.',
        ],
      },
      {
        heading: 'Voltage, current, and installation depth',
        paragraphs: [
          'Most EU markets operate at 220–240V / 50Hz. Standard switches are rated 10AX 250V~, which covers typical lighting circuits. For heavier loads such as water heaters or commercial installations, you may need 16A or 20A variants.',
          'Pay attention to installation depth. The common 86mm European wall box needs a switch mechanism that fits inside without stressing terminals. A 9mm thin plate looks modern, but the mechanism behind it still needs reliable contact clearance and proper heat dissipation.',
        ],
      },
      {
        heading: 'Finishes and durability',
        paragraphs: [
          'White and black remain the volume sellers, but champagne, graphite, and chrome are gaining share in retail and hospitality projects. Ask for UV-stabilized polycarbonate if the product will be exposed to direct sunlight, and confirm that color batches remain consistent across production runs.',
          'Surface finish is also a durability issue. A glossy panel can show scratches after repeated cleaning, while a matte or soft-touch surface hides wear better. Request an endurance statement: 40,000 mechanical cycles is common, and 50,000 cycles is a strong claim.',
        ],
      },
      {
        heading: 'What to request in your first sample pack',
        paragraphs: [
          'Order one unit of each finish, plus a two-gang and a dimmer variant if your range includes them. Check terminal size, rocker travel, and whether the frame sits flush against the wall. Photograph any defects and share them with the factory before you commit to tooling or packaging.',
        ],
      },
    ],
  },
  {
    slug: 'schuko-vs-bs-1363-a-buyers-guide-to-socket-standards',
    title: 'Schuko vs BS 1363: A Buyer\'s Guide to Socket Standards',
    metaTitle: 'Schuko vs BS 1363: Socket Standards Guide | NOVA INDUSTRIAL',
    metaDescription:
      'Compare Schuko and BS 1363 socket standards for importers: pin layout, safety shutters, ratings, and market fit.',
    date: '2026-09-28',
    category: 'Technical Guide',
    categoryZh: '技术指南',
    readTime: '7 min',
    readTimeZh: '7 分钟',
    excerpt:
          'Schuko and BS 1363 sockets look similar on a catalog page but serve different markets and safety regimes. Here is what distributors need to know before committing to stock.',
    excerptZh:
          '德式 Schuko 与英式 BS 1363 插座在目录上看起来相似，但适用市场与安全机制不同。本文介绍经销商备货前需要了解的关键差异。',
    sections: [
      {
        heading: 'Pin geometry and physical compatibility',
        paragraphs: [
          'Schuko sockets use two round pins, 19mm apart, with two grounding clips on the top and bottom of the recess. BS 1363 sockets use three rectangular pins arranged in a triangle, with the earth pin at the top and slightly longer so it makes contact first. The two systems are physically incompatible, and adapters sold at airports do not change the underlying approval requirements.',
          'If your customer base includes both continental Europe and the United Kingdom, you need two separate SKUs. Do not try to cover both markets with a single universal socket unless it has been formally tested to both standards.',
        ],
      },
      {
        heading: 'Safety shutters and fuse protection',
        paragraphs: [
          'Schuko sockets rely on a shutter mechanism that opens only when both pins enter simultaneously. The design protects children and reduces dust ingress. BS 1363 goes further: every plug contains a fuse, and the socket includes shutters operated by the earth pin. This fused-plug approach is why British plugs are larger and why the standard is considered more robust by many engineers.',
          'When sourcing, confirm that your supplier has tested shutter operation over thousands of insertion cycles. A shutter that jams after a year in the field becomes a liability.',
        ],
      },
      {
        heading: 'Voltage and current ratings',
        paragraphs: [
          'Schuko is rated 16A at 220–240V, supporting most domestic and light commercial loads. BS 1363 is rated 13A, with the fuse in the plug selected to match the appliance cable. For high-power equipment such as ovens or water heaters, both systems may require dedicated circuits rather than relying on standard socket outlets.',
          'Make sure your product labels and packaging clearly state the rated current and voltage. Mislabeling is one of the most common reasons for customs rejection or retailer returns.',
        ],
      },
      {
        heading: 'Market fit and certification path',
        paragraphs: [
          'Schuko dominates Germany, Austria, the Netherlands, Scandinavia, and most of Eastern Europe. BS 1363 is mandatory in the United Kingdom, Ireland, and several Middle Eastern and Commonwealth markets that follow British electrical norms.',
          'For Schuko, look for CE and VDE/Intertek reports. For BS 1363, you need UKCA for Great Britain and CE for Northern Ireland under the Windsor Framework. Your factory should be able to provide both test reports from the same production batch.',
        ],
      },
    ],
  },
  {
    slug: 'what-moq-really-means-when-sourcing-wiring-devices-from-china',
    title: 'What MOQ Really Means When Sourcing Wiring Devices from China',
    metaTitle: 'What MOQ Really Means for Wiring Devices | NOVA INDUSTRIAL',
    metaDescription:
      'Understand how MOQs work for switches, sockets, and wiring accessories from China, and how to negotiate without hurting quality.',
    date: '2026-09-20',
    category: 'Sourcing',
    categoryZh: '采购',
    readTime: '6 min',
    readTimeZh: '6 分钟',
    excerpt:
          'MOQ is not just a number on a quote sheet. It reflects molding capacity, color change costs, packaging setup, and how seriously the factory takes your order.',
    excerptZh:
          '起订量不只是报价单上的数字，它反映模具产能、换色成本、包装 setup 以及工厂对订单的重视程度。',
    sections: [
      {
        heading: 'Why MOQ exists',
        paragraphs: [
          'Factories set minimum order quantities because production has fixed setup costs. A color change in an injection molding machine wastes material during purging. A new carton die requires time on the printing press. A silk-screen or pad-print fixture must be aligned and proofed. These costs do not scale down for small orders, so the factory protects margin by setting a floor.',
          'For wiring devices, MOQ is often quoted per finish. A 1,000-unit MOQ for white switches may not mean you can split it into 500 white and 500 black. Each color may need its own MOQ because of the purging and changeover time involved.',
        ],
      },
      {
        heading: 'What affects the real MOQ',
        paragraphs: [
          'The biggest driver is whether the product uses existing tooling. A stock platform with no customization can ship from 1,000 units. A new plastic color may push the MOQ to 3,000 units. A custom mold or new mechanism can push it to 10,000 units or more, depending on cavity count and steel cost.',
          'Packaging also matters. A plain export carton is cheap to set up. A retail blister with a printed insert may require a 5,000-unit MOQ just to cover the printing plate and assembly labor.',
        ],
      },
      {
        heading: 'How to negotiate without losing quality',
        paragraphs: [
          'Ask for a mixed-SKU container instead of a single SKU. Many factories will accept 1,000 units per SKU if the total order fills a 20-foot container. This works especially well when you are launching a range across multiple product families.',
          'Another option is to accept a longer lead time. If the factory can slot your small order into a planned color run for another customer, it avoids the setup penalty. Be prepared to pay a small premium for this flexibility rather than pushing for a lower price.',
        ],
      },
      {
        heading: 'Red flags in MOQ discussions',
        paragraphs: [
          'Be wary of a factory that drops MOQ to any number you ask for without changing the price. It may mean they are outsourcing assembly to a smaller workshop or cutting inspection steps. A healthy negotiation should balance volume, lead time, and price, not sacrifice all three.',
        ],
      },
    ],
  },
  {
    slug: 'ce-ukca-rohs-certification-guide-for-electrical-accessories-importers',
    title: 'CE, UKCA, RoHS: Certification Guide for Electrical Accessories Importers',
    metaTitle: 'CE, UKCA, RoHS Certification Guide | NOVA INDUSTRIAL',
    metaDescription:
      'A clear importer guide to CE, UKCA, and RoHS for electrical accessories: what each mark means, what documents you need, and common pitfalls.',
    date: '2026-09-12',
    category: 'Compliance',
    categoryZh: '合规',
    readTime: '8 min',
    readTimeZh: '8 分钟',
    excerpt:
          'Certification marks are not decoration. They define whether your shipment clears customs, whether your retailer will accept it, and who is liable if something goes wrong.',
    excerptZh:
          '认证标志不只是装饰，它决定货物能否清关、零售商是否收货、以及出问题时的责任归属。',
    sections: [
      {
        heading: 'CE marking: the EU baseline',
        paragraphs: [
          'CE marking on electrical accessories means the manufacturer declares conformity with the Low Voltage Directive 2014/35/EU and relevant harmonized standards such as IEC 60669-1 for switches or IEC 60884-1 for sockets. It is a self-declaration for most wiring devices, but the technical file must be available on request.',
          'As an importer, you are responsible for verifying that the CE mark is backed by a real technical file and test reports. Customs and market surveillance authorities can ask for it years after the shipment arrives.',
        ],
      },
      {
        heading: 'UKCA: the post-Brexit British mark',
        paragraphs: [
          'UKCA replaced CE for the Great Britain market. The technical requirements are similar to CE, but the conformity assessment must follow UK-designated standards and the Declaration of Conformity must reference UK law. Northern Ireland continues to accept CE marking under the Windsor Framework, so a single CE-marked product can still serve both EU and Northern Ireland markets.',
          'If you plan to sell in England, Scotland, or Wales, ask your supplier for UKCA documentation. A CE-only product cannot legally be placed on the Great Britain market as of current regulations.',
        ],
      },
      {
        heading: 'RoHS: hazardous substance limits',
        paragraphs: [
          'RoHS 2.0 and the 2015 amendment restrict ten substances in electrical and electronic equipment, including lead, cadmium, mercury, and certain flame retardants. Wiring devices fall under the scope because they conduct electricity in fixed installations.',
          'A compliant supplier should provide a RoHS declaration and, for high-risk programs, third-party test reports per batch. Screening is usually done by XRF on incoming plastic granules and metal stampings, followed by wet chemistry when a positive is suspected.',
        ],
      },
      {
        heading: 'Document checklist',
        paragraphs: [
          'For every shipment, request: a Declaration of Conformity, type-test reports, RoHS declaration, and a packing list that ties the carton numbers to the batch tested. Keep these for at least ten years. If a customer reports a safety incident, these documents are your first line of defense.',
        ],
      },
    ],
  },
  {
    slug: 'oem-vs-odm-which-model-fits-your-electrical-product-line',
    title: 'OEM vs ODM: Which Model Fits Your Electrical Product Line',
    metaTitle: 'OEM vs ODM for Electrical Products | NOVA INDUSTRIAL',
    metaDescription:
      'Compare OEM private-label and ODM custom-development models for switches, sockets, and wiring devices from China.',
    date: '2026-09-05',
    category: 'Business Model',
    categoryZh: '商业模式',
    readTime: '6 min',
    readTimeZh: '6 分钟',
    excerpt:
          'OEM puts your brand on an existing product. ODM changes the product itself. The right choice depends on how much differentiation you need and how fast you need to launch.',
    excerptZh:
          'OEM 是把品牌贴在现有产品上，ODM 是改产品本身。选择取决于你需要的差异化程度和上市速度。',
    sections: [
      {
        heading: 'OEM: fast, low risk, familiar look',
        paragraphs: [
          'OEM private label is the fastest way to enter the market. You select an existing platform, choose finishes, add your logo to the plate and packaging, and place an order. Lead time is typically 35–45 days after deposit, and MOQ can start from 1,000 units per finish.',
          'The trade-off is limited differentiation. Your competitors may be selling a visually similar product under their own brands. OEM works best when your channel strength, pricing, or service is the real differentiator.',
        ],
      },
      {
        heading: 'ODM: shape the product to your market',
        paragraphs: [
          'ODM development adapts an existing platform to your market needs. Examples include changing pin types for a different country, adjusting rocker feel, adding a USB-C port, or creating a custom finish that matches your brand color.',
          'ODM typically starts at 3,000 units and adds 25–40 days for tooling or fixture preparation. Because you are changing parts of the product, you may need new type-testing to maintain certification coverage.',
        ],
      },
      {
        heading: 'When to choose which',
        paragraphs: [
          'Choose OEM if you are testing a new market, need inventory quickly, or operate on tight margins. Choose ODM if you have identified a gap in the market, plan to build brand loyalty, or need features that off-the-shelf products do not offer.',
          'Some buyers start with OEM to validate demand, then move a winning SKU to ODM for the second production run. This staged approach spreads risk while building product expertise.',
        ],
      },
      {
        heading: 'Protect your investment',
        paragraphs: [
          'For ODM projects, sign an agreement that defines who owns the tooling, drawings, and any new certifications. A reputable factory will not object to clear terms. Keep copies of 2D drawings, BOMs, and test reports in your own files.',
        ],
      },
    ],
  },
  {
    slug: 'usb-c-pd-wall-outlets-what-distributors-need-to-know-in-2026',
    title: 'USB-C PD Wall Outlets: What Distributors Need to Know in 2026',
    metaTitle: 'USB-C PD Wall Outlets Guide 2026 | NOVA INDUSTRIAL',
    metaDescription:
      'A distributor guide to USB-C PD wall outlets: power levels, safety, compatibility, and what to stock in 2026.',
    date: '2026-08-28',
    category: 'Product Trend',
    categoryZh: '产品趋势',
    readTime: '6 min',
    readTimeZh: '6 分钟',
    excerpt:
          'USB-C PD outlets are moving from premium niche to standard spec. Distributors who understand the power tiers and safety requirements will capture the upgrade cycle.',
    excerptZh:
          'USB-C PD 插座正从高端小众走向标准配置。理解功率层级与安全要求的经销商将抓住升级周期。',
    sections: [
      {
        heading: 'Power tiers and real-world use',
        paragraphs: [
          'USB-C PD outlets commonly ship in 18W, 30W, 45W, and 65W variants. An 18W port charges a phone overnight. A 30W port handles tablets and small laptops. A 45W or 65W port is what modern laptop users actually want at a desk.',
          'The key is honest labeling. A 12W USB-A port marketed as "fast charging" will disappoint customers who own PD-compatible phones. Make sure your supplier publishes measured output per port, not the total panel rating.',
        ],
      },
      {
        heading: 'Safety and thermal management',
        paragraphs: [
          'Power conversion creates heat. A poorly designed USB module can overheat when a laptop pulls 45W for hours. Look for suppliers who publish temperature-rise test data and use components from recognized IC brands.',
          'Over-current, over-voltage, and short-circuit protection should be standard, not optional. Ask for a copy of the module-level test report, not just the wall-switch safety report.',
        ],
      },
      {
        heading: 'Physical formats and installation',
        paragraphs: [
          'USB-C modules can be integrated into a standard 86mm wall plate or sold as a standalone module that fits a modular frame. Integrated plates look cleaner and install faster, but modular formats let electricians mix USB, RJ45, and HDMI in the same faceplate.',
          'Before committing to a range, confirm whether the USB module shares the same mounting frame as your switch and socket SKUs. Sharing accessories reduces inventory complexity for your customers.',
        ],
      },
      {
        heading: 'What to sample first',
        paragraphs: [
          'Request one each of 18W, 30W, and 45W variants. Test them with a phone, tablet, and laptop. Measure case temperature after 60 minutes of charging. If the plate gets uncomfortably hot, the design needs revision before you place a container order.',
        ],
      },
    ],
  },
  {
    slug: '5-quality-checks-before-approving-a-switch-factory-in-china',
    title: '5 Quality Checks Before Approving a Switch Factory in China',
    metaTitle: '5 Quality Checks for Switch Factories | NOVA INDUSTRIAL',
    metaDescription:
      'Five practical quality checks to run before approving a wall switch or socket factory in China, from tooling to outgoing inspection.',
    date: '2026-08-20',
    category: 'Quality',
    categoryZh: '质量',
    readTime: '7 min',
    readTimeZh: '7 分钟',
    excerpt:
          'A factory audit does not have to be expensive. These five checks will tell you whether a switch supplier can reliably produce the quality your market expects.',
    excerptZh:
          '工厂审核不必昂贵。这五项检查能帮助你判断开关供应商是否能稳定生产符合市场预期的质量。',
    sections: [
      {
        heading: '1. Check the mold shop',
        paragraphs: [
          'A factory that owns its molds controls delivery and quality. Ask how many mold machines they run, how they maintain steel cavities, and who owns the tooling for your product. If the factory outsources molding, your lead time and color consistency depend on a third party.',
        ],
      },
      {
        heading: '2. Review the testing lab',
        paragraphs: [
          'A capable supplier keeps endurance, dielectric, and IP test rigs in-house. Ask for photos of the lab, calibration certificates for the equipment, and sample test reports from a recent batch. If the lab is empty or the reports are generic templates, treat it as a red flag.',
        ],
      },
      {
        heading: '3. Trace the supply chain',
        paragraphs: [
          'Find out where the plastic granules, copper terminals, and silver contacts come from. Reputable factories have approved vendor lists and incoming inspection records. Random sourcing is one of the fastest ways to get RoHS or dimensional failures.',
        ],
      },
      {
        heading: '4. Watch the assembly line',
        paragraphs: [
          'Look for fixed workstations, documented work instructions, and inline visual checks. Ask how many units are checked per hour and what happens when a defect is found. A line with no records is a line with no accountability.',
        ],
      },
      {
        heading: '5. Audit outgoing inspection',
        paragraphs: [
          'Before cartons leave the factory, someone should verify packing, labeling, and a sampling of electrical performance. Ask for the AQL level used and the last month\'s pass-rate data. A factory that tracks this data seriously is usually easier to work with long term.',
        ],
      },
    ],
  },
  {
    slug: 'sea-freight-guide-shipping-electrical-components-from-ningbo-port',
    title: 'Sea Freight Guide: Shipping Electrical Components from Ningbo Port',
    metaTitle: 'Sea Freight Guide for Electrical Components | NOVA INDUSTRIAL',
    metaDescription:
      'A practical sea freight guide for wiring devices shipped from Ningbo: FOB vs CIF, packaging, customs docs, and cost control.',
    date: '2026-08-12',
    category: 'Logistics',
    categoryZh: '物流',
    readTime: '7 min',
    readTimeZh: '7 分钟',
    excerpt:
          'Ningbo is one of the world\'s busiest container ports. Understanding how electrical components move from factory gate to destination warehouse helps you avoid delays and hidden costs.',
    excerptZh:
          '宁波是全球最繁忙的集装箱港之一。了解电工产品从工厂到目的地仓库的流转方式，有助于避免延误和隐藏成本。',
    sections: [
      {
        heading: 'Why Ningbo matters',
        paragraphs: [
          'Ningbo-Zhoushan port handles more container volume than most European ports combined. For factories in Wenzhou and the surrounding Zhejiang manufacturing belt, it is the natural export gateway. A plant 40 minutes from the port can load a container in the morning and have it on a vessel the same week.',
        ],
      },
      {
        heading: 'FOB, CIF, and DDP: what you control',
        paragraphs: [
          'Under FOB, the supplier delivers goods onto the vessel at Ningbo and you handle ocean freight, insurance, and destination charges. CIF adds ocean freight and insurance to the supplier\'s scope but leaves import clearance to you. DDP puts the supplier in charge of delivery all the way to your door, including duties and taxes.',
          'FOB is common for experienced importers who have their own forwarder. DDP is simpler for first-time buyers but usually costs more because the supplier adds margin for risk.',
        ],
      },
      {
        heading: 'Packaging for ocean transit',
        paragraphs: [
          'Electrical components are dense and can survive sea freight if packed correctly. Master cartons should be five-layer corrugated, drop-tested to at least one corner and one edge, and limited to 20kg per carton to reduce handling damage. Pallets are not always necessary for full container loads, but they protect against moisture if the container floor sweats during the voyage.',
          'Ask for a loading plan before the container is sealed. A well-stuffed 40-foot HQ can hold more cartons than a poorly planned one, and that directly affects your landed cost per unit.',
        ],
      },
      {
        heading: 'Documents to prepare',
        paragraphs: [
          'At minimum you need a commercial invoice, packing list, bill of lading, Certificate of Origin, and any product-specific certificates such as CE or RoHS. Some markets require Embassy attestation or a pre-shipment inspection certificate.',
          'Send copies to your customs broker before the vessel arrives. Delays at destination are usually caused by paperwork, not by the cargo itself.',
        ],
      },
    ],
  },
];

export const insightBySlug = (slug: string): Insight | undefined =>
  insights.find((i) => i.slug === slug);
