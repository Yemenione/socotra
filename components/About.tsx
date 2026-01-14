"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const About = () => {
    const { language, dir } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="about" className="py-24 bg-sand-50 relative" dir={dir}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={cn(language === 'ar' ? "text-right" : "text-left")}
                >
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        {t.label}
                    </span>
                    <h2 className={cn(
                        "text-4xl md:text-5xl font-heading font-black text-rich-black mb-8",
                        language === 'ar' && "font-serif leading-tight"
                    )}>
                        {t.title}
                    </h2>
                    <div className={cn(
                        "space-y-6 text-rich-black/70 text-lg leading-relaxed font-light",
                        language === 'ar' && "font-serif"
                    )}>
                        <p>
                            {t.p1}
                        </p>
                        <p>
                            {t.p2}
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-white/40 rounded-2xl backdrop-blur-md border border-white/20">
                            <span className="block text-3xl font-bold text-rich-black mb-1">100%</span>
                            <span className="text-[10px] uppercase tracking-wider text-rich-black/50">{t.stats.halal}</span>
                        </div>
                        <div className="text-center p-4 bg-white/40 rounded-2xl backdrop-blur-md border border-white/20">
                            <span className="block text-3xl font-bold text-rich-black mb-1">Fresh</span>
                            <span className="text-[10px] uppercase tracking-wider text-rich-black/50">{t.stats.daily}</span>
                        </div>
                        <div className="text-center p-4 bg-white/40 rounded-2xl backdrop-blur-md border border-white/20">
                            <span className="block text-3xl font-bold text-rich-black mb-1">10k+</span>
                            <span className="text-[10px] uppercase tracking-wider text-rich-black/50">{t.stats.guests}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content - Placeholder for "Dragon Blood Tree" or Interior Shot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl group"
                >
                    {/* Simple colorful placeholder gradient for now */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-60 z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541518763669-27fef04b14fe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>

                    <div className={cn(
                        "absolute bottom-10 z-20 text-sand-50",
                        language === 'ar' ? "right-10 text-right" : "left-10 text-left"
                    )}>
                        <h3 className={cn(
                            "font-heading text-3xl mb-2",
                            language === 'ar' && "font-serif"
                        )}>{t.imageTitle}</h3>
                        <p className={cn(
                            "opacity-80",
                            language === 'ar' && "font-serif"
                        )}>{t.imageSubtitle}</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
