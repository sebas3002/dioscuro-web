"use client";

import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  return (
    <header>
      {/* Contenedor de Escritorio (Controlado por globals.css) */}
      <div className="desktop-wrapper">
        <HeaderDesktop />
      </div>

      {/* Contenedor Móvil (Controlado por globals.css) */}
      <div className="mobile-wrapper">
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;