"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Save, X, Image as ImageIcon, Search, Filter, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function ItemsManagement() {
    const [items, setItems] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '', nameEn: '', nameAr: '',
        description: '', descriptionEn: '', descriptionAr: '',
        price: '', categoryId: '', image: ''
    });
    const [uploading, setUploading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [itemsRes, catsRes] = await Promise.all([
                fetch('/api/items'),
                fetch('/api/categories')
            ]);
            if (itemsRes.ok) setItems(await itemsRes.json());
            if (catsRes.ok) setCategories(await catsRes.json());
        } catch (e) {
            console.error("Failed to fetch menu data", e);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
                setFormData(prev => ({ ...prev, image: data.url }));
            }
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const method = editingId ? 'PUT' : 'POST';
            const body = {
                ...formData,
                price: parseFloat(formData.price),
                id: editingId
            };

            const res = await fetch('/api/items', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                fetchData();
                resetForm();
                setShowForm(false);
            }
        } catch (error) {
            console.error("Error saving item", error);
        }
    };

    const handleEdit = (item: any) => {
        setFormData({
            name: item.name,
            nameEn: item.nameEn || '',
            nameAr: item.nameAr || '',
            description: item.description || '',
            descriptionEn: item.descriptionEn || '',
            descriptionAr: item.descriptionAr || '',
            price: item.price,
            categoryId: item.categoryId || (categories[0]?.id || ''),
            image: item.image || ''
        });
        setEditingId(item.id);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        try {
            const res = await fetch(`/api/items?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setItems(items.filter(item => item.id !== id));
            }
        } catch (error) {
            console.error("Error deleting item", error);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '', nameEn: '', nameAr: '',
            description: '', descriptionEn: '', descriptionAr: '',
            price: '', categoryId: categories[0]?.id || '', image: ''
        });
        setEditingId(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-rich-black font-heading">Menu Management</h2>
                    <p className="text-sand-500 text-sm">Manage dishes and pricing</p>
                </div>
                <button
                    onClick={() => { setShowForm(!showForm); resetForm(); }}
                    className="bg-gold-500 text-rich-black px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gold-600 shadow-md flex items-center gap-2"
                >
                    {showForm ? <X size={18} /> : <Plus size={18} />}
                    {showForm ? 'Cancel' : 'Add New Item'}
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="bg-white rounded-xl shadow-lg border border-sand-200 p-6 animate-in slide-in-from-top-5">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Item Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    placeholder="Dish Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase text-right block">اسم الصنف (عربي)</label>
                                <input
                                    type="text"
                                    dir="rtl"
                                    value={formData.nameAr}
                                    onChange={e => setFormData({ ...formData, nameAr: e.target.value })}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    placeholder="اسم الطبق"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Price</label>
                                <input
                                    required
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2 bg-white">
                                <label className="text-xs font-bold text-sand-500 uppercase">Category</label>
                                <select
                                    required
                                    value={formData.categoryId}
                                    onChange={e => setFormData({ ...formData, categoryId: e.target.value })}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none bg-white"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full p-3 border border-sand-200 rounded-lg focus:border-gold-500 outline-none"
                                    rows={3}
                                    placeholder="Brief description of the dish..."
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-sand-500 uppercase">Item Image</label>
                                <div className="flex items-center gap-4 p-4 border border-dashed border-sand-300 rounded-lg bg-sand-50">
                                    {formData.image ? (
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-sand-200">
                                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <div className="w-20 h-20 rounded-lg bg-sand-200 flex items-center justify-center text-sand-400">
                                            <ImageIcon size={24} />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <label className="cursor-pointer bg-white border border-sand-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gold-500 hover:text-rich-black transition-colors inline-flex items-center gap-2">
                                            {uploading ? <Loader2 className="animate-spin" size={16} /> : <ImageIcon size={16} />}
                                            {uploading ? 'Uploading...' : 'Upload Image'}
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
                                        </label>
                                        <p className="text-xs text-sand-500 mt-2">Supports JPG, PNG, WEBP (Max 2MB)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-sand-100">
                            <button
                                type="submit"
                                className="bg-rich-black text-gold-500 px-8 py-3 rounded-lg font-bold text-sm hover:bg-rich-black/90 shadow-lg flex items-center gap-2"
                            >
                                <Save size={18} />
                                {editingId ? 'Update Item' : 'Create Item'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Items List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div key={item.id} className="group bg-white rounded-xl border border-sand-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="relative h-48 bg-sand-100">
                            {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-sand-300">
                                    <ImageIcon size={48} />
                                </div>
                            )}
                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="p-2 bg-white text-rich-black rounded-lg shadow-sm hover:bg-gold-500 transition-colors"
                                >
                                    <Pencil size={16} />
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-2 bg-white text-red-500 rounded-lg shadow-sm hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <div className="absolute bottom-2 left-2">
                                <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase rounded">
                                    {item.category?.title || 'Uncategorized'}
                                </span>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-rich-black">{item.name}</h3>
                                <span className="text-gold-600 font-bold font-mono">${Number(item.price).toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-sand-500 line-clamp-2 mb-2">{item.description}</p>
                            {/* <p className="text-xs text-sand-400 text-right font-serif" dir="rtl">{item.nameAr}</p> */}
                            {item.nameAr && <div className="text-xs text-sand-400 text-right font-serif" dir="rtl">{item.nameAr}</div>}
                        </div>
                    </div>
                ))}
            </div>
            {items.length === 0 && !loading && (
                <div className="text-center py-12 text-sand-400">
                    <p>No items found. Add your first dish!</p>
                </div>
            )}
        </div>
    );
}
