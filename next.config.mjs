/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Prevent 308 redirects that split ranking power
    trailingSlash: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        // Keep Unsplash for existing images, but prefer local images
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
        ],
    },
    // Enable compression for better performance
    compress: true,
    // Generate ETags for caching
    generateEtags: true,
    // Power off x-powered-by header for security
    poweredByHeader: false,
};

export default nextConfig;
