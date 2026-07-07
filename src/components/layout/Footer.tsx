import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Contact", href: "#" },
  ],
  services: [
    { label: "Digital Strategy", href: "#" },
    { label: "Brand Identity", href: "#" },
    { label: "Performance Marketing", href: "#" },
    { label: "Web Experiences", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ]
};

const SOCIAL_LINKS = [
  { icon: <Facebook className="h-4 w-4" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="h-4 w-4" />, href: "#", label: "Instagram" },
  { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 pt-20 pb-10 text-white selection:bg-brand-500 selection:text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Description (4 columns wide on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white font-bold font-heading shadow-sm transition-transform duration-300 group-hover:scale-105">
                R
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                Rashtrahit<span className="text-brand-500">28</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              We engineer digital growth through premium marketing strategies, timeless design, and modern technology.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-brand-600 hover:border-brand-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-brand-900/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links (2 columns wide on lg) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-brand-500" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services (3 columns wide on lg) */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-brand-500" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 columns wide on lg) */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a href="mailto:contact@rashtrahit28.com" className="group flex items-start gap-4 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-brand-400 group-hover:border-brand-800">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Email</span>
                    <span className="font-medium">contact@rashtrahit28.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="group flex items-start gap-4 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-brand-400 group-hover:border-brand-800">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Phone</span>
                    <span className="font-medium">+91 98765 43210</span>
                  </div>
                </a>
              </li>
              <li className="group flex items-start gap-4 text-sm text-gray-400 transition-colors duration-300">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Location</span>
                  <span className="font-medium leading-relaxed">Mumbai, Maharashtra<br />India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row text-sm text-gray-500">
          <p>© 2026 Rashtrahit28Marketing. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {FOOTER_LINKS.legal.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
