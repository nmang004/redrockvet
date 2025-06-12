import { Metadata } from "next";
import WellnessContent from "./wellness-content";

export const metadata: Metadata = {
  title: "Wellness Exams - Red Rock Veterinary Health",
  description: "Comprehensive wellness exams and preventive care to keep your pet healthy. Annual checkups, vaccinations, and health screenings at Red Rock Veterinary Health.",
};


export default function WellnessPage() {
  return <WellnessContent />;
}