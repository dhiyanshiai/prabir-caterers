
import { Metadata } from 'next';
import TentHouseContent from './TentHouseContent';

export const metadata: Metadata = {
    title: 'Best Tent House & Wedding Decorator in Varanasi | Prabir Caterer',
    description: 'Top-rated Tent House in Varanasi. Luxury mandap decoration, waterproof pandals, and theme weddings (Rajwadi, Ganga Aarti). Book the best decorators near you.',
    keywords: ['Tent House Varanasi', 'Wedding Decorator Varanasi', 'Mandap Decoration', 'Event Decor Varanasi', 'Best Tent House Near Me'],
    openGraph: {
        title: 'Best Tent House & Decor in Varanasi | Prabir Caterer',
        description: 'Transforming venues into dreamscapes. Luxury tenting and royal decor since 1983.',
        url: 'https://prabir-caterers.in/tent-house-varanasi',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Prabir Tent House & Decor',
            },
        ],
    },
    alternates: {
        canonical: 'https://prabir-caterers.in/tent-house-varanasi',
    },
};

export default function TentHousePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Event Decoration',
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
            name: 'Decoration Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Wedding Mandap Decoration'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Waterproof Tent House'
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
                name: 'What happens if it rains?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We specialize in waterproof masking and hangers. For monsoon weddings, we ensure complete coverage so your event remains unaffected by weather.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can you customize the color palette?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we work with your preferred color schemes. From pastel morning weddings to deep crimson evening receptions, everything is customizable.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you provide furniture and carpets?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide complete infrastructure needs including premium sofas, banquet chairs, carpets, round tables, and stage furniture.'
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
            <TentHouseContent />
        </>
    );
}
