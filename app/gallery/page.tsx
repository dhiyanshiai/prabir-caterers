import { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
    title: 'Wedding Gallery - Food & Decor Photos | Prabir Caterer',
    description: 'Explore our portfolio of real weddings in Varanasi. Authentic Banarasi food, stunning mandap decorations, and memorable moments captured.',
    openGraph: {
        title: 'Wedding Gallery - Food & Decor Photos | Prabir Caterer',
        description: 'See our work: Authentic Banarasi catering and royal wedding decorations in Varanasi.',
        url: 'https://prabircaterer.com/gallery',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prabircaterer.com/gallery',
    }
};

export default function GalleryPage() {
    return <GalleryContent />;
}
