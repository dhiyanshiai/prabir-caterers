import React from 'react';

const SeoSchema: React.FC = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Prabir Caterer & Tent House",
        "alternateName": "Prabir Caterers",
        "description": "Best wedding caterer and tent house in Varanasi since 1983. Prabir Caterers offers authentic Banarasi cuisine, royal mandap decoration, and comprehensive event planning services for weddings and events in Varanasi.",
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
        "servesCuisine": "Banarasi, North Indian, Pure Vegetarian",
        "founder": "Prabir Mukherjee",
        "foundingDate": "1983",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
        },
        "areaServed": {
            "@type": "City",
            "name": "Varanasi"
        },
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
