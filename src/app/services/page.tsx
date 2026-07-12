import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staffMembers } from "@/data/staff";
import {
  Stethoscope,
  Heart,
  Shield,
  Scissors,
  Activity,
  Zap,
  Microscope,
  Brain,
  Phone,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Veterinary Services - Red Rock Veterinary Health",
  description: "Comprehensive veterinary services from a highly-rated, locally owned practice in Colorado Springs including Fear Free care, wellness exams, emergency services, dental care, surgery, allergy testing, and chronic disease management.",
};

const services = [
  {
    title: "Fear Free® Veterinary Care",
    description: "Focuses on minimizing stress during veterinary visits using science-based techniques to reduce fear, anxiety, and stress while prioritizing your pet&apos;s emotional and physical well-being.",
    icon: Heart,
    slug: "fear-free"
  },
  {
    title: "Pet Vaccinations and Wellness",
    description: "Routine checkups and preventive care that protects against diseases like parvovirus and leptospirosis, plus year-round parasite control and preventative labwork.",
    icon: Shield,
    slug: "wellness"
  },
  {
    title: "Emergency Veterinary Services",
    description: "Same-day emergency appointments for urgent issues like limping, vomiting, and wounds using our low-stress handling approach.",
    icon: Zap,
    slug: "urgent-emergency-care"
  },
  {
    title: "Veterinary Dental Care",
    description: "Comprehensive dental services including X-rays, oral examinations, extractions, and oral trauma treatment.",
    icon: Stethoscope,
    slug: "dental-care"
  },
  {
    title: "Veterinary Surgery",
    description: "Comprehensive surgical services with experience in complex procedures, prioritizing your pet&apos;s comfort and safety.",
    icon: Scissors,
    slug: "surgery"
  },
  {
    title: "Pet Allergy Testing and Treatment",
    description: "Identifies environmental, food, and parasite triggers using blood tests and elimination diets with tailored treatment plans.",
    icon: Activity,
    slug: "allergy-testing-treatment"
  },
  {
    title: "Chronic Disease Management",
    description: "Handles conditions like diabetes, kidney disease, and arthritis with regular check-ups, monitoring, and personalized care approach.",
    icon: Heart,
    slug: "chronic-disease-management"
  },
  {
    title: "Veterinary Diagnostic Imaging",
    description: "Digital radiography and ultrasound for precise diagnostics with minimal stress, collaborating with specialists for complex cases.",
    icon: Microscope,
    slug: "radiography-ultrasound"
  },
  {
    title: "Compassionate Pet Euthanasia",
    description: "Peaceful, respectful end-of-life services offering both in-clinic and referral options.",
    icon: Heart,
    slug: "compassionate-euthanasia"
  },
  {
    title: "Pet Behavioral Services",
    description: "Evaluates and treats behavioral issues including aggression, anxiety, and compulsive behaviors with comprehensive approach and specialist referrals.",
    icon: Brain,
    slug: "behavioral-management"
  }
];

export default function ServicesPage() {
  const specialistPartners = staffMembers.filter((member) => member.isPartner);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veterinary Services in Colorado Springs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Red Rock Veterinary Health is a complete animal hospital providing comprehensive pet care, 
            from urgent care and vaccinations to specialized treatments and advanced medical procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.slug} className="h-full hover:shadow-lg transition-all duration-300 flex flex-col">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base flex-1">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {specialistPartners.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Stethoscope className="w-4 h-4" />
                Specialty Care, On-Site
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Board-Certified Specialists at Red Rock
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond our own veterinarians, Red Rock partners with independent, board-certified specialists in
                surgery, oncology, and internal medicine who bring advanced care directly into our Fear Free Certified
                hospital &mdash; so your pet can receive specialist-level treatment without a referral across town.
              </p>
              <p className="text-sm text-muted-foreground/90 italic mt-4">
                These specialists provide care on-site through a partnership and are not employed by Red Rock
                Veterinary Health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialistPartners.map((partner) => (
                <Link key={partner.id} href={`/staff/${partner.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden !pt-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={partner.image}
                        alt={partner.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
                        <Stethoscope className="w-3.5 h-3.5" />
                        Specialist Partner
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {partner.credentials}
                      </CardDescription>
                      <CardDescription className="text-base mt-2">
                        {partner.specialties.slice(0, 3).join(" · ")}
                      </CardDescription>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        View profile
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center bg-accent rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Emergency Care?
          </h2>
          <p className="text-muted-foreground mb-6">
            We offer same-day emergency appointments for urgent pet health issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call: (719) 204-3647
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}