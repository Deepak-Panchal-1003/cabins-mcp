"use client";
import { useState } from "react";
import { clientList } from "../lib/clientLogos";

const doubled = [...clientList, ...clientList];

function ClientLogo({ name, logoUrl, fallbackBg, fallbackText }: {
  name: string;
  logoUrl: string;
  fallbackBg: string;
  fallbackText: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Fallback badge when image not yet uploaded
    const abbr = name.split(" ").map(w => w[0]).join("").slice(0, 4).toUpperCase();
    return (
      <div
        className="w-full h-14 rounded-lg flex items-center justify-center font-bold text-base"
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
      className="w-full h-14 object-contain"
      onError={() => setImgError(true)}
    />
  );
}

export default function ClientsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mt-2">Our Clients</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Delivering Excellence with Business and Clients
          </p>
          <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded" />
        </div>

        {/* Scrolling marquee */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-5"
            style={{
              animation: paused ? "none" : "marquee 40s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                className="flex-shrink-0 w-44 bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-5 flex flex-col items-center gap-3 hover:shadow-md hover:border-[#e8a020]/40 transition-all"
              >
                <ClientLogo
                  name={client.name}
                  logoUrl={client.logoUrl}
                  fallbackBg={client.fallbackBg}
                  fallbackText={client.fallbackText}
                />
                <p className="text-center text-gray-600 text-xs font-medium leading-tight">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
