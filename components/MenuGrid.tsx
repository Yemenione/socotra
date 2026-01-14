"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/lib/menu-data";
import Image from "next/image";
import LuxCard from "./LuxCard";

// Helper to get all categories
const categories = Object.keys(menuData);

const MenuGrid = () => {
    const [activeCategory, setActiveCategory] = useState("meat");

    return (
        <section id="menu" className="py-32 relative bg-sand-50 overflow-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gold-200/20 rounded-full blur-[120px] -z-10 animate-float" />
            <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-sand-300/30 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full text-[10px] font-bold tracking-[0.3em] text-gold-700 bg-gold-100/50 uppercase mb-6 backdrop-blur-md border border-gold-200/50">
                        Culinary Masterpieces
                    </span>
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-rich-black mb-8 leading-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400 italic font-serif pr-2">Collection</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-rich-black/60 font-body text-lg leading-relaxed">
                        An orchestrated symphony of flavors. Select a category to explore our curated selection of Yemeni excellence.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="flex justify-center mb-20">
                    <div className="flex flex-wrap justify-center gap-3 p-2 bg-sand-100/80 backdrop-blur-xl rounded-full border border-white/50 shadow-inner-gold mx-auto max-w-4xl">
                        {categories.map((catKey) => {
                            const category = menuData[catKey]["fr"];
                            const isActive = activeCategory === catKey;

                            // Map keys to short luxury labels
                            const labelMap: { [key: string]: string } = {
                                starters: "Entrées",
                                meat: "Viandes",
                                chicken: "Volailles",
                                fish: "Mer",
                                traditional: "Héritage",
                                desserts: "Douceurs"
                            };

                            return (
                                <button
                                    key={catKey}
                                    onClick={() => setActiveCategory(catKey)}
                                    className={`relative px-6 py-3 rounded-full text-xs font-bold tracking-widest transition-all duration-300 ${isActive ? "text-sand-50" : "text-rich-black/60 hover:text-rich-black"}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-rich-black rounded-full shadow-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2 uppercase">
                                        {labelMap[catKey] || category.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {menuData[activeCategory]["fr"].items.map((item, index) => (
                            <LuxCard key={item.name} delay={index * 0.1} className="h-full flex flex-col p-0 bg-white/60">
                                {/* Image Area */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                    {/* Price Tag - Floating */}
                                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-heading font-bold px-4 py-2 rounded-lg">
                                        {item.price}€
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-br from-white/40 to-white/10">
                                    <div className="mb-4">
                                        <h3 className="font-heading text-2xl font-bold text-rich-black group-hover:text-gold-700 transition-colors mb-2">
                                            {item.name}
                                        </h3>
                                        {item.nameAr && (
                                            <p className="font-arabic text-gold-600 text-lg opacity-80">{item.nameAr}</p>
                                        )}
                                    </div>

                                    <p className="text-rich-black/60 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-gold-200 pl-4 italic">
                                        {item.description}
                                    </p>

                                    <button className="w-full mt-auto py-4 border-t border-gold-100 text-xs font-bold tracking-[0.2em] text-rich-black hover:text-gold-700 uppercase transition-colors flex items-center justify-between group/btn">
                                        Order Now
                                        <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                                    </button>
                                </div>
                            </LuxCard>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default MenuGrid;
