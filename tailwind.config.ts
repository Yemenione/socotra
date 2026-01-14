import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sand: {
                    50: '#FDFBF7',
                    100: '#F7F1E3',
                    200: '#EADBC8',
                    300: '#DEC4A6',
                    DEFAULT: '#D4B48F',
                    500: '#C69C6D',
                    600: '#A67C52',
                    900: '#5D4037',
                },
                gold: {
                    100: '#F9F1D8',
                    200: '#F0DEAA',
                    300: '#E6CB7D',
                    DEFAULT: '#D4AF37', // Classic metallic gold
                    500: '#C5A028',
                    600: '#A3841F',
                    700: '#826919',
                    800: '#634F13',
                    900: '#46380E',
                },
                "rich-black": "#0C0C0C",
                "deep-green": "#1A3C34", // Emerald luxury
            },
            fontFamily: {
                heading: ["var(--font-playfair)", "serif"],
                body: ["var(--font-inter)", "sans-serif"],
                arabic: ["var(--font-tajawal)", "sans-serif"],
            },
            boxShadow: {
                'lux-sm': '0 4px 6px -1px rgba(62, 39, 35, 0.05), 0 2px 4px -1px rgba(62, 39, 35, 0.03)',
                'lux-md': '0 10px 15px -3px rgba(62, 39, 35, 0.08), 0 4px 6px -2px rgba(62, 39, 35, 0.04)',
                'lux-lg': '0 20px 25px -5px rgba(62, 39, 35, 0.1), 0 10px 10px -5px rgba(62, 39, 35, 0.04)',
                'lux-xl': '0 25px 50px -12px rgba(212, 175, 55, 0.15)', // Golden glow
                'inner-gold': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.1)',
                '3d': '0px 10px 30px rgba(0,0,0,0.1), 0px 1px 3px rgba(0,0,0,0.05)',
                '3d-hover': '0px 20px 40px rgba(0,0,0,0.15), 0px 5px 15px rgba(0,0,0,0.1)',
            },
            backgroundImage: {
                "gradient-lux": "linear-gradient(135deg, #FDFBF7 0%, #F7F1E3 100%)",
                "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #F4C430 50%, #D4AF37 100%)",
                "shimmer": "linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 60%)",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "shimmer": "shimmer 2s infinite",
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                shimmer: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
