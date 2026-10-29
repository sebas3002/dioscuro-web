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
      className="relative w-full min-h-[900px] md:min-h-[1100px] flex flex-col items-center justify-center overflow-hidden bg-[#e0deda] py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-7xl h-[550px] md:h-[800px] flex items-center justify-center perspective-1000 mb-10">
        
        <img 
          src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/original.webp" 
          alt="Modelo Base" 
          className="absolute w-[95%] sm:w-[450px] md:w-[600px] lg:w-[700px] h-full object-contain z-10 pointer-events-none" 
        />

        <motion.img
          key={`prev-${currentIndex}`}
          src={shirts[(currentIndex - 1 + shirts.length) % shirts.length].src}
          className="absolute w-64 md:w-96 lg:w-[450px] h-full object-contain opacity-30 blur-[2px] -translate-x-[35%] md:-translate-x-56 lg:-translate-x-80 scale-75 select-none pointer-events-none z-15"
          initial={{ opacity: 0, x: -100, scale: 0.5 }}
          animate={{ opacity: 0.3, x: -140, scale: 0.75 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          key={`current-wrapper-${currentIndex}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="absolute z-20 cursor-grab active:cursor-grabbing flex items-center justify-center w-full h-full"
        >
          <motion.img
            key={`current-img-${currentIndex}`}
            src={shirts[currentIndex].src}
            alt={shirts[currentIndex].name}
            className="w-[95%] sm:w-[450px] md:w-[600px] lg:w-[700px] h-full object-contain select-none pointer-events-none drop-shadow-[0_0_20px_rgba(0,0,0,0.25)]"
            draggable="false"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.img
          key={`next-${currentIndex}`}
          src={shirts[(currentIndex + 1) % shirts.length].src}
          className="absolute w-64 md:w-96 lg:w-[450px] h-full object-contain opacity-30 blur-[2px] translate-x-[35%] md:translate-x-56 lg:translate-x-80 scale-75 select-none pointer-events-none z-15"
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          animate={{ opacity: 0.3, x: 140, scale: 0.75 }}
          transition={{ duration: 0.4 }}
        />

        <img 
          src="https://vheznlfbhpwzthwklbid.supabase.co/storage/v1/object/public/contenido-dioscuro/contenido-web/manos.webp" 
          alt="Manos" 
          className="absolute w-[95%] sm:w-[450px] md:w-[600px] lg:w-[700px] h-full object-contain z-30 pointer-events-none drop-shadow-2xl" 
        />
      </div>

      <div className="relative z-40 flex flex-col items-center text-black text-center mt-4 md:mt-12">
        <motion.h2 
          key={`name-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-black tracking-widest uppercase mb-2"
        >
          {shirts[currentIndex].name}
        </motion.h2>
        <motion.p 
          key={`price-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-bold text-gray-700 mb-8 md:mb-10"
        >
          {shirts[currentIndex].price}
        </motion.p>

        <div className="flex items-center gap-8 md:gap-12">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>
          
          <span className="text-sm md:text-base tracking-[0.3em] font-extrabold text-gray-800 uppercase select-none">
            Desliza
          </span>

          <button 
            onClick={nextSlide}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 md:mt-12 px-16 md:px-20 py-5 bg-black text-white font-extrabold uppercase tracking-widest text-base hover:bg-gray-800 transition-colors cursor-pointer shadow-2xl"
        >
          Comprar Ahora
        </motion.button>
      </div>
    </div>
  );
}
