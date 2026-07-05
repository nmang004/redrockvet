import { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & Appointments - Red Rock Veterinary Health",
  description: "Schedule an appointment at Red Rock Veterinary Health, a highly-rated, locally owned practice in Colorado Springs. Contact us at (719) 204-3647 or visit us at 3163 W. Colorado Ave. Open Monday-Friday 8:00 AM - 5:00 PM, with same-day urgent care appointments and trusted 24/7 ER partners for after-hours emergencies.",
  keywords: "veterinary appointments Colorado Springs, contact Red Rock Veterinary Health, schedule pet appointment, Colorado Springs animal hospital, veterinary clinic contact",
  openGraph: {
    title: "Contact & Appointments - Red Rock Veterinary Health",
    description: "Schedule an appointment at Red Rock Veterinary Health in Colorado Springs. Contact us at (719) 204-3647 or visit us at 3163 W. Colorado Ave.",
    images: [
      {
        url: "/red-rock-logo.png",
        width: 1200,
        height: 630,
        alt: "Red Rock Veterinary Health Contact Information",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}