import { MetadataRoute } from 'next';
import { getSortedPostsData } from '../lib/markdown';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://prabir-caterers.in';

    const blogPosts = getSortedPostsData().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const staticLastMod = new Date('2026-01-26');

    return [
        {
            url: baseUrl,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/wedding-caterer-varanasi`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tent-house-varanasi`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/corporate-catering-varanasi`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services-detail`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/our-story`,
            lastModified: staticLastMod,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...blogPosts,
    ];
}
