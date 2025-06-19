import { Metadata } from "next";
import ChronicDiseaseContent from "./chronic-disease-content";

export const metadata: Metadata = {
  title: "Chronic Disease Management - Red Rock Veterinary Health",
  description: "Comprehensive chronic disease management for diabetes, kidney disease, arthritis, heart disease, and metabolic imbalances with personalized care plans and regular monitoring.",
};

export default function ChronicDiseasePage() {
  return <ChronicDiseaseContent />;
}