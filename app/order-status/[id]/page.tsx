"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import OrderConfirmed from "../../landing/components/order-status/order-confirmed";
import OrderSubmitted from "../../landing/components/order-status/order-submitted";

const OrderStatus = () => {
  const { id } = useParams();
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    // Check if this specific order was already confirmed in this session
    const confirmedKey = `order_confirmed_${id}`;
    const alreadyConfirmed = localStorage.getItem(confirmedKey);

    if (alreadyConfirmed) {
      setIsConfirmed(true);
    } else {
      // Simulate processing time (e.g. 4 seconds)
      const timer = setTimeout(() => {
        setIsConfirmed(true);
        localStorage.setItem(confirmedKey, "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [id]);

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
      </div>
      <div className="pb-20 flex justify-center">
        {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
      </div>
    </main>
  );
};

export default OrderStatus;
