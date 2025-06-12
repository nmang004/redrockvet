import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter 
} from "lucide-react";

const services = [
  { name: "Wellness Exams", href: "/services/wellness" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Dental Care", href: "/services/dental" },
  { name: "Emergency Care", href: "/services/emergency" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM" },
  { day: "Sunday", time: "10:00 AM - 2:00 PM" },
  { day: "Emergency", time: "24/7" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/red-rock-logo.png" 
                alt="Red Rock Veterinary Health" 
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Providing compassionate, comprehensive veterinary care for your beloved pets 
              with state-of-the-art facilities and experienced professionals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Pet Care Lane, Animal City, AC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@redrockvet.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Hours & Updates</h3>
            <div className="space-y-2">
              {hours.map((hour, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-secondary-foreground/80">{hour.day}</span>
                  <span className="font-medium">{hour.time}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter email"
                  className="bg-secondary-foreground/10 border-secondary-foreground/20"
                />
                <Button size="sm" variant="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-secondary-foreground/80">
            © 2024 Red Rock Veterinary Health. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-secondary-foreground/80">Follow us:</span>
            <div className="flex space-x-3">
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}