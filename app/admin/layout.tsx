import Link from 'next/link';
import {
    LayoutDashboard,
    Menu as MenuIcon,
    LogOut,
    Settings,
    UtensilsCrossed,
    Users,
    ClipboardList,
    Bell,
    ChevronDown,
    Store
} from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-sand-50">
            {/* Sidebar */}
            <aside className="w-72 bg-rich-black text-sand-50 flex flex-col shadow-2xl z-20">
                <div className="p-6 border-b border-white/5 bg-black/20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-rich-black font-bold text-xl">
                            S
                        </div>
                        <div>
                            <h1 className="text-xl font-heading text-white font-bold tracking-wide">SOCOTRA</h1>
                            <p className="text-[10px] text-gold-500/80 tracking-[0.2em] uppercase">Enterprise System</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
                    {/* Main Group */}
                    <div className="space-y-2">
                        <p className="px-4 text-[10px] font-bold text-sand-400/60 uppercase tracking-widest mb-2">Overview</p>
                        <Link href="/admin" className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20 hover:bg-gold-500 hover:text-rich-black transition-all duration-300">
                            <LayoutDashboard size={18} />
                            <span className="font-bold text-sm tracking-wide">Dashboard</span>
                        </Link>
                    </div>

                    {/* Management Group */}
                    <div className="space-y-1">
                        <p className="px-4 text-[10px] font-bold text-sand-400/60 uppercase tracking-widest mb-2">Content</p>
                        <Link href="/admin/items" className="group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sand-100 hover:bg-white/5 hover:text-gold-400 transition-all">
                            <UtensilsCrossed size={18} className="text-sand-400 group-hover:text-gold-400 transition-colors" />
                            <span className="font-medium text-sm">Menu Items</span>
                        </Link>
                        <Link href="/admin/categories" className="group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sand-100 hover:bg-white/5 hover:text-gold-400 transition-all">
                            <MenuIcon size={18} className="text-sand-400 group-hover:text-gold-400 transition-colors" />
                            <span className="font-medium text-sm">Categories</span>
                        </Link>
                        <Link href="/admin/gallery" className="group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sand-100 hover:bg-white/5 hover:text-gold-400 transition-all">
                            <div className="text-sand-400 group-hover:text-gold-400 transition-colors">🖼️</div>
                            <span className="font-medium text-sm">Gallery</span>
                        </Link>
                    </div>

                    {/* Bookings & Users */}
                    <div className="space-y-1 mt-4">
                        <p className="px-4 text-[10px] font-bold text-sand-400/60 uppercase tracking-widest mb-2">Management</p>
                        <Link href="/admin/reservations" className="group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sand-100 hover:bg-white/5 hover:text-gold-400 transition-all">
                            <div className="text-sand-400 group-hover:text-gold-400 transition-colors">📅</div>
                            <span className="font-medium text-sm">Reservations</span>
                        </Link>
                        <Link href="/admin/staff" className="group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sand-100 hover:bg-white/5 hover:text-gold-400 transition-all">
                            <Users size={18} className="text-sand-400 group-hover:text-gold-400 transition-colors" />
                            <span className="font-medium text-sm">Staff & Roles</span>
                        </Link>
                    </div>



                    {/* Settings Group */}
                    <div className="space-y-1">
                        <p className="px-4 text-[10px] font-bold text-sand-400/60 uppercase tracking-widest mb-2">System</p>
                        <Link href="/admin/settings" className="group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sand-100 hover:bg-white/5 hover:text-gold-400 transition-all">
                            <Settings size={18} className="text-sand-400 group-hover:text-gold-400 transition-colors" />
                            <span className="font-medium text-sm">Configuration</span>
                        </Link>
                    </div>
                </nav>

                <div className="p-4 border-t border-white/5 bg-black/20">
                    <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all group">
                        <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
                        <span className="font-bold text-sm tracking-wide">Sign Out</span>
                    </button>
                    <p className="text-center text-[10px] text-white/20 mt-4">v2.3.0 Enterprise Build</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-sand-50 relative">
                {/* Top Navigation Bar */}
                <header className="h-16 bg-white border-b border-sand-200 flex items-center justify-between px-8 shadow-sm z-10">
                    <div className="flex items-center gap-6">
                        <h2 className="text-rich-black font-bold text-lg font-heading tracking-tight">Dashboard</h2>
                        <div className="h-6 w-px bg-sand-200"></div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-sand-50 rounded-md border border-sand-200 cursor-pointer hover:border-gold-400 transition-colors">
                            <Store size={14} className="text-rich-black/60" />
                            <span className="text-xs font-bold text-rich-black">Main Branch - Paris</span>
                            <ChevronDown size={12} className="text-rich-black/40" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 rounded-full hover:bg-sand-50 transition-colors text-rich-black/60 hover:text-rich-black">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-sand-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-rich-black">Admin User</p>
                                <p className="text-xs text-sand-500">Super Administrator</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-rich-black text-gold-500 flex items-center justify-center font-bold shadow-lg border-2 border-white ring-2 ring-sand-100">
                                SA
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
