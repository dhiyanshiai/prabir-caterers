'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import TrustBadges from '../components/TrustBadges';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const HomeContent = () => {
    // Note: In Next.js App Router, we handle hash scrolling via effect if coming from another page
    // or just let native behavior handle it.
    // However, existing logic checks for hash on mount.
    // useSearchParams doesn't give hash.
    // We can use window.location.hash

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
