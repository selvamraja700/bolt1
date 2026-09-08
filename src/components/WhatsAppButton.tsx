import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/content';

interface WhatsAppButtonProps {
  hidden: boolean;
}

export default function WhatsAppButton({ hidden }: WhatsAppButtonProps) {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 ${
        hidden ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-lime-300 ring-2 ring-forest-950 animate-pulse-soft" />
    </a>
  );
}
