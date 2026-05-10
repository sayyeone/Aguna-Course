"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { toast } from "react-toastify";
import { useCart } from "@/app/context/cart-context";

const productList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    price: 440000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn Product 5",
    category: "Running",
    price: 550000,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Product 6",
    category: "Running",
    price: 650000,
    imgUrl: "product-6.png",
  },
];

const ProductsSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      name: product.name,
      category: product.category,
      price: product.price,
      qty: 1,
      imgUrl: product.imgUrl,
    });

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
        {productList.map((product, index) => (
          <Link
            href={`/product/${index + 1}`}
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300 group"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative overflow-hidden">
              <Image
                src={`/images/products/${product.imgUrl}`}
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
              <div className="text-gray-500">{product.category}</div>
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