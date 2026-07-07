import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Megaphone, Target } from 'lucide-react';
import { Badge } from '../ui/Badge';

const SERVICES = [
  {
    title: "Branding",
    description: "We build strong, memorable brand identities that connect with your audience and establish lasting market presence.",
    icon: <Target className="h-6 w-6" />,
    cta: "Read More"
  },
  {
    title: "Political Campaign",
    description: "Strategic political communication and campaign management designed to drive voter engagement and election success.",
    icon: <Megaphone className="h-6 w-6" />,
    cta: "Read More"
  }
];

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-[10%] h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-50/60 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-[300px] w-[300px] rounded-full bg-accent-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Left Column (35%) */}
          <div className="flex flex-col items-start lg:w-[35%] lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <Badge variant="subtle" className="mb-6">Our Expertise</Badge>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] font-heading">
                What <br className="hidden lg:block" />
                We Do?
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-600">
                We deliver premium solutions tailored to elevate your brand presence and amplify your message across all channels.
              </p>
            </motion.div>
          </div>

          {/* Right Column (65%) */}
          <div className="lg:w-[65%]">
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 lg:p-10"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:scale-110">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 font-heading transition-colors duration-300 group-hover:text-brand-700">
                    {service.title}
                  </h3>
                  
                  <div className="my-6 h-[2px] w-12 bg-gray-100 transition-all duration-500 group-hover:w-full group-hover:bg-brand-500" />
                  
                  <p className="mb-8 flex-1 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a 
                    href="#" 
                    className="mt-auto inline-flex items-center text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    <span className="relative">
                      {service.cta}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
