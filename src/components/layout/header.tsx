"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Services navigation data
const services = [
  { name: "Wellness Care", href: "/services/wellness" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Dental Care", href: "/services/dental" },
  { name: "Emergency Care", href: "/services/urgent-emergency-care" },
  { name: "Spay & Neuter", href: "/services/spayandneuter" },
  { name: "Allergy Testing", href: "/services/allergy-testing-treatment" },
  { name: "Behavioral Care", href: "/services/behavioral-management" },
  { name: "Cat Clinic", href: "/services/cat-clinic" },
  { name: "Chronic Disease", href: "/services/chronic-disease-management" },
  { name: "Diagnostic Imaging", href: "/services/radiography-ultrasound" },
];

// About navigation data
const aboutItems = [
  { name: "Our Practice", href: "/about" },
  { name: "Staff", href: "/staff" },
  { name: "Blog", href: "/blog" },
];

// Patient Portal navigation data
const patientPortalItems = [
  { name: "Online Pharmacy", href: "https://redrockvethealth.securevetsource.com/site/view/HomeDelivery.pml", external: true },
  { name: "Medical Records Portal", href: "/medical-record-portal", external: false },
];

// Simple navigation items (no dropdown)
const simpleNavigation = [
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-[100]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/red-rock-logo.png" 
                alt="Red Rock Veterinary Health" 
                width={140}
                height={45}
                className="h-6 w-auto md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="z-[100]">
                {/* Vet Services Dropdown */}
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                      Vet Services
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="z-[100]">
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                      About
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="z-[100]">
                    <div className="grid gap-3 p-4 md:w-[200px]">
                      {aboutItems.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Patient Portal Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                    Patient Portal
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[100]">
                    <div className="grid gap-3 p-4 md:w-[250px]">
                      {patientPortalItems.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </Link>
                          )}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Navigation Items */}
                {simpleNavigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-sm" asChild>
              <a href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                (719) 204-3647
              </a>
            </Button>
            <Button size="sm" className="text-sm" asChild>
              <Link href="/client-information">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* MOBILE HAMBURGER BUTTON - ABSOLUTE POSITIONED */}
          <div className="absolute right-4 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 p-0 hover:bg-accent/50 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8 text-foreground" strokeWidth={2} />
              ) : (
                <Menu className="h-8 w-8 text-foreground" strokeWidth={2} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 pt-4 pb-6 space-y-4 bg-background">
                {/* Mobile Vet Services */}
                <div className="space-y-2">
                  <div className="px-4 py-3 text-base font-semibold text-foreground">
                    Vet Services
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-base text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile About */}
                <div className="space-y-2">
                  <div className="px-4 py-3 text-base font-semibold text-foreground">
                    About
                  </div>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-base text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Patient Portal */}
                <div className="space-y-2">
                  <div className="px-4 py-3 text-base font-semibold text-foreground">
                    Patient Portal
                  </div>
                  {patientPortalItems.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-base text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-base text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>

                {/* Mobile Simple Navigation */}
                {simpleNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 space-y-3">
                  <Button variant="outline" size="lg" className="w-full text-base h-12" asChild>
                    <a href="tel:719-204-3647">
                      <Phone className="w-5 h-5 mr-2" />
                      (719) 204-3647
                    </a>
                  </Button>
                  <Button size="lg" className="w-full text-base h-12" asChild>
                    <Link href="/client-information">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}