"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact & Appointments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to schedule an appointment or have questions about our services? 
            We&apos;re here to help you and your pet get the care you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book an Appointment</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(719) 204-3647"
                    />
                  </div>
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium mb-2">
                      Pet&apos;s Name *
                    </label>
                    <Input
                      id="petName"
                      name="petName"
                      type="text"
                      required
                      value={formData.petName}
                      onChange={handleChange}
                      placeholder="Buddy"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="fear-free">Fear-Free® Veterinary Care</option>
                    <option value="wellness">Pet Vaccinations and Wellness</option>
                    <option value="emergency">Emergency Veterinary Services</option>
                    <option value="dental">Veterinary Dental Care</option>
                    <option value="surgery">Veterinary Surgery</option>
                    <option value="allergy">Pet Allergy Testing and Treatment</option>
                    <option value="chronic-disease">Chronic Disease Management</option>
                    <option value="diagnostic">Veterinary Diagnostic Imaging</option>
                    <option value="euthanasia">Compassionate Pet Euthanasia</option>
                    <option value="behavioral">Pet Behavioral Services</option>
                    <option value="spay-neuter">Spay & Neuter Services</option>
                    <option value="cat-clinic">Cat Clinic</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your pet's needs or any questions you have..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Practice Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Practice Information</CardTitle>
                <CardDescription>Visit us or get in touch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        3163 W. Colorado Ave<br />
                        Colorado Springs, CO 80904
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(719) 204-3647</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">Reception@RedRockVet.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Urgent Care</span>
                    <span className="font-medium">During Business Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Emergency & Urgent Care</CardTitle>
                <CardDescription>
                  For emergencies during business hours, call us immediately
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" asChild>
                  <a href="tel:719-204-3647">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (719) 204-3647
                  </a>
                </Button>
                <div className="mt-4 p-3 bg-background rounded-lg border">
                  <p className="text-sm font-medium text-foreground mb-2">
                    For after-hours & weekend emergencies:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• Uintah Pet Emergency</div>
                    <div>• Animal ER Care</div>
                    <div className="text-xs pt-1 italic">We do not have an on-call line</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}