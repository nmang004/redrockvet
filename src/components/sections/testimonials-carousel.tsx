"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    clientName: "Liz Wagoner",
    petName: "Rueben & Money",
    petType: "Hunting Dog & Pit Bull",
    review: "Dr. Unsell has been my vet for the last five years. He is absolutely amazing and truly cares! I wouldn't trust my two boys with anyone else! Dr. Unsell helped us understand Rueben's behavior and was never afraid of Money because of his breed.",
    rating: 5,
    service: "Fear Free Care",
    photo: "/testimonials/client-1.jpg",
    location: "Colorado Springs, CO"
  },
  {
    id: 2,
    clientName: "Matthew Keefe",
    petName: "Jax",
    petType: "Dog with Allergies",
    review: "I can't say enough good things about Dr. Unsell and Red Rock Veterinary Health! Dr. Unsell was very knowledgeable about allergies and the entire dental process went extremely smooth. The facility is clean, modern, and well-equipped.",
    rating: 5,
    service: "Allergy Treatment & Dental",
    photo: "/testimonials/client-2.jpg",
    location: "Colorado Springs, CO"
  },
  {
    id: 3,
    clientName: "Ashley Craig",
    petName: "Cat",
    petType: "Feline Patient",
    review: "Dr. Unsell and the team at Red Rock Veterinary Health are absolutely amazing. Dr. Unsell took the time to thoroughly examine my cat, explain everything in detail, and answer all of my questions with patience and kindness. His expertise and gentle approach made all the difference.",
    rating: 5,
    service: "Cat Care",
    photo: "/testimonials/client-3.jpg",
    location: "Colorado Springs, CO"
  },
  {
    id: 4,
    clientName: "Stephen S",
    petName: "Black Labrador Retriever",
    petType: "Active 7-year-old Lab",
    review: "Dr. Unsell is the best and most reliable veterinarian we've met. Our dog really likes Dr. Unsell and stays relaxed during examination. We love how they focus on fear free practices, and the clinic prices are not as expensive as previous clinics.",
    rating: 5,
    service: "Fear Free Veterinary Care",
    photo: "/testimonials/client-4.jpg",
    location: "Colorado Springs, CO"
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

      </div>
    </section>
  );
}