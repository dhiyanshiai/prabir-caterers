'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import { BlogPost } from '../../../lib/markdown';

interface BlogPostContentProps {
    post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-ganga/10 to-white">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Back Button */}
                <Link
                    href="/blog"
                    className="absolute top-24 left-4 md:left-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-all inline-flex items-center gap-2"
                >
                    <ArrowLeft size={20} />
                    Back to Blog
                </Link>

                {/* Category Badge */}
                <div className="absolute top-24 right-4 md:right-8">
                    <span className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <Tag size={16} />
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Article Content */}
            <article className="container mx-auto px-4 -mt-20 relative z-10 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-royal mb-6">
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <User size={18} />
                            <span className="font-semibold">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6 text-lg" dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />

                    {/* CTA */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-royal mb-4">
                                Ready to Plan Your Perfect Event?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Let Prabir Caterers bring 40+ years of experience to your special day
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/919839553272"
                                    className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all"
                                >
                                    Contact Us on WhatsApp
                                </a>
                                <Link
                                    href="/services-detail"
                                    className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                                >
                                    View Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts Navigation */}
                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg"
                    >
                        <ArrowLeft size={20} />
                        View All Blog Posts
                    </Link>
                </div>
            </article>

            {/* Bottom Spacing */}
            <div className="h-20"></div>
        </div>
    );
};

export default BlogPostContent;
