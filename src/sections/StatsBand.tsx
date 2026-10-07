import { Link } from 'react-router-dom';
import { ctaBand } from '../config/hero';
import { statsBand } from '../config/company';

/** Full-width ink band with four company figures. */
export function StatsBand() {
  return (
    <section className="stats-ink" aria-label="Company figures">
      <div className="container stats-ink__grid">
        {statsBand.map((stat) => (
          <div key={stat.label} className="stats-ink__item">
            <p className="stats-ink__value mono">{stat.value}</p>
            <p className="stats-ink__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Closing conversion block — always leads to Request a Quote. */
export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">{ctaBand.eyebrow}</p>
          <h2 className="h2" id="cta-title">
            {ctaBand.title}
          </h2>
          <p className="cta-band__desc">{ctaBand.description}</p>
        </div>
        <div className="cta-band__actions">
          <Link to={ctaBand.primaryCta.href} className="btn btn--accent btn--lg">
            {ctaBand.primaryCta.label}
          </Link>
          <Link to={ctaBand.secondaryCta.href} className="btn btn--on-ink btn--lg">
            {ctaBand.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
