"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LuxCard from "./LuxCard";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const Reservation = () => {
    const { language, dir } = useLanguage();
    const t = translations[language].reservation;

    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "19:00",
        guests: "2"
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                alert(language === 'ar' ? 'تم استلام طلبك! سيتم تحويلك إلى واتساب للتأكيد.' : 'Reservation received! Redirecting to WhatsApp for confirmation.');
            }
        } catch (error) {
            console.error("Failed to save reservation", error);
        }

        // WhatsApp Logic (Always run as fallback or confirmation)
        const message = `Hello, I would like to reserve a table for ${formData.guests} people on ${formData.date} at ${formData.time}. Name: ${formData.name}`;
        const whatsappUrl = `https://wa.me/33178990678?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="reservation" className="py-24 relative flex items-center justify-center overflow-hidden bg-rich-black" dir={dir}>
            {/* Background & Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent"></div>
            </div>

            <div className="relative z-20 w-full max-w-6xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Side */}
                    <div className={cn("text-sand-50 text-center", language === 'ar' ? "lg:text-right" : "lg:text-left")}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
                        >
                            {t.label}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={cn(
                                "text-5xl md:text-6xl font-heading font-black mb-8 leading-tight",
                                language === 'ar' && "font-serif"
                            )}
                        >
                            {t.titlePart1} <br />
                            <span className="text-gold-400 italic font-serif">{t.titlePart2}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={cn(
                                "text-sand-200/80 text-lg mb-10 leading-relaxed font-light max-w-md mx-auto lg:mx-0",
                                language === 'ar' && "font-serif"
                            )}
                        >
                            {t.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <a href="tel:+33178990678" className={cn(
                                "flex items-center gap-6 group justify-center",
                                language === 'ar' ? "lg:justify-end flex-row-reverse" : "lg:justify-start"
                            )}>
                                <span className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-xl group-hover:bg-gold-500 group-hover:text-rich-black transition-all duration-300">📞</span>
                                <span className="text-xl font-heading font-bold text-sand-50 group-hover:text-gold-400 transition-colors">{t.phone}</span>
                            </a>
                            <div className={cn(
                                "flex items-center gap-6 group justify-center",
                                language === 'ar' ? "lg:justify-end flex-row-reverse" : "lg:justify-start"
                            )}>
                                <span className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-xl group-hover:bg-gold-500 group-hover:text-rich-black transition-all duration-300">📍</span>
                                <span className={cn("text-xl font-heading font-bold text-sand-50 group-hover:text-gold-400 transition-colors", language === 'ar' && "font-serif")}>{t.address}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side - Luxury Glass Card */}
                    <LuxCard className="bg-white/5 border-white/10 backdrop-blur-2xl p-0">
                        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
                            <div className="text-center mb-8">
                                <h3 className={cn("text-2xl font-heading font-bold text-sand-50", language === 'ar' && "font-serif")}>{t.formTitle}</h3>
                                <p className={cn("text-sand-200/50 text-xs tracking-widest uppercase mt-2", language === 'ar' && "font-serif")}>{t.formSubtitle}</p>
                            </div>

                            <div className="space-y-6">
                                <div className="group">
                                    <label className={cn("block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1", language === 'ar' ? "text-right mr-1 ml-0 font-serif" : "")}>{t.labels.name}</label>
                                    <input
                                        type="text"
                                        required
                                        className={cn(
                                            "w-full bg-rich-black/40 border border-white/10 rounded-xl p-4 text-sand-50 placeholder-white/10 focus:outline-none focus:border-gold-500/50 focus:bg-rich-black/60 transition-all font-medium",
                                            language === 'ar' ? "text-right font-serif" : ""
                                        )}
                                        placeholder=""
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className={cn("block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1", language === 'ar' ? "text-right mr-1 ml-0 font-serif" : "")}>{t.labels.date}</label>
                                        <input
                                            type="date"
                                            required
                                            className={cn("w-full bg-rich-black/40 border border-white/10 rounded-xl p-4 text-sand-50 focus:outline-none focus:border-gold-500/50 focus:bg-rich-black/60 transition-all", language === 'ar' ? "text-right" : "")}
                                            style={{ colorScheme: 'dark' }}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={cn("block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1", language === 'ar' ? "text-right mr-1 ml-0 font-serif" : "")}>{t.labels.time}</label>
                                        <select
                                            className={cn("w-full bg-rich-black/40 border border-white/10 rounded-xl p-4 text-sand-50 focus:outline-none focus:border-gold-500/50 focus:bg-rich-black/60 transition-all appearance-none cursor-pointer", language === 'ar' ? "text-right dir-rtl" : "")}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            value={formData.time}
                                        >
                                            <option className="bg-rich-black text-sand-50" value="19:00">19:00</option>
                                            <option className="bg-rich-black text-sand-50" value="19:30">19:30</option>
                                            <option className="bg-rich-black text-sand-50" value="20:00">20:00</option>
                                            <option className="bg-rich-black text-sand-50" value="20:30">20:30</option>
                                            <option className="bg-rich-black text-sand-50" value="21:00">21:00</option>
                                            <option className="bg-rich-black text-sand-50" value="21:30">21:30</option>
                                        </select>
                                        <div className={cn("absolute bottom-4 pointer-events-none text-gold-500/50", language === 'ar' ? "left-4" : "right-4")}>▼</div>
                                    </div>
                                </div>

                                <div>
                                    <label className={cn("block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1", language === 'ar' ? "text-right mr-1 ml-0 font-serif" : "")}>{t.labels.guests}</label>
                                    <div className={cn("grid grid-cols-4 gap-2", language === 'ar' && "dir-rtl")}>
                                        {[2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                                            <button
                                                key={n}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, guests: n.toString() })}
                                                className={`py-2 rounded-lg text-sm font-bold border transition-all ${formData.guests === n.toString()
                                                    ? 'bg-gold-500 text-rich-black border-gold-500'
                                                    : 'border-white/10 text-sand-200/50 hover:border-gold-500/30 hover:text-sand-50'
                                                    }`}
                                            >
                                                {n}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className={cn(
                                    "w-full bg-gradient-to-r from-gold-600 to-gold-400 text-rich-black font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all tracking-[0.2em] mt-2 uppercase text-xs",
                                    language === 'ar' && "font-serif text-sm tracking-normal"
                                )}>
                                    {t.confirm}
                                </button>
                            </div>
                        </form>
                    </LuxCard>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
