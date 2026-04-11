import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import AboutPreview from "@/components/sections/about-preview";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import StatsCounter from "@/components/sections/stats-counter";

export const metadata: Metadata = {
  title: "Fear Free Veterinarian in Colorado Springs | Red Rock Veterinary Health",
  description: "Locally owned, complete animal hospital providing comprehensive pet care in Colorado Springs. Fear Free® Certified Practice - the only hospital in Colorado specifically designed for Fear Free care from the ground up.",
  keywords: "locally owned veterinary Colorado Springs, Fear Free certified staff, animal hospital, pet care, dog veterinarian, cat veterinarian, emergency vet, pet surgery, vaccinations, highest rated vet",
  openGraph: {
    title: "Fear Free Veterinarian in Colorado Springs | Red Rock Veterinary Health",
    description: "Locally owned, complete animal hospital providing comprehensive pet care in Colorado Springs. Fear Free® Certified Practice - the only hospital in Colorado designed for Fear Free care from the ground up.",
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
