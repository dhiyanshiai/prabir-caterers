'use client';

import React, { useState } from 'react';
import { Camera, Grid3x3, LayoutGrid } from 'lucide-react';
import Lightbox, { GalleryImage } from '../../components/Lightbox';
import { galleryImages } from '../../components/Gallery';

const GalleryContent: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'decoration' | 'food'>('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [layoutMode, setLayoutMode] = useState<'masonry' | 'grid'>('masonry');

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-ganga/10 to-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <Camera className="mx-auto text-primary mb-4" size={56} />
                    <h1 className="text-5xl md:text-6xl font-bold text-royal mb-4">
                        Complete Gallery
                    </h1>
                    <p className="text-xl text-primary font-serif italic mb-2">
                        Hamari Mehnat Ka Nateeja
                    </p>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        40+ saal ke experience ka result - har event mein excellence, har detail mein perfection
                    </p>
                </div>

                {/* Filters and Layout Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === 'all'
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                                }`}
                        >
                            All ({galleryImages.length})
                        </button>
                        <button
                            onClick={() => setSelectedCategory('decoration')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === 'decoration'
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                                }`}
                        >
                            🎨 Decoration ({galleryImages.filter(img => img.category === 'decoration').length})
                        </button>
                        <button
                            onClick={() => setSelectedCategory('food')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === 'food'
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                                }`}
                        >
                            🍽️ Food ({galleryImages.filter(img => img.category === 'food').length})
                        </button>
                    </div>

                    {/* Layout Toggle */}
                    <div className="flex gap-2 bg-white rounded-full p-1 shadow-md">
                        <button
                            onClick={() => setLayoutMode('masonry')}
                            className={`p-2 rounded-full transition-all ${layoutMode === 'masonry'
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            aria-label="Masonry layout"
                        >
                            <LayoutGrid size={20} />
                        </button>
                        <button
                            onClick={() => setLayoutMode('grid')}
                            className={`p-2 rounded-full transition-all ${layoutMode === 'grid'
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            aria-label="Grid layout"
                        >
                            <Grid3x3 size={20} />
                        </button>
                    </div>
                </div>

                {/* AI Disclaimer for Food Images */}
                {selectedCategory === 'food' && (
                    <div className="mb-6 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-4 shadow-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">ℹ️</span>
                                <div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        <span className="font-semibold text-blue-700">Transparency Note:</span> Food images shown here are AI-generated illustrations to showcase our menu variety.
                                        Our decoration photos are 100% real from actual events. We believe in building trust through honesty! 🙏
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Image Grid */}
                <div className={`grid gap-4 mb-8 ${layoutMode === 'masonry'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
                    }`}>
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${layoutMode === 'grid' ? 'h-64' : 'h-auto'
                                    }`}
                                loading="lazy"
                            />
                            {/* Category Badge */}
                            <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 rounded-full">
                                <span className="text-white text-xs font-semibold capitalize">
                                    {image.category}
                                </span>
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium line-clamp-2">{image.alt}</p>
                            </div>
                            {/* View Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 p-4 rounded-full">
                                    <Camera className="text-primary" size={32} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg">
                    <p className="text-gray-600 text-lg">
                        Showing <span className="font-bold text-primary">{filteredImages.length}</span> images
                        {selectedCategory !== 'all' && (
                            <span> in <span className="font-bold capitalize">{selectedCategory}</span> category</span>
                        )}
                    </p>
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                images={filteredImages}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setCurrentImageIndex}
            />
        </div>
    );
};

export default GalleryContent;
