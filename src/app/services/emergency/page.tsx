import { Metadata } from "next";
import EmergencyContent from "./emergency-content";

export const metadata: Metadata = {
  title: "Emergency Care - Red Rock Veterinary Health",
  description: "24/7 emergency veterinary care for critical situations. Trauma care, emergency surgery, and urgent medical attention at Red Rock Veterinary Health.",
};

export default function EmergencyPage() {
  return <EmergencyContent />;
}