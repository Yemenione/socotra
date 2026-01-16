"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData as staticMenuData, MenuCategory, MenuItem } from "@/lib/menu-data";
import Image from "next/image";
import { cn, getImageUrl } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Loader2 } from "lucide-react";

const MenuGrid = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const { language, dir } = useLanguage();
    const t = translations[language].menu;

    // Start with empty to avoid flash of static content, or use a specific loading state
    const [menuData, setMenuData] = useState<MenuCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catsRes, itemsRes] = await Promise.all([
                    fetch('/api/categories'),
                    fetch('/api/items')
                ]);

                if (catsRes.ok && itemsRes.ok) {
                    const categories = await catsRes.json();
                    const items = await itemsRes.json();

                    // Transform DB data
                    const dynamicMenu: MenuCategory[] = categories.map((cat: any) => ({
                        id: cat.id,
                        title: cat.title,
                        titleEn: cat.titleEn || cat.title,
                        titleAr: cat.titleAr || cat.title,
                        items: items
                            .filter((item: any) => item.categoryId === cat.id)
                            .map((item: any) => ({
                                name: item.name,
                                nameEn: item.nameEn || item.name,
                                nameAr: item.nameAr || item.name,
                                description: item.description,
                                descriptionEn: item.descriptionEn || item.description,
                                price: Number(item.price).toFixed(2) + "€",
                                image: getImageUrl(item.image) || "/logo.png",
                                featured: false
                            }))
                    }));

                    // Only show categories that have items (optional, but cleaner)
                    // But if user wants to see empty categories, remove filter.
                    // For now, let's keep it clean but allow empty if that's the only data.
                    const validMenu = dynamicMenu.filter(c => c.items.length > 0);

                    if (validMenu.length > 0) {
                        setMenuData(validMenu);
                        setActiveCategory(validMenu[0].id);
                    } else if (dynamicMenu.length > 0) {
                        // If no items but categories exist, show them (empty)
                        setMenuData(dynamicMenu);
                        setActiveCategory(dynamicMenu[0].id);
                    } else {
                        // DB empty, maybe fallback or show empty
                        // For "sync" feeling, showing Empty is better than Fake.
                        setMenuData([]);
                    }
                } else {
                    throw new Error("Failed response");
                }
            } catch (err) {
                console.error("Failed to load menu data", err);
                setError(true);
                // On error, we fallback to static so the site isn't broken
                setMenuData(staticMenuData);
                setActiveCategory(staticMenuData[0].id);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to get localized text
    const getCategoryTitle = (cat: MenuCategory) => {
        if (language === 'ar') return cat.titleAr || cat.title;
        if (language === 'en') return cat.titleEn || cat.title;
        return cat.title;
    };

    const getItemName = (item: MenuItem) => {
        if (language === 'ar') return item.nameAr || item.name;
        if (language === 'en') return item.nameEn || item.name;
        return item.name;
    };

    const getItemDesc = (item: MenuItem) => {
        if (language === 'ar') {
            return item.descriptionAr || item.description; // Fixed: was descriptionEn
        }
        if (language === 'en') return item.descriptionEn || item.description;
        return item.description;
    };

    if (loading) {
        return (
            <section className="py-24 bg-rich-black min-h-[50vh] flex items-center justify-center">
                <Loader2 className="text-gold-500 animate-spin" size={48} />
            </section>
        );
    }

    return (
        <section id="menu" className="py-24 bg-rich-black relative overflow-hidden" dir={dir}>
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-400 uppercase tracking-[0.3em] text-xs font-bold"
                    >
                        {t.title}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-black text-sand-50"
                    >
                        {t.subtitle}
                    </motion.h2>
                    <div className="h-1 w-24 bg-gold-500 mx-auto rounded-full mt-6" />
                </div>

                {/* Category Navigation */}
                {menuData.length > 0 ? (
                    <>
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {menuData.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={cn(
                                        "px-6 py-2 rounded-full border border-white/10 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                                        activeCategory === category.id
                                            ? "bg-gold-500 text-rich-black shadow-lg shadow-gold-500/20 scale-105"
                                            : "text-sand-100/60 hover:text-sand-50 hover:border-gold-500/50"
                                    )}
                                >
                                    {getCategoryTitle(category)}
                                </button>
                            ))}
                        </div>

                        {/* Menu Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
                        >
                            <AnimatePresence mode="popLayout">
                                {menuData.find(c => c.id === activeCategory)?.items.map((item, index) => (
                                    <motion.div
                                        layout
                                        key={item.name + index} // Prefer ID if available, but name+index is ok for now
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="group relative bg-white/5 border border-white/5 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors flex gap-6 items-center overflow-hidden"
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all duration-500" />

                                        {/* Image */}
                                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/10 shadow-lg group-hover:border-gold-400/50 transition-colors">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0 z-10">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={cn(
                                                    "text-xl font-bold text-sand-50 truncate pr-4 group-hover:text-gold-300 transition-colors",
                                                    language === 'ar' && "font-serif text-2xl"
                                                )}>
                                                    {getItemName(item)}
                                                </h3>
                                                <span className="text-gold-400 font-bold text-lg whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className={cn(
                                                "text-sand-100/60 text-sm leading-relaxed line-clamp-2",
                                                language === 'ar' && "text-right"
                                            )}>
                                                {getItemDesc(item)}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </>
                ) : (
                    <div className="text-center text-sand-400 py-12">
                        <p className="text-lg">Preparing our new menu...</p>
                        <p className="text-sm opacity-50">Please check back soon.</p>
                    </div>
                )}

                {/* Download Menu Button */}
                <div className="mt-20 text-center">
                    <button className="text-sand-50 border-b border-gold-500 pb-1 hover:text-gold-400 transition-colors text-sm font-bold uppercase tracking-widest">
                        {language === 'fr' ? "Télécharger le menu complet" : language === 'ar' ? "تحميل القائمة الكاملة" : "Download Full Menu"}
                    </button>
                </div>
            </div>
        </section>
    );
};


export default MenuGrid;
