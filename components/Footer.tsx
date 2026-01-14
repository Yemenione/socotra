"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const Footer = () => {
    const { language, dir } = useLanguage();
    const t = translations[language].footer;
    const navT = translations[language].nav;
    const resT = translations[language].reservation;

    const [settings, setSettings] = useState<any>(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/settings');
                if (res.ok) {
                    const data = await res.json();
                    setSettings(data);
                }
            } catch (error) {
                console.error("Failed to load footer settings:", error);
            }
        };
        fetchSettings();
    }, []);

    return (
        <footer className="bg-rich-black text-sand-50 pt-20 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-30" dir={dir}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className={cn("col-span-1 md:col-span-2", language === 'ar' ? "md:text-right" : "")}>
                    <span className="font-heading text-4xl font-bold tracking-wider mb-6 block text-gold">
                        {t.brand}
                    </span>
                    <p className={cn("max-w-md text-sand/60 leading-relaxed mb-8", language === 'ar' && "font-serif ml-auto")}>
                        {t.description}
                    </p>
                    <div className={cn("flex gap-4", language === 'ar' ? "justify-end md:justify-start" : "")}>
                        {settings?.instagramUrl && (
                            <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brown transition-all">
                                <Instagram size={18} />
                            </a>
                        )}
                        {settings?.facebookUrl && (
                            <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brown transition-all">
                                <Facebook size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Quick Links */}
                <div className={cn(language === 'ar' ? "md:text-right" : "")}>
                    <h4 className={cn("font-heading text-xl mb-6 text-sand", language === 'ar' && "font-serif")}>{t.explore}</h4>
                    <ul className="space-y-4 text-sand/60">
                        <li><Link href="#menu" className="hover:text-gold transition-colors">{navT.menu}</Link></li>
                        <li><Link href="#about" className="hover:text-gold transition-colors">{navT.story}</Link></li>
                        <li><Link href="#gallery" className="hover:text-gold transition-colors">{navT.gallery}</Link></li>
                        <li><Link href="#reserve" className="hover:text-gold transition-colors">{navT.reserve}</Link></li>
                    </ul>
                </div>

                {/* Contact/Hours */}
                <div className={cn(language === 'ar' ? "md:text-right" : "")}>
                    <h4 className={cn("font-heading text-xl mb-6 text-sand", language === 'ar' && "font-serif")}>{t.visit}</h4>
                    <ul className="space-y-4 text-sand/60">
                        <li className={cn("flex gap-3 items-start", language === 'ar' ? "flex-row-reverse" : "")}>
                            <MapPin size={20} className="text-gold shrink-0 mt-1" />
                            <span>{t.location}</span>
                        </li>
                        <li className={cn("flex gap-3 items-center", language === 'ar' ? "flex-row-reverse" : "")}>
                            <Phone size={20} className="text-gold shrink-0" />
                            <span>{settings?.whatsappNumber || resT.phone}</span>
                        </li>
                        {settings?.contactEmail && (
                            <li className={cn("flex gap-3 items-center", language === 'ar' ? "flex-row-reverse" : "")}>
                                <span className="text-gold text-lg">@</span>
                                <span>{settings.contactEmail}</span>
                            </li>
                        )}
                        <li className="pt-4 border-t border-white/10 mt-4">
                            <span className="block text-gold text-sm font-bold uppercase tracking-widest mb-1">{t.openDaily}</span>
                            12:00 PM - 11:00 PM
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cn(
                "border-t border-white/10 pt-8 text-center text-sand/40 text-sm flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto items-center gap-4",
                language === 'ar' && "md:flex-row-reverse"
            )}>
                <p>© 2026 {t.brand}. {t.rights}</p>
                <p>Paris • Yemen • Luxury</p>
            </div>
        </footer>
    );
};

export default Footer;
