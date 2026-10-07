import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../config/categories';
import { certifications } from '../config/certifications';
import { products } from '../data/products';
import {
  applications,
  queryCatalogue,
  type CatalogueFilters,
  type SortKey,
} from '../lib/products';
import { ProductCard } from '../components/ui/ProductCard';
import { usePageMeta } from '../lib/seo';

const SORTS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'name', label: 'Name A–Z' },
  { value: 'category', label: 'Category' },
];

const DEFAULT_FILTERS: CatalogueFilters = {
  query: '',
  category: null,
  application: null,
  certification: null,
  sort: 'featured',
};

function readFilters(params: URLSearchParams): CatalogueFilters {
  const sort = SORTS.find((s) => s.value === params.get('sort'))?.value ?? 'featured';
  return {
    query: params.get('q') ?? '',
    category: params.get('category'),
    application: params.get('application'),
    certification: params.get('certification'),
    sort,
  };
}

function activeFilterCount(f: CatalogueFilters): number {
  return [f.category, f.application, f.certification].filter(Boolean).length + (f.query ? 1 : 0);
}

/** Static catalogue index counts (like a printed catalogue's table of contents). */
function useIndexCounts() {
  return useMemo(() => {
    const byCategory: Record<string, number> = {};
    const byApplication: Record<string, number> = {};
    const byCertification: Record<string, number> = {};
    for (const p of products) {
      byCategory[p.categoryId] = (byCategory[p.categoryId] ?? 0) + 1;
      for (const a of p.applications) byApplication[a] = (byApplication[a] ?? 0) + 1;
      for (const c of p.certificationIds) byCertification[c] = (byCertification[c] ?? 0) + 1;
    }
    return { byCategory, byApplication, byCertification };
  }, []);
}

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(() => readFilters(searchParams), [searchParams]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const counts = useIndexCounts();

  usePageMeta({
    title: 'Products',
    description:
      'The NOVA INDUSTRIAL catalogue: wall switches, electrical sockets, USB wall chargers, smart controls and installation accessories. Search by name, SKU or keyword.',
    path: '/products',
  });

  const update = useCallback(
    (patch: Partial<CatalogueFilters>) => {
      setSearchParams(
        (prev) => {
          const next = readFilters(prev);
          const merged = { ...next, ...patch };
          const params = new URLSearchParams();
          if (merged.query) params.set('q', merged.query);
          if (merged.category) params.set('category', merged.category);
          if (merged.application) params.set('application', merged.application);
          if (merged.certification) params.set('certification', merged.certification);
          if (merged.sort !== 'featured') params.set('sort', merged.sort);
          return params;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const results = useMemo(() => queryCatalogue(filters), [filters]);
  const isFiltered = activeFilterCount(filters) > 0;
  const clearAll = () => update(DEFAULT_FILTERS);

  return (
    <div className="catalogue">
      <div className="page-hero page-hero--catalogue">
        <div className="container">
          <div className="page-hero__head">
            <p className="eyebrow">Product Catalogue</p>
            <h1 className="h1">Wiring devices for every program.</h1>
            <p className="lead">
              {products.length} SKUs across {categories.length} families — all produced on the same
              86mm platform and export-ready. Quote any list in one request.
            </p>
          </div>
          <ul className="catalogue-meta mono" aria-label="Catalogue metadata">
            <li>
              <span className="catalogue-meta__num">{products.length}</span> SKUs
            </li>
            <li>
              <span className="catalogue-meta__num">{categories.length}</span> product families
            </li>
            <li>
              <span className="catalogue-meta__num">86mm</span> platform
            </li>
            <li>
              <span className="catalogue-meta__num">OEM</span> / ODM ready
            </li>
          </ul>
        </div>
      </div>

      <div className="container catalogue__layout">
        {/* Desktop filter rail — printed-catalogue style index */}
        <aside className="catalogue__filters" aria-label="Product filters">
          <FilterGroups filters={filters} counts={counts} update={update} />
        </aside>

        {/* Results */}
        <div className="catalogue__results">
          <div className="catalogue__toolbar">
            <button
              type="button"
              className="btn btn--outline btn--sm catalogue__filter-toggle"
              onClick={() => setSheetOpen(true)}
              aria-haspopup="dialog"
            >
              Filters{isFiltered ? ` (${activeFilterCount(filters)})` : ''}
            </button>
            <div className="search-wrap catalogue__search">
              <label className="visually-hidden" htmlFor="catalogue-search">
                Search products by name, SKU or keyword
              </label>
              <input
                id="catalogue-search"
                type="search"
                placeholder="Search name, SKU, keyword…"
                value={filters.query}
                onChange={(e) => update({ query: e.target.value })}
                autoComplete="off"
              />
              {filters.query && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => update({ query: '' })}
                  aria-label="Clear search"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1.5 1.5l9 9m0-9l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
            <div className="catalogue__sort">
              <label className="catalogue__sort-label mono" htmlFor="catalogue-sort">
                Sort
              </label>
              <select
                id="catalogue-sort"
                value={filters.sort}
                onChange={(e) => update({ sort: e.target.value as SortKey })}
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="catalogue__status">
            <p className="caption" aria-live="polite">
              {results.length} product{results.length === 1 ? '' : 's'}
              {filters.category ? ` in ${categories.find((c) => c.slug === filters.category)?.name}` : ''}
              {filters.query ? ` matching “${filters.query}”` : ''}
            </p>
            {isFiltered && (
              <button type="button" className="text-btn" onClick={clearAll}>
                Clear filters ✕
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <div className="product-grid product-grid--3">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="empty-state__glyph mono">Ø</p>
              <h2 className="h3">No products found</h2>
              <p className="body-sm">
                Nothing matches the current search and filter combination. Try a different keyword, or
                reset the filters to browse the full catalogue.
              </p>
              <button type="button" className="btn btn--primary" onClick={clearAll}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      <FilterSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        filters={filters}
        counts={counts}
        update={update}
        resultCount={results.length}
        onClear={clearAll}
      />
    </div>
  );
}

/* ---------- Shared filter groups ---------- */

function FilterGroups({
  filters,
  counts,
  update,
}: {
  filters: CatalogueFilters;
  counts: { byCategory: Record<string, number>; byApplication: Record<string, number>; byCertification: Record<string, number> };
  update: (patch: Partial<CatalogueFilters>) => void;
}) {
  return (
    <>
      <FilterGroup label="Category">
        <ul className="filter-list">
          <li>
            <FilterButton
              active={!filters.category}
              onClick={() => update({ category: null })}
              count={products.length}
            >
              All families
            </FilterButton>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <FilterButton
                active={filters.category === c.slug}
                onClick={() => update({ category: filters.category === c.slug ? null : c.slug })}
                count={counts.byCategory[c.id] ?? 0}
              >
                {c.name}
              </FilterButton>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Application">
        <ul className="filter-list">
          {applications.map((a) => (
            <li key={a}>
              <FilterButton
                active={filters.application === a}
                onClick={() => update({ application: filters.application === a ? null : a })}
                count={counts.byApplication[a] ?? 0}
              >
                {a}
              </FilterButton>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Certification">
        <ul className="filter-list">
          {certifications.map((cert) => (
            <li key={cert.id}>
              <FilterButton
                active={filters.certification === cert.id}
                onClick={() =>
                  update({ certification: filters.certification === cert.id ? null : cert.id })
                }
                count={counts.byCertification[cert.id] ?? 0}
              >
                <span className="mono">{cert.code}</span>
              </FilterButton>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="filter-group">
      <h2 className="filter-group__label mono">{label}</h2>
      {children}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  count,
  children,
}: {
  active: boolean;
  onClick: () => void;
  count?: number;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`filter-btn ${active ? 'is-active' : ''}`}
      aria-pressed={active}
      onClick={onClick}
    >
      <span className="filter-btn__label">{children}</span>
      {typeof count === 'number' && <span className="filter-btn__count mono">{String(count).padStart(2, '0')}</span>}
    </button>
  );
}

/* ---------- Mobile bottom sheet ---------- */

function FilterSheet({
  open,
  onClose,
  filters,
  counts,
  update,
  resultCount,
  onClear,
}: {
  open: boolean;
  onClose: () => void;
  filters: CatalogueFilters;
  counts: { byCategory: Record<string, number>; byApplication: Record<string, number>; byCertification: Record<string, number> };
  update: (patch: Partial<CatalogueFilters>) => void;
  resultCount: number;
  onClear: () => void;
}) {
  /* Selections apply live; Apply simply closes, Clear resets everything. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [open, onClose]);

  return createPortal(
    <div className={`filter-sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <button
        type="button"
        className="drawer__scrim"
        aria-label="Close filters"
        tabIndex={-1}
        onClick={onClose}
      />
      <div className="filter-sheet__panel" role="dialog" aria-modal="true" aria-label="Product filters">
        <div className="filter-sheet__head">
          <h2 className="h4">Filters</h2>
          <button type="button" className="drawer__close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="filter-sheet__body">
          <FilterGroups filters={filters} counts={counts} update={update} />
        </div>
        <div className="filter-sheet__foot">
          <button type="button" className="btn btn--outline" onClick={onClear}>
            Clear All
          </button>
          <button type="button" className="btn btn--primary" onClick={onClose}>
            Show {resultCount} product{resultCount === 1 ? '' : 's'}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
