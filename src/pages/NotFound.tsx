import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-forest-900 flex items-center justify-center px-4 noise-overlay">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-lime-300/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative text-center max-w-md animate-fade-in-up">
        <div className="font-display text-[120px] sm:text-[160px] font-bold leading-none text-gradient-lime mb-2">
          404
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-paper-50 mb-4">
          Page not found
        </h1>
        <p className="text-paper-400 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to the supply catalog.
        </p>
        <a href="/" className="btn-primary group inline-flex">
          <Home size={18} />
          Back to home
        </a>
      </div>
    </div>
  );
}
