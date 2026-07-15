import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2540] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Logo, Name, Social */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mpc-logo.jpg"
                alt="MP Cabins Logo"
                className="h-16 w-auto object-contain rounded-xl"
              />
              <div>
                <div className="text-white font-bold text-xl leading-tight">MP Cabins</div>
                <div className="text-gray-400 text-sm">Metal Portable Cabins</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading manufacturer of portable cabins, security cabins, cargo containers and modular structures in Visakhapatnam, Andhra Pradesh.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#1877f2] hover:bg-[#1666d4] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-[#1da1f2] hover:bg-[#1a8fd4] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#0a66c2] hover:bg-[#0958a8] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white border-b border-[#e8a020] pb-2">Contact Information</h3>
            
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#e8a020] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.84 21 3 13.16 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.23 1.01l-2.22 2.21z"/>
              </svg>
              <div className="text-gray-300 text-sm">
                <a href="tel:+919121164651" className="hover:text-[#e8a020] transition-colors block">+91 9121164651</a>
                <a href="tel:+919121164652" className="hover:text-[#e8a020] transition-colors block">+91 9121164652</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#e8a020] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div className="text-gray-300 text-sm">
                <a href="mailto:info@mpcabins.com" className="hover:text-[#e8a020] transition-colors block">info@mpcabins.com</a>
                <a href="mailto:sales@mpcabins.com" className="hover:text-[#e8a020] transition-colors block">sales@mpcabins.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#e8a020] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              <div className="text-gray-300 text-sm leading-relaxed">
                METAL PORTABLE CABINS<br />
                Apparel Park, Mutyala Garments,<br />
                Auto Nagar, Visakhapatnam,<br />
                Andhra Pradesh – 530012
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#e8a020] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
              <div className="text-gray-300 text-sm">
                07:00 AM – 19:00 PM
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white border-b border-[#e8a020] pb-2">Our Location</h3>
            <div className="rounded-xl overflow-hidden border border-gray-600 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.2!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MP Cabins Location - Auto Nagar, Visakhapatnam"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-[#0a1e35]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <div>© 2023 MP Cabins. All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#e8a020] transition-colors">Privacy Policy</Link>
            <Link href="/terms-services" className="hover:text-[#e8a020] transition-colors">Terms &amp; Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
