"use client";

import Header from '../components/Header';

export default function Home() {
  const VIDEO_URL = "https://okjasjwetailudcrvcau.supabase.co/storage/v1/object/public/assets/INTRO.mp4"; 
  const colorHueso = "#E5E5E1";

  return (
    <main style={{ backgroundColor: 'black', color: colorHueso, minHeight: '100vh', margin: 0, padding: 0 }}>
      <Header />
      
      <section className="hero-section" style={{
        display: 'flex',
        flexDirection: 'column', // Forzamos el orden vertical para centrado total
        minHeight: '100vh',
        paddingTop: '90px', 
        width: '100%',
        backgroundColor: 'black'
      }}>
        
        {/* CONTENEDOR DE VIDEO: Ocupa el 60% en desktop para impacto visual */}
        <div style={{
          width: '100%',
          height: '60vh',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${colorHueso}10`
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* CONTENEDOR DE TEXTO: Centrado absoluto */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Centrado horizontal
          textAlign: 'center',   // Centrado de texto
          padding: '60px 5%',
          backgroundColor: 'black'
        }}>
          <h2 style={{ 
            fontSize: '12px', 
            letterSpacing: '1em', 
            color: '#555', 
            marginBottom: '30px',
            fontWeight: '800',
            marginLeft: '1em' // Compensa el espacio del letter-spacing para centrado real
          }}>
            DIOSCURO CDMX
          </h2>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 8rem)', 
            fontWeight: '900', 
            fontStyle: 'italic', 
            margin: 0, 
            lineHeight: 0.8,
            textTransform: 'uppercase',
            letterSpacing: '-4px'
          }}>
            PRECISIÓN<br />URBANA
          </h1>

          <p style={{ 
            marginTop: '40px', 
            fontSize: 'clamp(16px, 2vw, 20px)', // Texto más grande y legible
            lineHeight: '1.6', 
            color: '#BBB',
            maxWidth: '700px', // Limita el ancho para que no se canse la vista
            fontFamily: 'sans-serif',
            fontWeight: '400'
          }}>
            Streetwear de alto rendimiento nacido en el caos de la CDMX. 
            Elevamos el estándar de la moda local mediante materiales de grado industrial y diseño obsesivo.
          </p>

          <div style={{ marginTop: '50px' }}>
            <button style={{
              backgroundColor: 'transparent',
              border: `2px solid ${colorHueso}`, // Borde más grueso
              color: colorHueso,
              padding: '20px 50px',
              fontSize: '12px',
              fontWeight: '900',
              letterSpacing: '0.5em',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colorHueso;
              e.currentTarget.style.color = 'black';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = colorHueso;
            }}
            >
              ACCEDER A DROPS
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 4rem !important;
            letter-spacing: -2px !important;
          }
          div {
            height: auto !important;
          }
        }
      `}</style>
    </main>
  );
}