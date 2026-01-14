"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Collection", href: "#menu" },
        { name: "L'Histoire", href: "#story" },
        { name: "Galerie", href: "#gallery" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-6 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl transition-all duration-500",
                    scrolled ? "top-4" : "top-8"
                )}
            >
                <div className={cn(
                    "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border border-transparent",
                    scrolled
                        ? "bg-sand-50/80 backdrop-blur-xl border-white/40 shadow-lux-lg"
                        : "bg-white/10 backdrop-blur-md border-white/10"
                )}>
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="relative h-10 w-10 transition-transform duration-500 group-hover:rotate-12">
                            <Image
                                src="/logo.png"
                                alt="Socotra Logo"
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                        <span className="font-heading font-black tracking-[0.2em] text-lg text-rich-black group-hover:text-gold-600 transition-colors">
                            SOCOTRA
                        </span>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-xs font-bold font-body tracking-[0.15em] text-rich-black/70 hover:text-gold-700 uppercase transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100/50 border border-sand-200">
                            <Globe size={14} className="text-gold-600" />
                            <button onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')} className="text-[10px] font-bold tracking-widest text-rich-black hover:text-gold-600 transition-colors">
                                {lang.toUpperCase()}
                            </button>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-rich-black text-sand-50 text-[10px] font-bold tracking-[0.2em] px-5 py-2.5 rounded-full hover:bg-gold-600 transition-all shadow-lux-md"
                        >
                            RESERVE
                        </motion.button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 text-rich-black p-2 bg-sand-100/50 rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 90% 40px)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-sand-50 z-40 flex flex-col items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none" />

                        <nav className="flex flex-col gap-8 text-center relative z-10">
                            {navLinks.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-heading text-4xl text-rich-black hover:text-gold-600 transition-colors block"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 bg-rich-black text-sand-50 px-8 py-4 rounded-full font-bold tracking-widest hover:bg-gold-600 transition-colors"
                            >
                                BOOK A TABLE
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
