import { Utensils, Truck, Leaf, ArrowRight } from 'lucide-react';
import { AUDIENCES } from '@/lib/content';

interface AudienceSectionProps {
  onAudienceSelect: (buyerType: string) => void;
}

const ICONS = {
  utensils: Utensils,
  truck: Truck,
  leaf: Leaf,
};

export default function AudienceSection({ onAudienceSelect }: AudienceSectionProps) {
  return (
    <section
      id="solutions"
      className="relative py-20 lg:py-28 noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="section-label">Who We Serve</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 mt-4 text-balance">
            Built for every link in the supply chain.
          </h2>
          <p className="text-paper-400 mt-4 text-lg">
            Select your pathway and we'll pre-fill your enquiry with the right
            context.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {AUDIENCES.map((audience, idx) => {
            const Icon = ICONS[audience.icon];
            return (
              <button
                key={audience.id}
                onClick={() => onAudienceSelect(audience.buyerType)}
                className="group text-left glass-card rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-300/5 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms`, opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-xl bg-lime-300/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-lime-300/20">
                  <Icon size={24} className="text-lime-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-paper-50 mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-paper-400 leading-relaxed mb-5">
                  {audience.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-lime-300 font-medium">
                  <span>Start enquiry</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
