import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: GalleryImage[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export interface GalleryImage {
    src: string;
    alt: string;
    category: 'decoration' | 'food';
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
    if (!isOpen) return null;

    const currentImage = images[currentIndex];
    const handlePrevious = () => {
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    // Prevent body scroll when lightbox is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all z-50 group"
                aria-label="Close lightbox"
            >
                <X className="text-white group-hover:rotate-90 transition-transform" size={28} />
            </button>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-primary/90 rounded-full z-50">
                <span className="text-white font-semibold capitalize">
                    {currentImage.category}
                </span>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full z-50">
                <span className="text-white font-semibold">
                    {currentIndex + 1} / {images.length}
                </span>
            </div>

            {/* Previous Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                }}
                className="absolute left-4 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all z-50 group"
                aria-label="Previous image"
            >
                <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" size={32} />
            </button>

            {/* Next Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                }}
                className="absolute right-4 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all z-50 group"
                aria-label="Next image"
            >
                <ChevronRight className="text-white group-hover:translate-x-1 transition-transform" size={32} />
            </button>

            {/* Image */}
            <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default Lightbox;
