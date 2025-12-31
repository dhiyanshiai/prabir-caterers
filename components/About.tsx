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
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-accent to-royal"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Intro Section - FIXED LAYOUT */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                            Banaras ki purani galiyon mein, jahan har patthar ek kahani sunata hai—
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            Banaras Ki purani galiyon mein Jahan har rivaaz humari zindagi ka hissa hai, hum samajte hai Ki shaadi ka Har ek pal Var - Vadhu aur unke parivar k liye bahut hi jyada khaas hai - yeh ek Woh pal hai jisme aap Jo karte ho Woh wapas nahi ho sakta
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4 max-w-4xl mx-auto">
                            <strong className="text-primary">1983 se</strong> humari yeh yatra shuru hui. Gonu Babu Katra ki rounak aur <strong className="text-royal">Pandey Haweli</strong> ki shaan, aaj bhi humare har kaam mein jhalakti hai.
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-accent mt-4">
                            'Attoot Vishwas'
                        </p>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12 mb-12 relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-accent to-royal rounded-l-2xl"></div>
                        <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed text-center">
                            "Humare yahan Har plate mein pyaar se Bhara Swadisht khana aur khub sara ashirwaad parosa jata hai"
                        </blockquote>
                        <p className="text-right mt-6 text-primary font-bold text-lg">
                            — Prabir Da (Nanu Da)
                        </p>
                    </div>
                </div>

                {/* Prabir Da ka Jadoo Section - FIXED: No overlapping */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-royal text-center mb-8">
                        Prabir Da ka Jadoo
                    </h2>

                    <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                            "Banaras ki purani galiyon mein, jahan rivaaz humari zindagi ka hissa hain, hum samajhte hain ki shaadi sirf ek karyakram nahi hai—ye wo pal hai jo wapas nahi aata."
                        </p>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-lg">
                                Namaskar, Main <strong className="text-royal text-xl">Prabir Mukherjee</strong> hoon, aur mera safar <strong className="text-primary">1983</strong> mein shuru hua.
                            </p>

                            <p>
                                Shuruwat behad sadharan thi, parivaar ke sahyog se. Kashi mein humne bartan kiraye (utensils on rent) par dene se shuru kiya. Par mujhe hamesha laga ki sirf saman dena kaafi nahi hai; mujhe logon ko sukoon dena tha. Dheere-dheere, behtar seva dene ki chahat ne humein aage badhaya. Humne bartan se shuru karke apne khud ke tents aur sajawat ka saman joda, jo aaj kisi bhi jagah ko ek shahi mandap mein badal sakta hai.
                            </p>

                            <p>
                                Ye 40 saal ka safar kisi 'rollercoaster' se kam nahi raha. Kabhi mandi, kabhi badalte fashion, aur kabhi shaadi ke season ka bhaari dabav. Par har chunauti mein ek cheez nahi badli—humari <strong className="text-accent">imaandari</strong> aur aapko behtareen dene ki koshish.
                            </p>

                            <p>
                                Bahut se clients kehte hain ki meri muskurahat meri pehchan hai. Sach kahun? Ye muskurahat tab aati hai jab main dekhta hoon ki ghar ka mukhiya (host) bina kisi chinta ke apni hi party enjoy kar raha hai. Jab main mehmano ko humare khane ki tareef karte sunta hoon, ya dulhan ki aankhon mein sajawat dekh kar chamak dekhta hoon—wohi meri asli kamayi hai. Aapke khaas palon ko aapke parivaar ke liye yaadgaar banana sirf mera kaam nahi, mera junoon hai.
                            </p>

                            <p className="text-lg font-semibold text-royal">
                                Aaj hum sirf ek Tent House nahi hain. Hum <strong className="text-primary">Premier Caterers</strong> hain jo Banarasi swaad paroste hain, aur <strong className="text-accent">Event Planners</strong> hain jo naye zamane ke themes ko bhi bakhoobi nibhate hain.
                            </p>

                            <p>
                                Humari neev paramparik hai, par soch nayi hai. Waqt ke saath hum bhi digital ho rahe hain taaki Banaras ke naye parivaron se jud sakein. Jab aap Prabir Caterers ko chunte hain, toh aap sirf ek vendor ko nahi, balki <strong className="text-primary">40 saal ke bharose</strong> aur ek <strong className="text-accent">koshish</strong> ko chunte hain jo aapke khaas din ko mukammal banati hai.
                            </p>

                            <p className="text-xl text-center font-bold text-royal mt-8">
                                Aaiye, is parampara ko aage badhayein—saath milkar.
                            </p>
                        </div>

                        {!showFullStory && (
                            <div className="text-center mt-8">
                                <button
                                    onClick={() => setShowFullStory(true)}
                                    className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-premium hover:shadow-premium-lg hover:bg-primary-dark transition-all duration-300"
                                >
                                    Puri Kahani Padhein
                                </button>
                            </div>
                        )}
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
