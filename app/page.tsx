import Header from '../components/Header';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '300vh', margin: 0, padding: 0 }}>
      <Header />
      
      {/* SECCIÓN 1: HERO (Lo primero que se ve) */}
      <section style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid #111'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 12vw, 10rem)', 
          fontWeight: '900', 
          fontStyle: 'italic', 
          margin: 0,
          lineHeight: 0.8
        }}>
          DIOSCURO
        </h1>
        <p style={{ 
          marginTop: '20px', 
          letterSpacing: '0.6em', 
          color: '#444', 
          textTransform: 'uppercase',
          fontSize: '14px'
        }}>
          Tienda de ropa
        </p>
      </section>

      {/* SECCIÓN 2: ESPACIO DE PRUEBA (Para forzar el scroll) */}
      <section style={{
        height: '100vh',
        padding: '100px 5%',
        display: 'flex',
        alignItems: 'flex-start'
      }}>
        <div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#222' }}>
            DROPS<br />RELEASES
          </h2>
          <p style={{ color: '#222', maxWidth: '400px', lineHeight: '1.6' }}>
            Proximamente
            pagina en construccion.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3: PIE DE PÁGINA TEMPORAL */}
      <section style={{ height: '100vh', backgroundColor: '#050505' }}>
        <div style={{ padding: '5%', color: '#111', fontSize: '10vw', fontWeight: '900' }}>
          END OF STACK
        </div>
      </section>
    </main>
  );
}