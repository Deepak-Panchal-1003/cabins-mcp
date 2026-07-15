"use client";
import Link from "next/link";
import { useState } from "react";
import { clientList } from "../lib/clientLogos";

function ClientLogo({ name, logoUrl, fallbackBg, fallbackText }: {
  name: string;
  logoUrl: string;
  fallbackBg: string;
  fallbackText: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    const abbr = name.split(" ").map(w => w[0]).join("").slice(0, 4).toUpperCase();
    return (
      <div
        className="w-full h-16 rounded-lg flex items-center justify-center font-bold text-lg"
        style={{ backgroundColor: fallbackBg, color: fallbackText }}
      >
        {abbr}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoUrl}
      alt={name}
      className="w-full h-16 object-contain group-hover:scale-105 transition-transform duration-300"
      onError={() => setImgError(true)}
    />
  );
}

export default function ClientsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <span className="text-[#e8a020]">Our Clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Our Clients</h1>
          <p className="text-gray-300 mt-3 text-lg max-w-2xl">
            Delivering Excellence with Business and Clients
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">
            Trusted Partners
          </span>
          <h2 className="text-3xl font-bold text-[#1a3c5e] mt-2 mb-4">
            Companies That Trust MP Cabins
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            We have proudly served clients across construction, infrastructure, manufacturing, government,
            and industrial sectors. Our commitment to quality and timely delivery has earned us long-term
            partnerships with leading organisations across India.
          </p>
          <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-5 rounded" />
        </div>
      </section>

      {/* Client Logo Grid — all 25 clients */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {clientList.map((client) => (
              <div
                key={client.id}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:border-[#e8a020]/40 transition-all group"
              >
                <ClientLogo
                  name={client.name}
                  logoUrl={client.logoUrl}
                  fallbackBg={client.fallbackBg}
                  fallbackText={client.fallbackText}
                />
                <p className="text-center text-gray-700 font-semibold text-xs leading-tight">
                  {client.name}
                </p>
                <span className="text-[#e8a020] text-xs font-medium bg-[#e8a020]/10 px-2 py-0.5 rounded-full">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14 bg-[#1a3c5e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1,650+", label: "Projects Completed" },
              { value: "300+",   label: "Happy Clients" },
              { value: "15+",    label: "Years of Trust" },
              { value: "90+",    label: "Industry Awards" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-[#e8a020]">{s.value}</div>
                <div className="text-white/80 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3c5e] mb-3">
            Become Our Next Success Story
          </h2>
          <p className="text-gray-500 mb-7 text-sm">
            Join hundreds of satisfied clients who trust MP Cabins for their portable structure needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e8a020] hover:bg-[#d4911a] text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Send an Inquiry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
