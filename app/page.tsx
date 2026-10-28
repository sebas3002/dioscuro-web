"use client";
import { useState } from "react";
import { motion, PanInfo } from "framer-motion";

// Endpoints de Supabase. El orden define el índice.
const shirts = [
  "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/NB321.webp",
  "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/sad2w.webp",
  "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/telarana.webp",
  "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/virgen12.webp"
];

export default function CarouselDioscuro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold && currentIndex < shirts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden bg-[#e0deda]">
      
      {/* CAPA 0: Fondo base */}
      <img 
        src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/fondo123.webp" 
        alt="Fondo estético" 
        // Si usas Next.js de manera óptima, esto debería ser un componente <Image priority />
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100" 
      />

      {/* CAPA 10: Modelo de fondo */}
      <img 
        src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/original.webp" 
        alt="Modelo Base" 
        className="absolute w-[350px] md:w-[450px] object-contain z-10 pointer-events-none" 
      />

      {/* CAPA 20: Motor físico del carrusel */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        {shirts.map((src, index) => {
          const diff = index - currentIndex;
          const isCenter = diff === 0;

          return (
            <motion.img
              key={src}
              src={src}
              alt={`DIOSCURO Prenda ${index}`}
              className="absolute w-[350px] md:w-[450px] object-contain cursor-grab active:cursor-grabbing"
              initial={false}
              animate={{
                x: diff * 220, 
                scale: isCenter ? 1 : 0.75, 
                opacity: Math.abs(diff) > 1 ? 0 : isCenter ? 1 : 0.4, 
                zIndex: isCenter ? 25 : 20,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 280, 
                damping: 25   
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            />
          );
        })}
      </div>

      {/* CAPA 30: Manos en primer plano */}
      <img 
        src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/manos.webp" 
        alt="Manos en primer plano" 
        className="absolute w-[350px] md:w-[450px] object-contain z-30 pointer-events-none drop-shadow-2xl" 
      />
      
    </div>
  );
}
