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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div id="services" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 brocade-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <h2 className="label-text text-primary">Hamari Sevaein</h2>
          </div>
          <h3 className="section-heading text-royal mb-6">
            Khushiyon ka <span className="text-transparent bg-clip-text bg-gradient-to-r from-rani to-secondary">Karwaan</span>
          </h3>
          <p className="body-large text-neutral-600 mx-auto italic font-serif mt-4 max-w-2xl">
            "Swaad aur Sajawat ka anokha sangam, Gonu Babu Katra se."
          </p>
        </div>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedService(service)}
            >

              {/* Image Section */}
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-5xl opacity-20 font-serif text-white font-bold">0{idx + 1}</span>
                </div>
                <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative">
                <h3 className="subsection-heading text-royal mb-4 group-hover:text-rani transition-colors">
                  {service.title}
                </h3>
                <p className="body-text text-neutral-600 mb-8">
                  {service.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-dashed border-gray-200">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-hibiscus mr-3"></span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <span className="label-text text-primary group-hover:underline">Puri Jaankari Dekhein</span>
                </div>
              </div>

              {/* Bottom rainbow border */}
              <div className="h-2 w-full bg-gradient-to-r from-primary via-rani to-royal"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed View (Sub Page Logic) */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden relative z-10 animate-slide-up shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header Image */}
            <div className="h-48 sm:h-64 relative">
              <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-royal/90 to-transparent"></div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-royal p-2 rounded-full transition-all backdrop-blur-md"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6 sm:left-10 text-white">
                <h2 className="section-heading text-white">{selectedService.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10">
              <div className="prose max-w-none">
                <h3 className="label-text text-secondary mb-2">Varanasi Special</h3>
                <p className="body-large text-neutral-700 italic mb-8 border-l-4 border-primary pl-4">
                  "{selectedService.details.descriptionHindi}"
                </p>

                <div className="bg-ganga/50 rounded-2xl p-6 sm:p-8">
                  <h4 className="subsection-heading text-royal mb-6 flex items-center">
                    {selectedService.id === 'catering' && <Utensils className="mr-3 text-primary" />}
                    {selectedService.id === 'decor' && <Tent className="mr-3 text-primary" />}
                    {selectedService.id === 'planning' && <ClipboardCheck className="mr-3 text-primary" />}
                    {selectedService.details.menuTitle}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {selectedService.details.items.map((item, i) => (
                      <li key={i} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                        <span className="h-6 w-6 rounded-full bg-rani/10 text-rani flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="font-medium text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href="https://wa.me/919839553272"
                    aria-label={`Contact us for ${selectedService.title} via WhatsApp`}
                    className="bg-royal text-white px-8 py-3 rounded-full font-bold shadow-premium hover:shadow-premium-lg hover:bg-velvet transition-all duration-300 flex items-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Contact for {selectedService.title.split('(')[0]}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;