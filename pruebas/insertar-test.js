import { supabase } from './lib/supabase';

async function crearProductoPrueba() {
  const { data, error } = await supabase
    .from('inventario')
    .insert([
      {
        sku: 'TEST-001',
        modelo: 'PLAYERA TEST PROTOTIPO',
        talla: 'G',
        color: 'NEGRO',
        costo_produccion: 150.00,
        precio_venta: 450.00,
        stock_actual: 10,
        activo: true,
        descripcion: 'Prenda de prueba preliminar para validación de pasarela y diseño.',
        imagen_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop' // Imagen random temporal de prueba
      }
    ]);

  if (error) {
    console.error('Error al insertar el producto:', error.message);
  } else {
    console.log('¡Producto de prueba insertado con éxito!', data);
  }
}

// Ejecutar la función
crearProductoPrueba();