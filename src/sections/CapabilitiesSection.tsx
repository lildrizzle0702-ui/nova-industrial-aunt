import { Link } from 'react-router-dom';
import { capabilities } from '../config/certifications';
import { homeSections } from '../config/hero';
import { SectionHead } from '../components/ui/SectionHead';

export function CapabilitiesSection() {
  const s = homeSections.capabilities;
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={s.label}
          title={s.title}
          description={s.description}
          cta={{ label: 'All Capabilities', href: '/capabilities' }}
          align="between"
        />
        <div className="capability-grid">
          {capabilities.map((cap) => (
            <Link to={`/capabilities#${cap.id}`} key={cap.id} className="capability-row">
              <span className="capability-row__index mono">{cap.index}</span>
              <span className="capability-row__body">
                <span className="capability-row__title h4">{cap.title}</span>
                <span className="capability-row__desc body-sm">{cap.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
