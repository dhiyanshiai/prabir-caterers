import React from 'react';
import { ArrowRight } from 'lucide-react';

const Welcome: React.FC = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-1 gap-8 items-center text-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-4">
                            Since 1983
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Prabir Caterer & Tent House <br />
                            <span className="text-primary">Best Wedding Caterers in Varanasi</span>
                        </h2>

                        <div className="prose prose-lg mx-auto text-gray-600 mb-8">
                            <p className="mb-4">
                                Welcome to <strong>Prabir Caterer & Tent House</strong>, your trusted partner for creating unforgettable celebrations in the heart of Varanasi. Since 1983, we have been dedicated to upholding the finest traditions of hospitality under the guidance of <strong>Prabir Da (Nanu Da)</strong>. Our philosophy, "Rishton ki Parampara," reflects our commitment to treating every event as a family milestone.
                            </p>

                            <p className="mb-4">
                                Whether you are searching for the <strong className="text-primary">best wedding caterers in Varanasi</strong> or a reliable tent house for your special day, we bring the true flavors of Banaras to your table. Located in <strong>Gonu Babu Katra</strong>, we have specialized in authentic Banarasi and Bengali cuisine and royal event decorations for over four decades.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 shadow-sm transition-all hover:shadow-md cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 text-primary">Authentic Banarasi & Bengali Cuisine</h2>
                                <p className="text-gray-600 text-sm">
                                    We specialize in authentic Banarasi and Bengali cuisine, prepared with the freshest ingredients and traditional recipes perfected over 40 years. From the first bite to the last, we ensure your guests experience the best catering services in Varanasi.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 shadow-sm transition-all hover:shadow-md cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 text-primary">Royal Tent & Decor</h2>
                                <p className="text-gray-600 text-sm">
                                    We don't just serve food; we create an atmosphere. From elegant mandap decorations that echo the spiritual beauty of the Ghats to complete event planning, we handle every detail with precision. "Ghat ki hawa, Shehnai ki goonj."
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-900 mb-3">Trusted in Katra</h2>
                                <p className="text-gray-600 text-sm">
                                    With over 40 years of experience, we understand the local nuances of Varanasi weddings. Located in Gonu Babu Katra, we have built a reputation for reliability, quality, and personalized service that is unmatched.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
