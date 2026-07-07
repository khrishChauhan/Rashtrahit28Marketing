import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Megaphone, Users } from 'lucide-react';

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-orange-50/40 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-blue-50/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 mb-6">
                <Users className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Agency Profile</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-gray-900 font-heading leading-tight mb-6 uppercase">
                About Us
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Rashtrahit28Marketing is a results-driven digital marketing agency committed to helping businesses grow through innovative marketing strategies, creative branding, and high-performing digital campaigns.
              </p>

              {/* Mission Pull Quote */}
              <div className="border-l-4 border-orange-500 pl-6 py-3 bg-gradient-to-r from-orange-50/50 to-transparent rounded-r-xl mb-10">
                <p className="text-xl md:text-2xl text-gray-900 italic font-medium leading-snug">
                  "Our mission is to <span className="text-orange-600 font-bold">transform ideas</span> into impactful digital experiences. We specialize in creating customized marketing solutions that increase brand visibility, generate quality leads, and deliver <span className="text-orange-600 font-bold">measurable business growth</span>."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    From strategic social media management and performance advertising to graphic design, branding, video editing, website development, and election campaign marketing, we provide end-to-end digital solutions tailored to every client's unique goals.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    At Rashtrahit28Marketing, we believe that every brand has a story worth telling. Our team combines creativity, technology, and data-driven strategies to build strong digital identities that leave a lasting impression.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Floating Animation */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              >
                <img 
                  alt="Premium abstract digital marketing strategy visualization" 
                  className="w-full h-auto object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]" 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </motion.div>

              {/* Floating SaaS UI Elements (Decorative) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl hidden xl:block border border-gray-100 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Growth Rate</p>
                    <p className="font-bold text-gray-900 text-lg">+128%</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl hidden xl:block border border-gray-100 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Active Campaigns</p>
                    <p className="font-bold text-gray-900 text-lg">32 Verified</p>
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
