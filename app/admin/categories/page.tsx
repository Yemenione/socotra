"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X, ChevronUp, ChevronDown } from 'lucide-react';

export default function CategoriesManagement() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        title: '', titleEn: '', titleAr: '', slug: '', order: 0
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await fetch('/api/categories');
            if (res.ok) setCategories(await res.json());
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const method = editingId && editingId !== 'new' ? 'PUT' : 'POST';
            const body = editingId && editingId !== 'new'
                ? { ...formData, id: editingId }
                : formData;

            const res = await fetch('/api/categories', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                fetchCategories();
                resetForm();
            } else {
                console.error("Failed to save category");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (cat: any) => {
        setFormData({
            title: cat.title,
            titleEn: cat.titleEn || '',
            titleAr: cat.titleAr || '',
            slug: cat.slug,
            order: cat.order || 0
        });
        setEditingId(cat.id);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category?')) return;
        try {
            const res = await fetch(`/api/categories?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchCategories();
            }
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    const resetForm = () => {
        setFormData({ title: '', titleEn: '', titleAr: '', slug: '', order: 0 });
        setEditingId(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-rich-black font-heading">Categories</h2>
                    <p className="text-sand-500 text-sm">Organize your menu sections</p>
                </div>
                <button onClick={() => setEditingId('new')} className="bg-rich-black text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-gold-500 hover:text-rich-black transition-colors flex items-center gap-2">
                    <Plus size={16} /> New Category
                </button>
            </div>

            {/* Edit/Create Form */}
            {(editingId) && (
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gold-500/20 animate-in fade-in slide-in-from-top-2 relative">
                    <button onClick={resetForm} className="absolute top-4 right-4 text-sand-400 hover:text-red-500"><X size={20} /></button>
                    <h3 className="font-bold text-lg text-rich-black mb-6">{editingId === 'new' ? 'New Category' : 'Edit Category'}</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-sand-500 uppercase tracking-wider mb-1 block">Title (FR)</label>
                                <input className="w-full p-2.5 border border-sand-200 rounded-lg focus:border-gold-500 outline-none" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-sand-500 uppercase tracking-wider mb-1 block">Title (EN)</label>
                                <input className="w-full p-2.5 border border-sand-200 rounded-lg focus:border-gold-500 outline-none" value={formData.titleEn} onChange={e => setFormData({ ...formData, titleEn: e.target.value })} />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-sand-500 uppercase tracking-wider mb-1 block">Title (AR)</label>
                                <input className="w-full p-2.5 border border-sand-200 rounded-lg focus:border-gold-500 outline-none text-right" value={formData.titleAr} onChange={e => setFormData({ ...formData, titleAr: e.target.value })} />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="text-xs font-bold text-sand-500 uppercase tracking-wider mb-1 block">Slug</label>
                                    <input className="w-full p-2.5 border border-sand-200 rounded-lg focus:border-gold-500 outline-none font-mono text-sm" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} required />
                                </div>
                                <div className="w-24">
                                    <label className="text-xs font-bold text-sand-500 uppercase tracking-wider mb-1 block">Order</label>
                                    <input type="number" className="w-full p-2.5 border border-sand-200 rounded-lg focus:border-gold-500 outline-none" value={formData.order} onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) })} />
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 flex justify-end gap-3 pt-4 border-t border-sand-100">
                            <button type="button" onClick={resetForm} className="px-5 py-2.5 text-sand-500 hover:bg-sand-100 rounded-lg font-bold text-sm">Cancel</button>
                            <button type="submit" className="bg-gold-500 text-rich-black px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-gold-600 shadow-md">
                                Save Category
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List */}
            <div className="bg-white rounded-xl shadow-sm border border-sand-200 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-sand-50 text-left border-b border-sand-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider w-16">#</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Slug</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider text-right">Items</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-100">
                        {categories.map((cat, index) => (
                            <tr key={cat.id} className="group hover:bg-sand-50/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-sand-400">{cat.order || index + 1}</td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-rich-black">{cat.title}</p>
                                    <div className="flex gap-2 text-xs text-sand-400 mt-0.5">
                                        <span>{cat.titleEn}</span>
                                        <span>•</span>
                                        <span className="font-arabic">{cat.titleAr}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-sand-100 text-sand-600 rounded text-xs font-mono">{cat.slug}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="font-bold text-rich-black">{cat.items?.length || 0}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleEdit(cat)} className="p-2 text-sand-400 hover:text-gold-500 hover:bg-gold-50 rounded transition-colors"><Pencil size={16} /></button>
                                        <button onClick={() => handleDelete(cat.id)} className="p-2 text-sand-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"><Trash2 size={16} /></button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
