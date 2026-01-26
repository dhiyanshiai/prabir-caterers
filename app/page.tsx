import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
    title: 'Prabir Caterer & Tent House | Best Wedding Caterers in Varanasi',
    description: 'Best Wedding Caterer in Varanasi | Prabir Caterer & Tent House - Authentic Banarasi cuisine, royal mandap decoration, event planning. Serving Varanasi since 1983. Book now!',
    alternates: {
        canonical: 'https://prabir-caterers.in',
    }
};

export default function HomePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Prabir Caterer & Tent House',
        image: 'https://www.prabir-caterers.in/images/Decoration/Decoration_Stage.webp',
        description: 'Best Wedding Caterer in Varanasi | Prabir Caterer & Tent House - Authentic Banarasi cuisine, royal mandap decoration, event planning.',
        url: 'https://prabir-caterers.in',
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
            reviewCount: '1250'
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '09:00',
            closes: '21:00'
        },
        sameAs: [
            'https://www.facebook.com/people/Prabir-Caterer-Tent-House/100063713636783/',
            'https://www.instagram.com/prabircaterer/'
        ],
        dateModified: new Date().toISOString()
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Who is the best wedding caterer in Varanasi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Prabir Caterer & Tent House is widely considered the best wedding caterer in Varanasi, with over 40 years of experience and having served 5000+ weddings with authentic Banarasi cuisine.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you provide tent house and decoration services?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide complete tent house and decoration services including luxury pandals, floral décor, lighting, and theme weddings like Rajwadi and Ganga Aarti themes.'
                }
            },
            {
                '@type': 'Question',
                name: 'How many guests can you serve?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We have the capacity to serve events ranging from intimate gatherings of 50 people to grand weddings with over 2000+ guests efficiently.'
                }
            }
        ]
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://prabir-caterers.in'
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <HomeContent />
        </>
    );
}
