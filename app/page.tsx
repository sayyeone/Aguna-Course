import HeroSection from "./landing/components/home/hero";
import CategoriesSection from "./landing/components/home/categories";
import ProductsSection from "./landing/components/home/products";
import CtaSection from "./landing/components/home/cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <CtaSection />
    </main>
  );
}

