import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SectionHeadProps {
  index?: string;
  label: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  align?: 'start' | 'between';
  onInk?: boolean;
}

/** Editorial section header: "01 — Label" + headline + supporting copy + optional CTA. */
export function SectionHead({
  index,
  label,
  title,
  description,
  cta,
  align = 'start',
  onInk = false,
}: SectionHeadProps) {
  return (
    <div className={`section-head ${align === 'between' ? 'section-head--split' : ''}`} data-reveal>
      <div className="section-head__main">
        <p className={`eyebrow ${onInk ? 'eyebrow--ink' : ''}`}>
          {index ? <span className="mono">{index}</span> : null}
          {label}
        </p>
        <h2 className={`h2 ${onInk ? 'section-head__title--ink' : ''}`}>{title}</h2>
      </div>
      {(description || cta) && (
        <div className="section-head__aside">
          {description && <p className={`body-sm ${onInk ? 'section-head__desc--ink' : ''}`}>{description}</p>}
          {cta && (
            <Link to={cta.href} className={`arrow-link ${onInk ? 'arrow-link--on-ink' : ''}`}>
              {cta.label}
              <ArrowIcon />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Subtle scroll-into-view reveal. Falls back to visible when JS observers fail. */
export function Reveal({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'li' }) {
  return (
    <Tag className={`reveal ${className}`} data-reveal>
      {children}
    </Tag>
  );
}
