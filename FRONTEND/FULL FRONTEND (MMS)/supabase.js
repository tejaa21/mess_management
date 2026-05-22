

const SUPABASE_URL = 
"https://ovdizzvhxrpzpqjapmxb.supabase.co";
const SUPABASE_ANON_KEY =
 "sb_publishable_edTGQM1t4NI8AmAyLsvZ0Q_agJ-dM8B";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Supabase Connected");