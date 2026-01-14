"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Menu", href: "#menu" },
        { name: "Story", href: "#about" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#footer" },
    ];

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
                                className="text-sand-100 text-sm font-medium tracking-[0.15em] uppercase hover:text-gold-400 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <button className="hidden md:flex items-center gap-2 text-sand-50/70 hover:text-gold-400 transition-colors">
                            <Globe size={18} />
                            <span className="text-xs uppercase tracking-widest">FR</span>
                        </button>

                        <button
                            onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden md:block bg-gold-600 text-rich-black px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                        >
                            Reserve
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
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="fixed inset-0 bg-rich-black z-[60] flex flex-col items-center justify-center border-l border-white/10"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-sand-50 hover:text-gold-400"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="text-4xl font-heading font-black text-sand-50 hover:text-gold-400 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button className="bg-gold-600 text-rich-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em]">
                                Book a Table
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
