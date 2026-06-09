import { Metadata } from "next";
import FearFreeContent from "./fear-free-content";
import JsonLd from "@/components/seo/JsonLd";
import { fearFreeFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Fear-Free® Veterinary Care - Red Rock Veterinary Health",
  description: "Experience stress-free veterinary visits with our Fear-Free® certified approach. Gentle handling techniques, calming environments, and science-based methods to reduce anxiety for your pet in Colorado Springs.",
  keywords: "fear-free veterinary care, low-stress handling, pet anxiety, stress-free vet visits, Colorado Springs veterinarian, gentle animal care",
};

export default function FearFreePage() {
  return (
    <>
      <JsonLd raw={fearFreeFaqSchema} />
      <FearFreeContent />
    </>
  );
}