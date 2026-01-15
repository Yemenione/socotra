"use client";

import { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, CheckCircle, XCircle, Clock, Loader2, RefreshCw } from 'lucide-react';

export default function ReservationsManagement() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/reservations');
            if (res.ok) setReservations(await res.json());
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, status: string) => {
        try {
            const res = await fetch('/api/reservations', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status })
            });

            if (res.ok) {
                setReservations(reservations.map(r => r.id === id ? { ...r, status } : r));
            }
        } catch (e) {
            console.error(e);
        }
    };

    if (loading) return <div className="flex h-96 items-center justify-center text-gold-500"><Loader2 className="animate-spin" size={32} /></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-rich-black font-heading">Reservations</h2>
                    <p className="text-sand-500 text-sm">Manage bookings and availability</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={fetchReservations} className="bg-white border border-sand-200 text-rich-black p-2 rounded-lg hover:bg-sand-50 transition-colors"><RefreshCw size={18} /></button>
                    <button className="bg-rich-black text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-gold-500 hover:text-rich-black transition-colors">
                        + Manual Booking
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-sand-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-sand-50 border-b border-sand-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Guest</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Date & Time</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Guests</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-100">
                        {reservations.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-sand-400 font-bold">No reservations found.</td>
                            </tr>
                        )}
                        {reservations.map((res) => (
                            <tr key={res.id} className="hover:bg-sand-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <p className="font-bold text-rich-black">{res.name}</p>
                                    <p className="text-xs text-sand-400 font-mono">{res.id.slice(-6)}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-rich-black flex items-center gap-1"><Calendar size={12} />{new Date(res.date).toLocaleDateString()}</span>
                                        <span className="text-xs text-sand-500 flex items-center gap-1"><Clock size={12} />{res.time}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-mono font-bold text-lg text-rich-black">{res.guests}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1 text-xs text-sand-500">
                                        <Phone size={12} /> {res.phone}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${res.status === 'CONFIRMED' ? 'bg-green-50 text-green-600 border-green-200' :
                                            res.status === 'PENDING' ? 'bg-gold-50 text-gold-600 border-gold-200' :
                                                'bg-red-50 text-red-500 border-red-200'
                                        }`}>
                                        {res.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {res.status === 'PENDING' && (
                                        <div className="flex justify-end gap-2">
                                            <button onClick={() => updateStatus(res.id, 'CONFIRMED')} className="p-1.5 bg-green-100 text-green-600 rounded hover:bg-green-200" title="Confirm"><CheckCircle size={16} /></button>
                                            <button onClick={() => updateStatus(res.id, 'CANCELLED')} className="p-1.5 bg-red-100 text-red-600 rounded hover:bg-red-200" title="Cancel"><XCircle size={16} /></button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
