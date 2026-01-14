"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-sand-50 relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        The Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-rich-black mb-8">
                        Ancestral Traditions <br />Modern Luxury
                    </h2>
                    <div className="space-y-6 text-rich-black/70 text-lg leading-relaxed font-light">
                        <p>
                            Welcome to <span className="text-gold-600 font-bold">Socotra</span>, where the legendary island&apos;s mystique meets Parisian elegance. Our journey began with a simple desire: to share the hidden gem of Yemeni cuisine with the world.
                        </p>
                        <p>
                            From the slow-cooked tenderness of our <strong>Mandi</strong> to the sizzling stone pots of <strong>Saltah</strong>, every dish tells a story of trade routes, ancient spices, and the warmth of Arab hospitality.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-white/40 rounded-2xl backdrop-blur-md border border-white/20">
                            <span className="block text-3xl font-bold text-rich-black mb-1">100%</span>
                            <span className="text-[10px] uppercase tracking-wider text-rich-black/50">Halal</span>
                        </div>
                        <div className="text-center p-4 bg-white/40 rounded-2xl backdrop-blur-md border border-white/20">
                            <span className="block text-3xl font-bold text-rich-black mb-1">Fresh</span>
                            <span className="text-[10px] uppercase tracking-wider text-rich-black/50">Daily</span>
                        </div>
                        <div className="text-center p-4 bg-white/40 rounded-2xl backdrop-blur-md border border-white/20">
                            <span className="block text-3xl font-bold text-rich-black mb-1">10k+</span>
                            <span className="text-[10px] uppercase tracking-wider text-rich-black/50">Guests</span>
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

                    <div className="absolute bottom-10 left-10 z-20 text-sand-50">
                        <h3 className="font-heading text-3xl mb-2">The Golden Hour</h3>
                        <p className="opacity-80">Experience dining like never before.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
