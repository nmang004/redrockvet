"use client";

import { Brain, Heart, Shield, Stethoscope, Clock, CheckCircle, Phone, TestTube } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const conditions = [
  {
    icon: Brain,
    title: "Fear and Anxiety",
    description: "Comprehensive treatment for pets experiencing fear-based behaviors and anxiety disorders."
  },
  {
    icon: Shield,
    title: "Aggression",
    description: "Evidence-based evaluation and management of aggressive behaviors with safety-focused protocols."
  },
  {
    icon: Heart,
    title: "Separation Anxiety",
    description: "Specialized treatment plans for pets who experience distress when separated from their owners."
  },
  {
    icon: Brain,
    title: "Noise Phobias",
    description: "Treatment for pets with extreme reactions to thunderstorms, fireworks, and other loud sounds."
  },
  {
    icon: Stethoscope,
    title: "Periuria/Perichezia",
    description: "Medical and behavioral evaluation for inappropriate elimination behaviors."
  },
  {
    icon: Clock,
    title: "Compulsive Behaviors",
    description: "Assessment and treatment of repetitive, compulsive behaviors that interfere with daily life."
  }
];

const evaluationProcess = [
  "Comprehensive physical examination",
  "Detailed behavioral history",
  "Environmental and routine assessment",
  "Laboratory work when indicated",
  "Potential diagnostic imaging",
  "Individualized treatment strategy development"
];

const treatmentApproach = [
  {
    icon: TestTube,
    title: "Medical-First Approach",
    description: "Begin with thorough physical exam and lab work to rule out underlying medical conditions causing behavioral issues."
  },
  {
    icon: Heart,
    title: "Fear-Free Handling",
    description: "Use low-stress, fear-free handling techniques throughout the evaluation and treatment process."
  },
  {
    icon: Brain,
    title: "Evidence-Based Methods",
    description: "Develop tailored treatment and management plans based on current veterinary behavioral science."
  },
  {
    icon: Shield,
    title: "Specialist Collaboration",
    description: "Partner with board-certified veterinary behaviorists and certified trainers for complex cases."
  }
];

export default function BehavioralContent() {
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
              <Brain className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Pet Behavioral Management
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Comprehensive behavioral evaluations and treatment using evidence-based methods. We address root causes with a holistic, medical-first approach and collaborate with specialists for complex cases.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Behavioral Consultation</Link>
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

      {/* Conditions Treated Section */}
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
              Behavioral Conditions We Treat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide specialized care for a wide range of behavioral issues affecting pets and their families.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => {
              const IconComponent = condition.icon;
              return (
                <motion.div
                  key={condition.title}
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
                      <CardTitle className="text-xl">{condition.title}</CardTitle>
                      <CardDescription className="text-base">
                        {condition.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
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
              Our Treatment Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take a holistic, evidence-based approach to behavioral medicine, always starting with a medical evaluation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentApproach.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <motion.div
                  key={approach.title}
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
                      <CardTitle className="text-xl">{approach.title}</CardTitle>
                      <CardDescription className="text-base">
                        {approach.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Evaluation Process Section */}
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
                Comprehensive Evaluation Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our detailed evaluation process ensures we identify any underlying medical causes before developing a behavioral treatment plan.
              </p>
              
              <div className="space-y-4">
                {evaluationProcess.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Positive Reinforcement Focus
                </h3>
                <p className="text-muted-foreground mb-6">
                  We use positive reinforcement techniques and collaborate with board-certified veterinary behaviorists and certified trainers to ensure the best outcomes for complex behavioral cases.
                </p>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Evidence-based behavioral evaluations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Root cause identification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Collaborative specialist care</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Start Behavioral Evaluation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Help Your Pet Overcome Behavioral Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Behavioral issues can significantly impact your pet&apos;s quality of life and your relationship with them. Let our experienced team help you address these challenges with compassionate, evidence-based care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Behavioral Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:719-204-3647">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: (719) 204-3647
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}