import { Link } from 'react-router-dom';
import { useLocale } from '../../lib/i18n';

export function MobileCtaBar() {
  const { t } = useLocale();
  return (
    <div className="mobile-cta-bar">
      <Link to="/request-quote" className="btn btn--accent btn--block">
        {t('mobileCta.quote')}
      </Link>
    </div>
  );
}
