"use client";

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Home, Layers, Cpu, Shirt, ChevronDown } from 'lucide-react';

const Header = () => {
  const LOGO_URL = "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/reallogo1.webp;
  const colorHueso = "#E5E5E1";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Estilos de texto para Desktop
  const textStyleDesktop = {
    color: colorHueso,
    textDecoration: 'none',
    fontSize: 'clamp(11px, 1.05vw, 13px)', 
    fontWeight: '900',
    letterSpacing: '0.25em', 
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.3s ease'
  };

  return (
    <>
      {/* =========================================================================
          1. INFRAESTRUCTURA MÓVIL (DOBLE MENÚ CORREGIDO)
          ========================================================================= */}
      
      {/* A. MENÚ SUPERIOR MÓVIL (Con padding global del 6% para impacto visual) */}
      <div className="header-mobile-top" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '70px',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colorHueso}10`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 6%', // Incrementado para separar los iconos de los extremos de la pantalla
        zIndex: 2000,
      }}>
        {/* BLOQUE IZQUIERDO */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1, justifyContent: 'flex-start' }}>
          <button 
            onClick={() => setIsDrawerOpen(true)} 
            style={{ backgroundColor: 'transparent', border: 'none', color: colorHueso, padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            className="mobile-icon-link"
          >
            <Menu size={22} />
          </button>
          <a href="#" className="mobile-icon-link" style={{ display: 'flex', alignItems: 'center' }}>
            <Search size={22} />
          </a>
        </div>

        {/* BLOQUE CENTRAL */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={LOGO_URL} alt="DIOSCURO" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* BLOQUE DERECHO (Con PADDING INTERNO para el carrito) */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          alignItems: 'center', 
          flex: 1, 
          justifyContent: 'flex-end',
          paddingRight: '15px' // <--- CORRECCIÓN CLAVE: Empuja el carrito hacia adentro
        }}>
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
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '70px',
        backgroundColor: 'black',
        borderTop: `1px solid ${colorHueso}20`,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 2000,
        paddingBottom: 'env(safe-area-inset-bottom)',
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
            padding: '80px 35px', display: 'flex', flexDirection: 'column', gap: '25px',
            overflowY: 'auto'
          }}>
            <button onClick={() => setIsDrawerOpen(false)} style={{
              position: 'absolute', top: '25px', right: '25px', backgroundColor: 'transparent',
              border: 'none', color: colorHueso, fontSize: '28px', cursor: 'pointer', fontWeight: '300'
            }}>×</button>
            
            {/* SECCIÓN DROP (Con sub-menú ya desplegado) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span className="drawer-link" style={{ color: colorHueso, display: 'flex', alignItems: 'center', gap: '8px' }}>
                DROP <ChevronDown size={14} style={{ opacity: 0.5 }} />
              </span>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingLeft: '20px', 
                borderLeft: `1px solid ${colorHueso}10`,
                marginTop: '4px'
              }}>
                <a href="#" className="drawer-sub-link">DOG CLUB</a>
                <a href="#" className="drawer-sub-link">NASTY BOYZ</a>
                <a href="#" className="drawer-sub-link">PRUEBA 3</a>
                <a href="#" className="drawer-sub-link">PRUEBA 4</a>
              </div>
            </div>

            <a href="#" className="drawer-link">GALERÍA</a>
            <a href="#" className="drawer-link">CONTACTO</a>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. HEADER PARA ESCRITORIO
          ========================================================================= */}
      <nav className="header-desktop" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(15px)',
        borderBottom: `1px solid ${colorHueso}10`,
        zIndex: 2000,
        display: 'grid',
        gridTemplateColumns: '10% 25% 30% 25% 10%', 
        alignItems: 'center',
      }}>
        <div></div>
        <div className="nav-left" style={{ display: 'flex', gap: '35px', alignItems: 'center', justifyContent: 'flex-start' }}>
          <a href="#" style={{ color: colorHueso, display: 'flex', alignItems: 'center' }} className="nav-link"><Search size={20} /></a>
          <div className="dropdown" style={{ position: 'relative', padding: '15px 0' }}>
            <span style={{ ...textStyleDesktop, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>DROP <ChevronDown size={14} style={{ opacity: 0.8 }}/></span>
            <div className="dropdown-menu">
              <a href="#">DOG CLUB</a>
              <a href="#">NASTY BOYZ</a>
              <a href="#">PRUEBA 3</a>
              <a href="#">PRUEBA 4</a>
            </div>
          </div>
          <a href="#" className="nav-link" style={textStyleDesktop}>GALERÍA</a>
        </div>
        <div className="nav-logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={LOGO_URL} alt="DIOSCURO" style={{ height: '85px', width: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>
        <div className="nav-right" style={{ display: 'flex', gap: '35px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href="#" className="nav-link" style={textStyleDesktop}>CONTACTO</a>
          <a href="#" className="nav-link" style={textStyleDesktop}>INICIAR SESIÓN</a>
          <a href="#" style={{ color: colorHueso, display: 'flex', alignItems: 'center' }} className="nav-link"><ShoppingCart size={20} /></a>
        </div>
        <div></div>
      </nav>

      {/* =========================================================================
          3. CONTROL DE VISIBILIDAD Y DETALLES MÓVILES (CSS)
          ========================================================================= */}
      <style jsx>{`
        .nav-link { transition: opacity 0.3s ease; }
        .nav-link:hover { opacity: 0.6; }
        
        .mobile-icon-link {
          color: ${colorHueso};
          opacity: 0.85; 
          display: flex;
          alignItems: center;
          justifyContent: center;
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

        .dropdown-menu {
          display: none; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          background-color: #0a0a0a; border: 1px solid ${colorHueso}15; padding: 12px 0;
          min-width: 220px; flex-direction: column; box-shadow: 0 20px 40px rgba(0,0,0,0.8);
        }
        .dropdown::before { content: ''; position: absolute; top: 100%; left: 0; width: 100%; height: 30px; display: none; }
        .dropdown:hover::before { display: block; }
        .dropdown:hover .dropdown-menu { display: flex; }
        .dropdown-menu a {
          color: ${colorHueso}80; text-decoration: none; font-size: 11px; font-weight: 800;
          letter-spacing: 0.2em; text-transform: uppercase; padding: 14px 24px; display: block; fontFamily: sans-serif;
        }
        .dropdown-menu a:hover { color: ${colorHueso}; background-color: rgba(229, 229, 225, 0.05); padding-left: 28px; }

        @media (max-width: 768px) {
          .header-desktop { display: none !important; }
          .header-mobile-top, .header-mobile-bottom { display: flex !important; }
        }

        @media (min-width: 769px) {
          .header-desktop { display: grid !important; }
          .header-mobile-top, .header-mobile-bottom { display: none !important; }
          .mobile-drawer-overlay { display: none; }
        }
      `}</style>
    </>
  );
};

export default Header;