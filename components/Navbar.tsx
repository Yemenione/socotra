"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context"; // Import Hook
import { translations } from "@/lib/translations"; // Import Translations

type Language = "fr" | "en" | "ar";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, dir } = useLanguage();
    const t = translations[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.home, href: "#" },
        { name: t.menu, href: "#menu" },
        { name: t.story, href: "#about" },
        { name: t.gallery, href: "#gallery" },
        { name: t.contact, href: "#footer" },
    ];

    const toggleLanguage = () => {
        if (language === 'fr') setLanguage('en');
        else if (language === 'en') setLanguage('ar');
        else setLanguage('fr');
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 inset-x-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-rich-black/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
                        : "bg-transparent py-6"
                )}
                dir={dir}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex-shrink-0 relative h-12 w-32 md:h-16 md:w-40 block">
                        {/* Using the logo from public folder as discovered */}
                        <Image
                            src="/logo.png"
                            alt="Socotra Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sand-100 text-sm font-medium tracking-[0.15em] uppercase hover:text-gold-400 transition-colors relative group",
                                    language === 'ar' && "font-serif text-lg tracking-normal" // Adjust for Arabic typography
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={toggleLanguage}
                            className="hidden md:flex items-center gap-2 text-sand-50/70 hover:text-gold-400 transition-colors"
                        >
                            <Globe size={18} />
                            <span className="text-xs uppercase tracking-widest font-bold">{language.toUpperCase()}</span>
                        </button>

                        <button
                            onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden md:block bg-gold-600 text-rich-black px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                        >
                            {t.reserve}
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-sand-50 hover:text-gold-400"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex"
                        dir={dir}
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-rich-black/80 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ x: dir === 'rtl' ? "-100%" : "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: dir === 'rtl' ? "-100%" : "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className={cn(
                                "relative w-full max-w-md h-full bg-rich-black border-l border-white/10 flex flex-col shadow-2xl overflow-y-auto",
                                dir === 'rtl' ? "mr-auto border-r border-l-0" : "ml-auto"
                            )}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "absolute top-6 p-2 text-sand-50 hover:text-gold-400 transition-colors z-50 rounded-full border border-white/10",
                                    dir === 'rtl' ? "left-6" : "right-6"
                                )}
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col h-full p-8 pt-24">
                                {/* Navigation */}
                                <nav className="flex flex-col gap-6 mb-12">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05) }}
                                            className="group flex items-center justify-between py-4 border-b border-white/5"
                                        >
                                            <span className={cn(
                                                "text-3xl font-heading font-bold text-sand-50 group-hover:text-gold-400 transition-colors",
                                                language === 'ar' && "font-serif"
                                            )}>
                                                {link.name}
                                            </span>
                                            <span className={cn(
                                                "opacity-0 group-hover:opacity-100 transition-all duration-300 text-gold-400",
                                                dir === 'rtl' ? "rotate-180 translate-x-4 group-hover:translate-x-0" : "-translate-x-4 group-hover:translate-x-0"
                                            )}>
                                                →
                                            </span>
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* Language Switcher Mobile */}
                                <div className="flex gap-4 mb-8 justify-center">
                                    {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setLanguage(lang)}
                                            className={cn(
                                                "px-4 py-2 rounded border transition-colors uppercase text-sm font-bold",
                                                language === lang
                                                    ? "bg-gold-500 text-rich-black border-gold-500"
                                                    : "text-sand-50 border-white/20 hover:border-gold-500"
                                            )}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-rich-black py-4 rounded-sm font-bold uppercase tracking-[0.2em] mb-12 shadow-lg hover:shadow-gold-500/20 transition-all"
                                >
                                    {t.bookTable}
                                </motion.button>

                                {/* Footer Info */}
                                <div className="mt-auto space-y-6 pt-8 border-t border-white/10">
                                    <div className="text-sand-50/60 text-sm space-y-2">
                                        <p className="flex items-center gap-3">
                                            <span className="w-8 h-[1px] bg-gold-500/50"></span>
                                            Paris, France
                                        </p>
                                        <p>123 Avenue des Champs-Élysées</p>
                                    </div>
                                    <div className="flex gap-4">
                                        {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                                            <a key={social} href="#" className="text-xs font-bold text-gold-500 uppercase tracking-wider hover:text-white transition-colors">
                                                {social}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
