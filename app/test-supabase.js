import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function test() {
  const { data, error } = await supabase.from('inventory').select('*').limit(1)
  if (error) console.log("Error de conexión:", error.message)
  else console.log("¡Conexión exitosa! Datos:", data)
}

test()