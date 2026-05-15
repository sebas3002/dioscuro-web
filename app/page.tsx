import { createClient } from '@supabase/supabase-js'

// Inicializamos el cliente con las variables que ya pusiste en el .env.local
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Page() {
  // Traemos el inventario real de la tabla que acabas de ver en Supabase
  const { data: productos, error } = await supabase
    .from('inventario')
    .select('*')

  if (error) {
    return <div>Error cargando DIOSCURO: {error.message}</div>
  }

  return (
    <main className="bg-black text-white p-8">
      <h1 className="text-4xl font-bold italic text-center mb-12">DIOSCURO CDMX</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos?.map((item) => (
          <div key={item.sku} className="border border-zinc-800 p-4 rounded-lg">
            <img src={item.imagen_url} alt={item.descripcion} className="w-full h-auto mb-4" />
            <h2 className="text-xl font-bold">{item.descripcion}</h2>
            <p className="text-zinc-400">SKU: {item.sku}</p>
            <div className="flex justify-between mt-4 items-center">
              <span className="text-2xl font-mono">${item.precio}</span>
              <span className={`px-3 py-1 rounded ${item.stock > 0 ? 'bg-green-900' : 'bg-red-900'}`}>
                Stock: {item.stock}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}