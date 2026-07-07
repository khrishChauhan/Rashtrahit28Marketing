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
      <section className="relative w-full overflow-hidden bg-white py-24 md:py-32">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8 z-10 mt-8 lg:mt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 leading-[1.1] font-heading uppercase"
            >
              Print Media Solutions
            </motion.h1>
            
            <div className="h-1 w-24 bg-brand-500 rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line"
            >
              At Rashtrahit28Marketing, we provide high-quality print media solutions that help businesses strengthen their offline presence. From business essentials to large-format advertising, our print services are designed with premium quality, creative layouts, and professional finishing to leave a lasting impression.
            </motion.p>
          </div>

          {/* Right Content: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-5 relative mt-16 lg:mt-0"
          >
            <div className="relative group mx-4 sm:mx-0">
              {/* Framing Elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200/40 to-blue-200/40 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                <img 
                  src="/images/services/print-media.png" 
                  alt="Premium Printing Solutions" 
                  className="w-full h-auto object-cover rounded-[2rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
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
