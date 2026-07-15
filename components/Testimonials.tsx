"use client";
import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Manager",
    company: "Hindustan Constructions",
    text: "MP Cabins delivered our site office on time and the quality exceeded our expectations. The cabin is well-insulated and the team was very professional throughout.",
    rating: 5,
    avatar: "RK",
    color: "bg-blue-500",
  },
  {
    name: "Suresh Reddy",
    role: "Factory Owner",
    company: "Vizag Industries Ltd.",
    text: "We ordered 10 security cabins for our factory premises. The build quality is excellent and the price was very competitive. Highly recommended for any industrial need!",
    rating: 5,
    avatar: "SR",
    color: "bg-green-500",
  },
  {
    name: "Priya Sharma",
    role: "Event Organizer",
    company: "Events & More",
    text: "The portable restaurant setup was perfect for our outdoor food festival. Easy to assemble and looked very professional. Will definitely order again for future events.",
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
  {
    name: "Anil Mehta",
    role: "Project Director",
    company: "GMR Group",
    text: "Exceptional craftsmanship and on-time delivery. The bunk houses supplied for our remote site were of outstanding quality. Our workers are very satisfied.",
    rating: 5,
    avatar: "AM",
    color: "bg-teal-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — Product image + testimonials */}
          <div className="relative bg-[#1a3c5e] p-10 lg:p-14 flex flex-col justify-between min-h-[520px]">
            {/* Background image overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop)" }}
            />
            <div className="relative z-10">
              <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
                What Our Customers Say
              </h2>

              {/* Testimonial Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote icon */}
                <svg className="w-8 h-8 text-[#e8a020] mb-3 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-white/90 leading-relaxed mb-5 text-sm">"{t.text}"</p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/60 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-white/40 hover:border-[#e8a020] hover:bg-[#e8a020] rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-white/40 hover:border-[#e8a020] hover:bg-[#e8a020] rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="text-white/50 text-sm ml-1">
                  {current + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Get in touch CTA */}
          <div className="bg-gray-50 p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mt-2 mb-4 leading-tight">
              Get in Touch
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Let's talk about your project!
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                {
                  icon: <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z" />,
                  text: "+91 9121164651 / +91 9121164652",
                },
                {
                  icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
                  text: "info@mpcabins.com / sales@mpcabins.com",
                },
                {
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />,
                  text: "Auto Nagar, Visakhapatnam, Andhra Pradesh",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e8a020]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-8 py-4 rounded-md transition-colors w-fit text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
