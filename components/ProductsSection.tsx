import Link from "next/link";

const products = [
  {
    name: "Portable Cabins",
    slug: "portable-cabins",
    description: "Versatile and durable portable cabins for various applications including site offices, storage, and temporary shelters.",
    icon: "🏗️",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    name: "Portable Office Cabins",
    slug: "portable-office-cabins",
    description: "Professional-grade office cabins with modern amenities, insulation, and electrical fittings for a productive workspace.",
    icon: "🏢",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    name: "Portable Security Cabins",
    slug: "portable-security-cabins",
    description: "Compact and sturdy security guard cabins designed for all weather conditions with ventilation and visibility.",
    icon: "🛡️",
    color: "bg-red-50 border-red-200",
    iconBg: "bg-red-100",
  },
  {
    name: "Portable Restaurant",
    slug: "portable-restaurant",
    description: "Fully equipped portable restaurant setups perfect for food courts, events, and temporary dining establishments.",
    icon: "🍽️",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    name: "Mobile Office",
    slug: "mobile-office",
    description: "Fully mobile office units that can be relocated as per project needs, ideal for construction sites.",
    icon: "🚛",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    name: "Cargo Containers",
    slug: "cargo-containers",
    description: "Heavy-duty cargo containers for secure storage and transportation of equipment, materials, and goods.",
    icon: "📦",
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100",
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
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore our wide range of high-quality portable cabin solutions designed to meet every need.
          </p>
          <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded"></div>
          <h3 className="text-xl font-semibold text-gray-700 mt-6">Our Products</h3>
        </div>

        {/* 3-column 2-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className={`border rounded-xl p-6 ${product.color} hover:shadow-lg transition-all group`}
            >
              <div className={`w-14 h-14 ${product.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a3c5e] mb-2 group-hover:text-[#e8a020] transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              <div className="mt-4 flex items-center gap-1 text-[#1a3c5e] font-medium text-sm">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
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
