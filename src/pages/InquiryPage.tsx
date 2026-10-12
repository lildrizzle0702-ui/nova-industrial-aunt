import { QuoteRequestForm } from '../components/form/QuoteRequestForm';
import { usePageMeta } from '../lib/seo';
import { useLocale } from '../lib/i18n';

export default function InquiryPage() {
  const { t } = useLocale();

  usePageMeta({
    title: t('inquiry.label'),
    description: t('inquiry.desc'),
    path: '/inquiry',
  });

  return (
    <div className="inquiry-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('inquiry.label')}</p>
          <h1 className="h1">{t('inquiry.title')}</h1>
          <p className="lead">{t('inquiry.desc')}</p>
        </div>
      </div>

      <div className="container section">
        <QuoteRequestForm note={t('quote.note.empty')} />
      </div>
    </div>
  );
}
