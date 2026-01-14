"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1544025162-d76690b6d012?q=80&w=1000&auto=format&fit=crop",
        alt: "Luxury Dining Atmosphere",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1000&auto=format&fit=crop",
        alt: "Signature Dish",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
        alt: "Traditional Spices",
        span: "md:col-span-1 md:row-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1550966871-3ed3c6227b3c?q=80&w=1000&auto=format&fit=crop",
        alt: "Plated Perfection",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1000&auto=format&fit=crop",
        alt: "Interior Detail",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
        alt: "Chef at Work",
        span: "md:col-span-2 md:row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
        alt: "Restaurant Ambience",
        span: "md:col-span-1 md:row-span-1",
    },
];

const GalleryGrid = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-rich-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                        Visual Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-sand-50 mb-6">
                        Moments of Excellence
                    </h2>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "relative group overflow-hidden rounded-sm cursor-pointer border border-white/5",
                                image.span
                            )}
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-rich-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                <p className="text-gold-100 font-heading text-lg tracking-wider border-b border-gold-400 pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {image.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] aspect-video">
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button className="absolute top-8 right-8 text-white hover:text-gold-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </motion.div>
            )}
        </section>
    );
};

export default GalleryGrid;
