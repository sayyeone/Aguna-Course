"use client";

import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/cart-context";

const CartItems = () => {
  const { push } = useRouter();
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <CardWithHeader title="Cart Items">
      {cart.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          Your cart is empty.{" "}
          <button
            onClick={() => push("/")}
            className="text-primary font-medium hover:underline"
          >
            Go shopping
          </button>
        </div>
      ) : (
        <>
          <div className="overflow-auto max-h-[400px]">
            {cart.map((item, index) => (
              <div className="border-b border-gray-200 p-4 flex gap-3 hover:bg-gray-50 duration-200" key={index}>
                <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                  <Image
                    src={`/images/products/${item.imgUrl}`}
                    width={63}
                    height={63}
                    alt={item.name}
                    className="aspect-square object-contain"
                  />
                </div>
                <div className="self-center">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="flex gap-3 font-medium text-xs">
                    <div>{item.qty}x</div>
                    <div className="text-primary">{priceFormatter(item.price)}</div>
                  </div>
                </div>
                <button
                  className="w-7 h-7 self-center ml-auto text-gray-400 hover:text-primary transition-colors"
                  onClick={() => removeFromCart(index)}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between font-semibold">
              <div className="text-sm">Total</div>
              <div className="text-primary text-xs">
                {priceFormatter(totalPrice)}
              </div>
            </div>
            <Button
              variant="dark"
              className="w-full mt-4"
              onClick={() => push("/payment")}
            >
              <FiCreditCard />
              Proceed to Payment
            </Button>
          </div>
        </>
      )}
    </CardWithHeader>
  );
};

export default CartItems;
