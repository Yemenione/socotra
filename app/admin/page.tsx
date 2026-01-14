"use client";

import { useEffect, useState } from 'react';
import { ShoppingBag, Image as ImageIcon, Activity } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState([
        { label: 'Gallery Images', value: '-', icon: ImageIcon, color: 'bg-blue-500' },
        { label: 'Menu Items', value: '-', icon: ShoppingBag, color: 'bg-gold-500' },
        { label: 'Visits Today', value: '128', icon: Activity, color: 'bg-green-500' },
    ]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch Items Count
                const itemsRes = await fetch('/api/items');
                const items = await itemsRes.json();
                const itemsCount = Array.isArray(items) ? items.length : 0;

                // Fetch Gallery Count
                const galleryRes = await fetch('/api/gallery');
                const gallery = await galleryRes.json();
                const galleryCount = Array.isArray(gallery) ? gallery.length : 0;

                setStats(prev => [
                    { ...prev[0], value: galleryCount.toString() },
                    { ...prev[1], value: itemsCount.toString() },
                    prev[2] // Keep visits static for now as we don't have analytics
                ]);
            } catch (error) {
                console.error("Failed to fetch stats");
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 flex items-center gap-4">
                        <div className={`p-4 rounded-full text-white ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sand-600 text-sm font-bold uppercase tracking-wide">{stat.label}</p>
                            <h3 className="text-3xl font-heading font-bold text-rich-black mt-1">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-sand-200 p-6">
                <h3 className="text-xl font-bold text-rich-black mb-4">Quick Actions</h3>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-rich-black text-sand-50 rounded-md font-bold hover:bg-gold-500 hover:text-rich-black transition-colors" onClick={() => window.location.href = '/admin/menu'}>
                        + Add New Menu Item
                    </button>
                    <button className="px-6 py-3 bg-white border border-sand-300 text-rich-black rounded-md font-bold hover:bg-sand-50 transition-colors" onClick={() => window.open('/', '_blank')}>
                        View Live Site
                    </button>
                </div>
            </div>
        </div>
    );
}
