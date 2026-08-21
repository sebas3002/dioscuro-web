"use client";

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Home, Layers, Cpu, Shirt, ChevronDown } from 'lucide-react';

const HeaderMobile = () => {
  const LOGO_URL = "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/reallogo1.webp";
  const colorHueso = "#E5E5E1";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* A. MENÚ SUPERIOR MÓVIL */}
      <div className="header-mobile-top" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colorHueso}10`, display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', padding: '0 6%', zIndex: 2000,
      }}>
        {/* BLOQUE IZQUIERDO */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1, justifyContent: 'flex-start' }}>
          <button onClick={() => setIsDrawerOpen(true)} style={{ backgroundColor: 'transparent', border: 'none', color: colorHueso, padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }} className="mobile-icon-link">
            <Menu size={22} />
          </button>
          <a href="#" className="mobile-icon-link" style={{ display: 'flex', alignItems: 'center' }}>
            <Search size={22} />
          </a>
        </div>

        {/* BLOQUE CENTRAL (Centrado Absoluto Corregido) */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={LOGO_URL} alt="DIOSCURO" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* BLOQUE DERECHO */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingRight: '15px' }}>
          <a href="#" className="mobile-icon-link" style={{ display: 'flex', alignItems: 'center' }}>
            <User size={22} />
          </a>
          <a href="#" className="mobile-icon-link" style={{ display: 'flex', alignItems: 'center' }}>
            <ShoppingCart size={22} />
          </a>
        </div>
      </div>

      {/* B. MENÚ INFERIOR MÓVIL */}
      <div className="header-mobile-bottom" style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'black', borderTop: `1px solid ${colorHueso}20`,
        display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 2000, paddingBottom: 'env(safe-area-inset-bottom)',
      }}>
        <a href="#" className="mobile-icon-link"><Home size={22} /></a>
        <a href="#" className="mobile-icon-link"><Layers size={22} /></a>
        <a href="#" className="mobile-icon-link" style={{ color: '#FFF', opacity: 1 }}><Shirt size={22} /></a> 
        <a href="#" className="mobile-icon-link"><Cpu size={22} /></a>
        <a href="#" className="mobile-icon-link"><ShoppingCart size={22} /></a>
      </div>

      {/* C. MENÚ LATERAL (Drawer con DROP desplegado) */}
      {isDrawerOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsDrawerOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 3000, backdropFilter: 'blur(4px)'
        }}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()} style={{
            position: 'absolute', top: 0, left: 0, width: '75%', height: '100%',
            backgroundColor: '#050505', borderRight: `1px solid ${colorHueso}10`,
            padding: '80px 35px', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto'
          }}>
            <button onClick={() => setIsDrawerOpen(false)} style={{
              position: 'absolute', top: '25px', right: '25px', backgroundColor: 'transparent',
              border: 'none', color: colorHueso, fontSize: '28px', cursor: 'pointer', fontWeight: '300'
            }}>×</button>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span className="drawer-link" style={{ color: colorHueso, display: 'flex', alignItems: 'center', gap: '8px' }}>
                DROP <ChevronDown size={14} style={{ opacity: 0.5 }} />
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '20px', borderLeft: `1px solid ${colorHueso}10`, marginTop: '4px' }}>
                <a href="#" className="drawer-sub-link">DOG CLUB</a>
                <a href="#" className="drawer-sub-link">NASTY BOYZ</a>
                <a href="#" className="drawer-sub-link">HUESOS ANCHOS</a>
                <a href="#" className="drawer-sub-link">PRUEBA 4</a>
              </div>
            </div>

            <a href="#" className="drawer-link">dsadas</a>
            <a href="#" className="drawer-link">HUESOS ANCHOS</a>
          </div>
        </div>
      )}

      {/* D. ESTILOS AISLADOS (Solo para Móvil) */}
      <style jsx>{`
        .mobile-icon-link {
          color: ${colorHueso};
          opacity: 0.85; 
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
          width: 40px;
          height: 40px;
        }
        .mobile-icon-link:active { opacity: 0.5; }

        .drawer-link {
          color: ${colorHueso};
          text-decoration: none;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          font-family: sans-serif;
        }

        .drawer-sub-link {
          color: ${colorHueso}70;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-family: sans-serif;
          padding: 4px 0;
          transition: color 0.2s ease;
        }
        .drawer-sub-link:active { color: ${colorHueso}; }
      `}</style>
    </>
  );
};

export default HeaderMobile;