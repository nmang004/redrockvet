"use client";

import { Syringe, Shield, Calendar, Heart, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const vaccinationServices = [
  {
    icon: Shield,
    title: "Core Vaccines",
    description: "Essential vaccines required for all pets to protect against serious, life-threatening diseases."
  },
  {
    icon: Heart,
    title: "Lifestyle Vaccines",
    description: "Additional vaccines based on your pet's lifestyle, environment, and risk factors."
  },
  {
    icon: Calendar,
    title: "Vaccine Planning",
    description: "Customized vaccination schedules tailored to your pet's age, health, and lifestyle needs."
  },
  {
    icon: Syringe,
    title: "Titer Testing",
    description: "Blood tests to measure antibody levels and determine if booster vaccines are needed."
  }
];

const coreVaccinesDogs = [
  "DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)",
  "Rabies",
  "Bordetella (Kennel Cough)"
];

const lifestyleVaccinesDogs = [
  "Lyme Disease",
  "Leptospirosis", 
  "Canine Influenza",
  "Rattlesnake Vaccine"
];

const coreVaccinesCats = [
  "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)",
  "Rabies"
];

const lifestyleVaccinesCats = [
  "FeLV (Feline Leukemia)",
  "FIV (Feline Immunodeficiency Virus)",
  "Bordetella"
];

const benefits = [
  "Prevents serious and potentially fatal diseases",
  "Protects other pets in the community",
  "Required for boarding and grooming",
  "Cost-effective compared to treating diseases",
  "Builds lifelong immunity",
  "Peace of mind for pet parents"
];

export default function VaccinationsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8"
            >
              <Syringe className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Vaccinations
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Essential vaccines to protect your pet from preventable diseases and maintain immunity throughout their life. Customized vaccination plans for every pet.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Vaccinations</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Vaccination Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive vaccination programs to protect your pet throughout their life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vaccinationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vaccine Types */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vaccine Types by Pet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different vaccines are recommended based on your pet's species, age, and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dogs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    🐕 Dogs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Core Vaccines (Required)</h4>
                    <ul className="space-y-2">
                      {coreVaccinesDogs.map((vaccine, index) => (
                        <li key={vaccine} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{vaccine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Lifestyle Vaccines (As Needed)</h4>
                    <ul className="space-y-2">
                      {lifestyleVaccinesDogs.map((vaccine, index) => (
                        <li key={vaccine} className="flex items-center gap-3 text-sm">
                          <div className="w-4 h-4 bg-primary/30 rounded-full flex-shrink-0" />
                          <span className="text-foreground">{vaccine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    🐱 Cats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Core Vaccines (Required)</h4>
                    <ul className="space-y-2">
                      {coreVaccinesCats.map((vaccine, index) => (
                        <li key={vaccine} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{vaccine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Lifestyle Vaccines (As Needed)</h4>
                    <ul className="space-y-2">
                      {lifestyleVaccinesCats.map((vaccine, index) => (
                        <li key={vaccine} className="flex items-center gap-3 text-sm">
                          <div className="w-4 h-4 bg-primary/30 rounded-full flex-shrink-0" />
                          <span className="text-foreground">{vaccine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Pricing */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits of Vaccination
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vaccines are one of the most effective ways to protect your pet's health and prevent serious diseases.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Vaccination Pricing
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <h4 className="font-semibold text-foreground">Core Vaccines</h4>
                      <p className="text-sm text-muted-foreground">Essential protection package</p>
                    </div>
                    <span className="font-bold text-primary">From $45</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <h4 className="font-semibold text-foreground">Lifestyle Vaccines</h4>
                      <p className="text-sm text-muted-foreground">Additional protection</p>
                    </div>
                    <span className="font-bold text-primary">From $65</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Vaccine Package</h4>
                      <p className="text-sm text-muted-foreground">Complete vaccination series</p>
                    </div>
                    <span className="font-bold text-primary">From $120</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Includes wellness exam</span>
                  </div>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact">Schedule Vaccinations</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}