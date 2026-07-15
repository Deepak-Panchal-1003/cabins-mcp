import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – MP Cabins",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <span className="text-[#e8a020]">Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg text-gray-700">
          <p className="text-gray-500 text-sm mb-6">Last updated: January 1, 2023</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as when you fill out a contact form, send an inquiry, or contact us by phone or email. This may include your name, phone number, email address, and company details.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to respond to your inquiries, provide product information, process orders, and improve our services. We do not sell or rent your personal information to third parties.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">3. Data Security</h2>
          <p className="mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@mpcabins.com" className="text-[#e8a020]">info@mpcabins.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
