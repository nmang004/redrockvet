import { Metadata } from "next";
import SurgeryContent from "./surgery-content";

export const metadata: Metadata = {
  title: "Surgery Services - Red Rock Veterinary Health",
  description: "Advanced surgical procedures performed by experienced veterinarians. Spay/neuter, soft tissue, orthopedic, and emergency surgery at Red Rock Veterinary Health.",
};

export default function SurgeryPage() {
  return <SurgeryContent />;
}