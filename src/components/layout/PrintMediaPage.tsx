import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Printer, FileText, Image as ImageIcon, Map, BookOpen, Gift, Copy } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const PRINT_SERVICES = [
  {
    title: "Visiting Cards",
    description: "Premium custom-designed visiting cards with high-quality printing, elegant finishes, and professional layouts that leave a memorable first impression.",
    icon: <Copy className="h-6 w-6" />
  },
  {
    title: "Brochures",
    description: "Creative brochures designed to showcase your products and services with attractive layouts, premium paper quality, and impactful branding.",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "Banners & Billboards",
    description: "Large-format advertising solutions including promotional banners, hoardings, billboards, and event branding with vibrant, durable printing.",
    icon: <Map className="h-6 w-6" />
  },
  {
    title: "Vinyl & One-Way Vision Printing",
    description: "High-quality vinyl graphics and one-way vision prints for offices, shops, vehicles, and commercial branding that maximize visibility.",
    icon: <ImageIcon className="h-6 w-6" />
  },
  {
    title: "Challan Books & Bill Books",
    description: "Professionally printed challan books, invoice books, bill books, receipt books, and office stationery customized for business operations.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "T-Shirts & Gift Item Printing",
    description: "Custom branding on T-shirts, mugs, trophies, pens, corporate gifts, promotional merchandise, and event giveaways using premium printing techniques.",
    icon: <Gift className="h-6 w-6" />
  },
  {
    title: "Flyers & Promotional Material",
    description: "Professionally designed flyers, pamphlets, leaflets, handouts, and promotional print materials that effectively communicate your marketing campaigns.",
    icon: <Printer className="h-6 w-6" />
  }
];

const FEATURES = [
  "Premium print quality",
  "Fast turnaround time",
  "Creative design support",
  "Bulk printing solutions",
  "Affordable pricing",
  "High-quality finishing",
  "Customized branding"
];

const TOTAL_SECTIONS = 4;

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '20%' : '-20%',
    opacity: 0,
    scale: 0.95,
    zIndex: 0
  }),
  center: { y: 0, opacity: 1, scale: 1, zIndex: 1 },
  exit: (direction: number) => ({
    y: direction < 0 ? '20%' : '-20%',
    opacity: 0,
    scale: 1.05,
    zIndex: 0
  })
};

const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export function PrintMediaPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const changeSection = useCallback((dir: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection(dir);
    setActiveSection((prev) => {
      let next = prev + dir;
      if (next >= TOTAL_SECTIONS) next = 0;
      if (next < 0) next = TOTAL_SECTIONS - 1;
      return next;
    });
    setTimeout(() => { isAnimating.current = false; }, 1000);
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    const target = e.target as HTMLElement;
    const isScrollable = target.closest('.overflow-y-auto');
    if (isScrollable) {
      const el = isScrollable as HTMLElement;
      const atTop = el.scrollTop === 0 && e.deltaY < 0;
      const atBottom = Math.ceil(el.scrollHeight - el.scrollTop) <= el.clientHeight && e.deltaY > 0;
      if (!atTop && !atBottom) return;
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
      if (!atTop && !atBottom) return;
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

  const isDarkBg = activeSection === 2 || activeSection === 3;
  const buttonClasses = isDarkBg
    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
    : "bg-gray-900/5 border-gray-900/10 text-gray-900 hover:bg-gray-900/10";
  const buttonIconClasses = isDarkBg ? "bg-white/20" : "bg-gray-900/10";
  const dotActive = isDarkBg ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "bg-brand-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]";
  const dotInactive = isDarkBg ? "bg-white/30 group-hover:bg-white/70" : "bg-brand-900/20 group-hover:bg-brand-900/40";

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
    setTimeout(() => { isAnimating.current = false; }, 1200);
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden select-none font-sans">

      {/* Back Button */}
      <button
        onClick={handleBack}
        className={`absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 z-[100] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-full backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-105 min-h-[40px] sm:min-h-[44px] ${buttonClasses}`}
        aria-label="Go Back"
      >
        <div className={`flex items-center justify-center rounded-full h-6 w-6 sm:h-8 sm:w-8 ${buttonIconClasses}`}>
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
        <span className="font-semibold text-xs sm:text-sm tracking-wide">Back</span>
      </button>

      {/* Contact Button */}
      <Link
        to="/contact"
        className={`absolute top-4 right-12 sm:top-6 sm:right-16 md:top-10 md:right-20 z-[100] flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-105 min-h-[40px] sm:min-h-[44px] ${buttonClasses}`}
        aria-label="Contact Us"
      >
        <span className="font-semibold text-xs sm:text-sm tracking-wide">Contact</span>
      </Link>

      {/* Logo */}
      <Link to="/" className="absolute top-4 left-1/2 -translate-x-1/2 z-[100]">
        <img
          src="/images/logo/rlogo.png"
          alt="Rashtrahit28Marketing"
          className="h-8 sm:h-10 md:h-12 w-auto object-contain max-w-[140px] sm:max-w-[180px]"
        />
      </Link>

      {/* Right Progress Indicators */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSection(idx)}
            className="group relative flex items-center justify-center h-6 w-6"
            aria-label={`Go to section ${idx + 1}`}
          >
            <span
              className={`absolute h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeSection === idx ? `${dotActive} scale-150` : `${dotInactive} group-hover:scale-125`}`}
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
          {activeSection === 0 && <PrintHeroSection />}
          {activeSection === 1 && <PrintServicesSection />}
          {activeSection === 2 && <PrintWhyUsSection />}
          {activeSection === 3 && <PrintCTASection />}
        </motion.div>
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

function PrintHeroSection() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-4 sm:px-8 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-4 lg:pb-[60px] overflow-y-auto hide-scrollbar">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 py-4">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[3.2rem] font-bold tracking-tight text-gray-900 leading-[1.15] font-heading uppercase mb-4"
          >
            Print Media Solutions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.4 }}
            className="h-1 w-16 sm:w-20 bg-brand-500 rounded-full mb-4 sm:mb-6"
            style={{ transformOrigin: 'left' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
          >
            At Rashtrahit28Marketing, we provide high-quality print media solutions that help businesses strengthen their offline presence. From business essentials to large-format advertising, our print services are designed with premium quality, creative layouts, and professional finishing to leave a lasting impression.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}
          className="w-full lg:w-1/2 flex items-center justify-center shrink-0"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[520px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
          >
            <img
              src="/images/services/print-media.png"
              alt="Premium Printing Solutions"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function PrintServicesSection() {
  return (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center px-4 sm:px-8 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-4 lg:pb-[60px] overflow-y-auto hide-scrollbar">
      <div className="w-full max-w-7xl flex flex-col justify-center gap-5 lg:gap-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-2 sm:mb-3">Our Print Services</h2>
          <div className="mx-auto h-1 w-12 sm:w-16 bg-brand-500 rounded-full" />
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRINT_SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + Math.min(idx * 0.06, 0.36) }}
              className="group relative rounded-xl sm:rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 border border-gray-100"
            >
              <div className="mb-3 inline-flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[12px] bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-sm sm:text-base font-bold text-gray-900 font-heading">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrintWhyUsSection() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-950 to-brand-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[60px] overflow-y-auto hide-scrollbar">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-center gap-8 lg:gap-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-heading mb-4">Why Choose Our Print Media Services</h2>
          <div className="mx-auto h-1 w-20 bg-brand-400 rounded-full" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.08 }}
              className="flex items-center gap-4 rounded-xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
            >
              <CheckCircle2 className="h-6 w-6 text-brand-400 shrink-0" />
              <span className="font-medium tracking-wide text-sm md:text-base">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrintCTASection() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[60px] overflow-y-auto hide-scrollbar">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-64 h-64 md:w-96 md:h-96 bg-orange-500 rounded-full blur-[100px] md:blur-[150px] opacity-40" />
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-64 h-64 md:w-96 md:h-96 bg-brand-500 rounded-full blur-[100px] md:blur-[150px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-6 lg:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
        >
          Need Professional Print Media Solutions?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-base md:text-xl text-brand-100 max-w-[600px] leading-relaxed"
        >
          Whether you need business cards, brochures, banners, promotional products, or complete branding materials, Rashtrahit28Marketing delivers premium printing solutions tailored to your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-500 text-white font-bold text-lg hover:bg-brand-600 transition-colors shadow-xl"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
