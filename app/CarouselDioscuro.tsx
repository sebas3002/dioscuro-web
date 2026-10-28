"use client";
import { useState, useEffect } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="relative w-full min-h-[850px] flex flex-col items-center justify-center overflow-hidden bg-[#e0deda] py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BLOQUE VISUAL: MODELO Y CARRUSEL */}
      <div className="relative w-full max-w-md h-[450px] flex items-center justify-center perspective-1000 mb-10">
        
        {/* CAPA 10: Modelo Base */}
        <img 
          src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/original.webp" 
          alt="Modelo Base" 
          className="absolute w-[350px] md:w-[450px] object-contain z-10 pointer-events-none" 
        />

        {/* CAPA 20: Playeras */}
        <motion.img
          key={`prev-${currentIndex}`}
          src={shirts[(currentIndex - 1 + shirts.length) % shirts.length].src}
          className="absolute w-48 h-auto opacity-30 blur-[2px] -translate-x-32 scale-75 select-none pointer-events-none z-15"
          initial={{ opacity: 0, x: -100, scale: 0.5 }}
          animate={{ opacity: 0.3, x: -120, scale: 0.75 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          key={`current-wrapper-${currentIndex}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="relative z-20 cursor-grab active:cursor-grabbing drop-shadow-2xl"
        >
          <motion.img
            key={`current-img-${currentIndex}`}
            src={shirts[currentIndex].src}
            alt={shirts[currentIndex].name}
            className="w-72 md:w-[350px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            draggable="false"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.img
          key={`next-${currentIndex}`}
          src={shirts[(currentIndex + 1) % shirts.length].src}
          className="absolute w-48 h-auto opacity-30 blur-[2px] translate-x-32 scale-75 select-none pointer-events-none z-15"
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          animate={{ opacity: 0.3, x: 120, scale: 0.75 }}
          transition={{ duration: 0.4 }}
        />

        {/* CAPA 30: Manos */}
        <img 
          src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/manos.webp" 
          alt="Manos" 
          className="absolute w-[350px] md:w-[450px] object-contain z-30 pointer-events-none drop-shadow-2xl" 
        />
      </div>

      {/* BLOQUE UI: TEXTO Y CONTROLES */}
      <div className="relative z-40 flex flex-col items-center text-black text-center mt-8">
        <motion.h2 
          key={`name-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-widest uppercase mb-1"
        >
          {shirts[currentIndex].name}
        </motion.h2>
        <motion.p 
          key={`price-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-md font-medium text-gray-700 mb-6"
        >
          {shirts[currentIndex].price}
        </motion.p>

        <div className="flex items-center gap-6">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          
          <span className="text-sm tracking-[0.2em] font-bold text-gray-800 uppercase select-none">
            Desliza
          </span>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-14 py-4 bg-black text-white font-extrabold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors cursor-pointer shadow-lg"
        >
          Comprar Ahora
        </motion.button>
      </div>
    </div>
  );
}
