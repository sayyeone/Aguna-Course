"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartPopup = ({ close }: { close?: () => void }) => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    push("/checkout");
    if (close) close();
  };

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10 overflow-hidden rounded-lg">
      <div className="p-4 border-b border-gray-200 font-bold flex justify-between items-center text-dark">
        <span>Shopping Cart</span>
        {close && (
          <button onClick={close} className="text-gray-400 hover:text-dark">
            <FiX size={20} />
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="p-10 text-center text-gray-400 font-medium">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="overflow-auto max-h-[350px]">
            {items.map((item, index) => (
              <div className="border-b border-gray-200 p-4 flex gap-3 hover:bg-gray-50 duration-200" key={index}>
                <div className="bg-primary-light aspect-square w-16 flex justify-center items-center rounded-md overflow-hidden">
                  <Image
                    src={getImageUrl(item.imageUrl)}
                    width={63}
                    height={63}
                    alt={item.name}
                    className="aspect-square object-contain"
                  />
                </div>
                <div className="self-center">
                  <div className="text-sm font-semibold text-dark">{item.name}</div>
                  <div className="flex gap-3 font-medium text-xs mt-1">
                    <div className="text-gray-500">{item.qty}x</div>
                    <div className="text-primary">{priceFormatter(item.price)}</div>
                  </div>
                </div>
                <button
                  className="w-7 h-7 self-center ml-auto text-gray-300 hover:text-primary transition-colors"
                  onClick={() => removeItem(item._id)}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between font-bold">
              <div className="text-sm text-dark">Total Amount</div>
              <div className="text-primary text-sm">
                {priceFormatter(totalPrice)}
              </div>
            </div>
            <Button
              variant="dark"
              size="small"
              className="w-full mt-4 font-bold"
              onClick={handleCheckout}
            >
              Checkout Now <FiArrowRight />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPopup;
