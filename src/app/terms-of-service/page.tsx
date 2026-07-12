import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Heart, Shield, Clock, CreditCard, Phone, Mail, AlertTriangle, CheckCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Red Rock Veterinary Health",
  description: "Red Rock Veterinary Health's terms of service outlining our veterinary care policies, payment terms, emergency procedures, and client responsibilities for comprehensive pet healthcare.",
  robots: "index, follow",
};

const serviceTerms = [
  {
    icon: Heart,
    title: "Veterinary Care Standards",
    content: [
      "All medical decisions are made by licensed veterinarians using professional judgment",
      "Treatment recommendations based on current veterinary medical standards",
      "Fear Free® certified approach with certified staff to minimize stress and anxiety",
      "Collaborative care involving pet owners in decision-making process",
      "Right to seek second opinions or referrals to specialists when appropriate"
    ]
  },
  {
    icon: Clock,
    title: "Appointments & Scheduling",
    content: [
      "Appointments scheduled based on availability and medical priority",
      "24-hour notice required for appointment cancellations when possible",
      "Emergency cases may cause delays in scheduled appointments",
      "No-show policy: excessive no-shows may result in appointment restrictions",
      "Same-day appointments available based on urgent medical need"
    ]
  },
  {
    icon: CreditCard,
    title: "Payment & Financial Terms",
    content: [
      "Payment due at time of service unless prior arrangements made",
      "Accepted forms: cash, credit/debit cards, CareCredit, pet insurance",
      "Estimates provided for major procedures; final costs may vary",
      "Past due accounts subject to collection procedures and fees",
      "Financial hardship assistance considered on case-by-case basis"
    ]
  },
  {
    icon: Shield,
    title: "Liability & Professional Standards",
    content: [
      "Practice maintains professional liability insurance coverage",
      "Treatment outcomes cannot be guaranteed due to biological variables",
      "Clients responsible for following discharge instructions and medications",
      "Liability limited to direct costs of services provided",
      "All veterinary services performed according to Colorado state regulations"
    ]
  }
];

const emergencyTerms = [
  {
    icon: AlertTriangle,
    title: "Emergency Care Policy",
    content: "Emergency cases are prioritized by medical severity, not arrival time. While we strive to see emergencies quickly, wait times may vary based on the critical nature of cases ahead of you. Life-threatening emergencies always take precedence."
  },
  {
    icon: Phone,
    title: "After-Hours Emergencies",
    content: "For critical emergencies outside business hours, go directly to a 24-hour emergency facility such as Animal ER Care, (719) 260-7141 (open 24/7), or Uintah Pet Emergency, (719) 633-3214 (open daily until midnight). Call us at (719) 204-3647 when we reopen and we will coordinate follow-up care."
  },
  {
    icon: CheckCircle,
    title: "Consent for Treatment",
    content: "By bringing your pet for treatment, you consent to necessary medical procedures. For major surgeries or anesthesia, separate written consent forms will be provided with detailed risk disclosure and authorization."
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding our veterinary care policies, payment terms, and mutual responsibilities 
            helps ensure the best possible care for your beloved pets.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Questions? Call (719) 204-3647
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/client-information">
                <CheckCircle className="w-4 h-4 mr-2" />
                Schedule Appointment
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
                Welcome to Red Rock Veterinary Health
              </h2>
              <div className="prose max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  These Terms of Service govern your relationship with Red Rock Veterinary Health and outline 
                  our mutual responsibilities in providing exceptional veterinary care. By using our services, 
                  you agree to these terms and our commitment to Fear Free® healthcare for your pets.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We are a full-service veterinary hospital located at 3163 West Colorado Avenue, Colorado Springs, 
                  Colorado, providing comprehensive medical care, surgery, dentistry, and emergency services for 
                  dogs and cats.
                </p>
                <div className="bg-accent border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold text-foreground mb-2">Our Commitment</p>
                  <p>
                    We are committed to providing compassionate, high-quality veterinary care using Fear Free® 
                    principles to ensure your pet's emotional well-being throughout their healthcare journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Service Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Service Terms & Policies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceTerms.map((section, index) => {
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

        {/* Emergency & Consent Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Emergency Care & Consent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyTerms.map((section, index) => {
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

        {/* Client Responsibilities */}
        <div className="mb-16">
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Client Responsibilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Medical Care Responsibilities
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide accurate medical history and current medications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Follow all discharge instructions and medication schedules
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Report any adverse reactions or complications immediately
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Keep vaccinations current as recommended
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Seek immediate care for emergency situations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Practice & Financial Responsibilities
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Arrive on time for scheduled appointments
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide 24-hour notice for appointment cancellations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Maintain current contact and insurance information
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Pay for services at time of visit or per payment plan
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Treat staff and other clients with respect and kindness
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Disclaimers */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Professional Disclaimers & Limitations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Medical Limitations
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>No Guarantee of Outcomes:</strong> Veterinary medicine involves biological 
                      variables that cannot be fully controlled. Treatment success cannot be guaranteed, 
                      though we commit to providing the highest standard of care.
                    </p>
                    <p>
                      <strong>Diagnostic Limitations:</strong> Some conditions may require multiple tests 
                      or specialist consultation for proper diagnosis. We'll inform you of limitations 
                      and recommend appropriate next steps.
                    </p>
                    <p>
                      <strong>Species-Specific Risks:</strong> Each species and individual pet may respond 
                      differently to treatments. We'll discuss specific risks relevant to your pet.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Legal & Liability Limitations
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Liability Scope:</strong> Our liability is limited to the direct cost of 
                      services provided. We maintain professional liability insurance as required by 
                      Colorado state law.
                    </p>
                    <p>
                      <strong>Third-Party Services:</strong> We are not responsible for services provided 
                      by third-party specialists, laboratories, or emergency clinics, though we'll 
                      coordinate care when possible.
                    </p>
                    <p>
                      <strong>Client Compliance:</strong> Treatment success depends on client compliance 
                      with instructions. Non-compliance may affect outcomes and limit our liability.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Website Terms */}
        <div className="mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Website & Digital Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Website Usage
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Information provided is for educational purposes only
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Website content does not replace professional veterinary advice
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Emergency situations require immediate phone contact or visit
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All content is proprietary and protected by copyright law
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Online Communications
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Email communications are not secure for confidential information
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Form submissions may take 24-48 hours for response
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Online appointment requests require confirmation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Privacy policy governs all data collection and usage
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Governing Law */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Governing Law & Dispute Resolution
              </h2>
              <div className="prose max-w-none text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Applicable Law
                    </h3>
                    <p className="leading-relaxed">
                      These terms are governed by Colorado state law and applicable federal regulations. 
                      Our practice operates under Colorado Veterinary Practice Act and maintains all 
                      required state licenses and certifications.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Dispute Resolution
                    </h3>
                    <p className="leading-relaxed">
                      We encourage open communication to resolve any concerns. For formal disputes, 
                      we prefer mediation through the Colorado Veterinary Medical Association before 
                      pursuing legal action.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card className="bg-accent border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're here to clarify any questions about our terms of service or policies. 
                Clear communication helps ensure the best care for your pets.
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
                  <p className="text-muted-foreground">info@redrockvet.com</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    3163 West Colorado Avenue<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
              </div>
              <Separator className="my-8" />
              <p className="text-sm text-muted-foreground">
                By using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}