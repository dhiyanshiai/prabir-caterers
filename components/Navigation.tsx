import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Router hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Handle hash navigation - works across pages
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Already on homepage, just scroll
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate('/' + hash);
    }

    // Close mobile menu if open
    setIsOpen(false);
  };

  // Add background blur effect on scroll + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (currentScrollY / windowHeight) * 100;
      setScrollProgress(scrollPercent);

      // Hide/show navigation on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = ['home', 'services', 'about', 'reviews'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Catering & Decor', href: '#services', id: 'services' },
    { name: 'Hamari Kahani', href: '#about', id: 'about' },
    { name: 'Ashirwad', href: '#reviews', id: 'reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-4 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-marigold py-2'
        : 'bg-transparent border-transparent py-4'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <span className={`font-serif text-2xl md:text-3xl font-extrabold tracking-tight transition-colors ${scrolled ? 'text-hibiscus' : 'text-white text-shadow'}`}>
                Prabir Caterer & Tent House
              </span>
              <div className="flex items-center">
                <span className={`text-xs md:text-sm font-bold tracking-widest uppercase ${scrolled ? 'text-gray-800' : 'text-gold text-shadow'}`}>
                  (Gonu Babu Katra)
                </span>
                <span className={`hidden md:inline-block mx-2 w-1 h-1 rounded-full ${scrolled ? 'bg-marigold' : 'bg-white'}`}></span>
                <span className={`hidden md:inline-block text-xs font-bold tracking-widest uppercase ${scrolled ? 'text-marigold' : 'text-gray-200 text-shadow'}`}>
                  Est. 1983
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={`relative px-1 py-2 rounded-md text-[10px] lg:text-xs font-bold transition-colors font-serif group ${scrolled
                  ? 'text-gray-800 hover:text-hibiscus'
                  : 'text-white hover:text-gold text-shadow'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </a>
            ))}

            {/* Full Services Link */}
            <Link
              to="/services-detail"
              className={`relative px-1 py-2 rounded-md text-[10px] lg:text-xs font-bold transition-colors font-serif group ${scrolled
                ? 'text-gray-800 hover:text-hibiscus'
                : 'text-white hover:text-gold text-shadow'
                }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${location.pathname === '/services-detail' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
            </Link>

            {/* Build Your Plate Link */}
            <Link
              to="/services-detail#pricing"
              className={`relative px-1 py-2 rounded-md text-[10px] lg:text-xs font-bold transition-colors font-serif group whitespace-nowrap ${scrolled
                ? 'text-gray-800 hover:text-hibiscus'
                : 'text-white hover:text-gold text-shadow'
                }`}
            >
              Build Plate
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
            </Link>

            {/* Our Story Link */}
            <Link
              to="/our-story"
              className={`relative px-1 py-2 rounded-md text-[10px] lg:text-xs font-bold transition-colors font-serif group whitespace-nowrap ${scrolled
                ? 'text-gray-800 hover:text-hibiscus'
                : 'text-white hover:text-gold text-shadow'
                }`}
            >
              Story
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${location.pathname === '/our-story' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
            </Link>

            {/* Blog Link */}
            <Link
              to="/blog"
              className={`relative px-1 py-2 rounded-md text-[10px] lg:text-xs font-bold transition-colors font-serif group ${scrolled
                ? 'text-gray-800 hover:text-hibiscus'
                : 'text-white hover:text-gold text-shadow'
                }`}
            >
              Blog
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${location.pathname.startsWith('/blog') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
            </Link>

            <a
              href="https://wa.me/919839553272"
              className="bg-gradient-to-r from-hibiscus to-rani text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-full flex items-center space-x-1 hover:from-velvet hover:to-purple-700 transition-all shadow-lg transform hover:scale-105 border-2 border-white/20 text-[10px] lg:text-xs whitespace-nowrap"
            >
              <Phone size={12} className="lg:w-[14px] lg:h-[14px]" />
              <span className="font-bold">Book</span>
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${scrolled ? 'text-hibiscus' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-gray-800 hover:text-hibiscus block px-3 py-3 rounded-md text-lg font-medium border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/services-detail"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-hibiscus block px-3 py-3 rounded-md text-lg font-medium border-b border-gray-50"
            >
              Full Services
            </Link>
            <Link
              to="/services-detail#pricing"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-hibiscus block px-3 py-3 rounded-md text-lg font-medium border-b border-gray-50"
            >
              Build Your Plate
            </Link>
            <Link
              to="/our-story"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-hibiscus block px-3 py-3 rounded-md text-lg font-medium border-b border-gray-50"
            >
              Our Story
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-hibiscus block px-3 py-3 rounded-md text-lg font-medium border-b border-gray-50"
            >
              Blog
            </Link>
            <a
              href="https://wa.me/919839553272"
              className="bg-hibiscus text-white px-3 py-3 rounded-md flex items-center justify-center space-x-2 mt-4 w-full font-bold"
            >
              <Phone size={18} />
              <span>Call Prabir Da</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;