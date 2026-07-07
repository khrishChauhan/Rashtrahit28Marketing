import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const TOP_BAR_CONTACT = {
  email: "contact@rashtrahit28.com",
  phone: "+91 98765 43210"
};

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { 
    label: "Services", 
    href: "#",
    dropdown: [
      { title: "Digital Strategy", desc: "Data-driven roadmaps to scale your brand." },
      { title: "Performance Marketing", desc: "Targeted campaigns engineered to convert." },
      { title: "Web Experiences", desc: "Award-winning digital platforms & apps." },
      { title: "Political Campaigns", desc: "Strategic political communication." }
    ]
  },
  { label: "Political", href: "#" },
  { label: "Team", href: "#" },
  { label: "Contact Us", href: "#contact" }
];

function TopBar() {
  return (
    <div className="hidden w-full bg-brand-900 px-6 py-2.5 text-[13px] font-medium text-brand-50 md:block lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <a href={`mailto:${TOP_BAR_CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5 opacity-80" />
            <span className="tracking-wide">{TOP_BAR_CONTACT.email}</span>
          </a>
          <a href={`tel:${TOP_BAR_CONTACT.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="h-3.5 w-3.5 opacity-80" />
            <span className="tracking-wide">{TOP_BAR_CONTACT.phone}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-brand-900 transition-all hover:scale-105">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-brand-900 transition-all hover:scale-105">
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-brand-900 transition-all hover:scale-105">
            <Twitter className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-brand-900 transition-all hover:scale-105">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function DesktopNavItem({ link }: { link: any; key?: string | number }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDropdown = !!link.dropdown;

  return (
    <div 
      className="relative group px-3 py-2"
      onMouseEnter={() => isDropdown && setIsOpen(true)}
      onMouseLeave={() => isDropdown && setIsOpen(false)}
    >
      <a 
        href={link.href}
        className={cn(
          "flex items-center gap-1.5 text-[15px] font-medium transition-colors relative",
          link.active ? "text-brand-700" : "text-gray-600 hover:text-brand-700"
        )}
      >
        {link.label}
        {isDropdown && <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />}
        <span className={cn(
          "absolute -bottom-1.5 left-0 h-[2px] bg-brand-600 transition-all duration-300 rounded-full",
          link.active ? "w-full" : "w-0 group-hover:w-full"
        )}></span>
      </a>

      {isDropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-1/2 top-full mt-4 w-[520px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-200/50 ring-1 ring-black/5"
            >
              {/* Optional tiny invisible bridge to prevent hover loss */}
              <div className="absolute -top-4 left-0 h-4 w-full" />
              
              <div className="grid grid-cols-2 gap-2">
                {link.dropdown.map((item: any) => (
                  <a 
                    key={item.title} 
                    href="#"
                    className="group/item flex flex-col gap-1.5 rounded-xl p-4 transition-colors hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900 group-hover/item:text-brand-700 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white font-bold font-heading shadow-sm">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 font-heading">
                Rashtrahit<span className="text-brand-700">28</span>
              </span>
            </div>
            <button 
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto px-6 py-10">
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                >
                  <a 
                    href={link.href} 
                    onClick={onClose}
                    className={cn(
                      "text-3xl font-semibold tracking-tight transition-colors",
                      link.active ? "text-brand-700" : "text-gray-900 hover:text-brand-700"
                    )}
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="mt-5 flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                      {link.dropdown.map((item: any) => (
                        <a key={item.title} href="#" className="text-[17px] font-medium text-gray-600 hover:text-brand-700">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="px-6 py-8 bg-gray-50 border-t border-gray-100">
            <Button variant="primary" size="lg" className="w-full py-7 text-lg mb-8 shadow-sm">
              Get Started
            </Button>
            <div className="flex justify-center gap-8 text-gray-400">
              <a href="#" className="hover:text-brand-700 transition-colors hover:scale-110 transform"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand-700 transition-colors hover:scale-110 transform"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand-700 transition-colors hover:scale-110 transform"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand-700 transition-colors hover:scale-110 transform"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full flex flex-col">
        {/* Top Contact Bar */}
        <div 
          className={cn(
            "w-full transition-all duration-300 origin-top",
            isScrolled ? "h-0 opacity-0 -translate-y-full" : "h-[44px] opacity-100 translate-y-0"
          )}
        >
          <TopBar />
        </div>

        {/* Main Navbar */}
        <div 
          className={cn(
            "w-full border-b transition-all duration-300",
            isScrolled 
              ? "bg-white/80 backdrop-blur-lg border-gray-200/50 py-4 shadow-sm" 
              : "bg-white border-gray-100 py-6"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white font-bold font-heading shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md group-active:scale-95">
                R
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900 font-heading">
                Rashtrahit<span className="text-brand-700">28</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              {NAV_LINKS.map((link) => (
                <DesktopNavItem key={link.label} link={link} />
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-5">
              <div className="hidden lg:block">
                <Button 
                  variant="primary" 
                  className="px-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
              <button 
                className="lg:hidden flex items-center justify-center h-11 w-11 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
