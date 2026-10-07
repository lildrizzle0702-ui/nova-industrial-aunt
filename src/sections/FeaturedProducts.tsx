import { products } from '../data/products';
import { homeSections } from '../config/hero';
import { ProductCard } from '../components/ui/ProductCard';
import { SectionHead } from '../components/ui/SectionHead';

/** Flagship products — rendered large; falls back to featured when unset. */
export function FeaturedProducts() {
  const s = homeSections.featured;
  const flagship = products.filter((p) => p.flagship).slice(0, 4);
  const list = flagship.length >= 3 ? flagship : products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section section--muted" aria-labelledby="featured-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={s.label}
          title={s.title}
          description={s.description}
          cta={{ label: 'Full Catalogue', href: '/products' }}
          align="between"
        />
        <div className="flagship-grid">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} variant="row" />
          ))}
        </div>
      </div>
    </section>
  );
}
