import { Metadata } from "next";
import DentalContent from "./dental-content";

export const metadata: Metadata = {
  title: "Dental Care - Red Rock Veterinary Health",
  description: "Complete dental services for pets including cleanings, extractions, and oral surgery. Professional dental care at Red Rock Veterinary Health.",
};

export default function DentalPage() {
  return <DentalContent />;
}