import { Link } from 'react-router-dom';
import { insights } from '../data/insights';
import { useLocale } from '../lib/i18n';
import { usePageMeta } from '../lib/seo';
import { seo } from '../config/theme';

export default function InsightsPage() {
  const { t, locale } = useLocale();
  const isZh = locale === 'zh';

  usePageMeta({
    title: `${t('insights.title')} — ${seo.siteName}`,
    description: t('insights.desc'),
    path: '/insights',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('insights.label')}</p>
          <h1 className="h1">{t('insights.title')}</h1>
          <p className="lead">{t('insights.desc')}</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="insights-grid">
            {insights.map((article) => (
              <article key={article.slug} className="insight-card" data-reveal>
                <p className="insight-card__meta mono">
                  <span>{isZh ? article.categoryZh : article.category}</span>
                  <span>{article.date}</span>
                  <span>{isZh ? article.readTimeZh : article.readTime}</span>
                </p>
                <h2 className="h4 insight-card__title">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="body-sm insight-card__excerpt">
                  {isZh ? article.excerptZh : article.excerpt}
                </p>
                <Link to={`/insights/${article.slug}`} className="arrow-link">
                  {t('common.readMore')}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
