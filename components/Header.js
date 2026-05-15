"use client";

import React, { useState, useEffect } from 'react';
import { Home, Zap, Layers, Cpu, User } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const LOGO_URL = "https://okjasjwetailudcrvcau.supabase.co/storage/v1/object/public/assets/DIOSCURO2.webp";

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { name: 'HOME', icon: <Home size={20} />, href: '/' },
    { name: 'DROPS', icon: <Zap size={20} />, href: '#' },
    { name: 'ESSENTIALS', icon: <Layers size={20} />, href: '#' },
    { name: 'CUSTOM', icon: <Cpu size={20} />, href: '#' },
    { name: 'ACCOUNT', icon: <User size={20} />, href: '#' },
  ];

  const colorHueso = "#E5E5E1"; 
  const colorFondo = "rgba(10, 10, 10, 0.9)";

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '90px',
        backgroundColor: colorFondo,
        backdropFilter: 'blur(15px)',
        borderBottom: `1px solid ${colorHueso}15`,
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }} className="nav-container">
        
        {/* CONTENEDOR DEL LOGO: Aquí aplicamos la lógica de centrado */}
        <div className="logo-wrapper" style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1
        }}>
          <img 
            src={LOGO_URL} 
            alt="DIOSCURO" 
            style={{ 
              height: '55px', 
              width: 'auto', 
              filter: 'invert(1)',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* LINKS ESCRITORIO */}
        <div className="nav-desktop" style={{ 
          display: 'flex', 
          gap: '35px',
          justifyContent: 'flex-end'
        }}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} style={{
              color: colorHueso,
              textDecoration: 'none',
              fontSize: '10px',
              fontWeight: '800',
              letterSpacing: '0.4em',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase'
            }}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* BARRA INFERIOR (Móvil) */}
      <div className="nav-mobile-bottom" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '75px',
        backgroundColor: 'black',
        borderTop: `1px solid ${colorHueso}20`,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1000,
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href} style={{ color: colorHueso, opacity: 0.7 }}>
            {item.icon}
          </a>
        ))}
      </div>

      <style jsx>{`
        .nav-container {
          padding: 0 6%;
        }
        
        @media (max-width: 768px) {
          .nav-container {
            justify-content: center; /* Centra el contenido en móvil */
          }
          .logo-wrapper {
            justify-content: center; /* Centra el logo en móvil */
          }
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-bottom {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .logo-wrapper {
            justify-content: flex-start; /* Alinea a la izquierda en desktop */
          }
          .nav-mobile-bottom {
            display: none !important;
          }
          .nav-desktop {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;