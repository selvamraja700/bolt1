import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/content';

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Who We Serve', href: '#solutions' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-paper-200/10 noise-overlay">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={BUSINESS.logo}
                alt="MushClub brand logo"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-lime-300/20"
              />
              <div>
                <div className="font-display font-semibold text-paper-100">
                  {BUSINESS.name}
                </div>
                <div className="text-[10px] text-paper-400 tracking-widest uppercase">
                  {BUSINESS.tagline}
                </div>
              </div>
            </div>
            <p className="text-sm text-paper-400 leading-relaxed max-w-md">
              A direct-from-farm commercial mycology supply partner operating
              climate-controlled cultivation facilities in {BUSINESS.locationShort}.
              Est. {BUSINESS.established}.
            </p>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-card mt-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-300" />
              </span>
              <span className="text-xs text-paper-200 tracking-wide">
                LIVE FARM STATUS: {BUSINESS.liveStatus}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs text-paper-400 uppercase tracking-wider font-medium mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-paper-300 hover:text-lime-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs text-paper-400 uppercase tracking-wider font-medium mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-paper-300 hover:text-lime-300 transition-colors"
                >
                  <Phone size={16} className="text-lime-300 flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-paper-300 hover:text-lime-300 transition-colors"
                >
                  <MessageCircle size={16} className="text-lime-300 flex-shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-sm text-paper-300 hover:text-lime-300 transition-colors break-all"
                >
                  <Mail size={16} className="text-lime-300 flex-shrink-0 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-paper-300">
                  <MapPin size={16} className="text-lime-300 flex-shrink-0" />
                  {BUSINESS.location}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-paper-200/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper-500">
            © {new Date().getFullYear()} {BUSINESS.name} ({BUSINESS.tagline}). All rights reserved.
          </p>
          <p className="text-xs text-paper-500">
            {BUSINESS.locationShort} · Est. {BUSINESS.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
