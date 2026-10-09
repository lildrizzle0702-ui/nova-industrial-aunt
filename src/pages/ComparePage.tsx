import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { certificationsOf } from '../lib/products';
import { useLocale } from '../lib/i18n';
import { useDisplay } from '../lib/display';
import { usePageMeta } from '../lib/seo';
import { ProductMedia } from '../components/ui/Media';
import { ArrowIcon } from '../components/ui/SectionHead';

/** Compare page: 2–3 products side by side, spec rows aligned. */
export default function ComparePage() {
  const { t } = useLocale();
  const { productName } = useDisplay();
  usePageMeta({
    title: 'Compare Products',
    description: 'Compare NOVA INDUSTRIAL wiring devices side by side — specifications, MOQ, certifications and applications.',
    path: '/compare',
  });

  const params = new URLSearchParams(window.location.search);
  const ids = params.get('ids')?.split(',').filter(Boolean) ?? [];
  const selected = products.filter((p) => ids.includes(p.id));

  const specKeys = useMemo(() => {
    const set = new Set<string>();
    selected.forEach((p) => p.specifications.forEach((r) => set.add(r.label)));
    return Array.from(set);
  }, [selected]);

  if (selected.length < 2) {
    return (
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t('compare.label')}</p>
          <h1 className="h1">{t('compare.title')}</h1>
          <p className="lead">{t('compare.needTwo')}</p>
          <Link to="/products" className="btn btn--primary" style={{ marginTop: 'var(--sp-6)' }}>
            {t('common.viewProducts')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="compare-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('compare.label')}</p>
          <h1 className="h1">{t('compare.title')}</h1>
          <p className="lead">{t('compare.desc')}</p>
        </div>
      </div>

      <div className="container section">
        <div className="compare-grid" style={{ gridTemplateColumns: `200px repeat(${selected.length}, 1fr)` }}>
          {/* header row */}
          <div className="compare-cell compare-cell--head" />
          {selected.map((p) => (
            <div key={p.id} className="compare-cell compare-cell--head">
              <Link to={`/products/${p.slug}`} className="compare-card__media">
                <ProductMedia slug={p.slug} spec={p.visual} images={p.images} title={productName(p)} aspectRatio="1" />
              </Link>
              <p className="compare-card__sku mono">{p.sku}</p>
              <h2 className="h3 compare-card__name">
                <Link to={`/products/${p.slug}`}>{productName(p)}</Link>
              </h2>
              <Link to={`/products/${p.slug}`} className="arrow-link">
                {t('common.viewProduct')}
                <ArrowIcon />
              </Link>
            </div>
          ))}

          {/* commercial row */}
          <div className="compare-cell compare-cell--label mono">{t('compare.commercial')}</div>
          {selected.map((p) => (
            <div key={p.id} className="compare-cell">
              <dl className="compare-meta">
                <div><dt className="mono">{t('pdp.moq')}</dt><dd>{p.moq}</dd></div>
                <div><dt className="mono">{t('pdp.leadTime')}</dt><dd>{p.leadTime}</dd></div>
                <div><dt className="mono">{t('pdp.warranty')}</dt><dd>{p.warranty}</dd></div>
              </dl>
            </div>
          ))}

          {/* certification row */}
          <div className="compare-cell compare-cell--label mono">{t('compare.certifications')}</div>
          {selected.map((p) => (
            <div key={p.id} className="compare-cell">
              <ul className="cert-strip">
                {certificationsOf(p).map((c) => (
                  <li key={c.id} className="cert-chip mono">{c.code}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* application row */}
          <div className="compare-cell compare-cell--label mono">{t('compare.applications')}</div>
          {selected.map((p) => (
            <div key={p.id} className="compare-cell">
              <ul className="apps-list">
                {p.applications.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* spec rows */}
          {specKeys.map((key) => (
            <>
              <div key={`l-${key}`} className="compare-cell compare-cell--label mono">{key}</div>
              {selected.map((p) => {
                const row = p.specifications.find((r) => r.label === key);
                return (
                  <div key={`${p.id}-${key}`} className="compare-cell mono">
                    {row ? row.value : '—'}
                  </div>
                );
              })}
            </>
          ))}
        </div>

        <div className="compare-page__foot">
          <Link to="/products" className="btn btn--outline">
            {t('pdp.backToCatalogue')}
          </Link>
        </div>
      </div>
    </div>
  );
}
