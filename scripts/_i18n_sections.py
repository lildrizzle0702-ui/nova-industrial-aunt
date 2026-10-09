import io


def patch(path, subs):
    with io.open(path, 'r', encoding='utf-8') as f:
        s = f.read()
    for old, new in subs:
        assert old in s, f"NOT FOUND in {path}: {old[:80]}"
        s = s.replace(old, new)
    with io.open(path, 'w', encoding='utf-8') as f:
        f.write(s)
    print("patched", path)


# Hero
patch(
    'src/sections/Hero.tsx',
    [
        (
            "import { hero } from '../config/hero';",
            "import { hero } from '../config/hero';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function Hero() {\n  return (",
            "export function Hero() {\n  const { t } = useLocale();\n  return (",
        ),
        (
            '<p className="hero__footnote mono">{hero.footnote}</p>',
            "<p className=\"hero__footnote mono\">{t('home.hero.footnote')}</p>",
        ),
    ],
)

# CategoryGrid
patch(
    'src/sections/CategoryGrid.tsx',
    [
        (
            "import { categories } from '../config/categories';",
            "import { categories } from '../config/categories';\nimport { useLocale } from '../lib/i18n';\nimport { useDisplay } from '../lib/display';",
        ),
        (
            "export function CategoryGrid() {\n  const s = homeSections.categories;",
            "export function CategoryGrid() {\n  const s = homeSections.categories;\n  const { t } = useLocale();\n  const { categoryName, categoryDesc, categoryShort } = useDisplay();",
        ),
        (
            "          cta={{ label: 'View All Products', href: '/products' }}",
            "          cta={{ label: t('common.viewAllProducts'), href: '/products' }}",
        ),
        (
            '<h3 className="category-card__name">{category.name}</h3>',
            '<h3 className="category-card__name">{categoryName(category)}</h3>',
        ),
        (
            '<p className="category-card__desc">{category.description}</p>',
            '<p className="category-card__desc">{categoryDesc(category)}</p>',
        ),
        (
            "                    Browse {category.shortName}",
            "                    {t('home.cat.browse')} {categoryShort(category)}",
        ),
        (
            '<span className="category-card__count mono">{count} SKUs</span>',
            '<span className="category-card__count mono">{count} {t(\'common.skus\')}</span>',
        ),
    ],
)

# FactorySection
patch(
    'src/sections/FactorySection.tsx',
    [
        (
            "import { factoryStats } from '../config/company';",
            "import { factoryStats } from '../config/company';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function FactorySection() {\n  const s = homeSections.factory;",
            "export function FactorySection() {\n  const s = homeSections.factory;\n  const { t } = useLocale();",
        ),
        (
            "              {s.points.map((point) => (\n                <li key={point}>{point}</li>\n              ))}",
            "              {[t('home.factory.points.1'), t('home.factory.points.2'), t('home.factory.points.3'), t('home.factory.points.4')].map((point) => (\n                <li key={point}>{point}</li>\n              ))}",
        ),
    ],
)

# FeaturedProducts
patch(
    'src/sections/FeaturedProducts.tsx',
    [
        (
            "import { homeSections } from '../config/hero';",
            "import { homeSections } from '../config/hero';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function FeaturedProducts() {\n  const s = homeSections.featured;",
            "export function FeaturedProducts() {\n  const s = homeSections.featured;\n  const { t } = useLocale();",
        ),
        (
            "          cta={{ label: 'Full Catalogue', href: '/products' }}",
            "          cta={{ label: t('common.fullCatalogue'), href: '/products' }}",
        ),
    ],
)

# CapabilitiesSection (home)
patch(
    'src/sections/CapabilitiesSection.tsx',
    [
        (
            "import { capabilities } from '../config/certifications';",
            "import { capabilities } from '../config/certifications';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function CapabilitiesSection() {\n  const s = homeSections.capabilities;",
            "export function CapabilitiesSection() {\n  const s = homeSections.capabilities;\n  const { t } = useLocale();",
        ),
        (
            "          cta={{ label: 'All Capabilities', href: '/capabilities' }}",
            "          cta={{ label: t('home.cap.viewAll'), href: '/capabilities' }}",
        ),
    ],
)

# OemSection
patch(
    'src/sections/OemSection.tsx',
    [
        (
            "import { homeSections } from '../config/hero';",
            "import { homeSections } from '../config/hero';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function OemSection() {\n  const s = homeSections.oem;",
            "export function OemSection() {\n  const s = homeSections.oem;\n  const { t } = useLocale();",
        ),
        (
            "              Discuss Your Project",
            "              {t('home.oem.cta')}",
        ),
    ],
)

# QualitySection (home)
patch(
    'src/sections/QualitySection.tsx',
    [
        (
            "import { homeSections } from '../config/hero';",
            "import { homeSections } from '../config/hero';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function QualitySection() {\n  const s = homeSections.quality;",
            "export function QualitySection() {\n  const s = homeSections.quality;\n  const { t } = useLocale();",
        ),
        (
            "              Quality &amp; Certifications",
            "              {t('home.quality.link')}",
        ),
    ],
)

# ExportSection
patch(
    'src/sections/ExportSection.tsx',
    [
        (
            "import { homeSections } from '../config/hero';",
            "import { homeSections } from '../config/hero';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function ExportSection() {\n  const s = homeSections.export;",
            "export function ExportSection() {\n  const s = homeSections.export;\n  const { t } = useLocale();",
        ),
        (
            "              About the Company",
            "              {t('home.export.about')}",
        ),
    ],
)

# StatsBand / CtaBand
patch(
    'src/sections/StatsBand.tsx',
    [
        (
            "import { ctaBand } from '../config/hero';",
            "import { ctaBand } from '../config/hero';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export function CtaBand() {\n  return (",
            "export function CtaBand() {\n  const { t } = useLocale();\n  return (",
        ),
        (
            '<p className="eyebrow">{ctaBand.eyebrow}</p>',
            "<p className=\"eyebrow\">{t('cta.label')}</p>",
        ),
        (
            "            {ctaBand.title}",
            "            {t('cta.title')}",
        ),
        (
            '<p className="cta-band__desc">{ctaBand.description}</p>',
            "<p className=\"cta-band__desc\">{t('cta.desc')}</p>",
        ),
        (
            "            {ctaBand.primaryCta.label}",
            "            {t('cta.primary')}",
        ),
        (
            "            {ctaBand.secondaryCta.label}",
            "            {t('cta.secondary')}",
        ),
    ],
)

print("ALL SECTIONS OK")
