import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/content';
import type { FormState, FormErrors } from '@/hooks/useEnquiryForm';

interface ContactSectionProps {
  formData: FormState;
  formErrors: FormErrors;
  draftRestored: boolean;
  updateField: (field: keyof FormState, value: string) => void;
  handleSubmit: () => Promise<boolean>;
}

const BUYER_TYPES = [
  'Restaurant/hotel',
  'Retail/distribution',
  'Commercial farm',
  'Training/personal',
];

const PRODUCT_OPTIONS = [
  'Fresh Oyster Mushrooms',
  'Premium Grain Spawn',
  'Hardwood Substrate Pellets',
  'Oyster Training Kit',
];

export default function ContactSection({
  formData,
  formErrors,
  draftRestored,
  updateField,
  handleSubmit,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-forest-950/50 noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="section-label">Supply Conversation</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 mt-4 text-balance">
                Let's plan your supply.
              </h2>
              <p className="text-paper-400 mt-4 text-lg leading-relaxed">
                Share your operating model and our team will recommend the optimal
                format, volume, and dispatch schedule.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center group-hover:bg-lime-300/10 transition-colors">
                  <Phone size={18} className="text-lime-300" />
                </div>
                <div>
                  <div className="text-xs text-paper-400 uppercase tracking-wider">Phone</div>
                  <div className="text-paper-100 font-medium group-hover:text-lime-300 transition-colors">
                    {BUSINESS.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center group-hover:bg-lime-300/10 transition-colors">
                  <Mail size={18} className="text-lime-300" />
                </div>
                <div>
                  <div className="text-xs text-paper-400 uppercase tracking-wider">Email</div>
                  <div className="text-paper-100 font-medium group-hover:text-lime-300 transition-colors break-all">
                    {BUSINESS.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center">
                  <MapPin size={18} className="text-lime-300" />
                </div>
                <div>
                  <div className="text-xs text-paper-400 uppercase tracking-wider">Facility</div>
                  <div className="text-paper-100 font-medium">{BUSINESS.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center">
                  <Clock size={18} className="text-lime-300" />
                </div>
                <div>
                  <div className="text-xs text-paper-400 uppercase tracking-wider">Dispatch Goal</div>
                  <div className="text-paper-100 font-medium">Within 24 hours of plucking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 lg:p-8">
              {draftRestored && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-lime-300/10 border border-lime-300/20 text-sm text-lime-200">
                  Draft restored from your previous session.
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Contact person"
                      className={`input-field ${formErrors.name ? 'error' : ''}`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-error-400 mt-1.5">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                      Business *
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={(e) => updateField('business', e.target.value)}
                      placeholder="Company or farm"
                      className={`input-field ${formErrors.business ? 'error' : ''}`}
                    />
                    {formErrors.business && (
                      <p className="text-xs text-error-400 mt-1.5">{formErrors.business}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="work@email.com"
                      className={`input-field ${formErrors.email ? 'error' : ''}`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-error-400 mt-1.5">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="Phone or WhatsApp"
                      className={`input-field ${formErrors.phone ? 'error' : ''}`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-error-400 mt-1.5">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                      Buyer Type *
                    </label>
                    <select
                      name="buyerType"
                      value={formData.buyerType}
                      onChange={(e) => updateField('buyerType', e.target.value)}
                      className={`input-field appearance-none cursor-pointer ${formErrors.buyerType ? 'error' : ''}`}
                    >
                      <option value="">Select type</option>
                      {BUYER_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-forest-900">
                          {t}
                        </option>
                      ))}
                    </select>
                    {formErrors.buyerType && (
                      <p className="text-xs text-error-400 mt-1.5">{formErrors.buyerType}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={(e) => updateField('product', e.target.value)}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select product (optional)</option>
                      {PRODUCT_OPTIONS.map((p) => (
                        <option key={p} value={p} className="bg-forest-900">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                    Quantity & Timing
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={(e) => updateField('quantity', e.target.value)}
                    placeholder="e.g. 20kg/week, dispatch next Monday"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs text-paper-400 mb-1.5 font-medium uppercase tracking-wider">
                    Message * <span className="text-paper-500 normal-case tracking-normal">(20–500 chars, 5–100 words)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Describe your procurement requirements in detail..."
                    rows={4}
                    className={`input-field resize-none ${formErrors.message ? 'error' : ''}`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-error-400 mt-1.5">{formErrors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full group">
                  Submit Enquiry
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
