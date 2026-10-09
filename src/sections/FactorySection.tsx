import { factoryStats } from '../config/company';
import { useLocale } from '../lib/i18n';
import { homeSections } from '../config/hero';
import { EditorialMedia } from '../components/ui/Media';
import { SectionHead } from '../components/ui/SectionHead';

export function FactorySection() {
  const s = homeSections.factory;
  const { t } = useLocale();
  return (
    <section className="section section--ink" aria-labelledby="factory-title">
      <div className="container">
        <div className="factory">
          <div className="factory__copy">
            <SectionHead
              index={s.index}
              label={s.label}
              title={s.title}
              description={s.description}
              onInk
            />
            <ul className="factory__points">
              {[t('home.factory.points.1'), t('home.factory.points.2'), t('home.factory.points.3'), t('home.factory.points.4')].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="factory__visual" aria-hidden="true">
            <EditorialMedia subject={s.visual} title="" />
          </div>
        </div>
        <dl className="stat-band stat-band--ink">
          {factoryStats.map((stat) => (
            <div key={stat.label} className="stat-band__item">
              <dt className="stat-band__value mono">{stat.value}</dt>
              <dd className="stat-band__label">{stat.label}</dd>
              {stat.note && <dd className="stat-band__note">{stat.note}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
