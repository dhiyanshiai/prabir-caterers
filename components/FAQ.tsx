import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How much does wedding catering cost in Varanasi?",
        answer: "Our catering packages start from ₹300 per plate for vegetarian and ₹500 per plate for non-vegetarian options. Final pricing depends on your menu selection, guest count, and specific event requirements. We offer customized packages to fit every budget. Contact us for a detailed, personalized quote for your special day."
    },
    {
        question: "Do you provide both veg and non-veg catering?",
        answer: "Yes! We specialize in authentic Banarasi cuisine with both pure vegetarian and non-vegetarian options. Our menu includes traditional favorites like Banarasi Dum Aloo, Dal Makhani, Paneer Lababdar, and special non-veg preparations. We can also create custom menus based on your preferences and dietary requirements."
    },
    {
        question: "What areas do you serve in Varanasi?",
        answer: "We serve all areas of Varanasi including Godowlia, Assi Ghat, Lanka, Sigra, Bhelupur, Nadesar, and surrounding regions. Since 1983, we've been the trusted choice for families across Varanasi. We also cater to events in nearby districts upon request."
    },
    {
        question: "How many guests can you cater for?",
        answer: "We can handle events of all sizes - from intimate family gatherings of 50 guests to grand weddings of 1500+ guests. Our experienced team and extensive resources ensure consistent quality and service regardless of your event size. We've successfully managed over 5000 events in our 40 years of service."
    },
    {
        question: "Do you provide tent and mandap decoration services?",
        answer: "Absolutely! We are a complete Tent House offering royal mandap setups, beautiful floral decorations, lighting arrangements, and themed decor. From traditional Banarasi phoolon ki holli to modern royal Rajwadi setups, we create stunning venues that match your vision and make your event memorable."
    },
    {
        question: "Can you customize menus for specific dietary requirements?",
        answer: "Yes, we offer fully customizable menus. Whether you need Jain food, pure sattvic preparations, specific regional cuisines, or fusion menus, our expert chefs can accommodate your requirements. We pride ourselves on flexibility and ensuring every guest enjoys authentic, delicious food."
    },
    {
        question: "How far in advance should I book your services?",
        answer: "For best availability, especially during wedding season (October to March), we recommend booking at least 2-3 months in advance. However, we do our best to accommodate last-minute requests as well. Contact us as soon as you finalize your event date to ensure we can serve you."
    },
    {
        question: "Do you provide staff for serving and event management?",
        answer: "Yes! Our complete event planning service includes trained serving staff, event coordinators, and management team. We handle everything from guest reception to food service coordination, allowing you and your family to relax and enjoy your special occasion without any stress."
    },
    {
        question: "What makes Prabir Caterers different from others?",
        answer: "With 40+ years of experience since 1983, we bring authentic Banarasi traditions combined with modern service excellence. Our founder Prabir Da (Nanu Da) personally oversees quality, and our reputation of trust is built on 5000+ successful events. We're not just vendors - we become part of your family celebration."
    },
    {
        question: "Do you offer package deals for complete wedding services?",
        answer: "Yes! We offer comprehensive wedding packages that include catering, tent house setup, mandap decoration, and event management. These packages are designed to give you the best value while ensuring a seamless, stress-free experience. Contact us to discuss a custom package tailored to your wedding needs and budget."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Schema.org FAQPage markup
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-white via-ganga/20 to-white relative overflow-hidden">
            {/* Schema markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #b8860b 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-royal mb-4">
                        Sawal-Jawab
                    </h2>
                    <p className="text-xl text-primary font-serif italic">
                        Frequently Asked Questions
                    </p>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Aapke mann mein jo bhi sawal hain, yahaan hum jawab dete hain
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 ${openIndex === index ? 'border-primary' : 'border-transparent'
                                }`}
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-ganga/20 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <ChevronUp className="h-6 w-6 text-primary" />
                                    ) : (
                                        <ChevronDown className="h-6 w-6 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            {/* Answer */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Aur koi sawaal? Hum yahaan hain aapki madad ke liye!
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300"
                    >
                        Hamse Sampark Karein
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
