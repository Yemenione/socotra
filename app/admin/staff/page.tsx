"use client";

import { useState } from 'react';
import { User, Shield, Mail, Phone, MoreHorizontal, UserPlus } from 'lucide-react';

const staffData = [
    { id: 1, name: 'Jean Dupont', role: 'General Manager', email: 'jean.d@socotra.com', status: 'Active', avatar: 'JD' },
    { id: 2, name: 'Marie Currie', role: 'Head Chef', email: 'marie.c@socotra.com', status: 'Active', avatar: 'MC' },
    { id: 3, name: 'Luc Martin', role: 'Waiter', email: 'luc.m@socotra.com', status: 'On Shift', avatar: 'LM' },
    { id: 4, name: 'Sophie Bernard', role: 'Hostess', email: 'sophie.b@socotra.com', status: 'Offline', avatar: 'SB' },
];

export default function StaffManagement() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-rich-black font-heading">Staff Management</h2>
                    <p className="text-sand-500 text-sm">Manage access and roles</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-rich-black text-white rounded-lg hover:bg-gold-500 hover:text-rich-black transition-all font-bold text-sm shadow-lg shadow-gold-500/10">
                    <UserPlus size={16} />
                    Add Employee
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-sand-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-sand-50 border-b border-sand-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Employee</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-sand-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-100">
                        {staffData.map((staff) => (
                            <tr key={staff.id} className="hover:bg-sand-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-rich-black text-gold-500 flex items-center justify-center font-bold text-sm border-2 border-sand-100">
                                            {staff.avatar}
                                        </div>
                                        <div>
                                            <p className="font-bold text-rich-black text-sm">{staff.name}</p>
                                            <p className="text-xs text-sand-400">ID: SOC-{staff.id.toString().padStart(3, '0')}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Shield size={14} className="text-gold-500" />
                                        <span className="text-sm font-medium text-rich-black">{staff.role}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-xs text-sand-500">
                                            <Mail size={12} /> {staff.email}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${staff.status === 'Active' ? 'bg-green-50 text-green-600 border-green-200' :
                                            staff.status === 'On Shift' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                                'bg-gray-50 text-gray-500 border-gray-200'
                                        }`}>
                                        {staff.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-sand-100 rounded-md text-sand-400 hover:text-rich-black transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
