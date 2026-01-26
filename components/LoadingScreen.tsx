import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading progress
        const duration = 2000;
        const steps = 50;
        const increment = 100 / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setProgress(Math.min(increment * currentStep, 100));

            if (currentStep >= steps) {
                clearInterval(timer);
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-royal via-velvet to-royal flex items-center justify-center">
            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 pattern-overlay opacity-20"></div>

            {/* Animated Mandalas */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-dashed border-gold/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-dashed border-primary/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Logo/Brand */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="display-heading text-white drop-shadow-2xl mb-2">
                        <span className="block gradient-text-animated text-6xl md:text-7xl">Prabir</span>
                        <span className="block text-accent text-3xl md:text-4xl font-serif">Caterer</span>
                    </h1>
                    <p className="text-gray-300 font-serif italic mt-4 text-lg">Banaras ki Shaan • Est. 1983</p>
                </div>

                {/* Progress Bar */}
                <div className="w-64 md:w-96 mx-auto mb-6">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Loading Text */}
                <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">
                    {progress < 100 ? 'Tayyar ho raha hai...' : 'Swagat hai!'}
                </p>

                {/* Decorative Elements */}
                <div className="mt-12 flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-accent rounded-full animate-pulse-soft"
                            style={{ animationDelay: `${i * 200}ms` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
