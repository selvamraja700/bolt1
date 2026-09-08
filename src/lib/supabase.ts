import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export interface EnquiryData {
  name: string;
  business: string;
  email: string;
  phone: string;
  buyer_type: string;
  product?: string;
  quantity?: string;
  message: string;
}

export async function submitEnquiry(data: EnquiryData): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('enquiries').insert({
    name: data.name,
    business: data.business,
    email: data.email,
    phone: data.phone,
    buyer_type: data.buyer_type,
    product: data.product || null,
    quantity: data.quantity || null,
    message: data.message,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
