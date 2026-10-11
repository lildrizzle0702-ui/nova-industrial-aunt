import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import { certifications } from '../../config/certifications';
import { company } from '../../config/company';
import { contact } from '../../config/contact';
import { navigation } from '../../config/navigation';
import { footerCta } from '../../config/hero';
import { useLocale } from '../../lib/i18n';
import { Logo } from '../ui/Logo';

export function Footer() {
  const { t, locale } = useLocale();
  const isZh = locale === 'zh';
  const brandDesc = isZh && brand.descriptionZh ? brand.descriptionZh : brand.description;
  const addressLines = isZh && contact.addressLinesZh ? contact.addressLinesZh : contact.addressLines;
  const businessHours = isZh && contact.businessHoursZh ? contact.businessHoursZh : contact.businessHours;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="footer-cta__title h4">{isZh && footerCta.titleZh ? footerCta.titleZh : footerCta.title}</p>
          <Link to={footerCta.cta.href} className="btn btn--accent">
            {isZh && footerCta.cta.labelZh ? footerCta.cta.labelZh : footerCta.cta.label}
          </Link>
        </div>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo inverted />
            <p className="site-footer__blurb">{brandDesc}</p>
            <p className="site-footer__certs mono" aria-label="Certifications">
              {certifications.map((c) => c.code).join(' · ')}
            </p>
          </div>

          {navigation.footerColumns.map((col) => (
            <nav key={col.title} className="site-footer__col" aria-label={isZh && col.titleZh ? col.titleZh : col.title}>
              <h3 className="site-footer__heading mono">{isZh && col.titleZh ? col.titleZh : col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="site-footer__link">
                      {isZh && link.labelZh ? link.labelZh : link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="site-footer__col">
            <h3 className="site-footer__heading mono">{t('footer.contact')}</h3>
            <address className="site-footer__address">
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </p>
              <p>{addressLines.join('， ')}</p>
              <p className="site-footer__hours">{businessHours}</p>
            </address>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            © {new Date().getFullYear()} {isZh && company.legalNameZh ? company.legalNameZh : company.legalName}. {t('footer.rights')}
          </p>
          <p className="site-footer__legal-note">
            {t('footer.legal')} · {isZh && company.factoryAreaZh ? company.factoryAreaZh : company.factoryArea} · {company.markets.length} {t('footer.regions')}
          </p>
        </div>
      </div>
    </footer>
  );
}
