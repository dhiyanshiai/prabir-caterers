'use client';

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import TrustBadges from '../components/TrustBadges';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

/**
 * Client-side home page content wrapper.
 * 
 * SEO NOTE: While this component is client-rendered, the critical SEO elements
 * (metadata, JSON-LD schemas, H1 content) are in the server-rendered page.tsx.
 * Google's crawler will see the metadata and structured data from the server response.
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
