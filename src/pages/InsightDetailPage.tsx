import { Link, useParams } from 'react-router-dom';
import { insightBySlug } from '../data/insights';
import { useLocale } from '../lib/i18n';
import { usePageMeta } from '../lib/seo';
import { ArrowIcon } from '../components/ui/SectionHead';

export default function InsightDetailPage() {
  const { t, locale } = useLocale();
  const isZh = locale === 'zh';
  const { slug = '' } = useParams();
  const article = insightBySlug(slug);

  usePageMeta({
    title: article?.metaTitle ?? t('insights.notFound'),
    description: article?.metaDescription,
    path: article ? `/insights/${article.slug}` : '/insights',
  });

  if (!article) {
    return (
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t('common.error')} 404</p>
          <h1 className="h1">{t('insights.notFound')}</h1>
          <p className="lead">{t('insights.notFoundDesc')}</p>
          <div className="btn-row" style={{ marginTop: 'var(--sp-6)' }}>
            <Link to="/insights" className="btn btn--primary">
              {t('insights.all')}
            </Link>
            <Link to="/" className="btn btn--outline">
              {t('common.backHome')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="insight-article">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">
            <span className="mono">{article.date}</span>
            {isZh ? article.categoryZh : article.category}
          </p>
          <h1 className="h1">{article.title}</h1>
          <p className="lead">{isZh ? article.excerptZh : article.excerpt}</p>
          <p className="caption mono" style={{ marginTop: 'var(--sp-4)' }}>
            {t('insights.readTime')}: {isZh ? article.readTimeZh : article.readTime}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="insight-article__body">
            {article.sections.map((section, i) => (
              <section key={i} className="insight-article__section">
                <h2 className="h3">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="body-sm">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="insight-article__cta">
            <p className="h4">{t('insights.cta')}</p>
            <Link to="/request-quote" className="btn btn--accent btn--lg">
              {t('common.requestQuote')}
              <ArrowIcon />
            </Link>
          </div>

          <div className="insight-article__back">
            <Link to="/insights" className="arrow-link">
              {t('insights.back')}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
