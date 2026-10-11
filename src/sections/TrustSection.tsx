import { homeSections } from '../config/hero';
import { useLocale } from '../lib/i18n';
import { SectionHead } from '../components/ui/SectionHead';

export function TrustSection() {
  const s = homeSections.trust;
  const { locale } = useLocale();
  const isZh = locale === 'zh';

  return (
    <section className="section section--ink" aria-labelledby="trust-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={isZh && s.labelZh ? s.labelZh : s.label}
          title={isZh && s.titleZh ? s.titleZh : s.title}
          description={isZh && s.descriptionZh ? s.descriptionZh : s.description}
          align="between"
          onInk
        />
        <div className="trust-grid">
          {s.points.map((point) => (
            <div key={point.label} className="trust-card" data-reveal>
              <p className="trust-card__value mono">{point.value}</p>
              <p className="trust-card__label">
                {isZh && point.labelZh ? point.labelZh : point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
