"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LuxCard from "./LuxCard";

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "19:00",
        guests: "2"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple WhatsApp Logic
        const message = `Hello, I would like to reserve a table for ${formData.guests} people on ${formData.date} at ${formData.time}. Name: ${formData.name}`;
        const whatsappUrl = `https://wa.me/33178990678?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="reserve" className="py-24 relative flex items-center justify-center overflow-hidden bg-rich-black">
            {/* Background & Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent"></div>
            </div>

            <div className="relative z-20 w-full max-w-6xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Side */}
                    <div className="text-sand-50 text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
                        >
                            Reservations
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl font-heading font-black mb-8 leading-tight"
                        >
                            Secure Your <br />
                            <span className="text-gold-400 italic font-serif">Experience</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sand-200/80 text-lg mb-10 leading-relaxed font-light max-w-md mx-auto lg:mx-0"
                        >
                            Immerse yourself in the authentic atmosphere of Socotra.
                            Limited seating available for an intimate dining journey.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <a href="tel:+33178990678" className="flex items-center gap-6 group justify-center lg:justify-start">
                                <span className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-xl group-hover:bg-gold-500 group-hover:text-rich-black transition-all duration-300">📞</span>
                                <span className="text-xl font-heading font-bold text-sand-50 group-hover:text-gold-400 transition-colors">+33 1 78 99 06 78</span>
                            </a>
                            <div className="flex items-center gap-6 group justify-center lg:justify-start">
                                <span className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-xl group-hover:bg-gold-500 group-hover:text-rich-black transition-all duration-300">📍</span>
                                <span className="text-xl font-heading font-bold text-sand-50 group-hover:text-gold-400 transition-colors">47 Rue Notre Dame de Lorette</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side - Luxury Glass Card */}
                    <LuxCard className="bg-white/5 border-white/10 backdrop-blur-2xl p-0">
                        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-heading font-bold text-sand-50">Private Booking</h3>
                                <p className="text-sand-200/50 text-xs tracking-widest uppercase mt-2">Instant Confirmation</p>
                            </div>

                            <div className="space-y-6">
                                <div className="group">
                                    <label className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-rich-black/40 border border-white/10 rounded-xl p-4 text-sand-50 placeholder-white/10 focus:outline-none focus:border-gold-500/50 focus:bg-rich-black/60 transition-all font-medium"
                                        placeholder="Enter your name"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1">Date</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full bg-rich-black/40 border border-white/10 rounded-xl p-4 text-sand-50 focus:outline-none focus:border-gold-500/50 focus:bg-rich-black/60 transition-all" // Note: date picker generic icon color issue might exist but sticking to simple css
                                            style={{ colorScheme: 'dark' }}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1">Time</label>
                                        <select
                                            className="w-full bg-rich-black/40 border border-white/10 rounded-xl p-4 text-sand-50 focus:outline-none focus:border-gold-500/50 focus:bg-rich-black/60 transition-all appearance-none cursor-pointer"
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
                                        <div className="absolute right-4 bottom-4 pointer-events-none text-gold-500/50">▼</div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-2 ml-1">Guests</label>
                                    <div className="grid grid-cols-4 gap-2">
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

                                <button type="submit" className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-rich-black font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all tracking-[0.2em] mt-2 uppercase text-xs">
                                    Confirm Request
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
