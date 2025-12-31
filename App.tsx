import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SeoSchema from './components/SeoSchema';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-marigold selection:text-white">
        <SeoSchema />
        <Navigation />

        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <TrustBadges />
        <Testimonials />
        <FAQ />
        <Footer />

        <WhatsAppFloat />
      </div>
    </>
  );
};

export default App;