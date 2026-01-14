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

import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const config = await prisma.siteConfig.findFirst();

  return {
    metadataBase: new URL('https://socotra.paris'),
    title: config?.seoTitle || "Socotra | The Essence of Yemeni Luxury in Paris",
    description: config?.seoDescription || "Experience the refined art of Yemeni cuisine at Socotra. From slow-cooked Mandi to aromatic Saltah, indulge in a culinary journey through ancient traditions in a modern luxury setting.",
    keywords: config?.seoKeywords ? config.seoKeywords.split(',') : ["Yemeni Restaurant Paris", "Luxury Dining Paris", "Halal Fine Dining", "Mandi Paris", "Middle Eastern Cuisine", "Socotra Restaurant"],
    authors: [{ name: "Socotra Paris" }],
    openGraph: {
      title: config?.seoTitle || "Socotra | The Essence of Yemeni Luxury",
      description: config?.seoDescription || "Authentic Yemeni flavors, elevated to perfection. Book your table at Paris's premier Yemeni dining destination.",
      url: "https://socotra.paris",
      siteName: "Socotra Paris",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config?.seoTitle || "Socotra | Luxury Yemeni Cuisine",
      description: config?.seoDescription || "Discover the taste of Yemen in Paris.",
      images: ["/og-image.jpg"],
    },
  };
}

import { LanguageProvider } from "@/lib/language-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${tajawal.variable} antialiased bg-sand-light text-brown selection:bg-gold/30 selection:text-brown`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
