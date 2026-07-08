import Link from "next/link";
import { notFound } from "next/navigation";

const allProducts = [
  {
    slug: "portable-cabins",
    name: "Portable Cabins",
    tagline: "Versatile structures for every need",
    description:
      "Our portable cabins are engineered for strength, versatility, and ease of installation. Ideal for construction sites, farms, events, and industrial applications. Built with high-grade steel frames and corrosion-resistant coatings, they withstand harsh weather conditions while providing a safe and comfortable interior.",
    features: ["Heavy-duty steel frame", "Anti-corrosion paint finish", "Quick assembly & disassembly", "Customizable size & layout", "Insulated walls & ceiling", "Electrical fittings available"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    icon: "🏗️",
  },
  {
    slug: "portable-office-cabins",
    name: "Portable Office Cabins",
    tagline: "Professional workspace anywhere",
    description:
      "Transform any location into a fully functional office. Our portable office cabins come with insulated walls, flooring, windows, doors, and complete electrical fittings. Perfect for construction site offices, project management units, and temporary corporate setups.",
    features: ["PUF insulated panels", "Air-conditioner provision", "Wooden or vinyl flooring", "Full electrical fittings", "Security door lock", "Interior workstation space"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop",
    icon: "🏢",
  },
  {
    slug: "portable-security-cabins",
    name: "Portable Security Cabins",
    tagline: "Secure and comfortable guard posts",
    description:
      "Purpose-built for security personnel, our portable security cabins offer excellent visibility, ventilation, and weatherproofing. Available in various sizes for single or double guard configurations with sliding windows and lockable doors.",
    features: ["Sliding windows on all sides", "Ventilated design", "Weather-resistant exterior", "Compact footprint", "Durable steel construction", "Optional AC fitting"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    icon: "🛡️",
  },
  {
    slug: "portable-restaurant",
    name: "Portable Restaurant",
    tagline: "Food service on the move",
    description:
      "Our portable restaurant setups are designed for food courts, outdoor events, highways, and temporary dining establishments. They include kitchen space, service counters, dining areas, and proper ventilation — all in a compact, attractive structure.",
    features: ["Kitchen & dining layout", "Exhaust ventilation system", "Food-safe interiors", "Service counter window", "Electrical & plumbing provisions", "Attractive exterior finish"],
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&h=500&fit=crop",
    icon: "🍽️",
  },
  {
    slug: "mobile-office",
    name: "Mobile Office",
    tagline: "Office that moves with your project",
    description:
      "Mobile offices are mounted on chassis for easy towing and relocation. Ideal for survey teams, highway projects, and remote operations where office infrastructure must follow the team. Fully equipped with power, lighting, and workstations.",
    features: ["Mounted on steel chassis", "Road-transportable", "Generator/battery backup", "Workstation fittings", "Air-conditioned interior", "Secure locking system"],
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&h=500&fit=crop",
    icon: "🚛",
  },
  {
    slug: "cargo-containers",
    name: "Cargo Containers",
    tagline: "Secure storage and shipping solutions",
    description:
      "Heavy-duty cargo containers fabricated from high-tensile steel for secure storage and transportation. Available in standard 10ft, 20ft, and 40ft sizes with options for shelving, lighting, and ventilation to suit warehousing, industrial, and logistics needs.",
    features: ["High-tensile steel construction", "Lockable double doors", "Weatherproof seal", "Available 10ft / 20ft / 40ft", "Optional interior shelving", "Stackable design"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop",
    icon: "📦",
  },
  {
    slug: "bunk-houses",
    name: "Bunk Houses",
    tagline: "Comfortable worker accommodation",
    description:
      "Bunk houses provide safe, comfortable sleeping and living quarters for workers at remote sites, construction camps, and industrial facilities. Multi-berth designs with proper ventilation, lighting, and sanitation provisions.",
    features: ["Multi-bunk sleeping arrangement", "PUF insulated walls", "Ventilation windows", "Electrical fittings", "Anti-skid flooring", "Durable exterior coating"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop",
    icon: "🛏️",
  },
  {
    slug: "toilet-cabins",
    name: "Toilet Cabins",
    tagline: "Hygienic sanitation anywhere",
    description:
      "Portable toilet cabins and sanitation units for construction sites, events, industrial parks, and public use. Designed for easy maintenance, hygiene, and odor control with robust plumbing provisions.",
    features: ["Corrosion-resistant steel", "Easy-clean interior surfaces", "Proper ventilation", "Plumbing provisions", "Septic tank options", "Privacy door & lock"],
    image: "https://images.unsplash.com/photo-1569952601-c2b69fce1e5c?w=800&h=500&fit=crop",
    icon: "🚿",
  },
  {
    slug: "portable-kitchen",
    name: "Portable Kitchen",
    tagline: "Fully equipped kitchens on-site",
    description:
      "Our portable kitchens are custom-fabricated for catering services, canteens, and remote site feeding. They include countertops, exhaust hoods, storage shelves, gas line provisions, and proper ventilation for safe cooking operations.",
    features: ["Stainless steel countertops", "Exhaust hood & chimney", "Gas & electrical fittings", "Ample storage space", "Easy-clean surfaces", "Custom sizing available"],
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&h=500&fit=crop",
    icon: "👨‍🍳",
  },
  {
    slug: "portable-living-accommodation",
    name: "Portable Living Accommodation",
    tagline: "Home comfort at any location",
    description:
      "Fully furnished portable living units for long-term accommodation at remote sites, labor camps, and temporary housing. Features bedroom, living area, and attached bathroom with all modern amenities.",
    features: ["Full insulation for comfort", "Attached bathroom provision", "Bedroom + living area", "Electrical & water supply", "Anti-termite flooring", "Modern interior finish"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
    icon: "🏠",
  },
  {
    slug: "gazebos",
    name: "Gazebos",
    tagline: "Elegant outdoor structures",
    description:
      "Our metal gazebos are designed for gardens, resorts, parks, and commercial outdoor spaces. They combine aesthetic appeal with structural durability, available in various shapes and sizes with decorative finishes and weather-resistant coating.",
    features: ["Ornamental steel design", "Weather-resistant coating", "Multiple size options", "Octagonal / rectangular shapes", "Roof sheet options", "Foundation mounting"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
    icon: "⛺",
  },
];

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found – MP Cabins" };
  return {
    title: `${product.name} – MP Cabins`,
    description: product.description.slice(0, 155),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const others = allProducts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 flex-wrap">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <Link href="/products/portable-cabins" className="hover:text-[#e8a020]">Products</Link>
            <span>/</span>
            <span className="text-[#e8a020]">{product.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
          <p className="text-gray-300 mt-2 text-lg">{product.tagline}</p>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
          </div>

          {/* Details */}
          <div>
            <div className="text-5xl mb-4">{product.icon}</div>
            <h2 className="text-3xl font-bold text-[#1a3c5e] mb-4">{product.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            <h3 className="text-lg font-bold text-[#1a3c5e] mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-[#e8a020] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#1a3c5e] text-[#1a3c5e] hover:bg-[#1a3c5e] hover:text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3c5e] mb-8">Other Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="font-bold text-[#1a3c5e] group-hover:text-[#e8a020] transition-colors">{p.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
