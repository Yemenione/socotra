"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
    const { language, dir } = useLanguage();
    const [config, setConfig] = useState<any>({});
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        // Fetch site settings for dynamic contact info
        fetch('/api/settings')
            .then(res => res.json())
            .then(data => {
                if (!data.error) setConfig(data);
            });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        // Mock submission - later implement actual email service or DB save
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setSent(true);
        setSending(false);
        setFormData({ name: "", email: "", message: "" });
    };

    const t = {
        title: language === 'ar' ? "اتصل بنا" : "Contact Us",
        subtitle: language === 'ar' ? "نحن هنا لخدمتك" : "We are here to serve you",
        getInTouch: language === 'ar' ? "ابقى على تواصل" : "Get in Touch",
        sendMessage: language === 'ar' ? "أرسل رسالة" : "Send us a Message",
        name: language === 'ar' ? "الاسم" : "Name",
        email: language === 'ar' ? "البريد الإلكتروني" : "Email",
        message: language === 'ar' ? "الرسالة" : "Message",
        send: language === 'ar' ? "إرسال" : "Send Message",
        success: language === 'ar' ? "شكراً لك! تم استلام رسالتك." : "Thank you! Your message has been received.",
        address: language === 'ar' ? "العنوان" : "Address",
        phone: language === 'ar' ? "الهاتف" : "Phone",
        hours: language === 'ar' ? "ساعات العمل" : "Opening Hours",
        hoursValue: language === 'ar' ? "يومياً: ١٢ مساءً - ١١ مساءً" : "Daily: 12:00 PM - 11:00 PM"
    };

    return (
        <div className="min-h-screen bg-rich-black text-sand-50 pt-24 pb-12" dir={dir}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-black text-gold-500"
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sand-100/60 text-lg uppercase tracking-widest"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-2xl font-heading font-bold text-sand-50 border-b border-gold-500/20 pb-4 inline-block">
                                {t.getInTouch}
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-sand-100">
                                    <MapPin className="text-gold-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-sand-50 mb-1">{t.address}</h3>
                                        <p>12 Rue de la République, 75001 Paris, France</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-sand-100">
                                    <Phone className="text-gold-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-sand-50 mb-1">{t.phone}</h3>
                                        <p dir="ltr">{config.whatsappNumber || "+33 1 23 45 67 89"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-sand-100">
                                    <Mail className="text-gold-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-sand-50 mb-1">{t.email}</h3>
                                        <p>{config.contactEmail || "contact@socotra.paris"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-sand-100">
                                    <Clock className="text-gold-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-sand-50 mb-1">{t.hours}</h3>
                                        <p>{t.hoursValue}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-64 lg:h-80 w-full rounded-2xl overflow-hidden grayscale invert border border-white/10 relative">
                            {/* Placeholder Map - Replace with Google Maps Embed */}
                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                                <span className="uppercase tracking-widest font-bold text-sm">Map Integration</span>
                            </div>
                            {/* Example Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.3488000156740176!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1614183748231!5m2!1sen!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="opacity-50 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 p-8 lg:p-12 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-heading font-bold text-sand-50 mb-8">
                            {t.sendMessage}
                        </h2>

                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl text-center"
                            >
                                <p className="font-bold">{t.success}</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gold-400 mb-2">{t.name}</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-rich-black/50 border border-sand-300/10 rounded-xl px-4 py-3 text-sand-50 focus:border-gold-500 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gold-400 mb-2">{t.email}</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-rich-black/50 border border-sand-300/10 rounded-xl px-4 py-3 text-sand-50 focus:border-gold-500 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gold-400 mb-2">{t.message}</label>
                                    <textarea
                                        rows={5}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-rich-black/50 border border-sand-300/10 rounded-xl px-4 py-3 text-sand-50 focus:border-gold-500 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full bg-gold-500 text-rich-black font-bold py-4 rounded-xl hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {sending ? "Sending..." : (
                                        <>
                                            {t.send} <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
