"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assuming utils exists, if not I'll inline standard tailwind merge or create it.

interface LuxCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function LuxCard({ children, className, delay = 0 }: LuxCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lux-md transition-all duration-500 hover:shadow-lux-xl hover:border-gold/30",
                className
            )}
        >
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shimmer" />

            {/* Inner Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>

            {/* Golden Corner Accent (Optional luxury touch) */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold-200/20 blur-2xl rounded-full group-hover:bg-gold-300/30 transition-all duration-500" />
        </motion.div>
    );
}
