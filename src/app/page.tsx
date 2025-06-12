import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import AboutPreview from "@/components/sections/about-preview";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import StatsCounter from "@/components/sections/stats-counter";

export default function Home() {
  return (
    <>
      <Hero
        title="Compassionate Care for Your Beloved Pets"
        subtitle="Trusted Veterinary Services"
        description="At Pet X Veterinary, we provide comprehensive, compassionate care for your furry family members. Our experienced team and state-of-the-art facilities ensure your pets receive the best possible treatment in a comfortable, caring environment."
        primaryCTA={{
          text: "Book Appointment",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Watch Our Story",
          href: "#video"
        }}
      />
      
      <ServicesGrid 
        title="Our Comprehensive Services"
        subtitle="From routine checkups to emergency care, we're here for every stage of your pet's life"
      />
      
      <AboutPreview />
      
      <StatsCounter />
      
      <TestimonialsCarousel />
    </>
  );
}
