"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Save, X, Image as ImageIcon } from 'lucide-react';
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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const [itemsRes, catsRes] = await Promise.all([
            fetch('/api/items'),
            fetch('/api/categories')
        ]);
        if (itemsRes.ok) setItems(await itemsRes.json());
        if (catsRes.ok) setCategories(await catsRes.json());
        setLoading(false);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const data = new FormData();
        data.append("file", file);

        try {
            const res = await fetch('/api/upload', {
                method: "POST",
                body: data
            });
            const json = await res.json();
            if (json.success) {
                setFormData(prev => ({ ...prev, image: json.url }));
            }
        } catch (err) {
            console.error(err);
            alert("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Assuming POST for now, need robust API
            const res = await fetch('/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price) // Ensure number
                }),
            });

            if (res.ok) {
                fetchData();
                resetForm();
            }
        } catch (error) {
            console.error("Error saving item", error);
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
            <h1 className="text-2xl font-bold text-rich-black">Menu Items</h1>

            {/* Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200">
                <h3 className="font-bold mb-4">{editingId ? 'Edit Item' : 'Add New Item'}</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Basic Info */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500">Name (FR)</label>
                        <input className="w-full p-2 border rounded" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500">Name (EN)</label>
                        <input className="w-full p-2 border rounded" value={formData.nameEn} onChange={e => setFormData({ ...formData, nameEn: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500">Name (AR)</label>
                        <input className="w-full p-2 border rounded text-right" value={formData.nameAr} onChange={e => setFormData({ ...formData, nameAr: e.target.value })} />
                    </div>

                    {/* Descriptions */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <textarea placeholder="Desc (FR)" rows={2} className="p-2 border rounded" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                        <textarea placeholder="Desc (EN)" rows={2} className="p-2 border rounded" value={formData.descriptionEn} onChange={e => setFormData({ ...formData, descriptionEn: e.target.value })} />
                        <textarea placeholder="Desc (AR)" rows={2} className="p-2 border rounded text-right" value={formData.descriptionAr} onChange={e => setFormData({ ...formData, descriptionAr: e.target.value })} />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="text-xs font-bold text-gray-500">Price (€)</label>
                        <input type="number" step="0.01" className="w-full p-2 border rounded" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} required />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500">Category</label>
                        <select className="w-full p-2 border rounded" value={formData.categoryId} onChange={e => setFormData({ ...formData, categoryId: e.target.value })} required>
                            <option value="">Select...</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                        </select>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="text-xs font-bold text-gray-500">Image</label>
                        <div className="flex items-center gap-2">
                            <input type="file" onChange={handleImageUpload} className="text-xs" accept="image/*" />
                            {uploading && <span className="text-xs text-gold-600">Uploading...</span>}
                        </div>
                        {formData.image && (
                            <div className="mt-2 relative w-16 h-16 rounded overflow-hidden border">
                                <Image src={formData.image} alt="Preview" fill className="object-cover" />
                            </div>
                        )}
                    </div>

                    <div className="md:col-span-3 flex justify-end gap-2 pt-4">
                        {editingId && <button type="button" onClick={resetForm} className="px-4 py-2 text-gray-500">Cancel</button>}
                        <button type="submit" disabled={uploading} className="bg-gold-500 text-rich-black px-6 py-2 rounded font-bold hover:bg-gold-600 disabled:opacity-50">
                            {editingId ? 'Update Item' : 'Create Item'}
                        </button>
                    </div>
                </form>
            </div>

            {/* List */}
            <div className="bg-white rounded-lg shadow-sm border border-sand-200 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-sand-100 text-left">
                        <tr>
                            <th className="p-4">Image</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: any) => (
                            <tr key={item.id} className="border-t border-sand-100">
                                <td className="p-4">
                                    <div className="w-10 h-10 relative rounded overflow-hidden bg-gray-100">
                                        {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
                                    </div>
                                </td>
                                <td className="p-4 font-bold">
                                    {item.name}
                                    <div className="text-xs text-gray-400">{item.nameEn}</div>
                                </td>
                                <td className="p-4 text-sm bg-gray-50 rounded">{item.category?.title}</td>
                                <td className="p-4 font-mono text-gold-600 font-bold">{item.price}€</td>
                                <td className="p-4 flex justify-end gap-2">
                                    {/* Editing logic is simplified for this demo, would populate state */}
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
