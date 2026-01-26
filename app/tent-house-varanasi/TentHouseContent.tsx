'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tent, Palette, Lightbulb, Umbrella, ArrowRight, Star } from 'lucide-react';

const TentHouseContent = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop"
                        alt="Best Wedding Tent House in Varanasi - Prabir Caterer"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-royal/60 to-royal/30" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <div className="flex flex-col items-center gap-2 mb-6 animate-fadeIn">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/90 text-royal font-bold text-sm">
                            PREMIUM EVENT DECOR
                        </span>
                        <span className="text-xs text-white/80 font-medium tracking-wide">
                            Last Updated: January 2026
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                        Royal Tent House & <br />
                        <span className="text-accent">Decor in Varanasi</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
                        Transforming venues into dreamscapes. From Rajwadi Mandaps to Ganga Aarti themes, we create magical settings for your celebrations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919839553272"
                            className="bg-accent hover:bg-accent/90 text-royal px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            Book Decor Consultation
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#themes"
                            className="bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white hover:text-royal text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            View Themes
                        </a>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-royal mb-6">More Than Just a Tent House</h2>
                        <p className="text-gray-600 text-lg">
                            We combine traditional craftsmanship with modern design to build structures that are not only beautiful but safe and weather-proof.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all bg-orange-50/50">
                            <Tent className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-royal mb-2">Luxury Pandals</h3>
                            <p className="text-gray-600">Waterproof, air-conditioned, and magnificently draped structures for any season.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all bg-orange-50/50">
                            <Palette className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-royal mb-2">Theme Decor</h3>
                            <p className="text-gray-600">Customized themes including Floral, Vintage, Royal Rajwadi, and Contemporary Minimalist.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all bg-orange-50/50">
                            <Lightbulb className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-royal mb-2">Premium Lighting</h3>
                            <p className="text-gray-600">Chandeliers, fairy lights, focus spots, and ambient lighting to set the perfect mood.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all bg-orange-50/50">
                            <Umbrella className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-royal mb-2">Weather Proof</h3>
                            <p className="text-gray-600">Complete rain and storm protection ensuring your event goes on without interruption.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Themes Section */}
            <section id="themes" className="py-20 bg-royal text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Signature Themes</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer">
                            <Image
                                src="/images/ganga-aarti-wedding.webp"
                                alt="Ganga Aarti Theme Wedding"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 z-10">
                                <h3 className="text-2xl font-bold text-accent mb-2">Ganga Aarti Theme</h3>
                                <p className="text-gray-300">Spiritual ambience with diyas, bells, and marigold decor inspired by the Ghats.</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer">
                            <Image
                                src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2940&auto=format&fit=crop"
                                alt="Royal Rajwadi Theme Wedding"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 z-10">
                                <h3 className="text-2xl font-bold text-accent mb-2">Royal Rajwadi</h3>
                                <p className="text-gray-300">Grand entrance gates, red carpets, and golden drapery fitting for kings and queens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-royal text-center mb-12">Client Experiences</h2>
                    <div className="bg-orange-50 p-8 rounded-2xl relative">
                        <div className="flex text-yellow-500 mb-4">
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                        </div>
                        <p className="text-gray-700 text-lg italic mb-6">
                            "The decoration was absolutely stunning! The team transformed our simple venue into a palace. The lighting arrangement was exactly what we wanted for our reception."
                        </p>
                        <div>
                            <div className="font-bold text-royal">Vikram & Anjali</div>
                            <div className="text-sm text-gray-500">Wedding at Taj Ganges, Varanasi</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-royal text-center mb-12">Decoration FAQs</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">What happens if it rains?</h3>
                            <p className="text-gray-600">We specialize in waterproof masking and hangers. For monsoon weddings, we ensure complete coverage so your event remains unaffected by weather.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">Can you customize the color palette?</h3>
                            <p className="text-gray-600">Yes, we work with your preferred color schemes. From pastel morning weddings to deep crimson evening receptions, everything is customizable.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-royal mb-2">Do you provide furniture and carpets?</h3>
                            <p className="text-gray-600">Yes, we provide complete infrastructure needs including premium sofas, banquet chairs, carpets, round tables, and stage furniture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-20 bg-royal text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Transform Your Venue</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Best Tent House & Decor services in Varanasi. Let's design your dream wedding.
                    </p>
                    <a
                        href="https://wa.me/919839553272"
                        className="inline-block bg-accent hover:bg-accent/90 text-royal px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl"
                    >
                        Get Decor Quote
                    </a>
                </div>
            </section>
        </main>
    );
};

export default TentHouseContent;
