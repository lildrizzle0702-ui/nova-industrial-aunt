import { useLocale } from './i18n';
import type { Category, Product } from '../data/types';

/** Returns localized display helpers for catalogue entities. */
export function useDisplay() {
  const { locale } = useLocale();
  const isZh = locale === 'zh';

  return {
    productName: (p: Product) => (isZh && p.nameZh ? p.nameZh : p.name),
    productShort: (p: Product) => (isZh && p.shortDescriptionZh ? p.shortDescriptionZh : p.shortDescription),
    categoryName: (c: Category) => (isZh && c.nameZh ? c.nameZh : c.name),
    categoryShort: (c: Category) => (isZh && c.shortNameZh ? c.shortNameZh : c.shortName),
    categoryDesc: (c: Category) => (isZh && c.descriptionZh ? c.descriptionZh : c.description),
  };
}
