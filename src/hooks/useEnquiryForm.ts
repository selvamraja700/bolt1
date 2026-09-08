import { useState, useEffect, useCallback, useRef } from 'react';
import { submitEnquiry, type EnquiryData } from '@/lib/supabase';
import { BUSINESS } from '@/lib/content';

const DRAFT_KEY = 'mushclub_supply_enquiry_draft';
const EIGHTEEN_HOURS = 18 * 60 * 60 * 1000;
const MIN_PROCESSING_TIME = 2200;

export interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  buyerType: string;
  product: string;
  quantity: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  buyerType?: string;
  message?: string;
}

const EMPTY_FORM: FormState = {
  name: '',
  business: '',
  email: '',
  phone: '',
  buyerType: '',
  product: '',
  quantity: '',
  message: '',
};

const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

const countWords = (text: string): number =>
  text.trim().split(/\s+/).filter((w) => w.length > 0).length;

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
  if (form.business.trim().length < 2) errors.business = 'Business name must be at least 2 characters';
  if (!validateEmail(form.email)) errors.email = 'Enter a valid email address';
  if (form.phone.trim().length < 6) errors.phone = 'Enter a valid phone number';
  if (!form.buyerType) errors.buyerType = 'Select your buyer type';

  const msg = form.message.trim();
  if (msg.length < 20) {
    errors.message = 'Message must be at least 20 characters';
  } else if (msg.length > 500) {
    errors.message = 'Message must be under 500 characters';
  } else if (countWords(msg) < 5) {
    errors.message = 'Message must be at least 5 words';
  } else if (countWords(msg) > 100) {
    errors.message = 'Message must be under 100 words';
  }

  return errors;
}

export function useEnquiryForm() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [draftRestored, setDraftRestored] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formStatusMessage, setFormStatusMessage] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore draft on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DRAFT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const age = Date.now() - (parsed.timestamp || 0);
        if (age < EIGHTEEN_HOURS && parsed.data) {
          setFormData(parsed.data);
          setDraftRestored(true);
        } else {
          localStorage.removeItem(DRAFT_KEY);
        }
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Debounced auto-save
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const hasContent = Object.values(formData).some((v) => v.trim().length > 0);
    if (!hasContent) return;

    debounceRef.current = setTimeout(() => {
      try {
        localStorage.setItem(
          DRAFT_KEY,
          JSON.stringify({ data: formData, timestamp: Date.now() }),
        );
      } catch {
        // ignore storage errors
      }
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [formData]);

  const updateField = useCallback((field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const prefill = useCallback((field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(EMPTY_FORM);
    setFormErrors({});
    setFormStatus('idle');
    setFormStatusMessage('');
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = useCallback(async (): Promise<boolean> => {
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0] as keyof FormErrors;
      const el = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement | null;
      el?.focus();
      return false;
    }

    setIsProcessing(true);
    setFormStatus('idle');
    const startTime = Date.now();

    try {
      const enquiryData: EnquiryData = {
        name: formData.name.trim(),
        business: formData.business.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        buyer_type: formData.buyerType,
        product: formData.product || undefined,
        quantity: formData.quantity || undefined,
        message: formData.message.trim(),
      };

      const result = await submitEnquiry(enquiryData);
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_PROCESSING_TIME - elapsed);
      if (remaining > 0) await new Promise((r) => setTimeout(r, remaining));

      if (result.success) {
        setFormStatus('success');
        setFormStatusMessage('Your enquiry has been received. Our supply team will contact you shortly.');
        try {
          localStorage.removeItem(DRAFT_KEY);
        } catch {
          // ignore
        }
        setTimeout(() => {
          setFormData(EMPTY_FORM);
          setFormStatus('idle');
          setIsProcessing(false);
        }, 2800);
        return true;
      } else {
        // Fallback to mailto
        const subject = `Supply Enquiry from ${formData.business}`;
        const body = [
          `Name: ${formData.name}`,
          `Business: ${formData.business}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone}`,
          `Buyer Type: ${formData.buyerType}`,
          formData.product ? `Product: ${formData.product}` : '',
          formData.quantity ? `Quantity: ${formData.quantity}` : '',
          `Message: ${formData.message}`,
        ].filter(Boolean).join('\n');
        window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setFormStatus('error');
        setFormStatusMessage('Submission issue — opening your email client as fallback.');
        setIsProcessing(false);
        return false;
      }
    } catch {
      setFormStatus('error');
      setFormStatusMessage('Something went wrong. Please try again or contact us directly.');
      setIsProcessing(false);
      return false;
    }
  }, [formData]);

  return {
    formData,
    formErrors,
    draftRestored,
    isProcessing,
    formStatus,
    formStatusMessage,
    updateField,
    prefill,
    resetForm,
    handleSubmit,
  };
}
