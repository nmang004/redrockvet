"use client";

import { Shield, Clock, Phone, Heart, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const emergencyServices = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency care when your pet needs immediate medical attention."
  },
  {
    icon: Heart,
    title: "Trauma Care",
    description: "Advanced treatment for accidents, injuries, and life-threatening conditions."
  },
  {
    icon: Shield,
    title: "Critical Care",
    description: "Intensive monitoring and treatment for critically ill or injured pets."
  },
  {
    icon: Phone,
    title: "Emergency Surgery",
    description: "Life-saving surgical procedures available immediately when needed."
  }
];

const emergencySigns = [
  "Difficulty breathing or choking",
  "Severe bleeding or trauma",
  "Loss of consciousness or collapse",
  "Seizures or convulsions",
  "Suspected poisoning",
  "Inability to urinate or defecate",
  "Severe vomiting or diarrhea",
  "Signs of extreme pain",
  "Bloated or distended abdomen",
  "Eye injuries or sudden blindness"
];

const whatToBring = [
  "Your pet's medical records",
  "Current medications",
  "Insurance information",
  "Emergency contact numbers",
  "Any suspected toxins consumed",
  "List of recent symptoms"
];

export default function EmergencyContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-8"
            >
              <Shield className="w-10 h-10 text-red-600" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Emergency Care
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              24/7 emergency veterinary services for when your pet needs immediate medical attention. Our experienced team is here for life-threatening situations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <Link href="tel:+1234567890">Call Emergency Line</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg max-w-lg mx-auto"
            >
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-800">Emergency Hotline</span>
              </div>
              <p className="text-2xl font-bold text-red-600">(555) 123-4567</p>
              <p className="text-sm text-red-700">Available 24/7 for emergencies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
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
              Our Emergency Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive emergency care available around the clock for critical situations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-red-100">
                    <CardHeader>
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-red-600" />
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

      {/* When to Seek Emergency Care */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Emergency Signs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                When to Seek Emergency Care
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If your pet is experiencing any of these symptoms, seek immediate veterinary attention. Time is critical in emergency situations.
              </p>
              
              <div className="space-y-3">
                {emergencySigns.map((sign, index) => (
                  <motion.div
                    key={sign}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-foreground">{sign}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What to Bring */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-background rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  What to Bring for Emergency Care
                </h3>
                <p className="text-muted-foreground mb-6">
                  Having these items ready can help our emergency team provide the best care quickly.
                </p>
                
                <div className="space-y-3 mb-8">
                  {whatToBring.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="font-semibold text-red-800 mb-2">Emergency Pricing</p>
                    <p className="text-2xl font-bold text-red-600">From $199</p>
                    <p className="text-sm text-red-700">Initial emergency consultation</p>
                  </div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link href="tel:+1234567890">Call Emergency Line Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* After Hours Information */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              We're Here When You Need Us
            </h2>
            <div className="bg-accent rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">Emergency care available every day of the year</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Direct Emergency Line</h3>
                  <p className="text-sm text-muted-foreground">Speak directly with our emergency team</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Expert Care</h3>
                  <p className="text-sm text-muted-foreground">Experienced emergency veterinarians on staff</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}