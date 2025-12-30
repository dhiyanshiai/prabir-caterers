import React, { useState } from 'react';
import { X, Utensils, Tent, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface DetailedServiceContent {
  menuTitle: string;
  items: string[];
  descriptionHindi: string;
}

const services: (Service & { details: DetailedServiceContent })[] = [
  {
    id: 'catering',
    title: 'Zayka-e-Banaras (Catering)',
    description: "Ghat-ghat ka swad, ek hi thaali mein. Hum khana nahi, 'Bhog' banate hain.",
    iconName: 'utensils',
    highlights: ['Banarasi Kachori-Jalebi', 'Shahi Paneer & Dal Makhani', 'Desi Ghee Sweets'],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop',
    details: {
      menuTitle: "Khaane ka Menu",
      descriptionHindi: "Subah ke nashte se lekar raat ki dawat tak, har nivala Banaras ki yaad dilayega. Shuddh Desi Ghee aur ghar ke masalon ka upyog.",
      items: [
        "Subah: Kachori, Sabzi, Jalebi (Garam)",
        "Swagat: Thandai, Lassi, Coffee",
        "Main Course: Banarasi Dum Aloo, Dal Makhani, Paneer Lababdar",
        "Meetha: Laung Lata, Malaiyyo (Seasonal), Gulab Jamun"
      ]
    }
  },
  {
    id: 'decor',
    title: 'Sajawat & Jhilmil (Decor)',
    description: "Rangoli se Mandap tak. Aapka Venue ab Rajwada lagega.",
    iconName: 'tent',
    highlights: ['Phoolon ki Holli Theme', 'Royal Rajwada Setups', 'Ganga Aarti Theme'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop',
    details: {
      menuTitle: "Sajawat ke Themes",
      descriptionHindi: "Pandey Haweli ki shaan ho ya modern banquet, hum har jagah ko 'Swarg' bana dete hain. Genda phool aur lights ka adbhut sangam.",
      items: [
        "Entrance: Shahi Darwaza with Shehnai players",
        "Vedi: Traditional Marigold (Genda) mandap",
        "Lighting: Fairy lights canopy, Jhoomar",
        "Special: Selfie Points & Photo Booths"
      ]
    }
  },
  {
    id: 'planning',
    title: 'Befikar Jashn (Planning)',
    description: "Chacha-Mama ki tension humari. Aap bas mehmaan nawazi karein.",
    iconName: 'clipboard',
    highlights: ['Atithi Devo Bhava', 'Vendor Coordination', 'Time-to-Time Management'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop',
    details: {
      menuTitle: "Vyavastha & Suvidha",
      descriptionHindi: "Shaadi ka ghar hai, shor toh hoga hi! Par tension nahi. Guests ke aane se lekar vidaai tak, Prabir Da ki team sab sambhaal legi.",
      items: [
        "Guest Management & Stay",
        "Logistics & Transport",
        "Pandit Ji & Ritual Samagri",
        "Music & Entertainment (Live Shehnai)"
      ]
    }
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service & { details: DetailedServiceContent } | null>(null);

  // Scroll reveal effect
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-white via-ganga/20 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #b8860b 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal opacity-0">
          <h2 className="text-5xl md:text-6xl font-bold text-royal mb-4">
            Hamari Sevaein
          </h2>
          <p className="text-xl text-primary font-handwriting italic">
            Khushiyon ka Karwaan
          </p>
          <div className="mt-4 text-gray-600 max-w-2xl mx-auto">
            "Swaad aur Sajawat ka anokha sangam, Gonu Babu Katra se."
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 bg-white scroll-reveal-scale opacity-0"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 text-white text-6xl font-bold opacity-20">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Section - Now properly below image with white background */}
              <div className="relative p-6 bg-white z-10">
                <h3 className="text-2xl font-bold text-royal mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.highlights.map((item, highlightIdx) => (
                    <div key={highlightIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-accent text-lg">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group-hover:text-accent">
                  Puri Jaankari Dekhein
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom rainbow border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-royal" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed View (Sub Page Logic) */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image - Smaller */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-royal p-2 rounded-full transition-all backdrop-blur-md z-10"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            {/* Modal Content - Original text sizes restored */}
            <div className="p-8">
              <div className="mb-8">
                <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Varanasi Special
                </span>
                <p className="text-lg text-gray-700 italic leading-relaxed border-l-4 border-primary pl-4">
                  "{selectedService.details.descriptionHindi}"
                </p>
              </div>

              <div className="mb-6 flex justify-center">
                {selectedService.id === 'catering' && <Utensils className="text-primary" size={48} />}
                {selectedService.id === 'decor' && <Tent className="text-primary" size={48} />}
                {selectedService.id === 'planning' && <ClipboardCheck className="text-primary" size={48} />}
              </div>

              <h3 className="text-2xl font-bold text-royal mb-6 text-center">
                {selectedService.details.menuTitle}
              </h3>

              <div className="space-y-4 mb-8">
                {selectedService.details.items.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-ganga/20 to-transparent hover:from-ganga/30 transition-all"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <p className="text-gray-800 pt-1 flex-1">{item}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300"
                >
                  Contact for {selectedService.title.split('(')[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
