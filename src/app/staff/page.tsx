import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staffMembers } from "@/data/staff";
import { ArrowRight, Award, GraduationCap, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Veterinary Team | Red Rock Veterinary Health",
  description: "Meet our experienced team of veterinary professionals at Red Rock Veterinary Health. Our skilled veterinarians and technicians are dedicated to providing exceptional care for your pets.",
  keywords: "veterinary team, veterinarians, veterinary technicians, Red Rock Veterinary Health, Colorado Springs, pet care professionals",
  openGraph: {
    title: "Our Veterinary Team | Red Rock Veterinary Health",
    description: "Meet our experienced team of veterinary professionals dedicated to providing exceptional care for your pets.",
    images: [
      {
        url: "/staff/rob.jpg",
        width: 1200,
        height: 630,
        alt: "Red Rock Veterinary Health Team",
      },
    ],
  },
};

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutheroimage.webp"
            alt="Red Rock Veterinary Health Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-primary text-sm font-medium mb-4">
              Our Veterinary Team
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Meet Our Exceptional Team
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our passionate team of veterinary professionals is dedicated to providing 
              the highest quality care for your beloved pets.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((member) => (
              <Link key={member.id} href={`/staff/${member.slug}`} className="group">
                <Card className="group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-card border-0 shadow-lg cursor-pointer !py-0">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={member.image}
                          alt={member.imageAlt}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-3">
                      <div className="text-center mb-2">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold mb-1 text-sm">
                          {member.title}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-1">
                          <Award className="w-3 h-3" />
                          <span>{member.credentials}</span>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                          {member.pronouns}
                        </p>
                      </div>

                      <div className="mb-2">
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                          {member.bio}
                        </p>
                      </div>

                      <div className="mb-2">
                        <div className="flex items-center gap-1 mb-1">
                          <GraduationCap className="w-3 h-3 text-primary" />
                          <span className="text-xs font-medium text-foreground">Specialties:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.slice(0, 2).map((specialty, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                          {member.specialties.length > 2 && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                              +{member.specialties.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="w-full bg-primary/10 text-primary border border-primary/20 rounded-md px-3 py-2 text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 flex items-center justify-center">
                          Learn More About {member.name.startsWith('Dr.') ? member.name.split(' ')[0] + ' ' + member.name.split(' ')[1] : member.name.split(' ')[0]}
                          <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8">
            Schedule an appointment today and experience the exceptional care 
            that our dedicated team provides to every pet.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 shadow-glow">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Appointment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}