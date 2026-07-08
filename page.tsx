import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import SkillsSection from "./components/SkillsSection";
import ClientsSection from "./components/ClientsSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <ProductsSection />
      <SkillsSection />
      <ClientsSection />
      <Testimonials />
    </main>
  );
}
