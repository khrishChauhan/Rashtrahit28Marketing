import { useState, useEffect } from 'react';
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

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash === '#about') return <AboutPage />;
    if (currentHash === '#contact') return <ContactPage />;
    if (currentHash === '#service') return <ServiceDetail />;
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-bg-base font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

