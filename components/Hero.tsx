import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Load video quickly - no poster image means we need video ASAP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 500); // 500ms delay for initial page render
    return () => clearTimeout(timer);
  }, []);

  // Force video to play on mobile (aggressive autoplay)
  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const video = videoRef.current;
      let hasPlayed = false;

      // Attempt to play the video
      const playVideo = async () => {
        if (hasPlayed) return; // Don't try if already playing

        try {
          // Set attributes programmatically for better mobile support
          video.muted = true;
          video.playsInline = true;
          video.setAttribute('playsinline', 'true');
          video.setAttribute('webkit-playsinline', 'true');

          await video.play();
          hasPlayed = true;
          console.log('Video autoplay successful');
        } catch (error) {
          console.log('Autoplay failed, will retry on user interaction...', error);
        }
      };

      // Try to play when video can play
      video.addEventListener('canplay', playVideo);

      // Also try immediately if already loaded
      if (video.readyState >= 3) {
        playVideo();
      }

      // CRITICAL: Add user interaction listener for incognito/restrictive browsers
      const handleUserInteraction = () => {
        if (!hasPlayed && video.paused) {
          playVideo();
        }
      };

      // Listen for any user interaction on the page
      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { once: true });
      document.addEventListener('scroll', handleUserInteraction, { once: true });

      return () => {
        video.removeEventListener('canplay', playVideo);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
      };
    }
  }, [shouldLoadVideo]);

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
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              pointerEvents: 'none'
            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              className="w-full h-full object-cover"
              src="/images/Decoration/Decoration_Stage.webp"
              alt="Prabir Caterer wedding stage decoration in Varanasi"
            />
          </video>
        )}

        {/* Priority LCP image - shows immediately for fast LCP */}
        {!videoLoaded && (
          <Image
            src="/images/Decoration/Decoration_Stage.webp"
            alt="Prabir Caterer & Tent House - Best Wedding Caterer in Varanasi"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
            sizes="100vw"
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
          {/* Primary H1 with target keywords for SEO - above the fold */}
          <h1 className="sr-only">Prabir Caterer & Tent House - Best Wedding Caterers in Varanasi</h1>
          <div className="display-heading text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] mb-6" aria-hidden="true">
            <span className="block gradient-text-animated animate-slide-up stagger-1">Rishton ki</span>
            <span className="block text-white animate-slide-up stagger-2">Parampara</span>
          </div>

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
              href="#services"
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