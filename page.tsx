import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <ProductsSection />
      <Testimonials />
    </main>
  );
}
