import { Link } from 'react-router-dom';
import { capabilities } from '../config/certifications';
import { factoryMediaStrip } from '../config/about';
import { factoryStats } from '../config/company';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon } from '../components/ui/SectionHead';
import { usePageMeta } from '../lib/seo';

const PROCESS = [
  { step: '01', title: 'Drawing & tooling review', body: 'Your drawing or sample is reviewed by a project engineer; materials, shutters and terminals confirmed in writing.' },
  { step: '02', title: 'First article', body: 'Samples produced on production tooling within 7 days of sign-off, with dimensional report.' },
  { step: '03', title: 'Pilot run', body: '300–500 units run through the full line with in-line QC checkpoints before mass production.' },
  { step: '04', title: 'Mass production', body: '8 automated lines with vision inspection at critical stations; batch records archived.' },
  { step: '05', title: 'Final inspection & packing', body: 'AQL 1.0 final inspection, drop-tested cartons, container loading plan with utilization report.' },
  { step: '06', title: 'Export', body: 'Documentation, L/C and attestation handled by a dedicated clerk; FOB / CIF / DDP from Ningbo.' },
];

export default function CapabilitiesPage() {
  usePageMeta({
    title: 'Capabilities',
    description:
      'NOVA INDUSTRIAL capabilities: precision molding and assembly, OEM private label, ODM development, IEC-aligned QC testing, packaging engineering and export logistics to 40+ markets.',
    path: '/capabilities',
  });

  return (
    <div className="capabilities-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">Capabilities</p>
          <h1 className="h1">Six disciplines. One production plan.</h1>
          <p className="lead">
            Every capability below runs inside our Wenzhou facility — {factoryStats[2].value} m²,{' '}
            {factoryStats[3].value} annual output, {factoryStats[0].value} years of accumulated
            tooling know-how.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="capability-detail-list">
          {capabilities.map((cap) => (
            <section key={cap.id} id={cap.id} className="capability-detail" aria-labelledby={`cap-${cap.id}`}>
              <div className="capability-detail__head">
                <span className="capability-detail__index mono">{cap.index}</span>
                <h2 className="h2" id={`cap-${cap.id}`}>
                  {cap.title}
                </h2>
              </div>
              <div className="capability-detail__body">
                <p className="lead">{cap.description}</p>
                <ul className="check-list">
                  {cap.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="section section--tight">
        <div className="container">
          <div className="media-strip">
            {factoryMediaStrip.map((m) => (
              <div key={m.subject} className="media-strip__item">
                <EditorialMedia subject={m.subject} title={m.caption} caption={m.caption} aspectRatio="4 / 3" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--ink" id="oem">
        <div className="container">
          <div className="factory">
            <div className="factory__copy">
              <p className="eyebrow eyebrow--ink">
                <span className="mono">07</span> OEM / ODM Process
              </p>
              <h2 className="h2">From drawing to container in six controlled steps.</h2>
              <p className="factory__desc">
                A named project engineer owns your file from first drawing to loaded container. No
                hand-offs between departments, no “check with the factory” replies.
              </p>
            </div>
            <div className="factory__visual" aria-hidden="true">
              <EditorialMedia subject="engineering" title="" />
            </div>
          </div>
          <ol className="process-list">
            {PROCESS.map((p) => (
              <li key={p.step} className="process-list__item">
                <span className="process-list__step mono">{p.step}</span>
                <div>
                  <h3 className="h4">{p.title}</h3>
                  <p className="body-sm">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section">
        <div className="container cta-band cta-band--flat">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="h2">Send a sample or a drawing. We take it from there.</h2>
            <p className="cta-band__desc">
              Feasibility answers within two business days; production-intent samples within seven
              days of sign-off.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/request-quote" className="btn btn--accent btn--lg">
              Discuss Your Project
              <ArrowIcon />
            </Link>
            <Link to="/quality" className="btn btn--outline btn--lg">
              Quality &amp; Compliance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
