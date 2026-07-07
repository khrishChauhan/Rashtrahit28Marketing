import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MonitorSmartphone, 
  Megaphone, 
  Search, 
  PenTool, 
  Users,
  Video,
  Printer
} from 'lucide-react';
import { Badge } from '../ui/Badge';

const SERVICES_DATA = [
  {
    title: "Social Media",
    description: "Professional growth, engagement, and strategic content to enhance your online brand.",
    icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/services/social-media-management"
  },
  {
    title: "SEO",
    description: "Increase organic traffic and secure optimal visibility across search engines.",
    icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/services/search-engine-optimization"
  },
  {
    title: "Video Editing",
    description: "Captivating, high-quality visual material designed to produce real outcomes.",
    icon: <Video className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/services/video-editing"
  },
  {
    title: "Web Design",
    description: "Modern, responsive, and conversion-focused digital experiences for your brand.",
    icon: <MonitorSmartphone className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/services/web-designing"
  },
  {
    title: "Graphic Design",
    description: "Creative visual identity and custom logo design tailored to your vision.",
    icon: <PenTool className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/services/graphic-designing"
  },
  {
    title: "Political Campaign",
    description: "Shape voter perception and drive meaningful engagement during elections.",
    icon: <Megaphone className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/political"
  },
  {
    title: "Print Media",
    description: "High-quality offline branding, from business essentials to large-format prints.",
    icon: <Printer className="h-5 w-5 md:h-6 md:w-6" />,
    href: "/services/print-media"
  }
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-16 sm:py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] md:h-[1000px] md:w-[1000px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-50/50 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] md:h-[800px] md:w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-50/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-12 sm:mb-16 md:mb-20 flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Badge variant="subtle" className="mb-4 sm:mb-6">Welcome</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-gray-900 font-heading mb-6">
              to our services
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-brand-500 rounded-full" />
          </motion.div>
        </div>

        {/* Services Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-[20px] border border-gray-100 bg-white p-5 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white">
                {service.icon}
              </div>
              
              <h3 className="mt-0 mb-2 text-lg md:text-xl lg:text-2xl font-bold text-gray-900 font-heading transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="mb-5 flex-1 text-gray-600 leading-relaxed text-sm md:text-[15px]">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <Link 
                  to={service.href} 
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 bg-transparent px-5 text-sm font-bold text-gray-700 transition-all duration-500 group-hover:border-brand-500 group-hover:bg-brand-50 group-hover:text-brand-700 min-h-[44px]"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
