import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { getAllBanks } from "@/app/services/bank.service";

const PaymentOptions = async () => {
  const banks = await getAllBanks();

  return (
    <CardWithHeader title="Payment Options">
      <div className="flex flex-col">
        {banks?.map((payment, index) => (
          <div className="flex gap-5 p-5 lg:p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors" key={index}>
            <div className="bg-primary-light p-4 text-primary rounded-xl h-fit self-center">
              <FiCreditCard size={24} />
            </div>
            <div className="self-center">
              <div className="font-bold text-dark text-lg">{payment.bankName}</div>
              <div className="text-sm font-medium text-gray-600 tracking-wider">{payment.accountNumber}</div>
              <div className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-tight">{payment.accountName}</div>
            </div>
            <div className="ml-auto bg-primary/10 text-primary text-[10px] font-bold h-fit self-center px-3 py-1.5 rounded-full uppercase">
              Bank Transfer
            </div>
          </div>
        ))}
        {(!banks || banks.length === 0) && (
          <div className="p-10 text-center text-gray-400">No payment options available</div>
        )}
      </div>
    </CardWithHeader>
  );
};

export default PaymentOptions;
