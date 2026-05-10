import Image from "next/image";
import ProductActions from "../../landing/components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";
export type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;
  
  // Since this is a server component by default, we can just await the service
  // But wait, the user's project structure might expect it to be a client component if it uses hooks.
  // Actually, I can make it async.
  return <ProductDetailContent id={id} />;
};

const ProductDetailContent = async ({ id }: { id: string }) => {
  const product = await getProductDetail(id);

  if (!product) {
    return <div className="container mx-auto py-40 text-center">Product not found</div>;
  }

  return (
    <main className="container mx-auto py-20 lg:py-40 flex flex-col lg:flex-row gap-12 px-4 lg:px-0">
      <div className="bg-primary-light aspect-square min-w-full lg:min-w-140 flex justify-center items-center rounded-xl overflow-hidden">
        <Image
          src={getImageUrl(product.imageUrl)}
          width={550}
          height={550}
          alt={product.name}
          className="aspect-square object-contain w-full hover:scale-105 duration-500"
        />
      </div>
      <div className="w-full py-0 lg:py-7">
        <h1 className="font-bold text-4xl lg:text-5xl mb-6 text-dark">{product.name}</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5 font-semibold">
          {product.category.name}
        </div>
        <p className="leading-loose mb-8 text-gray-600">
          {product.description || "The SportsOn product is engineered for the player who demands precision, power, and unrivaled speed on the pitch."}
        </p>
        <div className="text-primary text-3xl lg:text-[32px] font-bold mb-8">
          {priceFormatter(product.price)}
        </div>
        <div className="mb-5 font-medium text-gray-500">Stock Product : {product.stock}</div>
        <ProductActions product={product} stock={product.stock} />
      </div>
    </main>
  );
};

export default ProductDetail;
