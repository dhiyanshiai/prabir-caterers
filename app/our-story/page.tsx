import { Metadata } from 'next';
import OurStoryContent from './OurStoryContent';

export const metadata: Metadata = {
    title: 'Our Story - Legacy of 40 Years | Prabir Caterer',
    description: 'From humble beginnings in 1983 to Varanasi\'s most trusted caterer. Read the journey of Prabir Da and his commitment to quality and tradition.',
    openGraph: {
        title: 'Our Story - Legacy of 40 Years | Prabir Caterer',
        description: 'Serving Varanasi with love and authentic flavors for over 40 years. Discover the story behind Prabir Caterer.',
        url: 'https://prabir-caterers.in/our-story',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prabir-caterers.in/our-story',
    }
};

export default function OurStoryPage() {
    return <OurStoryContent />;
}
