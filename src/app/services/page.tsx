import { Metadata } from "next";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Scissors, 
  Activity, 
  Zap, 
  Microscope,
  Brain,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Veterinary Services - Red Rock Veterinary Health",
  description: "Comprehensive veterinary services in Colorado Springs including Fear Free care, wellness exams, emergency services, dental care, surgery, allergy testing, and chronic disease management.",
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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.slug} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardHeader>
              </Card>
            );
          })}
        </div>

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