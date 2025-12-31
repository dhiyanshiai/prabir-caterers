import React from 'react';

const SeoSchema: React.FC = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Prabir Caterer & Tent House",
        "alternateName": "Prabir Caterers",
        "description": "Best wedding caterer and tent house in Varanasi since 1983. Authentic Banarasi cuisine, veg & non-veg catering for 50-1500 guests, royal mandap decoration, and comprehensive event planning services.",
        "image": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
        "@id": "https://prabir-caterers.in",
        "url": "https://prabir-caterers.in",
        "telephone": ["+919839553272", "+918303439353"],
        "email": "prabir1983.mukherjee@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "B16/20, Pandey Haweli, Opposite Bangali Tola Inter College, Sonarpura Road",
            "addressLocality": "Varanasi",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "221001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.3176,
            "longitude": 82.9739
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "23:00"
        },
        "priceRange": "₹₹",
        "paymentAccepted": "Cash, UPI, Bank Transfer, Card",
        "acceptsReservations": true,
        "servesCuisine": "Banarasi, North Indian, Pure Vegetarian",
        "founder": "Prabir Mukherjee",
        "foundingDate": "1983",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.1",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
        },
        "areaServed": {
            "@type": "City",
            "name": "Varanasi"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Catering Services",
                    "description": "Authentic Banarasi vegetarian and non-vegetarian catering for weddings and events. Serving 50-1500 guests."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Tent House & Mandap Decoration",
                    "description": "Royal mandap setup, tent house services, and complete event decoration with traditional and modern themes."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Event Planning & Management",
                    "description": "Complete wedding and event planning services including vendor coordination and guest management."
                }
            }
        ],
        "sameAs": [
            "https://www.facebook.com/prabir.mukherjee.50702769",
            "https://www.instagram.com/prabir.mukherjee.50702769"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default SeoSchema;
