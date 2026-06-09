import { Metadata } from "next";
import WellnessContent from "./wellness-content";
import JsonLd from "@/components/seo/JsonLd";
import { wellnessFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Preventative Pet Care - Red Rock Veterinary Health",
  description: "Comprehensive pet wellness screenings, vaccinations, and preventive care in Colorado Springs. Protecting your pets against rabies, distemper, parvovirus, and regional health concerns.",
};

export default function WellnessPage() {
  return (
    <>
      <JsonLd raw={wellnessFaqSchema} />
      <WellnessContent />
    </>
  );
}