'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Coffee, Award, Clock, ArrowRight, CheckSquare } from 'lucide-react';

const CorporateCateringContent = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop"
                        alt="Corporate Catering Services in Varanasi - Prabir Caterer"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <div className="flex flex-col items-center gap-2 mb-6 animate-fadeIn">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 font-bold text-sm">
                            PROFESSIONAL EVENT SOLUTIONS
                        </span>
                        <span className="text-xs text-white/80 font-medium tracking-wide">
                            Last Updated: January 2026
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Premier Corporate Catering <br />
                        <span className="text-blue-200">in Varanasi</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
                        From board meetings to gala dinners, we deliver impeccable service and culinary excellence that reflects your company's prestige.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919839553272"
                            className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            Request Proposal
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Us Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Elevate Your Business Events</h2>
                        <p className="text-gray-600 text-lg">
                            We understand that corporate events require punctuality, presentation, and professionalism. Praber Caterer brings 40 years of reliability to your business tables.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-600">
                            <Clock className="w-12 h-12 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Execution</h3>
                            <p className="text-gray-600">
                                Time is money. We guarantee punctual setup and service delivery, ensuring your event schedule runs precisely as planned.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-600">
                            <Award className="w-12 h-12 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Presentation</h3>
                            <p className="text-gray-600">
                                Sophisticated cutlery, uniformed staff, and elegant buffet setups that match your corporate brand image.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-600">
                            <Briefcase className="w-12 h-12 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">GST Compliant</h3>
                            <p className="text-gray-600">
                                Seamless billing and documentation. We provide detailed GST invoices and transparent pricing for corporate accounts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 relative h-[400px]">
                            <Image
                                src="https://images.unsplash.com/photo-1519671482538-518b5c2bf1c6?q=80&w=2800&auto=format&fit=crop"
                                alt="Corporate Lunch Setup"
                                fill
                                className="rounded-2xl shadow-2xl object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Tailored Solutions for Every Occasion</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg h-fit">
                                        <Coffee className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Office High-Tea & Snacks</h3>
                                        <p className="text-gray-600">Premium tea/coffee service with an assortment of cookies, sandwiches, and Indian snacks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg h-fit">
                                        <CheckSquare className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Executive Lunch Boxes</h3>
                                        <p className="text-gray-600">Hygienic, nutritious, and delicious packed meals for conferences and workshops.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg h-fit">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Annual Galas & Launches</h3>
                                        <p className="text-gray-600">Full-scale buffet catering and decoration for product launches, annual days, and award nights.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link href="/services-detail" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
                                    Explore Full Service Catalog <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Corporate FAQs</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Do you offer GST invoices?</h3>
                            <p className="text-gray-600">Yes, we provide fully compliant GST invoices for all corporate bookings to facilitate your accounting and tax claims.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">What is the minimum pax for office delivery?</h3>
                            <p className="text-gray-600">For lunch boxes and high-tea, we generally require a minimum order of 20 pax. For full buffet service, the minimum is 50 pax.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Can you handle last-minute meetings?</h3>
                            <p className="text-gray-600">We understand urgent requirements. While 24-48 hours notice is preferred, we can accommodate last-minute orders depending on our kitchen schedule.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Partner With Varanasi's Best</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Impress your clients and stakeholders with a catering experience that speaks quality.
                    </p>
                    <a
                        href="https://wa.me/919839553272"
                        className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl"
                    >
                        Contact for Corporate Rates
                    </a>
                </div>
            </section>
        </main>
    );
};

export default CorporateCateringContent;
