import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-accent to-royal"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Intro Section */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold text-royal mb-6">
                            Hamari Kahani
                        </h2>
                        <p className="text-xl text-primary font-serif italic mb-4">
                            Our Story
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6 max-w-3xl mx-auto">
                            Banaras ki purani galiyon mein, jahan har rivaaz humari zindagi ka hissa hai—
                        </p>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12 mb-12 relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-accent to-royal rounded-l-2xl"></div>
                        <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed text-center">
                            "Humare yahan har plate mein pyaar se bhara swadisht khana aur khub sara ashirwaad parosa jata hai"
                        </blockquote>
                        <p className="text-right mt-6 text-primary font-bold text-lg">
                            — Prabir Da (Nanu Da)
                        </p>
                    </div>

                    {/* Brief Introduction with Photo */}
                    <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12">
                        {/* Founder Photo and Introduction */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            {/* Photo */}
                            <div className="relative flex-shrink-0">
                                <img
                                    src="/images/prabir-da.webp"
                                    alt="Prabir Mukherjee (Prabir Da) - Founder of Prabir Caterers since 1983"
                                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gold shadow-2xl"
                                    loading="lazy"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-accent to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Est. 1983
                                </div>
                            </div>

                            {/* Introduction Text */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-royal mb-2">Prabir Mukherjee</h3>
                                <p className="text-lg text-primary italic mb-4">Founder</p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Namaskar, Main <strong className="text-royal text-xl">Prabir Mukherjee</strong> hoon. 40 saal se Banaras ki shadiyon aur jashn mein shaamil hoon. Humne bartan kiraye se shuru karke aaj ek complete catering, decoration aur event planning service bana di hai. <strong className="text-accent">Banarasi aur Bengali cuisines</strong> mein humari khaas maharat hai.
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <strong className="text-primary text-xl">1983 se</strong> humari yeh yatra shuru hui. Gonu Babu Katra ki rounak aur <strong className="text-royal">Pandey Haweli</strong> ki shaan, aaj bhi humare har kaam mein jhalakti hai.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Har shaadi ek naya safar hai, aur hum uske har mod par aapke saath hain. Humari neev paramparik hai, par soch nayi hai. <strong className="text-accent">Atithi Devo Bhava</strong> - yahi humara mantra hai.
                        </p>

                        <div className="text-center">
                            <Link
                                to="/our-story"
                                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300"
                            >
                                Puri Kahani Padhein →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div id="stats-section" className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-premium p-8 text-center transform hover:scale-105 transition-all">
                        <div className="text-6xl font-bold text-primary mb-3">
                            {yearsCount}+
                        </div>
                        <div className="text-xl text-gray-700 font-semibold">
                            Saal ka Anubhav
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            1983 se aapki seva mein
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-premium p-8 text-center transform hover:scale-105 transition-all">
                        <div className="text-6xl font-bold text-accent mb-3">
                            {familiesCount}+
                        </div>
                        <div className="text-xl text-gray-700 font-semibold">
                            Khush Parivaar
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            Jinki shaadi humare saath hui
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
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

            {/* Full Story Modal */}
            {showFullStory && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl relative">
                        <button
                            onClick={() => setShowFullStory(false)}
                            className="sticky top-4 float-right mr-4 mt-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Close story"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12 clear-both">
                            <h2 className="text-4xl font-bold text-royal mb-8 text-center">
                                Prabir Da ki Puri Kahani
                            </h2>

                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p className="text-xl italic text-center mb-8">
                                    "Har shaadi ek naya safar hai, aur hum uske har mod par aapke saath hain."
                                </p>

                                {/* Add your full story content here */}
                                <p>
                                    Yeh kahani hai ek sapne ki, jo Kashi ki galiyon se shuru hui aur aaj hazaron parivaron tak pahunchi hai. Main Prabir Mukherjee, jab pehli baar 1983 mein is vyapar mein aaya, toh mere paas na bade resources the, na koi badi team. Bas ek chota sa sapna tha—logon ki khushi mein shaamil hona.
                                </p>

                                <p>
                                    Shuruwat bartan kiraye par dene se hui. Gonu Babu Katra aur Pandey Haweli ke aas-paas, jahan Banaras ki asli ronak basti hai, wahan se humne apni pehli seedhi chadhi. Har shaadi mein, har function mein, main khud jaata tha. Saman pohchana, dekh-rekh karna, aur sab kuch theek se ho raha hai ya nahi—ye sab mere haathon se hota tha.
                                </p>

                                <p>
                                    Dheere-dheere logon ka vishwas badhta gaya. Ek din ek client ne kaha, "Prabir Da, bartan toh aap de dete ho, par khana bhi aap hi bana do na!" Bas, wohi din tha jab humne catering shuru ki. Banarasi khaane ka asli swaad—jo ghar mein banta hai—wahi swaad hum apne clients tak le jaane lage.
                                </p>

                                <p>
                                    Aur phir aaya decor ka daur. Shaadi sirf khaane aur bartan se nahi hoti, usmein sajawat ka bhi bada haath hota hai. Humne tent house ka kaam shuru kiya. Phoolon se lekar lights tak, har cheez ko hum itni khubsurti se sajate the ki log kehte the, "Yeh toh swarg lag raha hai!"
                                </p>

                                <p className="text-xl font-bold text-primary text-center py-4">
                                    40 saal ka safar aasan nahi tha, par har mushkil ne humein majboot banaya.
                                </p>

                                <p>
                                    Kabhi mandi aayi, toh kabhi competition badha. Kabhi season kharab raha, toh kabhi expectations bahut zyada ho gayin. Par har waqt ek cheez constant rahi—humari commitment. Hum kabhi bhi quality se compromise nahi kiye. Chahe wo khane ka swaad ho, ya sajawat ki khubsurti, ya phir service ka level—sab kuch best dene ki koshish.
                                </p>

                                <p>
                                    Aaj jab main peeche mud kar dekhta hoon, toh 5000+ shadiyan yaad aati hain. Har shaadi ek naya experience thi. Kabhi kisi ne humse Ganga Aarti theme maangi, toh kabhi Royal Rajwada setup. Kabhi traditional Banarasi thali, toh kabhi modern fusion menu. Har zaroorat ko humne pura karne ki koshish ki.
                                </p>

                                <p>
                                    Meri team aaj mere saath hai—kuch log toh shuruwat se hi hain. Unka dedication, unka pyaar, aur unki mehnat hi Prabir Caterers ki asli taakat hai. Main akela kuch nahi hoon; hum sab milkar ek parivaar hain jo aapke parivaar ki khushi ke liye kaam karta hai.
                                </p>

                                <p className="text-center text-2xl font-bold text-royal py-6">
                                    Ab Digital Zamane Mein Bhi Aapke Saath
                                </p>

                                <p>
                                    Waqt badal raha hai, aur hum bhi badalte ja rahe hain. Aaj humari website hai, social media hai, aur online booking system bhi aa raha hai. Par humara mool mantra wahi hai—<strong>"Atithi Devo Bhava"</strong>. Aap hamari priority hain, aur rahenge bhi.
                                </p>

                                <p>
                                    Jab aap Prabir Caterers ko chunte hain, toh aap sirf ek service provider ko nahi, balki 40 saal ke vishwas, anubhav, aur pyaar ko chunte hain. Hum aapke sapnon ko poora karne ke liye tayyar hain.
                                </p>

                                <p className="text-center text-xl italic text-accent py-4">
                                    Aaiye, milkar banayein aapke khaas din ko aur bhi khaas!
                                </p>
                            </div>

                            <div className="text-center mt-8">
                                <a
                                    href="#contact"
                                    onClick={() => setShowFullStory(false)}
                                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300"
                                >
                                    Abhi Sampark Karein
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
