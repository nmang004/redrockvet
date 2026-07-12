import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import EmergencyContent from "./emergency-content";
import { urgentCareFaqSchema } from "./faq";

export const metadata: Metadata = {
  title: "Same-Day Urgent Vet Care in Colorado Springs | Red Rock Veterinary Health",
  description:
    "Same-day urgent vet care in Colorado Springs at general-practice pricing. Fear Free handling Mon–Fri 8–5, with trusted 24/7 ER partners after hours.",
  keywords:
    "urgent care vet Colorado Springs, same day vet Colorado Springs, emergency vet alternative, sick pet same day appointment, urgent vet near me Westside",
};

export default function EmergencyPage() {
  return (
    <>
      <JsonLd raw={urgentCareFaqSchema} />
      <EmergencyContent />
    </>
  );
}
