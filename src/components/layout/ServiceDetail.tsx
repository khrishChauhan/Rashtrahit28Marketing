import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Calendar, Hash, FileText, Globe, Wrench, Search,
  Video, Film, Play, MonitorPlay,
  BookOpen, Share2, PenTool, Briefcase, StickyNote, CreditCard,
  Layout, Smartphone, Image as ImageIcon, MousePointer2,
  Star, Megaphone, Users, Target, Activity, User
} from 'lucide-react';

const SERVICES_DATA: Record<string, any> = {
  "/services/social-media-management": {
    title: "BEST SOCIAL MEDIA MARKETING AGENCY IN INDIA",
    intro: "Boost your online presence with our social media marketing agency in India.\n\nWe focus on delivering real growth by building genuine connections with your audience and crafting unique strategies tailored to your business needs.\n\nAt Rashtrahit28Marketing, we offer top quality social media management designed to strengthen your online identity.\n\nAs a leading agency in the region, we use our expertise in content creation, strategic planning, and delivering outstanding results to help you succeed.",
    image: "/images/services/social-media.png",
    features: [
      {
        title: "Profile Setup & Strategic Optimization",
        description: "We create and refine professional profiles from the start, ensuring your brand is presented through engaging bios, high-resolution images, and smooth links to your business information.",
        icon: <User className="h-6 w-6" />
      },
      {
        title: "Content Management & Scheduling",
        description: "We provide consistently engaging content with a curated calendar of high-quality posts, reels, and stories, keeping your brand at the forefront of your audience's mind.",
        icon: <Calendar className="h-6 w-6" />
      },
      {
        title: "Targeted Hashtag & Reach Strategy",
        description: "We use data and current trends to optimize your hashtag usage, increasing your visibility and helping you grow your follower base.",
        icon: <Hash className="h-6 w-6" />
      },
      {
        title: "Audience Engagement & Performance Tracking",
        description: "Our teams stay actively engaged with your community, responding to feedback in real-time while also analyzing data to continuously improve your strategy.",
        icon: <Users className="h-6 w-6" />
      }
    ]
  },
  "/services/search-engine-optimization": {
    title: "BEST SEO SERVICES IN INDIA",
    intro: "Boost your online growth with Rashtrahit28Marketing, offering professional SEO services in India designed to improve your search engine rankings and increase organic traffic. Our expert team creates customized SEO strategies that strengthen your online presence, attract potential customers, and help your business stand out in the competitive digital market. From keyword optimization to website performance and digital visibility, we focus on delivering result-driven SEO solutions that support long-term business growth. Build a stronger brand identity in India with smart, effective, and trusted SEO services.",
    image: "/images/services/seo.png",
    features: [
      {
        title: "On-page SEO",
        description: "On page SEO which is the practice of optimizing web content, structure and keywords to improve search engine rankings, user experience and organic traffic.",
        icon: <FileText className="h-6 w-6" />
      },
      {
        title: "Off-page SEO",
        description: "Off page SEO which includes building up a site's authority via backlinks, social signals, and online promotion in order to better its rankings and credibility.",
        icon: <Globe className="h-6 w-6" />
      },
      {
        title: "Technical SEO",
        description: "Technical SEO which includes improving website speed, mobile-friendness, indexing and site structure for better search engine performance.",
        icon: <Wrench className="h-6 w-6" />
      },
      {
        title: "Keyword research planning",
        description: "Keyword analysis for success Keyword research planning which is to identify high value search terms to target the right audience, improve rankings and drive qualified traffic.",
        icon: <Search className="h-6 w-6" />
      }
    ]
  },
  "/services/video-editing": {
    title: "BEST VIDEO EDITING AGENCY IN INDIA",
    intro: "Elevate your brand with Rashtrahit28Marketing, offering premium Video marketing and Editing services in India. We create eye catching reels, promotional videos, and digital content that boost engagement and strengthen your online presence. With creative storytelling and professional editing, every video is designed to leave a lasting impact. In today's digital world, powerful video content is the key to attracting customers and building strong brand value. Stand out in India's competitive market with content that truly connects and performs.",
    image: "/images/services/video-editing.png",
    features: [
      {
        title: "Video cutting, trimming & transitions",
        description: "Wrestling with the rough edges, putting clips together seamlessly and including smooth transitions for that professional and engaging video feel.",
        icon: <Video className="h-6 w-6" />
      },
      {
        title: "Color correction & visual enhancement",
        description: "Enhancing brightness, contrast, colors, which in turn improves the overall visual quality to give your videos that professional look.",
        icon: <Film className="h-6 w-6" />
      },
      {
        title: "Text, subtitles & motion graphics",
        description: "Adding of titles, captions, subtitles, and animated graphics to improve message clarity, engagement and viewer understanding.",
        icon: <Play className="h-6 w-6" />
      },
      {
        title: "Background audio, sound effects & branding",
        description: "Adding appropriate music, sound effects, logos and brand elements which in turn improves video impact and brand identity.",
        icon: <MonitorPlay className="h-6 w-6" />
      }
    ]
  },
  "/services/graphic-designing": {
    title: "BEST GRAPHIC DESIGNING AGENCY IN INDIA",
    intro: "Enhance your brand identity with Rashtrahit28Marketing, providing professional Graphic Designing Services in India. We create eye catching banners, brochures, business cards, packaging, and promotional materials with modern and creative designs. Our high quality print and branding solutions help businesses build strong visibility and customer trust. Stand out in India's competitive market with impactful and professionally crafted designs.",
    image: "/images/services/graphic-design.jpg",
    features: [
      {
        title: "Brochure Design",
        description: "Custom designed brochures which put your products at the fore and create a professional memorable brand experience.",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        title: "Social Media Posts",
        description: "Creative social media campaigns that get noticed, engage audiences, and create a strong brand presence daily.",
        icon: <Share2 className="h-6 w-6" />
      },
      {
        title: "Logo Design",
        description: "Make your brand stand out with our custom logo design services which we tailor to your vision and business goals.",
        icon: <PenTool className="h-6 w-6" />
      },
      {
        title: "Business Card",
        description: "Present every introduction with a modern and creative business card design for your growing business.",
        icon: <Briefcase className="h-6 w-6" />
      },
      {
        title: "Flyer Design",
        description: "Present your promotions in a way that is unique and very visual, we do flyers for maximum impact.",
        icon: <StickyNote className="h-6 w-6" />
      },
      {
        title: "Card Design",
        description: "Unique design of cards which we have put together to present style, function and brand identity in a very personal way.",
        icon: <CreditCard className="h-6 w-6" />
      }
    ]
  },
  "/services/web-designing": {
    title: "BEST WEB DESIGNING AGENCY IN INDIA",
    intro: "Build a powerful online presence with Rashtrahit28Marketing, offering professional web design services in India. We create modern, responsive, and SEO friendly websites that deliver a smooth user experience across all devices. Our expert team focuses on creative designs, fast loading pages, smart layouts, and brand-focused visuals to improve engagement and performance. From corporate websites to landing pages and custom business portals, we develop websites that support digital marketing and generate quality leads. Grow your business with a professional website designed for performance, visibility, and long-term success.",
    image: "/images/services/web-design.png",
    features: [
      {
        title: "Web design and interface design",
        description: "Designing clean and attractive page layouts, color schemes, fonts and buttons for a professional and user friendly interface.",
        icon: <Layout className="h-6 w-6" />
      },
      {
        title: "Mobile responsive design",
        description: "Making sure the site runs smoothly on mobiles, tablets, and desktops with no layout or performance issues.",
        icon: <Smartphone className="h-6 w-6" />
      },
      {
        title: "Banner graphics and visuals",
        description: "Designing banners, creating sliders, producing icons and developing graphics to enhance visual appeal and brand consistency.",
        icon: <ImageIcon className="h-6 w-6" />
      },
      {
        title: "User experience (UX) improvement",
        description: "Improving the navigation, page flow and usability for easy information retrieval and action.",
        icon: <MousePointer2 className="h-6 w-6" />
      }
    ]
  },
};

const DEFAULT_DATA = {
  title: "SERVICE DETAILS",
  intro: "Explore our comprehensive service offerings tailored to your business needs.",
  features: [
    {
      title: "Quality Service",
      description: "Delivering top-tier results.",
      icon: <Star className="h-6 w-6" />
    }
  ]
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

export function ServiceDetail() {
  const location = useLocation();
  const data = SERVICES_DATA[location.pathname] || DEFAULT_DATA;
  const TOTAL_SECTIONS = 2;

  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveSection(0);
  }, [location.pathname]);

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
      if (next >= TOTAL_SECTIONS) next = 0;
      if (next < 0) next = TOTAL_SECTIONS - 1;
      return next;
    });
    setTimeout(() => {
      isAnimating.current = false;
    }, 1000);
  }, [TOTAL_SECTIONS]);

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

  const isDarkBg = activeSection === 1;
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
          key={`${location.pathname}-${activeSection}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0 w-full h-full"
        >
          {activeSection === 0 && <HeroSection data={data} />}
          {activeSection === 1 && <FeaturesSection data={data} />}
        </motion.div>
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

function HeroSection({ data }: { data: any }) {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-4 sm:px-8 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-4 lg:pb-[60px] overflow-y-auto hide-scrollbar">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 py-4">
        {/* Left: Text */}
        <div className={`w-full flex flex-col justify-center ${data.image ? 'lg:w-1/2' : 'lg:w-full max-w-4xl mx-auto text-center'}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[3rem] font-bold tracking-tight text-gray-900 leading-[1.15] font-heading uppercase mb-4"
          >
            {data.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.4 }}
            className={`h-1 w-16 sm:w-20 bg-brand-500 rounded-full mb-4 sm:mb-6 ${!data.image ? 'mx-auto' : ''}`}
            style={{ transformOrigin: 'left' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed whitespace-pre-line overflow-y-auto hide-scrollbar max-h-[30vh] sm:max-h-[35vh] lg:max-h-none"
          >
            {data.intro}
          </motion.p>
        </div>

        {/* Right: Image */}
        {data.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="w-full lg:w-1/2 flex items-center justify-center shrink-0"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[520px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FeaturesSection({ data }: { data: any }) {
  const cols = data.features.length <= 4 ? 'lg:grid-cols-4' : data.features.length === 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';
  return (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center px-4 sm:px-8 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-4 lg:pb-[60px] overflow-y-auto hide-scrollbar">
      <div className="w-full max-w-7xl flex flex-col justify-center gap-5 lg:gap-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-2 sm:mb-3">Our Services</h2>
          <div className="mx-auto h-1 w-12 sm:w-16 bg-brand-500 rounded-full" />
        </motion.div>

        <div className={`grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 ${cols}`}>
          {data.features.map((feature: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + Math.min(idx * 0.07, 0.35) }}
              className="group flex flex-col rounded-[16px] sm:rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-[4px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="mb-2 sm:mb-3 inline-flex h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-[12px] bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white group-hover:rotate-3">
                {feature.icon}
              </div>
              <h3 className="mt-0 mb-1.5 text-sm sm:text-base md:text-[17px] font-bold text-gray-900 font-heading transition-colors duration-300">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="m-0 text-gray-600 leading-relaxed text-xs sm:text-xs md:text-sm">
                  {feature.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

