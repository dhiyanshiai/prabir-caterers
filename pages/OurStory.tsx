import React, { useState } from 'react';
import { Award, Users, Heart, TrendingUp, Calendar, MapPin } from 'lucide-react';

const OurStory: React.FC = () => {
    const [countersVisible, setCountersVisible] = useState(false);
    const [yearsCount, setYearsCount] = useState(0);
    const [eventsCount, setEventsCount] = useState(0);

    // Animated counters
    React.useEffect(() => {
        if (!countersVisible) return;

        const yearsTarget = 40;
        const eventsTarget = 5000;
        const duration = 2000;
        const steps = 60;
        const yearsIncrement = yearsTarget / steps;
        const eventsIncrement = eventsTarget / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setYearsCount(Math.min(Math.floor(yearsIncrement * currentStep), yearsTarget));
            setEventsCount(Math.min(Math.floor(eventsIncrement * currentStep), eventsTarget));

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [countersVisible]);

    // Intersection Observer for counters
    React.useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !countersVisible) {
                        setCountersVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const statsElement = document.getElementById('stats-section');
        if (statsElement) observer.observe(statsElement);

        return () => observer.disconnect();
    }, [countersVisible]);

    const milestones = [
        { year: '1983', title: 'Shuruwat', description: 'Gonu Babu Katra se bartan kiraye ka vyapar shuru kiya' },
        { year: '1990', title: 'Catering Shuru', description: 'Authentic Banarasi cuisine catering services launch' },
        { year: '2000', title: 'Modern Decoration', description: 'Modernised decoration and tent house services in the Gen Z era' },
        { year: '2010', title: 'Event Planning', description: 'Full-service event management and coordination' },
        { year: '2020', title: 'Digital Era', description: 'Online presence and modern booking systems' },
        { year: '2024', title: '5000+ Events', description: '40 years of trust and excellence in Varanasi' }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Atithi Devo Bhava',
            description: 'Guests are like gods - we serve with devotion and respect'
        },
        {
            icon: Award,
            title: 'Quality First',
            description: 'No compromise on ingredients, taste, or service excellence'
        },
        {
            icon: Users,
            title: 'Family Approach',
            description: 'We become part of your celebration, not just vendors'
        },
        {
            icon: TrendingUp,
            title: 'Continuous Innovation',
            description: 'Traditional values with modern themes and technology'
        }
    ];

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
                            Since 1983
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Hamari Kahani
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 italic font-serif mb-4">
                            "40 saal ka safar, vishwas aur pyaar ka"
                        </p>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            From Gonu Babu Katra to becoming Varanasi's most trusted caterer - the journey of Prabir Da
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

            {/* Stats Section */}
            <section id="stats-section" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-6xl font-bold text-primary mb-3">
                                {yearsCount}+
                            </div>
                            <div className="text-xl text-gray-700 font-semibold">
                                Years of Excellence
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                                Since 1983
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold text-accent mb-3">
                                {eventsCount}+
                            </div>
                            <div className="text-xl text-gray-700 font-semibold">
                                Successful Events
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                                Happy families
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold text-royal mb-3">
                                100%
                            </div>
                            <div className="text-xl text-gray-700 font-semibold">
                                Authentic Banarasi
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                                Traditional recipes
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-royal text-center mb-12">
                            Prabir Da ki Kahani
                        </h2>

                        <div className="bg-white rounded-3xl shadow-premium p-8 md:p-12 mb-12">
                            <blockquote className="text-2xl text-gray-800 italic leading-relaxed text-center mb-6 border-l-4 border-primary pl-6">
                                "Humare yahan har plate mein pyaar se bhara swadisht khana aur khub sara ashirwaad parosa jata hai"
                            </blockquote>
                            <p className="text-right text-primary font-bold text-lg">
                                — Prabir Da (Nanu Da)
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Namaskar, Main <strong className="text-royal text-xl">Prabir Mukherjee</strong> hoon, aur mera safar <strong className="text-primary">1983</strong> mein shuru hua.
                            </p>

                            <p>
                                Shuruwat behad sadharan thi, parivaar ke sahyog se. Kashi mein humne bartan kiraye (utensils on rent) par dene se shuru kiya. Par mujhe hamesha laga ki sirf saman dena kaafi nahi hai; mujhe logon ko sukoon dena tha. Dheere-dheere, behtar seva dene ki chahat ne humein aage badhaya.
                            </p>

                            <p>
                                Ye 40 saal ka safar kisi 'rollercoaster' se kam nahi raha. Kabhi mandi, kabhi badalte fashion, aur kabhi shaadi ke season ka bhaari dabav. Par har chunauti mein ek cheez nahi badli—humari <strong className="text-accent">imaandari</strong> aur aapko behtareen dene ki koshish.
                            </p>

                            <p>
                                Bahut se clients kehte hain ki meri muskurahat meri pehchan hai. Sach kahun? Ye muskurahat tab aati hai jab main dekhta hoon ki ghar ka mukhiya (host) bina kisi chinta ke apni hi party enjoy kar raha hai. Jab main mehmano ko humare khane ki tareef karte sunta hoon, ya dulhan ki aankhon mein sajawat dekh kar chamak dekhta hoon—wohi meri asli kamayi hai.
                            </p>

                            <p className="text-xl font-bold text-primary text-center py-6 bg-ganga/20 rounded-xl">
                                40 saal ka safar aasan nahi tha, par har mushkil ne humein majboot banaya.
                            </p>

                            <p>
                                Aaj jab main peeche mud kar dekhta hoon, toh 5000+ shadiyan yaad aati hain. Har shaadi ek naya experience thi. Kabhi kisi ne humse Ganga Aarti theme maangi, toh kabhi Royal Rajwada setup. Kabhi traditional Banarasi thali, toh kabhi modern fusion menu. Har zaroorat ko humne pura karne ki koshish ki.
                            </p>

                            <p>
                                Meri team aaj mere saath hai—kuch log toh shuruwat se hi hain. Unka dedication, unka pyaar, aur unki mehnat hi Prabir Caterers ki asli taakat hai. Main akela kuch nahi hoon; hum sab milkar ek parivaar hain jo aapke parivaar ki khushi ke liye kaam karta hai.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gradient-to-b from-ganga/20 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-royal text-center mb-16">
                        Humara Safar
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative mb-12 last:mb-0">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
                                            <Calendar size={32} />
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
                                        <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                                        <h3 className="text-2xl font-bold text-royal mb-2">{milestone.title}</h3>
                                        <p className="text-gray-700">{milestone.description}</p>
                                    </div>
                                </div>
                                {index < milestones.length - 1 && (
                                    <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-accent opacity-30" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-royal text-center mb-16">
                        Hamari Mulya
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-premium p-8 hover:shadow-premium-lg transition-all">
                                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                                    <value.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-royal mb-3">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gradient-to-b from-white to-ganga/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-premium p-8 md:p-12">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <MapPin className="text-primary" size={40} />
                            <h2 className="text-3xl md:text-4xl font-bold text-royal">
                                Hamara Seva Kshetra
                            </h2>
                        </div>
                        <p className="text-center text-gray-600 mb-8 text-lg">
                            Serving all areas across Varanasi with pride
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Godowlia", "Assi Ghat", "Lanka", "Sigra",
                                "Bhelupur", "Nadesar", "Pandeypur", "Sonarpura",
                                "Kabir Chaura", "Maldahiya", "Lahurabir", "Chetganj"
                            ].map((area, idx) => (
                                <div key={idx} className="px-4 py-3 bg-ganga/30 rounded-lg hover:bg-primary/10 transition-colors text-center">
                                    <span className="text-gray-800 font-semibold">📍 {area}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-6 text-gray-600 italic">
                            ...and all other areas across Varanasi!
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-royal via-velvet to-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Aaiye, Milkar Banayein Aapke Din Ko Khaas
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        40 years of trust, tradition, and excellence. Let us be part of your special celebration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919839553272"
                            className="bg-white text-royal px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                            WhatsApp par Baat Karein
                        </a>
                        <a
                            href="tel:+919839553272"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-royal transition-all duration-300"
                        >
                            Call: +91 98395 53272
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
