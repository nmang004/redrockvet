"use client";

import { Cat, Heart, Shield, Stethoscope, Clock, CheckCircle, Phone, Star } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const felineFeatures = [
  {
    icon: Cat,
    title: "Separate Cat Wing",
    description: "Feline-only exam room, surgical suite, and boarding facilities that minimize interactions with dogs."
  },
  {
    icon: Heart,
    title: "Calming Environment",
    description: "Designed specifically for cat comfort with calming pheromones, neutral color palette, and ambient sounds."
  },
  {
    icon: Shield,
    title: "Fear Free Certified",
    description: "Our professionals are certified in Fear Free techniques and use low-stress handling methods."
  },
  {
    icon: Stethoscope,
    title: "Evidence-Based Medicine",
    description: "We implement current evidence-based feline medicine with robust pre-surgical screening."
  }
];

const environmentalFeatures = [
  "Soft and warm surfaces throughout",
  "Nature sounds or soothing music",
  "Calming pheromones in the air",
  "Neutral, cat-friendly color palette",
  "Separate entrance from dog areas",
  "Specialized feline boarding facilities"
];

const careCommitments = [
  {
    icon: Heart,
    title: "Attentive Communication",
    description: "We prioritize clear, compassionate communication with cat owners about their pet&apos;s unique needs."
  },
  {
    icon: Star,
    title: "Cat Friendly Practice",
    description: "We are pursuing Cat Friendly Practice certification to ensure the highest standards of feline care."
  },
  {
    icon: Shield,
    title: "Multi-Modal Analgesia",
    description: "We use comprehensive pain management protocols to minimize patient discomfort during procedures."
  },
  {
    icon: Clock,
    title: "Stress-Free Experience",
    description: "Every aspect of our cat clinic is designed to create a serene, stress-free veterinary experience."
  }
];

export default function CatClinicContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-pink-500/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-8"
            >
              <Cat className="w-10 h-10 text-purple-500" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Dedicated Cat Clinic
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Our specialized cat clinic features a separate feline wing designed specifically for cat comfort, with Fear Free certified professionals providing evidence-based feline medicine in a stress-free environment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Cat Appointment</Link>
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

      {/* Feline Features Section */}
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
              Specialized Feline Care Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of our cat clinic is designed with feline comfort and well-being in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {felineFeatures.map((feature, index) => {
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
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-purple-500" />
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

      {/* Environmental Features Section */}
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
                Cat-Centric Environment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our dedicated cat wing creates a serene, stress-free environment specifically designed to meet the unique needs of feline patients.
              </p>
              
              <div className="space-y-4">
                {environmentalFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
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
              <div className="text-center">
                <Cat className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Cat Friendly Practice Certification
                </h3>
                <p className="text-muted-foreground mb-6">
                  We are actively pursuing Cat Friendly Practice certification, demonstrating our commitment to providing the highest standards of feline veterinary care.
                </p>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-foreground">Gold standard feline care protocols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-foreground">Specialized feline handling techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-foreground">Stress-reduction protocols</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Book Cat Appointment</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Care Commitments Section */}
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
              Our Commitments to Feline Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to providing exceptional veterinary care tailored specifically to the unique needs of cats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careCommitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-purple-500" />
                      </div>
                      <CardTitle className="text-xl">{commitment.title}</CardTitle>
                      <CardDescription className="text-base">
                        {commitment.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ethical Commitment Section */}
      <section className="py-16 bg-purple-500/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ethical Feline Care
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We will not perform declawing procedures, as we believe in maintaining the natural integrity and well-being of our feline patients. Our focus is on providing compassionate, ethical veterinary care that respects cats' natural behaviors and needs.
              </p>
              
              <div className="bg-background rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-purple-500" />
                    <span className="text-foreground font-semibold">(719) 204-3647</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="text-foreground">Specialized cat appointments available</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Cat className="w-5 h-5 text-purple-500" />
                    <span className="text-foreground">Feline-only facilities</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Schedule Cat Visit</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="tel:719-204-3647">Call Cat Clinic</Link>
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