import type { Metadata } from "next";
import { Playfair_Display, Inter, Tajawal } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Socotra | Authentic Yemeni Cuisine in Paris",
  description: "Experience the luxury of Yemeni tradition. Mandi, Saltah, and premium hospitality in the heart of Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${tajawal.variable} antialiased bg-sand-light text-brown selection:bg-gold/30 selection:text-brown`}
      >
        {children}
      </body>
    </html>
  );
}
