'use client';

import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const PhoneFloat: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const phoneNumber = '+919839553272';
    const telUrl = `tel:${phoneNumber}`;

    return (
        <div className="fixed bottom-6 left-6 z-50">
            {/* Ripple Effects - Behind the button */}
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 pointer-events-none" style={{ animationDelay: '0.5s' }}></div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute bottom-full left-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg whitespace-nowrap shadow-xl animate-fade-in z-10 pointer-events-none">
                    Call Prabir Da
                    <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
            )}

            {/* Phone Button - Clickable with high z-index */}
            <a
                href={telUrl}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-110 animate-bounce-slow cursor-pointer z-20"
                aria-label="Call Prabir Da directly - Click to call"
            >
                <Phone className="w-8 h-8 md:w-10 md:h-10 pointer-events-none" strokeWidth={2.5} />
            </a>
        </div>
    );
};

export default PhoneFloat;
