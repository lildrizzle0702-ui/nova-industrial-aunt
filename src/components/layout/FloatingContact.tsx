import { useState } from 'react';
import { useLocale } from '../../lib/i18n';
import { WHATSAPP_NUMBER, WECHAT_QR_PLACEHOLDER } from '../../config/thirdParty';

export function FloatingContact() {
  const { t, locale } = useLocale();
  const isZh = locale === 'zh';
  const [open, setOpen] = useState(false);

  if (isZh) {
    return (
      <div className={`floating-contact ${open ? 'is-open' : ''}`}>
        <button
          type="button"
          className="floating-contact__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={t('float.contactWeChat')}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            <path d="M12 2C6.48 2 2 6.03 2 11c0 2.76 1.36 5.23 3.5 6.87V22l4.09-2.24c.78.15 1.58.24 2.41.24 5.52 0 10-4.03 10-9s-4.48-9-10-9Z" />
          </svg>
        </button>
        {open && (
          <div className="floating-contact__panel">
            <img src={WECHAT_QR_PLACEHOLDER} alt={t('float.wechatAlt')} />
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className="floating-contact floating-contact--link"
      target="_blank"
      rel="noreferrer"
      aria-label={t('float.contactWhatsApp')}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.69 14.93L2 22l5.25-1.37A10 10 0 1 0 12 2Zm4.93 14.3c-.2.56-1.02.96-1.43 1.02-.37.05-.74.07-1.1-.03-.34-.09-.63-.21-.88-.34-.57-.29-1.2-.69-1.77-1.25-1.13-1.12-1.86-2.5-2.08-3.93-.07-.46.03-.92.27-1.3.24-.38.62-.65 1.05-.78.21-.06.43-.09.65-.09.24 0 .48.04.7.12.24.09.44.24.58.44.1.14.17.3.2.47.02.12.01.24-.04.35-.05.11-.14.21-.25.27-.08.05-.17.07-.26.07-.1 0-.2-.03-.29-.08-.13-.07-.25-.16-.36-.27-.1-.1-.22-.18-.35-.24-.13-.06-.27-.09-.42-.09-.14 0-.28.03-.41.09-.13.06-.24.15-.33.27-.1.13-.17.28-.2.44-.04.18-.03.36.03.53.2.6.58 1.13 1.08 1.52.5.39 1.1.64 1.73.72.18.02.36-.01.52-.09.16-.08.3-.2.4-.35.1-.15.16-.32.18-.5.01-.14-.02-.28-.09-.4-.07-.12-.18-.22-.31-.28-.1-.05-.2-.07-.31-.07-.1 0-.2.02-.29.07Z" />
      </svg>
    </a>
  );
}
