"use client";

import { Heart, Camera, Scissors, Shield, CheckCircle, Clock, Monitor, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const dentalServices = [
  {
    icon: X,
    title: "Full Mouth Radiographs",
    description: "Complete X-ray imaging with every dental procedure to identify hidden problems under the gums including infected roots, bone loss, and root abscesses."
  },
  {
    icon: Heart,
    title: "Comprehensive Cleaning",
    description: "Thorough dental cleaning under general anesthesia to ensure complete plaque and tartar removal."
  },
  {
    icon: Scissors,
    title: "Advanced Oral Surgery",
    description: "Difficult tooth extractions, oral mass removals, and oral trauma repair performed by experienced veterinarians."
  },
  {
    icon: Monitor,
    title: "Extensive Anesthetic Monitoring",
    description: "Two dedicated credentialed technicians monitor ECG, blood pressure, pulse oximetry, capnography, and temperature during procedures."
  }
];

const signs = [
  "Bad breath (halitosis)",
  "Yellow or brown tartar buildup",
  "Red, swollen, or bleeding gums",
  "Difficulty eating or chewing",
  "Pawing at the face or mouth",
  "Loose or missing teeth"
];

const benefits = [
  "Full mouth radiographs identify hidden dental problems",
  "Essential for overall pet well-being, not just fresh breath",
  "Comprehensive anesthetic monitoring for safety",
  "Advanced oral surgery capabilities",
  "Prevents painful conditions from going undetected",
  "Professional anesthesia ensures thorough and safe cleaning"
];

const procedures = [
  { name: "Basic Dental Cleaning", description: "Complete cleaning and polishing", price: "From $149" },
  { name: "Dental Cleaning + Extractions", description: "Cleaning with tooth removal", price: "From $299" },
  { name: "Oral Surgery", description: "Advanced surgical procedures", price: "From $450" },
  { name: "Dental X-rays", description: "Digital dental radiographs", price: "From $89" }
];

export default function DentalContent() {
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
              Veterinary Dental Care
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Your pet&apos;s dental health is about more than fresh breath—it's essential to their overall well-being. We provide comprehensive dental care with full mouth radiographs and advanced anesthetic monitoring.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Dental Exam</Link>
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
              Our Dental Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care to keep your pet&apos;s mouth healthy and pain-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dentalServices.map((service, index) => {
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

      {/* Warning Signs & Benefits */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Warning Signs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Warning Signs of Dental Problems
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Watch for these signs that indicate your pet may need dental care. Early intervention can prevent pain and serious health issues.
              </p>
              
              <div className="space-y-3">
                {signs.map((sign, index) => (
                  <motion.div
                    key={sign}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-foreground">{sign}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits of Regular Dental Care
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Professional dental care provides numerous health benefits for your pet beyond just clean teeth.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
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
              Dental Care Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent pricing for all our dental services. Contact us for a personalized treatment plan.
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
              {procedures.map((procedure, index) => (
                <div key={procedure.name} className="flex justify-between items-center py-4 border-b border-border last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{procedure.name}</h4>
                    <p className="text-muted-foreground">{procedure.description}</p>
                  </div>
                  <span className="font-bold text-primary text-lg">{procedure.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Free dental exam with any cleaning</span>
              </div>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href="/contact">Schedule Your Pet's Dental Care</Link>
              </Button>
            </div>
          </motion.div>
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
              Common questions about veterinary dental care at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Why does my pet need anesthesia for dental cleaning?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Professional dental cleaning requires anesthesia to ensure your pet&apos;s safety and allow for thorough cleaning. 
                  Anesthesia prevents stress and fear, allows us to clean below the gum line where most dental disease occurs, 
                  and enables us to take full mouth radiographs to identify hidden problems. 
                  We use extensive monitoring with two dedicated technicians during every procedure.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                How often should my pet have dental cleanings?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Most pets benefit from professional dental cleaning every 1-3 years, depending on their age, breed, and oral health. 
                  Smaller dogs and certain breeds may need more frequent cleanings due to genetic predisposition to dental disease. 
                  We&apos;ll assess your pet&apos;s individual needs during their wellness exam and recommend an appropriate schedule.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What are dental radiographs and why are they necessary?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Dental radiographs (X-rays) allow us to see what&apos;s happening below the gum line, where most dental disease occurs. 
                  They help identify infected tooth roots, bone loss, root abscesses, and other problems not visible during visual examination. 
                  We perform full mouth radiographs with every dental procedure to ensure we don&apos;t miss any hidden issues that could cause pain.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Can I brush my pet&apos;s teeth at home?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, daily tooth brushing is the gold standard for at-home dental care. Use pet-specific toothpaste (never human toothpaste) 
                  and start slowly to get your pet comfortable with the process. However, home care alone cannot replace professional cleanings, 
                  as only anesthetic dental procedures can clean below the gum line and address existing dental disease.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What should I expect after my pet&apos;s dental procedure?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Most pets recover quickly from dental procedures and can go home the same day. 
                  You may see some mild drowsiness from anesthesia and possibly some minor gum bleeding. 
                  We&apos;ll provide specific post-operative instructions, including any needed pain medication and dietary recommendations. 
                  If extractions were performed, soft food may be recommended for a few days while the gums heal.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}