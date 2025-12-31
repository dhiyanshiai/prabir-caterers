import React, { useState, useEffect } from 'react';
import { Star, MapPin, Quote, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul & Anjali Gupta",
    text: "Prabir Da ne meri behen ki shaadi mein chaar chand laga diye! The Banarasi counter was magical—sab ungliyan chaat te reh gaye.",
    source: "Google",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Srivastava",
    text: "Ekdum honest service. Baarish thi, par Prabir Da ka tent 'angad ke pair' ki tarah jama raha. Team ne ghar walo jaisa kaam kiya.",
    source: "Justdial",
    rating: 5
  },
  {
    id: 3,
    name: "Amitabh Singh",
    text: "Best caterer in Varanasi hands down. Khana was not just tasty, it was pure emotion. Authentic Banarasi taste.",
    source: "Google",
    rating: 5
  },
  {
    id: 4,
    name: "Priya & Vikrant Sharma",
    text: "Mandap decoration was breathtaking! Dulhan ki khushi dekh kar lagta hai sab kuch perfect tha. Dhanyawad Prabir Ji!",
    source: "Google",
    rating: 5
  },
  {
    id: 5,
    name: "Rajesh Verma",
    text: "40 saal ka experience dikh raha tha har cheez mein. Event management ekdum seamless, guests bahut khush the.",
    source: "Justdial",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  // Calculate which reviews to show (show 3 at a time on desktop)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentSlide + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div id="reviews" className="bg-velvet py-24 text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-rani/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/40 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Quote className="h-10 w-10 text-gold" />
          </div>
          <h2 className="section-heading text-accent font-serif mb-6 drop-shadow-lg">
            Apno Ka Ashirwad
          </h2>
          <p className="body-large text-gray-300 max-w-2xl mx-auto font-serif italic">
            "Sirf client nahi, parivaar ban jate hain hum."
          </p>

          {/* Justdial Rating Badge */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-4 bg-white/10 px-6 py-4 rounded-full backdrop-blur border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="fill-gold text-gold h-5 w-5" />
                ))}
                <Star className="fill-gold/50 text-gold h-5 w-5" />
              </div>
              <span className="text-2xl font-bold text-white">4.1</span>
              <span className="text-gray-300">|</span>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">150+ Reviews</div>
                <div className="text-xs text-gray-300">Justdial & Local Platforms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className={`bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 ${idx === 1 ? 'md:scale-105' : ''
                  }`}
              >
                <div className="absolute -top-5 -right-2 bg-gradient-to-r from-marigold to-gold text-royal text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider transform rotate-3 group-hover:rotate-0 transition-transform">
                  {review.source}
                </div>

                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current drop-shadow-sm" />
                  ))}
                </div>

                <p className="body-text text-gray-100 italic mb-8 font-serif">"{review.text}"</p>

                <div className="flex items-center pt-6 border-t border-white/10">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold to-marigold flex items-center justify-center text-royal font-bold font-serif text-2xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-white font-serif text-lg">{review.name}</p>
                    <p className="label-text text-accent/80 flex items-center mt-1">
                      <MapPin size={12} className="mr-1" /> Varanasi
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentSlide
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action for Review linked to WhatsApp */}
        <div className="mt-20 text-center">
          <p className="text-white/60 label-text mb-4">Kya humne aapki seva ki hai?</p>
          <a
            href="https://wa.me/919839553272?text=Namaste%20Prabir%20Da,%20I%20want%20to%20give%20feedback%20for%20your%20services."
            aria-label="Share your feedback about our services on WhatsApp"
            className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-velvet transition-all duration-300 font-bold tracking-wide text-lg shadow-glow hover:shadow-glow-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <MessageCircle className="mr-2" />
            Apna Ashirwad Dein (WhatsApp)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;