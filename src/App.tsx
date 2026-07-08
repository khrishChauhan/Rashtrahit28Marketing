import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/Hero";
import { WhatWeDo } from "./components/layout/WhatWeDo";
import { Services } from "./components/layout/Services";
import { Team } from "./components/layout/Team";
import { TeamPageContent } from "./components/layout/TeamPageContent";
import { ClientAreas } from "./components/layout/ClientAreas";
import { ConnectWithUs } from "./components/layout/ConnectWithUs";
import { TrustAndContact } from "./components/layout/TrustAndContact";
import { AboutIntro } from "./components/layout/AboutIntro";
import { AboutFAQ } from "./components/layout/AboutFAQ";
import { ContactUs } from "./components/layout/ContactUs";
import { ServiceDetail } from "./components/layout/ServiceDetail";
import { Footer } from "./components/layout/Footer";
import { PoliticalCampaignPage } from "./components/layout/PoliticalCampaignPage";
import { PrintMediaPage } from "./components/layout/PrintMediaPage";
import { Button } from "./components/ui/Button";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Services />
      <ConnectWithUs />
      <TeamPageContent />
      <ClientAreas />
      <TrustAndContact />
    </>
  );
}

function AboutPage() {
  return (
    <div className="pt-16 md:pt-24">
      <AboutIntro />
      <AboutFAQ />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-16 md:pt-24">
      <ContactUs />
    </div>
  );
}


function TeamPage() {
  return (
    <div className="pt-16 md:pt-24">
      <TeamPageContent />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="pt-32 pb-32 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-gray-900 mb-6">404</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-md">The page you are looking for does not exist or has been moved.</p>
      <Button variant="primary" onClick={() => window.location.href = '/'}>
        Return Home
      </Button>
    </div>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}


const SEO_CONFIG: Record<string, { title: string, description: string, canonical: string }> = {
  "/": {
    title: "Home | Rashtrahit28Marketing - Digital Marketing Agency",
    description: "Rashtrahit28Marketing is a leading digital marketing and political campaign agency offering SEO, SMM, and web design in India.",
    canonical: "https://rashtrahit28marketing.com/"
  },
  "/about": {
    title: "About Us | Rashtrahit28Marketing",
    description: "Learn about Rashtrahit28Marketing's expertise in digital marketing, web design, and political campaign management.",
    canonical: "https://rashtrahit28marketing.com/about"
  },
  "/contact": {
    title: "Contact Us | Rashtrahit28Marketing",
    description: "Get in touch with Rashtrahit28Marketing for your digital marketing and political campaign needs in India.",
    canonical: "https://rashtrahit28marketing.com/contact"
  },
  "/political": {
    title: "Political Campaign Management | Rashtrahit28Marketing",
    description: "Expert political campaign management services designed to drive voter engagement and election success.",
    canonical: "https://rashtrahit28marketing.com/political"
  },
  "/team": {
    title: "Our Team | Rashtrahit28Marketing",
    description: "Meet the experts behind Rashtrahit28Marketing, dedicated to delivering top-tier digital marketing results.",
    canonical: "https://rashtrahit28marketing.com/team"
  },
  "/services/social-media-management": {
    title: "Social Media Management | Rashtrahit28Marketing",
    description: "Enhance your brand's online presence with our professional social media management and marketing strategies.",
    canonical: "https://rashtrahit28marketing.com/services/social-media-management"
  },
  "/services/search-engine-optimization": {
    title: "SEO Services | Rashtrahit28Marketing",
    description: "Top SEO services in India to help your company achieve increased organic traffic and optimal visibility.",
    canonical: "https://rashtrahit28marketing.com/services/search-engine-optimization"
  },
  "/services/video-editing": {
    title: "Video Editing | Rashtrahit28Marketing",
    description: "Professional video editing services to produce captivating content and increase brand awareness.",
    canonical: "https://rashtrahit28marketing.com/services/video-editing"
  },
  "/services/graphic-designing": {
    title: "Graphic Designing | Rashtrahit28Marketing",
    description: "Creative graphic design and social media post services that attract attention and build a strong brand presence.",
    canonical: "https://rashtrahit28marketing.com/services/graphic-designing"
  },
  "/services/print-media": {
    title: "Print Media Solutions | Rashtrahit28Marketing",
    description: "Premium printing solutions tailored to your business.",
    canonical: "https://rashtrahit28marketing.com/services/print-media"
  },
  "/services/web-designing": {
    title: "Web Designing | Rashtrahit28Marketing",
    description: "High-impact web design services to help brands build a strong, credible, and conversion-focused online presence.",
    canonical: "https://rashtrahit28marketing.com/services/web-designing"
  },
  "default": {
    title: "Rashtrahit28Marketing | Digital Marketing & Political Campaign Agency",
    description: "Rashtrahit28Marketing is a digital marketing and political campaign agency offering social media management, SEO, web design, graphic design, video editing, and campaign strategy.",
    canonical: "https://rashtrahit28marketing.com/"
  }
};

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const seo = SEO_CONFIG[location.pathname] || SEO_CONFIG["default"];
    document.title = seo.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }
    
    let metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute('content', seo.title);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', seo.canonical);
    }
  }, [location.pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} >
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/political" element={<PoliticalCampaignPage />} />
        <Route path="/team" element={<PageWrapper><TeamPage /></PageWrapper>} />
        <Route path="/services/social-media-management" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/search-engine-optimization" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/video-editing" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/graphic-designing" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/web-designing" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/print-media" element={<PageWrapper><PrintMediaPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const isFullscreenPage = 
    location.pathname === '/political' || 
    location.pathname.startsWith('/services/');

  return (
    <div className="min-h-screen bg-bg-base font-sans selection:bg-brand-500 selection:text-white">
      <ScrollToTop />
      <SEOUpdater />
      {!isFullscreenPage && <Header />}
      <main>
        <AnimatedRoutes />
      </main>
      {!isFullscreenPage && <Footer />}
      {!isFullscreenPage && <WhatsAppButton />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

