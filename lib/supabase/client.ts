import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fsxvpvpmxxkpxqqrcink.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzeHZwdnBteHhrcHhxcXJjaW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTY4NjQsImV4cCI6MjA3OTU5Mjg2NH0.b0M89sc3Y3M6sArPMP2DBcUPAnggOptWJ5PMKFQtN5A"

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

