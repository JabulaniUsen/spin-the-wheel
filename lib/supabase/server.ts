import { createClient } from '@supabase/supabase-js'

// Use environment variables or fallback to hardcoded values (matching client.ts)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nhvdhzyctqidxdryjbrp.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzeHZwdnBteHhrcHhxcXJjaW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTY4NjQsImV4cCI6MjA3OTU5Mjg2NH0.b0M89sc3Y3M6sArPMP2DBcUPAnggOptWJ5PMKFQtN5A"
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required')
}

// Server-side client with service role key for admin operations (optional)
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null

// Regular client for server-side operations
export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

