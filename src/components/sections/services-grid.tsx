"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Scissors, Stethoscope, Shield, Zap, Activity, Microscope, Brain } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const iconMap = {
  stethoscope: Stethoscope,
  scissors: Scissors,
  heart: Heart,
  shield: Shield,
  zap: Zap,
  activity: Activity,
  microscope: Microscope,
  brain: Brain,
};

interface Service {
  _id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  slug: { current: string };
  icon?: keyof typeof iconMap;
}

// Red Rock Veterinary Health services data
const fallbackServices = [
  {
    _id: "1",
    icon: "heart" as keyof typeof iconMap,
    title: "Fear Free® Veterinary Care",
    description: "Minimizing stress during veterinary visits using science-based techniques to reduce fear, anxiety, and stress.",
    features: ["Fear Free certified", "Low-stress handling", "Emotional well-being focus", "Comfortable environment"],
    price: "Standard rates apply",
    slug: { current: "fear-free" }
  },
  {
    _id: "2",
    icon: "shield" as keyof typeof iconMap,
    title: "Pet Vaccinations and Wellness",
    description: "Routine checkups and preventive care protecting against diseases like parvovirus and leptospirosis.",
    features: ["Comprehensive exams", "Core vaccinations", "Parasite control", "Preventative labwork"],
    price: "From $89",
    slug: { current: "wellness" }
  },
  {
    _id: "3",
    icon: "zap" as keyof typeof iconMap,
    title: "Emergency Veterinary Services",
    description: "Same-day emergency appointments for urgent issues using our low-stress handling approach.",
    features: ["Same-day appointments", "Urgent care", "Fear-free handling", "Emergency assessment"],
    price: "From $199",
    slug: { current: "urgent-emergency-care" }
  },
  {
    _id: "4",
    icon: "stethoscope" as keyof typeof iconMap,
    title: "Veterinary Dental Care",
    description: "Comprehensive dental services including X-rays, oral examinations, and extractions.",
    features: ["Full mouth X-rays", "Dental cleaning", "Oral surgery", "Anesthetic monitoring"],
    price: "From $149",
    slug: { current: "dental" }
  },
  {
    _id: "5",
    icon: "scissors" as keyof typeof iconMap,
    title: "Veterinary Surgery",
    description: "Comprehensive surgical services with experience in complex procedures prioritizing comfort and safety.",
    features: ["Spay/neuter surgery", "Soft tissue surgery", "Mass removals", "Advanced monitoring"],
    price: "From $299",
    slug: { current: "surgery" }
  },
  {
    _id: "6",
    icon: "activity" as keyof typeof iconMap,
    title: "Pet Allergy Testing",
    description: "Identifies environmental, food, and parasite triggers using blood tests with tailored treatment plans.",
    features: ["Blood testing", "Elimination diets", "Custom immunotherapy", "Colorado allergens"],
    price: "From $175",
    slug: { current: "allergy-testing-treatment" }
  },
  {
    _id: "7",
    icon: "heart" as keyof typeof iconMap,
    title: "Chronic Disease Management",
    description: "Handles conditions like diabetes, kidney disease, and arthritis with personalized care approaches.",
    features: ["Regular monitoring", "Medication management", "Quality of life focus", "Flexible scheduling"],
    price: "Consultation required",
    slug: { current: "chronic-disease-management" }
  },
  {
    _id: "8",
    icon: "microscope" as keyof typeof iconMap,
    title: "Diagnostic Imaging",
    description: "Digital radiography and ultrasound for precise diagnostics with minimal stress and specialist collaboration.",
    features: ["Digital X-rays", "Ultrasound services", "Board-certified evaluation", "FAST scans"],
    price: "From $125",
    slug: { current: "radiography-ultrasound" }
  },
  {
    _id: "9",
    icon: "heart" as keyof typeof iconMap,
    title: "Compassionate Euthanasia",
    description: "Peaceful, respectful end-of-life services offering both in-clinic and referral options.",
    features: ["Quality of life assessment", "In-clinic services", "In-home referrals", "Aftercare options"],
    price: "Consultation required",
    slug: { current: "compassionate-euthanasia" }
  },
  {
    _id: "10",
    icon: "brain" as keyof typeof iconMap,
    title: "Pet Behavioral Services",
    description: "Evaluates and treats behavioral issues including aggression, anxiety, and compulsive behaviors.",
    features: ["Behavioral consultation", "Medical evaluation", "Treatment planning", "Specialist referrals"],
    price: "From $150",
    slug: { current: "behavioral-management" }
  }
];

interface ServicesGridProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export default function ServicesGrid({ 
  showAll = false, 
  title = "Our Services",
  subtitle = "Comprehensive veterinary care for your beloved pets"
}: ServicesGridProps) {
  const [services] = useState<Service[]>(fallbackServices);

  // Temporarily disabled Sanity fetching to use fallback services
  // This ensures the 6 service pages we created are always displayed
  // TODO: Re-enable when ready to use CMS services
  /*
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"] | order(_createdAt asc) {
          _id,
          title,
          description,
          features,
          price,
          slug,
          icon
        }`;
        
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setServices(data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        // Keep fallback services if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
  */

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices && displayedServices.map((service, index) => {
            const IconComponent = service.icon ? iconMap[service.icon] : Stethoscope;
            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features && Array.isArray(service.features) && service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-semibold text-primary">
                        {service.price}
                      </span>
                      <Button asChild variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Link href={`/services/${service.slug.current}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}