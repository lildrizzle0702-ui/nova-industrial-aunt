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


# ============ ProductsPage ============
patch(
    'src/pages/ProductsPage.tsx',
    [
        (
            "import { ProductCard } from '../components/ui/ProductCard';",
            "import { ProductCard } from '../components/ui/ProductCard';\nimport { useLocale } from '../lib/i18n';",
        ),
        (
            "export default function ProductsPage() {\n  const [searchParams, setSearchParams] = useSearchParams();",
            "export default function ProductsPage() {\n  const { t } = useLocale();\n  const [searchParams, setSearchParams] = useSearchParams();",
        ),
        (
            '            <h1 className="h1">Wiring devices for every program.</h1>',
            "            <h1 className=\"h1\">{t('products.title')}</h1>",
        ),
        (
            '                placeholder="Search name, SKU, keyword…"',
            "                placeholder={t('products.searchPlaceholder')}",
        ),
        (
            '                  aria-label="Clear search"',
            "                  aria-label={t('products.clearSearch')}",
        ),
        (
            "                  Filters{isFiltered ? ` (${activeFilterCount(filters)})` : ''}",
            "                  {t('products.filters')}{isFiltered ? ` (${activeFilterCount(filters)})` : ''}",
        ),
        (
            "                Sort\n              </label>",
            "                {t('products.sort')}\n              </label>",
        ),
        (
            "                    {s.label}\n                  </option>",
            "                    {t(`products.sort${s.value.charAt(0).toUpperCase() + s.value.slice(1)}` as never)}\n                  </option>",
        ),
        (
            '                {results.length} product{results.length === 1 ? \'\' : \'s\'}',
            "                {results.length} {t('common.productsCount')}",
        ),
        (
            "                Clear filters ✕",
            "                {t('common.clearFilters')} ✕",
        ),
        (
            '              <h2 className="h3">No products found</h2>',
            "              <h2 className=\"h3\">{t('products.empty.title')}</h2>",
        ),
        (
            "                Nothing matches the current search and filter combination. Try a different keyword, or\n                reset the filters to browse the full catalogue.",
            "                {t('products.empty.desc')}",
        ),
        (
            "                Clear Filters",
            "                {t('products.empty.clear')}",
        ),
    ],
)

# FilterGroup labels
patch(
    'src/pages/ProductsPage.tsx',
    [
        (
            '          <FilterGroup label="Category">',
            "          <FilterGroup label={t('products.category')}>",
        ),
        (
            '          <FilterGroup label="Application">',
            "          <FilterGroup label={t('products.application')}>",
        ),
        (
            '          <FilterGroup label="Certification">',
            "          <FilterGroup label={t('products.certification')}>",
        ),
    ],
)

# "All families" — inside FilterGroups (needs t via props or hook). Add hook there.
patch(
    'src/pages/ProductsPage.tsx',
    [
        (
            "function FilterGroups({\n  filters,\n  counts,\n  update,\n}: {",
            "function FilterGroups({\n  filters,\n  counts,\n  update,\n  t,\n}: {\n  t: (k: string) => string;",
        ),
        (
            "  counts: { byCategory: Record<string, number>; byApplication: Record<string, number>; byCertification: Record<string, number> };",
            "  counts: { byCategory: Record<string, number>; byApplication: Record<string, number>; byCertification: Record<string, number> };\n  t: (k: string) => string;",
        ),
        (
            "              All families",
            "              {t('products.allFamilies')}",
        ),
    ],
)
print("PRODUCTS OK")
