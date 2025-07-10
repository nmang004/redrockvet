import { Metadata } from "next";
import MedicalRecordPortalContent from "./medical-record-portal-content";

export const metadata: Metadata = {
  title: "Medical Record Portal - Red Rock Veterinary Health",
  description: "Access your pet's medical records securely online through our patient portals. View vaccination history, appointment details, and medical information 24/7.",
  keywords: "medical records, pet health records, veterinary portal, online records, pet medical history",
};

export default function MedicalRecordPortalPage() {
  return <MedicalRecordPortalContent />;
}