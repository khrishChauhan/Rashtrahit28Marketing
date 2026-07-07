import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Rocket, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white pt-32 pb-20 md:pt-40 lg:pt-48 lg:pb-32">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-8 z-10 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm shadow-sm"
          >
            <Rocket className="h-4 w-4" />
            <span className="uppercase tracking-wider">Strategic Excellence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-gray-900 leading-[1.1] font-heading"
          >
            Elevate Your Brand With <span className="text-brand-600">Strategic</span> Marketing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
          >
            Premium SEO, Social Media Management, Web Design, and Political Campaign strategies to drive real growth for your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 pt-4"
          >
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full px-8 py-4 text-base rounded-2xl group shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30">
                Discover Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full px-8 py-4 text-base rounded-2xl bg-white hover:bg-gray-50 border-2 group">
                <Play className="mr-2 h-4 w-4 text-brand-500 transition-transform duration-300 group-hover:scale-110" />
                Contact Us Now
              </Button>
            </Link>
          </motion.div>


        </div>

        {/* Right Content: Asymmetrical Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-6 xl:col-span-5 relative mt-16 lg:mt-0"
        >
          <div className="relative group mx-4 sm:mx-0">
            {/* Framing Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200/40 to-blue-200/40 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
              <img 
                src="/digital-marketing.png" 
                alt="Strategic Marketing Illustration" 
                className="w-full h-auto object-cover rounded-[2rem]"
                loading="lazy"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <TrendingUp className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 leading-tight">ROI Driven</div>
                <div className="text-sm text-gray-500 font-medium">Market Focused</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
