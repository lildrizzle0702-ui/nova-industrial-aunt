import { Link } from 'react-router-dom';
import { hero } from '../config/hero';
import { EditorialMedia } from '../components/ui/Media';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display" id="hero-title">
            {hero.titleLines.map((line) => (
              <span key={line} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="lead hero__desc">{hero.description}</p>
          <div className="hero__actions">
            <Link to={hero.primaryCta.href} className="btn btn--accent btn--lg">
              {hero.primaryCta.label}
            </Link>
            <Link to={hero.secondaryCta.href} className="btn btn--outline">
              {hero.secondaryCta.label}
            </Link>
          </div>
          <p className="hero__footnote mono">{hero.footnote}</p>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <EditorialMedia subject="hero" title="" caption={hero.visualCaption} />
        </div>
      </div>
    </section>
  );
}
