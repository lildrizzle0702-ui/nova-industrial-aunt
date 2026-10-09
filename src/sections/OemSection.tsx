import { Link } from 'react-router-dom';
import { homeSections } from '../config/hero';
import { useLocale } from '../lib/i18n';
import { ArrowIcon } from '../components/ui/SectionHead';

export function OemSection() {
  const s = homeSections.oem;
  const { t } = useLocale();
  return (
    <section className="section section--muted" id="oem" aria-labelledby="oem-title">
      <div className="container">
        <div className="oem">
          <div className="oem__intro">
            <p className="eyebrow">
              <span className="mono">{s.index}</span>
              {s.label}
            </p>
            <h2 className="h2" id="oem-title">
              {s.title}
            </h2>
            <p className="lead">{s.description}</p>
            <Link to="/request-quote" className="btn btn--primary">
              {t('home.oem.cta')}
              <ArrowIcon />
            </Link>
          </div>
          <div className="oem__grid">
            {s.points.map((point) => (
              <article key={point.title} className="oem__item">
                <h3 className="h4">{point.title}</h3>
                <p className="body-sm">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
