import { Metadata } from "next";
import EmergencyContent from "./emergency-content";

export const metadata: Metadata = {
  title: "Urgent Emergency Care - Red Rock Veterinary Health",
  description: "Same-day emergency veterinary care in Colorado Springs. Urgent care for limping, wounds, vomiting, lethargy, and other pet health concerns using fear-free techniques.",
};

export default function EmergencyPage() {
  return <EmergencyContent />;
}