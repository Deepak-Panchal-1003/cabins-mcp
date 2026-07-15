import Link from "next/link";

export const metadata = {
  title: "Terms & Services – MP Cabins",
};

export default function TermsServicesPage() {
  return (
    <main>
      <section className="bg-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#e8a020]">Home</Link>
            <span>/</span>
            <span className="text-[#e8a020]">Terms &amp; Services</span>
          </div>
          <h1 className="text-4xl font-bold">Terms &amp; Services</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-gray-700">
          <p className="text-gray-500 text-sm mb-6">Last updated: January 1, 2023</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing and using the MP Cabins website or services, you accept and agree to be bound by these Terms and Services. If you do not agree to these terms, please do not use our services.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">2. Products and Services</h2>
          <p className="mb-4">All products are manufactured to order. Final specifications, dimensions, and pricing will be confirmed in writing before production begins. MP Cabins reserves the right to modify product specifications for quality improvement purposes.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">3. Payment Terms</h2>
          <p className="mb-4">Payment terms are as agreed in the purchase order. Standard terms require an advance payment before production. Final payment is due before dispatch unless otherwise agreed in writing.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">4. Delivery</h2>
          <p className="mb-4">Delivery timelines are estimates and may vary based on order complexity, material availability, and logistics. MP Cabins will make reasonable efforts to meet agreed delivery schedules.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">5. Warranty</h2>
          <p className="mb-4">Our products are warranted against manufacturing defects for a period of 12 months from the date of delivery, subject to normal use and proper maintenance.</p>
          <h2 className="text-xl font-bold text-[#1a3c5e] mb-3">6. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:info@mpcabins.com" className="text-[#e8a020]">info@mpcabins.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
