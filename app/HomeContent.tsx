'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import About from '../components/About';

// Dynamic imports for below-fold components to reduce initial JS bundle
// These components load lazily as user scrolls down
const WhyChooseUs = dynamic(() => import('../components/WhyChooseUs'), {
    loading: () => <div className="h-96 bg-gradient-to-b from-gray-50 to-white animate-pulse" />,
    ssr: true
});

const Gallery = dynamic(() => import('../components/Gallery'), {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true
});

const TrustBadges = dynamic(() => import('../components/TrustBadges'), {
    loading: () => <div className="h-48 bg-white animate-pulse" />,
    ssr: true
});

const Testimonials = dynamic(() => import('../components/Testimonials'), {
    loading: () => <div className="h-96 bg-gradient-to-b from-white to-gray-50 animate-pulse" />,
    ssr: true
});

const FAQ = dynamic(() => import('../components/FAQ'), {
    loading: () => <div className="h-96 bg-white animate-pulse" />,
    ssr: true
});

/**
 * Client-side home page content wrapper.
 * 
 * PERFORMANCE: Below-fold components use dynamic imports to reduce initial bundle.
 * SEO: Metadata and JSON-LD are server-rendered in page.tsx.
 */
const HomeContent = () => {
    // Handle hash navigation on mount
    useEffect(() => {
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <main>
            <Hero />
            <Welcome />
            <Services />
            <About />
            <WhyChooseUs />
            <Gallery />
            <TrustBadges />
            <Testimonials />
            <FAQ />
        </main>
    );
};

export default HomeContent;
