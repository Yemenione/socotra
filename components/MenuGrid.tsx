"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxCard from "./LuxCard";
import Image from "next/image";
import { menuData } from "@/lib/menu-data";

const MenuGrid = () => {
    const [activeCategory, setActiveCategory] = useState("starters");

    // Find the active category object
    const activeCategoryData = menuData.find(c => c.id === activeCategory) || menuData[0];

    return (
        <section id="menu" className="py-24 bg-sand-50 relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        Gastronomy
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-rich-black mb-6">
                        Curated Menu
                    </h2>
                    <p className="max-w-2xl mx-auto text-rich-black/60 font-light text-lg">
                        A culinary journey through the ancient traditions of Yemen, refined for the modern palate.
                    </p>
                </div>

                {/* Categories - Scrollable on mobile */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                    {menuData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`relative px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-500 ${activeCategory === category.id
                                    ? "text-rich-black font-bold"
                                    : "text-rich-black/50 hover:text-rich-black"
                                }`}
                        >
                            <span className="relative z-10">{category.title}</span>
                            {activeCategory === category.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gold-400/20 border border-gold-500/30 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {activeCategoryData.items.map((item, index) => (
                            <LuxCard key={item.name} delay={index * 0.05} className="h-full flex flex-col p-0 bg-white shadow-lux-sm border-white/20 hover:border-gold-500/50">
                                {/* Image Area - Styled as per "Luxury" request */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay for text readability if needed, though text is below */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {item.featured && (
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30 shadow-lg z-10">
                                            <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest flex items-center gap-1">
                                                ★ Signature
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative bg-white">
                                    {/* Header: Name & Price */}
                                    <div className="flex justify-between items-start border-b border-sand-200 pb-4 mb-4">
                                        <div>
                                            <h3 className="font-heading text-xl font-bold text-rich-black group-hover:text-gold-600 transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            <p className="font-arabic text-lg text-gold-500 mt-1">{item.arabicName}</p>
                                        </div>
                                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                                            {item.price}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-rich-black/60 text-sm leading-relaxed font-light mb-6 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="pt-2 mt-auto">
                                        <button className="text-xs font-bold uppercase tracking-[0.2em] text-rich-black/40 group-hover:text-gold-600 transition-colors flex items-center gap-2">
                                            Order Now <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                                        </button>
                                    </div>
                                </div>
                            </LuxCard>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Decoration at bottom */}
                <div className="text-center mt-16 opacity-50">
                    <span className="text-gold-500 text-2xl">✦</span>
                </div>
            </div>
        </section>
    );
};

export default MenuGrid;
