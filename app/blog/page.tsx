import { Metadata } from 'next';
import BlogListContent from './BlogListContent';
import { getSortedPostsData } from '../../lib/markdown';

export const metadata: Metadata = {
    title: 'Wedding Planning & Food Blog | Prabir Caterer',
    description: 'Expert tips on wedding planning in Varanasi, authentic Banarasi recipes, and event management insights from Prabir Caterer.',
    openGraph: {
        title: 'Wedding Planning & Food Blog | Prabir Caterer',
        description: 'Read our latest articles on Banarasi wedding traditions, catering tips, and event planning.',
        url: 'https://prabir-caterers.in/blog',
        siteName: 'Prabir Caterer & Tent House',
        locale: 'en_IN',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prabir-caterers.in/blog',
    }
};

export default function BlogPage() {
    const posts = getSortedPostsData();
    return <BlogListContent posts={posts} />;
}
