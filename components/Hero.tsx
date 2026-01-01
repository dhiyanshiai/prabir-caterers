import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Lazy load video after initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 500); // 500ms delay to let page load first
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to services section
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-velvet">

      {/* Self-Hosted Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {shouldLoadVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              pointerEvents: 'none'
            }}
          >
            <source src="/video/Prabir Caterer and Tent House - Wedding Celebrations in Varanasi.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=2500&auto=format&fit=crop"
              alt="Authentic Banarasi wedding cuisine"
            />
          </video>
        )}

        {/* Fallback image while video loads */}
        {!videoLoaded && (
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=2500&auto=format&fit=crop"
            alt="Authentic Banarasi wedding cuisine"
            loading="eager"
          />
        )}
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/70 via-royal/50 to-velvet/90"></div>

      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-20"></div>

      <div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="animate-slide-up">
          <span className="inline-block py-2 px-6 rounded-full glass-dark text-accent font-bold label-text mb-6 border border-accent/50 shadow-glow shimmer">
            EST. 1983 • VARANASI
          </span>

          {/* Enhanced Typography with Gradient Animation */}
          <h1 className="display-heading text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] mb-6">
            <span className="block gradient-text-animated animate-slide-up stagger-1">Rishton ki</span>
            <span className="block text-white animate-slide-up stagger-2">Parampara</span>
          </h1>

          <p className="body-large text-gray-100 max-w-3xl mx-auto drop-shadow-md italic font-serif mt-8 animate-slide-up stagger-3">
            "Ghat ki hawa, Shehnai ki goonj, <br className="hidden sm:block" />aur <span className="text-accent font-bold">Prabir Da (Nanu Da)</span> ka bharosa."
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-slide-up stagger-4">
            <a
              href="#services"
              aria-label="Explore our catering services and traditional Banarasi menu"
              className="magnetic-button px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full text-lg shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center justify-center border-2 border-transparent hover:border-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 glow-on-hover"
            >
              Chakh lijiye Swad
            </a>
            <a
              href="#contact"
              aria-label="Contact us for mandap decoration and event planning"
              className="magnetic-button px-10 py-4 glass border-2 border-white/80 text-white font-bold rounded-full text-lg hover:bg-white hover:text-velvet transition-all duration-300 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Sajaaiye Mandap <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToServices}>
        <div className="flex flex-col items-center text-white/80 hover:text-accent transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2 font-bold">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

      {/* Ornate Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg className="fill-white w-full h-12 sm:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;