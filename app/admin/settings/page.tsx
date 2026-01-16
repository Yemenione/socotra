"use client";

import { useState, useEffect } from 'react';
import { Save, Globe, Share2, MessageSquare, Search, Loader2 } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('general');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<any>({});
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const uploadData = new FormData();
        uploadData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: uploadData,
            });
            if (res.ok) {
                const data = await res.json();
                setFormData((prev: any) => ({ ...prev, [field]: data.url }));
                setMessage({ type: 'success', text: 'Image uploaded successfully' });
            } else {
                setMessage({ type: 'error', text: 'Upload failed' });
            }
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Upload error' });
        } finally {
            setUploading(false);
            setTimeout(() => setMessage(null), 3000);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/settings');
            if (res.ok) {
                const data = await res.json();
                setFormData(data);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage(null);
        try {
            const res = await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessage({ type: 'success', text: 'Settings saved successfully' });
                router.refresh();
            } else {
                setMessage({ type: 'error', text: 'Failed to save settings' });
            }
        } catch (e) {
            setMessage({ type: 'error', text: 'An error occurred' });
        } finally {
            setSaving(false);
            setTimeout(() => setMessage(null), 3000);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    if (loading) return <div className="flex h-96 items-center justify-center text-gold-500"><Loader2 className="animate-spin" size={32} /></div>;

    return (
        <div className="max-w-4xl mx-auto space-y-6 relative">
            {/* Notification Toast */}
            {message && (
                <div className={`fixed bottom-8 right-8 px-6 py-3 rounded-lg shadow-lg text-white font-bold animate-in slide-in-from-bottom-5 fade-in z-50 ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {message.text}
                </div>
            )}

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-rich-black font-heading">Site Configuration</h2>
                    <p className="text-sand-500 text-sm">Manage global settings and content</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-gold-500 text-rich-black px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gold-600 shadow-md flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <div className="flex gap-1 bg-white p-1 rounded-xl border border-sand-200 w-fit flex-wrap">
                {['General', 'Hero', 'About', 'Signature', 'Reservation', 'Footer', 'Social Media', 'SEO'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab.toLowerCase()
                            ? 'bg-rich-black text-gold-500 shadow-sm'
                            : 'text-sand-500 hover:text-rich-black hover:bg-sand-50'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-sand-200 p-8 animate-in fade-in slide-in-from-bottom-2">
                {activeTab === 'general' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            <Globe size={20} className="text-gold-500" /> Contact Information
                        </h3>
                        {/* ... (existing fields) ... */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Contact Email</label>
                                <input
                                    type="email"
                                    value={formData.contactEmail || ''}
                                    onChange={(e) => handleChange('contactEmail', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-4 rounded-lg bg-sand-50 p-4 border border-sand-200">
                                <label className="text-xs font-bold text-sand-500 uppercase flex justify-between">
                                    <span>Logo Configuration</span>
                                    {uploading && <span className="text-gold-500 flex items-center gap-1"><Loader2 size={12} className="animate-spin" /> Uploading...</span>}
                                </label>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-20 h-20 bg-white rounded-lg border border-sand-200 flex items-center justify-center overflow-hidden shadow-sm">
                                        {formData.logoUrl ? (
                                            <img src={getImageUrl(formData.logoUrl)} alt="Logo" className="object-contain w-full h-full p-2" />
                                        ) : (
                                            <span className="text-2xl">📷</span>
                                        )}
                                        <div className="flex-1 space-y-2">
                                            <input
                                                type="text"
                                                placeholder="https://..."
                                                value={formData.logoUrl || ''}
                                                onChange={(e) => handleChange('logoUrl', e.target.value)}
                                                className="w-full p-2.5 text-sm border border-sand-200 rounded-lg focus:border-gold-500 outline-none font-mono"
                                            />
                                            <div className="relative">
                                                <button type="button" className="bg-rich-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gold-500 hover:text-rich-black transition-colors flex items-center gap-2">
                                                    Upload File <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'logoUrl')} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        value={formData.whatsappNumber || ''}
                                        onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Physical Address</label>
                                    <input
                                        type="text"
                                        value={formData.address || ''}
                                        onChange={(e) => handleChange('address', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Opening Hours (English)</label>
                                    <input
                                        type="text"
                                        value={formData.openingHours || ''}
                                        onChange={(e) => handleChange('openingHours', e.target.value)}
                                        placeholder="e.g. 12:00 PM - 11:00 PM"
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">ساعات العمل (عربي)</label>
                                    <input
                                        type="text"
                                        dir="rtl"
                                        value={formData.openingHoursAr || ''}
                                        onChange={(e) => handleChange('openingHoursAr', e.target.value)}
                                        placeholder="مثلاً: 12:00 م - 11:00 م"
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'reservation' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            Reservation Section
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Title (English)</label>
                                <input
                                    type="text"
                                    value={formData.reservationTitle || ''}
                                    onChange={(e) => handleChange('reservationTitle', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase text-right block">العنوان (عربي)</label>
                                <input
                                    type="text"
                                    dir="rtl"
                                    value={formData.reservationTitleAr || ''}
                                    onChange={(e) => handleChange('reservationTitleAr', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Subtitle (English)</label>
                                <textarea
                                    rows={2}
                                    value={formData.reservationSubtitle || ''}
                                    onChange={(e) => handleChange('reservationSubtitle', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase text-right block">الوصف (عربي)</label>
                                <textarea
                                    rows={2}
                                    dir="rtl"
                                    value={formData.reservationSubtitleAr || ''}
                                    onChange={(e) => handleChange('reservationSubtitleAr', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Background Image</label>
                                <div className="flex items-center gap-4">
                                    {formData.reservationImage && (
                                        <img src={getImageUrl(formData.reservationImage)} alt="Reservation BG" className="h-20 w-40 object-cover rounded-lg border border-sand-200" />
                                    )}
                                    <button type="button" className="bg-rich-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gold-500 hover:text-rich-black transition-colors relative overflow-hidden">
                                        {formData.reservationImage ? 'Change Image' : 'Upload Image'}
                                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'reservationImage')} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'footer' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            Footer Content
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Brand Description (English)</label>
                                <textarea
                                    rows={3}
                                    value={formData.footerDescription || ''}
                                    onChange={(e) => handleChange('footerDescription', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase text-right block">وصف العلامة التجارية (عربي)</label>
                                <textarea
                                    rows={3}
                                    dir="rtl"
                                    value={formData.footerDescriptionAr || ''}
                                    onChange={(e) => handleChange('footerDescriptionAr', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'social media' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            <Share2 size={20} className="text-blue-500" /> Social Links
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 text-center text-xl">📸</div>
                                <input
                                    type="text"
                                    placeholder="Instagram URL"
                                    value={formData.instagramUrl || ''}
                                    onChange={(e) => handleChange('instagramUrl', e.target.value)}
                                    className="flex-1 p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 text-center text-xl">📘</div>
                                <input
                                    type="text"
                                    placeholder="Facebook URL"
                                    value={formData.facebookUrl || ''}
                                    onChange={(e) => handleChange('facebookUrl', e.target.value)}
                                    className="flex-1 p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 text-center text-xl">🎵</div>
                                <input
                                    type="text"
                                    placeholder="TikTok URL"
                                    value={formData.tiktokUrl || ''}
                                    onChange={(e) => handleChange('tiktokUrl', e.target.value)}
                                    className="flex-1 p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'seo' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            <Search size={20} className="text-purple-500" /> Search Engine Optimization
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Meta Title</label>
                                <input
                                    type="text"
                                    value={formData.seoTitle || ''}
                                    onChange={(e) => handleChange('seoTitle', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Meta Description</label>
                                <textarea
                                    rows={3}
                                    value={formData.seoDescription || ''}
                                    onChange={(e) => handleChange('seoDescription', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Keywords</label>
                                <input
                                    type="text"
                                    placeholder="Separate with commas"
                                    value={formData.seoKeywords || ''}
                                    onChange={(e) => handleChange('seoKeywords', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'hero' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            🎥 Hero Section
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Video URL (YouTube or Direct)</label>
                                <input
                                    type="text"
                                    value={formData.heroVideoUrl || ''}
                                    onChange={(e) => handleChange('heroVideoUrl', e.target.value)}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Main Title (English)</label>
                                    <input
                                        type="text"
                                        value={formData.heroTitle || ''}
                                        onChange={(e) => handleChange('heroTitle', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">العنوان الرئيسي (عربي)</label>
                                    <input
                                        type="text"
                                        dir="rtl"
                                        value={formData.heroTitleAr || ''}
                                        onChange={(e) => handleChange('heroTitleAr', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Subtitle (English)</label>
                                    <input
                                        type="text"
                                        value={formData.heroSubtitle || ''}
                                        onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">العنوان الفرعي (عربي)</label>
                                    <input
                                        type="text"
                                        dir="rtl"
                                        value={formData.heroSubtitleAr || ''}
                                        onChange={(e) => handleChange('heroSubtitleAr', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'about' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            📖 About Section
                        </h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Title (English)</label>
                                    <input
                                        type="text"
                                        value={formData.aboutTitle || ''}
                                        onChange={(e) => handleChange('aboutTitle', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">العنوان (عربي)</label>
                                    <input
                                        type="text"
                                        dir="rtl"
                                        value={formData.aboutTitleAr || ''}
                                        onChange={(e) => handleChange('aboutTitleAr', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Description (English)</label>
                                    <textarea
                                        rows={4}
                                        value={formData.aboutText || ''}
                                        onChange={(e) => handleChange('aboutText', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">الوصف (عربي)</label>
                                    <textarea
                                        rows={4}
                                        dir="rtl"
                                        value={formData.aboutTextAr || ''}
                                        onChange={(e) => handleChange('aboutTextAr', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Section Image</label>
                                <div className="flex items-center gap-4">
                                    {formData.aboutImage && (
                                        <img src={formData.aboutImage} alt="About" className="h-20 w-20 object-cover rounded-lg border border-sand-200" />
                                    )}
                                    <button type="button" className="bg-rich-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gold-500 hover:text-rich-black transition-colors relative overflow-hidden">
                                        {formData.aboutImage ? 'Change Image' : 'Upload Image'}
                                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'aboutImage')} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'signature' && (
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-rich-black pb-4 border-b border-sand-100">
                            ✨ Signature Dish
                        </h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Dish Name (English)</label>
                                    <input
                                        type="text"
                                        value={formData.signatureTitle || ''}
                                        onChange={(e) => handleChange('signatureTitle', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">اسم الطبق (عربي)</label>
                                    <input
                                        type="text"
                                        dir="rtl"
                                        value={formData.signatureTitleAr || ''}
                                        onChange={(e) => handleChange('signatureTitleAr', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase">Description (English)</label>
                                    <textarea
                                        rows={4}
                                        value={formData.signatureDesc || ''}
                                        onChange={(e) => handleChange('signatureDesc', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-sand-500 uppercase text-right block">الوصف (عربي)</label>
                                    <textarea
                                        rows={4}
                                        dir="rtl"
                                        value={formData.signatureDescAr || ''}
                                        onChange={(e) => handleChange('signatureDescAr', e.target.value)}
                                        className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Dish Image</label>
                                <div className="flex items-center gap-4">
                                    {formData.signatureImage && (
                                        <img src={getImageUrl(formData.signatureImage)} alt="Signature" className="h-20 w-20 object-cover rounded-lg border border-sand-200" />
                                    )}
                                    <button type="button" className="bg-rich-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gold-500 hover:text-rich-black transition-colors relative overflow-hidden">
                                        {formData.signatureImage ? 'Change Image' : 'Upload Image'}
                                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'signatureImage')} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
