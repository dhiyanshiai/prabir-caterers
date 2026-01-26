'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChefHat, Star, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const WeddingCatererContent = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2940&auto=format&fit=crop"
                        alt="Best Wedding Caterer in Varanasi - Prabir Caterer"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <div className="flex flex-col items-center gap-2 mb-6 animate-fadeIn">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/90 text-white font-bold text-sm">
                            SERVING VARANASI SINCE 1983
                        </span>
                        <span className="text-xs text-white/80 font-medium tracking-wide">
                            Last Updated: January 2026
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                        Best Wedding Caterer <br />
                        <span className="text-primary">in Varanasi</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
                        Experience the royal flavors of Banaras. Authentic traditional cuisine, live counters, and impeccable service for your special day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919839553272"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            Book Consultation
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#menu-highlights"
                            className="bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white hover:text-royal text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            View Menu
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-orange-50 border-b border-orange-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-orange-200/50">
                        <div>
                            <div className="text-4xl font-bold text-royal mb-2">40+</div>
                            <div className="text-gray-600 font-medium">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-royal mb-2">5000+</div>
                            <div className="text-gray-600 font-medium">Weddings Served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-royal mb-2">100+</div>
                            <div className="text-gray-600 font-medium">Team Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-royal mb-2">4.7★</div>
                            <div className="text-gray-600 font-medium">Customer Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-royal mb-6">Why We Are Varanasi's Top Choice</h2>
                        <p className="text-gray-600 text-lg">
                            Prabir Caterer (Nanu Da) is not just a service; it's a legacy of taste and tradition. We understand that food is the heart of every Indian wedding.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary mb-6">
                                <ChefHat size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-royal mb-4">Authentic Banarasi Flavors</h3>
                            <p className="text-gray-600">
                                From Kachori-Sabzi to Malaiyyo, our chefs are masters of traditional Banarasi recipes passed down through generations.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary mb-6">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-royal mb-4">Pure & Hygienic</h3>
                            <p className="text-gray-600">
                                We maintain strict hygiene standards. Separate kitchens for vegetarian and non-vegetarian preparation upon request.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-royal mb-4">Capacity for 2000+ Guests</h3>
                            <p className="text-gray-600">
                                Whether it's an intimate Roka or a grand Wedding Reception, our team is equipped to handle events of any scale seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section id="menu-highlights" className="py-20 bg-royal text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 relative h-[400px] w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop"
                                alt="Banarasi Wedding Menu Highlights"
                                fill
                                className="rounded-2xl shadow-2xl transform md:rotate-3 transition-transform hover:rotate-0 duration-500 object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <span className="text-primary font-bold tracking-wider uppercase">Culinary Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Signature Wedding Menu</h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Our menu is a celebration of flavors. We customize every dish to suit your preferences and dietary requirements.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Live Counters</h4>
                                        <p className="text-gray-300">Banarasi Chaat, Pani Puri, Dosa, Pasta, and Jalebi-Rabri live stations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Main Course</h4>
                                        <p className="text-gray-300">Rich Paneer delicacies, Dal Makhani, Seasonal Veg, and fragrant Basmati Pulao.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Desserts</h4>
                                        <p className="text-gray-300">Gulab Jamun, Rasmalai, Gajar Ka Halwa, and our special Kheer.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link href="/services-detail" className="text-primary hover:text-white font-semibold flex items-center gap-2 transition-colors">
                                    View Full Service Details <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Reviews) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-royal text-center mb-16">Happy Couples</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "Prabir Da managed the catering for my daughter's wedding. The food was the highlight! Every guest praised the Banarasi Dum Aloo. Highly recommended!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-royal">RS</div>
                                <div>
                                    <div className="font-bold text-royal">Rajesh Singh</div>
                                    <div className="text-xs text-gray-500">Varanasi</div>
                                </div>
                                <div className="ml-auto flex text-yellow-400">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "Best wedding caterer in Varanasi hands down. Professional team, impeccable hygiene, and delicious food. They handled our 1500 guest list effortlessly."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-royal">AM</div>
                                <div>
                                    <div className="font-bold text-royal">Amit Mishra</div>
                                    <div className="text-xs text-gray-500">Allahabad</div>
                                </div>
                                <div className="ml-auto flex text-yellow-400">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "The live counters were a hit! Especially the chaat. Thank you Prabir Caterers for making our special day memorable."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-royal">PG</div>
                                <div>
                                    <div className="font-bold text-royal">Priya Gupta</div>
                                    <div className="text-xs text-gray-500">Varanasi</div>
                                </div>
                                <div className="ml-auto flex text-yellow-400">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-orange-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-royal text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">Do you provide catering for destinations outside Varanasi?</h3>
                            <p className="text-gray-600">Yes, we provide luxury catering services for weddings across Uttar Pradesh and neighboring states, including Allahabad, Jaunpur, and Mirzapur.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">What is the per-plate cost for a wedding in Varanasi?</h3>
                            <p className="text-gray-600">Our wedding packages start competitively. The cost depends on the menu selection, guest count, and service style. Contact us for a customized quote.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">Can you handle both vegetarian and non-vegetarian menus?</h3>
                            <p className="text-gray-600">Absolutely. We have separate cooking teams and vessels for vegetarian and non-vegetarian dishes to maintain strict religious and dietary compliance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">Do you offer food tasting before booking?</h3>
                            <p className="text-gray-600">Yes, we strongly encourage food tasting. You can schedule a tasting session to experience our quality and flavor firsthand before finalizing your booking.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-20 bg-royal text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Plan Your Dream Wedding Feast Today</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Dates are filling up fast for the upcoming wedding season. Secure the best caterer in Varanasi for your big day.
                    </p>
                    <a
                        href="https://wa.me/919839553272"
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </section>
        </main>
    );
};

export default WeddingCatererContent;
