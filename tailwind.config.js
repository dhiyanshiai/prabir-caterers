/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // PRIMARY BRAND COLORS - Semantic Naming
                primary: {
                    DEFAULT: '#FF9933',  // Marigold (Main CTA color)
                    light: '#FFB366',
                    dark: '#E68A00',
                    50: '#FFF5EB',
                    100: '#FFE5CC',
                    200: '#FFCC99',
                    300: '#FFB366',
                    400: '#FF9933',
                    500: '#FF9933',  // DEFAULT
                    600: '#E68A00',
                    700: '#CC7A00',
                    800: '#995C00',
                    900: '#663D00',
                },
                secondary: {
                    DEFAULT: '#C41E3A',  // Hibiscus (Accent color)
                    light: '#E74C64',
                    dark: '#8B1528',
                    50: '#FDF2F4',
                    100: '#FCE4E9',
                    200: '#F9C9D3',
                    300: '#F49BAC',
                    400: '#E74C64',
                    500: '#C41E3A',  // DEFAULT
                    600: '#A61831',
                    700: '#8B1528',
                    800: '#6D1020',
                    900: '#4F0B17',
                },
                accent: {
                    DEFAULT: '#FFD700',  // Gold (Sparkle/Highlight)
                    light: '#FFE44D',
                    dark: '#E6C200',
                },

                // LEGACY COLOR NAMES (For gradual migration)
                marigold: '#FF9933',
                hibiscus: '#C41E3A',
                gold: '#FFD700',
                rani: '#E1005C',
                royal: '#2E004F',
                velvet: '#800020',
                peacock: '#004953',
                ganga: '#E0F7FA',

                // NEUTRAL PALETTE (60% of design)
                neutral: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                    950: '#030712',
                },
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-up': 'slideUp 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                'scale-in': 'scaleIn 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                'ken-burns': 'kenBurns 25s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
                'spin-slow': 'spin 8s linear infinite',
                'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                kenBurns: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.10)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(255, 215, 0, 0.3)',
                'glow-lg': '0 0 40px rgba(255, 215, 0, 0.5)',
                'premium': '0 10px 40px rgba(0, 0, 0, 0.15)',
                'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.25)',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
}
