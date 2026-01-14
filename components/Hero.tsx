"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d7669d683251?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-sand-50/90" />
                <div className="absolute inset-0 bg-rich-black/20 mix-blend-multiply" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <div className="md:col-span-8 text-center md:text-left pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-6 flex items-center gap-4 justify-center md:justify-start"
                    >
                        <div className="h-px w-12 bg-gold-400/60" />
                        <span className="text-sand-100 uppercase tracking-[0.4em] text-xs font-bold shadow-black drop-shadow-lg">
                            Est. 1924 • Socotra Island
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="font-heading text-7xl md:text-9xl font-black text-sand-50 leading-[0.85] mb-8 drop-shadow-2xl"
                    >
                        ROYAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                            YEMENI
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-sand-200 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-12 mx-auto md:mx-0 drop-shadow-md"
                    >
                        Experience the ancient culinary traditions of the Arabian Peninsula, reimagined for the modern connoisseur.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-6 items-center"
                    >
                        <button className="relative overflow-hidden group bg-gold-400 text-rich-black font-bold text-xs tracking-[0.2em] py-5 px-10 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                            <span className="relative z-10 group-hover:text-white transition-colors">EXPLORE MENU</span>
                            <div className="absolute inset-0 bg-rich-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </button>

                        <button className="flex items-center gap-4 text-sand-50 text-xs tracking-[0.2em] font-bold group hover:text-gold-300 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-300 transition-colors">
                                <span className="text-xl">▶</span>
                            </div>
                            WATCH THE STORY
                        </button>
                    </motion.div>
                </div>

                {/* Decorative Floating Element */}
                <div className="hidden md:block md:col-span-4 relative h-[600px]">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent backdrop-blur-sm rounded-[100px] border border-white/10 skew-y-6"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -1, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute inset-0 top-10 left-10 bg-gradient-to-bl from-sand-500/10 to-transparent backdrop-blur-md rounded-[100px] border border-white/5 skew-y-12 -z-10"
                    />
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
