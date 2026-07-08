"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  { name: "Portable Cabins",              slug: "portable-cabins" },
  { name: "Portable Office Cabins",       slug: "portable-office-cabins" },
  { name: "Portable Security Cabins",     slug: "portable-security-cabins" },
  { name: "Portable Restaurant",          slug: "portable-restaurant" },
  { name: "Mobile Office",               slug: "mobile-office" },
  { name: "Cargo Containers",            slug: "cargo-containers" },
  { name: "Bunk Houses",                 slug: "bunk-houses" },
  { name: "Toilet Cabins",              slug: "toilet-cabins" },
  { name: "Portable Kitchen",           slug: "portable-kitchen" },
  { name: "Portable Living Accommodation", slug: "portable-living-accommodation" },
  { name: "Gazebos",                    slug: "gazebos" },
];

const navLinkClass =
  "relative text-base font-semibold text-gray-700 hover:text-[#e8a020] transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#e8a020] after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-lg sticky top-0 z-50">

      {/* ── Top info bar ──────────────────────────────────────────── */}
      <div className="bg-[#1a3c5e] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          {/* Location */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>

          {/* Emails & phones */}
          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:info@mpcabins.com" className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@mpcabins.com
            </a>
            <a href="mailto:sales@mpcabins.com" className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              sales@mpcabins.com
            </a>
            <a href="tel:+919121164651" className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              +91 9121164651
            </a>
            <a href="tel:+919121164652" className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              +91 9121164652
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ──────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-[#1a3c5e] rounded-full flex items-center justify-center shadow">
              <span className="text-white font-extrabold text-base">MP</span>
            </div>
            <div>
              <div className="text-[#1a3c5e] font-extrabold text-xl leading-tight tracking-tight">MP Cabins</div>
              <div className="text-gray-400 text-xs tracking-wide">Metal Portable Cabins</div>
            </div>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-10">

            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/about" className={navLinkClass}>About Us</Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`${navLinkClass} flex items-center gap-1`}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="currentColor" viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-68 bg-white shadow-2xl border border-gray-100 rounded-xl z-50 overflow-hidden">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#e8a020] hover:text-white transition-colors border-b border-gray-50 last:border-0"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className={navLinkClass}>Gallery</Link>
            <Link href="/clients" className={navLinkClass}>Clients</Link>
            <Link href="/contact" className={navLinkClass}>Contact Us</Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-6 py-2.5 rounded-md transition-colors text-base shadow-sm whitespace-nowrap"
            >
              Send Inquiry
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* ── Mobile Menu ───────────────────────────────────────── */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 px-6 py-5 flex flex-col gap-4 bg-white">
            <Link href="/" className="text-base font-semibold text-gray-700 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-base font-semibold text-gray-700 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

            <div>
              <button
                className="text-base font-semibold text-gray-700 hover:text-[#e8a020] py-1 flex items-center gap-1 w-full transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-2 border-l-2 border-[#e8a020]/30 ml-1">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="text-sm font-medium text-gray-600 py-1.5 hover:text-[#e8a020] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-base font-semibold text-gray-700 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/clients" className="text-base font-semibold text-gray-700 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Clients</Link>
            <Link href="/contact" className="text-base font-semibold text-gray-700 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <Link
              href="/contact"
              className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-6 py-3 rounded-md text-center text-base transition-colors mt-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Send Inquiry
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
