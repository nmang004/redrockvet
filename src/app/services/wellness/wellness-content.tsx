"use client";

import { Stethoscope, Heart, Shield, Calendar, Clock, CheckCircle, Dog, Cat, Bug, Activity, Phone } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { wellnessFaqs } from "./faq";

const services = [
  {
    icon: Dog,
    title: "Dog Vaccinations",
    description: "Tailored vaccination schedules to protect against rabies, distemper, and parvovirus. We offer booster shots and ongoing immunization."
  },
  {
    icon: Cat,
    title: "Cat Vaccinations",
    description: "Protects against Feline Panleukopenia, upper respiratory viruses, rabies, and Feline Leukemia for outdoor cats."
  },
  {
    icon: Bug,
    title: "Colorado-Specific Protection",
    description: "Protection against tick-borne diseases like ehrlichiosis, anaplasmosis, Rocky Mountain spotted fever, and mosquito-borne illnesses."
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
  "Protection against diseases like parvovirus, distemper, panleukopenia, and leptospirosis",
  "Colorado-specific disease prevention strategies",
  "Elanco half-volume vaccines available",
  "Protection at dog parks from disease transmission"
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
              Regular pet wellness screenings are vital for maintaining pet health. Early detection of potential health issues is crucial. We focus on Colorado Springs & Manitou Springs environmental risks.
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
              Pet Wellness and Pet Vaccinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our vaccination services protect your pets against common diseases while addressing unique Colorado environmental risks.
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
            {wellnessFaqs.map((faq) => (
              <details key={faq.question} className="group bg-accent rounded-lg">
                <summary className="flex justify-between items-center gap-4 cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                  {faq.question}
                  <span className="text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Schedule Your Pet&apos;s Wellness Visit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to schedule your pet&apos;s comprehensive wellness exam and vaccinations.
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
                  <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
                  <p className="text-muted-foreground">
                    Colorado Springs & Manitou Springs
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call to Schedule Wellness Visit
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}