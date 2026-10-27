"use client";

import React from 'react';
import { ShoppingCart, Search, ChevronDown } from 'lucide-react';

const HeaderDesktop = () => {
  const LOGO_URL = "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/reallogo1.webp";
  const colorHueso = "#E5E5E1";

  // Estilos de texto para Desktop
  const textStyleDesktop: React.CSSProperties = {
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
      <nav className="header-desktop" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100px',
        backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(15px)',
        borderBottom: `1px solid ${colorHueso}10`, zIndex: 2000, display: 'grid',
        gridTemplateColumns: '10% 25% 30% 25% 10%', alignItems: 'center',
      }}>
        <div></div>
        
        <div className="nav-left" style={{ display: 'flex', gap: '35px', alignItems: 'center', justifyContent: 'flex-start' }}>
          <a href="#" style={{ color: colorHueso, display: 'flex', alignItems: 'center' }} className="nav-link"><Search size={20} /></a>
          <div className="dropdown" style={{ position: 'relative', padding: '15px 0' }}>
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
          <img src={LOGO_URL} alt="DIOSCURO" style={{ height: '85px', width: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>
        
        <div className="nav-right" style={{ display: 'flex', gap: '35px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href="#" className="nav-link" style={textStyleDesktop}>HUESOS ANCHOS</a>
          <a href="#" className="nav-link" style={textStyleDesktop}>INICIAR SESIÓN</a>
          <a href="#" style={{ color: colorHueso, display: 'flex', alignItems: 'center' }} className="nav-link"><ShoppingCart size={20} /></a>
        </div>
        
        <div></div>
      </nav>

      {/* ESTILOS AISLADOS (Solo para Escritorio) */}
      <style jsx>{`
        .nav-link { transition: opacity 0.3s ease; }
        .nav-link:hover { opacity: 0.6; }
        
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
          letter-spacing: 0.2em; text-transform: uppercase; padding: 14px 24px; display: block; font-family: sans-serif;
        }
        .dropdown-menu a:hover { color: ${colorHueso}; background-color: rgba(229, 229, 225, 0.05); padding-left: 28px; }
      `}</style>
    </>
  );
};

export default HeaderDesktop;