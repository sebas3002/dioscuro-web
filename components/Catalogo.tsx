"use client";
import React from 'react';
import { supabase } from '../lib/supabase';

export default async function Catalogo() {
  const colorHueso = "#E5E5E1";

  // 1. Extraemos los productos activos desde Supabase
  const { data: productos, error } = await supabase
    .from('inventario')
    .select('*')
    .eq('activo', true);

  // 2. Manejo de errores de conexión
  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>
        Error crítico conectando al inventario: {error.message}
      </div>
    );
  }

  // 3. Manejo de inventario vacío
  if (!productos || productos.length === 0) {
    return (
      <div style={{ 
        color: '#555', 
        textAlign: 'center', 
        padding: '100px 20px', 
        letterSpacing: '0.2em', 
        textTransform: 'uppercase', 
        fontSize: '12px' 
      }}>
        NO HAY DROPS ACTIVOS EN ESTE MOMENTO.
      </div>
    );
  }

  // 4. Renderizado visual del escaparate
  return (
    <section style={{ padding: '80px 5%', backgroundColor: 'black' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '40px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {productos.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* Contenedor de la Imagen con formato 3:4 */}
            <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#111', position: 'relative', overflow: 'hidden' }}>
              {item.imagen_url ? (
                <img 
                  src={item.imagen_url} 
                  alt={item.modelo || 'Prenda DIOSCURO'} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : (
                <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
                  SIN IMAGEN
                </div>
              )}
            </div>

            {/* Información del Producto */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <h3 style={{ margin: 0, color: colorHueso, fontSize: '14px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {item.modelo || item.sku}
                </h3>
                <span style={{ color: '#777', fontSize: '11px', letterSpacing: '0.1em' }}>TALLA: {item.talla}</span>
              </div>
              
              <span style={{ color: colorHueso, fontSize: '14px', fontWeight: '400' }}>
                ${item.precio_venta}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}