import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryOf, certificationsOf, relatedProducts, productBySlug } from '../lib/products';
import { useInquiry } from '../lib/inquiry';
import { usePageMeta, productJsonLd } from '../lib/seo';
import type { ProductView } from '../components/visuals/ProductVisual';
import { Media, ProductMedia } from '../components/ui/Media';
import { resolveProductGallery, type MediaAsset } from '../config/media';
import { ProductCard } from '../components/ui/ProductCard';
import { ArrowIcon } from '../components/ui/SectionHead';
import { pdpConfig } from '../config/hero';

interface GallerySlide {
  key: string;
  label: string;
  view?: ProductView;
  asset?: MediaAsset;
}

const BASE_SLIDES: GallerySlide[] = [
  { key: 'hero', label: 'Product view', view: 'hero' },
  { key: 'technical', label: 'Dimensioned drawing', view: 'technical' },
  { key: 'detail', label: 'Material detail', view: 'detail' },
];

export default function ProductDetailPage() {
  const { slug = '' } = useParams();
  const product = productBySlug(slug);
  const [active, setActive] = useState(0);
  const inquiry = useInquiry();

  useEffect(() => {
    setActive(0);
  }, [slug]);

  usePageMeta({
    title: product ? product.name : 'Product Not Found',
    description: product?.shortDescription,
    path: product ? `/products/${product.slug}` : '/products',
    jsonLd: product
      ? productJsonLd({
          name: product.name,
          sku: product.sku,
          description: product.shortDescription,
          category: categoryOf(product).name,
          path: `/products/${product.slug}`,
        })
      : undefined,
  });

  if (!product) {
    return (
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Error 404</p>
          <h1 className="h1">Product not found</h1>
          <p className="lead">
            The product you are looking for doesn't exist or may have been discontinued.
          </p>
          <div className="btn-row" style={{ marginTop: 'var(--sp-6)' }}>
            <Link to="/products" className="btn btn--primary">
              Browse Products
            </Link>
            <Link to="/" className="btn btn--outline">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const category = categoryOf(product);
  const certs = certificationsOf(product);
  const related = relatedProducts(product, 4);
  const inBasket = inquiry.contains(product.id);

  /* 15-second credibility line: standard · rating · material · certifications */
  const specBy = (prefix: string) =>
    product.specifications.find((r) => r.label.toLowerCase().startsWith(prefix))?.value;
  const keydataParts = [
    specBy('standard'),
    specBy('rated current') &&
      [specBy('rated current'), specBy('rated voltage')].filter(Boolean).join(' '),
    specBy('housing material'),
  ].filter(Boolean) as string[];
  const keydata = [...keydataParts, certs.map((c) => c.code).join(' · ')].filter(Boolean).join('  ·  ');

  return (
    <article className="pdp">
      {/* breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span aria-hidden="true">/</span>
          <Link to={`/products?category=${category.slug}`}>{category.name}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </div>
      </nav>

      <div className="container pdp__layout">
        {/* gallery — hero / technical / detail + optional client photos */}
        <div className="pdp__gallery">
          {(() => {
            const slides: GallerySlide[] = [
              ...BASE_SLIDES,
              ...resolveProductGallery(product.slug, product.images?.gallery).map((asset, i) => ({
                key: `photo-${i}`,
                label: `Photo ${i + 1}`,
                asset,
              })),
            ];
            const slide = slides[Math.min(active, slides.length - 1)];
            const stageTitle = `${product.name} — ${slide.label}`;

            return (
              <>
                <div className="pdp__stage">
                  {slide.view ? (
                    <ProductMedia
                      slug={product.slug}
                      spec={product.visual}
                      images={product.images}
                      view={slide.view}
                      title={stageTitle}
                    />
                  ) : (
                    <Media
                      src={slide.asset!.src}
                      alt={slide.asset!.alt ?? stageTitle}
                      objectPosition={slide.asset!.position}
                      fallback={
                        <ProductMedia
                          slug={product.slug}
                          spec={product.visual}
                          images={product.images}
                          view="hero"
                          title=""
                        />
                      }
                    />
                  )}
                </div>
                <div className="pdp__thumbs" role="tablist" aria-label="Product views">
                  {slides.map((s, i) => (
                    <button
                      key={s.key}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      className={`pdp__thumb ${i === active ? 'is-active' : ''}`}
                      onClick={() => setActive(i)}
                    >
                      {s.view ? (
                        <ProductMedia
                          slug={product.slug}
                          spec={product.visual}
                          images={product.images}
                          view={s.view}
                          title=""
                        />
                      ) : (
                        <Media
                          src={s.asset!.src}
                          alt=""
                          objectPosition={s.asset!.position}
                          fallback={
                            <ProductMedia
                              slug={product.slug}
                              spec={product.visual}
                              images={product.images}
                              view="hero"
                              title=""
                            />
                          }
                        />
                      )}
                      <span className="visually-hidden">{s.label}</span>
                    </button>
                  ))}
                </div>
                <p className="caption pdp__view-label mono" aria-live="polite">
                  {slide.label}
                </p>
              </>
            );
          })()}
        </div>

        {/* summary — sales-engineering hierarchy:
            identity → promise → conversion → commercial data → features */}
        <div className="pdp__summary">
          <p className="pdp__meta mono">
            <span>{product.sku}</span>
            <span>{category.name}</span>
          </p>
          <h1 className="h1 pdp__title">{product.name}</h1>
          <p className="lead">{product.shortDescription}</p>

          <div className="pdp__actions">
            <Link to={`/request-quote?product=${product.slug}`} className="btn btn--accent btn--lg">
              Request a Quote
            </Link>
            <button
              type="button"
              className={`btn btn--lg ${inBasket ? 'btn--primary' : 'btn--outline'}`}
              onClick={() => (inBasket ? inquiry.openDrawer() : inquiry.add(product.id))}
            >
              {inBasket ? 'In Inquiry Basket ✓' : 'Add to Inquiry'}
            </button>
          </div>

          <dl className="pdp__commercial">
            <div>
              <dt className="mono">MOQ</dt>
              <dd>{product.moq}</dd>
            </div>
            <div>
              <dt className="mono">Lead time</dt>
              <dd>{product.leadTime}</dd>
            </div>
            <div>
              <dt className="mono">Finishes</dt>
              <dd>{product.colors.join(' · ')}</dd>
            </div>
            <div>
              <dt className="mono">Warranty</dt>
              <dd>{product.warranty}</dd>
            </div>
            <div className="pdp__commercial--wide">
              <dt className="mono">{pdpConfig.oemLabel}</dt>
              <dd>
                {pdpConfig.oemNote} —{' '}
                <Link to={pdpConfig.oemHref} className="text-link">
                  how it works
                </Link>
              </dd>
            </div>
          </dl>

          {keydata && (
            <p className="pdp__keydata mono" aria-label="Key standards and ratings">
              {keydata}
            </p>
          )}

          <ul className="pdp__features">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* specifications + applications */}
      <div className="section--tight rule-top">
        <div className="container pdp__detail-grid">
          <section aria-labelledby="specs-title" className="pdp__specs">
            <p className="eyebrow">
              <span className="mono">01</span>Technical Data
            </p>
            <h2 className="h3 visually-hidden" id="specs-title">
              Specifications
            </h2>
            <table className="spec-table">
              <caption className="visually-hidden">
                Technical specifications for {product.name} ({product.sku})
              </caption>
              <tbody>
                {product.specifications.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td className="mono">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="pdp__side">
            <section aria-labelledby="apps-title" className="pdp__apps">
              <p className="eyebrow">
                <span className="mono">02</span>Applications
              </p>
              <ul className="apps-list">
                {product.applications.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="certs-title" className="pdp__certs">
              <p className="eyebrow">
                <span className="mono">03</span>Certifications
              </p>
              <ul className="cert-strip">
                {certs.map((cert) => (
                  <li key={cert.id} className="cert-chip cert-chip--lg mono" title={cert.description}>
                    {cert.code}
                  </li>
                ))}
              </ul>
              <p className="caption">
                Declarations and test reports are issued per shipment. See{' '}
                <Link to="/quality" className="text-link">
                  Quality &amp; Compliance
                </Link>
                .
              </p>
            </section>

            <section aria-labelledby="pack-title" className="pdp__packing">
              <p className="eyebrow">
                <span className="mono">04</span>Packaging
              </p>
              <p className="body-sm mono pdp__packing-line">{product.packaging}</p>
            </section>
          </div>
        </div>
      </div>

      {/* overview */}
      <div className="section rule-top">
        <div className="container">
          <div className="pdp__overview">
            <p className="eyebrow">
              <span className="mono">05</span>Overview
            </p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      {/* related — compact, continue browsing */}
      <div className="section section--muted">
        <div className="container">
          <div className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">Related Products</p>
              <h2 className="h2">Pairs well with this line.</h2>
            </div>
          </div>
          <div className="product-grid product-grid--4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} variant="compact" />
            ))}
          </div>
          <div className="pdp__foot-cta">
            <Link to="/products" className="arrow-link">
              Back to Catalogue
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
