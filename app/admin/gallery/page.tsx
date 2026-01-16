"use client";

import { useState, useEffect } from 'react';
import { Upload, X, Trash2, Tag, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function GalleryManagement() {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        try {
            const res = await fetch('/api/gallery');
            if (res.ok) setImages(await res.json());
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);

        try {
            // 1. Upload File
            const uploadData = new FormData();
            uploadData.append('file', file);

            const uploadRes = await fetch('/api/upload', {
                method: 'POST',
                body: uploadData,
            });

            if (!uploadRes.ok) throw new Error('File upload failed');

            const { url } = await uploadRes.json();

            // 2. Save to Gallery DB
            const res = await fetch('/api/gallery', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    src: url,
                    category: filter !== 'All' ? filter : 'Uncategorized',
                    alt: file.name
                })
            });

            if (res.ok) {
                const newImg = await res.json();
                setImages([newImg, ...images]);
            }
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/gallery?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setImages(images.filter(img => img.id !== id));
            }
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);
    const categories = ['All', 'Food', 'Interior', 'Drinks', 'Events', 'Uncategorized'];

    if (loading) return <div className="flex h-96 items-center justify-center text-gold-500"><Loader2 className="animate-spin" size={32} /></div>;

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-rich-black font-heading">Gallery Manager</h2>
                    <p className="text-sand-500 text-sm">Curate your visual portfolio</p>
                </div>
                <label className="cursor-pointer bg-rich-black text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gold-500 hover:text-rich-black transition-all flex items-center gap-3 shadow-lg hover:shadow-gold-500/20">
                    <Upload size={18} />
                    <span>Upload Image</span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                </label>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === cat
                            ? 'bg-gold-500 text-rich-black shadow-md scale-105'
                            : 'bg-white border border-sand-200 text-sand-500 hover:bg-sand-50'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Uploading Placeholder */}
                {uploading && (
                    <div className="aspect-square rounded-xl bg-sand-100 flex flex-col items-center justify-center animate-pulse border-2 border-dashed border-sand-300">
                        <Loader2 className="animate-spin text-rich-black mb-2" size={24} />
                        <p className="text-xs font-bold text-sand-500">Uploading...</p>
                    </div>
                )}

                {filteredImages.length === 0 && !uploading && (
                    <div className="col-span-full py-12 text-center text-sand-400">
                        <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
                        <p>No images found in this category.</p>
                    </div>
                )}

                {filteredImages.map((img) => (
                    <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-rich-black shadow-md cursor-pointer">
                        import {getImageUrl} from '@/lib/utils';
                        // ... (imports)

                        // ... (in component return)
                        <Image
                            src={getImageUrl(img.src) || "/logo.png"}
                            alt={img.alt || 'Gallery'}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 bg-gold-500 text-rich-black text-[10px] font-bold rounded uppercase">{img.category}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors">
                                    <Tag size={14} />
                                </button>
                                <button onClick={() => handleDelete(img.id)} className="p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-lg backdrop-blur-sm transition-colors">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
