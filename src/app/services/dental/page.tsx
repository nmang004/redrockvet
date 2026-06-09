import { Metadata } from "next";
import DentalContent from "./dental-content";
import JsonLd from "@/components/seo/JsonLd";
import { dentalFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Veterinary Dental Care - Red Rock Veterinary Health",
  description: "Comprehensive dental care including full mouth radiographs, dental cleaning, oral surgery, and extractions. Advanced anesthetic monitoring for safe dental procedures.",
};

export default function DentalPage() {
  return (
    <>
      <JsonLd raw={dentalFaqSchema} />
      <DentalContent />
    </>
  );
}