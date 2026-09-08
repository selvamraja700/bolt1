/*
# Create enquiries table for MushClub B2B supply portal

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — contact person name
  - `business` (text, not null) — company or farm organization name
  - `email` (text, not null) — work email address
  - `phone` (text, not null) — contact phone or WhatsApp number
  - `buyer_type` (text, not null) — restaurant/hotel, retail/distribution, commercial farm, training/personal
  - `product` (text, nullable) — target product from catalog
  - `quantity` (text, nullable) — volume requirement & target timing
  - `message` (text, not null) — detailed procurement requirements
  - `status` (text, default 'new') — enquiry status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `enquiries`.
- This is a no-auth public website: allow anon + authenticated to INSERT new enquiries.
- No SELECT/UPDATE/DELETE from the client — only inserts. The business owner reads enquiries via the Supabase dashboard.
- This prevents public data exposure while still allowing form submissions.

3. Notes
- The enquiry form is the primary lead capture mechanism for the B2B portal.
- Only INSERT is granted to anon/authenticated — no one can read or modify enquiries from the browser.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  buyer_type text NOT NULL,
  product text,
  quantity text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Only allow INSERT from anon/authenticated — no SELECT, UPDATE, or DELETE
DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
