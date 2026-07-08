import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#e8a020] font-semibold uppercase tracking-widest text-sm">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mt-2">About MP Cabins</h2>
          <div className="w-16 h-1 bg-[#e8a020] mx-auto mt-4 rounded"></div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex gap-4 hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-[#1a3c5e]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1a3c5e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a3c5e] mb-2">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Metal Portable Cabins (MP Cabins) was established with a vision to provide high-quality, 
                durable, and affordable portable cabin solutions. Based in Visakhapatnam, we have grown 
                to become one of the leading manufacturers in Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex gap-4 hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-[#e8a020]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#e8a020]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a3c5e] mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver innovative, cost-effective portable structure solutions 
                that meet the highest standards of quality and safety. We are committed to customer 
                satisfaction and timely delivery across all our product lines.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex gap-4 hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a3c5e] mb-2">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of skilled engineers, designers, and craftsmen bring decades of combined 
                experience to every project. We pride ourselves on precision manufacturing and 
                attention to detail that sets our products apart.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex gap-4 hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a3c5e] mb-2">Why Choose Us</h3>
              <p className="text-gray-600 leading-relaxed">
                With ISO-certified manufacturing processes, premium steel materials, and a proven 
                track record of 500+ successful projects, MP Cabins is your trusted partner for 
                all portable structure requirements across India.
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#1a3c5e] hover:bg-[#153050] text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Read More About Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
