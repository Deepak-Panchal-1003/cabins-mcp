import Link from "next/link";

export const metadata = {
  title: "Contact Us – MP Cabins",
  description: "Get in touch with MP Cabins for inquiries, quotes, and support.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <span className="text-[#e8a020]">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-300 mt-3 text-lg">We'd love to hear from you. Send us your inquiry today.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1a3c5e] mb-6">Send Us an Inquiry</h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                <select
                  id="product"
                  name="product"
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] focus:border-transparent"
                >
                  <option value="">Select a product...</option>
                  <option>Portable Cabins</option>
                  <option>Portable Office Cabins</option>
                  <option>Portable Security Cabins</option>
                  <option>Portable Restaurant</option>
                  <option>Mobile Office</option>
                  <option>Cargo Containers</option>
                  <option>Bunk Houses</option>
                  <option>Toilet Cabins</option>
                  <option>Portable Kitchen</option>
                  <option>Portable Living Accommodation</option>
                  <option>Gazebos</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your requirements..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#e8a020] hover:bg-[#d4911a] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#1a3c5e] mb-6">Get In Touch</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>,
                    label: "Phone",
                    content: (<><a href="tel:+919121164651" className="text-gray-600 hover:text-[#1a3c5e]">+91 9121164651</a><br /><a href="tel:+919121164652" className="text-gray-600 hover:text-[#1a3c5e]">+91 9121164652</a></>),
                  },
                  {
                    icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>,
                    label: "Email",
                    content: (<><a href="mailto:info@mpcabins.com" className="text-gray-600 hover:text-[#1a3c5e]">info@mpcabins.com</a><br /><a href="mailto:sales@mpcabins.com" className="text-gray-600 hover:text-[#1a3c5e]">sales@mpcabins.com</a></>),
                  },
                  {
                    icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>,
                    label: "Address",
                    content: <span className="text-gray-600">METAL PORTABLE CABINS, Apparel Park, Mutyala Garments, Auto Nagar, Visakhapatnam, Andhra Pradesh – 530012</span>,
                  },
                  {
                    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>,
                    label: "Working Hours",
                    content: <span className="text-gray-600">07:00 AM – 19:00 PM (Mon–Sat)</span>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a3c5e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a3c5e]" fill="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a3c5e] text-sm">{item.label}</div>
                      <div className="text-sm mt-0.5">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.2!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MP Cabins Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
