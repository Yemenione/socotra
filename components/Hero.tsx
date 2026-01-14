"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const Hero = () => {
    const ref = useRef(null);
    const { language, dir } = useLanguage();
    const t = translations[language].hero;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center" dir={dir}>

            {/* Cinematic Video Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-rich-black overflow-hidden"
            >
                <div className="absolute inset-0 pointer-events-none">
                    <iframe
                        src="https://www.youtube.com/embed/VN5EoMGb-xw?autoplay=1&mute=1&controls=0&loop=1&playlist=VN5EoMGb-xw&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
                        className="absolute top-1/2 left-1/2 w-[300%] h-[150%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>

                {/* Refined Luxury Gradient Overlay - Adjusted for YouTube brightness */}
                <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/40 to-rich-black/90" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
            </motion.div>

            {/* Central Content */}
            <div className="relative z-20 w-full max-w-5xl px-6 text-center flex flex-col items-center justify-end h-full pb-24 md:pb-32">


                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className={cn(
                        "font-heading text-6xl md:text-8xl font-black text-sand-50 leading-none mb-3 drop-shadow-2xl tracking-wide",
                        language === 'ar' && "font-serif"
                    )}
                >
                    {t.titlePart1}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-xl md:text-3xl font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-100 mb-6 drop-shadow-lg"
                >
                    {t.titlePart2}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className={cn(
                        "text-sand-100/80 text-sm md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-10 drop-shadow-md hidden md:block",
                        language === 'ar' && "font-serif leading-loose"
                    )}
                >
                    {t.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8"
                >
                    <a
                        href="#menu"
                        className="w-64 flex items-center justify-center glass-panel px-8 py-3 rounded-sm text-sand-50 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-gold-500 hover:text-rich-black hover:border-gold-500 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        {t.explore}
                    </a>

                    {/* Vertical Line Separator for Mobile */}
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-gold-400/50 to-transparent md:hidden" />

                    <button
                        onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-64 flex items-center justify-center group px-8 py-3 rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                        <span className={cn(
                            "text-sand-50 text-xs tracking-[0.2em] font-bold uppercase group-hover:text-gold-300 transition-colors",
                            language === 'ar' && "tracking-normal font-serif"
                        )}>
                            {t.reserve}
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-gold-400 via-gold-400/50 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/80 animate-shimmer filter blur-[1px]"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
