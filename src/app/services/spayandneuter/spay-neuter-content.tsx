"use client";

import { Scissors, Heart, Shield, Calendar, Clock, CheckCircle, Phone, Stethoscope } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  "Prevent unwanted litters",
  "Decrease risk of reproductive cancers",
  "Reduce problem behaviors related to mating instincts",
  "Improve overall health and longevity",
  "Reduce territorial marking and roaming"
];

const surgicalFeatures = [
  {
    icon: Scissors,
    title: "State-of-the-Art Surgical Suite",
    description: "Modern surgical facilities with brand-new surgical instruments and advanced equipment."
  },
  {
    icon: Stethoscope,
    title: "Dedicated Technicians",
    description: "Two dedicated veterinary technicians monitor every procedure with comprehensive anesthetic protocols."
  },
  {
    icon: Heart,
    title: "Customized Timeline",
    description: "Surgical timing based on breed, size, growth pattern, health history, behavior, and household context."
  },
  {
    icon: Calendar,
    title: "Comprehensive Care",
    description: "Thorough discharge instructions, 24-hour follow-up calls, and complimentary recheck exams."
  }
];

const assessmentFactors = [
  "Breed characteristics and size",
  "Individual growth patterns",
  "Complete health history",
  "Behavioral considerations",
  "Household and lifestyle context"
];

export default function SpayNeuterContent() {
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
              <Scissors className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Spay & Neuter Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We don't follow a cookie-cutter timeline for surgery. Instead, we carefully assess your pet&apos;s individual characteristics to create the most appropriate surgical plan tailored to their specific needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
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

      {/* Benefits Section */}
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
              Benefits of Spaying & Neutering
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spaying and neutering provide numerous health and behavioral benefits for your pet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-accent p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Features Section */}
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
              Our Surgical Care Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced surgical facilities and personalized care protocols ensure the best outcomes for your pet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surgicalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
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
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Factors Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Personalized Surgical Timeline
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We carefully evaluate multiple factors to determine the optimal timing for your pet&apos;s spay or neuter procedure, ensuring the best possible outcome.
              </p>
              
              <div className="space-y-4">
                {assessmentFactors.map((factor, index) => (
                  <motion.div
                    key={factor}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Comprehensive Post-Operative Care
                </h3>
                <div className="space-y-4 mb-6 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Thorough discharge instructions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">24-hour follow-up call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Complimentary recheck exams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Proactive complication prevention</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Serving Colorado Springs & Surrounding Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We provide spay and neuter services to Colorado Springs, Manitou Springs, Pueblo, and surrounding communities with personalized care for every pet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Appointment</Link>
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
      <section className="py-16 bg-background">
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
              Common questions about spay and neuter services at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                When is the best time to spay or neuter my pet?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  We don&apos;t follow a one-size-fits-all approach. The optimal timing depends on your pet&apos;s breed, size, growth pattern, health history, and individual circumstances. 
                  For small dogs, we often recommend 6-9 months, while larger breeds may benefit from waiting until 12-18 months. 
                  We&apos;ll work with you to determine the best timeline for your specific pet.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What are the main benefits of spaying and neutering?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Spaying and neutering prevent unwanted litters and significantly reduce the risk of reproductive cancers. 
                  They also help decrease problematic behaviors like territorial marking, roaming, and aggression. 
                  Additionally, these procedures can improve your pet&apos;s overall health and longevity by eliminating the risk of certain reproductive diseases.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How do you ensure safety during the procedure?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  We use our state-of-the-art surgical suite with brand-new instruments and advanced monitoring equipment. 
                  Two dedicated veterinary technicians monitor your pet throughout the procedure using comprehensive anesthetic protocols. 
                  We also perform pre-surgical blood work and maintain strict sterile techniques to ensure the safest possible outcome.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What is included in your post-operative care?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Our comprehensive post-operative care includes thorough discharge instructions, a 24-hour follow-up call to check on your pet, 
                  and complimentary recheck exams. We provide detailed guidelines for activity restriction, wound care, and medication administration. 
                  Our team is always available to answer questions during the recovery period.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How long is the recovery period?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Most pets require 10-14 days of restricted activity after spay/neuter surgery. During this time, limit running, jumping, and rough play. 
                  Female pets (spay) typically need slightly longer recovery due to the more invasive procedure. 
                  We&apos;ll provide specific activity guidelines and monitor healing progress during follow-up visits.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}