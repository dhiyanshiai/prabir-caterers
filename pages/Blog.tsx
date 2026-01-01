import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    image: string;
    readTime: string;
}

const blogPosts: BlogPost[] = [
    {
        slug: 'traditional-banarasi-wedding-guide',
        title: 'Planning a Traditional Banarasi Wedding: Complete Guide',
        excerpt: 'Discover the essential elements of a traditional Banarasi wedding, from rituals to catering. Learn how to blend age-old customs with modern elegance for your special day.',
        category: 'Wedding Planning',
        date: 'December 28, 2024',
        author: 'Prabir Da',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop',
        readTime: '8 min read'
    },
    {
        slug: 'top-10-banarasi-dishes',
        title: 'Top 10 Authentic Banarasi Dishes for Your Wedding Menu',
        excerpt: 'From Banarasi Dum Aloo to Malaiyyo, explore the must-have dishes that will make your wedding feast unforgettable. Traditional recipes with authentic flavors.',
        category: 'Banarasi Cuisine',
        date: 'December 25, 2024',
        author: 'Chef Team',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop',
        readTime: '6 min read'
    },
    {
        slug: 'choosing-perfect-caterer-varanasi',
        title: 'How to Choose the Perfect Wedding Caterer in Varanasi',
        excerpt: 'Expert tips on selecting the right caterer for your Varanasi wedding. What to look for, questions to ask, and red flags to avoid.',
        category: 'Wedding Tips',
        date: 'December 20, 2024',
        author: 'Prabir Da',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2938&auto=format&fit=crop',
        readTime: '7 min read'
    },
    {
        slug: 'ganga-aarti-theme-weddings',
        title: 'Ganga Aarti Theme Weddings: A Unique Varanasi Experience',
        excerpt: 'Create a magical wedding atmosphere inspired by the sacred Ganga Aarti. Decoration ideas, lighting, and spiritual elements for your special day.',
        category: 'Event Planning',
        date: 'December 15, 2024',
        author: 'Decoration Team',
        image: 'https://images.unsplash.com/photo-1609619385002-f40f2a4d6b00?q=80&w=2940&auto=format&fit=crop',
        readTime: '5 min read'
    },
    {
        slug: 'budget-planning-500-guest-wedding',
        title: 'Budget Planning for 500+ Guest Weddings in Varanasi',
        excerpt: 'Comprehensive budget breakdown for large weddings. Learn how to manage costs without compromising on quality, from catering to decoration.',
        category: 'Wedding Planning',
        date: 'December 10, 2024',
        author: 'Prabir Da',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop',
        readTime: '10 min read'
    }
];

const categories = ['All', 'Wedding Planning', 'Banarasi Cuisine', 'Event Planning', 'Wedding Tips'];

const Blog: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-ganga/10 to-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-royal via-velvet to-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
                            Insights & Tips
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Hamara Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 italic font-serif">
                            "Wedding planning tips, Banarasi traditions, and expert advice"
                        </p>
                    </div>
                </div>

                {/* Decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="fill-white w-full h-12 sm:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 bg-white sticky top-0 z-40 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-ganga/30 text-gray-700 hover:bg-ganga/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            <Tag size={14} />
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-royal mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <User size={16} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                            Read More
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-500">No posts found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-royal via-velvet to-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Plan Your Perfect Event?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Let our 40 years of experience guide you to create unforgettable memories
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919839553272"
                            className="bg-white text-royal px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300"
                        >
                            Contact Us Today
                        </a>
                        <Link
                            to="/services-detail"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-royal transition-all duration-300"
                        >
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
