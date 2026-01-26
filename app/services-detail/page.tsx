import { Metadata } from 'next';
import ServicesDetailContent from './ServicesDetailContent';

export const metadata: Metadata = {
    title: 'Catering & Decoration Services in Varanasi | Prabir Caterer',
    description: 'Best wedding catering and tent house services in Varanasi from Prabir Caterer. Authentic Banarasi cuisine, royal decorations, and complete event management since 1983.',
    openGraph: {
        title: 'Catering & Decoration Services in Varanasi | Prabir Caterer',
        description: 'Expert wedding planning, catering, and decoration services in Varanasi. 40+ years of experience.',
        url: 'https://prabircaterer.com/services-detail',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prabircaterer.com/services-detail',
    }
};

export default function ServicesDetailPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Wedding Catering & Decoration',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Prabir Caterer & Tent House'
        },
        areaServed: {
            '@type': 'City',
            name: 'Varanasi'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Wedding Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Banarasi Catering'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Mandap Decoration'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Event Planning'
                    }
                }
            ]
        }
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What types of cuisines do you serve?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We specialize in authentic Banarasi vegetarian and non-vegetarian cuisines. We also offer North Indian, Chinese, Continental, and South Indian live counters.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can you customize the wedding menu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. We believe every wedding is unique. We work with you to create a customized menu that fits your taste, budget, and dietary requirements.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you provide samples for tasting?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we arrange food tasting sessions for our clients to ensure complete satisfaction with the taste and quality before the big day.'
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
                item: 'https://prabircaterer.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://prabircaterer.com/services-detail'
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
            <ServicesDetailContent />
        </>
    );
}
