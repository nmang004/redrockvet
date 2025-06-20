"use client";

import { Activity, Dog, Cat, Pill, TestTube, Heart, CheckCircle } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const dogSymptoms = [
  "Non-stop itching and scratching",
  "Excessive licking or chewing",
  "Red, inflamed skin",
  "Chronic ear infections",
  "Hair loss or thinning coat",
  "Hot spots",
  "Face rubbing",
  "Watery eyes or sneezing"
];

const catSymptoms = [
  "Excessive over-grooming",
  "Miliary dermatitis",
  "Eosinophilic granuloma complex",
  "Chronic ear itching",
  "Facial itching and rubbing",
  "Asthma-like symptoms",
  "Digestive issues"
];

const treatments = [
  {
    icon: Pill,
    title: "Anti-itch Medications",
    description: "Targeted medications to provide immediate relief from itching and discomfort."
  },
  {
    icon: TestTube,
    title: "Custom Immunotherapy",
    description: "Allergen-specific immunotherapy (ASIT) tailored to your pet&apos;s specific allergens."
  },
  {
    icon: Heart,
    title: "Prescription Diets",
    description: "Specialized diets for pets with food allergies and sensitivities."
  },
  {
    icon: Activity,
    title: "Medicated Topicals",
    description: "Therapeutic shampoos, mousses, and topical treatments for skin relief."
  }
];

const testingMethods = [
  "Detailed patient history and examination",
  "Blood testing for environmental allergens",
  "Intradermal testing when appropriate",
  "Elimination diet trials for food allergies"
];

export default function AllergyContent() {
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
              <Activity className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Pet Allergy Testing & Treatment
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Comprehensive allergy testing and treatment for dogs and cats in Colorado Springs. 
              We identify root causes and create tailored treatment plans for your pet&apos;s allergies.
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
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
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
              Recognizing Allergy Symptoms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different pets show allergy symptoms in various ways. Here&apos;s what to watch for in dogs and cats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Dog className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Dog Allergy Signs</CardTitle>
                  </div>
                  <div className="space-y-3">
                    {dogSymptoms.map((symptom, index) => (
                      <motion.div
                        key={symptom}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Cat className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Cat Allergy Signs</CardTitle>
                  </div>
                  <div className="space-y-3">
                    {catSymptoms.map((symptom, index) => (
                      <motion.div
                        key={symptom}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Methods Section */}
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
              Our Diagnostic Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use comprehensive testing methods to identify the specific allergens affecting your pet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingMethods.map((method, index) => (
              <motion.div
                key={method}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-background p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TestTube className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground text-lg">{method}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
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
              Treatment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive treatment options tailored to your pet&apos;s specific allergies and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <motion.div
                  key={treatment.title}
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
                      <CardTitle className="text-xl">{treatment.title}</CardTitle>
                      <CardDescription className="text-base">
                        {treatment.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Colorado Context Section */}
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
                Colorado-Specific Allergy Considerations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Colorado's dry climate and seasonal environmental shifts can intensify pet allergy symptoms. 
                Our team understands these unique regional factors and incorporates them into our treatment approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Allergy Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:719-204-3647">Call: (719) 204-3647</Link>
                </Button>
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
              Common questions about pet allergy testing and treatment at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How do I know if my pet has allergies?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Common signs include excessive scratching, licking, red inflamed skin, chronic ear infections, 
                  hair loss, and hot spots. In cats, you may see over-grooming, miliary dermatitis, or asthma-like symptoms. 
                  If you notice persistent itching or skin issues, it&apos;s worth having your pet evaluated for allergies.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                What&apos;s the difference between food allergies and environmental allergies?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Food allergies typically cause year-round symptoms and may include digestive issues along with skin problems. 
                  Environmental allergies often follow seasonal patterns and are triggered by pollens, dust mites, or molds. 
                  We use different testing methods for each type - elimination diets for food allergies and blood or intradermal testing for environmental allergens.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                How long does allergy testing take?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Blood testing for environmental allergies can be completed during a single visit, with results typically available within 1-2 weeks. 
                  Food allergy testing through elimination diets takes longer - usually 8-12 weeks to properly identify trigger ingredients. 
                  Our team will guide you through the process and timeline based on your pet&apos;s specific needs.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                Is immunotherapy (allergy shots) effective for pets?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, allergen-specific immunotherapy (ASIT) is highly effective for many pets with environmental allergies. 
                  About 60-70% of pets show significant improvement with this treatment. It works by gradually desensitizing your pet&apos;s immune system to specific allergens. 
                  While it takes time to see full benefits (usually 6-12 months), it can provide long-term relief and reduce the need for other medications.
                </p>
              </div>
            </details>

            <details className="group bg-accent rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                Are there specific allergens common to Colorado pets?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes, ColoradoColorado&apos;sapos;s unique environment presents specific challenges. Common allergens include cottonwood and elm pollens in spring, 
                  grass pollens in summer, and ragweed in fall. The dry climate can also worsen skin conditions. 
                  Many pets also react to dust mites and storage mites, which can be more problematic in our dry air. 
                  Our team understands these regional factors and incorporates them into treatment planning.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}