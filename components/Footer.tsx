import Link from "next/link";
import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-rich-black text-sand-50 pt-20 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-30">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <span className="font-heading text-4xl font-bold tracking-wider mb-6 block text-gold">
                        SOCOTRA
                    </span>
                    <p className="max-w-md text-sand/60 leading-relaxed mb-8">
                        Experience the culinary heritage of Yemen in a setting of modern luxury.
                        From the island of bliss to the heart of Paris.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brown transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brown transition-all">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-heading text-xl mb-6 text-sand">Explore</h4>
                    <ul className="space-y-4 text-sand/60">
                        <li><Link href="#menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
                        <li><Link href="#about" className="hover:text-gold transition-colors">Our Story</Link></li>
                        <li><Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                        <li><Link href="#reserve" className="hover:text-gold transition-colors">Reservations</Link></li>
                    </ul>
                </div>

                {/* Contact/Hours */}
                <div>
                    <h4 className="font-heading text-xl mb-6 text-sand">Visit Us</h4>
                    <ul className="space-y-4 text-sand/60">
                        <li className="flex gap-3 items-start">
                            <MapPin size={20} className="text-gold shrink-0 mt-1" />
                            <span>47 Rue Notre Dame de Lorette<br />75009 Paris</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone size={20} className="text-gold shrink-0" />
                            <span>+33 1 78 99 06 78</span>
                        </li>
                        <li className="pt-4 border-t border-white/10 mt-4">
                            <span className="block text-gold text-sm font-bold uppercase tracking-widest mb-1">Open Daily</span>
                            12:00 PM - 11:00 PM
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sand/40 text-sm flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto items-center gap-4">
                <p>© 2026 Restaurant Socotra. All rights reserved.</p>
                <p>Paris • Yemen • Luxury</p>
            </div>
        </footer>
    );
};

export default Footer;
