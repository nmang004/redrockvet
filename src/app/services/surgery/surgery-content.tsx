"use client";

import { Scissors, Heart, Shield, Clock, CheckCircle, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const surgeryTypes = [
  {
    icon: Heart,
    title: "Spay/Neuter Surgery",
    description: "Safe and routine reproductive surgeries to prevent unwanted pregnancies and reduce health risks."
  },
  {
    icon: Scissors,
    title: "Soft Tissue Surgery",
    description: "Advanced procedures for internal organs, skin, and other soft tissues with precision and care."
  },
  {
    icon: Shield,
    title: "Orthopedic Surgery",
    description: "Specialized bone and joint surgeries to restore mobility and reduce pain in your pet."
  },
  {
    icon: Clock,
    title: "Emergency Surgery",
    description: "Life-saving surgical procedures available 24/7 for critical situations."
  }
];

const features = [
  "State-of-the-art surgical suite",
  "Experienced veterinary surgeons",
  "Advanced anesthesia monitoring",
  "Post-operative pain management",
  "Comprehensive pre-surgical evaluation",
  "Detailed aftercare instructions"
];

const procedures = [
  { name: "Spay/Neuter", description: "Routine reproductive surgery", price: "From $299" },
  { name: "Tumor Removal", description: "Soft tissue mass removal", price: "From $450" },
  { name: "Orthopedic Surgery", description: "Bone and joint procedures", price: "From $800" },
  { name: "Emergency Surgery", description: "Life-saving procedures", price: "Consultation required" }
];

export default function SurgeryContent() {
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
              Surgery Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Advanced surgical procedures performed by experienced veterinarians in our state-of-the-art facility with the highest standards of safety and care.
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
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Surgery Types Section */}
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
              Our Surgical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of surgical procedures with advanced techniques and compassionate care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surgeryTypes.map((surgery, index) => {
              const IconComponent = surgery.icon;
              return (
                <motion.div
                  key={surgery.title}
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
                      <CardTitle className="text-xl">{surgery.title}</CardTitle>
                      <CardDescription className="text-base">
                        {surgery.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features & Pricing Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Surgery Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our surgical team combines years of experience with the latest technology to ensure the best possible outcomes for your pet.
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
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
              <div className="bg-background rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Surgery Pricing
                </h3>
                
                <div className="space-y-4 mb-8">
                  {procedures.map((procedure, index) => (
                    <div key={procedure.name} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                      <div>
                        <h4 className="font-semibold text-foreground">{procedure.name}</h4>
                        <p className="text-sm text-muted-foreground">{procedure.description}</p>
                      </div>
                      <span className="font-bold text-primary">{procedure.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Board-certified surgeons</span>
                  </div>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact">Schedule Consultation</Link>
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