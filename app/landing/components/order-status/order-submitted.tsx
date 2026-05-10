"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";
import { useParams } from "next/navigation";

const OrderSubmitted = () => {
  const { id } = useParams();

  const reloadOrderStatus = () => {
    // Set flag to true so it shows as confirmed on refresh
    localStorage.setItem(`order_confirmed_${id}`, "true");
    window.location.reload();
  };

  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto shadow-sm">
      <Image
        src="/images/icon-order-submitted.svg"
        width={117}
        height={117}
        alt="order submitted"
        className="mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2 text-dark">Order Submitted!!</h2>
      <p className="text-center mb-8 text-gray-500">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      <Button variant="dark" className="w-full" onClick={reloadOrderStatus}>
        <FiRefreshCw />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;
