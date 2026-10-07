import { brand } from '../../config/brand';
import { BrandMark } from './Media';

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="3" fill="var(--primary)" />
      <path d="M11 30V10h4.4L27 26.2V10h4v20h-4.4L15 13.8V30z" fill="var(--bg)" />
      <rect x="8" y="33" width="24" height="2.2" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`logo ${inverted ? 'logo--inverted' : ''}`}>
      <BrandMark />
      <span className="logo__text">
        <span className="logo__primary">{brand.wordmarkPrimary}</span>
        <span className="logo__secondary">{brand.wordmarkSecondary}</span>
      </span>
    </span>
  );
}
