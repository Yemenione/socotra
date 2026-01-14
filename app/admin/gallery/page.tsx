"use client";

import { useState, useEffect } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    category?: string;
};

export default function GalleryManagement() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newImage, setNewImage] = useState({ src: '', alt: '', category: 'interior' });

    const fetchImages = async () => {
        try {
            const res = await fetch('/api/gallery');
            const data = await res.json();
            setImages(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch images", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleAddImage = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/gallery', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newImage),
            });
            if (res.ok) {
                setIsModalOpen(false);
                setNewImage({ src: '', alt: '', category: 'interior' });
                fetchImages();
            }
        } catch (error) {
            console.error("Failed to add image", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this image?')) return;
        try {
            const res = await fetch(`/api/gallery?id=${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchImages();
            }
        } catch (error) {
            console.error("Failed to delete image", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-rich-black">Gallery Management</h1>
                    <p className="text-sand-600">Manage your gallery images</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-rich-black text-sand-50 px-6 py-2.5 rounded-md font-bold hover:bg-gold-500 hover:text-rich-black transition-colors"
                >
                    <Plus size={18} />
                    <span>Add New Image</span>
                </button>
            </div>

            {loading ? (
                <div className="text-center py-12">Loading...</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map(img => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="group relative aspect-square bg-sand-100 rounded-lg overflow-hidden shadow-sm"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={() => handleDelete(img.id)}
                                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white text-xs truncate">
                                {img.category}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Add Image Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-sand-200 bg-sand-50">
                                <h3 className="text-xl font-bold text-rich-black">Add Image URL</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-sand-500 hover:text-rich-black">
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleAddImage} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-rich-black mb-1">Image URL</label>
                                    <input
                                        type="url"
                                        required
                                        placeholder="https://images.unsplash.com/..."
                                        value={newImage.src}
                                        onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
                                        className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                    />
                                    <p className="text-xs text-sand-500 mt-1">For V1, please make sure the file exists in public/images or use an external URL.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-rich-black mb-1">Alt Text</label>
                                    <input
                                        required
                                        placeholder="Description of the image"
                                        value={newImage.alt}
                                        onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                                        className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-rich-black mb-1">Category</label>
                                    <select
                                        value={newImage.category}
                                        onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                                        className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                    >
                                        <option value="interior">Interior</option>
                                        <option value="food">Food</option>
                                        <option value="events">Events</option>
                                    </select>
                                </div>
                                <div className="pt-4 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-sand-600 font-bold hover:bg-sand-100 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-rich-black text-sand-50 font-bold rounded hover:bg-gold-500 hover:text-rich-black transition-colors"
                                    >
                                        Add Image
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
