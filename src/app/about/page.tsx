import { Metadata } from "next";
import AboutPreview from "@/components/sections/about-preview";

export const metadata: Metadata = {
  title: "About Us - Pet X Veterinary",
  description: "Learn about Pet X Veterinary's mission, values, and commitment to providing exceptional pet care for over 15 years.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Pet X Veterinary
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing exceptional veterinary care with compassion, 
            expertise, and state-of-the-art medical technology for over 15 years.
          </p>
        </div>
        
        <AboutPreview />
      </div>
    </div>
  );
}