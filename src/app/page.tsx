import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import AboutPreview from "@/components/sections/about-preview";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import StatsCounter from "@/components/sections/stats-counter";

export const metadata: Metadata = {
  title: "Red Rock Veterinary Health - Locally Owned Fear Free® Veterinary Care in Colorado Springs",
  description: "Locally owned, complete animal hospital providing comprehensive pet care in Colorado Springs. All staff are Fear Free® certified, hospital specifically designed for Fear Free care - the only one in Colorado Springs.",
  keywords: "locally owned veterinary Colorado Springs, Fear Free certified staff, animal hospital, pet care, dog veterinarian, cat veterinarian, emergency vet, pet surgery, vaccinations, highest rated vet",
  openGraph: {
    title: "Red Rock Veterinary Health - Locally Owned Fear Free® Veterinary Care in Colorado Springs",
    description: "Locally owned, complete animal hospital providing comprehensive pet care in Colorado Springs. All staff Fear Free® certified with hospital designed specifically for Fear Free care.",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Red Rock Veterinary Health - Modern veterinary facility in Colorado Springs",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero
        title="Fear Free® Veterinary Care in Colorado Springs"
        subtitle="Red Rock Veterinary Health"
        description="Red Rock Veterinary Health is proud to be one of the last locally owned veterinary hospitals in Colorado Springs—and the last one on the Westside. We're not just any animal hospital—we're a full-service, Fear Free–designed facility built entirely around your pet's physical and emotional well-being. From routine vaccinations and urgent care to advanced diagnostics, dentistry, and complex medical treatments, we offer a wide spectrum of veterinary care under one roof. Moreover, we strive to minimize staff turnover and prioritize staff happiness and retention, which means you and your pet can see the same veterinarian for the best continuity of care. At Red Rock, your pet's comfort and quality of life are at the heart of everything we do. We are more than just a hospital, we are a mindful partner on your pet's health journey."
        primaryCTA={{
          text: "Schedule Appointment",
          href: "/client-information"
        }}
        secondaryCTA={{
          text: "Call (719) 204-3647",
          href: "tel:719-204-3647"
        }}
      />
      
      <ServicesGrid 
        title="Comprehensive Veterinary Services"
        subtitle="From Fear Free® wellness exams to specialized treatments, we provide complete care for your pet's health and happiness"
      />
      
      <AboutPreview />
      
      <StatsCounter />
      
      <TestimonialsCarousel />
    </>
  );
}
