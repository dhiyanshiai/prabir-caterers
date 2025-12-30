import React from 'react';
import { Star, MapPin, Quote, MessageCircle } from 'lucide-react';
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
  }
];

const Testimonials: React.FC = () => {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
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