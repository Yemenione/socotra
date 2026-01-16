"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getImageUrl } from "@/lib/utils";

// As per user request, using the uploaded Mandi image (asset will need to be moved to public/images/mandi.jpg)
// For now, I will use a placeholder or assume the user will place 'mandi.jpg' in public/images/
const SignatureDish = () => {
    const { language } = useLanguage();

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
                console.error("Failed to load settings:", error);
            }
        };
        fetchSettings();
    }, []);

    const content = {
        fr: {
            sub: "NOTRE SPÉCIALITÉ",
            title: settings?.signatureTitle || "Le Mandi Royal",
            desc: settings?.signatureDesc || "Un chef-d'œuvre culinaire. Agneau tendre mariné aux épices secrètes de Socotra, cuit lentement dans un four souterrain traditionnel (Tandoor) pour une saveur fumée incomparable. Servi sur un lit de riz basmati parfumé au safran et aux raisins secs.",
            cta: "DÉCOUVRIR LE MENU"
        },
        en: {
            sub: "OUR SPECIALTY",
            title: settings?.signatureTitle || "The Royal Mandi",
            desc: settings?.signatureDesc || "A culinary masterpiece. Tender lamb marinated in secret Socotran spices, slow-cooked in a traditional underground oven (Tandoor) for an unmatched smoky flavor. Served on a bed of aromatic basmati rice with saffron and raisins.",
            cta: "VIEW MENU"
        },
        ar: {
            sub: "طبقنا المميز",
            title: settings?.signatureTitleAr || "المندي الملكي",
            desc: settings?.signatureDescAr || "تحفة طهوية. لحم ضأن طري متبل بتوابل سقطرى السرية، مطهو ببطء في فرن تقليدي تحت الأرض (تندور) لنكهة مدخنة لا تضاهى. يقدم على سرير من أرز البسمتي العطري بالزعفران والزبيب.",
            cta: "شاهد القائمة"
        }
    };

    const t = content[language];

    return (
        <section className="py-24 bg-rich-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/10">
                        <Image
                            src={getImageUrl(settings?.signatureImage) || "/images/uploaded_mandi.png"}
                            alt={t.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent" />
                    </div>

                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 border border-gold-500/20 z-0 pointer-events-none" />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left"
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                >
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        {t.sub}
                    </span>
                    <h2 className={
                        `text-4xl md:text-6xl font-heading font-bold text-sand-50 mb-8 ${language === 'ar' ? 'font-serif' : ''}`
                    }>
                        {t.title}
                    </h2>
                    <p className="text-sand-100/80 text-lg leading-relaxed mb-10 font-light">
                        {t.desc}
                    </p>

                    <a href="#menu" className="inline-block border border-gold-500 text-gold-500 px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-rich-black transition-all">
                        {t.cta}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SignatureDish;
