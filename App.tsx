import React, { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import ExitIntentPopup from './components/ExitIntentPopup';
import { Plan } from './types';
import { initPixel } from './utils/analytics';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isBrazilian, setIsBrazilian] = useState(false);
  const [discountActive, setDiscountActive] = useState(false);

  useEffect(() => {
    // Initialize Pixel on Mount
    initPixel();
  }, []);

  const handleOpenCheckout = (plan: Plan, isBr: boolean) => {
    setSelectedPlan(plan);
    setIsBrazilian(isBr);
    setIsModalOpen(true);
  };

  const handleAcceptDiscount = () => {
    setDiscountActive(true);
    // Scroll to pricing if not already there
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white antialiased">
      <CustomCursor />
      <Hero />
      <Philosophy />
      <SocialProof />
      <Pricing 
        onSelectPlan={handleOpenCheckout} 
        hasDiscount={discountActive}
      />
      <HowItWorks />
      <About />
      <FAQ />
      <Footer />

      <CheckoutModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
        isBrazilian={isBrazilian}
        hasDiscount={discountActive}
      />

      <ExitIntentPopup onAccept={handleAcceptDiscount} />
    </main>
  );
}

export default App;