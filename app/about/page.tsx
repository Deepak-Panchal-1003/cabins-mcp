"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SkillsSection from "../components/SkillsSection";
import ClientsSection from "../components/ClientsSection";
import Testimonials from "../components/Testimonials";

/* ─── Animated counter ─────────────────────────────────────── */
function CountUp({
  target,
  prefix = "",
  suffix = "",
  separator = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 80;
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

  const display = separator ? count.toLocaleString() : count;
  return (
    <span ref={ref} className="text-5xl md:text-6xl font-extrabold text-[#e8a020]">
      {prefix}{display}{suffix}
    </span>
  );
}

/* ─── Stats data ────────────────────────────────────────────── */
const stats = [
  {
    target: 25,
    suffix: "+",
    label: "Years of Experience in Industry & Manufacture",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    target: 1650,
    suffix: "+",
    separator: true,
    label: "Successfully Completed Massive Projects",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    target: 180,
    suffix: "+",
    label: "Industry and Manufacturing Experts Team",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    target: 90,
    suffix: "+",
    label: "Awards for Best Industry and Manufacturing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

/* ─── Page ──────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>

      {/* ── 1. HERO — full-width with product image background ──── */}
      <section className="relative min-h-[420px] flex items-center">
        {/* Product image (portable cabin on site) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=600&fit=crop&q=80)",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f2540]/80" />

        {/* Content — left aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-5">
            <Link href="/" className="hover:text-[#e8a020] transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#e8a020]">About Us</span>
          </div>

          <span className="inline-block bg-[#e8a020] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Metal Portable Cabins
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-xl">
            About Us
          </h1>
          <p className="text-white/80 mt-4 text-lg max-w-lg leading-relaxed">
            Your trusted partner for premium portable cabin solutions in Visakhapatnam, Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* ── 2. STATS — 4 columns with animated counters ─────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1a3c5e] rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:bg-[#153050] transition-colors shadow-lg"
              >
                <div className="w-16 h-16 bg-[#e8a020]/20 rounded-full flex items-center justify-center text-[#e8a020]">
                  {stat.icon}
                </div>
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  separator={!!stat.separator}
                />
                <p className="text-white/80 text-sm leading-snug font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT US — full content section ───────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=560&fit=crop&q=80"
              alt="MP Cabins portable office cabin manufacturing"
              className="w-full h-[420px] object-cover"
            />
            {/* Badge */}
            <div className="absolute bottom-5 left-5 bg-[#e8a020] text-white rounded-xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-extrabold">Est. 2015</div>
              <div className="text-xs font-medium tracking-wider uppercase opacity-90">
                Visakhapatnam, AP
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3c5e] mt-2 mb-2 leading-tight">
              Industry Passion Meets Productivity
            </h2>
            <p className="text-gray-500 font-medium italic mb-5">
              Manufacturers of Portable Cabins in Visakhapatnam, Andhra Pradesh
            </p>
            <div className="w-14 h-1 bg-[#e8a020] rounded mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 2015, we, <strong>Metal Portable Cabin</strong> have carved a niche as
              manufacturer in the industry due to its extended efforts to bring out a flawless range of
              Portable Cabin. Our product range includes Portable Cabin, MS Porta Cabin and Portable
              Mobile Toilet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our products are used in various industrial applications. The products supplied by us have
              attained huge acceptance due to their durability, operational reliability, sturdy
              construction and economical prices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our Proprietor possesses vast industry knowledge, which has enabled us to cater to the
              varied demands and requirements of the huge clientele. His experience and leadership
              abilities have provided the company staff a great platform to perform.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "ISO Certified Manufacturing",
                "Premium Grade Steel",
                "Pan-India Delivery",
                "Custom Fabrication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#e8a020]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-8 py-3.5 rounded-md transition-colors"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">
              Our Core Values
            </span>
            <h2 className="text-3xl font-bold text-[#1a3c5e] mt-2">Why Clients Trust MP Cabins</h2>
            <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Manufacturing",
                desc: "We use premium steel and certified fabrication processes to ensure every cabin meets stringent quality standards.",
                icon: "🔧",
              },
              {
                title: "Timely Delivery",
                desc: "We understand the importance of project timelines and commit to on-time delivery for every order, every time.",
                icon: "⏱️",
              },
              {
                title: "Customer Support",
                desc: "Our dedicated team provides end-to-end support from design and fabrication to installation and beyond.",
                icon: "🤝",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#e8a020]/30 transition-all"
              >
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-[#1a3c5e] mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SKILLS / MISSION / VISION ─────────────────────────── */}
      <SkillsSection />

      {/* ── 6. OUR CLIENTS ───────────────────────────────────────── */}
      <ClientsSection />

      {/* ── 7. TESTIMONIALS ─────────────────────────────────────── */}
      <Testimonials />

    </main>
  );
}
