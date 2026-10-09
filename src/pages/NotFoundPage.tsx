import { Link } from 'react-router-dom';
import { categories } from '../config/categories';
import { usePageMeta } from '../lib/seo';
import { useLocale } from '../lib/i18n';
import { useDisplay } from '../lib/display';

export default function NotFoundPage() {
  const { t } = useLocale();
  const { categoryName } = useDisplay();
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you requested does not exist. Browse the NOVA INDUSTRIAL catalogue or return home.',
    path: '/404',
  });

  return (
    <div className="notfound">
      <div className="container notfound__inner">
        <p className="notfound__code mono">404</p>
        <h1 className="h1">{t('404.title')}</h1>
        <p className="lead notfound__lead">
          {t('404.desc')}
        </p>
        <div className="btn-row">
          <Link to="/" className="btn btn--primary btn--lg">
            {t('common.backHome')}
          </Link>
          <Link to="/products" className="btn btn--outline btn--lg">
            {t('common.viewProducts')}
          </Link>
        </div>
        <nav className="notfound__nav" aria-label="Product families">
          <p className="caption mono">{t('404.families')}</p>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.slug}`} className="arrow-link arrow-link--accent">
                  {categoryName(c)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
