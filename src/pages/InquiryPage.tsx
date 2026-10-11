import { Link } from 'react-router-dom';
import { QuoteRequestForm } from '../components/form/QuoteRequestForm';
import { useInquiry, inquiryRows } from '../lib/inquiry';
import { usePageMeta } from '../lib/seo';
import { useLocale } from '../lib/i18n';
import { ProductMedia } from '../components/ui/Media';

export default function InquiryPage() {
  const { t } = useLocale();
  const inquiry = useInquiry();
  const rows = inquiryRows(inquiry.lines);

  usePageMeta({
    title: 'Inquiry Basket',
    description:
      'Review the products in your inquiry basket, set quantities and request a single quotation from NOVA INDUSTRIAL.',
    path: '/inquiry',
  });

  return (
    <div className="inquiry-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('inquiry.label')}</p>
          <h1 className="h1">{t('inquiry.title')}</h1>
          <p className="lead">
            {t('inquiry.desc')}
          </p>
        </div>
      </div>

      <div className="container section">
        {rows.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state__glyph mono">Ø</p>
            <h2 className="h3">{t('inquiry.empty.title')}</h2>
            <p className="body-sm">
              {t('inquiry.empty.desc')}
            </p>
            <div className="btn-row">
              <Link to="/products" className="btn btn--primary">
                {t('inquiry.empty.browse')}
              </Link>
              <Link to="/request-quote" className="btn btn--outline">
                {t('inquiry.empty.quote')}
              </Link>
            </div>
          </div>
        ) : (
          <div className="inquiry-page__layout">
            <div className="inquiry-page__preview" aria-hidden="true">
              {rows.slice(0, 4).map(({ product }) => (
                <div key={product.id} className="inquiry-page__thumb">
                  <ProductMedia
                    slug={product.slug}
                    spec={product.visual}
                    images={product.images}
                    title={product.name}
                    alt={product.name}
                  />
                </div>
              ))}
              {rows.length > 4 && (
                <p className="caption mono">+{rows.length - 4} {t('inquiry.moreInList')}</p>
              )}
            </div>
            <QuoteRequestForm />
          </div>
        )}
      </div>
    </div>
  );
}
