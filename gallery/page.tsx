"use client";
import Link from "next/link";
import { useState } from "react";

// All images mapped from uploaded files in /public and /public/gallery
const galleryImages = [
  {
    src: "/Portable-Cabin1.jpg",
    caption: "Portable Cabin",
    category: "Portable Cabins",
  },
  {
    src: "/Portable-Office-cabin.jpg",
    caption: "Portable Office Cabin – Interior",
    category: "Office Cabins",
  },
  {
    src: "/Portable-Office-Cabin-1.png",
    caption: "Portable Office Cabin – Workstation",
    category: "Office Cabins",
  },
  {
    src: "/Prefab-Office-cabin-1.jpg",
    caption: "Prefab Office Cabin",
    category: "Office Cabins",
  },
  {
    src: "/Office-cabins-400x284-1.jpg-1.webp",
    caption: "Office Cabin – Modern Interior",
    category: "Office Cabins",
  },
  {
    src: "/portable-bunk-house-500x500-1.webp",
    caption: "Portable Bunk House",
    category: "Bunk Houses",
  },
  {
    src: "/toilert-1.png",
    caption: "Portable Toilet Cabin",
    category: "Toilet Cabins",
  },
  // Group images uploaded alongside products
  { src: "/Group-42762.png", caption: "Portable Cabin Unit",         category: "Portable Cabins" },
  { src: "/Group-42764.png", caption: "Mobile Office Unit",          category: "Mobile Office" },
  { src: "/Group-42766.png", caption: "Cargo Container",             category: "Cargo Containers" },
  { src: "/Group-42768.png", caption: "Gazebo Structure",            category: "Gazebos" },
  { src: "/Group-42769.png", caption: "Prefab Installation",         category: "Portable Cabins" },
  { src: "/Group-42770.png", caption: "Portable Living Accommodation",category: "Living Accommodation" },
  { src: "/Group-42771.png", caption: "Container Home",              category: "Portable Cabins" },
  { src: "/Group-42772.png", caption: "Bunk House Row",              category: "Bunk Houses" },
  // Gallery images (save to /public/gallery/)
  { src: "/gallery/portable-cabin-exterior.jpg",   caption: "Portable Cabin – Exterior",            category: "Portable Cabins" },
  { src: "/gallery/office-cabin-interior-dark.jpg",caption: "Office Cabin – Interior (Dark Wood)",  category: "Office Cabins" },
  { src: "/gallery/office-cabin-interior-bright.jpg", caption: "Office Cabin – Interior (Bright)",  category: "Office Cabins" },
  { src: "/gallery/office-cubicles.jpg",           caption: "Office Cubicle Setup",                 category: "Office Cabins" },
  { src: "/gallery/mobile-office-grey.jpg",        caption: "Mobile Office Unit",                   category: "Mobile Office" },
  { src: "/gallery/prefab-building.jpg",           caption: "Large Prefab Building",                category: "Portable Cabins" },
  { src: "/gallery/cargo-containers.jpg",          caption: "Cargo Containers – Stacked",           category: "Cargo Containers" },
  { src: "/gallery/gazebo.jpg",                    caption: "Ornamental Gazebo",                    category: "Gazebos" },
  { src: "/gallery/prefab-crane.jpg",              caption: "Prefab Module Installation by Crane",  category: "Portable Cabins" },
  { src: "/gallery/portable-living-2storey.jpg",   caption: "Portable Living – 2 Storey",           category: "Living Accommodation" },
  { src: "/gallery/container-home-modern.jpg",     caption: "Modern Container Home",                category: "Portable Cabins" },
  { src: "/gallery/bunkhouse-container.jpg",       caption: "Bunk House Container Unit",            category: "Bunk Houses" },
  { src: "/gallery/toilet-cabin.jpg",              caption: "Toilet Cabin – Blue",                  category: "Toilet Cabins" },
  { src: "/gallery/portable-living-blue.jpg",      caption: "Portable Living – White & Blue",       category: "Living Accommodation" },
  { src: "/gallery/bunkhouse-row.jpg",             caption: "Bunk House Row",                       category: "Bunk Houses" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map((g) => g.category)))];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  const filtered = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);
  const visible = filtered.filter((g) => !imgErrors.has(g.src));

  const handleError = (src: string) => {
    setImgErrors((prev) => new Set(prev).add(src));
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <span className="text-[#e8a020]">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-gray-300 mt-3 text-lg">
            Browse our portfolio of completed portable cabin projects.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-[#e8a020] text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-[#e8a020]/10 hover:text-[#e8a020]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {visible.length === 0 && (
            <p className="text-center text-gray-400 py-16 text-lg">
              Images will appear once uploaded to <code>/public/gallery/</code>
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow cursor-pointer bg-white"
                onClick={() => setLightbox(img.src)}
              >
                <div className="relative overflow-hidden h-52">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleError(img.src)}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a3c5e]/0 group-hover:bg-[#1a3c5e]/50 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-[#e8a020] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
                <div className="bg-white px-4 py-3 border-t border-gray-50">
                  <p className="font-semibold text-[#1a3c5e] text-sm truncate">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#e8a020] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
