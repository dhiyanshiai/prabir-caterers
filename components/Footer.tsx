import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 border-t-4 border-gold relative overflow-hidden">
        {/* Decorative overlay */}
        <div className="absolute inset-0 pattern-overlay opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-serif font-bold gradient-text-animated mb-2">Prabir Caterer & Tent House</h3>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider block mb-4">(Gonu Babu Katra)</span>
              <p className="text-gray-400 mb-6 max-w-sm italic">
                "Banaras ki Shaan, 1983 se." <br />
                Bringing families together with authentic flavors, royal decor, and the trustworthy smile of Prabir Da.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/prabir.mukherjee.50702769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/prabir.mukherjee.50702769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Visit our Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Location & Sitemap */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Rasta (Location)</h4>

              {/* Google Maps - Prominent */}
              <a
                href="https://maps.app.goo.gl/8hTg7FrBHzEwwtBN6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-white px-4 py-3 rounded-lg transition-all mb-4 w-full justify-center border border-primary/30"
              >
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-semibold">Find Us on Google Maps</span>
              </a>

              {/* Sitemap Links */}
              <ul className="space-y-2 mt-4">
                <li><a href="#home" className="text-gray-400 hover:text-marigold transition-colors hover:translate-x-1 inline-block">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-marigold transition-colors hover:translate-x-1 inline-block">Hamari Kahani (About)</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-marigold transition-colors hover:translate-x-1 inline-block">Sevaein (Services)</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-marigold transition-colors hover:translate-x-1 inline-block">Ashirwad (Reviews)</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Sampark Karein</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-marigold mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">B16/20, Pandey Haweli,<br />Opposite Bangali Tola Inter College,<br />Sonarpura Road, Varanasi, 221001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-marigold mr-2 flex-shrink-0" />
                  <a href="tel:+919839553272" className="text-gray-400 hover:text-accent transition-colors">+91 98395 53272</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-marigold mr-2 flex-shrink-0" />
                  <a href="tel:+918303439353" className="text-gray-400 hover:text-accent transition-colors">+91 83034 39353</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-marigold mr-2 flex-shrink-0" />
                  <a href="mailto:prabirmukherjee181960@gmail.com" className="text-gray-400 hover:text-accent transition-colors break-all">prabirmukherjee181960@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Prabir Caterer & Tent House. All rights reserved.</p>
            <p className="mt-2 text-xs">Designed with ❤️ in Banaras.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-premium hover:shadow-premium-lg hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default Footer;
