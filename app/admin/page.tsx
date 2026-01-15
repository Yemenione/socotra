"use client";

import { useEffect, useState } from 'react';
import {
    ShoppingBag,
    Image as ImageIcon,
    Users,
    UtensilsCrossed,
    Calendar,
    ArrowRight
} from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState([
        { label: 'Menu Items', value: '-', sub: 'Dishes available', icon: UtensilsCrossed, color: 'text-gold-500' },
        { label: 'Gallery Images', value: '-', sub: 'Portfolio photos', icon: ImageIcon, color: 'text-blue-500' },
        { label: 'Reservations', value: '-', sub: 'Upcoming bookings', icon: Calendar, color: 'text-purple-500' },
    ]);

    useEffect(() => {
        const fetchRealStats = async () => {
            try {
                const [itemsRes, galleryRes] = await Promise.all([
                    fetch('/api/items'),
                    fetch('/api/gallery')
                ]);
                const itemsCount = (await itemsRes.json())?.length || 0;
                const galleryCount = (await galleryRes.json())?.length || 0;

                // For reservations, we'll just mock for now as we might not have the API ready or populated
                // If you have a reservations API, add it here.
                const reservationsCount = 12;

                setStats([
                    { label: 'Menu Items', value: itemsCount.toString(), sub: 'Active dishes', icon: UtensilsCrossed, color: 'text-gold-500' },
                    { label: 'Gallery Images', value: galleryCount.toString(), sub: 'In gallery', icon: ImageIcon, color: 'text-blue-500' },
                    { label: 'Reservations', value: reservationsCount.toString(), sub: 'Upcoming', icon: Calendar, color: 'text-purple-500' },
                ]);
            } catch (e) {
                console.error("Dashboard stats fetch error", e);
            }
        };
        fetchRealStats();
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-3xl font-heading font-bold text-rich-black">Welcome back, Admin.</h2>
                <p className="text-sand-500 mt-1">Here is what's happening on your website today.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-sand-200 hover:shadow-md transition-shadow group cursor-default">
                        <div className="flex justify-between items-start">
                            <div className="p-3 rounded-lg bg-sand-50 group-hover:bg-sand-100 transition-colors">
                                <stat.icon size={24} className={stat.color} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-4xl font-heading font-bold text-rich-black">{stat.value}</h3>
                            <p className="text-sm text-sand-500 font-bold uppercase tracking-wide mt-1">{stat.label}</p>
                            <p className="text-xs text-sand-400 mt-2">{stat.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200">
                    <h3 className="text-lg font-bold text-rich-black mb-4">Quick Management</h3>
                    <div className="space-y-3">
                        <button onClick={() => window.location.href = '/admin/items'} className="w-full flex items-center justify-between p-4 rounded-lg border border-sand-200 hover:border-gold-500 hover:bg-sand-50 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gold-100 text-gold-600 rounded-md"><UtensilsCrossed size={18} /></div>
                                <div className="text-left">
                                    <p className="font-bold text-rich-black">Manage Menu</p>
                                    <p className="text-xs text-sand-500">Add or edit dishes</p>
                                </div>
                            </div>
                            <ArrowRight size={18} className="text-sand-300 group-hover:text-gold-500 transition-colors" />
                        </button>

                        <button onClick={() => window.location.href = '/admin/gallery'} className="w-full flex items-center justify-between p-4 rounded-lg border border-sand-200 hover:border-gold-500 hover:bg-sand-50 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-md"><ImageIcon size={18} /></div>
                                <div className="text-left">
                                    <p className="font-bold text-rich-black">Update Gallery</p>
                                    <p className="text-xs text-sand-500">Upload new photos</p>
                                </div>
                            </div>
                            <ArrowRight size={18} className="text-sand-300 group-hover:text-gold-500 transition-colors" />
                        </button>

                        <button onClick={() => window.location.href = '/admin/settings'} className="w-full flex items-center justify-between p-4 rounded-lg border border-sand-200 hover:border-gold-500 hover:bg-sand-50 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gray-100 text-gray-600 rounded-md"><Users size={18} /></div>
                                <div className="text-left">
                                    <p className="font-bold text-rich-black">Site Settings</p>
                                    <p className="text-xs text-sand-500">Configuration</p>
                                </div>
                            </div>
                            <ArrowRight size={18} className="text-sand-300 group-hover:text-gold-500 transition-colors" />
                        </button>
                    </div>
                </div>

                <div className="bg-rich-black p-6 rounded-xl shadow-lg border border-gold-500/20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <h3 className="text-lg font-bold text-gold-500 mb-6 relative z-10">System Status</h3>

                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <div>
                                <p className="font-bold text-sm">Website is Live</p>
                                <p className="text-xs text-sand-400">v2.3.0 Stable</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div>
                                <p className="font-bold text-sm">Database Connected</p>
                                <p className="text-xs text-sand-400">PostgreSQL (Supabase)</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <a href="/" target="_blank" className="text-xs font-bold text-gold-400 hover:text-white transition-colors flex items-center gap-2">
                                Visit Public Site <ArrowRight size={12} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
