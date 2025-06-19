"use client";

import { Heart, Activity, Calendar, Stethoscope, Clock, CheckCircle, Phone, TestTube } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const conditions = [
  {
    icon: Heart,
    title: "Diabetes",
    description: "Comprehensive diabetes management including insulin therapy, dietary adjustments, and blood glucose monitoring."
  },
  {
    icon: Activity,
    title: "Kidney Disease",
    description: "Ongoing care for chronic kidney disease with specialized diets, medications, and regular monitoring."
  },
  {
    icon: Stethoscope,
    title: "Arthritis",
    description: "Pain management and mobility support for arthritic pets with medications and lifestyle modifications."
  },
  {
    icon: Heart,
    title: "Heart Disease",
    description: "Cardiac care including medication management and regular cardiac evaluations."
  },
  {
    icon: TestTube,
    title: "Metabolic Imbalances",
    description: "Treatment for hormonal and metabolic disorders affecting your pet&apos;s overall health."
  }
];

const managementApproach = [
  "Comprehensive, personalized care plans",
  "Regular check-ups and monitoring",
  "Laboratory work and diagnostic imaging",
  "Medication management and adjustments",
  "Continuous support and communication",
  "Collaborative treatment planning with owners"
];

const keyPrinciples = [
  {
    icon: Calendar,
    title: "Transparent Communication",
    description: "We believe in educating owners about their pet&apos;s condition and maintaining open communication channels."
  },
  {
    icon: Heart,
    title: "Quality of Life Focus",
    description: "We prioritize your pet&apos;s comfort and quality of life in all treatment decisions."
  },
  {
    icon: Activity,
    title: "Adaptable Care",
    description: "Treatment plans that adapt based on your pet&apos;s changing condition and response to therapy."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "More frequent visits for chronic conditions with flexible scheduling for urgent needs."
  }
];

export default function ChronicDiseaseContent() {
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
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Chronic Disease Management
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Comprehensive, personalized care for pets with chronic conditions. We develop treatment plans that match your pet&apos;s needs and your lifestyle while prioritizing their quality of life.
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

      {/* Conditions Treated Section */}
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
              Chronic Conditions We Treat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide specialized care for a wide range of chronic health conditions affecting pets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => {
              const IconComponent = condition.icon;
              return (
                <motion.div
                  key={condition.title}
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
                      <CardTitle className="text-xl">{condition.title}</CardTitle>
                      <CardDescription className="text-base">
                        {condition.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Management Approach Section */}
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
                Our Management Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We take a holistic, responsive approach to managing chronic pet diseases, focusing on individualized care and owner engagement.
              </p>
              
              <div className="space-y-4">
                {managementApproach.map((approach, index) => (
                  <motion.div
                    key={approach}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{approach}</span>
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
                Monitoring & Follow-up
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Customized check-up frequency</span>
                </div>
                <div className="flex items-center gap-3">
                  <TestTube className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Regular laboratory monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Flexible urgent care scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Quality of life assessments</span>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Start Management Plan</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
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
              Our Care Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in transparent communication, education, and collaborative treatment planning with pet owners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={principle.title}
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
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                      <CardDescription className="text-base">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                Partner With Us for Your Pet's Chronic Care
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let us help you navigate your pet&apos;s chronic condition with compassionate, expert care tailored to their individual needs.
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}