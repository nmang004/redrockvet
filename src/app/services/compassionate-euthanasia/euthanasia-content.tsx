"use client";

import { Heart, Shield, Clock, Calendar, Phone, CheckCircle, Home, Star } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const qualityFactors = [
  "Pain levels and discomfort",
  "Appetite and eating habits",
  "Mobility and movement ability",
  "Overall comfort and well-being",
  "Interest in surroundings and activities",
  "Response to family interactions"
];

const services = [
  {
    icon: Heart,
    title: "In-Clinic Services",
    description: "Peaceful, quiet environment in our clinic where you can stay with your pet during the procedure."
  },
  {
    icon: Home,
    title: "In-Home Referrals",
    description: "We can refer you to trusted professionals who provide compassionate euthanasia services in your home."
  },
  {
    icon: Shield,
    title: "Fear-Free Approach",
    description: "Low-stress, fear-free handling techniques ensure your pet&apos;s comfort throughout the process."
  },
  {
    icon: Star,
    title: "Aftercare Options",
    description: "Private or communal cremation, keepsakes like paw prints, and grief support resources."
  }
];

const supportFeatures = [
  "Quality of life scale assessment",
  "Quiet, supportive environment for goodbyes",
  "Option to stay with your pet throughout",
  "Flexible scheduling for your needs",
  "Emotional support and grief resources",
  "Memorial keepsakes available"
];

export default function EuthanasiaContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-blue-500/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-8"
            >
              <Heart className="w-10 h-10 text-purple-500" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Compassionate Euthanasia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We provide compassionate euthanasia services with the utmost respect, empathy, and care. We believe pets deserve a peaceful, pain-free passing, surrounded by love and comfort.
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
                <Link href="tel:719-204-3647">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (719) 204-3647
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality of Life Section */}
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
                Quality of Life Assessment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We help pet owners assess their pet&apos;s quality of life using a comprehensive quality-of-life scale. This compassionate evaluation considers multiple factors to guide difficult decisions.
              </p>
              
              <div className="space-y-4">
                {qualityFactors.map((factor, index) => (
                  <motion.div
                    key={factor}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-foreground">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <Heart className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Guided Decision Support
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our experienced veterinarians provide compassionate guidance to help you determine when the time may be right, always prioritizing your pet&apos;s comfort and dignity.
                </p>
                
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Discuss Quality of Life</Link>
                </Button>
              </div>
            </motion.div>
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
              Our Compassionate Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer flexible options to ensure your pet&apos;s final moments are peaceful and surrounded by love.
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
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-purple-500" />
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

      {/* Support Features Section */}
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
              Comprehensive Support & Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide complete support throughout this difficult time, ensuring both you and your pet are cared for with dignity and compassion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-accent p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                We&apos;re Here to Support You
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Making end-of-life decisions for your beloved pet is never easy. Our compassionate team is here to guide you through this difficult time with understanding, respect, and care.
              </p>
              
              <div className="bg-background rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-purple-500" />
                    <span className="text-foreground font-semibold">(719) 204-3647</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="text-foreground">Monday-Friday, 8am-5pm</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <span className="text-foreground">Flexible scheduling available</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="tel:719-204-3647">Call Now</Link>
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
              Common questions about compassionate end-of-life care at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How do I know when it&apos;s time for euthanasia?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  This is one of the most difficult decisions pet owners face. We use quality of life assessments that consider pain levels, 
                  appetite, mobility, and your pet&apos;s interest in surroundings and family interactions. 
                  We&apos;ll work with you to honestly evaluate your pet&apos;s condition and help you make this compassionate decision when the time comes.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What happens during the euthanasia procedure?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  The procedure is gentle and peaceful. We use a sedative first to help your pet relax, followed by an injection that allows them to pass away peacefully in your arms. 
                  You can stay with your pet throughout the entire process. We take as much time as you need for final goodbyes 
                  and ensure the experience is as peaceful as possible for both you and your pet.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                Can I arrange for in-home euthanasia?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  While we provide in-clinic euthanasia services, we understand many families prefer the comfort of their own home. 
                  We can refer you to trusted professionals who specialize in compassionate in-home euthanasia services. 
                  This allows your pet to be in familiar surroundings with all family members present.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What aftercare options are available?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  We offer both private and communal cremation options through our trusted partners. 
                  Private cremation returns your pet&apos;s ashes to you, while communal cremation provides a peaceful resting place with other beloved pets. 
                  We can also help arrange memorial keepsakes like paw prints and provide grief support resources.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How can you help me through the grief process?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Grief is a natural part of losing a beloved companion. We provide emotional support throughout the process and can connect you with grief counseling resources. 
                  We also offer memorial keepsakes and can help you create meaningful ways to remember your pet. 
                  Our team is always available to talk and provide support during this difficult time.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}