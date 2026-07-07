import React from 'react';
import { motion } from 'motion/react';
import { Layout, Smartphone, Image, MousePointer2 } from 'lucide-react';
import { ContactUs } from './ContactUs';

const SERVICE_FEATURES = [
  {
    title: "Web Design & Interface Design",
    description: "",
    icon: <Layout className="h-6 w-6" />
  },
  {
    title: "Mobile Responsive Design",
    description: "",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: "Banner Graphics & Visuals",
    description: "",
    icon: <Image className="h-6 w-6" />
  },
  {
    title: "User Experience (UX) Improvement",
    description: "",
    icon: <MousePointer2 className="h-6 w-6" />
  }
];

export function ServiceDetail() {
  return (
    <div className="pt-16 md:pt-24">
      {/* 2. Service Hero */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
          <div className="absolute bottom-0 left-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-accent-50/30 blur-[120px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[4.5rem] font-heading mb-8 leading-tight">
              BEST WEB DESIGNING AGENCY IN GURGAON
            </h1>
            
            <div className="mx-auto h-1 w-24 bg-brand-500 rounded-full mb-8" />
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Build a powerful online presence...<br/>
              (Complete paragraph)
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="relative overflow-hidden bg-bg-base py-24 md:py-32 border-t border-gray-100/50">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="mb-8 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white group-hover:rotate-3">
                  {feature.icon}
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <ContactUs />
    </div>
  );
}
