import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Rocket, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';

const SLIDER_IMAGES = [
  '/images/services/seo.png',
  '/images/services/video-editing.png',
  '/images/services/web-design.png',
  '/images/services/social-media.png',
  '/images/services/print-media.png',
  '/images/services/graphic-design.jpg',
  '/images/services/political-campaign.jpg'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Animated Image Slider Section */}
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={SLIDER_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </AnimatePresence>
        
        {/* Overlay to make it look premium */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {SLIDER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Original Hero Section (now comes after the slider) */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 md:space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-xs sm:text-sm shadow-sm"
            >
              <Rocket className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="uppercase tracking-wider">Strategic Excellence</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.8rem] font-bold tracking-tight text-gray-900 leading-[1.15] font-heading"
            >
              Elevate Your Brand With <span className="text-brand-600">Strategic</span> Marketing
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Premium SEO, Social Media Management, Web Design, and Political Campaign strategies to drive real growth for your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              <Link to="/about" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-2xl group shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 min-h-[48px]">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-2xl bg-white hover:bg-gray-50 border-2 group min-h-[48px]">
                  <Play className="mr-2 h-4 w-4 text-brand-500 transition-transform duration-300 group-hover:scale-110 shrink-0" />
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 xl:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative group">
              {/* Framing Elements */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-tr from-orange-200/40 to-blue-200/40 rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white p-2.5 md:p-3 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                <img 
                  src="/digital-marketing.png" 
                  alt="Strategic Marketing Illustration" 
                  className="w-full h-auto object-cover rounded-[1.5rem] md:rounded-[2rem]"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Badge — hidden on very small screens to avoid overflow */}
              <div className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 border border-gray-100 z-20 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-brand-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight text-sm sm:text-base">ROI Driven</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">Market Focused</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
