import React, { useState } from 'react';
import { X } from 'lucide-react';

const About: React.FC = () => {
    const [showFullStory, setShowFullStory] = useState(false);
    const [countersVisible, setCountersVisible] = useState(false);
    const [yearsCount, setYearsCount] = useState(0);
    const [familiesCount, setFamiliesCount] = useState(0);

    // Animated counters
    React.useEffect(() => {
        if (!countersVisible) return;

        const yearsTarget = 40;
        const familiesTarget = 5000;
        const duration = 2000;
        const steps = 60;
        const yearsIncrement = yearsTarget / steps;
        const familiesIncrement = familiesTarget / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setYearsCount(Math.min(Math.floor(yearsIncrement * currentStep), yearsTarget));
            setFamiliesCount(Math.min(Math.floor(familiesIncrement * currentStep), familiesTarget));

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [countersVisible]);

    // Intersection Observer for counters
    React.useEffect(() => {
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

    return (
        <div id="about" className="py-24 bg-ganga/30 relative overflow-hidden">
            {/* Decorative elements - Mandalas/Circles */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-marigold via-rani to-royal"></div>
            <div className="absolute -left-20 top-40 w-96 h-96 rounded-full bg-rani mix-blend-multiply filter blur-[80px] opacity-10"></div>
            <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-marigold mix-blend-multiply filter blur-[80px] opacity-15"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

                    {/* Text Content */}
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 pt-12 lg:pt-0">
                        <h2 className="label-text text-secondary mb-3">Virasat aur Vishwas</h2>
                        <h3 className="section-heading text-royal mb-6">
                            Hamari Kahani, <br />Gonu Babu Katra ki <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rani">Zubaani</span>
                        </h3>
                        <p className="body-large text-neutral-700 font-serif leading-relaxed">
                            Kashi ki purani galiyan mein, jahan har pathar ek kahani sunata hai—<strong className="text-royal">1983 se</strong> humari yeh yatra shuru hui. Gonu Babu Katra ki ronak aur <strong className="text-royal">Pandey Haweli</strong> ki shaan, aaj bhi humare har kaam mein jhalakti hai.
                        </p>
                        <p className="body-text text-neutral-600 mt-6 leading-relaxed">
                            Prabir Da ne shuruwat ek choti si soch se ki thi—"Atithi Devo Bhava". Aaj woh soch Banaras ke hazaron parivaron ka <strong className="text-rani">'Attoot Vishwas'</strong> ban gayi hai.
                        </p>

                        <button
                            onClick={() => setShowFullStory(true)}
                            aria-label="Read full story of Prabir Caterers journey since 1983"
                            className="mt-6 inline-block text-primary font-bold text-lg border-b-2 border-primary hover:text-royal hover:border-royal transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                            Puri Kahani Padhein (Read Full Story)
                        </button>

                        <div className="mt-8 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-l-8 border-rani relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-rani"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19922V21H14.017ZM12.017 14C13.1216 14 14.017 13.1046 14.017 12V4H5.19922V14H12.017ZM16.017 4V21H20.017V4H16.017Z" /></svg>
                            </div>
                            <p className="body-large text-neutral-800 italic font-serif z-10 relative">
                                "Shaadi mein khana sirf pet bharne ke liye nahi, dil jeetne ke liye hota hai. Humare yahan har plate mein aashirwad parosa jata hai."
                            </p>
                            <div className="mt-4 flex items-center">
                                <div className="h-1 w-12 bg-primary mr-4"></div>
                                <p className="label-text text-royal">Prabir Da</p>
                            </div>
                        </div>

                        <div id="stats-section" className="mt-10 flex gap-12 border-t border-gray-200 pt-8">
                            <div>
                                <span className={`block text-5xl font-black text-velvet font-serif ${countersVisible ? 'counter-animate' : ''}`}>
                                    {yearsCount}+
                                </span>
                                <span className="text-gray-600 font-medium tracking-wide uppercase text-sm mt-1 block">Saal ka Anubhav</span>
                            </div>
                            <div>
                                <span className={`block text-5xl font-black text-velvet font-serif ${countersVisible ? 'counter-animate' : ''}`}>
                                    {familiesCount > 1000 ? `${Math.floor(familiesCount / 1000)}k` : familiesCount}+
                                </span>
                                <span className="text-gray-600 font-medium tracking-wide uppercase text-sm mt-1 block">Khush Parivaar</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Content - Polaroid Style Stack */}
                    <div className="col-span-12 lg:col-span-5 relative order-1 lg:order-2 h-[500px] flex items-center justify-center">

                        {/* Back Image */}
                        <div className="absolute top-10 right-0 w-72 h-80 bg-white p-2 shadow-xl transform rotate-6 hover:rotate-12 transition-all duration-500 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=2874"
                                className="w-full h-full object-cover filter sepia-[.3]"
                                alt="Vintage style wedding"
                            />
                        </div>

                        {/* Front Image */}
                        <div className="absolute w-80 h-96 bg-white p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 z-20 border border-gray-100 rounded-sm">
                            <div className="w-full h-[85%] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1561587669-83c9b7430547?q=80&w=2840&auto=format&fit=crop"
                                    alt="Vibrant Purple Wedding Stage Decoration"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="h-[15%] flex items-center justify-center">
                                <p className="font-handwriting text-gray-500 font-serif italic text-lg">Prabir Da ka Jadoo</p>
                            </div>
                        </div>

                        {/* Decorative Circle behind */}
                        <div className="absolute w-64 h-64 border-4 border-dashed border-marigold/30 rounded-full animate-spin-slow -z-10"></div>
                    </div>

                </div>
            </div>

            {/* Full Story Modal */}
            {showFullStory && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowFullStory(false)}></div>
                    <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden relative z-10 animate-slide-up shadow-2xl max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setShowFullStory(false)}
                            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-all z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative h-48 sm:h-56">
                            <img
                                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2940&auto=format&fit=crop"
                                className="w-full h-full object-cover"
                                alt="Kashi Vishwanath Temple, Varanasi"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-8">
                                <div>
                                    <span className="label-text text-accent mb-2 block">Since 1983</span>
                                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                                        Jashn ke Peeche ka Dil:<br />40 Saal ki Virasat
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 sm:p-10 prose prose-lg max-w-none font-serif text-gray-700 leading-relaxed">
                            <p className="lead text-xl text-royal font-medium italic mb-6 border-l-4 border-marigold pl-4">
                                "Banaras ki purani galiyon mein, jahan rivaaz humari zindagi ka hissa hain, hum samajhte hain ki shaadi sirf ek karyakram nahi hai—ye wo pal hai jo wapas nahi aata."
                            </p>

                            <p className="mb-4">
                                Namaskar, Main <strong>Prabir Mukherjee</strong> hoon, aur mera safar <strong>1983</strong> mein shuru hua.
                            </p>

                            <p className="mb-4">
                                Shuruwat behad sadharan thi, parivaar ke sahyog se. Kashi mein humne bartan kiraye (utensils on rent) par dene se shuru kiya. Par mujhe hamesha laga ki sirf saman dena kaafi nahi hai; mujhe logon ko sukoon dena tha. Dheere-dheere, behtar seva dene ki chahat ne humein aage badhaya. Humne bartan se shuru karke apne khud ke tents aur sajawat ka saman joda, jo aaj kisi bhi jagah ko ek shahi mandap mein badal sakta hai.
                            </p>

                            <h3 className="text-2xl text-royal font-bold mt-8 mb-4">Ek Rollercoaster Safar</h3>
                            <p className="mb-4">
                                Ye 40 saal ka safar kisi 'rollercoaster' se kam nahi raha. Kabhi mandi, kabhi badalte fashion, aur kabhi shaadi ke season ka bhaari dabav. Par har chunauti mein ek cheez nahi badli—humari <strong>imaandari</strong> aur aapko behtareen dene ki koshish.
                            </p>

                            <h3 className="text-2xl text-royal font-bold mt-8 mb-4">Meri Muskurahat ka Raaz</h3>
                            <p className="mb-4">
                                Bahut se clients kehte hain ki meri muskurahat meri pehchan hai. Sach kahun? Ye muskurahat tab aati hai jab main dekhta hoon ki ghar ka mukhiya (host) bina kisi chinta ke apni hi party enjoy kar raha hai. Jab main mehmano ko humare khane ki tareef karte sunta hoon, ya dulhan ki aankhon mein sajawat dekh kar chamak dekhta hoon—wohi meri asli kamayi hai. Aapke khaas palon ko aapke parivaar ke liye yaadgaar banana sirf mera kaam nahi, mera junoon hai.
                            </p>

                            <h3 className="text-2xl text-royal font-bold mt-8 mb-4">Nayi Soch, Wahi Bharosa</h3>
                            <p className="mb-4">
                                Aaj hum sirf ek Tent House nahi hain. Hum <strong>Premier Caterers</strong> hain jo Banarasi swaad paroste hain, aur <strong>Event Planners</strong> hain jo naye zamane ke themes ko bhi bakhoobi nibhate hain.
                            </p>
                            <p className="mb-4">
                                Humari neev paramparik hai, par soch nayi hai. Waqt ke saath hum bhi digital ho rahe hain taaki Banaras ke naye parivaron se jud sakein. Jab aap Prabir Caterers ko chunte hain, toh aap sirf ek vendor ko nahi, balki <strong>40 saal ke bharose</strong> aur ek <strong>koshish</strong> ko chunte hain jo aapke khaas din ko mukammal banati hai.
                            </p>

                            <div className="mt-10 pt-10 border-t border-neutral-200 text-center">
                                <p className="body-large font-bold text-royal mb-4">Aaiye, is parampara ko aage badhayein</p>
                                <a
                                    href="#contact"
                                    onClick={() => setShowFullStory(false)}
                                    aria-label="Contact Prabir Caterers to book your event"
                                    className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                                >
                                    Sampark Karein
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default About;