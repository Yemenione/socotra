"use client";

import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

export default function SettingsManagement() {
    const [config, setConfig] = useState({
        heroVideoUrl: '',
        instagramUrl: '',
        facebookUrl: '',
        twitterUrl: '',
        tiktokUrl: '',
        whatsappNumber: '',
        contactEmail: '',
        signatureTitle: "The Royal Mandi",
        signatureTitleAr: "المندي الملكي",
        signatureDesc: "",
        signatureDescAr: "",
        aboutTitle: "Our Story",
        aboutTitleAr: "قصتنا",
        aboutText: "",
        aboutTextAr: ""
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/settings');
                const data = await res.json();
                if (data && !data.error) {
                    // Update state, handling nulls
                    setConfig(prev => ({
                        ...prev,
                        ...Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null))
                    }));
                }
            } catch (error) {
                console.error("Failed to fetch settings", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config),
            });
            if (res.ok) {
                alert('Settings saved successfully!');
            }
        } catch (error) {
            console.error("Failed to save settings", error);
            alert('Failed to save settings');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-center py-12">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-rich-black">Site Settings</h1>
                <p className="text-sand-600">Configure global website settings</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 space-y-6">

                {/* Hero Section */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gold-600 border-b border-sand-100 pb-2">Hero Section</h3>
                    <div>
                        <label className="block text-sm font-bold text-rich-black mb-1">Hero Video URL</label>
                        <p className="text-xs text-sand-500 mb-2">Internal path (e.g. /videos/hero.mp4) or external URL.</p>
                        <input
                            name="heroVideoUrl"
                            value={config.heroVideoUrl}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                        />
                    </div>
                </div>

                {/* Social Media */}
                <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-lg text-gold-600 border-b border-sand-100 pb-2">Social Media & Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Instagram URL</label>
                            <input
                                name="instagramUrl"
                                value={config.instagramUrl}
                                onChange={handleChange}
                                placeholder="https://instagram.com/..."
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Facebook URL</label>
                            <input
                                name="facebookUrl"
                                value={config.facebookUrl}
                                onChange={handleChange}
                                placeholder="https://facebook.com/..."
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Twitter/X URL</label>
                            <input
                                name="twitterUrl"
                                value={config.twitterUrl}
                                onChange={handleChange}
                                placeholder="https://twitter.com/..."
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">TikTok URL</label>
                            <input
                                name="tiktokUrl"
                                value={config.tiktokUrl}
                                onChange={handleChange}
                                placeholder="https://tiktok.com/..."
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">WhatsApp Number</label>
                            <input
                                name="whatsappNumber"
                                value={config.whatsappNumber}
                                onChange={handleChange}
                                placeholder="+1234567890"
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Contact Email</label>
                            <input
                                name="contactEmail"
                                value={config.contactEmail}
                                onChange={handleChange}
                                placeholder="contact@socotra.com"
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Signature Dish Section */}
                <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-lg text-gold-600 border-b border-sand-100 pb-2">Signature Dish</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Title (English)</label>
                            <input
                                name="signatureTitle"
                                value={config.signatureTitle}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Title (Arabic)</label>
                            <input
                                name="signatureTitleAr"
                                value={config.signatureTitleAr}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none text-right"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Description (English)</label>
                            <textarea
                                name="signatureDesc"
                                value={config.signatureDesc}
                                onChange={(e: any) => handleChange(e)}
                                rows={3}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Description (Arabic)</label>
                            <textarea
                                name="signatureDescAr"
                                value={config.signatureDescAr}
                                onChange={(e: any) => handleChange(e)}
                                rows={3}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none text-right"
                            />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-lg text-gold-600 border-b border-sand-100 pb-2">About Section</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Title (English)</label>
                            <input
                                name="aboutTitle"
                                value={config.aboutTitle}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-rich-black mb-1">Title (Arabic)</label>
                            <input
                                name="aboutTitleAr"
                                value={config.aboutTitleAr}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none text-right"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Text (English)</label>
                            <textarea
                                name="aboutText"
                                value={config.aboutText}
                                onChange={(e: any) => handleChange(e)}
                                rows={4}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Text (Arabic)</label>
                            <textarea
                                name="aboutTextAr"
                                value={config.aboutTextAr}
                                onChange={(e: any) => handleChange(e)}
                                rows={4}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none text-right"
                            />
                        </div>
                    </div>
                </div>

                {/* Google & SEO */}
                <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-lg text-gold-600 border-b border-sand-100 pb-2">Google & SEO</h3>
                    <div>
                        <label className="block text-sm font-bold text-rich-black mb-1">Google Reviews URL</label>
                        <input
                            name="googleReviewUrl"
                            value={(config as any).googleReviewUrl || ''}
                            onChange={handleChange}
                            placeholder="https://g.page/r/..."
                            className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Meta Title (Global)</label>
                            <input
                                name="seoTitle"
                                value={(config as any).seoTitle || ''}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Meta Description</label>
                            <textarea
                                name="seoDescription"
                                value={(config as any).seoDescription || ''}
                                onChange={(e: any) => handleChange(e)}
                                rows={2}
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-rich-black mb-1">Keywords</label>
                            <input
                                name="seoKeywords"
                                value={(config as any).seoKeywords || ''}
                                onChange={handleChange}
                                placeholder="yemeni food, paris, luxury dining..."
                                className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex justify-end">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-rich-black text-sand-50 px-8 py-3 rounded-md font-bold hover:bg-gold-500 hover:text-rich-black transition-colors disabled:opacity-50"
                    >
                        <Save size={18} />
                        <span>{saving ? 'Saving...' : 'Save Settings'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
