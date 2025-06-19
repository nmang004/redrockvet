import { Metadata } from "next";
import CatClinicContent from "./cat-clinic-content";

export const metadata: Metadata = {
  title: "Cat Clinic - Red Rock Veterinary Health",
  description: "Dedicated feline-only veterinary care with separate cat wing, calming environment, Fear Free certified professionals, and evidence-based feline medicine in Colorado Springs.",
};

export default function CatClinicPage() {
  return <CatClinicContent />;
}