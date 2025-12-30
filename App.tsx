import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SeoSchema from './components/SeoSchema';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-marigold selection:text-white">
        <SeoSchema />
        <Navigation />

        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;