import { Metadata } from "next";
import WellnessContent from "./wellness-content";

export const metadata: Metadata = {
  title: "Preventative Pet Care - Red Rock Veterinary Health",
  description: "Comprehensive pet wellness screenings, vaccinations, and preventive care in Colorado Springs. Protecting your pets against rabies, distemper, parvovirus, and regional health concerns.",
};

export default function WellnessPage() {
  return <WellnessContent />;
}