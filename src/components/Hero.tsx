import { ArrowRight, Leaf } from 'lucide-react';
import { BUSINESS, IMAGES, METRICS } from '@/lib/content';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-overlay"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Radial glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-clay-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-300" />
              </span>
              <span className="text-xs font-medium text-paper-200 tracking-wide">
                LIVE FARM STATUS: {BUSINESS.liveStatus}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-paper-50 text-balance animate-fade-in-up animate-delay-100">
              A cleaner supply chain for{' '}
              <span className="text-gradient-lime">better harvests.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-paper-300 leading-relaxed max-w-xl text-balance animate-fade-in-up animate-delay-200">
              MushClub helps restaurants, retailers, and commercial growers source
              premium mushrooms and dependable mycology inputs from one
              climate-controlled farm.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-300">
              <button onClick={onOpenEnquiry} className="btn-primary group">
                Start Supply Enquiry
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#catalog" className="btn-ghost group">
                View Supply Catalog
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Metrics bar */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-paper-200/10 animate-fade-in-up animate-delay-400">
              {METRICS.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display text-2xl lg:text-3xl font-semibold text-lime-300">
                    {metric.value}
                  </div>
                  <div className="text-xs text-paper-400 tracking-wide uppercase mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Assurance note */}
            <div className="flex items-start gap-2.5 text-sm text-paper-400 animate-fade-in-up animate-delay-500">
              <Leaf size={16} className="text-lime-300 mt-0.5 flex-shrink-0" />
              <span>
                Ready for Commercial Planning — Fresh formats, grower inputs, and a
                direct supply team.
              </span>
            </div>
          </div>

          {/* Right: Hero image tile */}
          <div className="lg:col-span-5 animate-fade-in-up animate-delay-300">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden glass-card aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={IMAGES.heroFarm}
                  alt="Fresh oyster mushrooms growing in a controlled environment at MushClub farm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />

                {/* Field note */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="glass-card rounded-xl px-3 py-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-300 animate-pulse-soft" />
                    <span className="text-xs text-paper-200 font-medium">
                      Field Note 05
                    </span>
                  </div>
                  <span className="text-xs text-paper-300 font-medium tracking-wide">
                    Grown with precision. Moved with care.
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 hidden sm:block">
                <div className="text-xs text-paper-400 uppercase tracking-wider mb-0.5">
                  Est.
                </div>
                <div className="font-display text-xl font-semibold text-lime-300">
                  {BUSINESS.established}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
