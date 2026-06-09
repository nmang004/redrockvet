"use client";

import React from "react";
import Image from "next/image";
import { 
  Heart, 
  Shield, 
  Award, 
  Download, 
  CheckCircle, 
  Star, 
  Quote,
  Dog,
  Cat,
  Brain,
  Sparkles,
  Clock,
  Phone,
  Calendar,
  Users,
  TrendingUp,
  Play,
  Globe,
  Target,
  Smile
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { fearFreeFaqs } from "./faq";

const fearFreePillars = [
  {
    icon: Globe,
    title: "Environmental Modifications",
    description: "Calming spaces designed to reduce anxiety with pheromones, soft surfaces, and noise control.",
    details: [
      "Anxiety-reducing pheromones in all exam rooms",
      "Non-slip, comfortable surfaces for better footing",
      "Noise reduction techniques and calming music",
      "Strategic room design for optimal pet comfort",
      "Separate dog and cat waiting areas when possible"
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Heart,
    title: "Gentle Handling Techniques",
    description: "Science-based approaches that read your pet's body language and avoid forceful restraint.",
    details: [
      "Body language interpretation and response",
      "Minimal restraint and cooperative care",
      "Positive reinforcement during procedures",
      "Fear-free positioning and handling methods",
      "Patient-paced examination approach"
    ],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Brain,
    title: "Anxiety Management",
    description: "Proactive measures including medications and timing to ensure your pet's emotional well-being.",
    details: [
      "Pre-visit anxiety medications when needed",
      "Optimal appointment timing strategies",
      "Stress-reduction protocols for anxious pets",
      "Gradual exposure techniques",
      "Customized comfort measures for each pet"
    ],
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Target,
    title: "Individualized Care Plans",
    description: "Personalized approaches based on your pet's unique personality, breed, and history.",
    details: [
      "Breed-specific handling considerations",
      "Personality-based care adjustments",
      "Historical anxiety pattern analysis",
      "Customized visit preparation plans",
      "Ongoing care plan refinements"
    ],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const certifications = [
  {
    title: "Fear Free® Certified Professional",
    description: "Advanced certification in fear-free veterinary practices",
    icon: Award
  },
  {
    title: "Low Stress Handling® Certified",
    description: "Specialized training in stress-reduction techniques",
    icon: Shield
  },
  {
    title: "Feline-Friendly Practice",
    description: "Cat-specific environment and handling expertise",
    icon: Cat
  }
];

const benefits = [
  "95% reduction in veterinary visit anxiety",
  "Builds positive long-term relationships with veterinary care",
  "Reduces stress-related health complications",
  "Improves accuracy of examinations and diagnostics",
  "Creates calmer, more cooperative pets",
  "Enhances owner confidence and peace of mind",
  "Enables better preventive care compliance",
  "Reduces need for sedation in many cases"
];

const testimonials = [
  {
    name: "Sarah M.",
    petName: "Luna (Golden Retriever)",
    content: "Luna used to shake uncontrollably at the vet. Now she actually walks in calmly and even wags her tail during exams. The Fear-Free approach has been life-changing for us.",
    rating: 5
  },
  {
    name: "Mike T.",
    petName: "Whiskers (Maine Coon)",
    content: "As a cat owner, I was amazed by how gentle and patient the team was. Whiskers actually purred during his checkup - something I never thought would happen at a vet visit.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    petName: "Buddy (Rescue Mix)",
    content: "Buddy came from a traumatic background and was terrified of strangers. The Fear-Free techniques helped him trust again. Now he's excited to see his veterinary team!",
    rating: 5
  }
];

const preparationResources = [
  {
    title: "Cat Preparation Checklist",
    description: "Complete guide for stress-free feline visits",
    downloadUrl: "/Fear-free-cat.pdf",
    icon: Cat
  },
  {
    title: "Dog Preparation Guide",
    description: "Step-by-step preparation for canine appointments",
    downloadUrl: "/fear-free-dog.pdf",
    icon: Dog
  },
  {
    title: "Body Language Recognition",
    description: "Understanding your pet's stress signals",
    icon: Brain,
    comingSoon: true
  },
  {
    title: "Pre-Visit Video Tutorials",
    description: "Visual guides for appointment preparation",
    icon: Play,
    comingSoon: true
  }
];

export default function FearFreeContent() {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Animated Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-primary/5 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Certification Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-sm font-medium text-primary">Fear Free® Certified Practice</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              Fear-Free<sup className="text-2xl">®</sup> Veterinary Care
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary font-semibold mb-4"
            >
              Where Comfort Meets Excellence
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Experience the gold standard in stress-free veterinary care. Red Rock Veterinary Health is a Fear Free® Certified
              Practice and the only hospital in Colorado Springs specifically designed for Fear Free care from the ground up. Every
              single member of our team has achieved individual Fear Free® certification, ensuring your pet receives
              compassionate, science-based care that reduces fear, anxiety, and stress.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Fear-Free Visit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link href="#preparation">
                  <Download className="w-5 h-5 mr-2" />
                  Download Prep Guide
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mt-16 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Anxiety Reduction</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Pets</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Team Certified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Certification Section */}
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
              Fear Free® Certified Practice
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Red Rock Veterinary Health is officially a Fear Free® Certified Practice — the only hospital in Colorado Springs
              specifically designed for Fear Free care from the ground up. Every single team member has also achieved
              individual Fear Free® certification, ensuring your pet will always be handled by certified professionals
              trained in the latest fear-free techniques.
            </p>
          </motion.div>

          {/* Fear Free Elite Logo Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="bg-background rounded-2xl p-6 border border-primary/20 shadow-lg">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/staff/certs/fearfree-certified-practice.png"
                  alt="Fear Free Certified Veterinary Practice - General Practice"
                  width={240}
                  height={180}
                  className="h-32 w-auto"
                />
                <div className="text-center">
                  <div className="font-semibold text-foreground text-lg">Fear Free® Certified Practice</div>
                  <div className="text-muted-foreground text-sm">The Only Hospital in Colorado Springs Designed for Fear Free® Care</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription className="text-base">
                        {cert.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy & What is Fear-Free Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Fear-Free® Veterinary Care?
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fear-Free® is a revolutionary approach to veterinary medicine that prioritizes your pet's 
                  emotional well-being alongside their physical health. It's about creating an experience 
                  where pets can receive excellent medical care without the trauma traditionally associated 
                  with veterinary visits.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our science-based methods focus on reading your pet's body language, minimizing stress 
                  triggers, and using gentle handling techniques that build trust rather than fear. The 
                  result? Pets who are more cooperative, examinations that are more accurate, and owners 
                  who feel confident about bringing their pets in for regular care.
                </p>
                
                <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">The Fear-Free Promise</div>
                    <div className="text-muted-foreground">
                      We promise that your pet will never be forced past their comfort level. If they need a break, 
                      we take one. If they need medication to feel comfortable, we provide it. Your pet's emotional 
                      state is just as important as their physical health.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-background rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  The Fear-Free Difference
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive mb-2">Traditional Approach</div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• Force restraint</div>
                      <div>• "Get it done quickly"</div>
                      <div>• Ignore stress signals</div>
                      <div>• One-size-fits-all</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Fear-Free® Approach</div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• Gentle cooperation</div>
                      <div>• Patient-paced care</div>
                      <div>• Read body language</div>
                      <div>• Individualized plans</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">Real Results</span>
                </div>
                <div className="text-muted-foreground">
                  "In just one visit, pets often show remarkable improvement in their comfort level. 
                  Many clients tell us their pets now approach our clinic eagerly rather than with fear."
                </div>
                <div className="text-sm text-primary mt-2 font-medium">- The Red Rock Veterinary Health Team</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Fear-Free Care - Interactive Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Four Pillars of Fear-Free® Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach addresses every aspect of your pet's experience, 
              from the moment they arrive until they leave with a wagging tail.
            </p>
          </motion.div>

          {/* Interactive Pillar Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
            {fearFreePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.button
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedPillar(index)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedPillar === index
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50 hover:bg-accent/50'
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Selected Pillar Details */}
          <motion.div
            key={selectedPillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${fearFreePillars[selectedPillar].color} rounded-2xl p-8 border border-primary/20`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {fearFreePillars[selectedPillar].title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {fearFreePillars[selectedPillar].description}
                </p>
                <div className="space-y-3">
                  {fearFreePillars[selectedPillar].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  {React.createElement(fearFreePillars[selectedPillar].icon, {
                    className: "w-24 h-24 text-primary"
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pet Preparation Hub */}
      <section id="preparation" className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prepare Your Pet for Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Download our comprehensive preparation guides and resources to help make your pet's 
              visit as stress-free as possible. Preparation is key to a positive experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group flex flex-col">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 flex-1 flex flex-col justify-end">
                      {resource.comingSoon ? (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <Clock className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={resource.downloadUrl!} target="_blank">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Preparation Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-background rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Quick Preparation Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Arrive Early</div>
                  <div className="text-sm text-muted-foreground">Allow 10-15 minutes to acclimate to the environment</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Bring Comfort Items</div>
                  <div className="text-sm text-muted-foreground">Favorite blanket, toy, or treats for positive associations</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smile className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Stay Calm</div>
                  <div className="text-sm text-muted-foreground">Your pet picks up on your energy - stay relaxed and positive</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
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
              Real Stories, Real Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how Fear-Free® care has transformed the veterinary experience for pets and their families 
              throughout Colorado Springs and Manitou Springs.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-accent rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <p className="text-xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  Owner of {testimonials[currentTestimonial].petName}
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
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
              Everything you need to know about Fear-Free® veterinary care at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            {fearFreeFaqs.map((faq) => (
              <details key={faq.question} className="group bg-background rounded-lg border border-border">
                <summary className="flex justify-between items-center gap-4 cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/50 rounded-lg">
                  {faq.question}
                  <span className="text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-10 border-2 border-primary/20 text-center shadow-xl"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience Fear-Free® Care?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give your pet the gift of stress-free veterinary care. Schedule your Fear-Free® appointment today 
              and see the difference compassionate, science-based care can make for your beloved companion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <a href="tel:719-204-3647" className="text-primary hover:underline text-lg">
                      (719) 204-3647
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Hours</div>
                    <div className="text-muted-foreground">Mon-Fri: 8am-5pm</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Service Area</div>
                    <div className="text-muted-foreground">Colorado Springs & Manitou Springs</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Certification</div>
                    <div className="text-muted-foreground">Fear Free® Professional</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Fear-Free Visit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link href="tel:719-204-3647">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (719) 204-3647
                </Link>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">New to Fear-Free care?</strong> Ask about our complimentary 
                "happy visit" where your pet can meet our team and explore our facilities without any procedures - 
                just treats, pets, and positive experiences!
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}