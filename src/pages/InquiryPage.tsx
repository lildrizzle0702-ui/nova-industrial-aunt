import { Link } from 'react-router-dom';
import { QuoteRequestForm } from '../components/form/QuoteRequestForm';
import { useInquiry, inquiryRows } from '../lib/inquiry';
import { usePageMeta } from '../lib/seo';
import { ProductMedia } from '../components/ui/Media';

export default function InquiryPage() {
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
          <p className="eyebrow">Inquiry Basket</p>
          <h1 className="h1">One request. One quotation.</h1>
          <p className="lead">
            Collect the products you need, set target quantities, and send the complete list to our
            sales engineers in a single step.
          </p>
        </div>
      </div>

      <div className="container section">
        {rows.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state__glyph mono">Ø</p>
            <h2 className="h3">Your inquiry basket is empty</h2>
            <p className="body-sm">
              Add products while you browse the catalogue, then return here to set quantities and
              request a quotation for the full list.
            </p>
            <div className="btn-row">
              <Link to="/products" className="btn btn--primary">
                Browse Products
              </Link>
              <Link to="/request-quote" className="btn btn--outline">
                General Quote Request
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
                    title=""
                  />
                </div>
              ))}
              {rows.length > 4 && (
                <p className="caption mono">+{rows.length - 4} more in list</p>
              )}
            </div>
            <QuoteRequestForm />
          </div>
        )}
      </div>
    </div>
  );
}
