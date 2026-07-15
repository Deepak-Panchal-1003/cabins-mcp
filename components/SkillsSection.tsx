"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "Quality", percent: 90 },
  { label: "Safety", percent: 95 },
  { label: "Productivity", percent: 85 },
];

const pillars = [
  {
    title: "The Mission",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: "To provide high quality products, best solutions and services, at a competitive price and achieve complete customer satisfaction.",
  },
  {
    title: "The Vision",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    text: "To become the most trusted and innovative manufacturer of portable structures in India, delivering excellence in every project.",
  },
  {
    title: "Our Infrastructure",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    text: "We are equipped with modernized infrastructure required for large scale manufacturing of the offered product range.",
  },
];

function SkillBar({ label, percent }: { label: string; percent: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => setWidth(percent), 100);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-white text-sm tracking-wide">{label}</span>
        <span className="font-bold text-white text-sm">{percent}%</span>
      </div>
      <div className="h-2.5 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="bg-[#e8a020] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

          {/* Column 1 — Skill Set + bars */}
          <div className="bg-[#d4911a] rounded-2xl p-8 shadow-lg">
            <h3 className="text-white font-bold text-xl mb-1">Skill Set</h3>
            <div className="w-10 h-0.5 bg-white/60 rounded mb-6"></div>
            {skills.map((s) => (
              <SkillBar key={s.label} label={s.label} percent={s.percent} />
            ))}
          </div>

          {/* Columns 2-4 — Mission, Vision, Infrastructure */}
          {pillars.map((p) => (
            <div key={p.title} className="bg-[#d4911a] rounded-2xl p-8 shadow-lg flex flex-col gap-4 h-full">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white">
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-xl">{p.title}</h3>
              <div className="w-10 h-0.5 bg-white/60 rounded"></div>
              <p className="text-white/90 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
