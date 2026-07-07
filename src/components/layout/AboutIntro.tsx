import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "15K+", label: "Creatives Delivered" },
  { value: "1K+", label: "Campaigns" },
];

function Counter({ value, label }: { value: string; label: string }) {
  const match = value.match(/(\d+)(.*)/);
  const number = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(val).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [number, suffix, inView]);

  return (
    <div className="group flex flex-col border-l-[3px] border-gray-100 pl-6 py-3 transition-colors duration-500 hover:border-brand-500">
      <span 
        ref={nodeRef} 
        className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-2 transition-colors duration-500 group-hover:text-brand-700"
      >
        0{suffix}
      </span>
      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-accent-50/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20">
          
          {/* Left Column: Statistics */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center gap-10 order-2 lg:order-1">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Counter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>

          {/* Right Column: Introduction */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start"
            >
              <Badge variant="subtle" className="mb-6">ABOUT COMPANY</Badge>
              
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] font-heading">
                Top Digital Marketing Agency in Gurugram
              </h2>
              
              <div className="mb-8 h-1 w-16 bg-brand-500 rounded-full" />
              
              <p className="mb-10 text-lg leading-relaxed text-gray-600">
                Rashtrahit28Marketing offers the best digital marketing services in Gurgaon, specializing in result-driven ad campaigns and strategic social media solutions. We empower businesses to reach their full potential through premium strategies and timeless design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="rounded-full px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
