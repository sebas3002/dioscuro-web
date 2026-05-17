"use client";

import React, { useState } from 'react';
// Corrección en la importación: Agregado ChevronDown explícitamente junto a Shirt
import { ShoppingCart, Search, Menu, User, Home, Layers, Cpu, Shirt, ChevronDown } from 'lucide-react';

const Header = () => {
  const LOGO_URL = "https://okjasjwetailudcrvcau.supabase.co/storage/v1/object/public/assets/Logo.webp";
  const colorHueso = "#E5E5E1";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          1. INFRAESTRUCTURA MÓVIL (SISTEMA DE DOS MENÚS)
          ========================================================================= */}
      
      {/* A. MENÚ SUPERIOR MÓVIL */}
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
        padding: '0 5%',
        zIndex: 2000,
      }}>
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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={LOGO_URL} alt="DIOSCURO" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
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

      {/* C. MENÚ DESPLEGABLE LATERAL (Drawer) */}
      {isDrawerOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsDrawerOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 3000
        }}>
          <div className="mobile-drawer-content" style={{
            position: 'absolute', top: 0, left: 0, width: '70%', height: '100%',
            backgroundColor: 'black', borderRight: `1px solid ${colorHueso}20`,
            padding: '80px 30px', display: 'flex', flexDirection: 'column', gap: '30px'
          }}>
            <button onClick={() => setIsDrawerOpen(false)} style={{
              position: 'absolute', top: '20px', right: '20px', backgroundColor: 'transparent',
              border: 'none', color: colorHueso, fontSize: '20px', cursor: 'pointer'
            }}>×</button>
            
            <a href="#" className="drawer-link">DROP</a>
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
          <a href="#" style={{ color: colorHueso, display: 'flex', alignItems: 'center' }} className="nav-link">
            <Search size={20} />
          </a>
          <div className="dropdown" style={{ position: 'relative', paddingBottom: '15px', marginTop: '15px' }}>
            <span style={{ ...textStyleDesktop, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              DROP <ChevronDown size={14} style={{ opacity: 0.8 }}/>
            </span>
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
          <img src={LOGO_URL} alt="DIOSCURO" style={{ height: '125px', width: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>

        <div className="nav-right" style={{ display: 'flex', gap: '35px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href="#" className="nav-link" style={textStyleDesktop}>CONTACTO</a>
          <a href="#" className="nav-link" style={textStyleDesktop}>INICIAR SESIÓN</a>
          <a href="#" style={{ color: colorHueso, display: 'flex', alignItems: 'center' }} className="nav-link">
            <ShoppingCart size={20} />
          </a>
        </div>
        <div></div>
      </nav>

      {/* =========================================================================
          3. CONTROL DE VISIBILIDAD (CSS)
          ========================================================================= */}
      <style jsx>{`
        .nav-link { transition: opacity 0.3s ease; }
        .nav-link:hover { opacity: 0.6; }
        
        .mobile-icon-link {
          color: ${colorHueso};
          opacity: 0.6;
          display: flex;
          alignItems: center;
          justifyContent: center;
          transition: opacity 0.2s ease;
          width: 45px;
          height: 45px;
        }
        .mobile-icon-link:active { opacity: 1; }

        .drawer-link {
          color: ${colorHueso};
          text-decoration: none;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

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