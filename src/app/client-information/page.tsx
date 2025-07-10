import { Metadata } from "next";
import ClientInformationContent from "./client-information-content";

export const metadata: Metadata = {
  title: "Client Information - Book Your Appointment | Red Rock Veterinary Health",
  description: "Everything you need to know about booking your first appointment. Complete required forms, access resources, and learn about our booking process.",
  keywords: "book appointment, new client, new patient, veterinary forms, client information, appointment booking, pet care",
};

export default function ClientInformationPage() {
  return <ClientInformationContent />;
}