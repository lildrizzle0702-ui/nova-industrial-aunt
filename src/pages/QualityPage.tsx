import { Link } from 'react-router-dom';
import { certifications } from '../config/certifications';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon } from '../components/ui/SectionHead';
import { usePageMeta } from '../lib/seo';
import { useLocale } from '../lib/i18n';

const QC_PROCESS = [
  { title: 'Incoming materials', body: 'Resin, contacts and steel verified against spec sheets; batch samples kept for the life of the program.' },
  { title: 'In-line inspection', body: 'Vision systems check contact alignment and shutter action at three critical assembly stations.' },
  { title: 'Endurance testing', body: 'Switches run 50,000 cycles, sockets 10,000 insertions — sampled from every production batch.' },
  { title: 'Dielectric & insulation', body: '2,000V for one minute between live parts and body; insulation resistance ≥ 2MΩ.' },
  { title: 'Environmental', body: 'IPX5/IPX6 spray chamber for weatherproof ranges; −25°C to +85°C cycling for electronics.' },
  { title: 'Final AQL inspection', body: 'AQL 1.0 pre-shipment inspection with photographic reports archived per batch.' },
];

export default function QualityPage() {
  const { t } = useLocale();
  usePageMeta({
    title: 'Quality & Compliance',
    description:
      'NOVA INDUSTRIAL quality system: ISO 9001:2015 certified production, IEC 60669-1 / IEC 60884-1 type testing, CE, RoHS, UKCA and SASO certifications with per-batch reports.',
    path: '/quality',
  });

  return (
    <div className="quality-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('quality.label')}</p>
          <h1 className="h1">{t('quality.title')}</h1>
          <p className="lead">
            {t('quality.desc')}
            that cannot skip a test, batches that cannot ship without records. The result is a
            98.6% first-pass rate and warranty claims under 0.2%.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="about-intro">
          <div>
            <h2 className="h2">{t('quality.process.title')}</h2>
            <ol className="qc-list">
              {QC_PROCESS.map((stage, i) => (
                <li key={stage.title} className="qc-list__item">
                  <span className="qc-list__num mono">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="h4">{stage.title}</h3>
                    <p className="body-sm">{stage.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="about-intro__visual" aria-hidden="true">
            <EditorialMedia subject="quality" title="" />
          </div>
        </div>
      </div>

      <div className="section section--muted" id="certifications">
        <div className="container">
          <div className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">{t('quality.cert.label')}</p>
              <h2 className="h2">{t('quality.cert.title')}</h2>
            </div>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.id} className="cert-card">
                <p className="cert-card__code mono">{cert.code}</p>
                <h3 className="h4">{cert.name}</h3>
                <p className="body-sm">{cert.description}</p>
                <p className="cert-card__scope mono">{cert.scope}</p>
              </article>
            ))}
          </div>
          <p className="form-note cert-grid__note">
            {t('quality.cert.note')}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container cta-band cta-band--flat">
          <div>
            <p className="eyebrow">{t('quality.cta.label')}</p>
            <h2 className="h2">{t('quality.cta.title')}</h2>
            <p className="cta-band__desc">
              {t('quality.cta.desc')}
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/request-quote" className="btn btn--accent btn--lg">
              {t('quality.cta.quote')}
              <ArrowIcon />
            </Link>
            <Link to="/products" className="btn btn--outline btn--lg">
              {t('quality.cta.browse')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
