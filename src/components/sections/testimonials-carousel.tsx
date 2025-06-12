"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    petName: "Max",
    petType: "Golden Retriever",
    review: "Dr. Smith and the entire team at Red Rock Vet were incredible during Max's surgery. They kept us informed every step of the way and showed such genuine care for our family. Max is doing wonderfully now!",
    rating: 5,
    service: "Surgery",
    photo: "/testimonials/client-1.jpg",
    location: "Animal City, AC"
  },
  {
    id: 2,
    clientName: "Michael Chen",
    petName: "Luna",
    petType: "Persian Cat",
    review: "The dental care Luna received was exceptional. The staff was so gentle with her, and they explained everything clearly. You can tell they truly love animals here.",
    rating: 5,
    service: "Dental Care",
    photo: "/testimonials/client-2.jpg",
    location: "Pet Valley, AC"
  },
  {
    id: 3,
    clientName: "Emily Rodriguez",
    petName: "Buddy",
    petType: "Mixed Breed",
    review: "We've been coming to Red Rock Vet for over 5 years, and they've always provided excellent care. The emergency service saved Buddy's life last year. We're so grateful for this amazing team!",
    rating: 5,
    service: "Emergency Care",
    photo: "/testimonials/client-3.jpg",
    location: "Animal City, AC"
  },
  {
    id: 4,
    clientName: "David Thompson",
    petName: "Whiskers",
    petType: "Tabby Cat",
    review: "The wellness exam was thorough and the vet took time to answer all our questions. Whiskers was comfortable throughout the visit. Highly recommend Red Rock Vet!",
    rating: 5,
    service: "Wellness Exam",
    photo: "/testimonials/client-4.jpg",
    location: "Care Town, AC"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what pet parents in our community 
            have to say about their experience at Red Rock Veterinary Health.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setIsAutoPlaying(false)}
              onHoverEnd={() => setIsAutoPlaying(true)}
            >
              <Card className="bg-background border-border shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Quote Content */}
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                        &ldquo;{currentTestimonial.review}&rdquo;
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < currentTestimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Client Info */}
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          {currentTestimonial.clientName}
                        </p>
                        <p className="text-muted-foreground">
                          Pet parent to {currentTestimonial.petName} ({currentTestimonial.petType})
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {currentTestimonial.service} • {currentTestimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Client Photo Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">
                            {currentTestimonial.petType.includes('Dog') ? '🐕' : '🐱'}
                          </div>
                          <p className="text-xs text-muted-foreground font-medium">
                            {currentTestimonial.petName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Care</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}