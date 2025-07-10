import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import AboutPreview from "@/components/sections/about-preview";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import StatsCounter from "@/components/sections/stats-counter";

export const metadata: Metadata = {
  title: "Red Rock Veterinary Health - Fear Free® Veterinary Care in Colorado Springs",
  description: "Complete animal hospital providing comprehensive pet care in Colorado Springs. Fear Free® certified practice offering urgent care, vaccinations, surgery, and specialized treatments for dogs and cats.",
  keywords: "veterinary care Colorado Springs, Fear Free certified, animal hospital, pet care, dog veterinarian, cat veterinarian, emergency vet, pet surgery, vaccinations",
  openGraph: {
    title: "Red Rock Veterinary Health - Fear Free® Veterinary Care in Colorado Springs",
    description: "Complete animal hospital providing comprehensive pet care in Colorado Springs. Fear Free® certified practice offering urgent care, vaccinations, surgery, and specialized treatments.",
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
        description="Complete animal hospital providing comprehensive pet care from urgent care and vaccinations to specialized treatments and advanced medical procedures. We prioritize your pet's emotional well-being using science-based fear-free techniques."
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
