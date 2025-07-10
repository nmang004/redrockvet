"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  Clock, 
  Download, 
  Smartphone, 
  Lock, 
  ExternalLink,
  CheckCircle,
  Heart,
  Calendar,
  Stethoscope
} from "lucide-react";

export default function MedicalRecordPortalContent() {
  const portalCards = [
    {
      title: "Vello Portal (POE)",
      description: "Our primary portal for accessing medical records and requesting appointments",
      features: [
        "View complete medical records",
        "Access vaccination history",
        "Request appointments online",
        "Download medical documents",
        "Update personal information"
      ],
      link: "https://mobile.poe.idexx.com/login",
      recommended: true,
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-primary"
    },
    {
      title: "Neo Portal",
      description: "Alternative portal for consolidated pet record access",
      features: [
        "Consolidated pet records",
        "Medical history review",
        "Vaccination tracking",
        "Staff-activated access",
        "Secure data viewing"
      ],
      link: "https://us.idexxneo.com/clientportal/9587/1/login",
      recommended: false,
      icon: <FileText className="w-8 h-8" />,
      color: "bg-secondary"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Access",
      description: "View your pet's medical records anytime, anywhere"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your pet's health information is protected with enterprise-grade security"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Easy Downloads",
      description: "Download medical records for travel, boarding, or emergency situations"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment History",
      description: "Review past visits and upcoming appointments in one place"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Secure Patient Portal Access
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Access Your Pet's
                <span className="text-gradient block">Medical Records</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                View your pet's complete medical history, vaccination records, and appointment details through our secure online portals. Available 24/7 for your convenience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Secure</div>
                <div className="text-sm text-muted-foreground">HIPAA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Access Anytime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Mobile</div>
                <div className="text-sm text-muted-foreground">Responsive Design</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portal Cards Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Portal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the portal that best fits your needs. Both provide secure access to your pet's medical information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portalCards.map((portal, index) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className={`h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex flex-col ${portal.recommended ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                  {portal.recommended && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Recommended
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${portal.color} text-white`}>
                        {portal.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{portal.title}</CardTitle>
                    <CardDescription className="text-base">{portal.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 flex-1">
                      {portal.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full text-base py-6 shadow-glow hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      <a 
                        href={portal.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Lock className="w-5 h-5 mr-2" />
                        Access {portal.title}
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Use Our Patient Portal?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our secure online portals provide convenient access to your pet's health information whenever you need it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Need Help?</CardTitle>
                <CardDescription className="text-base">
                  Our team is here to help you access your pet's medical records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you're having trouble accessing your portal or need assistance with your account, please contact our office during business hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+1234567890" className="flex items-center">
                      <span className="mr-2">📞</span>
                      Call Us
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/contact" className="flex items-center">
                      <span className="mr-2">💬</span>
                      Contact Form
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}