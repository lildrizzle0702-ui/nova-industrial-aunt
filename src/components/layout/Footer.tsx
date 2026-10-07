import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import { certifications } from '../../config/certifications';
import { company } from '../../config/company';
import { contact } from '../../config/contact';
import { navigation } from '../../config/navigation';
import { footerCta } from '../../config/hero';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="footer-cta__title h4">{footerCta.title}</p>
          <Link to={footerCta.cta.href} className="btn btn--accent">
            {footerCta.cta.label}
          </Link>
        </div>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo inverted />
            <p className="site-footer__blurb">{brand.description}</p>
            <p className="site-footer__certs mono" aria-label="Certifications">
              {certifications.map((c) => c.code).join(' · ')}
            </p>
          </div>

          {navigation.footerColumns.map((col) => (
            <nav key={col.title} className="site-footer__col" aria-label={col.title}>
              <h3 className="site-footer__heading mono">{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="site-footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="site-footer__col">
            <h3 className="site-footer__heading mono">Contact</h3>
            <address className="site-footer__address">
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </p>
              <p>{contact.addressLines.join(', ')}</p>
              <p className="site-footer__hours">{contact.businessHours}</p>
            </address>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="site-footer__legal-note">
            Wiring devices · {company.factoryArea} facility · {company.markets.length} export regions
          </p>
        </div>
      </div>
    </footer>
  );
}
