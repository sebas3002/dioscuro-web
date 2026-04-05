'use client';
import React, { useState, useEffect } from 'react';

const heroImages = [
  '/ney-1.webp',
  '/r9-1.webp',
  '/austin-1.webp',
  '/ney-2.webp',
  '/r9-2.webp',
  '/austin-2.webp',
];

const products = [
  {
    id: 'd01-ney',
    name: 'NEYMAR JR // O PRÍNCIPE',
    price: '$350',
    productImg: '/ney-prod.webp',
  },
  {
    id: 'd01-r9',
    name: 'RONALDO R9 // O FENÔMENO',
    price: '$350',
    productImg: '/r9-prod.webp',
  },
  {
    id: 'd01-austin',
    name: 'STONE COLD // 3:16',
    price: '$350',
    productImg: '/austin-prod.webp',
  }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    heroImages[index % heroImages.length],
    heroImages[(index + 1) % heroImages.length],
    heroImages[(index + 2) % heroImages.length],
  ];

  return (
    <div className="w-full h-[75vh] flex overflow-hidden">
      {visible.map((img, i) => (
        <div key={i} className="w-1/3 h-full relative group">
          <img
            src={img}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            alt="Hero View"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-[9999] px-10 py-8 flex justify-center bg-[#0A0A0A] border-b border-zinc-800">
        <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">
          DIOSCURO <span className="text-red-600">CDMX</span>
        </h1>
      </nav>

      <main className="pt-28">

        <HeroCarousel />

        <section className="w-full flex mt-16 border-t border-zinc-900">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-1 flex flex-col items-center justify-between px-8 py-16 border-r border-zinc-900 last:border-r-0 group"
            >
              <div className="w-full h-[320px] flex items-center justify-center overflow-hidden">
                <img
                  src={product.productImg}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  alt={product.name}
                />
              </div>

              <div className="text-center mt-10 space-y-3">
                <h2 className="text-lg md:text-xl font-semibold tracking-wide text-white">
                  {product.name}
                </h2>
                <p className="text-sm text-zinc-400 tracking-wider">
                  {product.price}
                </p>
              </div>

              <button className="mt-10 px-8 py-3 border border-white text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                Comprar
              </button>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}