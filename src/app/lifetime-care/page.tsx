import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import LifetimeCareContent from "./lifetime-care-content";
import { lifetimeCareFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Senior Pet Care in Colorado Springs | Red Rock Veterinary Health",
  description:
    "Senior pet care in Colorado Springs: life-stage ranges, senior screening, arthritis, kidney disease, dementia, quality of life, and honest end-of-life guidance.",
  keywords:
    "senior pet care Colorado Springs, senior dog vet Colorado Springs, senior cat care, when is a dog considered senior, senior dog bloodwork, dog dementia, kidney disease in cats, quality of life scale for dogs, what is pet hospice and palliative care",
};

export default function LifetimeCarePage() {
  return (
    <>
      <JsonLd raw={lifetimeCareFaqSchema} />
      <LifetimeCareContent />
    </>
  );
}
