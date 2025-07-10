"use client";

import { Heart, Camera, Scissors, Shield, CheckCircle, Clock, Monitor, X, Phone, Stethoscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const dentalServices = [
  {
    icon: Camera,
    title: "Full Mouth Radiographs",
    description: "Full mouth radiographs with every dental procedure to detect hidden dental problems below the gumline including infected roots, bone loss, and conditions not visible during basic oral exam."
  },
  {
    icon: Heart,
    title: "Comprehensive Cleaning",
    description: "Thorough dental cleaning under general anesthesia to ensure complete plaque and tartar removal."
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    description: "Advanced oral procedures including difficult tooth extractions, oral mass removals, and oral trauma repair performed by Dr. Unsell."
  },
  {
    icon: Monitor,
    title: "Extensive Anesthetic Monitoring",
    description: "Extensive anesthetic monitoring including ECG, blood pressure, pulse oximetry, capnography, and temperature monitoring for safety."
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
              Veterinary Dental Care & Oral Surgery
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We provide comprehensive dental care with full mouth radiographs for every dental procedure, oral surgery, and extensive anesthetic monitoring performed by Dr. Robbie Unsell with advanced training.
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

      {/* Dr. Unsell Expertise Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Expert Dental Care by Dr. Robbie Unsell
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Dr. Robbie Unsell has advanced training in veterinary dental care and oral surgery. 
                For procedures that are too complex, we collaborate with local veterinary dental specialists in Colorado Springs 
                to ensure your pet receives the best possible care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Full Mouth Radiographs</h3>
                  <p className="text-sm text-muted-foreground">Every dental procedure includes complete X-ray imaging</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Scissors className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Advanced Oral Surgery</h3>
                  <p className="text-sm text-muted-foreground">Difficult extractions and oral trauma repair</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Extensive Monitoring</h3>
                  <p className="text-sm text-muted-foreground">Complete anesthetic monitoring for safety</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Schedule Dental Consultation
                </Link>
              </Button>
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
              Common questions about veterinary dental care at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Why are full mouth radiographs important?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  They help identify hidden problems under the gums like infected roots, bone loss, conditions not visible during basic oral exam, and potential jaw bone integrity issues for small dogs and cats.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Does my pet need anesthesia for dental cleaning?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, because anesthesia is essential for thorough and safe cleaning, taking radiographs, cleaning below gumline, and performing extractions.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What dental surgeries does Dr. Unsell perform?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Advanced oral procedures including difficult tooth extractions, oral mass removals, and oral trauma repair. If a procedure is too complex, we will refer to a local veterinary dental specialist in Colorado Springs.
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

      {/* Contact Information Section */}
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
              Schedule Your Pet&apos;s Dental Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to schedule your pet&apos;s comprehensive dental examination and treatment with Dr. Unsell.
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
                    Colorado Springs dental specialists available
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call for Dental Appointment
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}