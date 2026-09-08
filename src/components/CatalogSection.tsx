import { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PRODUCTS, CATEGORIES, type Product } from '@/lib/content';

interface CatalogSectionProps {
  onProductSelect: (product: Product) => void;
  onEnquireProduct: (productName: string) => void;
}

export default function CatalogSection({ onProductSelect, onEnquireProduct }: CatalogSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered =
    activeFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="catalog"
      className="relative py-20 lg:py-28 bg-forest-950/50 noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <span className="section-label">Supply Catalog</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 mt-4 text-balance">
              Four formats. One source.
            </h2>
            <p className="text-paper-400 mt-4 text-lg">
              From fresh harvest to grower inputs and starter kits — all from a
              single climate-controlled facility.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-lime-300 text-forest-900'
                    : 'glass-card text-paper-300 hover:text-lime-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product, idx) => (
            <article
              key={product.id}
              className="group glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-300/5 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms`, opacity: 0 }}
            >
              <div className="relative aspect-square overflow-hidden bg-forest-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 glass-card rounded-full px-3 py-1">
                  <span className="text-[10px] font-medium text-lime-300 uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                </div>
                <button
                  onClick={() => onProductSelect(product)}
                  className="absolute inset-0 flex items-center justify-center bg-forest-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-paper-100">
                    <Eye size={16} />
                    Quick View
                  </span>
                </button>
              </div>

              <div className="p-5">
                <div className="text-xs text-paper-400 mb-1.5">{product.audience}</div>
                <h3 className="font-display text-lg font-semibold text-paper-50 mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-paper-400 leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEnquireProduct(product.name)}
                    className="flex items-center gap-1.5 text-sm font-medium text-lime-300 hover:text-lime-200 transition-colors"
                  >
                    Enquire
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <span className="text-paper-600 text-xs">·</span>
                  <button
                    onClick={() => onProductSelect(product)}
                    className="text-sm text-paper-400 hover:text-paper-200 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
