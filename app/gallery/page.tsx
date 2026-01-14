import GalleryGrid from "@/components/GalleryGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-rich-black text-sand-50 selection:bg-gold-500/30">
            <Navbar />
            {/* Simple spacing for fixed navbar */}
            <div className="pt-24 lg:pt-32">
                <GalleryGrid />
            </div>
            <Footer />
        </main>
    );
}
