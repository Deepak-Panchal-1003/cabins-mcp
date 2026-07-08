"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  { name: "Portable Cabins", slug: "portable-cabins" },
  { name: "Portable Office Cabins", slug: "portable-office-cabins" },
  { name: "Portable Security Cabins", slug: "portable-security-cabins" },
  { name: "Portable Restaurant", slug: "portable-restaurant" },
  { name: "Mobile Office", slug: "mobile-office" },
  { name: "Cargo Containers", slug: "cargo-containers" },
  { name: "Bunk Houses", slug: "bunk-houses" },
  { name: "Toilet Cabins", slug: "toilet-cabins" },
  { name: "Portable Kitchen", slug: "portable-kitchen" },
  { name: "Portable Living Accommodation", slug: "portable-living-accommodation" },
  { name: "Gazebos", slug: "gazebos" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      {/* Top Row */}
      <div className="bg-[#1a3c5e] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Location */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>

          {/* Emails & Contacts */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:info@mpcabins.com" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@mpcabins.com
            </a>
            <a href="mailto:sales@mpcabins.com" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              sales@mpcabins.com
            </a>
            <a href="tel:+919121164651" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              +91 9121164651
            </a>
            <a href="tel:+919121164652" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              +91 9121164652
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row - Main Nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a3c5e] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MP</span>
            </div>
            <div>
              <div className="text-[#1a3c5e] font-bold text-lg leading-tight">MP Cabins</div>
              <div className="text-gray-500 text-xs">Metal Portable Cabins</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 font-medium hover:text-[#1a3c5e] transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-[#1a3c5e] transition-colors">About Us</Link>

            {/* Products Dropdown */}
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#1a3c5e] transition-colors">
                Products
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-100 rounded-md z-50">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1a3c5e] hover:text-white transition-colors border-b border-gray-50 last:border-0"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-gray-700 font-medium hover:text-[#1a3c5e] transition-colors">Gallery</Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-[#1a3c5e] transition-colors">Contact Us</Link>
            <Link href="/contact" className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-semibold px-5 py-2 rounded-md transition-colors">
              Send Inquiry
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 px-4 py-4 flex flex-col gap-3 bg-white">
            <Link href="/" className="text-gray-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <div>
              <button
                className="text-gray-700 font-medium py-1 flex items-center gap-1 w-full"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {products.map((p) => (
                    <Link key={p.slug} href={`/products/${p.slug}`} className="text-sm text-gray-600 py-1 hover:text-[#1a3c5e]" onClick={() => setMobileMenuOpen(false)}>
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/gallery" className="text-gray-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-gray-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <Link href="/contact" className="bg-[#e8a020] text-white font-semibold px-5 py-2 rounded-md text-center" onClick={() => setMobileMenuOpen(false)}>
              Send Inquiry
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
