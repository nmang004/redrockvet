"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FileText,
  ClipboardList,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  CheckCircle,
  ExternalLink,
  FileCheck,
  Timer,
  Shield,
  PawPrint,
  Stethoscope,
  AlertTriangle,
  DollarSign,
  Download,
  CreditCard,
  Banknote
} from "lucide-react";
import Link from "next/link";

export default function ClientInformationContent() {
  const requiredForms = [
    {
      title: "New Client Form",
      description: "Required for all new clients, including existing clients of Dr. Unsell",
      icon: <Users className="w-8 h-8" />,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdkgGL9wmsit85uPMI7eq07j0J2pSdy8FxOjEiBeYUIuodKBA/viewform",
      color: "bg-blue-500",
      priority: "Required"
    },
    {
      title: "New Patient Form",
      description: "Each pet requires their own individual patient form",
      icon: <PawPrint className="w-8 h-8" />,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfCK4KASPIiEaRP3qkPNc6tbtdK1EiaZBFDL39SnFFEA-rwsA/viewform",
      color: "bg-green-500",
      priority: "Required"
    }
  ];

  const appointmentSteps = [
    {
      step: 1,
      title: "Complete Required Forms",
      description: "Fill out both the New Client Form and New Patient Form for each pet",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      step: 2,
      title: "Wait for Confirmation",
      description: "Allow 24-72 hours for our team to process your forms",
      icon: <Timer className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      step: 3,
      title: "Request Appointment",
      description: "Use our online portal to submit your appointment request",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      step: 4,
      title: "Appointment Confirmed",
      description: "You'll receive confirmation with appointment details",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-purple-500"
    }
  ];

  const resources = [
    {
      title: "Medical Record Portal",
      description: "Access your pet's medical records and history",
      icon: <FileCheck className="w-8 h-8" />,
      link: "/medical-record-portal",
      color: "bg-primary",
      internal: true
    },
    {
      title: "Request Appointment",
      description: "Submit your appointment request through our portal",
      icon: <Calendar className="w-8 h-8" />,
      link: "https://mobile.poe.idexx.com/login",
      color: "bg-green-500",
      internal: false
    },
    {
      title: "Fear-Free Resources",
      description: "Preparation guides for stress-free visits",
      icon: <Heart className="w-8 h-8" />,
      link: "/fear-free-resources",
      color: "bg-pink-500",
      internal: true
    }
  ];

  const pdfResources = [
    {
      title: "Fear-Free Cat Checklist",
      description: "Prepare your cat for a stress-free visit",
      link: "/Fear-free-cat.pdf",
      icon: <Download className="w-5 h-5" />
    },
    {
      title: "Fear-Free Dog Checklist",
      description: "Prepare your dog for a stress-free visit",
      link: "/fear-free-dog.pdf",
      icon: <Download className="w-5 h-5" />
    },
    {
      title: "Surgical Consent Form",
      description: "Pre-surgical consent and information",
      link: "/surgical-consent.pdf",
      icon: <Download className="w-5 h-5" />
    }
  ];

  const depositPolicyPoints = [
    {
      title: "New Client Deposit Requirement",
      description: "All new clients require a deposit for an appointment. This does not include any current or former clients of Dr. Unsell's or anyone that has been referred by Dr. Unsell's clients.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      title: "High Demand Policy",
      description: "We currently have a high demand for appointments so this policy helps prevent us from missing out on helping an animal in need.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-red-500"
    },
    {
      title: "24-Hour Cancellation Notice",
      description: "We ask that you provide at least 24 hours' notice whenever possible. If you cancel with less than 24 hours' notice or fail to show up for your appointment, your deposit will be forfeited.",
      icon: <Clock className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Emergency Situations",
      description: "We recognize that emergencies can arise. If you experience an urgent situation, please contact the clinic directly. We will do our best to assess each case individually and accommodate where possible.",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-orange-500"
    },
    {
      title: "Future Appointment Deposits",
      description: "If a client no-shows or cancels on the same day—without extenuating circumstances—a deposit will be required for all future appointments. This deposit must be paid at the time of scheduling.",
      icon: <Calendar className="w-6 h-6" />,
      color: "text-purple-500"
    },
    {
      title: "Surgical & Drop-off Deposits",
      description: "Deposits are also required for all surgical procedures and must be paid at the time of scheduling. This deposit will remain a credit on your account and will be applied toward your total invoice at checkout. Certain drop-off appointments may also require a deposit.",
      icon: <Shield className="w-6 h-6" />,
      color: "text-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/85" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/20 shadow-sm">
                <ClipboardList className="w-5 h-5 mr-2" />
                Complete Guide to Booking Your First Appointment
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                Your Journey to
                <span className="text-gradient block mt-2">Better Pet Care</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-muted-foreground font-light">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
                Welcome to Red Rock Veterinary Health. If you have an urgent need, please don't hesitate to call us at 719-204-3647 and leave a message with Angela who will personally ensure you receive the care you need. Otherwise, follow our simple step-by-step process below to book your first appointment and access all the resources you need for your pet's care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <div className="text-base text-muted-foreground font-medium">Required Forms</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">24-72h</div>
                <div className="text-base text-muted-foreground font-medium">Processing Time</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">Simple</div>
                <div className="text-base text-muted-foreground font-medium">4-Step Process</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Required Forms Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Required Forms
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Before your first visit, please complete these essential forms. Both forms are required for all new clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requiredForms.map((form, index) => (
              <motion.div
                key={form.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 border-2 border-primary/20 shadow-glow flex flex-col">
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
                    {form.priority}
                  </div>
                  
                  <CardHeader className="pb-6 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-4 rounded-xl ${form.color} text-white shadow-lg`}>
                        {form.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{index + 1}</div>
                        <div className="text-xs text-muted-foreground">Step</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">{form.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {form.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex-1 flex flex-col justify-end">
                    <Button 
                      asChild 
                      className="w-full text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                      size="lg"
                    >
                      <a 
                        href={form.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Complete Form
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Essential Resources
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Access all the tools and information you need for your pet's care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className={`p-4 rounded-xl ${resource.color} text-white w-fit mx-auto mb-4`}>
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-center">{resource.title}</CardTitle>
                    <CardDescription className="text-center text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex-1 flex flex-col justify-end">
                    <Button 
                      asChild 
                      className="w-full py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      variant={resource.internal ? "default" : "outline"}
                    >
                      <a 
                        href={resource.link} 
                        {...(!resource.internal && { target: "_blank", rel: "noopener noreferrer" })}
                        className="flex items-center justify-center"
                      >
                        Access Resource
                        {resource.internal ? (
                          <Calendar className="w-4 h-4 ml-2" />
                        ) : (
                          <ExternalLink className="w-4 h-4 ml-2" />
                        )}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* PDF Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Download Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {pdfResources.map((pdf, index) => (
                <motion.div
                  key={pdf.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{pdf.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{pdf.description}</p>
                      <Button asChild size="sm" variant="outline">
                        <a href={pdf.link} target="_blank" rel="noopener noreferrer">
                          {pdf.icon}
                          <span className="ml-2">Download</span>
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Process Timeline */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Booking Process
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to book your first appointment with us.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {appointmentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 text-center mb-6 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="md:hidden mb-4 flex justify-center">
                        <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center text-lg font-bold shadow-lg`}>
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className={`text-xl font-bold flex items-center gap-3 justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-start'}`}>
                        {index % 2 === 0 ? (
                          <>
                            <span className="order-1 md:order-1">{step.title}</span>
                            <div className={`p-2 rounded-lg ${step.color} text-white order-2 md:order-2`}>
                              {step.icon}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`p-2 rounded-lg ${step.color} text-white order-1 md:order-1`}>
                              {step.icon}
                            </div>
                            <span className="order-2 md:order-2">{step.title}</span>
                          </>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-shrink-0 hidden md:block">
                  <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg`}>
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Deposit & Cancellation Policy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              Please carefully review our comprehensive deposit and cancellation policies to ensure a smooth booking experience for you and your pet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {depositPolicyPoints.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                        <div className={policy.color}>
                          {policy.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                          {policy.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {policy.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Thank You for Your Understanding
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We appreciate your understanding and cooperation with our policies. These measures help us provide the best possible care for all our patients while maintaining efficient scheduling for our busy practice.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Payment Options
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of payment options to make veterinary care accessible for every family.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Cherry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    No-interest, short-term payment plans for pet care expenses.
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/payment-plans">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">CareCredit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Flexible financing for veterinary care with promotional financing options.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">ScratchPay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Simple and affordable payment plans for your pet&apos;s health needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Credit & Debit Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, debit cards, and other standard forms of payment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Need Help?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team is here to assist you with any questions about the booking process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-2 border-primary/20">
              <CardHeader className="text-center pb-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold mb-4">Contact Red Rock Veterinary Health</CardTitle>
                <CardDescription className="text-lg">
                  For urgent questions or technical issues, please reach out to us directly.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">719-204-3647</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">Reception@RedRockVet.com</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">3163 W. Colorado Ave<br />Colorado Springs, CO 80904</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Closed Weekends</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href="tel:719-204-3647" className="flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href="mailto:Reception@RedRockVet.com" className="flex items-center">
                        <Mail className="w-5 h-5 mr-2" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}