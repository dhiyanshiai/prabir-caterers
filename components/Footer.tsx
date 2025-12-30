import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-marigold mb-2">Prabir Caterer & Tent House</h3>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider block mb-4">(Gonu Babu Katra)</span>
            <p className="text-gray-400 mb-6 max-w-sm italic">
              "Banaras ki Shaan, 1983 se." <br />
              Bringing families together with authentic flavors, royal decor, and the trustworthy smile of Prabir Da.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/prabir.mukherjee.50702769" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/prabir.mukherjee.50702769" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Rasta (Sitemap)</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-marigold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-marigold transition-colors">Hamari Kahani (About)</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-marigold transition-colors">Sevaein (Services)</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-marigold transition-colors">Ashirwad (Reviews)</a></li>
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
                <span className="text-gray-400">+91 9839553272</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-marigold mr-2 flex-shrink-0" />
                <span className="text-gray-400 break-all">prabir1983.mukherjee@gmail.com</span>
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
  );
};

export default Footer;