import Link from "next/link";

export const metadata = {
  title: "About Us – MP Cabins",
  description: "Learn about Metal Portable Cabins – our history, mission, and team in Visakhapatnam.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <span className="text-[#e8a020]">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-gray-300 mt-3 text-lg max-w-2xl">
            Know more about Metal Portable Cabins – your trusted partner in portable structure solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">Our Company</span>
            <h2 className="text-3xl font-bold text-[#1a3c5e] mt-2 mb-4">Metal Portable Cabins – MP Cabins</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Metal Portable Cabins (MP Cabins) is a premier manufacturer based in Visakhapatnam, Andhra Pradesh. 
              We specialize in designing and fabricating a comprehensive range of portable structures including 
              office cabins, security cabins, cargo containers, bunk houses, and more.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established with a commitment to quality and innovation, we serve clients across construction, 
              industrial, commercial, and hospitality sectors. Our products are built using high-grade steel 
              and modern fabrication techniques to ensure longevity and performance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Located at Auto Nagar Industrial Estate, we have a state-of-the-art manufacturing facility 
              equipped to handle projects of all sizes — from a single unit to large fleet orders.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e8a020] hover:bg-[#d4911a] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years of Experience", value: "10+", icon: "🏆" },
              { label: "Projects Completed", value: "500+", icon: "✅" },
              { label: "Happy Clients", value: "300+", icon: "😊" },
              { label: "Product Varieties", value: "11+", icon: "🏗️" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#1a3c5e]">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">Our Core Values</span>
            <h2 className="text-3xl font-bold text-[#1a3c5e] mt-2">Why Clients Trust MP Cabins</h2>
            <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality Manufacturing", desc: "We use premium steel and certified fabrication processes to ensure every cabin meets stringent quality standards.", icon: "🔧" },
              { title: "Timely Delivery", desc: "We understand the importance of project timelines and commit to on-time delivery for every order.", icon: "⏱️" },
              { title: "Customer Support", desc: "Our dedicated team provides end-to-end support from design to installation and beyond.", icon: "🤝" },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-[#1a3c5e] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
