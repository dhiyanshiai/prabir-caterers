import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Utensils, Tent, ClipboardCheck, Star, Award, Clock, Camera } from 'lucide-react';
import PricingCalculator from '../components/PricingCalculator';
import Lightbox, { GalleryImage } from '../components/Lightbox';
import { galleryImages } from '../components/Gallery';

const ServicesDetail: React.FC = () => {
    const location = useLocation();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get only food images for this page
    const foodImages = galleryImages.filter(img => img.category === 'food');

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    // Scroll to top on mount, or to hash section if provided
    useEffect(() => {
        if (location.hash) {
            // If there's a hash (like #pricing), scroll to that section
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // Otherwise scroll to top
            window.scrollTo(0, 0);
        }
    }, [location.hash]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-ganga/10 to-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-royal via-velvet to-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
                            Complete Wedding Solutions
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Hamari Sevaon ki Puri Jaankari
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 italic font-serif">
                            "40+ saal ka anubhav, har shaadi mein naya josh"
                        </p>
                    </div>
                </div>

                {/* Decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="fill-white w-full h-12 sm:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                <Award size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-royal mb-2">40+ Years</h3>
                            <p className="text-gray-600">Varanasi mein bharosa</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                <Star size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-royal mb-2">5000+ Events</h3>
                            <p className="text-gray-600">Safalta se poori ki</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-royal mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Aapki seva mein</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">

                        {/* Catering Service */}
                        <div className="bg-white rounded-3xl shadow-premium overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop"
                                        alt="Authentic Banarasi wedding catering"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <Utensils className="text-white" size={48} />
                                    </div>
                                </div>
                                <div className="p-8 md:p-12">
                                    <h2 className="text-3xl font-bold text-royal mb-4">Zayka-e-Banaras</h2>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Ghat-ghat ka swad, ek hi thaali mein. Authentic Banarasi cuisine crafted with love and tradition.
                                        From traditional Kachori-Sabzi breakfast to elaborate wedding dinners, we serve 50-1500 guests with equal care.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Pure Veg & Non-Veg:</strong> Both options with authentic Banarasi flavors</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Live Counters:</strong> Chaat, Paan, Ice Cream stations</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Pricing:</strong> Starting ₹500/plate (veg), ₹800/plate (non-veg)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decoration Service */}
                        <div className="bg-white rounded-3xl shadow-premium overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="p-8 md:p-12 order-2 md:order-1">
                                    <h2 className="text-3xl font-bold text-royal mb-4">Sajawat & Jhilmil</h2>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Rangoli se Mandap tak - we transform venues into magical spaces. From traditional marigold mandaps
                                        to modern royal rajwadi setups, every decoration tells your unique story.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Themes:</strong> Ganga Aarti, Royal Rajwadi, Floral Paradise, Modern Minimalist</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Complete Package:</strong> Stage, entrance, lighting, photo booths</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Coverage:</strong> All Varanasi areas - Godowlia, Assi, Lanka, Sigra</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-64 md:h-auto order-1 md:order-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop"
                                        alt="Royal mandap decoration for Varanasi weddings"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
                                    <div className="absolute top-6 right-6">
                                        <Tent className="text-white" size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Planning Service */}
                        <div className="bg-white rounded-3xl shadow-premium overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop"
                                        alt="Professional wedding event planning in Varanasi"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <ClipboardCheck className="text-white" size={48} />
                                    </div>
                                </div>
                                <div className="p-8 md:p-12">
                                    <h2 className="text-3xl font-bold text-royal mb-4">Befikar Jashn</h2>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Chacha-Mama ki tension humari. Complete wedding and event management from start to finish.
                                        You enjoy the celebration while we handle everything behind the scenes.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Full Coordination:</strong> Vendors, guests, timeline management</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Logistics:</strong> Transport, accommodation, parking arrangements</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xl">✦</span>
                                            <p><strong>Entertainment:</strong> Shehnai, DJ, photographer, makeup artist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Food Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <Camera className="mx-auto text-primary mb-4" size={48} />
                            <h2 className="text-4xl md:text-5xl font-bold text-royal mb-4">
                                Hamara Khana
                            </h2>
                            <p className="text-xl text-primary font-serif italic mb-2">
                                Our Food Showcase
                            </p>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Dekho hamare zaayke ki tasveerein - har dish mein pyaar aur parampara
                            </p>
                        </div>

                        {/* Food Images Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                            {foodImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                        <p className="text-white text-xs font-medium line-clamp-2">{image.alt}</p>
                                    </div>
                                    {/* View Icon */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-white/90 p-3 rounded-full">
                                            <Camera className="text-primary" size={24} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Gallery CTA */}
                        <div className="text-center">
                            <a
                                href="/gallery"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 group"
                            >
                                <Camera size={24} />
                                View Complete Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Calculator Section */}
            <section id="pricing" className="py-20 bg-gradient-to-b from-ganga/20 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-royal mb-4">
                            Apna Menu Banayein
                        </h2>
                        <p className="text-xl text-gray-600">
                            Select items and get instant estimate for your event
                        </p>
                    </div>
                    <PricingCalculator />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-royal via-velvet to-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Plan Your Perfect Event?
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Prabir Da aur unki team aapki seva mein
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919839553272"
                            className="bg-white text-royal px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                            WhatsApp par Baat Karein
                        </a>
                        <a
                            href="tel:+919839553272"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-royal transition-all duration-300"
                        >
                            Call: +91 98395 53272
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <Lightbox
                images={foodImages}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setCurrentImageIndex}
            />
        </div>
    );
};

export default ServicesDetail;
