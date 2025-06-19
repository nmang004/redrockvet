import { Metadata } from "next";
import AllergyContent from "./allergy-content";

export const metadata: Metadata = {
  title: "Pet Allergy Testing and Treatment - Red Rock Veterinary Health",
  description: "Comprehensive allergy testing and treatment for dogs and cats in Colorado Springs. Identifying environmental, food, and seasonal allergies with tailored treatment plans.",
};

export default function AllergyPage() {
  return <AllergyContent />;
}