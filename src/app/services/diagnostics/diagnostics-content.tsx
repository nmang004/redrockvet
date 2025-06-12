"use client";

import { Camera, Monitor, TestTube, Stethoscope, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const diagnosticServices = [
  {
    icon: Camera,
    title: "Digital X-rays",
    description: "High-resolution digital radiography for quick, accurate imaging of bones, organs, and internal structures."
  },
  {
    icon: Monitor,
    title: "Ultrasound",
    description: "Non-invasive ultrasound imaging to examine internal organs, detect abnormalities, and guide procedures."
  },
  {
    icon: TestTube,
    title: "Blood Work",
    description: "Comprehensive blood chemistry panels, complete blood counts, and specialized testing for accurate diagnosis."
  },
  {
    icon: Stethoscope,
    title: "Urinalysis",
    description: "Complete urine analysis to detect kidney disease, diabetes, infections, and other health conditions."
  }
];

const conditions = [
  "Kidney and liver disease",
  "Diabetes and hormonal disorders",
  "Heart and lung conditions",
  "Gastrointestinal problems",
  "Urinary tract infections",
  "Cancer detection",
  "Pregnancy monitoring",
  "Pre-surgical evaluation"
];

const features = [
  "Same-day results available",
  "State-of-the-art equipment",
  "Expert interpretation",
  "Digital records and sharing",
  "Comprehensive health profiles",
  "Preventive health screening"
];

const testPricing = [
  { name: "Digital X-ray", description: "Single view radiograph", price: "From $125" },
  { name: "Ultrasound Exam", description: "Abdominal ultrasound", price: "From $250" },
  { name: "Complete Blood Panel", description: "Chemistry and CBC", price: "From $89" },
  { name: "Urinalysis", description: "Complete urine analysis", price: "From $45" }
];

export default function DiagnosticsContent() {
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
              Diagnostics
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              State-of-the-art diagnostic equipment for accurate diagnosis and treatment planning. Advanced imaging and laboratory services for comprehensive pet care.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Diagnostic Testing</Link>
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
              Our Diagnostic Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced diagnostic technology to provide accurate, timely results for better pet care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticServices.map((service, index) => {
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

      {/* Conditions & Features */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Conditions We Diagnose */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conditions We Help Diagnose
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced diagnostic tools help us detect and monitor a wide range of health conditions for early intervention and better outcomes.
              </p>
              
              <div className="space-y-3">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={condition}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Diagnostics
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We invest in the latest diagnostic technology to provide the most accurate results in the shortest time possible.
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Diagnostic Testing Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent pricing for all diagnostic services. Many tests can be performed while you wait.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-accent rounded-2xl p-8 border border-border"
          >
            <div className="space-y-6">
              {testPricing.map((test, index) => (
                <div key={test.name} className="flex justify-between items-center py-4 border-b border-border last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{test.name}</h4>
                    <p className="text-muted-foreground">{test.description}</p>
                  </div>
                  <span className="font-bold text-primary text-lg">{test.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Results in 15-30 minutes</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Digital records included</span>
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href="/contact">Schedule Diagnostic Testing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Advanced Diagnostic Technology
            </h2>
            <div className="bg-background rounded-2xl p-8 border border-border max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Digital Imaging</h3>
                  <p className="text-sm text-muted-foreground">High-resolution X-rays and ultrasound</p>
                </div>
                <div>
                  <TestTube className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">In-House Lab</h3>
                  <p className="text-sm text-muted-foreground">Complete blood work and urinalysis</p>
                </div>
                <div>
                  <Monitor className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Digital Records</h3>
                  <p className="text-sm text-muted-foreground">Secure, accessible medical records</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Quick Results</h3>
                  <p className="text-sm text-muted-foreground">Same-day diagnosis and treatment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}