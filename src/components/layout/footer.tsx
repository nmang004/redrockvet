import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";

const services = [
  { name: "Fear-Free Care", href: "/services/fear-free" },
  { name: "Wellness Exams", href: "/services/wellness" },
  { name: "Urgent & Emergency", href: "/services/urgent-emergency-care" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Dental Care", href: "/services/dental" },
  { name: "Spay & Neuter", href: "/services/spayandneuter" },
  { name: "Cat Clinic", href: "/services/cat-clinic" },
  { name: "All Services", href: "/services" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Staff", href: "/staff" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Client Information", href: "/client-information" },
];

const patientPortal = [
  { name: "Book Appointment", href: "/client-information" },
  { name: "Medical Records", href: "/medical-record-portal" },
  { name: "Payment Plans", href: "/payment-plans" },
  {
    name: "Online Pharmacy",
    href: "https://redrockvethealth.securevetsource.com/site/view/HomeDelivery.pml",
    external: true,
  },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Accessibility", href: "/accessibility" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/red_rock_vet/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61565871982717",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/redrockvet",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/red-rock-veterinary-health/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Top CTA Bar */}
      <div className="border-b border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Ready to give your pet the best care?
              </h3>
              <p className="text-secondary-foreground/70 mt-1">
                Fear Free® Certified Practice — the only one in Colorado
                designed from the ground up.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/client-information">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <a
                href="tel:719-204-3647"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-secondary-foreground/40 bg-transparent px-6 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (719) 204-3647
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand & Contact — always full width on top on mobile */}
        <div className="mb-10 lg:hidden space-y-5">
          <Image
            src="/red-rock-logo.png"
            alt="Red Rock Veterinary Health"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            A highly-rated, locally owned veterinary hospital in
            Colorado Springs. All staff Fear Free® certified, providing
            compassionate care for your beloved pets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <a
              href="tel:719-204-3647"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              (719) 204-3647
            </a>
            <a
              href="mailto:Reception@RedRockVet.com"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              Reception@RedRockVet.com
            </a>
            <a
              href="https://maps.google.com/?q=3163+W+Colorado+Ave+Colorado+Springs+CO+80904"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              3163 W. Colorado Ave, Colorado Springs, CO 80904
            </a>
            <div className="flex items-center gap-2 text-secondary-foreground/80">
              <Clock className="w-4 h-4 text-primary" />
              Mon–Fri: 8:00 AM – 5:00 PM
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns — 2x2 grid on mobile, 5 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Contact — desktop only (hidden on mobile, shown above) */}
          <div className="hidden lg:block lg:col-span-2 space-y-6">
            <Image
              src="/red-rock-logo.png"
              alt="Red Rock Veterinary Health"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-sm text-secondary-foreground/70 leading-relaxed max-w-sm">
              A highly-rated, locally owned veterinary hospital in
              Colorado Springs. All staff Fear Free® certified, providing
              compassionate care for your beloved pets.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:719-204-3647"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (719) 204-3647
              </a>
              <a
                href="mailto:Reception@RedRockVet.com"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                Reception@RedRockVet.com
              </a>
              <a
                href="https://maps.google.com/?q=3163+W+Colorado+Ave+Colorado+Springs+CO+80904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                3163 W. Colorado Ave, Colorado Springs, CO 80904
              </a>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Clock className="w-4 h-4 text-primary" />
                Mon–Fri: 8:00 AM – 5:00 PM
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Portal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Patient Portal
            </h4>
            <ul className="space-y-2.5">
              {patientPortal.map((item) => (
                <li key={item.name}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {item.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* After Hours — sits in 4th spot on mobile grid */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              After-Hours Emergency
            </h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li>Uintah Pet Emergency</li>
              <li>Animal ER Care</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-secondary-foreground/10" />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Red Rock Veterinary Health. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-secondary-foreground/50 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
