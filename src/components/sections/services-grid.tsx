"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Scissors, Stethoscope, Shield, Syringe, Camera } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const iconMap = {
  stethoscope: Stethoscope,
  scissors: Scissors,
  heart: Heart,
  shield: Shield,
  syringe: Syringe,
  camera: Camera,
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

// Fallback services data
const fallbackServices = [
  {
    _id: "1",
    icon: "stethoscope" as keyof typeof iconMap,
    title: "Wellness Exams",
    description: "Comprehensive health checkups to keep your pet in optimal condition with preventive care.",
    features: ["Annual checkups", "Vaccinations", "Health screening", "Nutritional counseling"],
    price: "From $89",
    slug: { current: "wellness" }
  },
  {
    _id: "2",
    icon: "scissors" as keyof typeof iconMap,
    title: "Surgery",
    description: "Advanced surgical procedures performed by experienced veterinarians in our modern facility.",
    features: ["Spay/neuter", "Soft tissue surgery", "Orthopedic surgery", "Emergency surgery"],
    price: "From $299",
    slug: { current: "surgery" }
  },
  {
    _id: "3",
    icon: "heart" as keyof typeof iconMap,
    title: "Dental Care",
    description: "Complete dental services to maintain your pet's oral health and prevent dental disease.",
    features: ["Dental cleaning", "Tooth extraction", "Oral surgery", "Dental X-rays"],
    price: "From $149",
    slug: { current: "dental" }
  },
  {
    _id: "4",
    icon: "shield" as keyof typeof iconMap,
    title: "Emergency Care",
    description: "24/7 emergency services for when your pet needs immediate medical attention.",
    features: ["24/7 availability", "Trauma care", "Critical care", "Emergency surgery"],
    price: "From $199",
    slug: { current: "emergency" }
  },
  {
    _id: "5",
    icon: "syringe" as keyof typeof iconMap,
    title: "Vaccinations",
    description: "Essential vaccines to protect your pet from preventable diseases and maintain immunity.",
    features: ["Core vaccines", "Lifestyle vaccines", "Vaccine planning", "Titer testing"],
    price: "From $45",
    slug: { current: "vaccinations" }
  },
  {
    _id: "6",
    icon: "camera" as keyof typeof iconMap,
    title: "Diagnostics",
    description: "State-of-the-art diagnostic equipment for accurate diagnosis and treatment planning.",
    features: ["Digital X-rays", "Ultrasound", "Blood work", "Urinalysis"],
    price: "From $125",
    slug: { current: "diagnostics" }
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
  const [services, setServices] = useState<Service[]>(fallbackServices);
  const [loading, setLoading] = useState(true);

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

  const displayedServices = showAll ? services : services.slice(0, 3);

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