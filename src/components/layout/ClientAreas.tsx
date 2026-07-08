import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Sparkles } from 'lucide-react';

export function ClientAreas() {
  return (
    <section className="relative py-16 sm:py-24 bg-gray-900 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-500/20 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-sm font-medium mb-6 sm:mb-8 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            <span>Turning Ideas Into Digital Success</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-8 max-w-4xl">
            Currently Serving Clients Across <span className="text-brand-400">Bihar</span>, <span className="text-brand-400">Delhi</span>, <span className="text-brand-400">Haryana</span>, <span className="text-brand-400">Uttarakhand</span> & <span className="text-brand-400">Uttar Pradesh</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-300">
            {['Bihar', 'Delhi', 'Haryana', 'Uttarakhand', 'Uttar Pradesh'].map((state) => (
              <div key={state} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin className="h-4 w-4 text-brand-500" />
                <span className="font-medium text-sm sm:text-base">{state}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
