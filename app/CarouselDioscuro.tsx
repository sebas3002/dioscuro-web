"use client";
import { useState, useEffect } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Endpoints de Supabase y nombres de las playeras.
const shirts = [
  {
    src: "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/NB321.webp",
    name: "STREET MAFIA - SPIDER",
    price: "$370 MXN"
  },
  {
    src: "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/sad2w.webp",
    name: "SADBOY ESSENTIAL",
    price: "$350 MXN"
  },
  {
    src: "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/telarana.webp",
    name: "WEBS OF DECEIT",
    price: "$390 MXN"
  },
  {
    src: "https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/virgen12.webp",
    name: "HOLY MOTHER",
    price: "$420 MXN"
  }
];

export default function CarouselDioscuro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Bucle infinito para los índices
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % shirts.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + shirts.length) % shirts.length);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  // Animación sutil de "respiración" para indicar interactividad cuando no se está haciendo hover
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
      });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  }, [isHovered, controls]);

  return (
    <div 
      className="relative w-full h-[700px] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor del Carrusel */}
      <div className="relative w-full max-w-md h-[450px] flex items-center justify-center perspective-1000">
        
        {/* Playera Anterior (Fondo Izquierda) */}
        <motion.img
          key={`prev-${currentIndex}`}
          src={shirts[(currentIndex - 1 + shirts.length) % shirts.length].src}
          className="absolute w-48 h-auto opacity-30 blur-[2px] -translate-x-32 scale-75 select-none pointer-events-none"
          initial={{ opacity: 0, x: -100, scale: 0.5 }}
          animate={{ opacity: 0.3, x: -120, scale: 0.75 }}
          transition={{ duration: 0.4 }}
        />

        {/* Playera Central (Activa) */}
        <motion.div
          key={`current-${currentIndex}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="relative z-10 cursor-grab active:cursor-grabbing drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={shirts[currentIndex].src}
            alt={shirts[currentIndex].name}
            className="w-72 h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            draggable="false"
          />
        </motion.div>

        {/* Playera Siguiente (Fondo Derecha) */}
        <motion.img
          key={`next-${currentIndex}`}
          src={shirts[(currentIndex + 1) % shirts.length].src}
          className="absolute w-48 h-auto opacity-30 blur-[2px] translate-x-32 scale-75 select-none pointer-events-none"
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          animate={{ opacity: 0.3, x: 120, scale: 0.75 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Información de la Playera Activa */}
      <div className="mt-8 flex flex-col items-center text-white text-center z-20">
        <motion.h2 
          key={`name-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-widest uppercase mb-1"
        >
          {shirts[currentIndex].name}
        </motion.h2>
        <motion.p 
          key={`price-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-gray-400 mb-6"
        >
          {shirts[currentIndex].price}
        </motion.p>

        {/* Controles e Indicador de Interacción */}
        <div className="flex items-center gap-6">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">
            Desliza
          </span>

          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Botón de Compra */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-12 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors"
        >
          Comprar Ahora
        </motion.button>
      </div>
    </div>
  );
}
