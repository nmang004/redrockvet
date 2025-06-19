"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  videoURL?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  videoURL
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {videoURL ? (
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src={videoURL} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {subtitle}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                {title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                {description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-base px-8 py-3 shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                {primaryCTA.text}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              {secondaryCTA && (
                <Button variant="outline" size="lg" className="text-base px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Fear Free®</div>
                <div className="text-sm text-muted-foreground">Certified Practice</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Specialized Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Same Day</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🐕</span>
                  </div>
                  <p className="text-lg">Happy, healthy pets</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}