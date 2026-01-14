"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mock login for V1 as planned
        if (email === 'admin@socotra.com' && password === 'admin123') {
            document.cookie = "admin_token=valid; path=/";
            router.push('/admin');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-rich-black">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-gold-500 p-3 rounded-full text-rich-black">
                        <Lock size={32} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-rich-black mb-2">Admin Access</h2>
                <p className="text-center text-sand-600 mb-8">Please sign in to continue</p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-sand-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-sand-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-rich-black"
                            placeholder="admin@socotra.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-sand-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-sand-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-rich-black"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-rich-black text-sand-50 py-3 rounded-md font-bold hover:bg-gold-500 hover:text-rich-black transition-all"
                    >
                        SIGN IN
                    </button>
                </form>
            </div>
        </div>
    );
}
