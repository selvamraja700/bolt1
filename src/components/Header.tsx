import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/content';

interface HeaderProps {
  onOpenEnquiry: () => void;
  onNavigate: (path: string) => void;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Who We Serve', href: '#solutions' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onOpenEnquiry, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-header shadow-lg shadow-forest-950/20' : 'bg-transparent'
        }`}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a
            href="#overview"
            onClick={(e) => handleNavClick(e, '#overview')}
            className="flex items-center gap-3 group"
          >
            <img
              src={BUSINESS.logo}
              alt="MushClub brand logo"
              className="w-9 h-9 rounded-full object-cover ring-1 ring-lime-300/20 transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-semibold text-paper-100 text-sm tracking-tight">
                {BUSINESS.name}
              </div>
              <div className="text-[10px] text-paper-400 tracking-widest uppercase">
                {BUSINESS.tagline}
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-paper-300 hover:text-lime-300 transition-colors rounded-full hover:bg-lime-300/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              Start Supply Enquiry
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-paper-200 hover:text-lime-300 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-forest-900 border-l border-paper-200/10 flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-paper-200/10">
              <div className="flex items-center gap-3">
                <img
                  src={BUSINESS.logo}
                  alt="MushClub logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-display font-semibold text-paper-100 text-sm">
                  {BUSINESS.name}
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-paper-300 hover:text-lime-300 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base text-paper-200 hover:text-lime-300 hover:bg-lime-300/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="p-6 border-t border-paper-200/10 space-y-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-primary w-full"
              >
                Start Supply Enquiry
              </button>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-sm text-paper-300 hover:text-lime-300 transition-colors"
              >
                <Phone size={16} />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
