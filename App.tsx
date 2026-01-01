import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ServicesDetail from './pages/ServicesDetail';
import OurStory from './pages/OurStory';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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

// Homepage component with hash navigation support
const HomePage: React.FC = () => {
  const location = useLocation();

  // Handle hash navigation on mount and when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <TrustBadges />
      <Testimonials />
      <FAQ />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-marigold selection:text-white">
        <SeoSchema />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services-detail" element={<ServicesDetail />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
};

export default App;