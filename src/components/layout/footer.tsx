import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Facebook, 
  Instagram, 
  Twitter 
} from "lucide-react";

const keyServices = [
  { name: "Wellness Care", href: "/services/wellness" },
  { name: "Emergency Care", href: "/services/urgent-emergency-care" },
  { name: "Surgery & Dental", href: "/services/surgery" },
  { name: "All Services", href: "/services" },
];

const quickActions = [
  { name: "Book Appointment", href: "/client-information", primary: true },
  { name: "Medical Records", href: "/medical-record-portal" },
  { name: "Online Pharmacy", href: "https://redrockvethealth.securevetsource.com/site/view/HomeDelivery.pml", external: true },
];

const aboutLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Staff", href: "/staff" },
  { name: "Contact", href: "/contact" },
];

const hours = [
  { day: "Mon - Fri", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM" },
  { day: "Sunday", time: "10:00 AM - 2:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact & Emergency */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/red-rock-logo.png" 
                alt="Red Rock Veterinary Health" 
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed">
              Fear Free® certified veterinary practice providing compassionate care for your beloved pets.
            </p>

            {/* Emergency Contact - Prominent */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg">Emergency: 24/7</span>
              </div>
              <Button size="lg" className="w-full" asChild>
                <a href="tel:719-204-3647">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (719) 204-3647
                </a>
              </Button>
            </div>

            {/* Practice Hours */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Practice Hours</h4>
              <div className="space-y-1 text-sm">
                {hours.map((hour, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-secondary-foreground/80">{hour.day}</span>
                    <span className="font-medium">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 text-sm text-secondary-foreground/80">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Colorado Springs, CO</span>
            </div>
          </div>

          {/* Services & Quick Actions */}
          <div className="space-y-8">
            {/* Primary Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  action.primary ? (
                    <Button key={action.name} className="w-full justify-start" asChild>
                      <Link href={action.href}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {action.name}
                      </Link>
                    </Button>
                  ) : action.external ? (
                    <a 
                      key={action.name}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                    >
                      {action.name} ↗
                    </a>
                  ) : (
                    <Link 
                      key={action.name}
                      href={action.href}
                      className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                    >
                      {action.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Key Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Services</h3>
              <div className="space-y-2">
                {keyServices.map((service) => (
                  <Link 
                    key={service.name}
                    href={service.href}
                    className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">About</h3>
              <div className="space-y-2">
                {aboutLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter & Legal */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Stay Connected</h3>
              <p className="text-sm text-secondary-foreground/80">
                Get updates and pet care tips delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input 
                  placeholder="Enter your email"
                  className="bg-background border-secondary-foreground/20 focus:border-primary"
                />
                <Button variant="outline" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>

            {/* Legal & Credentials */}
            <div className="space-y-4">
              <div className="text-center py-4 bg-secondary-foreground/5 rounded-lg">
                <span className="text-sm font-medium text-primary">🏆 Fear Free® Certified Practice</span>
              </div>
              
              <div className="space-y-2 text-xs text-secondary-foreground/60">
                <Link href="/privacy-policy" className="block hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="block hover:text-primary transition-colors">Terms of Service</Link>
                <Link href="/accessibility" className="block hover:text-primary transition-colors">Accessibility</Link>
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