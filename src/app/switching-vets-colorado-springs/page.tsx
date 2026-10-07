import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import SwitchingContent from "./switching-content";
import { switchingVetsFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Switching Vets in Colorado Springs | Red Rock Veterinary Health",
  description:
    "You are allowed to switch vets. How to transfer your pet's records, what to ask a new veterinarian, and what independent ownership means in Colorado Springs.",
  keywords:
    "switching vets Colorado Springs, how to switch veterinarians, transfer pet records to a new vet, questions to ask a new vet, independent vet Colorado Springs, new vet Colorado Springs, why are vets so expensive",
};

export default function SwitchingVetsPage() {
  return (
    <>
      <JsonLd raw={switchingVetsFaqSchema} />
      <SwitchingContent />
    </>
  );
}
