-- ==============================================================================
-- ETHIXWEB INDIA — SUPABASE POSTGRESQL SCHEMA
-- Description: Persistent leads storage, Row Level Security (RLS), and Admin Auth
-- ==============================================================================

-- 1. Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL CHECK (char_length(trim(name)) >= 2 AND char_length(name) <= 100),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    company TEXT CHECK (company IS NULL OR char_length(company) <= 100),
    service TEXT NOT NULL,
    message TEXT NOT NULL CHECK (char_length(trim(message)) >= 10 AND char_length(message) <= 2000),
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Performance indexes
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. RLS Security Policies
-- NOTE: In the Ethixweb architecture, all public submissions and lead management
-- occur via protected Next.js Route Handlers using the server-side SUPABASE_SERVICE_ROLE_KEY.
-- However, we also enforce explicit RLS policies to prevent direct client-side exploits:

-- Deny public browser read access:
-- Public clients cannot select from leads under any circumstances.
DROP POLICY IF EXISTS "Deny public select" ON public.leads;
CREATE POLICY "Deny public select" ON public.leads
    FOR SELECT
    TO anon
    USING (false);

-- Deny public browser updates:
DROP POLICY IF EXISTS "Deny public update" ON public.leads;
CREATE POLICY "Deny public update" ON public.leads
    FOR UPDATE
    TO anon
    USING (false);

-- Allow authenticated users with admin role to view leads directly if using Supabase client:
DROP POLICY IF EXISTS "Allow admins to select leads" ON public.leads;
CREATE POLICY "Allow admins to select leads" ON public.leads
    FOR SELECT
    TO authenticated
    USING (
        (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    );

-- Allow authenticated users with admin role to update lead status:
DROP POLICY IF EXISTS "Allow admins to update leads" ON public.leads;
CREATE POLICY "Allow admins to update leads" ON public.leads
    FOR UPDATE
    TO authenticated
    USING (
        (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    )
    WITH CHECK (
        (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    );

-- ==============================================================================
-- INSTRUCTIONS TO CREATE AN ADMINISTRATOR USER:
-- ==============================================================================
-- 1. Create a user via the Supabase Dashboard -> Authentication -> Users -> "Add User"
--    (e.g., email: admin@ethixweb.com, with a secure password).
-- 2. Assign the 'admin' role in app_metadata via SQL:
--    UPDATE auth.users
--    SET raw_app_meta_data = raw_app_meta_data || '{"role": "admin"}'::jsonb
--    WHERE email = 'admin@ethixweb.com';
-- 3. Alternatively, specify the email in your .env.local file:
--    ADMIN_EMAILS="admin@ethixweb.com"
-- ==============================================================================
