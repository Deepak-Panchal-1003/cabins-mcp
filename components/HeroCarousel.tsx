"use client";
import { useState, useEffect } from "react";

// All images are real portable-cabin / industrial-site photos from Unsplash
const slides = [
  {
    title: "Premium Portable Cabins",
    description:
      "High-quality metal portable cabins built for durability, comfort, and versatility. Ideal for offices, security checkpoints, and more.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=800&fit=crop&q=80",
    bg: "from-[#1a3c5e] to-[#2d6a9f]",
    label: "Portable Cabins",
    link: "/products/portable-cabins",
  },
  {
    title: "Portable Office Cabins",
    description:
      "Transform any construction site or remote location into a fully functional, professional workspace with our insulated office cabins.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&h=800&fit=crop&q=80",
    bg: "from-[#1a2d1a] to-[#2d5a2d]",
    label: "Office Cabins",
    link: "/products/portable-office-cabins",
  },
  {
    title: "Cargo Containers",
    description:
      "Heavy-duty, weather-proof cargo containers for secure storage and transportation of equipment, goods, and materials across India.",
    image:
      "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1400&h=800&fit=crop&q=80",
    bg: "from-[#2d1a0e] to-[#6b3a1f]",
    label: "Cargo Containers",
    link: "/products/cargo-containers",
  },
  {
    title: "Bunk Houses & Labour Camps",
    description:
      "Safe, comfortable, and fully insulated bunk houses and living accommodation units for workers at remote industrial sites.",
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1400&h=800&fit=crop&q=80",
    bg: "from-[#1a1a3c] to-[#2d2d6a]",
    label: "Bunk Houses",
    link: "/products/bunk-houses",
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
    <div className="relative w-full h-[88vh] min-h-[520px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background product image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient overlay — slightly heavier so text is always readable */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} opacity-80`}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <span className="inline-block bg-[#e8a020] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  {slide.label}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-8 py-3.5 rounded-md transition-colors shadow-lg"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href={slide.link}
                    className="border-2 border-white/80 text-white hover:bg-white hover:text-[#1a3c5e] font-bold px-8 py-3.5 rounded-md transition-colors"
                  >
                    View Product
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#e8a020] text-white rounded-full p-3 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#e8a020] text-white rounded-full p-3 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide counter + dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full ${
              i === current
                ? "bg-[#e8a020] w-8 h-3"
                : "bg-white/50 hover:bg-white/80 w-3 h-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide number */}
      <div className="absolute bottom-7 right-6 z-20 text-white/60 text-sm font-medium">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
