import { Link } from 'react-router-dom';
import { categories } from '../config/categories';
import { usePageMeta } from '../lib/seo';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you requested does not exist. Browse the NOVA INDUSTRIAL catalogue or return home.',
    path: '/404',
  });

  return (
    <div className="notfound">
      <div className="container notfound__inner">
        <p className="notfound__code mono">404</p>
        <h1 className="h1">This circuit doesn’t connect.</h1>
        <p className="lead notfound__lead">
          The page you requested doesn’t exist or has moved. The catalogue, however, is fully
          energized.
        </p>
        <div className="btn-row">
          <Link to="/" className="btn btn--primary btn--lg">
            Back Home
          </Link>
          <Link to="/products" className="btn btn--outline btn--lg">
            View Products
          </Link>
        </div>
        <nav className="notfound__nav" aria-label="Product families">
          <p className="caption mono">Or jump to a product family</p>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.slug}`} className="arrow-link arrow-link--accent">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
