import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { InquiryDrawer } from './InquiryDrawer';
import { FloatingContact } from './FloatingContact';
import { MobileCtaBar } from './MobileCtaBar';
import { useLocale } from '../../lib/i18n';
import { useAnalytics } from '../../lib/analytics';

/** Restore scroll on route change (Browser router keeps SPA state). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

/**
 * Reveal-on-scroll, applied once per element via [data-reveal].
 * Only major blocks opt in (section heads, large visuals) — never per-card.
 */
function useRevealObserver(pathname: string) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (nodes.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    nodes.forEach((n) => {
      if (n.classList.contains('is-visible')) return;
      observer.observe(n);
    });
    return () => observer.disconnect();
  }, [pathname]);
}

export function Layout() {
  const { pathname } = useLocation();
  const { t } = useLocale();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(false);
  }, [pathname]);

  /* Re-keyed per route so the enter animation runs on navigation; the
     header/footer stay outside and never participate in the transition.
     Keyed on pathname only — query-param changes (search/filters) must not
     remount the page or replay the animation. */
  useRevealObserver(pathname);

  useAnalytics();

  return (
    <>
      <a href="#main" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <ScrollToTop />
      <Header />
      <main
        id="main"
        key={pathname}
        className={entered ? undefined : 'page-enter'}
        onAnimationEnd={() => setEntered(true)}
      >
        <Outlet />
      </main>
      <Footer />
      <InquiryDrawer />
      <FloatingContact />
      <MobileCtaBar />
    </>
  );
}
