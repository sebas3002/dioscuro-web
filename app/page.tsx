// app/page.tsx
import CarouselDioscuro from "@/app/CarouselDioscuro"; // Ajusta la ruta si es necesario

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      
      {/* Aquí puedes tener tu Header, Navbar, etc. */}
      
      {/* Aquí insertas el componente del carrusel */}
      <CarouselDioscuro />

      {/* Aquí puedes tener tu Footer, otras secciones, etc. */}
      
    </main>
  );
}
