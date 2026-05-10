import HeroSection from "./landing/components/home/hero";
import CategoriesSection from "./landing/components/home/categories";
import ProductsSection from "./landing/components/home/products";
import CtaSection from "./landing/components/home/cta";
import { getAllCategories } from "./services/category.service";
import { getAllProducts } from "./services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
      <CtaSection />
    </main>
  );
}

