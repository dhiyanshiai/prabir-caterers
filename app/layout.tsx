import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PhoneFloat from '../components/PhoneFloat';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SeoSchema from '../components/SeoSchema';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://prabir-caterers.in'),
    title: 'Prabir Caterer & Tent House | Best Wedding Caterers in Varanasi',
    description: 'Best Wedding Caterer in Varanasi | Prabir Caterer & Tent House - Authentic Banarasi cuisine, royal mandap decoration, event planning. Serving Varanasi since 1983. Book now!',
    keywords: 'Wedding Caterer Varanasi, Best Caterers in Varanasi, Tent House Varanasi, Event Planner Varanasi, Banarasi Wedding Catering, Mandap Decoration Varanasi, Prabir Caterer, Gonu Babu Katra, Wedding Services Varanasi',
    authors: [{ name: 'Prabir Caterer' }],
    openGraph: {
        title: 'Prabir Caterer & Tent House | Varanasi',
        description: 'Crafting precious moments since 1983. Authentic Banarasi Catering & Royal Decor.',
        type: 'website',
        url: 'https://prabir-caterers.in',
        images: [
            {
                url: 'https://prabir-caterers.in/images/Decoration/Decoration_Stage.webp',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Prabir Caterer & Tent House | Varanasi's Best Wedding Services",
        description: "Banaras ki Shaan, 1983 se. Prabir Caterer offers authentic Banarasi catering and royal mandap decoration for weddings.",
        images: ['https://prabir-caterers.in/images/Decoration/Decoration_Stage.webp'],
    },
    alternates: {
        canonical: 'https://prabir-caterers.in',
        languages: {
            'en-IN': 'https://prabir-caterers.in',
            'hi-IN': 'https://prabir-caterers.in',
            'x-default': 'https://prabir-caterers.in',
        },
    },
};

export const viewport: Viewport = {
    themeColor: '#FF9933',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-IN">
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-NBW1WN5QVD"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());

              gtag('config', 'G-NBW1WN5QVD');
            `}
                </Script>

                {/* Geo-targeting meta tags for India/Varanasi local SEO */}
                <meta name="geo.region" content="IN-UP" />
                <meta name="geo.placename" content="Varanasi" />
                <meta name="geo.position" content="25.3176;82.9739" />
                <meta name="ICBM" content="25.3176, 82.9739" />
            </head>
            <body className={`min-h-screen bg-white font-sans text-gray-900 selection:bg-marigold selection:text-white ${inter.variable} ${playfair.variable}`}>
                <SeoSchema />
                <Navigation />
                {children}
                <Footer />
                <PhoneFloat />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
