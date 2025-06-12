import { Metadata } from "next";
import VaccinationsContent from "./vaccinations-content";

export const metadata: Metadata = {
  title: "Vaccinations - Red Rock Veterinary Health",
  description: "Essential pet vaccinations to protect against preventable diseases. Core vaccines, lifestyle vaccines, and vaccination planning at Red Rock Veterinary Health.",
};

export default function VaccinationsPage() {
  return <VaccinationsContent />;
}