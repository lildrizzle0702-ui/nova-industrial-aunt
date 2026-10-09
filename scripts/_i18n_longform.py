import io


def patch(path, subs):
    s = io.open(path, encoding='utf-8').read()
    for old, new in subs:
        assert old in s, f"NOT FOUND in {path}: {old[:70]}"
        s = s.replace(old, new)
    io.open(path, 'w', encoding='utf-8').write(s)
    print("patched", path)


# about process steps zh (single-line records)
patch(
    'src/config/about.ts',
    [
        (
            "{ step: '01', title: 'Tooling', body: 'Mold design and steel cutting in the 14-person mold shop; 25–40 days for a new tool.' },",
            "{ step: '01', title: 'Tooling', body: 'Mold design and steel cutting in the 14-person mold shop; 25–40 days for a new tool.', bodyZh: '14 人模具车间负责模具设计与钢材加工，新模具周期 25–40 天。' },",
        ),
        (
            "{ step: '02', title: 'Injection molding', body: '24 machines, 80–650T, molding PC and nylon housings around the clock.' },",
            "{ step: '02', title: 'Injection molding', body: '24 machines, 80–650T, molding PC and nylon housings around the clock.', bodyZh: '24 台注塑机（80–650T）全天候成型 PC 与尼龙外壳。' },",
        ),
        (
            "{ step: '03', title: 'Contact stamping', body: 'High-speed progressive dies stamp silver-alloy contacts and brass terminals in-house.' },",
            "{ step: '03', title: 'Contact stamping', body: 'High-speed progressive dies stamp silver-alloy contacts and brass terminals in-house.', bodyZh: '高速级进模内部冲压银合金触点与铜端子。' },",
        ),
        (
            "{ step: '04', title: 'Assembly', body: '8 automated lines with vision inspection at every critical station.' },",
            "{ step: '04', title: 'Assembly', body: '8 automated lines with vision inspection at every critical station.', bodyZh: '8 条自动化产线，关键工位均配视觉检测。' },",
        ),
        (
            "{ step: '05', title: 'Testing', body: 'Batch sampling on endurance, dielectric and IP rigs before any carton is sealed.' },",
            "{ step: '05', title: 'Testing', body: 'Batch sampling on endurance, dielectric and IP rigs before any carton is sealed.', bodyZh: '封箱前按批次抽样进行寿命、耐压及 IP 防护测试。' },",
        ),
        (
            "{ step: '06', title: 'Packing', body: 'Blister, box or bulk packing with drop-tested cartons and GS1 labeling.' },",
            "{ step: '06', title: 'Packing', body: 'Blister, box or bulk packing with drop-tested cartons and GS1 labeling.', bodyZh: '吸塑、彩盒或散装包装，纸箱经跌落测试，贴 GS1 标签。' },",
        ),
        (
            "{ step: '07', title: 'Export', body: 'Bonded warehouse, container loading plans and documentation 40 minutes from Ningbo port.' },",
            "{ step: '07', title: 'Export', body: 'Bonded warehouse, container loading plans and documentation 40 minutes from Ningbo port.', bodyZh: '保税仓、装箱方案与单证，距宁波港 40 分钟。' },",
        ),
    ],
)

# milestones zh (single-line records)
patch(
    'src/config/about.ts',
    [
        (
            "{ year: '2004', text: 'Founded in Wenzhou with two molding machines producing wall switches for domestic brands.' },",
            "{ year: '2004', text: 'Founded in Wenzhou with two molding machines producing wall switches for domestic brands.', textZh: '温州创立，两台注塑机为国产品牌生产墙壁开关。' },",
        ),
        (
            "{ year: '2009', text: 'ISO 9001 certification; first European distributor program launches in Germany.' },",
            "{ year: '2009', text: 'ISO 9001 certification; first European distributor program launches in Germany.', textZh: '通过 ISO 9001 认证；首个德国经销商项目启动。' },",
        ),
        (
            "{ year: '2013', text: 'In-house testing lab commissioned; IEC type-testing moved on-site.' },",
            "{ year: '2013', text: 'In-house testing lab commissioned; IEC type-testing moved on-site.', textZh: '自有检测实验室投入使用；IEC 型式试验移至厂内。' },",
        ),
        (
            "{ year: '2016', text: 'New 52,000 m² plant; USB charging and modular ranges added.' },",
            "{ year: '2016', text: 'New 52,000 m² plant; USB charging and modular ranges added.', textZh: '5.2 万平方米新厂投产；新增 USB 充电与模块系列。' },",
        ),
        (
            "{ year: '2020', text: 'Smart controls platform developed — Wi-Fi and Zigbee lines for project business.' },",
            "{ year: '2020', text: 'Smart controls platform developed — Wi-Fi and Zigbee lines for project business.', textZh: '开发智能控制平台——面向工程业务的 Wi-Fi 与 Zigbee 产品线。' },",
        ),
        (
            "{ year: '2024', text: '40th export market; annual capacity reaches 12 million units.' },",
            "{ year: '2024', text: '40th export market; annual capacity reaches 12 million units.', textZh: '出口第 40 个市场；年产能达 1200 万件。' },",
        ),
    ],
)

# FAQ zh (single-line answer values)
patch(
    'src/config/certifications.ts',
    [
        (
            "      answer:\n      'Yes — both. OEM private-label production starts at 1,000 units per finish, with your logo engraved or printed on plates and packaging. ODM platform modifications (pin types, shutters, finishes, connectivity) start at 3,000 pcs, and full custom tooling runs 25–40 days in our own mold shop.',",
            "      answer:\n      'Yes — both. OEM private-label production starts at 1,000 units per finish, with your logo engraved or printed on plates and packaging. ODM platform modifications (pin types, shutters, finishes, connectivity) start at 3,000 pcs, and full custom tooling runs 25–40 days in our own mold shop.',\n    answerZh: '可以。OEM 贴牌起订量 1,000 件/色，面板与包装可印您的 Logo；ODM 改型（插脚、保护门、表面处理、通讯协议）3,000 件起，全新模具 25–40 天于自有模具车间完成。',",
        ),
        (
            "      answer:\n      'Standard catalog items ship from 1,000 units per finish. Less than container load is acceptable for stocked lines. For mixed orders we consolidate SKUs into a single container loading plan.',",
            "      answer:\n      'Standard catalog items ship from 1,000 units per finish. Less than container load is acceptable for stocked lines. For mixed orders we consolidate SKUs into a single container loading plan.',\n    answerZh: '常规产品起订量 1,000 件/色。现货系列可拼箱；多品类订单我们统一制定拼箱方案。',",
        ),
        (
            "      answer:\n      'Yes. We send production-intent samples within 7 days — three pieces free of charge, freight collected. Sample finishes and pin types can be mixed so your team can evaluate the range side by side.',",
            "      answer:\n      'Yes. We send production-intent samples within 7 days — three pieces free of charge, freight collected. Sample finishes and pin types can be mixed so your team can evaluate the range side by side.',\n    answerZh: '可以。7 天内寄出量产标准样品——3 件免费，运费到付。样品可混搭颜色与插脚类型，便于对比评估。',",
        ),
        (
            "      answer:\n      'CE and RoHS on all ranges, UKCA on British-standard products, SASO IECEE for selected Middle East lines, and type-test reports to IEC 60669-1 / IEC 60884-1 / BS 1363-2 from Intertek and SGS. Declarations of Conformity are issued per shipment on request.',",
            "      answer:\n      'CE and RoHS on all ranges, UKCA on British-standard products, SASO IECEE for selected Middle East lines, and type-test reports to IEC 60669-1 / IEC 60884-1 / BS 1363-2 from Intertek and SGS. Declarations of Conformity are issued per shipment on request.',\n    answerZh: '全系列 CE、RoHS；英式产品 UKCA；部分中东系列 SASO IECEE；型式试验报告（IEC 60669-1 / IEC 60884-1 / BS 1363-2）由 Intertek、SGS 出具。符合性声明可按需提供。',",
        ),
        (
            "      answer:\n      'Distributors and OEM buyers in more than 40 countries across Europe, North America, the Middle East and Southeast Asia. Our most common programs are private-label ranges for electrical wholesalers and project supply for hospitality developers.',",
            "      answer:\n      'Distributors and OEM buyers in more than 40 countries across Europe, North America, the Middle East and Southeast Asia. Our most common programs are private-label ranges for electrical wholesalers and project supply for hospitality developers.',\n    answerZh: '欧洲、北美、中东、东南亚 40 多个国家的经销商与 OEM 采购商。主要项目为电气批发商贴牌系列及酒店工程供货。',",
        ),
        (
            "      answer:\n      'Use the Request a Quote form, or add products to the inquiry basket and submit the list together. Include quantities, target market and any certification or packaging requirements — our sales engineers reply within one business day.',",
            "      answer:\n      'Use the Request a Quote form, or add products to the inquiry basket and submit the list together. Include quantities, target market and any certification or packaging requirements — our sales engineers reply within one business day.',\n    answerZh: '使用询价表单，或将产品加入询盘清单一并提交。请注明数量、目标市场及认证/包装要求——销售工程师一个工作日内回复。',",
        ),
        (
            "      answer:\n      'Standard terms are 30% deposit with balance against B/L copy, T/T or L/C at sight. Lead time is 35–45 days after deposit for production orders; FOB, CIF and DDP are all workable from Ningbo.',",
            "      answer:\n      'Standard terms are 30% deposit with balance against B/L copy, T/T or L/C at sight. Lead time is 35–45 days after deposit for production orders; FOB, CIF and DDP are all workable from Ningbo.',\n    answerZh: '常规条款：30% 定金，余款凭提单副本支付，电汇或即期信用证。生产订单收到定金后 35–45 天交货；FOB、CIF、DDP 均可自宁波出运。',",
        ),
        (
            "      answer:\n      'Five years on mechanical construction and finishes, two years on electronic components — backed by a kept-defect analysis program that feeds results back into production within the same quarter.',",
            "      answer:\n      'Five years on mechanical construction and finishes, two years on electronic components — backed by a kept-defect analysis program that feeds results back into production within the same quarter.',\n    answerZh: '机械结构与表面处理 5 年，电子元件 2 年——配套不良品分析机制，检测结果当季反馈至生产。',",
        ),
    ],
)
print("OK")
