'use client';

import { useState, useEffect } from 'react';
import { Calendar, User, Clock, Users, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Reservation {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string; // ISO string
    time: string;
    guests: number;
    status: string;
    createdAt: string;
}

export default function ReservationsPage() {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const res = await fetch('/api/reservations');
                if (res.ok) {
                    const data = await res.json();
                    setReservations(data);
                }
            } catch (error) {
                console.error("Failed to load reservations", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    if (loading) return <div className="p-8 text-center">Loading reservations...</div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-rich-black">Reservations</h1>
                    <p className="text-sand-600">Manage table bookings</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-sand-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white">
                        <thead className="bg-sand-50 text-rich-black/80 font-bold uppercase text-xs tracking-wider">
                            <tr>
                                <th className="p-4 border-b border-sand-100">Guest</th>
                                <th className="p-4 border-b border-sand-100">Date & Time</th>
                                <th className="p-4 border-b border-sand-100">Party Size</th>
                                <th className="p-4 border-b border-sand-100">Contact</th>
                                <th className="p-4 border-b border-sand-100">Status</th>
                                <th className="p-4 border-b border-sand-100">Booked At</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-sand-100">
                            {reservations.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-sand-500">
                                        No reservations found.
                                    </td>
                                </tr>
                            ) : (
                                reservations.map((res) => (
                                    <tr key={res.id} className="hover:bg-sand-50/50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center">
                                                    <User size={14} />
                                                </div>
                                                <span className="font-bold text-rich-black">{res.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col text-sm">
                                                <div className="flex items-center gap-2 text-rich-black">
                                                    <Calendar size={12} className="text-gold-500" />
                                                    {new Date(res.date).toLocaleDateString()}
                                                </div>
                                                <div className="flex items-center gap-2 text-sand-500">
                                                    <Clock size={12} />
                                                    {res.time}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-1.5 text-rich-black font-medium">
                                                <Users size={14} className="text-sand-400" />
                                                {res.guests}
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-sand-600">
                                            <div className="flex items-center gap-2">
                                                <Phone size={12} />
                                                {res.phone}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wide",
                                                res.status === 'CONFIRMED' ? "bg-green-100 text-green-700" :
                                                    res.status === 'CANCELLED' ? "bg-red-100 text-red-700" :
                                                        "bg-yellow-100 text-yellow-700"
                                            )}>
                                                {res.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-xs text-sand-400">
                                            {new Date(res.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
