"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuGrid from "@/components/MenuGrid";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-rose-gold/30">
      <Navbar />
      <Hero />
      <About />
      <MenuGrid />
      <Reservation />
      <Footer />
    </main>
  );
}
