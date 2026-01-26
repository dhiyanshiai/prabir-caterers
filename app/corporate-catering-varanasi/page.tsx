
import { Metadata } from 'next';
import CorporateCateringContent from './CorporateCateringContent';

export const metadata: Metadata = {
    title: 'Corporate Catering Services in Varanasi | Prabir Caterer',
    description: 'Premium corporate catering for office parties, conferences, and annual meets in Varanasi. GST compliant billing, professional staff, and hygienic food.',
    keywords: ['Corporate Caterers Varanasi', 'Office Lunch Catering', 'Event Planners Varanasi', 'Business Conference Food', 'High Tea Catering Varanasi'],
    openGraph: {
        title: 'Corporate Catering Services in Varanasi | Prabir Caterer',
        description: 'Elevate your business events with our professional catering services. 40+ years of trust.',
        url: 'https://prabir-caterers.in/corporate-catering-varanasi',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Prabir Corporate Catering',
            },
        ],
    },
    alternates: {
        canonical: 'https://prabir-caterers.in/corporate-catering-varanasi',
    },
};

export default function CorporateCateringPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Corporate Catering',
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
                reviewCount: '120'
            }
        },
        areaServed: {
            '@type': 'City',
            name: 'Varanasi'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Corporate Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Executive Lunch Boxes'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Conference High-Tea'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Annual Gala Dinner'
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
                name: 'Do you offer GST invoices?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide fully compliant GST invoices for all corporate bookings to facilitate your accounting and tax claims.'
                }
            },
            {
                '@type': 'Question',
                name: 'What is the minimum pax for office delivery?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For lunch boxes and high-tea, we generally require a minimum order of 20 pax. For full buffet service, the minimum is 50 pax.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can you handle last-minute meetings?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We understand urgent requirements. While 24-48 hours notice is preferred, we can accommodate last-minute orders depending on our kitchen schedule.'
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
            <CorporateCateringContent />
        </>
    );
}
