import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

const TRUST_POINTS = [
  "Experienced Team",
  "Result Driven",
  "Political Campaign Experts",
  "Digital Marketing Solutions"
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-bg-base pt-32 pb-16 md:pt-40 lg:pt-48 lg:pb-24 flex items-center">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] h-[70%] w-[50%] rounded-full bg-brand-100/40 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] h-[50%] w-[30%] rounded-full bg-accent-50/40 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-12">
          
          {/* Left Column (55%) */}
          <div className="flex flex-col items-start lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 mb-8 shadow-sm transition-all hover:shadow-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2.5 animate-pulse" />
              Premium Digital & Political Agency
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-[4.5rem] lg:leading-[1.05] font-heading mb-6"
            >
              Elevating Brands & <br className="hidden lg:block" />
              <span className="text-brand-700">Political Campaigns</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10"
            >
              We engineer digital growth through premium marketing strategies, 
              timeless design, and modern technology. Transforming your vision into 
              measurable success.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Button size="lg" className="w-full sm:w-auto group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                View Our Work
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 w-full"
            >
              {TRUST_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column (45%) */}
          <div className="lg:w-[45%] relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
            >
              {/* Decorative shapes */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-accent-50 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50 blur-xl transition-transform duration-700 hover:rotate-6" />
              
              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 bg-white p-2 shadow-2xl shadow-brand-900/10 aspect-[4/5] lg:aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Marketing Team Strategy" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                  loading="eager"
                />
                
                {/* Floating Overlay Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-8 -left-6 lg:-left-12 rounded-2xl bg-white p-4 shadow-xl shadow-brand-900/5 border border-gray-100 flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <ArrowRight className="h-5 w-5 -rotate-45" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Growth</p>
                    <p className="text-xl font-bold text-gray-900 font-heading">+240% ROI</p>
                  </div>
                </motion.div>

                {/* Floating Overlay Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-12 -right-6 lg:-right-8 rounded-2xl bg-white p-5 shadow-xl shadow-brand-900/5 border border-gray-100 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                        </div>
                      ))}
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-50 flex items-center justify-center">
                      <span className="text-sm font-bold text-brand-700">+</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Expert Team</p>
                </motion.div>

              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
