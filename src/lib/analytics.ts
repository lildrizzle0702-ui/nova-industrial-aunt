import { useEffect } from 'react';
import { CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from '../config/thirdParty';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

export function useAnalytics() {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const isPlaceholder = (id: string, fallback: string) => !id || id === fallback;

    if (!isPlaceholder(CLARITY_PROJECT_ID, 'CLARITY_PROJECT_ID') && !document.getElementById('clarity-script')) {
      const script = document.createElement('script');
      script.id = 'clarity-script';
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
      document.head.appendChild(script);
    }

    if (!isPlaceholder(GA_MEASUREMENT_ID, 'GA_MEASUREMENT_ID')) {
      if (!document.getElementById('ga-script')) {
        const script = document.createElement('script');
        script.id = 'ga-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);
      }
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);
    }
  }, []);
}

export function trackQuoteSubmit() {
  if (typeof window === 'undefined') return;
  try {
    window.clarity?.('event', 'quote_submit');
  } catch {
    /* ignore */
  }
  try {
    window.gtag?.('event', 'quote_submit');
  } catch {
    /* ignore */
  }
}
