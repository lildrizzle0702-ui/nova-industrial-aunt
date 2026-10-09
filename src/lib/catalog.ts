/* ============================================================
   I18N CATALOG — all static UI strings, keyed lookups.
   Chinese copy is idiomatic (not translated word-for-word),
   written for a real B2B manufacturer website.
   ============================================================ */

export const catalog: Record<string, { en: string; zh: string }> = {
  /* ---------- Global / chrome ---------- */
  'common.skipToContent': { en: 'Skip to content', zh: '跳到正文' },
  'common.backHome': { en: 'Back Home', zh: '返回首页' },
  'common.products': { en: 'Products', zh: '产品' },
  'common.requestQuote': { en: 'Request a Quote', zh: '询价' },
  'common.viewProducts': { en: 'View Products', zh: '查看产品' },
  'common.browseCatalogue': { en: 'Browse the Catalogue', zh: '浏览产品目录' },
  'common.fullCatalogue': { en: 'Full Catalogue', zh: '查看完整目录' },
  'common.viewAllProducts': { en: 'View All Products', zh: '查看全部产品' },
  'common.learnMore': { en: 'Learn More', zh: '了解更多' },
  'common.remove': { en: 'Remove', zh: '移除' },
  'common.clearAll': { en: 'Clear All', zh: '清空' },
  'common.clearFilters': { en: 'Clear Filters', zh: '清除筛选' },
  'common.apply': { en: 'Apply', zh: '应用' },
  'common.close': { en: 'Close', zh: '关闭' },
  'common.qty': { en: 'Qty', zh: '数量' },
  'common.productsCount': { en: 'products', zh: '个产品' },
  'common.productCount': { en: 'product', zh: '个产品' },
  'common.skus': { en: 'SKUs', zh: 'SKU' },
  'common.in': { en: 'in', zh: '，类别' },
  'common.matching': { en: 'matching', zh: '，匹配' },
  'common.families': { en: 'product families', zh: '产品系列' },
  'common.all': { en: 'All', zh: '全部' },
  'common.readMore': { en: 'Read more', zh: '阅读更多' },
  'common.viewAll': { en: 'View all', zh: '查看全部' },

  /* ---------- Header ---------- */
  'nav.products': { en: 'Products', zh: '产品' },
  'nav.capabilities': { en: 'Capabilities', zh: '生产能力' },
  'nav.quality': { en: 'Quality', zh: '质量' },
  'nav.about': { en: 'About', zh: '关于我们' },
  'nav.contact': { en: 'Contact', zh: '联系我们' },
  'nav.quote': { en: 'Request a Quote', zh: '询价' },
  'nav.menu': { en: 'Menu', zh: '菜单' },
  'nav.openMenu': { en: 'Open menu', zh: '打开菜单' },
  'nav.closeMenu': { en: 'Close menu', zh: '关闭菜单' },
  'nav.language': { en: 'Language', zh: '语言' },

  /* ---------- Footer ---------- */
  'footer.ctaTitle': { en: 'Ready to specify your next program?', zh: '准备为下一个项目选型？' },
  'footer.ctaButton': { en: 'Request a Quote', zh: '询价' },
  'footer.products': { en: 'Products', zh: '产品' },
  'footer.company': { en: 'Company', zh: '公司' },
  'footer.buyers': { en: 'Buyers', zh: '采购' },
  'footer.contact': { en: 'Contact', zh: '联系方式' },
  'footer.businessHours': { en: 'Mon–Sat, 8:30–18:00 (GMT+8)', zh: '周一至周六 8:30–18:00（北京时间）' },
  'footer.legal': { en: 'Wiring devices', zh: '电工电气产品' },
  'footer.facility': { en: '52,000 m² facility', zh: '5.2 万平方米生产基地' },
  'footer.regions': { en: '4 export regions', zh: '四大出口市场' },

  /* ---------- Inquiry drawer / basket ---------- */
  'drawer.title': { en: 'Inquiry Basket', zh: '询盘清单' },
  'drawer.close': { en: 'Close', zh: '关闭' },
  'drawer.empty': {
    en: 'No products selected yet. Add products as you browse and request one quote for the full list.',
    zh: '暂未选择产品。浏览时加入产品，一次提交整单询价。',
  },
  'drawer.browse': { en: 'Browse Products', zh: '浏览产品' },
  'drawer.quantitiesNote': {
    en: 'quantities set on the next step',
    zh: '数量在下一步设置',
  },
  'drawer.viewQuote': { en: 'View Inquiry & Request Quote', zh: '查看询盘并询价' },
  'drawer.itemCount': { en: 'products', zh: '个产品' },

  /* ---------- Home: hero ---------- */
  'home.hero.footnote': { en: 'MOQ from 1,000 units · OEM & ODM · Samples in 7 days', zh: '起订量 1,000 件 · 支持 OEM/ODM · 样品 7 天' },
  'home.hero.ctaPrimary': { en: 'Request a Quote', zh: '询价' },
  'home.hero.ctaSecondary': { en: 'Explore Products', zh: '浏览产品' },

  /* ---------- Home: categories ---------- */
  'home.cat.label': { en: 'Product Range', zh: '产品系列' },
  'home.cat.title': { en: 'Five product families. One production standard.', zh: '五大产品系列，统一生产标准。' },
  'home.cat.desc': {
    en: 'Every product is molded, assembled and tested in our Wenzhou facility to the same IEC-aligned process — whether it ships as NOVA branded stock or your private label.',
    zh: '所有产品均在温州工厂按统一 IEC 标准流程成型、组装、测试，无论贴 NOVA 品牌还是您的自主品牌。',
  },
  'home.cat.viewAll': { en: 'View All Products', zh: '查看全部产品' },
  'home.cat.browse': { en: 'Browse', zh: '浏览' },

  /* ---------- Home: factory ---------- */
  'home.factory.label': { en: 'Manufacturing', zh: '制造能力' },
  'home.factory.points.1': { en: '24 injection molding machines, 80–650T, running engineering-grade PC and nylon', zh: '24 台注塑机（80–650T），加工工程级 PC 与尼龙' },
  'home.factory.points.2': { en: '8 automated assembly lines with vision inspection at every critical station', zh: '8 条自动化产线，关键工位均配视觉检测' },
  'home.factory.points.3': { en: 'In-house testing lab: endurance rigs, temperature cycling, IPX5/IPX6 spray chambers', zh: '自有检测实验室：寿命测试、温度循环、IPX5/IPX6 喷淋' },
  'home.factory.points.4': { en: 'Bonded warehouse and export packing line 40 minutes from Ningbo port', zh: '保税仓与出口包装线，距宁波港 40 分钟' },

  /* ---------- Home: featured ---------- */
  'home.featured.label': { en: 'Featured Products', zh: '精选产品' },
  'home.featured.title': { en: 'The lines distributors reorder.', zh: '经销商反复补货的产品。' },
  'home.featured.desc': {
    en: 'Four catalogue heroes — proven sellers across European, British and smart-home programs, each available under private label.',
    zh: '四款目录热销产品——欧洲、英式及智能家居方案中的验证品，均可贴牌生产。',
  },

  /* ---------- Home: capabilities ---------- */
  'home.cap.label': { en: 'Capabilities', zh: '核心能力' },
  'home.cap.title': { en: 'What we do in-house.', zh: '全部工序内部完成。' },
  'home.cap.desc': { en: 'Six disciplines under one roof keep quality consistent and lead times honest.', zh: '六大工序同厂完成，品质稳定、交期可控。' },
  'home.cap.viewAll': { en: 'All Capabilities', zh: '查看全部能力' },

  /* ---------- Home: OEM ---------- */
  'home.oem.label': { en: 'OEM / ODM', zh: 'OEM / ODM' },
  'home.oem.title': { en: 'Your brand. Our production line.', zh: '您的品牌，我们的产线。' },
  'home.oem.desc': {
    en: 'We produce wiring devices under private label for distributors and retail chains across four continents. Send us a sample or a drawing — we handle tooling, certification mapping and packaging to your standard.',
    zh: '为四大洲经销商与连锁商超提供贴牌生产。寄样或提供图纸即可，模具、认证与包装按您的标准执行。',
  },
  'home.oem.cta': { en: 'Discuss Your Project', zh: '洽谈项目' },

  /* ---------- Home: quality ---------- */
  'home.quality.label': { en: 'Quality & Compliance', zh: '质量与认证' },
  'home.quality.title': { en: 'Tested here. Certified for your market.', zh: '本地检测，符合您市场标准。' },
  'home.quality.desc': {
    en: 'Every batch passes endurance and dielectric testing before it leaves the floor. Our lab runs to IEC 60669-1, IEC 60884-1 and BS 1363-2 schedules, and the facility is audited annually to ISO 9001:2015.',
    zh: '每批产品出厂前完成寿命与耐压测试。实验室按 IEC 60669-1、IEC 60884-1、BS 1363-2 标准执行，工厂每年通过 ISO 9001:2015 审核。',
  },
  'home.quality.link': { en: 'Quality & Certifications', zh: '质量与认证' },

  /* ---------- Home: export ---------- */
  'home.export.label': { en: 'Export & Markets', zh: '出口与市场' },
  'home.export.title': { en: 'Shipping from Ningbo to 40+ markets.', zh: '宁波港直发，覆盖 40+ 市场。' },
  'home.export.desc': {
    en: 'The plant gate is 40 minutes from Ningbo port. Documentation teams handle Certificates of Origin, L/C shipments and attestation per market, so mixed-SKU containers clear without surprises.',
    zh: '工厂距宁波港 40 分钟。单证团队办理原产地证、信用证及各市场使馆认证，多品类拼箱清关无忧。',
  },
  'home.export.about': { en: 'About the Company', zh: '了解公司' },

  /* ---------- Home: stats band labels ---------- */
  'home.stats.years': { en: 'Years manufacturing', zh: '年制造经验' },
  'home.stats.markets': { en: 'Export markets', zh: '出口市场' },
  'home.stats.capacity': { en: 'Units per year', zh: '年产能（台）' },
  'home.stats.qc': { en: 'QC pass rate', zh: '质检合格率' },

  /* ---------- CTA band ---------- */
  'cta.label': { en: 'Request a Quote', zh: '询价' },
  'cta.title': { en: 'Tell us what your market needs.', zh: '告诉我们您的市场需求。' },
  'cta.desc': {
    en: 'Send quantities, target market and certification requirements. Our sales engineers respond within one business day with pricing, lead time and sample options.',
    zh: '发送数量、目标市场及认证要求，销售工程师一个工作日内回复报价、交期与样品方案。',
  },
  'cta.primary': { en: 'Request a Quote', zh: '询价' },
  'cta.secondary': { en: 'Browse the Catalogue', zh: '浏览产品目录' },

  /* ---------- Products page ---------- */
  'products.label': { en: 'Product Catalogue', zh: '产品目录' },
  'products.title': { en: 'Wiring devices for every program.', zh: '覆盖各类工程方案的电工产品。' },
  'products.searchPlaceholder': { en: 'Search name, SKU, keyword…', zh: '搜索名称、SKU、关键词…' },
  'products.searchLabel': { en: 'Search products by name, SKU or keyword', zh: '按名称、SKU 或关键词搜索产品' },
  'products.clearSearch': { en: 'Clear search', zh: '清除搜索' },
  'products.sort': { en: 'Sort', zh: '排序' },
  'products.sortFeatured': { en: 'Featured', zh: '推荐' },
  'products.sortName': { en: 'Name A–Z', zh: '名称 A–Z' },
  'products.sortCategory': { en: 'Category', zh: '类别' },
  'products.filters': { en: 'Filters', zh: '筛选' },
  'products.filtersTitle': { en: 'Product filters', zh: '产品筛选' },
  'products.category': { en: 'Category', zh: '类别' },
  'products.application': { en: 'Application', zh: '应用' },
  'products.certification': { en: 'Certification', zh: '认证' },
  'products.allFamilies': { en: 'All families', zh: '全部系列' },
  'products.showResults': { en: 'Show products', zh: '显示产品' },
  'products.empty.title': { en: 'No products found', zh: '未找到产品' },
  'products.empty.desc': {
    en: 'Nothing matches the current search and filter combination. Try a different keyword, or reset the filters to browse the full catalogue.',
    zh: '当前搜索与筛选组合无匹配结果。请更换关键词，或清除筛选浏览完整目录。',
  },
  'products.empty.clear': { en: 'Clear Filters', zh: '清除筛选' },
  'products.meta.skus': { en: 'SKUs', zh: 'SKU' },
  'products.meta.families': { en: 'product families', zh: '产品系列' },
  'products.meta.platform': { en: '86mm platform', zh: '86mm 平台' },
  'products.meta.oem': { en: 'OEM / ODM ready', zh: '支持 OEM/ODM' },

  /* ---------- PDP ---------- */
  'pdp.home': { en: 'Home', zh: '首页' },
  'pdp.products': { en: 'Products', zh: '产品' },
  'pdp.requestQuote': { en: 'Request a Quote', zh: '询价' },
  'pdp.addInquiry': { en: 'Add to Inquiry', zh: '加入询盘' },
  'pdp.inBasket': { en: 'In Inquiry Basket', zh: '已在询盘中' },
  'pdp.moq': { en: 'MOQ', zh: '起订量' },
  'pdp.leadTime': { en: 'Lead time', zh: '交期' },
  'pdp.finishes': { en: 'Finishes', zh: '表面处理' },
  'pdp.warranty': { en: 'Warranty', zh: '质保' },
  'pdp.technicalData': { en: 'Technical Data', zh: '技术参数' },
  'pdp.specs': { en: 'Specifications', zh: '规格参数' },
  'pdp.applications': { en: 'Applications', zh: '应用场景' },
  'pdp.certifications': { en: 'Certifications', zh: '认证' },
  'pdp.packaging': { en: 'Packaging', zh: '包装' },
  'pdp.overview': { en: 'Overview', zh: '产品概述' },
  'pdp.related': { en: 'Related Products', zh: '相关产品' },
  'pdp.relatedTitle': { en: 'Pairs well with this line.', zh: '与本产品配套推荐。' },
  'pdp.backToCatalogue': { en: 'Back to Catalogue', zh: '返回目录' },
  'pdp.certsNote': { en: 'Declarations and test reports are issued per shipment.', zh: '随货提供符合性声明与检测报告。' },
  'pdp.viewProduct': { en: 'Product view', zh: '产品视图' },
  'pdp.viewTechnical': { en: 'Dimensioned drawing', zh: '尺寸图' },
  'pdp.viewDetail': { en: 'Material detail', zh: '材质细节' },
  'pdp.notFound': { en: 'Product not found', zh: '未找到产品' },
  'pdp.notFoundDesc': { en: "The product you are looking for doesn't exist or may have been discontinued.", zh: '您查找的产品不存在或已停产。' },

  /* ---------- About ---------- */
  'about.label': { en: 'About NOVA INDUSTRIAL', zh: '关于我们' },
  'about.company.label': { en: 'The Company', zh: '公司简介' },
  'about.company.title': { en: 'Engineering-grade manufacturing, distributor-grade reliability.', zh: '工程级制造，经销商级可靠交付。' },
  'about.process.label': { en: 'Manufacturing Process', zh: '生产流程' },
  'about.process.title': { en: 'Seven stages, all inside our walls.', zh: '七道工序，全部内部完成。' },
  'about.process.desc': {
    en: 'The sequence below is the whole product path. Because no stage is subcontracted, quality data stays attached to the batch from steel to carton.',
    zh: '以下为产品完整生产链路。因无任何外包环节，质量数据从钢材到纸箱全程可追溯。',
  },
  'about.markets.label': { en: 'Global Markets', zh: '全球市场' },
  'about.markets.title': { en: 'Shipping to 40+ markets, with the paperwork to match.', zh: '覆盖 40+ 市场，单证齐全。' },
  'about.markets.note': {
    en: 'Documentation teams handle Certificates of Origin, L/C shipments and attestation requirements per market. FOB, CIF and DDP terms ship from Ningbo, 40 minutes from the factory gate.',
    zh: '单证团队按各市场要求办理原产地证、信用证及使馆认证。FOB、CIF、DDP 条款自宁波港出运，距工厂 40 分钟。',
  },
  'about.milestones.label': { en: 'Milestones', zh: '发展历程' },
  'about.milestones.title': { en: 'Twenty years, in six decisions.', zh: '二十年，六次关键决策。' },
  'about.cta.label': { en: 'OEM / ODM', zh: 'OEM / ODM' },
  'about.cta.title': { en: 'Put our production line behind your brand.', zh: '用我们的产线支撑您的品牌。' },
  'about.cta.desc': { en: 'Private label from 1,000 units per finish, ODM platform modifications from 3,000 pcs.', zh: '贴牌起订量 1,000 件/色，ODM 改型 3,000 件起。' },
  'about.cta.explore': { en: 'Explore Capabilities', zh: '查看生产能力' },
  'about.cta.discuss': { en: 'Discuss Your Project', zh: '洽谈项目' },

  /* ---------- Capabilities page ---------- */
  'capabilities.label': { en: 'Capabilities', zh: '生产能力' },
  'capabilities.title': { en: 'Six disciplines. One production plan.', zh: '六大工序，统一生产计划。' },
  'capabilities.desc': {
    en: 'Every capability below runs inside our Wenzhou facility — molded, stamped, assembled, tested and packed on the same production plan.',
    zh: '以下能力均在温州工厂内部完成——注塑、冲压、组装、测试、包装同一生产计划执行。',
  },
  'capabilities.oem.label': { en: 'OEM / ODM Process', zh: 'OEM / ODM 流程' },
  'capabilities.oem.title': { en: 'From drawing to container in six controlled steps.', zh: '从图纸到集装箱，六步可控流程。' },
  'capabilities.oem.desc': {
    en: 'A named project engineer owns your file from first drawing to loaded container. No hand-offs between departments, no "check with the factory" replies.',
    zh: '从首张图纸到装柜全程由指定项目工程师负责，无部门转交，无模糊答复。',
  },
  'capabilities.cta.label': { en: 'Next step', zh: '下一步' },
  'capabilities.cta.title': { en: 'Send a sample or a drawing. We take it from there.', zh: '寄样或提供图纸，其余交给我们。' },
  'capabilities.cta.desc': {
    en: 'Feasibility answers within two business days; production-intent samples within seven days of sign-off.',
    zh: '可行性答复两个工作日内提供，图纸确认后 7 天内出具试样。',
  },
  'capabilities.cta.discuss': { en: 'Discuss Your Project', zh: '洽谈项目' },
  'capabilities.cta.quality': { en: 'Quality & Compliance', zh: '质量与认证' },

  /* ---------- Quality page ---------- */
  'quality.label': { en: 'Quality & Compliance', zh: '质量与认证' },
  'quality.title': { en: 'Defects are a process problem, not a people problem.', zh: '缺陷是流程问题，不是人的问题。' },
  'quality.desc': {
    en: 'Our quality philosophy is architectural: fixtures that cannot be loaded wrong, stations that cannot skip a test, batches that cannot ship without records.',
    zh: '质量源于工艺设计：防错工装杜绝错装，工位检测不可跳过，批次无记录不可出厂。',
  },
  'quality.process.title': { en: 'The QC process, station by station.', zh: '质检流程，逐站说明。' },
  'quality.cert.label': { en: 'Certifications', zh: '认证' },
  'quality.cert.title': { en: 'Paperwork your import desk can actually use.', zh: '进口所需单证，随货提供。' },
  'quality.cert.note': {
    en: 'Declarations of Conformity, type-test reports and ISO certificates are issued with every shipment on request — or request them with your quote.',
    zh: '符合性声明、型式试验报告及 ISO 证书可按需提供，随报价或出货附送。',
  },
  'quality.cta.label': { en: 'Testing data', zh: '检测数据' },
  'quality.cta.title': { en: 'Ask for the batch report with your samples.', zh: '样品随附该批次检测报告。' },
  'quality.cta.desc': {
    en: 'Every sample shipment includes the endurance and dielectric results for its production batch.',
    zh: '每批样品出货均附该生产批次的寿命与耐压检测结果。',
  },
  'quality.cta.quote': { en: 'Request a Quote', zh: '询价' },
  'quality.cta.browse': { en: 'Browse Products', zh: '浏览产品' },

  /* ---------- Contact ---------- */
  'contact.label': { en: 'Contact', zh: '联系我们' },
  'contact.title': { en: 'Talk to the factory floor.', zh: '直接对接工厂。' },
  'contact.desc': {
    en: 'Sales engineers answer every message within one business day — for quotations, samples, OEM projects or documentation requests.',
    zh: '销售工程师一个工作日内回复——报价、样品、OEM 项目或单证需求均可。',
  },
  'contact.direct': { en: 'Direct', zh: '直接联系' },
  'contact.email': { en: 'Email', zh: '邮箱' },
  'contact.sales': { en: 'Sales', zh: '销售部' },
  'contact.phone': { en: 'Phone', zh: '电话' },
  'contact.whatsapp': { en: 'WhatsApp', zh: 'WhatsApp' },
  'contact.address': { en: 'Factory address', zh: '工厂地址' },
  'contact.form.name': { en: 'Name', zh: '姓名' },
  'contact.form.company': { en: 'Company', zh: '公司' },
  'contact.form.email': { en: 'Email', zh: '邮箱' },
  'contact.form.subject': { en: 'Subject', zh: '主题' },
  'contact.form.message': { en: 'Message', zh: '留言' },
  'contact.form.subject.general': { en: 'General inquiry', zh: '一般咨询' },
  'contact.form.subject.quote': { en: 'Quotation request', zh: '报价咨询' },
  'contact.form.subject.samples': { en: 'Samples', zh: '样品申请' },
  'contact.form.subject.oem': { en: 'OEM / ODM project', zh: 'OEM/ODM 项目' },
  'contact.form.subject.docs': { en: 'Documentation & certifications', zh: '单证与认证' },
  'contact.form.send': { en: 'Send Message', zh: '发送留言' },
  'contact.form.note': { en: 'Your message is prepared as a complete draft — nothing is sent without your confirmation.', zh: '留言将生成完整草稿，未经您确认不会发送。' },
  'contact.success.title': { en: 'Message prepared.', zh: '留言已生成。' },
  'contact.success.desc': { en: 'This template has no mail backend, so nothing was transmitted automatically — send it via your email app or copy it for your records.', zh: '本站无邮件后台，留言不会自动发送——请通过邮件发送或复制保存。' },
  'contact.success.openEmail': { en: 'Open in Email App', zh: '邮件打开' },
  'contact.success.copy': { en: 'Copy Message', zh: '复制留言' },
  'contact.success.copied': { en: 'Copied', zh: '已复制' },
  'contact.success.edit': { en: 'Edit Message', zh: '修改留言' },
  'contact.faq.label': { en: 'FAQ', zh: '常见问题' },
  'contact.faq.title': { en: 'Buyer questions, answered directly.', zh: '采购商常见问题，直接解答。' },

  /* ---------- Request quote ---------- */
  'quote.label': { en: 'Request a Quote', zh: '询价' },
  'quote.title': { en: 'Get pricing that matches your program.', zh: '获取与您项目匹配的报价。' },
  'quote.desc': {
    en: 'Send quantities, target market and certification requirements. Our sales engineers reply with pricing, lead time and sample options within one business day.',
    zh: '发送数量、目标市场及认证要求，销售工程师一个工作日内回复报价、交期与样品方案。',
  },
  'quote.group.contact': { en: 'Contact', zh: '联系方式' },
  'quote.group.project': { en: 'Project — selected products', zh: '项目——所选产品' },
  'quote.group.requirements': { en: 'Requirements', zh: '具体要求' },
  'quote.form.name': { en: 'Name', zh: '姓名' },
  'quote.form.company': { en: 'Company', zh: '公司' },
  'quote.form.email': { en: 'Email', zh: '邮箱' },
  'quote.form.country': { en: 'Country / Market', zh: '国家/市场' },
  'quote.form.certification': { en: 'Certification target', zh: '认证要求' },
  'quote.form.certification.none': { en: 'No specific requirement', zh: '无特殊要求' },
  'quote.form.certification.other': { en: 'Other — advise us', zh: '其他——请注明' },
  'quote.form.packaging': { en: 'Packaging', zh: '包装' },
  'quote.form.packaging.standard': { en: 'Standard export packing', zh: '标准出口包装' },
  'quote.form.packaging.blister': { en: 'Retail-ready blister', zh: '零售吸塑包装' },
  'quote.form.packaging.box': { en: 'Retail box', zh: '零售彩盒' },
  'quote.form.packaging.constructor': { en: 'Constructor pack', zh: '工程包装' },
  'quote.form.packaging.plain': { en: 'Plain export carton', zh: '普通出口纸箱' },
  'quote.form.message': { en: 'Message', zh: '留言' },
  'quote.form.messagePlaceholder': { en: 'Delivery terms, OEM requirements, project timelines…', zh: '交付条款、OEM 要求、项目周期…' },
  'quote.form.submit': { en: 'Submit Inquiry', zh: '提交询价' },
  'quote.form.note': { en: 'No account needed. Your inquiry is prepared as a complete summary — nothing is sent without your confirmation.', zh: '无需注册。询价将生成完整摘要，未经您确认不会发送。' },
  'quote.form.qtyNote': { en: 'Quantities are targets for quotation — final pricing is calculated per finish and certification requirements.', zh: '数量为报价参考——最终价格按表面处理与认证要求核算。' },
  'quote.next.title': { en: 'What happens next', zh: '后续流程' },
  'quote.next.1': { en: 'Your inquiry summary is prepared on this page.', zh: '本页生成询价摘要。' },
  'quote.next.2': { en: 'Send it to our sales team via email or WhatsApp in one click.', zh: '一键通过邮件或 WhatsApp 发送给销售团队。' },
  'quote.next.3': { en: 'Sales engineers reply with pricing, lead time and samples within one business day.', zh: '销售工程师一个工作日内回复报价、交期与样品。' },
  'quote.next.4': { en: 'Production-intent samples ship within 7 days.', zh: '试样 7 天内发货。' },
  'quote.contacts.title': { en: 'Direct contacts', zh: '直接联系' },

  /* ---------- Quote success / summary ---------- */
  'quote.success.title': { en: 'Inquiry ready.', zh: '询价已就绪。' },
  'quote.success.desc': {
    en: 'Your request has been prepared below. Because this template runs without a mail server, nothing was transmitted automatically — send it via your email app, WhatsApp, or copy it for your records.',
    zh: '询价摘要已生成。本站无邮件后台，内容不会自动发送——请通过邮件、WhatsApp 发送或复制保存。',
  },
  'quote.success.openEmail': { en: 'Open in Email App', zh: '邮件打开' },
  'quote.success.whatsapp': { en: 'Send via WhatsApp', zh: 'WhatsApp 发送' },
  'quote.success.copy': { en: 'Copy Summary', zh: '复制摘要' },
  'quote.success.copied': { en: 'Copied', zh: '已复制' },
  'quote.success.edit': { en: 'Edit Inquiry', zh: '修改询价' },
  'quote.success.finish': { en: 'Finish — Back to Catalogue', zh: '完成——返回目录' },

  /* ---------- Inquiry page ---------- */
  'inquiry.label': { en: 'Inquiry Basket', zh: '询盘清单' },
  'inquiry.title': { en: 'One request. One quotation.', zh: '一次询价，一份报价。' },
  'inquiry.desc': {
    en: 'Collect the products you need, set target quantities, and send the complete list to our sales engineers in a single step.',
    zh: '收集所需产品、设定目标数量，一次性发送给销售工程师。',
  },
  'inquiry.empty.title': { en: 'Your inquiry basket is empty', zh: '询盘清单为空' },
  'inquiry.empty.desc': {
    en: 'Add products while you browse the catalogue, then return here to set quantities and request a quotation for the full list.',
    zh: '浏览目录时加入产品，回到本页设置数量并提交整单询价。',
  },
  'inquiry.empty.browse': { en: 'Browse Products', zh: '浏览产品' },
  'inquiry.empty.quote': { en: 'General Quote Request', zh: '通用询价' },
  'inquiry.moreInList': { en: 'more in list', zh: '个产品' },

  /* ---------- 404 ---------- */
  '404.code': { en: '404', zh: '404' },
  '404.title': { en: "This circuit doesn't connect.", zh: '此页面不存在。' },
  '404.desc': { en: "The page you requested doesn't exist or has moved. The catalogue, however, is fully energized.", zh: '您访问的页面不存在或已移除，但产品目录完整可用。' },
  '404.browse': { en: 'View Products', zh: '查看产品' },
  '404.families': { en: 'Or jump to a product family', zh: '或直接进入产品系列' },

  /* ---------- Breadcrumb ---------- */
  'breadcrumb.home': { en: 'Home', zh: '首页' },
  'breadcrumb.products': { en: 'Products', zh: '产品' },
};

export type I18nKey = keyof typeof catalog;
