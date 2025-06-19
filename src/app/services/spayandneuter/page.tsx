import { Metadata } from "next";
import SpayNeuterContent from "./spay-neuter-content";

export const metadata: Metadata = {
  title: "Spay and Neuter Services - Red Rock Veterinary Health",
  description: "Customized spay and neuter services in Colorado Springs with personalized surgical timelines based on breed, size, and health. State-of-the-art surgical suite with comprehensive care.",
};

export default function SpayNeuterPage() {
  return <SpayNeuterContent />;
}