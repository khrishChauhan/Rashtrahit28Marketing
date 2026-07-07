import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, Target } from 'lucide-react';
import { Badge } from '../ui/Badge';

const SERVICES = [
  {
    title: "Branding",
    description: "We build strong, memorable brand identities that connect with your audience and establish lasting market presence.",
    icon: <Target className="h-6 w-6" />,
    cta: "Read More",
    href: "/about"
  },
  {
    title: "Political Campaign",
    description: "Strategic political communication and campaign management designed to drive voter engagement and election success.",
    icon: <Megaphone className="h-6 w-6" />,
    cta: "Read More",
    href: "/political"
  }
];

export function WhatWeDo() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-white pt-32 pb-16 md:pt-40 lg:pt-48 lg:pb-24 flex items-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-brand-50/60 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-accent-50/40 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Left Column (35%) */}
          <div className="flex flex-col items-start lg:w-[35%] lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-40"
            >
              <Badge variant="subtle" className="mb-6">Our Expertise</Badge>
              <h2 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-[4.5rem] lg:leading-[1.05] font-heading">
                What <br className="hidden lg:block" />
                We Do?
              </h2>
              
              <div className="mb-8 h-1 w-16 bg-brand-500 rounded-full" />
              
              <p className="max-w-md text-lg leading-relaxed text-gray-600">
                We deliver premium solutions tailored to elevate your brand presence and amplify your message across all channels.
              </p>
            </motion.div>
          </div>

          {/* Right Column (65%) */}
          <div className="lg:w-[65%]">
            <div className="flex flex-col gap-6 lg:gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 lg:gap-8 rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex h-[42px] w-[42px] md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-[14px] bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:scale-105">
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="mb-[10px] text-xl md:text-[22px] lg:text-2xl font-bold text-gray-900 font-heading transition-colors duration-300 group-hover:text-brand-700">
                      {service.title}
                    </h3>
                    
                    <p className="mb-4 text-gray-600 leading-[1.6] text-sm md:text-[15px] lg:text-base">
                      {service.description}
                    </p>
                    
                    <Link 
                      to={service.href} 
                      className="inline-flex items-center text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
                    >
                      <span className="relative">
                        {service.cta}
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
