import { Hero } from '../sections/Hero';
import { CategoryGrid } from '../sections/CategoryGrid';
import { FactorySection } from '../sections/FactorySection';
import { FeaturedProducts } from '../sections/FeaturedProducts';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { OemSection } from '../sections/OemSection';
import { QualitySection } from '../sections/QualitySection';
import { ExportSection } from '../sections/ExportSection';
import { CtaBand } from '../sections/StatsBand';
import { usePageMeta, organizationJsonLd } from '../lib/seo';
import { seo } from '../config/theme';

/**
 * Section rhythm: brand statement → range → manufacturing proof → flagship
 * products → capabilities → OEM → quality → export → conversion.
 * Large / small / dark / muted sections alternate so no two consecutive
 * blocks share the same layout pattern.
 */
export default function HomePage() {
  usePageMeta({
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    path: '/',
    jsonLd: organizationJsonLd(),
  });

  return (
    <>
      <Hero />
      <CategoryGrid />
      <FactorySection />
      <FeaturedProducts />
      <CapabilitiesSection />
      <OemSection />
      <QualitySection />
      <ExportSection />
      <CtaBand />
    </>
  );
}
