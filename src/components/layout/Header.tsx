import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../../config/navigation';
import { useInquiry } from '../../lib/inquiry';
import { Logo } from '../ui/Logo';

function BasketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 5h12l-1 10H4L3 5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M6.5 7V4.5a2.5 2.5 0 0 1 5 0V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inquiry = useInquiry();
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the mobile menu on navigation */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  /* Lock body scroll while the menu is open */
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  /* Focus management for the mobile menu */
  useEffect(() => {
    if (menuOpen) {
      firstMenuLinkRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={`${navigation.headerCta.label || 'Home'}`}>
          <Logo />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navigation.header.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `site-nav__link ${isActive && item.href !== '/' ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to="/inquiry" className="basket-btn" aria-label={`Inquiry basket, ${inquiry.count} item${inquiry.count === 1 ? '' : 's'}`}>
            <BasketIcon />
            {inquiry.count > 0 && <span className="basket-btn__count mono">{inquiry.count}</span>}
          </Link>
          <Link to={navigation.headerCta.href} className="btn btn--primary site-header__cta">
            {navigation.headerCta.label}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-toggle__box" aria-hidden="true">
              <span className="menu-toggle__line" data-line="1" />
              <span className="menu-toggle__line" data-line="2" />
            </span>
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation — portaled to <body> so the header's
          backdrop-filter can't become its containing block */}
      {createPortal(
        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <nav aria-label="Mobile" className="mobile-menu__nav">
            {navigation.header.map((item, i) => (
              <NavLink
                key={item.href}
                to={item.href}
                ref={i === 0 ? firstMenuLinkRef : undefined}
                className={({ isActive }) =>
                  `mobile-menu__link ${isActive && item.href !== '/' ? 'is-active' : ''}`
                }
                style={{ transitionDelay: menuOpen ? `${80 + i * 40}ms` : '0ms' }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu__foot">
            <Link to={navigation.headerCta.href} className="btn btn--accent btn--block" tabIndex={menuOpen ? 0 : -1}>
              {navigation.headerCta.label}
            </Link>
            <Link to="/inquiry" className="btn btn--on-ink btn--block" tabIndex={menuOpen ? 0 : -1}>
              Inquiry Basket ({inquiry.count})
            </Link>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}
