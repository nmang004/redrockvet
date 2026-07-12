"use client";

import { Camera, Monitor, Activity, Shield, Clock, CheckCircle, Phone, Stethoscope, ArrowRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const imagingServices = [
  {
    icon: Camera,
    title: "Digital Radiography",
    description: "Digital radiography images typically evaluated by board-certified radiologists for accurate diagnoses."
  },
  {
    icon: Monitor,
    title: "Ultrasound Services",
    description: "In-house ultrasound probe and brief ultrasounds, with collaboration with mobile internal medicine specialists."
  },
  {
    icon: Activity,
    title: "FAST Scans",
    description: "Focused Assessment with Sonography for Trauma (FAST) for rapid evaluation of emergency conditions."
  },
  {
    icon: Stethoscope,
    title: "Specialist Partnerships",
    description: "Partnerships with local specialist hospitals in Colorado Springs and Castle Rock for advanced imaging."
  }
];

const benefits = [
  "Safe, non-invasive diagnostic procedures",
  "Minimal radiation or sound waves used",
  "Advanced diagnostic procedures within the hospital",
  "Reduces pet stress and ensures continuity of care",
  "Board-certified radiologist evaluations",
  "Professionals ensure pet comfort and safety"
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
              Veterinary Diagnostic Imaging in Colorado Springs: Digital Radiography & Ultrasound
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We offer digital radiography and ultrasound services with board-certified radiologist evaluation. Our diagnostic imaging helps visualize internal structures, diagnose conditions, and guide treatment plans.
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
              Non-invasive imaging techniques that help visualize internal structures, diagnose conditions, monitor health issues, and guide treatment plans.
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

      {/* Specialist Partner Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 md:p-10 border border-primary/20 shadow-lg mb-10"
          >
            <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
              <div className="mx-auto w-40 md:w-full">
                <div className="aspect-square relative overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/staff/dr-brad-hines.jpg"
                    alt="Dr. Brad Hines, board-certified veterinary internal medicine specialist and visiting specialist partner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Stethoscope className="w-4 h-4" />
                  Visiting Specialist Partner
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  On-Site Ultrasound &amp; Echocardiography with Dr. Brad Hines
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Through our partnership with Mobile Veterinary Imaging of Colorado, board-certified internal
                  medicine specialist Dr. Brad Hines (DACVIM) performs abdominal and cardiac ultrasound,
                  echocardiograms, and ultrasound-guided procedures right here in our hospital. Red Rock Veterinary
                  Health is the only Fear Free Certified practice in Colorado Springs to offer an on-site
                  board-certified internist who welcomes owners to stay present during their pet&apos;s ultrasound.
                </p>
                <p className="text-sm text-muted-foreground/90 italic mb-6">
                  Dr. Hines is an independent specialist partner and is not employed by Red Rock Veterinary Health.
                </p>
                <Button asChild>
                  <Link href="/staff/dr-brad-hines">
                    Meet Dr. Hines
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

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
                Collaboration with visiting specialists offers advanced diagnostic procedures within the hospital, reducing pet stress and ensuring continuity of care.
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

      {/* FAQ Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about diagnostic imaging services at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Why are radiography and ultrasound important for my pet's health?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Non-invasive imaging techniques that help visualize internal structures, diagnose conditions, monitor health issues, and guide treatment plans.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                How does collaboration with mobile specialists benefit my pet?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Offers advanced diagnostic procedures within the hospital, reducing pet stress and ensuring continuity of care.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Are these imaging procedures safe for my pet?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, both are safe and non-invasive, using minimal radiation or sound waves, with professionals ensuring pet comfort and safety.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What&apos;s the difference between X-rays and ultrasound?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  X-rays are excellent for viewing bones, detecting foreign objects, and seeing air-filled organs like lungs. 
                  Ultrasound provides detailed images of soft tissues, organs, and blood flow without radiation. 
                  We often use these imaging methods together to get a complete picture of your pet&apos;s condition and make the most accurate diagnosis.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Do you work with specialists for complex cases?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, we maintain strong relationships with board-certified radiologists and mobile internal medicine specialists. 
                  For complex cases requiring specialized expertise or advanced imaging not available in-house, 
                  we coordinate with our specialist network to ensure your pet receives the most comprehensive diagnostic care possible.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Commitment Statement & Contact */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Commitment to Comprehensive Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Red Rock Veterinary Health, we are committed to providing comprehensive diagnostic services to maintain and improve your pet&apos;s health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:719-204-3647" className="text-primary hover:underline text-lg">
                    (719) 204-3647
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    3163 W. Colorado Ave<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday-Friday: 8am-5pm<br />
                    Closed Saturday & Sunday
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Specialist Network</h3>
                  <p className="text-muted-foreground">
                    Colorado Springs & Castle Rock
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Imaging Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}