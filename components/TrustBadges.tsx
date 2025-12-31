import React from 'react';
import { Award, Users, Calendar, TrendingUp } from 'lucide-react';

const TrustBadges: React.FC = () => {
    const badges = [
        {
            icon: Calendar,
            value: "40+",
            label: "Years",
            subtitle: "Since 1983",
            color: "from-primary to-accent"
        },
        {
            icon: Users,
            value: "5000+",
            label: "Events",
            subtitle: "Successfully Served",
            color: "from-royal to-rani"
        },
        {
            icon: Award,
            value: "4.1★",
            label: "Rating",
            subtitle: "Justdial Reviews",
            color: "from-gold to-accent"
        },
        {
            icon: TrendingUp,
            value: "100%",
            label: "Trust",
            subtitle: "Customer Satisfaction",
            color: "from-accent to-secondary"
        }
    ];

    return (
        <div className="py-16 bg-gradient-to-r from-royal via-velvet to-royal relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 pattern-overlay opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Bharosa aur Sewa ka Pratik
                    </h2>
                    <p className="text-gray-200 font-serif italic">
                        Trust Built Over Decades
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
                        >
                            {/* Gradient border effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity`}></div>

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className={`p-3 rounded-full bg-gradient-to-br ${badge.color}`}>
                                    <badge.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                            </div>

                            {/* Value */}
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {badge.value}
                            </div>

                            {/* Label */}
                            <div className="text-lg font-semibold text-accent mb-1">
                                {badge.label}
                            </div>

                            {/* Subtitle */}
                            <div className="text-xs md:text-sm text-gray-300">
                                {badge.subtitle}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 items-center">
                    <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">✓ Verified on Justdial</span>
                    </div>
                    <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">✓ Listed on WedMeGood</span>
                    </div>
                    <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">✓ Family-Owned Business</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
