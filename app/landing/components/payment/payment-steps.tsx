"use client";

import { FiCheckCircle, FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";

const PaymentSteps = () => {
  const { push } = useRouter();
  const { items, customerInfo, reset } = useCartStore();
  const [file, setFile] = useState<File | null>();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleConfirmPayment = async () => {
    if (!file) {
      alert("Please upload your payment receipt!");
      return;
    }

    if (!customerInfo) {
      alert("Customer information is missing, please return to checkout");
      push("/checkout");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact!.toString()
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append(
        "purchasedItems",
        JSON.stringify(
          items.map((item) => ({ productId: item._id, qty: item.qty }))
        )
      );
      formData.append("totalPayment", totalPrice!.toString());

      const res = await transactionCheckout(formData);

      alert("Transaction created successfully!");
      reset();
      push(`/order-status/${res._id}`);
    } catch (error) {
      console.log(error);
      alert("Failed to create transaction. Please try again.");
    }
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5 lg:p-7">
        <ol className="list-decimal text-sm pl-5 flex flex-col gap-5 mb-8 text-gray-600">
          <li>
            Transfer the total amount of <b className="text-dark">{priceFormatter(totalPrice)}</b> to your preferred
            bank account listed under 'Payment Options'.
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>'Upload Receipt & Confirm'</b> button below to validate your
            transaction.
          </li>
        </ol>
        <FileUpload onFileSelect={setFile} />
      </div>

      <div className="border-t border-gray-200 p-5 lg:p-7 bg-gray-50">
        <div className="flex justify-between font-bold">
          <div className="text-sm text-dark uppercase tracking-wider">Total Payment</div>
          <div className="text-primary text-xl">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          className="w-full mt-6 py-4 font-bold h-14"
          onClick={handleConfirmPayment}
        >
          <FiCheckCircle size={20} />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
