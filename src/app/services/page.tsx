import ServicesGrid from "@/components/sections/services-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinary Services - Pet X Veterinary",
  description: "Comprehensive veterinary services including wellness exams, surgery, dental care, emergency services, vaccinations, and advanced diagnostics for your pets.",
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Veterinary Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive range of veterinary services ensures your pet receives the best possible care 
            throughout every stage of their life. From preventive wellness care to advanced surgical procedures 
            and emergency services.
          </p>
        </div>
        
        <ServicesGrid showAll={true} />
      </div>
    </div>
  );
}