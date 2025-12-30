import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Catering & Decor', href: '#services' },
    { name: 'Hamari Kahani', href: '#about' },
    { name: 'Ashirwad', href: '#reviews' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-4 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-marigold py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
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
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-base font-bold transition-colors font-serif tracking-wide ${
                    scrolled 
                    ? 'text-gray-800 hover:text-hibiscus' 
                    : 'text-white hover:text-gold text-shadow'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919839553272"
              className="bg-gradient-to-r from-hibiscus to-rani text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:from-velvet hover:to-purple-700 transition-all shadow-lg transform hover:scale-105 border-2 border-white/20"
            >
              <Phone size={18} />
              <span className="font-bold">Book a Plate</span>
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
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-hibiscus block px-3 py-3 rounded-md text-lg font-medium border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
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