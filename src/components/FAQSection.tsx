import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 noise-overlay"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-14 text-center">
          <span className="section-label justify-center">Resources & FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 mt-4 text-balance">
            Common questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left group"
                >
                  <span className={`font-display text-base lg:text-lg font-semibold transition-colors ${isOpen ? 'text-lime-300' : 'text-paper-100 group-hover:text-lime-300'}`}>
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full glass-card flex items-center justify-center text-paper-300">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm lg:text-base text-paper-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
