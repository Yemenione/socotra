"use client";

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = {
    id: string;
    title: string;
};

type MenuItem = {
    id: string;
    name: string;
    price: string;
    description: string;
    category: Category;
    categoryId: string;
    nameAr?: string;
};

export default function MenuManagement() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        nameAr: '',
        description: '',
        price: '',
        categoryId: ''
    });

    const fetchCategories = async () => {
        const res = await fetch('/api/categories');
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
        // Set default category for form
        if (data.length > 0) setFormData(prev => ({ ...prev, categoryId: data[0].id }));
    };

    const fetchItems = async () => {
        const res = await fetch('/api/items');
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
    };

    useEffect(() => {
        const init = async () => {
            await Promise.all([fetchCategories(), fetchItems()]);
            setLoading(false);
        };
        init();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchItems(); // Refresh list
                setFormData({ name: '', nameAr: '', description: '', price: '', categoryId: categories[0]?.id || '' });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const filteredItems = items.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.categoryId === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-rich-black">Menu Management</h1>
                    <p className="text-sand-600">Manage your dishes and categories</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-rich-black text-sand-50 px-6 py-2.5 rounded-md font-bold hover:bg-gold-500 hover:text-rich-black transition-colors"
                >
                    <Plus size={18} />
                    <span>Add New Item</span>
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-sand-200 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${selectedCategory === 'all' ? 'bg-rich-black text-sand-50' : 'bg-sand-100 text-rich-black hover:bg-sand-200'
                            }`}
                    >
                        All Items
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${selectedCategory === cat.id ? 'bg-rich-black text-sand-50' : 'bg-sand-100 text-rich-black hover:bg-sand-200'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-sand-300 rounded-full focus:outline-none focus:border-gold-500"
                    />
                </div>
            </div>

            {/* Content */}
            {loading ? (
                <div className="text-center py-12">Loading...</div>
            ) : filteredItems.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-dashed border-sand-300">
                    <p className="text-sand-500">No items found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map(item => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-lg shadow-sm border border-sand-200 overflow-hidden group"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-sand-100 text-xs font-bold px-2 py-1 rounded text-sand-700 uppercase">
                                        {item.category?.title || 'Uncategorized'}
                                    </div>
                                    <span className="font-heading font-bold text-gold-600 text-lg">
                                        €{Number(item.price).toFixed(2)}
                                    </span>
                                </div>
                                <h3 className="font-bold text-xl text-rich-black mb-1">{item.name}</h3>
                                {item.nameAr && <p className="text-sm text-sand-500 font-serif mb-2" dir="rtl">{item.nameAr}</p>}
                                <p className="text-sand-600 text-sm line-clamp-2  mb-6">{item.description}</p>

                                <div className="flex gap-2 pt-4 border-t border-sand-100">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold text-sand-600 hover:text-rich-black hover:bg-sand-100 rounded transition-colors">
                                        <Edit2 size={16} /> Edit
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold text-red-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-sand-200 bg-sand-50">
                                <h3 className="text-xl font-bold text-rich-black">Add New Item</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-sand-500 hover:text-rich-black">
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-rich-black mb-1">Name (EN/FR)</label>
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-rich-black mb-1">Name (Arabic)</label>
                                        <input
                                            dir="rtl"
                                            value={formData.nameAr}
                                            onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                                            className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-rich-black mb-1">Price (€)</label>
                                        <input
                                            type="number" step="0.01" required
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-rich-black mb-1">Category</label>
                                        <select
                                            value={formData.categoryId}
                                            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                                            className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none"
                                        >
                                            {categories.map(c => (
                                                <option key={c.id} value={c.id}>{c.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-rich-black mb-1">Description</label>
                                    <textarea
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-3 py-2 border border-sand-300 rounded focus:border-gold-500 outline-none resize-none"
                                    />
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
                                        Save Item
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
