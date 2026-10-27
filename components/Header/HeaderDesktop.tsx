"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShoppingCart, Search, ChevronDown } from "lucide-react";

const HeaderDesktop = () => {
    
  const LOGO_URL =
    "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/reallogo1.webp";

  const colorHueso = "#E5E5E1";

  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const linkStyle: React.CSSProperties = {
    color: colorHueso,
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "900",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "rgba(0,0,0,0.98)",
        backdropFilter: "blur(15px)",
        borderBottom: `1px solid ${colorHueso}15`,
        zIndex: 99999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5%",
      }}
    >
      {/* LADO IZQUIERDO */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <a
          href="#"
          style={{
            color: colorHueso,
            display: "flex",
          }}
        >
          <Search size={20} />
        </a>

        {/* DROP */}
        <div
          ref={dropRef}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              ...linkStyle,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "transparent",
              border: "none",
              padding: "20px 0",
              margin: 0,
              cursor: "pointer",
            }}
          >
            DROP

            <ChevronDown
              size={14}
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </button>

          {/* MENÚ */}
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "70px",
                left: "-20px",
                width: "220px",
                backgroundColor: "#050505",
                border: `1px solid ${colorHueso}30`,
                display: "flex",
                flexDirection: "column",
                padding: "10px 0",
                boxShadow: "0 30px 60px rgba(0,0,0,0.95)",
                zIndex: 1000000,
              }}
            >
              <a
                href="#"
                style={{
                  ...linkStyle,
                  padding: "12px 20px",
                  display: "block",
                  borderBottom: `1px solid ${colorHueso}05`,
                }}
              >
                DOG CLUB
              </a>

              <a
                href="#"
                style={{
                  ...linkStyle,
                  padding: "12px 20px",
                  display: "block",
                  borderBottom: `1px solid ${colorHueso}05`,
                }}
              >
                NASTY BOYZ
              </a>

              <a
                href="#"
                style={{
                  ...linkStyle,
                  padding: "12px 20px",
                  display: "block",
                  borderBottom: `1px solid ${colorHueso}05`,
                }}
              >
                PRUEBA 3
              </a>

              <a
                href="#"
                style={{
                  ...linkStyle,
                  padding: "12px 20px",
                  display: "block",
                }}
              >
                PRUEBA 4
              </a>
            </div>
          )}
        </div>

        <a href="#" style={linkStyle}>
          GALERÍA
        </a>
      </div>

      {/* LOGO */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src={LOGO_URL}
          alt="DIOSCURO"
          style={{
            height: "80px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* LADO DERECHO */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <a href="#" style={linkStyle}>
          HUESOS ANCHOS
        </a>

        <a href="#" style={linkStyle}>
          INICIAR SESIÓN
        </a>

        <a
          href="#"
          style={{
            color: colorHueso,
            display: "flex",
          }}
        >
          <ShoppingCart size={20} />
        </a>
      </div>
    </nav>
  );
};

export default HeaderDesktop;