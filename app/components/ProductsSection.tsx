"use client";
import Link from "next/link";

const products = [
  {
    name: "Portable Cabins",
    slug: "portable-cabins",
    description:
      "Portable cabins are small, self-contained structures that can be easily transported and installed in different locations. Commonly used for temporary accommodation, offices, classrooms, and storage units.",
    image: "/Portable-Cabin1.jpg",
    fallback: "/Group-42762.png",
  },
  {
    name: "Portable Office Cabins",
    slug: "portable-office-cabins",
    description:
      "Portable office cabins are specifically designed to provide functional and convenient office space in various locations. These cabins offer a flexible and efficient solution for businesses that require temporary or mobile workspaces.",
    image: "/Portable-Office-Cabin-1.png",
    fallback: "/Prefab-Office-cabin-1.jpg",
  },
  {
    name: "Security Cabins",
    slug: "portable-security-cabins",
    description:
      "Security cabins, also known as guard cabins or guardhouses, are small structures designed to provide a secure and controlled space for security personnel at various locations. These cabins serve as a central monitoring point.",
    image: "/Group-42764.png",
    fallback: "/Group-42762.png",
  },
  {
    name: "Portable Restaurants",
    slug: "portable-restaurant",
    description:
      "Portable restaurants, also known as food trucks or mobile food units, are movable food establishments that offer a range of culinary options in different locations. Typically housed in trucks, trailers, or specially fabricated structures.",
    image: "/Group-42769.png",
    fallback: "/Group-42771.png",
  },
  {
    name: "Cargo Containers",
    slug: "cargo-containers",
    description:
      "Cargo containers are large, standardised metal boxes used for transporting goods by sea, land, or rail. They play a crucial role in global trade and logistics, and are increasingly repurposed for storage and accommodation.",
    image: "/Group-42766.png",
    fallback: "/Group-42762.png",
  },
  {
    name: "Bunk Houses",
    slug: "bunk-houses",
    description:
      "We offer superior quality Bunk Houses designed by our professionals using high-grade materials to ensure flawlessness at the user's end. All electrical wiring is concealed for safety and neat appearance.",
    image: "/portable-bunk-house-500x500-1.webp",
    fallback: "/Group-42772.png",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mt-2">Our Services</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            Explore our wide range of high-quality portable cabin solutions designed to meet every need.
          </p>
          <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded"></div>
          <p className="text-xl font-semibold text-gray-700 mt-5">Our Products</p>
        </div>

        {/* 3-column × 2-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              {/* Product Image */}
              <div className="overflow-hidden h-52 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const t = e.currentTarget;
                    if (t.src !== window.location.origin + product.fallback) {
                      t.src = product.fallback;
                    }
                  }}
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1a3c5e] mb-2 group-hover:text-[#e8a020] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1 text-[#e8a020] font-semibold text-sm hover:gap-2 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products/portable-cabins"
            className="inline-flex items-center gap-2 border-2 border-[#1a3c5e] text-[#1a3c5e] hover:bg-[#1a3c5e] hover:text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
