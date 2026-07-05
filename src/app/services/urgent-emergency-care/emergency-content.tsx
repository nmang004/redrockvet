"use client";

import { Zap, Phone, Clock, AlertTriangle, Heart, Stethoscope, CheckCircle, MapPin } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const emergencySigns = [
  "Limping",
  "Minor wounds",
  "Vomiting",
  "Diarrhea",
  "Lethargy",
  "Eye issues",
  "Allergic reactions",
  "Behavioral changes"
];

const services = [
  {
    icon: Zap,
    title: "Same-Day Urgent Care",
    description: "We set aside space for same-day appointments when your pet is sick or injured. Same-day availability is dependent on scheduling and staffing availability."
  },
  {
    icon: Heart,
    title: "Low-Stress, Fear-Free Handling",
    description: "We use low-stress, fear-free handling techniques to ensure your pet&apos;s comfort during urgent care."
  },
  {
    icon: Stethoscope,
    title: "Quick Assessment & Stabilization",
    description: "Fast assessment and stabilization of pet injuries during our business hours."
  },
  {
    icon: Phone,
    title: "Professional Consultation",
    description: "Call us to assess your pet&apos;s urgent care needs and schedule an appointment."
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
              Emergency Vet in Colorado Springs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We offer emergency and urgent care services for pets in the Pikes Peak region.
              During normal business hours, we provide same-day appointments and quick assessment for your pet&apos;s urgent needs. Same-day appointments are dependent on availability.
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
              What Situations Are Appropriate for Urgent Care?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These situations are appropriate for urgent care and often require same-day veterinary attention.
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
                  We set aside space for same-day appointments, dependent on availability. Call us to assess your pet&apos;s urgent care needs.
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
              Common questions about emergency and urgent care services at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Do you offer emergency and urgent care services?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, during normal business hours and depending on staff availability, we offer emergency and urgent care services.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                Can I get a same-day appointment if my pet is sick or injured?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, we set aside space for same-day appointments when your pet needs urgent care. Same-day appointments are dependent on availability.
                </p>
              </div>
            </details>

            <details className="group bg-background rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                What situations are appropriate for urgent care?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Situations appropriate for urgent care include limping, minor wounds, vomiting, diarrhea, lethargy, eye issues, allergic reactions, and behavioral changes.
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

      {/* After-Hours Emergency Referrals */}
      <section className="py-16 bg-red-500/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              After-Hours Emergency Care
            </h2>
            <p className="text-lg text-muted-foreground">
              For all after-hours and weekend emergencies, we do not have an on-call line.
              Please contact one of these trusted after-hours emergency facilities:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Animal ER Care</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:719-260-7141" className="text-primary hover:underline">
                    (719) 260-7141
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div className="text-muted-foreground">
                    5520 N. Nevada Ave, Ste 150<br />
                    Colorado Springs, CO 80918
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Open 24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Uintah Pet Emergency</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:719-633-3214" className="text-primary hover:underline">
                    (719) 633-3214
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div className="text-muted-foreground">
                    1635 W. Uintah St, Ste E<br />
                    Colorado Springs, CO 80904
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Open daily, noon to midnight (not overnight)</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-center"
          >
            <p className="text-foreground font-medium mb-2">Important Notice</p>
            <p className="text-muted-foreground">
              Red Rock Veterinary Health does not have an on-call emergency line for after-hours care.
              For urgent situations outside our business hours (Monday-Friday, 8am-5pm),
              please go directly to one of these emergency facilities. For overnight
              emergencies after midnight, Animal ER Care is open 24/7.
            </p>
          </motion.div>
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
              Contact Us for Urgent Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Call us to assess your pet&apos;s urgent care needs and schedule an appointment.
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
                  <h3 className="font-semibold text-foreground mb-2">Text</h3>
                  <a href="sms:719-355-8343" className="text-primary hover:underline text-lg">
                    (719) 355-8343
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:Reception@RedRockVet.com" className="text-primary hover:underline">
                    Reception@RedRockVet.com
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    3163 W. Colorado Ave<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday-Friday: 8am-5pm<br />
                    Closed Saturday & Sunday
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call Now for Urgent Care
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}