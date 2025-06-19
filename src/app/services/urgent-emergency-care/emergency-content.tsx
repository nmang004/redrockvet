"use client";

import { Zap, Phone, Clock, AlertTriangle, Heart, Stethoscope, CheckCircle, Calendar } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const emergencySigns = [
  "Sudden limping",
  "Minor wounds",
  "Vomiting or diarrhea",
  "Sudden lethargy",
  "Eye issues",
  "Allergic reactions",
  "Behavioral changes"
];

const services = [
  {
    icon: Zap,
    title: "Same-Day Appointments",
    description: "Quick assessment and stabilization during business hours for urgent pet health concerns."
  },
  {
    icon: Heart,
    title: "Fear-Free Handling",
    description: "Low-stress handling techniques that prioritize your pet&apos;s comfort during emergency situations."
  },
  {
    icon: Stethoscope,
    title: "Rapid Assessment",
    description: "Fast, thorough evaluation to quickly identify and address your pet&apos;s urgent health needs."
  },
  {
    icon: Phone,
    title: "Emergency Consultation",
    description: "Professional guidance to determine if your pet needs immediate care or can wait for regular hours."
  }
];

const whenToCall = [
  "If your pet isn't feeling well",
  "When waiting isn't an option",
  "If you're concerned about your pet&apos;s health",
  "For sudden changes in behavior or appetite"
];

export default function EmergencyContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 to-orange-500/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8"
            >
              <Zap className="w-10 h-10 text-red-500" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Urgent Emergency Care
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Same-day veterinary appointments for urgent pet health concerns in the Pikes Peak region. 
              When your pet needs immediate care, we're here to help with fear-free, professional treatment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                <Link href="tel:719-204-3647">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (719) 204-3647
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Appointment</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Signs Section */}
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
              Common Urgent Care Situations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are some of the common situations that require same-day veterinary attention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencySigns.map((sign, index) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-accent p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-foreground font-medium">{sign}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Emergency Care Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive urgent care services with a focus on minimizing stress for both pets and their families.
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

      {/* When to Call Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                When to Call for Emergency Care
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't hesitate to contact us if you're concerned about your pet&apos;s health. Early intervention can make a significant difference in your pet&apos;s recovery.
              </p>
              
              <div className="space-y-4">
                {whenToCall.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Call Early for Same-Day Care
                </h3>
                <p className="text-muted-foreground mb-6">
                  Urgent care slots fill up quickly. Call early in the day to secure a same-day appointment for your pet.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold">(719) 204-3647</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Monday-Friday, 8am-5pm</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full bg-red-500 hover:bg-red-600" asChild>
                  <Link href="tel:719-204-3647">Call Now</Link>
                </Button>
              </div>
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
              Common questions about urgent emergency care at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What qualifies as a veterinary emergency?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Common emergencies include sudden limping, persistent vomiting or diarrhea, difficulty breathing, 
                  wounds or cuts, sudden lethargy, eye injuries, allergic reactions, or any behavior that seems abnormal for your pet. 
                  When in doubt, it&apos;s always better to call and discuss your concerns with our team.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Do I need an appointment for emergency care?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, we recommend calling ahead for same-day emergency appointments as urgent care slots fill up quickly. 
                  Calling early in the day gives you the best chance of securing an appointment. Our team can also provide guidance 
                  over the phone to help determine the urgency of your pet&apos;s condition.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What should I do while waiting for emergency care?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Keep your pet calm and comfortable. For wounds, apply gentle pressure with a clean cloth to control bleeding. 
                  Don&apos;t give food or water unless instructed. If your pet is vomiting, remove food and water bowls. 
                  Transport your pet safely in a carrier or have someone help you. Our team will provide specific instructions when you call.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                How does your fear-free approach work during emergencies?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Even during urgent situations, we prioritize your pet&apos;s emotional well-being. We use low-stress handling techniques, 
                  pheromone therapy, and gentle restraint methods. Our team is trained to recognize signs of fear and anxiety 
                  and will adjust our approach accordingly while still providing necessary emergency care.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                When should I go to an emergency hospital instead?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  For severe emergencies outside our business hours, life-threatening situations like severe trauma, poisoning, 
                  difficulty breathing, or seizures, you should go directly to a 24-hour emergency hospital. 
                  We&apos;ll always be honest about what we can handle and will refer you to emergency specialists when needed for your pet&apos;s safety.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}