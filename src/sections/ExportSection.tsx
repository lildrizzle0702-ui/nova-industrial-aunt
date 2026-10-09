import { Link } from 'react-router-dom';
import { homeSections } from '../config/hero';
import { useLocale } from '../lib/i18n';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon } from '../components/ui/SectionHead';

/** Compact data-band: export facts beside the logistics visual. */
export function ExportSection() {
  const s = homeSections.export;
  const { t } = useLocale();
  return (
    <section className="section section--muted" aria-labelledby="export-title">
      <div className="container">
        <div className="export">
          <div className="export__copy" data-reveal>
            <p className="eyebrow">
              <span className="mono">{s.index}</span>
              {s.label}
            </p>
            <h2 className="h2" id="export-title">
              {s.title}
            </h2>
            <p className="body-sm export__desc">{s.description}</p>
            <Link to="/about" className="arrow-link">
              {t('home.export.about')}
              <ArrowIcon />
            </Link>
          </div>
          <div className="export__grid">
            {s.facts.map((fact) => (
              <div key={fact.label} className="export__fact">
                <p className="export__fact-label mono">{fact.label}</p>
                <p className="export__fact-value mono">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="export__visual" aria-hidden="true" data-reveal>
          <EditorialMedia subject={s.visual} title="" />
        </div>
      </div>
    </section>
  );
}
