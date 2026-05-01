import Header from "./landing/components/layouts/header";
import Footer from "./landing/components/layouts/footer";
import HeroSection from "./landing/components/home/hero";
import CategoriesSection from "./landing/components/home/categories";
import ProductsSection from "./landing/components/home/products";
import CtaSection from "./landing/components/home/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

