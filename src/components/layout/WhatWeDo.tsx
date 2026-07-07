import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';

export function WhatWeDo() {
  return (
    <section className="relative w-full overflow-hidden bg-orange-50/30 py-16 sm:py-20 md:py-28 lg:py-36">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-brand-100/40 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-brand-50/60 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Badge variant="subtle" className="mb-4 sm:mb-6">WHAT WE DELIVER</Badge>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2] font-heading px-2">
              Result-Driven Digital Marketing Solutions That Grow Your Business
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl">
              At Rashtrahit28Marketing, we empower brands with result-driven digital marketing solutions. Our expertise in branding, social media marketing, website development, SEO, paid advertising, and creative content helps businesses increase visibility, attract customers, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
