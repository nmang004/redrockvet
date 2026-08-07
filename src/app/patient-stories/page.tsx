import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PatientStoriesContent from "./patient-stories-content";
import { patientStoriesFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Patient Stories | Red Rock Veterinary Health",
  description:
    "Three composite cases from our Colorado Springs practice: an anxious diabetic cat, an arthritic senior dog, and a bulldog whose snoring was an airway problem. Not real patients.",
  keywords:
    "veterinary case study Colorado Springs, fear free vet Colorado Springs, cat only exam room Colorado Springs, senior dog arthritis vet Colorado Springs, brachycephalic dog breathing vet Colorado Springs, feline diabetes vet Colorado Springs",
};

export default function PatientStoriesPage() {
  return (
    <>
      <JsonLd raw={patientStoriesFaqSchema} />
      <PatientStoriesContent />
    </>
  );
}
