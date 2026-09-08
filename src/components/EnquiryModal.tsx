import { X, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import type { FormState, FormErrors } from '@/hooks/useEnquiryForm';

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
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

export default function EnquiryModal({
  open,
  onClose,
  formData,
  formErrors,
  draftRestored,
  updateField,
  handleSubmit,
}: EnquiryModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 lg:p-8 animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-paper-50">
              Supply Enquiry
            </h3>
            <p className="text-sm text-paper-400 mt-1">
              Tell us about your requirements.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-paper-300 hover:text-lime-300 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {draftRestored && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-lime-300/10 border border-lime-300/20 text-sm text-lime-200">
            Draft restored from your previous session.
          </div>
        )}

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const success = await handleSubmit();
            if (success) onClose();
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
              placeholder="Describe your procurement requirements..."
              rows={3}
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
  );
}
