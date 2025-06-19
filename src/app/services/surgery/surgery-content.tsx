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
              Common questions about surgical procedures at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How do I prepare my pet for surgery?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Fast your pet for 12 hours before surgery (no food after midnight), but water is usually okay until morning. 
                  Follow any specific pre-surgical instructions we provide. Make sure your pet is up to date on vaccines 
                  and let us know about any medications they&apos;re taking. We&apos;ll provide detailed pre-surgical instructions during your consultation.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What safety measures do you use during surgery?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  We use advanced anesthesia monitoring including ECG, blood pressure, pulse oximetry, and capnography. 
                  Our state-of-the-art surgical suite is equipped with modern instruments and technology. 
                  A dedicated veterinary technician monitors your pet throughout the entire procedure, 
                  and we perform pre-surgical blood work to ensure your pet can safely undergo anesthesia.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How long is the recovery time after surgery?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Recovery time varies depending on the procedure. Routine surgeries like spay/neuter typically require 10-14 days of restricted activity. 
                  More complex procedures may need longer recovery periods. We provide detailed post-operative instructions, 
                  pain medications as needed, and schedule follow-up appointments to monitor healing. Most pets can go home the same day.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                Do you provide pain management after surgery?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, we prioritize pain management as an essential part of surgical care. We use multi-modal pain management techniques 
                  including pre-emptive pain medication, local anesthetics when appropriate, and post-operative pain medications. 
                  We&apos;ll send you home with pain medication and clear instructions on how to keep your pet comfortable during recovery.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                When should I schedule a surgical consultation?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Schedule a consultation as soon as you know your pet needs surgery or if your regular veterinarian has recommended a procedure. 
                  For routine surgeries like spay/neuter, booking 2-3 weeks in advance is ideal. 
                  For urgent surgical needs, we can often accommodate same-day or next-day consultations. 
                  During the consultation, we&apos;ll discuss the procedure, answer questions, and create a surgical plan.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}