
import { Metadata } from 'next';
import WeddingCatererContent from './WeddingCatererContent';

export const metadata: Metadata = {
    title: 'Best Wedding Caterer in Varanasi | Prabir Caterer & Tent House',
    description: 'Looking for the best wedding caterer in Varanasi? Prabir Caterer offers authentic Banarasi cuisine, live food counters, and royal service for your special day. Book now!',
    keywords: ['Wedding Caterer Varanasi', 'Best Catering Service Varanasi', 'Banarasi Wedding Food', 'Marriage Catering Varanasi', 'Prabir Caterer'],
    openGraph: {
        title: 'Best Wedding Caterer in Varanasi | Prabir Caterer',
        description: 'Authentic Banarasi cuisine for your wedding. 40+ years of experience serving Varanasi.',
        url: 'https://prabir-caterers.in/wedding-caterer-varanasi',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2940&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Prabir Wedding Catering Services',
            },
        ],
    },
    alternates: {
        canonical: 'https://prabir-caterers.in/wedding-caterer-varanasi',
    },
};

export default function WeddingCatererPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Wedding Catering',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Prabir Caterer & Tent House',
            image: 'https://prabir-caterers.in/logo.png',
            telephone: '+919839553272',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Gonu Babu Katra',
                addressLocality: 'Varanasi',
                addressRegion: 'UP',
                postalCode: '221010',
                addressCountry: 'IN'
            },
            priceRange: '₹₹',
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.7',
                reviewCount: '512'
            }
        },
        areaServed: {
            '@type': 'City',
            name: 'Varanasi'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Wedding Catering Packages',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Pure Vegetarian Banarasi Menu'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Luxury Non-Veg & Veg Buffet'
                    }
                }
            ]
        },
        dateModified: new Date().toISOString()
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Do you provide catering for destinations outside Varanasi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide luxury catering services for weddings across Uttar Pradesh and neighboring states, including Allahabad, Jaunpur, and Mirzapur.'
                }
            },
            {
                '@type': 'Question',
                name: 'What is the per-plate cost for a wedding in Varanasi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our wedding packages start competitively. The cost depends on the menu selection, guest count, and service style. Contact us for a customized quote.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can you handle both vegetarian and non-vegetarian menus?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. We have separate cooking teams and vessels for vegetarian and non-vegetarian dishes to maintain strict religious and dietary compliance.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you offer food tasting before booking?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we strongly encourage food tasting. You can schedule a tasting session to experience our quality and flavor firsthand before finalizing your booking.'
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <WeddingCatererContent />
        </>
    );
}
