"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Heart, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Fear Free® Approach",
    description: "Colorado Springs' only veterinary hospital designed around Fear Free® principles to minimize stress and anxiety."
  },
  {
    icon: Shield,
    title: "Evidence-Based Medicine",
    description: "Advanced medical expertise with regular consultation from board-certified specialists."
  },
  {
    icon: Award,
    title: "Locally Owned",
    description: "Non-corporate, community-driven practice supporting local businesses and rescue organizations."
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "One-on-one attention with personalized visit plans and dynamic emotional medical records."
  }
];

export default function AboutPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                About Our Practice
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                Dedicated to Your Pet&apos;s Health & Happiness
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Located at 3163 West Colorado Avenue, Red Rock Veterinary Health is founded by 
                Dr. Robbie Unsell and Dr. Sharon Kuca. As a locally owned, non-corporate practice, 
                we&apos;re committed to providing personal, high-quality care with a profound dedication to animal welfare.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                We implement Fear Free® veterinary principles with separate cat and dog hospital wings, 
                personalized visit plans, and cooperative care techniques. Our approach ensures every 
                pet receives compassionate, stress-free treatment in a comfortable environment.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/team">
                  Meet Our Team
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h3>
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                  &ldquo;At Red Rock Veterinary Health, we transcend being just a hospital; we are a 
                  community-driven and mindful partner in your pet&apos;s health journey, committed to 
                  animal welfare and providing personal, high-quality care.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-primary"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}