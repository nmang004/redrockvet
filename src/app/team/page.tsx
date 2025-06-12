import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Pet X Veterinary",
  description: "Meet our experienced team of veterinarians, technicians, and support staff dedicated to your pet's health and wellbeing.",
};

export default function TeamPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our passionate team of veterinary professionals is dedicated to providing 
            the highest quality care for your beloved pets.
          </p>
        </div>
        
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Team member profiles will be populated from Sanity CMS when content is added.
          </p>
        </div>
      </div>
    </div>
  );
}