import { X, ArrowRight, Check } from 'lucide-react';
import { useEffect } from 'react';
import type { Product } from '@/lib/content';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onEnquire }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl glass-card rounded-3xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-card flex items-center justify-center text-paper-300 hover:text-lime-300 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid sm:grid-cols-2">
          <div className="relative aspect-square sm:aspect-auto bg-forest-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 glass-card rounded-full px-3 py-1">
              <span className="text-[10px] font-medium text-lime-300 uppercase tracking-wider">
                {product.categoryLabel}
              </span>
            </div>
          </div>

          <div className="p-6 lg:p-8 flex flex-col">
            <div className="text-xs text-paper-400 mb-2">{product.audience}</div>
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-paper-50 mb-3 leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-paper-400 leading-relaxed mb-5">
              {product.description}
            </p>

            <div className="space-y-2.5 mb-6">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check size={16} className="text-lime-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-paper-300">{spec}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                onEnquire(product.name);
                onClose();
              }}
              className="btn-primary group mt-auto"
            >
              Enquire for {product.name.split(' ').slice(-1)[0]}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
