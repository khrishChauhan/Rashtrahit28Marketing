import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { Footer } from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SECTION_1 = {
  heading: "Best Political Marketing Agency in Gurgaon",
  subheading: "For Political Candidates And Political Parties",
  paragraph: "Run effective and data-driven political campaigns. We provide end-to-end digital solutions to build a strong presence, connect with voters, and execute winning strategies.",
  image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200&h=800"
};

const SECTION_2 = {
  heading: "Best Political Marketing and Campaign Management Agency in Gurgaon",
  bullets: [
    "360° Election Campaign Strategy & Planning",
    "Multi-Channel Digital & Offline Advertising",
    "Innovative WhatsApp & Mobile Message Campaigns",
    "Professional Graphic, Photo & Video Creation",
    "Website, SEO & Online Presence Management",
    "24/7 Campaign Monitoring & Crisis Control",
    "Interactive Virtual Town Halls & Live Streaming Events"
  ],
  image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=1200&h=800"
};

const SECTION_3 = {
  heading: "Political Marketing Services",
  services: [
    "Professional Political Videography & Photography",
    "Digital Campaign Strategy",
    "Creative Content Strategy",
    "Website & SEO for Politicians",
    "Data, Analytics & Targeting",
    "Advertising & Media Buying",
    "Email & Direct Outreach",
    "Social Media Management",
    "Reputation Management & PR",
    "Video Ads & Motion Graphics"
  ],
  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200&h=800"
};

const SECTION_4 = {
  paragraph: "Political campaigns and marketing play a vital role in building public trust, shaping voter perception, and driving meaningful engagement during elections. As a Top Campaign Marketing Agency in Gurgaon, we deliver results.",
  image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200&h=800"
};

export function PoliticalCampaignPage() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sections = gsap.utils.toArray('.scroll-section');
    
    sections.forEach((section: Element, i) => {
      ScrollTrigger.create({
        trigger: section,
        scroller: containerRef.current?.querySelector('main'),
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          if (self.isActive) {
            setActiveSection(i);
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.scroll-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-gray-900" ref={containerRef}>
      {/* Side Vertical Text */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 z-50 mix-blend-difference text-white hidden md:block tracking-widest text-sm font-bold opacity-70">
        ESTABLISHED 2017
      </div>

      {/* Right Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className="group relative flex items-center justify-center h-6 w-6"
          >
            <span 
              className={`absolute h-2 w-2 rounded-full transition-all duration-300 ${activeSection === idx ? 'bg-brand-600 scale-150' : 'bg-gray-300 group-hover:bg-brand-400 group-hover:scale-125'}`}
            />
          </button>
        ))}
      </div>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
        {/* SECTION 1 */}
        <section className="scroll-section relative h-screen w-full snap-start flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900">
          <div className="absolute inset-0 z-0">
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
            />
          </div>
          
          <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">
            <div className="text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-xl md:text-2xl font-semibold mb-4 text-brand-200"
              >
                {SECTION_1.subheading}
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
              >
                {SECTION_1.heading}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
              >
                {SECTION_1.paragraph}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:flex justify-center items-center h-[60vh]"
            >
              <motion.div 
                animate={{ y: [-15, 15, -15] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
              >
                <img src={SECTION_1.image} alt="Political Campaign" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="scroll-section relative h-screen w-full snap-start flex items-center justify-center overflow-hidden bg-gray-50">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full pt-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={SECTION_2.image} alt="Campaign Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply" />
            </motion.div>

            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-4xl md:text-5xl font-bold font-heading mb-10 text-gray-900 leading-tight"
              >
                {SECTION_2.heading}
              </motion.h2>
              <ul className="space-y-6">
                {SECTION_2.bullets.map((bullet, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold mt-1">
                      {idx + 1}
                    </div>
                    <span className="text-xl text-gray-700 font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="scroll-section relative h-screen w-full snap-start flex items-center justify-center overflow-hidden bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full pt-20">
            <div className="flex flex-col h-[70vh]">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-4xl md:text-5xl font-bold font-heading mb-10 text-gray-900"
              >
                {SECTION_3.heading}
              </motion.h2>
              
              <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar">
                {SECTION_3.services.map((service, idx) => (
                  <AccordionItem key={idx} title={service} index={idx} />
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={SECTION_3.image} alt="Political Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-accent-900/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="scroll-section relative h-screen w-full snap-start flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 to-brand-900 text-white">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-500 rounded-full blur-[150px] opacity-30" />
          
          <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full pt-20">
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl font-heading leading-relaxed font-light text-brand-50"
              >
                "{SECTION_4.paragraph}"
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 1 }}
              className="hidden lg:flex justify-center items-center h-[60vh]"
            >
              <motion.div 
                animate={{ y: [-20, 20, -20] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/20"
              >
                <img src={SECTION_4.image} alt="Campaign Marketing" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="scroll-section relative snap-start">
          <Footer />
        </section>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
      `}} />
    </div>
  );
}

function AccordionItem({ title, index }: { title: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-brand-600' : 'text-gray-900'}`}>
          {title}
        </span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 flex-shrink-0"
        >
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-gray-600">
              Deliver strategic {title.toLowerCase()} that connects with your constituents, elevates your message, and ensures maximum reach across all vital platforms.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
