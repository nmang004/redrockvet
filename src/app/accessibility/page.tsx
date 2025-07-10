import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye, Heart, Users, Phone, Mail, FileText, Monitor, Keyboard, Volume2, MousePointer, Smartphone, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement - Red Rock Veterinary Health",
  description: "Red Rock Veterinary Health's commitment to digital accessibility, WCAG 2.1 AA compliance, and ensuring our website is usable by everyone seeking veterinary care information.",
  robots: "index, follow",
};

const accessibilityFeatures = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    content: [
      "High contrast color scheme with WCAG AA compliant color ratios",
      "Scalable text that enlarges up to 200% without loss of functionality", 
      "Clear visual hierarchy with proper heading structure",
      "Alt text descriptions for all meaningful images and icons",
      "Focus indicators clearly visible when navigating with keyboard"
    ]
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    content: [
      "Full website functionality available via keyboard navigation",
      "Logical tab order through all interactive elements",
      "Skip links to jump to main content and navigation",
      "No keyboard traps that prevent users from navigating",
      "Clear focus indicators for all interactive elements"
    ]
  },
  {
    icon: Volume2,
    title: "Screen Reader Support",
    content: [
      "Semantic HTML markup for proper screen reader interpretation",
      "ARIA labels and descriptions for complex interactive elements",
      "Properly structured headings for easy content navigation",
      "Form labels clearly associated with their input fields",
      "Descriptive link text that makes sense out of context"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Accessibility",
    content: [
      "Responsive design that works on all device sizes",
      "Touch targets sized appropriately for easy interaction",
      "Content reflows properly on mobile devices",
      "No horizontal scrolling required on mobile",
      "Mobile-specific accessibility features preserved"
    ]
  }
];

const assistiveTechnologies = [
  {
    icon: Monitor,
    title: "Screen Readers",
    content: "We regularly test with NVDA, JAWS, and VoiceOver to ensure compatibility with the most commonly used screen readers."
  },
  {
    icon: Keyboard,
    title: "Keyboard-Only Navigation",
    content: "All functionality is available to users who cannot use a mouse and rely entirely on keyboard navigation."
  },
  {
    icon: Eye,
    title: "Magnification Software",
    content: "Our site works with screen magnification tools like ZoomText and Dragon NaturallySpeaking for vision accessibility."
  },
  {
    icon: Headphones,
    title: "Voice Recognition",
    content: "Compatible with voice recognition software allowing users to navigate and interact using voice commands."
  }
];

const ongoingCommitments = [
  {
    icon: Users,
    title: "User Testing",
    content: "Regular accessibility testing with real users who have disabilities to identify and address barriers."
  },
  {
    icon: FileText,
    title: "Content Reviews",
    content: "Ongoing review of new content to ensure it meets accessibility standards before publication."
  },
  {
    icon: Monitor,
    title: "Technical Audits",
    content: "Regular automated and manual testing using accessibility evaluation tools and expert reviews."
  },
  {
    icon: Heart,
    title: "Staff Training",
    content: "Continuous education for our team on accessibility best practices and inclusive design principles."
  }
];

export default function AccessibilityPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Red Rock Veterinary Health is committed to ensuring digital accessibility for people with disabilities. 
            We continuously improve the user experience for everyone.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="mailto:accessibility@redrockvet.com">
                <Mail className="w-4 h-4 mr-2" />
                Report Accessibility Issue
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call for Assistance
              </a>
            </Button>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> December 2024 | <strong>Next Review:</strong> June 2025
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Commitment */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Accessibility Commitment
              </h2>
              <div className="prose max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  At Red Rock Veterinary Health, accessibility extends beyond our Fear Free® approach to veterinary care. 
                  We believe everyone should have equal access to information about pet healthcare, regardless of their 
                  abilities or the assistive technologies they use.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We are committed to making our website accessible to the widest possible audience, conforming to the 
                  Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards published by the World Wide Web 
                  Consortium (W3C).
                </p>
                <div className="bg-accent border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold text-foreground mb-2">Fear Free® Digital Experience</p>
                  <p>
                    Just as we create a stress-free environment for your pets, we strive to provide a barrier-free 
                    digital experience that welcomes all visitors seeking information about veterinary care.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Accessibility Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {feature.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Assistive Technology Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Assistive Technology Support
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Our website is designed to work with a wide range of assistive technologies and adaptive strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistiveTechnologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card key={index} className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tech.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compliance Status */}
        <div className="mb-16">
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                WCAG 2.1 AA Compliance Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Perceivable</h3>
                  <p className="text-muted-foreground text-sm">
                    Information and UI components are presentable to users in ways they can perceive, 
                    including text alternatives and adequate color contrast.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Keyboard className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Operable</h3>
                  <p className="text-muted-foreground text-sm">
                    User interface components and navigation are operable via keyboard, 
                    with no seizure-inducing content and adequate time limits.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Understandable</h3>
                  <p className="text-muted-foreground text-sm">
                    Information and operation of the user interface are understandable, 
                    with predictable functionality and input assistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ongoing Efforts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Ongoing Accessibility Efforts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingCommitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {commitment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {commitment.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Known Issues & Alternative Access */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Known Issues & Alternative Access
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Areas Under Improvement
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Some PDF forms may not be fully accessible (alternative formats available)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Third-party embedded content may have accessibility limitations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Some interactive maps may require alternative navigation methods
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Alternative Access Methods
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Phone appointments available: (719) 204-3647
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      In-person assistance at our Colorado Springs location
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Alternative format documents available upon request
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback & Contact */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Accessibility Feedback & Support
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                We welcome feedback on the accessibility of our website. If you encounter any barriers 
                or have suggestions for improvement, please contact us using any of the methods below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-muted-foreground">(719) 204-3647</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Accessibility Email</h3>
                  <p className="text-muted-foreground">accessibility@redrockvet.com</p>
                  <p className="text-sm text-muted-foreground">Response within 48 hours</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">In-Person Help</h3>
                  <p className="text-muted-foreground text-sm">
                    3163 West Colorado Avenue<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
              </div>
              <Separator className="my-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">When Contacting Us About Accessibility:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Describe the specific issue you encountered</li>
                    <li>• Tell us which page or feature was problematic</li>
                    <li>• Let us know what assistive technology you're using</li>
                    <li>• Suggest how we might improve the experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Our Response Commitment:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Acknowledge your feedback within 48 hours</li>
                    <li>• Provide alternative access if needed immediately</li>
                    <li>• Work to resolve issues in our next update cycle</li>
                    <li>• Follow up to ensure the solution meets your needs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}