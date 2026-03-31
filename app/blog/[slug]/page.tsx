
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostContent from './BlogPostContent';
import { getAllPostSlugs, getPostData } from '../../../lib/markdown';

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    // read route params
    const slug = (await params).slug;

    try {
        // fetch data
        const post = await getPostData(slug);

        return {
            title: `${post.title} | Prabir Caterer Blog`,
            description: post.excerpt || `Read more about ${post.title}`,
            openGraph: {
                title: post.title,
                description: post.excerpt || `Read more about ${post.title}`,
                url: `https://prabir-caterers.in/blog/${slug}`,
                siteName: 'Prabir Caterer & Tent House',
                locale: 'en_IN',
                type: 'article',
                images: [
                    {
                        url: post.image,
                        width: 800,
                        height: 600,
                        alt: post.title,
                    },
                ],
                authors: [post.author],
                publishedTime: new Date(post.date).toISOString(),
            },
            alternates: {
                canonical: `https://prabir-caterers.in/blog/${slug}`,
            }
        };
    } catch {
        return {
            title: 'Post Not Found | Prabir Caterer',
        };
    }
}

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => path.params);
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;
    let post;

    try {
        post = await getPostData(slug);
    } catch {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image,
        author: {
            '@type': 'Person',
            name: post.author,
            jobTitle: post.author.includes('Prabir') ? 'Founder & Head Caterer' : 'Expert Team',
            url: 'https://prabir-caterers.in/our-story'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Prabir Caterer',
            logo: {
                '@type': 'ImageObject',
                url: 'https://prabir-caterers.in/images/Decoration/Decoration_Stage.webp'
            }
        },
        datePublished: post.date,
        description: post.excerpt
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostContent post={post} />
        </>
    );
}
