import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Social Media Management (SMM)", href: "/services/social-media-management" },
    { label: "Search Engine Optimization (SEO)", href: "/services/search-engine-optimization" },
    { label: "Video Editing", href: "/services/video-editing" },
    { label: "Graphic Designing", href: "/services/graphic-designing" },
    { label: "Web Designing", href: "/services/web-designing" },
    { label: "Political Campaign & Marketing", href: "/political" },
    { label: "Print Media", href: "/services/print-media" }
  ],
  about: [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
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
    <footer className="bg-gray-900 pt-20 pb-10 text-white selection:bg-brand-500 selection:text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Description (4 columns wide on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center group mb-6">
              <img src="/images/logo/rlogo.png" alt="Rashtrahit28Marketing" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Rashtrahit28Marketing offers the best digital marketing services in India, specializing in result-driven ad campaigns and strategic social media solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-brand-500 hover:border-brand-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-brand-900/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links (2 columns wide on lg) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand-500">Quick Links</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-brand-500 transition-colors duration-300"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-brand-500" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services (3 columns wide on lg) */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand-500">About Me</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-brand-500 transition-colors duration-300"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-brand-500" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 columns wide on lg) */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand-500">Contact Us</h4>
            <ul className="space-y-5">
              <li className="group flex items-start gap-4 text-sm text-gray-400 transition-colors duration-300">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Address</span>
                  <span className="font-medium leading-relaxed">28, Urban Estate, Sector-7,<br />India, Haryana - 122001</span>
                </div>
              </li>
              <li>
                <div className="group flex items-start gap-4 text-sm text-gray-400 transition-colors duration-300">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-brand-400 group-hover:border-brand-800">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Phone Numbers</span>
                    <a href="tel:+917290873707" className="font-medium hover:text-brand-500 transition-colors block">+91 7290873707</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="group flex items-start gap-4 text-sm text-gray-400 transition-colors duration-300">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-brand-400 group-hover:border-brand-800">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Emails</span>
                    <a href="mailto:abhishekinsan137@gmail.com" className="font-medium hover:text-brand-500 transition-colors block">abhishekinsan137@gmail.com</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row text-sm text-gray-500">
          <p>Copyright © 2026 Rashtrahit28Marketing. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <span className="hover:text-brand-500 transition-colors duration-300">
              Designed & Developed by Rashtrahit28Marketing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
