"use client";

import { Camera, Monitor, Activity, Shield, Clock, CheckCircle, Phone, Stethoscope } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const imagingServices = [
  {
    icon: Camera,
    title: "Digital Radiography",
    description: "High-quality digital X-ray imaging with board-certified radiologist evaluation for accurate diagnoses."
  },
  {
    icon: Monitor,
    title: "Ultrasound Services",
    description: "In-house ultrasound examinations and collaboration with mobile internal medicine specialists for comprehensive imaging."
  },
  {
    icon: Activity,
    title: "FAST Scans",
    description: "Focused Assessment with Sonography for Trauma (FAST) for rapid evaluation of emergency conditions."
  },
  {
    icon: Stethoscope,
    title: "Specialist Partnerships",
    description: "Collaboration with local specialist hospitals for urgent ultrasound needs and advanced imaging."
  }
];

const benefits = [
  "Safe, non-invasive diagnostic procedures",
  "Minimal radiation exposure with digital technology",
  "Specialized care performed in familiar environment",
  "Timely and accurate diagnoses",
  "Board-certified radiologist evaluations",
  "Reduced stress for pets during procedures"
];

const applications = [
  {
    icon: Shield,
    title: "Diagnosis",
    description: "Identify fractures, foreign objects, organ abnormalities, and internal injuries."
  },
  {
    icon: Monitor,
    title: "Monitoring",
    description: "Track progression of ongoing health conditions and treatment effectiveness."
  },
  {
    icon: Activity,
    title: "Treatment Planning",
    description: "Guide surgical procedures and treatment decisions with detailed imaging."
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Rapid assessment of trauma cases and urgent medical conditions."
  }
];

export default function DiagnosticImagingContent() {
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
              <Camera className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Diagnostic Imaging Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Advanced diagnostic imaging services are essential tools for diagnosing various conditions, monitoring ongoing health issues, and guiding treatment plans with minimal stress to your pet.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Imaging</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:719-204-3647">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (719) 204-3647
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Imaging Services Section */}
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
              Our Imaging Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art diagnostic imaging technology to visualize internal structures and provide accurate diagnoses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {imagingServices.map((service, index) => {
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

      {/* Benefits Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits of Our Imaging Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced imaging technology provides numerous advantages for both diagnostic accuracy and patient comfort.
              </p>
              
              <div className="space-y-4">
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Board-Certified Expertise
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-foreground">High-quality digital imaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Board-certified radiologist evaluation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Rapid emergency assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Minimal stress procedures</span>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Schedule Imaging Study</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
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
              Imaging Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diagnostic imaging services support comprehensive veterinary care across multiple specialties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => {
              const IconComponent = application.icon;
              return (
                <motion.div
                  key={application.title}
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
                      <CardTitle className="text-xl">{application.title}</CardTitle>
                      <CardDescription className="text-base">
                        {application.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialist Network Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Imaging Network
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We collaborate with mobile internal medicine specialists and local specialist hospitals to provide comprehensive imaging services, ensuring your pet receives the most advanced diagnostic care available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Imaging Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:719-204-3647">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: (719) 204-3647
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}