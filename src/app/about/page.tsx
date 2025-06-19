import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, MapPin, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Red Rock Veterinary Health",
  description: "Learn about Red Rock Veterinary Health's Fear Free® approach, our founders Dr. Robbie Unsell and Dr. Sharon Kuca, and our commitment to compassionate veterinary care in Colorado Springs.",
};

const features = [
  {
    icon: Heart,
    title: "Fear Free® Certified",
    description: "Colorado Springs' only veterinary hospital designed around Fear Free® principles to minimize stress and anxiety for your pets."
  },
  {
    icon: Shield,
    title: "Separate Wings",
    description: "Dedicated cat and dog hospital wings with specialized environments designed for each species' comfort."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Locally owned and non-corporate, supporting local businesses and collaborating with area rescues and humane societies."
  },
  {
    icon: Award,
    title: "Evidence-Based Care",
    description: "Advanced medical expertise with regular consultation from board-certified specialists."
  }
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Red Rock Veterinary Health
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Colorado Springs' premier Fear Free® veterinary hospital, providing compassionate, 
            high-quality care in a stress-free environment designed for your pet's comfort.
          </p>
        </div>

        {/* Location & Founders */}
        <div className="mb-16">
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">Our Location</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>3163 West Colorado Avenue</strong><br />
                    Colorado Springs, Colorado
                  </p>
                  <p className="text-muted-foreground">
                    Conveniently located to serve Colorado Springs and surrounding areas with 
                    comprehensive veterinary care.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Stethoscope className="w-6 h-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">Our Founders</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">
                    <strong>Dr. Robbie Unsell</strong> and <strong>Dr. Sharon Kuca</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Our dedicated founders established Red Rock Veterinary Health with a vision 
                    to create a Fear Free® environment where pets receive exceptional care without stress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-4xl mx-auto">
                "At Red Rock Veterinary Health, we transcend being just a hospital; we are a 
                community-driven and mindful partner in your pet's health journey, committed to 
                animal welfare and providing personal, high-quality care."
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Fear Free Approach */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Our Fear Free® Approach
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Unique Features
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Separate cat & dog hospital wings for species-specific comfort
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Personalized visit plans tailored to each pet's needs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dynamic emotional medical records tracking stress levels
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Non-slip and sound-reductive surfaces throughout
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Care Philosophy
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Low-stress animal handling techniques
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Positive reinforcement and cooperative care model
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      One-on-one attention for every patient
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Minimizing fear, stress, and anxiety during visits
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Commitment */}
        <div className="text-center">
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Community Commitment
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a locally owned and non-corporate animal hospital, we're deeply committed to 
                  our Colorado Springs community. We actively support local businesses, collaborate 
                  with the local humane society, and assist independent rescues.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in empowering our employees and engaging with local pet service providers 
                  to create a network of care that extends beyond our hospital walls.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}