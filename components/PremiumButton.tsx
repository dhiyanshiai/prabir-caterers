import React from 'react';

interface PremiumButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
    variant = 'primary',
    children,
    href,
    onClick,
    className = '',
    ariaLabel
}) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-bold rounded-full overflow-hidden transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1 border-2 border-transparent hover:border-white",
        secondary: "glass border-2 border-white text-white hover:bg-white hover:text-velvet shadow-md hover:shadow-lg",
        ghost: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg"
    };

    const content = (
        <>
            <span className="relative z-10 flex items-center">
                {children}
            </span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                aria-label={ariaLabel}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {content}
        </button>
    );
};

export default PremiumButton;
