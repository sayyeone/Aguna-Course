import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import CtaSection from "./components/home/cta";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

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

