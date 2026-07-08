"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Manager",
    company: "Hindustan Constructions",
    text: "MP Cabins delivered our site office on time and the quality exceeded our expectations. The cabin is well-insulated and the team was very professional.",
    rating: 5,
    avatar: "RK",
    color: "bg-blue-500",
  },
  {
    name: "Suresh Reddy",
    role: "Factory Owner",
    company: "Vizag Industries Ltd.",
    text: "We ordered 10 security cabins for our factory premises. The build quality is excellent and the price was very competitive. Highly recommended!",
    rating: 5,
    avatar: "SR",
    color: "bg-green-500",
  },
  {
    name: "Priya Sharma",
    role: "Event Organizer",
    company: "Events & More",
    text: "The portable restaurant setup was perfect for our outdoor food festival. Easy to assemble and looked very professional. Will order again.",
    rating: 5,
    avatar: "PS",
    color: "bg-purple-500",
  },
  {
    name: "Venkata Rao",
    role: "Site Engineer",
    company: "Bharat Infrastructure",
    text: "Quick delivery, sturdy construction, and excellent after-sales support. MP Cabins has been our go-to supplier for portable offices for 3 years now.",
    rating: 5,
    avatar: "VR",
    color: "bg-orange-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-16 bg-[#1a3c5e]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#1a3c5e] text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
