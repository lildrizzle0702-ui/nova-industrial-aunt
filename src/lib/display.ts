import { useLocale } from './i18n';
import type { Category, Product } from '../data/types';

/** Returns localized display helpers for catalogue entities. */
export function useDisplay() {
  const { locale, t } = useLocale();
  const isZh = locale === 'zh';

  const applicationLabel = (app: string) => (isZh ? t(`application.${app}`) : app);
  const colorName = (color: string) => (isZh ? t(`color.${color}`) : color);
  const specLabel = (label: string) => (isZh ? t(`spec.${label}`) : label);

  return {
    productName: (p: Product) => (isZh && p.nameZh ? p.nameZh : p.name),
    productShort: (p: Product) => (isZh && p.shortDescriptionZh ? p.shortDescriptionZh : p.shortDescription),
    categoryName: (c: Category) => (isZh && c.nameZh ? c.nameZh : c.name),
    categoryShort: (c: Category) => (isZh && c.shortNameZh ? c.shortNameZh : c.shortName),
    categoryDesc: (c: Category) => (isZh && c.descriptionZh ? c.descriptionZh : c.description),
    applicationLabel,
    colorName,
    specLabel,
  };
}
