"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Premium Portable Cabins",
    description: "High-quality metal portable cabins built for durability, comfort, and versatility. Ideal for offices, security checkpoints, and more.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&fit=crop",
    bg: "from-[#1a3c5e] to-[#2d6a9f]",
  },
  {
    title: "Portable Office Solutions",
    description: "Transform any location into a professional workspace with our state-of-the-art portable office cabins.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&h=700&fit=crop",
    bg: "from-[#2d3748] to-[#4a5568]",
  },
  {
    title: "Cargo Containers & Bunk Houses",
    description: "Sturdy, weather-resistant cargo containers and bunk house accommodations for industrial and residential needs.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&h=700&fit=crop",
    bg: "from-[#1a4731] to-[#276749]",
  },
  {
    title: "Custom Built to Your Needs",
    description: "From portable kitchens to luxury gazebos — we design and manufacture to your exact specifications.",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1400&h=700&fit=crop",
    bg: "from-[#5a2d0c] to-[#8b4513]",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} opacity-75`} />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <div className="max-w-2xl">
                <span className="inline-block bg-[#e8a020] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                  Metal Portable Cabins
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-semibold px-8 py-3 rounded-md transition-colors"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="/products/portable-cabins"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1a3c5e] font-semibold px-8 py-3 rounded-md transition-colors"
                  >
                    Explore Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-[#e8a020] scale-125" : "bg-white/60 hover:bg-white"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
