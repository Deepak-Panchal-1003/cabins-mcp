"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const products = [
  { name: "Portable Cabins",               slug: "portable-cabins" },
  { name: "Portable Office Cabins",        slug: "portable-office-cabins" },
  { name: "Portable Security Cabins",      slug: "portable-security-cabins" },
  { name: "Portable Restaurant",           slug: "portable-restaurant" },
  { name: "Mobile Office",                slug: "mobile-office" },
  { name: "Cargo Containers",             slug: "cargo-containers" },
  { name: "Bunk Houses",                  slug: "bunk-houses" },
  { name: "Toilet Cabins",               slug: "toilet-cabins" },
  { name: "Portable Kitchen",            slug: "portable-kitchen" },
  { name: "Portable Living Accommodation",slug: "portable-living-accommodation" },
  { name: "Gazebos",                     slug: "gazebos" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${
        isActive(href) ? "text-[#e8a020]" : "text-gray-900 hover:text-[#e8a020]"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">

      {/* ── TOP BAR — black ───────────────────────────────────────── */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-sm">

          {/* Left — location + emails */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Location */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#e8a020] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              <span className="text-gray-300 text-xs font-medium">Vishakapatnam Andhra Pradesh</span>
            </div>

            {/* Email 1 */}
            <a href="mailto:info@mpcabins.com" className="flex items-center gap-1.5 text-gray-300 hover:text-[#e8a020] transition-colors text-xs font-medium">
              <svg className="w-4 h-4 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@mpcabins.com
            </a>

            {/* Email 2 */}
            <a href="mailto:sales@mpcabins.com" className="flex items-center gap-1.5 text-gray-300 hover:text-[#e8a020] transition-colors text-xs font-medium">
              <svg className="w-4 h-4 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              sales@mpcabins.com
            </a>
          </div>

          {/* Right — phones */}
          <div className="flex flex-wrap items-center gap-5">
            <a href="tel:+919121164651" className="flex items-center gap-1.5 text-gray-300 hover:text-[#e8a020] transition-colors text-xs font-medium">
              <svg className="w-4 h-4 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              +91 9121164651
            </a>
            <a href="tel:+919121164652" className="flex items-center gap-1.5 text-gray-300 hover:text-[#e8a020] transition-colors text-xs font-medium">
              <svg className="w-4 h-4 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              +91 9121164652
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR — white ──────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between min-h-[70px]">

          {/* Logo only — no text */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mpc-logo.jpg"
              alt="MP Cabins"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop nav — centered ──────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">

            {/* HOME */}
            <Link
              href="/"
              className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${
                isActive("/") ? "text-[#e8a020]" : "text-gray-900 hover:text-[#e8a020]"
              }`}
            >
              Home
            </Link>

            {/* ABOUT US */}
            {navLink("/about", "About Us")}

            {/* PRODUCTS dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${
                  pathname.startsWith("/products") ? "text-[#e8a020]" : "text-gray-900 hover:text-[#e8a020]"
                }`}
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-100 rounded-xl z-50 overflow-hidden py-1">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#e8a020] hover:text-white transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* GALLERY */}
            {navLink("/gallery", "Gallery")}

            {/* CLIENTS */}
            {navLink("/clients", "Clients")}

            {/* CONTACT US */}
            {navLink("/contact", "Contact Us")}
          </nav>

          {/* SEND INQUIRY button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-6 py-3 rounded-md transition-colors tracking-widest text-sm uppercase shadow"
            >
              Send Inquiry
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
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
            <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

            <div>
              <button
                className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#e8a020] py-1 flex items-center gap-1 w-full transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-2 border-l-2 border-[#e8a020]/40">
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

            <Link href="/gallery" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/clients" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Clients</Link>
            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#e8a020] py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <Link
              href="/contact"
              className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-bold px-6 py-3 rounded-md text-center text-sm tracking-widest uppercase transition-colors mt-1"
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
