import React from 'react';
import { CheckCircle, Award, Users, MapPin, Star, Clock, ChefHat } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    const reasons = [
        {
            icon: Clock,
            title: "40+ Years of Excellence",
            description: "Since 1983, serving Varanasi with authentic Banarasi hospitality. Four decades of trust and tradition.",
            highlight: "Established 1983"
        },
        {
            icon: Users,
            title: "5000+ Successful Events",
            description: "From intimate family gatherings to grand weddings of 1500+ guests. Wedding catering, corporate events, and celebrations.",
            highlight: "5000+ Events"
        },
        {
            icon: ChefHat,
            title: "Authentic Banarasi & Bengali Cuisine",
            description: "Traditional recipes passed down through generations. From Banarasi kachori to Bengali Kosha Mangsho - we master both!",
            highlight: "Dual Expertise"
        },
        {
            icon: MapPin,
            title: "All Varanasi Coverage",
            description: "Serving Godowlia, Assi, Lanka, Sigra, Bhelupur, Nadesar, and all Varanasi areas. Local expertise you can trust.",
            highlight: "Complete Coverage"
        },
        {
            icon: Star,
            title: "4.1★ Rated Service",
            description: "150+ verified reviews on Justdial and local platforms. Customer satisfaction is our top priority.",
            highlight: "Highly Rated"
        },
        {
            icon: CheckCircle,
            title: "Complete Event Solutions",
            description: "One-stop shop: Catering + Tent House + Decoration + Planning. No need for multiple vendors. Everything coordinated.",
            highlight: "All-in-One"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white via-ganga/30 to-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #b8860b 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-royal mb-4">
                        Kyon Chune Humein?
                    </h2>
                    <p className="text-xl text-primary font-serif italic mb-2">
                        Why Choose Prabir Caterer
                    </p>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Banaras ki har shaadi mein, har function mein - vishwas ka naam hai Prabir Caterer. 40 saal se aapki khushi mein shaamil.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent">
                                    <reason.icon className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {reason.description}
                            </p>

                            {/* Highlight Badge */}
                            <div className="inline-block px-4 py-2 bg-ganga/50 rounded-full">
                                <span className="text-sm font-bold text-primary">
                                    ✓ {reason.highlight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Service Areas Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                    <h3 className="text-3xl font-bold text-royal text-center mb-8">
                        Hamara Seva Kshetra (Service Areas in Varanasi)
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            "Godowlia", "Assi Ghat", "Lanka", "Sigra",
                            "Bhelupur", "Nadesar", "Pandeypur", "Sonarpura",
                            "Kabir Chaura", "Maldahiya", "Lahurabir", "Chetganj"
                        ].map((area, idx) => (
                            <div key={idx} className="px-4 py-3 bg-ganga/30 rounded-lg hover:bg-primary/10 transition-colors">
                                <span className="text-gray-800 font-semibold">📍 {area}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-6 text-gray-600 italic">
                        ...and all other areas across Varanasi. Hum poore Banaras mein seva pradan karte hain!
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300"
                    >
                        Aaj Hi Book Karein
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
