import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-20 px-4 lg:px-0">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <h2 className="font-bold text-2xl text-dark">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium hover:underline">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-12 mt-8">
        {categories?.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center hover:shadow-md transition-shadow group cursor-pointer"
            key={category._id}
          >
            <div className="self-center text-center">
              <div className="relative w-20 h-20 mb-3 mx-auto">
                <Image
                  src={getImageUrl(category.imageUrl)}
                  fill
                  alt={category.name}
                  className="object-contain group-hover:scale-110 duration-300"
                />
              </div>
              <div className="text-primary font-semibold text-base lg:text-lg">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;