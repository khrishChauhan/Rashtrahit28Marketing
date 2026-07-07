import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Megaphone, Users } from 'lucide-react';

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[20%] h-[300px] w-[300px] md:h-[600px] md:w-[600px] -translate-y-1/2 rounded-full bg-orange-50/40 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] translate-y-1/3 rounded-full bg-blue-50/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 mb-5 sm:mb-6">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Agency Profile</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-bold tracking-tight text-gray-900 font-heading leading-tight mb-5 sm:mb-6 uppercase">
                About Us
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Rashtrahit28Marketing is a results-driven digital marketing agency committed to helping businesses grow through innovative marketing strategies, creative branding, and high-performing digital campaigns.
              </p>

              {/* Mission Pull Quote */}
              <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-3 bg-gradient-to-r from-orange-50/50 to-transparent rounded-r-xl mb-8 sm:mb-10">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 italic font-medium leading-snug">
                  "Our mission is to <span className="text-orange-600 font-bold">transform ideas</span> into impactful digital experiences. We specialize in creating customized marketing solutions that increase brand visibility, generate quality leads, and deliver <span className="text-orange-600 font-bold">measurable business growth</span>."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white shrink-0">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    From strategic social media management and performance advertising to graphic design, branding, video editing, website development, and election campaign marketing, we provide end-to-end digital solutions tailored to every client's unique goals.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white shrink-0">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    At Rashtrahit28Marketing, we believe that every brand has a story worth telling. Our team combines creativity, technology, and data-driven strategies to build strong digital identities that leave a lasting impression.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Floating Animation */}
              <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              >
                <img 
                  alt="Premium digital marketing strategy visualization" 
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5]" 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </motion.div>

              {/* Floating UI Elements — only on xl+ to avoid overflow */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl hidden xl:block border border-gray-100 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Growth Rate</p>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">+128%</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl hidden xl:block border border-gray-100 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Active Campaigns</p>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">32 Verified</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
