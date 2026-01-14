import Link from 'next/link';
import { LayoutDashboard, Menu as MenuIcon, LogOut, Settings } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-sand-50">
            {/* Sidebar */}
            <aside className="w-64 bg-rich-black text-sand-50 flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-2xl font-heading text-gold-500 font-bold">SOCOTRA</h1>
                    <p className="text-xs text-sand-50/60 tracking-widest uppercase mt-1">Admin Panel</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md bg-white/5 text-gold-100 hover:bg-gold-500 hover:text-rich-black transition-all">
                        <LayoutDashboard size={20} />
                        <span className="font-bold text-sm tracking-wide">DASHBOARD</span>
                    </Link>
                    <Link href="/admin/menu" className="flex items-center gap-3 px-4 py-3 rounded-md text-sand-50/80 hover:bg-gold-500 hover:text-rich-black transition-all">
                        <MenuIcon size={20} />
                        <span className="font-bold text-sm tracking-wide">MENU ITEMS</span>
                    </Link>
                    <Link href="/admin/gallery" className="flex items-center gap-3 px-4 py-3 rounded-md text-sand-50/80 hover:bg-gold-500 hover:text-rich-black transition-all">
                        <div className="w-5 h-5 flex items-center justify-center">📷</div>
                        <span className="font-bold text-sm tracking-wide">GALLERY</span>
                    </Link>
                    <div className="pt-4 mt-4 border-t border-white/10">
                        <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-md text-sand-50/80 hover:bg-gold-500 hover:text-rich-black transition-all">
                            <Settings size={20} />
                            <span className="font-bold text-sm tracking-wide">SETTINGS</span>
                        </Link>
                    </div>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 w-full px-4 py-3 rounded-md text-red-400 hover:bg-red-500/10 transition-colors">
                        <LogOut size={20} />
                        <span className="font-bold text-sm tracking-wide">LOGOUT</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="h-16 bg-white border-b border-sand-200 flex items-center justify-between px-8 shadow-sm">
                    <h2 className="text-rich-black font-bold text-lg">Overview</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-rich-black font-bold">A</div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
