import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import AboutPreview from "@/components/sections/about-preview";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import StatsCounter from "@/components/sections/stats-counter";

export default function Home() {
  return (
    <>
      <Hero
        title="Fear Free® Veterinary Care in Colorado Springs"
        subtitle="Red Rock Veterinary Health"
        description="Complete animal hospital providing comprehensive pet care from urgent care and vaccinations to specialized treatments and advanced medical procedures. We prioritize your pet's emotional well-being using science-based fear-free techniques."
        primaryCTA={{
          text: "Schedule Appointment",
          href: "/contact"
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
