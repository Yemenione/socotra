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
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center" dir={dir}>

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-rich-black"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-110 opacity-70 mix-blend-overlay"
                >
                    {/* Premium Slow Motion Steaming Food/Chefs or Scenic Yemen - using a placeholder for now */}
                    <source src="https://cdn.coverr.co/videos/coverr-slow-motion-of-steaming-food-5259/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-rich-black/30 to-sand-50/90" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <div className={cn(
                    "md:col-span-7 pt-20 relative z-20",
                    language === 'ar' ? "text-right md:text-right" : "text-center md:text-left"
                )}>
                    <motion.div
                        initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={cn(
                            "mb-6 flex items-center gap-4",
                            language === 'ar' ? "justify-center md:justify-start flex-row-reverse" : "justify-center md:justify-start"
                        )}
                    >
                        <div className="h-[2px] w-16 bg-gradient-to-r from-gold-400 to-transparent" />
                        <span className="text-sand-100 uppercase tracking-[0.4em] text-xs font-bold shadow-black drop-shadow-lg">
                            {t.est}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-sand-50 leading-[0.9] mb-8 drop-shadow-2xl"
                    >
                        {t.titlePart1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-100 drop-shadow-sm">
                            {t.titlePart2}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className={cn(
                            "text-sand-100/90 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-12 drop-shadow-lg backdrop-blur-[2px]",
                            language === 'ar' ? "mr-0 ml-auto md:ml-0 md:mr-0 font-serif" : "mx-auto md:mx-0"
                        )}
                    >
                        {t.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className={cn(
                            "flex flex-col md:flex-row gap-6 items-center",
                            language === 'ar' ? "md:flex-row-reverse justify-end" : ""
                        )}
                    >
                        <button className="relative overflow-hidden group bg-gradient-to-r from-gold-500 to-gold-600 text-rich-black font-bold text-xs tracking-[0.2em] py-5 px-10 rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t.explore}</span>
                            <div className="absolute inset-0 bg-rich-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                        </button>

                        <button className={cn(
                            "flex items-center gap-4 text-sand-50 text-xs tracking-[0.2em] font-bold group hover:text-gold-300 transition-all",
                            language === 'ar' && "flex-row-reverse"
                        )}>
                            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-300 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-white/5">
                                <span className={cn("text-xl", language === 'ar' ? "pr-1" : "pl-1")}>▶</span>
                            </div>
                            <span>{t.watch}</span>
                        </button>
                    </motion.div>
                </div>

                {/* Highlight/Video Frame */}
                <div className="hidden md:block md:col-span-5 relative h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="relative w-full h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md"
                    >
                        {/* Frame Border Effect */}
                        <div className="absolute inset-0 border border-gold-500/30 rounded-[2rem] z-20 pointer-events-none" />

                        {/* Content Placeholder for Future Video */}
                        <div className="absolute inset-0 bg-rich-black/60 z-10 flex flex-col items-center justify-center text-center p-8">
                            <div className="w-20 h-20 rounded-full border-2 border-gold-500/50 flex items-center justify-center mb-6 text-gold-400">
                                <span className="text-3xl">✨</span>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-sand-50 mb-2">The Socotra Experience</h3>
                            <p className="text-sand-200 text-sm font-light tracking-wide uppercase">Coming Soon</p>
                        </div>

                        {/* Background Accent for the Frame (Subtle) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-900/20 to-rich-black z-0" />

                        {/* Optional: Glossy Shine */}
                        <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 left-full animate-shine" />
                    </motion.div>

                    {/* Decorative Elements behind frame */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/5 blur-[100px] rounded-full" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
