import Link from "next/link";

export const metadata = {
  title: "Gallery – MP Cabins",
  description: "View our gallery of portable cabins, office units, security cabins and more.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", caption: "Portable Office Cabin" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop", caption: "Site Office Unit" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", caption: "Cargo Container" },
  { src: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600&h=400&fit=crop", caption: "Portable Kitchen" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop", caption: "Security Cabin" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop", caption: "Bunk House" },
  { src: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=600&h=400&fit=crop", caption: "Mobile Office" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop", caption: "Portable Living Accommodation" },
  { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop", caption: "Gazebo Structure" },
];

export default function GalleryPage() {
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
          <p className="text-gray-300 mt-3 text-lg">Browse our portfolio of completed portable cabin projects.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#1a3c5e]/0 group-hover:bg-[#1a3c5e]/40 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white px-4 py-3">
                  <p className="font-semibold text-[#1a3c5e]">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
