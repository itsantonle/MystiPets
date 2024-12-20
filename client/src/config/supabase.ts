import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "test-supabase-url"
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "test-anon-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 