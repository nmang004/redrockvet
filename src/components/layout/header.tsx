"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

  return (
    <header className="header-sticky safe-area-top bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="mx-auto max-w-7xl container-mobile">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/red-rock-logo.png" 
                alt="Red Rock Veterinary Health" 
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
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
            <Button variant="outline" size="sm" className="text-sm touch-target focus-mobile">
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </Button>
            <Button size="sm" className="text-sm touch-target focus-mobile" asChild>
              <Link href="/client-information">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target focus-mobile"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
              className="md:hidden border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
                {/* Mobile Vet Services */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-foreground">
                    Vet Services
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile About */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-foreground">
                    About
                  </div>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Patient Portal */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-foreground">
                    Patient Portal
                  </div>
                  {patientPortalItems.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
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
                    className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200 touch-target focus-mobile"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="px-3 py-2 space-y-2">
                  <Button variant="outline" size="sm" className="w-full text-sm btn-touch">
                    <Phone className="w-4 h-4 mr-2" />
                    (555) 123-4567
                  </Button>
                  <Button size="sm" className="w-full text-sm btn-touch" asChild>
                    <Link href="/client-information">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}