import type { Metadata } from "next";
import PaymentPlansContent from "./payment-plans-content";

export const metadata: Metadata = {
  title: "Payment Plans - Red Rock Veterinary Health",
  description: "Flexible payment plans and financing options for veterinary care at Red Rock Veterinary Health. Apply for Cherry payment plans, CareCredit, ScratchPay, and more.",
  openGraph: {
    title: "Payment Plans - Red Rock Veterinary Health",
    description: "Flexible payment plans and financing options for veterinary care.",
    url: "https://redrockvet.com/payment-plans",
  },
};

export default function PaymentPlansPage() {
  return <PaymentPlansContent />;
}
