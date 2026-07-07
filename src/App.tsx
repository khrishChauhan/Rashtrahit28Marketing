import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from "./components/layout/Header";
import { WhatWeDo } from "./components/layout/WhatWeDo";
import { Services } from "./components/layout/Services";
import { Team } from "./components/layout/Team";
import { ConnectWithUs } from "./components/layout/ConnectWithUs";
import { TrustAndContact } from "./components/layout/TrustAndContact";
import { AboutIntro } from "./components/layout/AboutIntro";
import { AboutFAQ } from "./components/layout/AboutFAQ";
import { ContactUs } from "./components/layout/ContactUs";
import { ServiceDetail } from "./components/layout/ServiceDetail";
import { Footer } from "./components/layout/Footer";
import { Button } from "./components/ui/Button";

function HomePage() {
  return (
    <>
      <WhatWeDo />
      <Services />
      <Team />
      <ConnectWithUs />
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
      <Team />
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
      {/* @ts-expect-error - React key on Routes for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/political" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><TeamPage /></PageWrapper>} />
        <Route path="/services/social-media-management" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/search-engine-optimization" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/video-editing" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/graphic-designing" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/services/web-designing" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-base font-sans selection:bg-brand-500 selection:text-white">
        <ScrollToTop />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

