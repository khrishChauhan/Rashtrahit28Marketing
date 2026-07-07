import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MonitorSmartphone, 
  Megaphone, 
  LineChart, 
  Search, 
  PenTool, 
  Users 
} from 'lucide-react';
import { Badge } from '../ui/Badge';

const SERVICES_DATA = [
  {
    title: "Digital Strategy",
    description: "Data-driven roadmaps designed to scale your brand and maximize ROI across all premium digital channels.",
    icon: <MonitorSmartphone className="h-6 w-6" />
  },
  {
    title: "Performance Marketing",
    description: "Precision-targeted campaigns engineered to convert high-value prospects into long-term loyal clients.",
    icon: <LineChart className="h-6 w-6" />
  },
  {
    title: "Political Campaigns",
    description: "Strategic political communication and comprehensive campaign management to drive voter engagement.",
    icon: <Megaphone className="h-6 w-6" />
  },
  {
    title: "Brand Identity",
    description: "We build strong, memorable brand identities that connect with your audience and establish lasting market presence.",
    icon: <PenTool className="h-6 w-6" />
  },
  {
    title: "SEO Optimization",
    description: "Advanced search engine optimization strategies to ensure your brand ranks highest for critical industry keywords.",
    icon: <Search className="h-6 w-6" />
  },
  {
    title: "Social Media Management",
    description: "Engaging content creation and community management that builds authentic relationships with your audience.",
    icon: <Users className="h-6 w-6" />
  }
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="subtle" className="mb-6">Welcome</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] font-heading">
              to Our Services
            </h2>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 lg:p-10"
            >
              <div className="mb-8 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-600/20">
                {service.icon}
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-gray-900 font-heading transition-colors duration-300 group-hover:text-brand-700">
                {service.title}
              </h3>
              
              <p className="mb-10 flex-1 text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gray-50 px-6 text-sm font-semibold text-gray-900 transition-all duration-300 group-hover:bg-brand-50 group-hover:text-brand-700 sm:w-auto"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
