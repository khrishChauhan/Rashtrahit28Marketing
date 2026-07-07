import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '20%' : '-20%',
    opacity: 0,
    scale: 0.95,
    zIndex: 0
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1
  },
  exit: (direction: number) => ({
    y: direction < 0 ? '20%' : '-20%',
    opacity: 0,
    scale: 1.05,
    zIndex: 0
  })
};

const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export function PoliticalCampaignPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const changeSection = useCallback((dir: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection(dir);
    setActiveSection((prev) => {
      let next = prev + dir;
      if (next > 4) next = 0;
      if (next < 0) next = 4;
      return next;
    });
    setTimeout(() => {
      isAnimating.current = false;
    }, 1000); 
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    const target = e.target as HTMLElement;
    const isScrollable = target.closest('.overflow-y-auto');
    if (isScrollable) {
       const el = isScrollable as HTMLElement;
       const atTop = el.scrollTop === 0 && e.deltaY < 0;
       const atBottom = Math.ceil(el.scrollHeight - el.scrollTop) <= el.clientHeight && e.deltaY > 0;
       if (!atTop && !atBottom) {
         return; 
       }
    }

    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    if (Math.abs(e.deltaY) < 20) return;
    
    e.preventDefault();

    if (isAnimating.current) return;
    changeSection(e.deltaY > 0 ? 1 : -1);
  }, [changeSection]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const target = e.target as HTMLElement;
    const isScrollable = target.closest('.overflow-y-auto');
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (isScrollable) {
       const el = isScrollable as HTMLElement;
       const atTop = el.scrollTop === 0 && deltaY < 0;
       const atBottom = Math.ceil(el.scrollHeight - el.scrollTop) <= el.clientHeight && deltaY > 0;
       if (!atTop && !atBottom) {
         return; 
       }
    }

    e.preventDefault(); 
    if (isAnimating.current) return;
    
    if (Math.abs(deltaY) > 40) {
      changeSection(deltaY > 0 ? 1 : -1);
      touchStartY.current = touchEndY;
    }
  }, [changeSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  const navigate = useNavigate();
  const isDarkBackground = activeSection === 0 || activeSection === 3;
  const buttonClasses = isDarkBackground 
    ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
    : "bg-gray-900/5 border-gray-900/10 text-gray-900 hover:bg-gray-900/10";
  const buttonIconClasses = isDarkBackground ? "bg-white/20" : "bg-gray-900/10";
  const dotClasses = isDarkBackground ? "bg-white" : "bg-brand-600";
  const dotInactiveClasses = isDarkBackground ? "bg-white/30 group-hover:bg-white/70" : "bg-brand-900/20 group-hover:bg-brand-900/40";
  const shadowClasses = isDarkBackground ? "shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "shadow-[0_0_10px_rgba(79,70,229,0.4)]";
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const goToSection = (index: number) => {
    if (index === activeSection || isAnimating.current) return;
    const dir = index > activeSection ? 1 : -1;
    isAnimating.current = true;
    setDirection(dir);
    setActiveSection(index);
    setTimeout(() => {
      isAnimating.current = false;
    }, 1200);
  };

  return (
    <div className="relative w-full h-[100dvh] bg-brand-900 overflow-hidden select-none font-sans">
      
      {/* Back Button */}
      <button 
        onClick={handleBack}
        className={`absolute top-6 left-6 md:top-10 md:left-10 z-[100] flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-105 ${buttonClasses}`}
        aria-label="Go Back"
      >
        <div className={`flex items-center justify-center rounded-full h-8 w-8 ${buttonIconClasses}`}>
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span className="font-semibold text-sm tracking-wide">Back</span>
      </button>

      {/* Right Progress Indicator */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {[0, 1, 2, 3, 4].map((idx) => (
          <button
            key={idx}
            onClick={() => goToSection(idx)}
            className="group relative flex items-center justify-center h-6 w-6"
            aria-label={`Go to section ${idx + 1}`}
          >
            <span 
              className={`absolute h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeSection === idx ? `${dotClasses} scale-150 ${shadowClasses}` : `${dotInactiveClasses} group-hover:scale-125`}`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeSection}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0 w-full h-full"
        >
          {activeSection === 0 && <Section1 />}
          {activeSection === 1 && <Section2 />}
          {activeSection === 2 && <Section3 />}
          {activeSection === 3 && <Section4 />}
          {activeSection === 4 && <Section5 />}
        </motion.div>
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

function Section1() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white flex-1 lg:flex-none">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-xs md:text-sm lg:text-base font-semibold mb-3 lg:mb-4 text-brand-200 uppercase tracking-wider"
          >
            {SECTION_1.subheading}
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-[4rem] font-bold font-heading mb-4 lg:mb-6 leading-[1.1]"
          >
            {SECTION_1.heading}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-sm md:text-base lg:text-xl text-brand-100 max-w-[600px] leading-relaxed"
          >
            {SECTION_1.paragraph}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}
          className="w-full lg:w-1/2 flex items-center justify-center h-[35%] md:h-[40%] lg:h-full shrink-0"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full max-h-[300px] lg:max-h-[600px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img src={SECTION_1.image} alt="Political Campaign" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">
      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full lg:w-1/2 flex items-center justify-center h-[30%] lg:h-full order-2 lg:order-1 shrink-0"
        >
          <div className="relative w-full h-full max-h-[250px] lg:max-h-[600px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
            <img src={SECTION_2.image} alt="Campaign Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2 flex-1 min-h-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold font-heading mb-4 lg:mb-8 text-gray-900 leading-tight"
          >
            {SECTION_2.heading}
          </motion.h2>
          <ul className="space-y-2 lg:space-y-4 overflow-y-auto pr-2 hide-scrollbar">
            {SECTION_2.bullets.map((bullet, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + (idx * 0.05) }}
                className="flex items-start gap-3 lg:gap-4"
              >
                <div className="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-[10px] lg:text-sm mt-0.5 lg:mt-1">
                  {idx + 1}
                </div>
                <span className="text-xs md:text-sm lg:text-lg text-gray-700 font-medium leading-snug lg:leading-relaxed">
                  {bullet}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

function Section3() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">
      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full max-h-[60%] lg:max-h-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold font-heading mb-4 lg:mb-8 text-gray-900 shrink-0"
          >
            {SECTION_3.heading}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex-1 min-h-0 bg-gray-50/50 rounded-2xl p-2 lg:p-4 border border-gray-100 overflow-y-auto hide-scrollbar"
          >
            {SECTION_3.services.map((service, idx) => (
              <AccordionItem 
                key={idx} 
                title={service} 
                isOpen={openAccordion === idx} 
                onToggle={() => setOpenAccordion(openAccordion === idx ? -1 : idx)} 
              />
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full lg:w-1/2 flex items-center justify-center h-[35%] lg:h-full shrink-0"
        >
          <div className="relative w-full h-full max-h-[250px] lg:max-h-[600px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
            <img src={SECTION_3.image} alt="Political Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-accent-900/10 mix-blend-multiply" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function AccordionItem({ title, isOpen, onToggle }: { title: string, isOpen: boolean, onToggle: () => void, key?: any }) {
  return (
    <div className="border-b border-gray-200/60 last:border-0 shrink-0">
      <button 
        onClick={onToggle}
        className="w-full py-2 lg:py-3 px-2 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`font-semibold text-[11px] md:text-sm lg:text-base transition-colors ${isOpen ? 'text-brand-600' : 'text-gray-700 group-hover:text-brand-500'}`}>
          {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-gray-400 shrink-0 ml-3">
          {isOpen ? <Minus className="h-3 w-3 lg:h-5 lg:w-5" /> : <Plus className="h-3 w-3 lg:h-5 lg:w-5" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-2 lg:pb-3 text-gray-500 text-[10px] md:text-xs lg:text-sm leading-relaxed max-w-md">
              Deliver strategic solutions for {title.toLowerCase()} that connects with your constituents, elevates your message, and ensures maximum reach.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section4() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-brand-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-64 h-64 md:w-96 md:h-96 bg-orange-500 rounded-full blur-[100px] md:blur-[150px] opacity-40" />
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-64 h-64 md:w-96 md:h-96 bg-brand-500 rounded-full blur-[100px] md:blur-[150px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center flex-1 lg:flex-none">
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl lg:text-4xl font-heading leading-relaxed lg:leading-[1.4] font-light text-brand-50 max-w-[700px]"
          >
            "{SECTION_4.paragraph}"
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }}
          className="w-full lg:w-1/2 flex items-center justify-center h-[40%] lg:h-full shrink-0"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full max-h-[300px] lg:max-h-[600px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/20"
          >
            <img src={SECTION_4.image} alt="Campaign Marketing" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


function Section5() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">
      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col items-center justify-center text-center gap-6 lg:gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-gray-900 max-w-[800px]"
        >
          Ready to Win?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-600 max-w-[600px]"
        >
          Partner with the top campaign marketing agency to build trust, shape perception, and connect with constituents.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
        >
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-600 text-white font-bold text-lg hover:bg-brand-700 transition-colors shadow-xl">
            Start Your Campaign
          </a>
        </motion.div>
      </div>
    </div>
  );
}
