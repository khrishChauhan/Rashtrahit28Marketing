import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  FileText, 
  Image as ImageIcon, 
  Map, 
  BookOpen, 
  Gift, 
  Copy,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';

const PRINT_SERVICES = [
  {
    title: "Visiting Cards",
    description: "Premium custom-designed visiting cards with high-quality printing, elegant finishes, and professional layouts that leave a memorable first impression.",
    icon: <Copy className="h-6 w-6" />
  },
  {
    title: "Brochures",
    description: "Creative brochures designed to showcase your products and services with attractive layouts, premium paper quality, and impactful branding.",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "Banners & Billboards",
    description: "Large-format advertising solutions including promotional banners, hoardings, billboards, and event branding with vibrant, durable printing.",
    icon: <Map className="h-6 w-6" />
  },
  {
    title: "Vinyl & One-Way Vision Printing",
    description: "High-quality vinyl graphics and one-way vision prints for offices, shops, vehicles, and commercial branding that maximize visibility.",
    icon: <ImageIcon className="h-6 w-6" />
  },
  {
    title: "Challan Books & Bill Books",
    description: "Professionally printed challan books, invoice books, bill books, receipt books, and office stationery customized for business operations.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "T-Shirts & Gift Item Printing",
    description: "Custom branding on T-shirts, mugs, trophies, pens, corporate gifts, promotional merchandise, and event giveaways using premium printing techniques.",
    icon: <Gift className="h-6 w-6" />
  },
  {
    title: "Flyers & Promotional Material",
    description: "Professionally designed flyers, pamphlets, leaflets, handouts, and promotional print materials that effectively communicate your marketing campaigns.",
    icon: <Printer className="h-6 w-6" />
  }
];

const FEATURES = [
  "Premium print quality",
  "Fast turnaround time",
  "Creative design support",
  "Bulk printing solutions",
  "Affordable pricing",
  "High-quality finishing",
  "Customized branding"
];

export function PrintMediaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-16 md:pt-24 min-h-[70vh]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
          <div className="absolute bottom-0 left-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-accent-50/30 blur-[120px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 text-left"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[4.5rem] font-heading mb-8 leading-tight">
                Print Media Solutions
              </h1>
              
              <div className="h-1 w-24 bg-brand-500 rounded-full mb-8" />
              
              <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-6">
                Professional Printing & Branding Solutions for Businesses
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                At Rashtrahit28Marketing, we provide high-quality print media solutions that help businesses strengthen their offline presence. From business essentials to large-format advertising, our print services are designed with premium quality, creative layouts, and professional finishing to leave a lasting impression.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-gray-100 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200&h=900" 
                  alt="Premium Printing & Branding Solutions" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="relative bg-gray-50/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PRINT_SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 border border-gray-100"
              >
                <div className="mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white group-hover:rotate-3">
                  {service.icon}
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="relative overflow-hidden bg-brand-900 py-24 md:py-32 text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Choose Our Print Media Services
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-500 rounded-full" />
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <CheckCircle2 className="h-6 w-6 text-brand-500 shrink-0" />
                <span className="font-medium tracking-wide">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gray-50/50 border border-gray-100 p-12 md:p-16 shadow-lg shadow-gray-200/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
              Need Professional Print Media Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether you need business cards, brochures, banners, promotional products, or complete branding materials, Rashtrahit28Marketing delivers premium printing solutions tailored to your business.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="px-10 py-4 text-lg group">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
