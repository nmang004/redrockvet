import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Heart, Phone, Mail, FileText, Eye, Lock, Database, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Red Rock Veterinary Health",
  description: "Red Rock Veterinary Health's comprehensive privacy policy detailing how we protect your personal information and your pet's medical records in compliance with HIPAA and state regulations.",
  robots: "index, follow",
};

const privacySections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, address, phone number, email)",
      "Pet information (medical history, treatment records, vaccination records)",
      "Financial information (billing addresses, payment preferences)",
      "Website usage data (cookies, analytics, form submissions)",
      "Communication records (emails, phone calls, appointment notes)"
    ]
  },
  {
    icon: Heart,
    title: "How We Use Your Information",
    content: [
      "Providing veterinary care and medical treatment for your pets",
      "Scheduling appointments and sending appointment reminders",
      "Processing payments and maintaining billing records",
      "Communicating important health updates and care instructions",
      "Improving our services and website functionality",
      "Complying with legal and regulatory requirements"
    ]
  },
  {
    icon: Lock,
    title: "Information Protection",
    content: [
      "HIPAA-compliant data storage and transmission protocols",
      "Encrypted electronic medical records and payment processing",
      "Secure physical storage of paper records",
      "Limited access to information on a need-to-know basis",
      "Regular staff training on privacy and confidentiality",
      "Secure disposal of records according to retention policies"
    ]
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "Veterinary specialists when referrals are necessary",
      "Laboratory services for diagnostic testing",
      "Pet insurance companies (with your authorization)",
      "Emergency veterinary services during critical situations",
      "Legal authorities when required by law",
      "We never sell your personal information to third parties"
    ]
  }
];

const websiteSections = [
  {
    icon: Eye,
    title: "Website Analytics",
    content: "We use Vercel Analytics and Speed Insights to understand how visitors use our website. This helps us improve user experience and identify technical issues. These services collect anonymous usage data and do not identify individual users."
  },
  {
    icon: Database,
    title: "Content Management",
    content: "Our website content is managed through Sanity CMS, which may process and store website content and form submissions. All data is handled in accordance with their privacy standards and our data processing agreements."
  },
  {
    icon: FileText,
    title: "Cookies and Tracking",
    content: "We use essential cookies for website functionality and analytics cookies to improve user experience. You can control cookie preferences through your browser settings, though some functionality may be limited if cookies are disabled."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy and your pet's confidential medical information are paramount to us. 
            Learn how Red Rock Veterinary Health protects and manages your personal data.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Questions? Call (719) 204-3647
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:info@redrockvet.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
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
                  <strong>Last Updated:</strong> December 2024 | <strong>Effective Date:</strong> January 1, 2025
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Commitment to Privacy
              </h2>
              <div className="prose max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Red Rock Veterinary Health is committed to protecting the privacy and confidentiality of your personal 
                  information and your pet's medical records. As a healthcare provider, we adhere to strict privacy 
                  standards including HIPAA (Health Insurance Portability and Accountability Act) requirements and 
                  Colorado state regulations.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  This privacy policy explains how we collect, use, protect, and share information in our veterinary 
                  practice and through our website. We believe in transparency and want you to understand your rights 
                  and our responsibilities regarding your personal data.
                </p>
                <div className="bg-accent border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold text-foreground mb-2">Fear Free® Privacy Approach</p>
                  <p>
                    Just as we create a stress-free environment for your pets, we ensure your personal information 
                    is handled with the same care and attention to minimize any concerns about privacy and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Privacy Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Privacy Protection Details
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {privacySections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
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

        {/* Website-Specific Privacy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Website Privacy & Digital Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websiteSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Your Privacy Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Medical Records Rights
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Request copies of your pet's medical records
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Request corrections to inaccurate information
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Limit who can access your pet's records
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Request an accounting of disclosures
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Personal Data Rights
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Know what personal information we collect
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Request deletion of your personal data
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Opt out of marketing communications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Update your contact preferences
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Retention */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Data Retention & Security
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    How Long We Keep Information
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Medical Records:</strong> Maintained for a minimum of 3 years after the last visit, 
                      or longer as required by Colorado state law and professional standards.
                    </p>
                    <p>
                      <strong>Financial Records:</strong> Retained for 7 years for tax and accounting purposes.
                    </p>
                    <p>
                      <strong>Website Data:</strong> Analytics data is aggregated and anonymized after 26 months.
                    </p>
                    <p>
                      <strong>Marketing Data:</strong> Maintained until you opt out or request deletion.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Security Measures
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Physical Security:</strong> Locked filing cabinets, restricted access areas, 
                      and secure disposal of documents.
                    </p>
                    <p>
                      <strong>Digital Security:</strong> Encrypted data transmission, secure databases, 
                      regular backups, and access controls.
                    </p>
                    <p>
                      <strong>Staff Training:</strong> Regular privacy and security training for all team members.
                    </p>
                    <p>
                      <strong>Third-Party Security:</strong> All vendors must meet our security standards 
                      and sign data processing agreements.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Privacy Questions or Concerns?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                If you have questions about this privacy policy, want to exercise your privacy rights, 
                or have concerns about how your information is handled, please contact us using any of the methods below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground">(719) 204-3647</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">privacy@redrockvet.com</p>
                </div>
                <div className="text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Mail Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Red Rock Veterinary Health<br />
                    Privacy Officer<br />
                    3163 West Colorado Avenue<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
              </div>
              <Separator className="my-8" />
              <p className="text-sm text-muted-foreground">
                We will respond to privacy inquiries within 30 days. For urgent medical record requests, 
                please call us directly during business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}