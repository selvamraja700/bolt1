import { PROCESS_STEPS, IMAGES } from '@/lib/content';

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-20 lg:py-28 noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden glass-card aspect-[4/5]">
                <img
                  src={IMAGES.heroFarm}
                  alt="Climate-controlled mushroom grow room at MushClub facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-xl px-4 py-3">
                    <div className="text-xs text-lime-300 font-medium uppercase tracking-wider mb-1">
                      Cleanroom Standard
                    </div>
                    <div className="text-sm text-paper-200">
                      Sterile climate-managed laboratory cleanroom
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-lime-300/20 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="section-label">Quality Control & How We Operate</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 mt-4 mb-10 text-balance">
              From sterile lab to dispatch in four controlled steps.
            </h2>

            <div className="space-y-6">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="flex gap-5 group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 120}ms`, opacity: 0 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center font-display text-xl font-semibold text-lime-300 transition-colors group-hover:bg-lime-300/10">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-semibold text-paper-50 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-paper-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
