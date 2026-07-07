import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ArrowRight, X } from 'lucide-react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
          <div className="absolute bottom-0 right-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-accent-50/30 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-12">
            
            {/* Left Column: Statistics (25%) */}
            <div className="w-full lg:w-[25%] flex flex-col justify-center gap-8 order-2 lg:order-1">
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

            {/* Center Column: Logo (30%) */}
            <div className="w-full lg:w-[30%] flex justify-center items-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-56 w-56 lg:h-72 lg:w-72 items-center justify-center rounded-full bg-white shadow-2xl shadow-brand-900/5 border border-gray-50"
              >
                {/* Soft decorative glow behind logo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-50 to-accent-50 opacity-50 blur-xl" />
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-40 w-40 lg:h-48 lg:w-48 items-center justify-center rounded-full bg-brand-700 text-white shadow-xl shadow-brand-900/20"
                >
                  <span className="text-5xl lg:text-6xl font-bold font-heading tracking-tight">GST</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Introduction (45%) */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center order-3 lg:order-3 lg:pl-8">
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
                  GST Industrial & Marketing Services offers the best digital marketing services in Gurgaon, specializing in result-driven ad campaigns and strategic social media solutions. We empower businesses to reach their full potential through premium strategies and timeless design.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="lg" className="group rounded-full px-8" onClick={() => setIsModalOpen(true)}>
                    Read More
                    <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </Button>
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

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-2xl bg-white rounded-[20px] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <Badge variant="subtle" className="mb-6">Leadership</Badge>
              <img src="/images/team/director-placeholder.jpg" alt="Managing Director" className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-gray-50 shadow-lg mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4 text-center">Managing Director</h3>
              <div className="h-1 w-16 bg-brand-500 rounded-full mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Detailed information about the Managing Director goes here.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
