"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience in Industry and Manufacture" },
  { value: 1650, suffix: "+", label: "Successfully Completed Massive Projects" },
  { value: 180, suffix: "+", label: "Industry and Manufacturing Experts" },
  { value: 90, suffix: "+", label: "Awards for Best Industry and Manufacturing" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-[#e8a020]">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — 2×2 stats cards */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100"
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 text-sm mt-3 leading-snug font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* RIGHT — company intro */}
          <div>
            <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mt-2 mb-1 leading-tight">
              Industry Passion Meets Productivity
            </h2>
            <p className="text-gray-500 font-medium mb-4 italic">
              Manufacturers of Portable Cabins in Visakhapatnam, Andhra Pradesh
            </p>
            <div className="w-14 h-1 bg-[#e8a020] rounded mb-5"></div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 2015, we, Metal Portable Cabin have carved a niche as manufacturer in the 
              industry due to its extended efforts to bring out a flawless range of Portable Cabin. Our 
              product range includes Portable Cabin, MS Porta Cabin and Portable Mobile Toilet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our products are used in various industrial applications. The products supplied by us have 
              attained huge acceptance due to their durability, operational reliability, sturdy construction 
              and economical prices.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1a3c5e] hover:bg-[#153050] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
