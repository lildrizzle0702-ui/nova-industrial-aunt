import { Link } from 'react-router-dom';
import { company, factoryStats } from '../config/company';
import { contact } from '../config/contact';
import { factSheet, manufacturingProcess, milestones } from '../config/about';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon, SectionHead } from '../components/ui/SectionHead';
import { usePageMeta } from '../lib/seo';
import { useLocale } from '../lib/i18n';

/**
 * Story page — narrative hero with a factory visual so the first screen
 * reads as "editorial whitespace with a subject", not empty space.
 */
export default function AboutPage() {
  const { t, locale } = useLocale();
  const isZh = locale === 'zh';
  usePageMeta({
    title: 'About',
    description:
      'NOVA INDUSTRIAL is a wiring-device manufacturer in Wenzhou, China: 20+ years of switches, sockets and smart controls for 40+ export markets, under OEM and NOVA brands.',
    path: '/about',
  });

  return (
    <div className="about-page">
      <div className="page-hero page-hero--narrative">
        <div className="container about-hero">
          <div className="about-hero__copy">
            <p className="eyebrow">{t('about.label')}</p>
            <h1 className="h1">
              {t('about.hero.title')}
            </h1>
            <p className="lead">
              {t('about.hero.lead')
                .replace('{name}', isZh && company.legalNameZh ? company.legalNameZh : company.legalName)
                .replace('{founded}', String(company.founded))
                .replace('{capacity}', isZh && company.annualCapacityZh ? company.annualCapacityZh : company.annualCapacity)
                .replace('{regions}', String(company.markets.length))}
            </p>
            <dl className="about-facts">
              {factSheet.map((fact) => (
                <div key={fact.label} className="about-facts__item">
                  <dt className="mono">{isZh && fact.labelZh ? fact.labelZh : fact.label}</dt>
                  <dd className="mono">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="about-hero__visual" aria-hidden="true">
            <EditorialMedia subject="production" title="" />
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="about-intro">
          <div data-reveal>
            <SectionHead
              label={t('about.company.label')}
              title={t('about.company.title')}
            />
            <div className="about-intro__copy">
              <p>{t('about.intro.p1')}</p>
              <p>{t('about.intro.p2')}</p>
              <p>
                {t('about.intro.p3')
                  .replace('{employees}', isZh && company.employeesZh ? company.employeesZh : company.employees)
                  .replace('{responseTime}', isZh && contact.responseTimeZh ? contact.responseTimeZh : contact.responseTime)}
              </p>
            </div>
          </div>
          <div className="about-intro__visual" aria-hidden="true" data-reveal>
            <EditorialMedia subject="engineering" title="" />
          </div>
        </div>
      </div>

      {/* The physical production sequence */}
      <div className="section section--muted">
        <div className="container">
          <SectionHead
            label={t('about.process.label')}
            title={t('about.process.title')}
            description={t('about.process.desc')}
          />
          <ol className="mfg-process">
            {manufacturingProcess.map((stage) => (
              <li key={stage.step} className="mfg-process__item">
                <span className="mfg-process__step mono">{stage.step}</span>
                <h3 className="h4">{isZh && stage.titleZh ? stage.titleZh : stage.title}</h3>
                <p className="body-sm">{isZh && stage.bodyZh ? stage.bodyZh : stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section section--ink">
        <div className="container">
          <dl className="stat-band stat-band--ink">
            {factoryStats.map((stat) => (
              <div key={stat.label} className="stat-band__item">
                <dt className="stat-band__value mono">{stat.value}</dt>
                <dd className="stat-band__label">{isZh && stat.labelZh ? stat.labelZh : stat.label}</dd>
                {stat.note && <dd className="stat-band__note">{isZh && stat.noteZh ? stat.noteZh : stat.note}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container section">
        <div className="about-markets">
          <div className="about-markets__visual" aria-hidden="true" data-reveal>
            <EditorialMedia subject="markets" title="" />
          </div>
          <div className="about-markets__copy" data-reveal>
            <SectionHead
              label={t('about.markets.label')}
              title={t('about.markets.title')}
            />
            <ul className="markets-list">
              {company.markets.map((market, i) => (
                <li key={market}>
                  <span className="markets-list__name">
                    {isZh && company.marketsZh ? company.marketsZh[i] : market}
                  </span>
                  <span className="caption markets-list__note">
                    {isZh
                      ? t(`about.marketNote.${market.replace(/\s+/g, '')}` as never)
                      : market === 'Europe'
                        ? 'CE · RoHS · REACH programs'
                        : market === 'North America'
                          ? 'NEMA-format & UL-style lines'
                          : market === 'Middle East'
                            ? 'BS-pattern · SASO certified'
                            : 'Universal & multi-standard ranges'}
                  </span>
                </li>
              ))}
            </ul>
            <p className="body-sm text-muted">
              {t('about.markets.note')}
            </p>
          </div>
        </div>
      </div>

      <div className="section section--muted">
        <div className="container">
          <SectionHead label={t('about.milestones.label')} title={t('about.milestones.title')} />
          <ol className="timeline">
            {milestones.map((entry) => (
              <li key={entry.year} className="timeline__item">
                <span className="timeline__year mono">{entry.year}</span>
                <p className="body-sm">{isZh && entry.textZh ? entry.textZh : entry.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className="section section--ink">
        <div className="container cta-band cta-band--flat">
          <div>
            <p className="eyebrow eyebrow--ink">{t('about.cta.label')}</p>
            <h2 className="h2">{t('about.cta.title')}</h2>
            <p className="cta-band__desc">
              {t('about.cta.desc')}
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/capabilities#oem" className="btn btn--on-ink btn--lg">
              {t('about.cta.explore')}
            </Link>
            <Link to="/request-quote" className="btn btn--accent btn--lg">
              {t('about.cta.discuss')}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
