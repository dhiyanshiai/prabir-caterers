import React, { useState } from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lightbox, { GalleryImage } from './Lightbox';

// Gallery images data
const galleryImages: GalleryImage[] = [
    // Decoration Images (16) - Real Event Photos
    { src: '/Images/Decoration/Decoration_Stage.webp', alt: 'Elegant wedding stage decoration by Prabir Caterer Varanasi', category: 'decoration' },
    { src: '/Images/Decoration/Decoration (1)_Mandap.webp', alt: 'Traditional Banarasi mandap decoration with marigold flowers', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.43 PM_Stage.webp', alt: 'Premium wedding stage setup with lighting in Varanasi', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.44 PM (1)_Food Counter.webp', alt: 'Beautiful food counter decoration with elegant setup', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.44 PM (2)_Food Counter.webp', alt: 'Grand food counter with premium decoration', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.44 PM_Food Counter.webp', alt: 'Luxury food counter decoration with golden accents', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.45 PM_Sarv Ved Mandir Inaugration Catering work - PM Modi visit.webp', alt: 'Sarv Ved Mandir Inauguration Catering - PM Modi visit event', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.46 PM_Elite Counter.webp', alt: 'Elite counter decoration with ambient lighting', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.47 PM_Elite Counter.webp', alt: 'Premium elite counter setup for wedding event', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.49 PM_Floral Decoration.webp', alt: 'Floral decoration with fresh flowers and elegant arrangements', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.52 PM_Mehendi Decoration.webp', alt: 'Mehendi ceremony decoration with traditional Indian decor', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.53 PM (1)_Premium Tent Decoration Setup.webp', alt: 'Premium tent decoration setup for wedding venue', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.53 PM (2)_Decoration Setup under Tent.webp', alt: 'Beautiful decoration setup under tent with floral designs', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.54 PM_Grand Stage Setup.webp', alt: 'Grand stage setup with traditional elements', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.55 PM_Stage Setup.webp', alt: 'Premium wedding stage setup with luxury decor', category: 'decoration' },
    { src: '/Images/Decoration/WhatsApp Image 2026-01-01 at 11.02.56 PM_Lawn Decoration.webp', alt: 'Traditional lawn decoration for outdoor wedding events', category: 'decoration' },

    // Food Images (12) - AI-Generated for Illustration
    { src: '/Images/Food/Gemini_Generated_Cholar Dal, Puri, Paneer, Naan.webp', alt: 'Cholar Dal with Puri, Paneer and Naan - Bengali feast', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Assorted Bengali Sweets.webp', alt: 'Assorted Bengali Sweets - Traditional mishti platter', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Fish_Prawn, Chat, Puchka.webp', alt: 'Fish, Prawn, Chaat and Puchka - Bengali street food delights', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Image_Paneer Butter Masala.webp', alt: 'Paneer Butter Masala - Rich and creamy North Indian curry', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Kachori-Sabzi.webp', alt: 'Kachori-Sabzi - Authentic Banarasi breakfast specialty', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Puchka Counter.webp', alt: 'Puchka Counter - Live chaat station at wedding', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Biryani, Chicken Butter Masala, Prawns, Mutton.webp', alt: 'Biryani, Chicken Butter Masala, Prawns and Mutton - Grand buffet spread', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Image_skofjfskofjfskof_Prawn Curry.webp', alt: 'Prawn Curry - Bengali Chingri Malai delicacy', category: 'food' },
    { src: '/Images/Food/Gemini_Generated_Image_Mishti Doi.webp', alt: 'Mishti Doi - Traditional Bengali sweet yogurt', category: 'food' },
    { src: '/Images/Food/Kashi-Chat.webp', alt: 'Kashi Chaat - Famous Banarasi street food counter', category: 'food' },
    { src: '/Images/Food/banarasi kachori-sabzi & jalebi.webp', alt: 'Banarasi Kachori-Sabzi with Jalebi - Authentic breakfast combo', category: 'food' },
    { src: '/Images/Food/banarasi tamatar chat.webp', alt: 'Banarasi Tamatar Chaat - Tangy tomato street food specialty', category: 'food' },
];

const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<'decoration' | 'food'>('decoration');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredImages = galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white via-ganga/20 to-white relative overflow-hidden" id="gallery">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #b8860b 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <Camera className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-5xl md:text-6xl font-bold text-royal mb-4">
                        Hamari Gallery
                    </h2>
                    <p className="text-xl text-primary font-serif italic mb-2">
                        Our Work Showcase
                    </p>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Dekho hamare kaam ki jhalkiyan - decoration se lekar food tak, har event mein perfection
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setSelectedCategory('decoration')}
                        className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${selectedCategory === 'decoration'
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-premium'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                            }`}
                    >
                        🎨 Decoration ({galleryImages.filter(img => img.category === 'decoration').length})
                    </button>
                    <button
                        onClick={() => setSelectedCategory('food')}
                        className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${selectedCategory === 'food'
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-premium'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                            }`}
                    >
                        🍽️ Food ({galleryImages.filter(img => img.category === 'food').length})
                    </button>
                </div>

                {/* AI Disclaimer for Food Images */}
                {selectedCategory === 'food' && (
                    <div className="mb-6 max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-4 shadow-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">ℹ️</span>
                                <div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        <span className="font-semibold text-blue-700">Transparency Note:</span> Food images shown here are AI-generated illustrations to showcase our menu variety.
                                        Our decoration photos are 100% real from actual events. We believe in building trust through honesty! 🙏
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {filteredImages.slice(0, 9).map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium line-clamp-2">{image.alt}</p>
                            </div>
                            {/* View Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 p-4 rounded-full">
                                    <Camera className="text-primary" size={32} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Full Gallery CTA */}
                <div className="text-center">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 group"
                    >
                        View Full Gallery
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                    </Link>
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                images={filteredImages}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setCurrentImageIndex}
            />
        </section>
    );
};

export default Gallery;
export { galleryImages };
