import { GALLERY_IMAGES } from '@/lib/content';

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-20 lg:py-28 bg-forest-950/50 noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <span className="section-label">Inside the Grow Rooms</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 mt-4 text-balance">
            Where precision meets the harvest.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {GALLERY_IMAGES.map((img, idx) => {
            const spanClass =
              img.span === 'large'
                ? 'col-span-2 row-span-2'
                : img.span === 'wide'
                ? 'col-span-2'
                : '';
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden glass-card ${spanClass} animate-fade-in-up`}
                style={{ animationDelay: `${idx * 100}ms`, opacity: 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-paper-200 font-medium">{img.alt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
