import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/Hero";
import { WhatWeDo } from "./components/layout/WhatWeDo";
import { Services } from "./components/layout/Services";
import { Team } from "./components/layout/Team";
import { ConnectWithUs } from "./components/layout/ConnectWithUs";
import { TrustAndContact } from "./components/layout/TrustAndContact";

import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <Team />
        <ConnectWithUs />
        <TrustAndContact />
      </main>
      <Footer />
    </div>
  );
}

