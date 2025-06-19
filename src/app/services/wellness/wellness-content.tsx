"use client";

import { Stethoscope, Heart, Shield, Calendar, Clock, CheckCircle, Dog, Cat, Bug, Activity } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Dog,
    title: "Dog Vaccinations",
    description: "Protect against rabies, distemper, parvovirus with customized vaccination schedules and booster shots for ongoing immunity."
  },
  {
    icon: Cat,
    title: "Cat Vaccinations",
    description: "Defend against Feline Panleukopenia, upper respiratory viruses, and rabies. Tailored to indoor/outdoor status with Feline Leukemia vaccine recommendations."
  },
  {
    icon: Bug,
    title: "Regional Health Protection",
    description: "Protection against tick-borne diseases prevalent in Colorado and heartworm disease risk from mosquitoes."
  },
  {
    icon: Activity,
    title: "Annual Lab Work",
    description: "Comprehensive baseline health monitoring with annual laboratory work for early detection of potential health issues."
  }
];

const benefits = [
  "Regular wellness screenings for health maintenance",
  "Early detection of potential health issues",
  "Tailored vaccination and preventive care strategies",
  "Protection against regional diseases in Colorado",
  "Elanco half-volume vaccines available",
  "Comprehensive preventive care approach"
];

export default function WellnessContent() {
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
              <Stethoscope className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Preventative Pet Care in Colorado Springs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Pet wellness and vaccinations are vital for maintaining your pet&apos;s health. Our comprehensive preventive care approach includes early detection of potential health issues and tailored vaccination strategies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
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
              Comprehensive Vaccination & Wellness Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our preventive care services are designed to protect your pet against regional diseases and maintain optimal health throughout their life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
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
                Benefits of Regular Wellness Exams
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Regular wellness exams are one of the most important things you can do to keep your pet healthy and happy throughout their life.
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Schedule Your Pet&apos;s Wellness Exam
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">30-45 minute appointments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Flexible scheduling available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Comprehensive health assessment</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-4">Starting from $89</p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Book Your Appointment</Link>
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
              Common questions about preventative care and wellness exams at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How often should my pet have a wellness exam?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  We recommend annual wellness exams for healthy adult pets, and twice yearly for senior pets (over 7 years for dogs, over 9 years for cats). 
                  Puppies and kittens need more frequent visits for vaccinations and monitoring during their first year. 
                  Regular check-ups help us detect health issues early when they&apos;re most treatable.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What vaccinations does my pet need in Colorado?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Core vaccines for dogs include rabies, distemper, and parvovirus. In Colorado, we also recommend Lyme disease and leptospirosis vaccines 
                  due to regional risks. For cats, core vaccines include rabies and FVRCP (distemper complex). 
                  We may recommend additional vaccines like Feline Leukemia based on your pet&apos;s lifestyle and risk factors.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What&apos;s included in a wellness exam?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  A comprehensive wellness exam includes a thorough physical examination, weight and body condition assessment, 
                  discussion of nutrition and behavior, parasite screening, and vaccination updates as needed. 
                  We also recommend annual lab work for baseline health monitoring and early detection of potential issues.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                Do you offer titer testing instead of automatic vaccinations?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, we offer titer testing to measure your pet&apos;s immunity levels for certain diseases. 
                  This can help determine if vaccination boosters are necessary. However, some vaccines like rabies are required by law regardless of titer results. 
                  We&apos;ll discuss the best vaccination schedule for your individual pet based on their health, lifestyle, and risk factors.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What regional health concerns should Colorado pet owners know about?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Colorado pets face unique risks including tick-borne diseases like Rocky Mountain Spotted Fever and Colorado Tick Fever, 
                  rattlesnake encounters in certain areas, and altitude-related concerns for pets moving from lower elevations. 
                  Year-round flea and tick prevention is essential, and we may recommend specific vaccines or preventatives based on your location and activities.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}