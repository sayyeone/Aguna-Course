"use client";

import { useState } from "react";
import CartItems from "../landing/components/checkout/cart-items";
import OrderInformation from "../landing/components/checkout/order-information";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: customerInfo?.customerName || "",
    customerContact: customerInfo?.customerContact || null,
    customerAddress: customerInfo?.customerAddress || "",
  });

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill in all fields");
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-10 lg:pt-20">
      <div className="max-w-5xl mx-auto py-10 lg:py-20 px-4 lg:px-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-11 text-dark italic">CHECKOUT NOW</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
