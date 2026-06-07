"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { toast } from "react-toastify";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductsProps = {
  products: Product[];
};

const ProductsSection = ({ products }: TProductsProps) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);

    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <section id="products-section" className="container mx-auto mt-20 lg:mt-32 px-4 lg:px-0">
      <h2 className="font-bold italic text-3xl lg:text-4xl text-center mb-11">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300 group"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative overflow-hidden">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain group-hover:scale-110 duration-500"
              />
              <Button
                className="w-10 h-10 p-2! absolute right-3 top-3 opacity-0 group-hover:opacity-100 duration-300 translate-y-2 group-hover:translate-y-0"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category.name}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;