export type Translations = {
    nav: {
        home: string;
        menu: string;
        story: string;
        gallery: string;
        contact: string;
        reserve: string;
        bookTable: string;
    };
    hero: {
        est: string;
        titlePart1: string;
        titlePart2: string; // "OF TASTE"
        subtitle: string;
        explore: string;
        watch: string;
    };
    menu: {
        title: string;
        subtitle: string;
        filters: {
            all: string;
        };
    };
    footer: {
        location: string;
        rights: string;
    };
};

export const translations: Record<"fr" | "en" | "ar", Translations> = {
    fr: {
        nav: {
            home: "Accueil",
            menu: "Menu",
            story: "Histoire",
            gallery: "Galerie",
            contact: "Contact",
            reserve: "Réserver",
            bookTable: "Réserver une table",
        },
        hero: {
            est: "Paris • Depuis 1924",
            titlePart1: "UN HÉRITAGE",
            titlePart2: "DE GOÛT",
            subtitle: "Embarquez pour une odyssée culinaire où les épices anciennes d'Arabie rencontrent l'élégance parisienne moderne.",
            explore: "DÉCOUVRIR LE MENU",
            watch: "NOTRE HISTOIRE",
        },
        menu: {
            title: "NOTRE COLLECTION",
            subtitle: "Une sélection exquise de saveurs yéménites authentiques",
            filters: {
                all: "Tout",
            },
        },
        footer: {
            location: "123 Avenue des Champs-Élysées, Paris",
            rights: "Tous droits réservés.",
        },
    },
    en: {
        nav: {
            home: "Home",
            menu: "Menu",
            story: "Story",
            gallery: "Gallery",
            contact: "Contact",
            reserve: "Reserve",
            bookTable: "Book a Table",
        },
        hero: {
            est: "Paris • Since 1924",
            titlePart1: "A LEGACY",
            titlePart2: "OF TASTE",
            subtitle: "Embark on a culinary odyssey where the ancient spices of Arabia meet modern Parisian elegance. A dining experience curated for the senses.",
            explore: "EXPLORE MENU",
            watch: "OUR STORY",
        },
        menu: {
            title: "OUR COLLECTION",
            subtitle: "An exquisite selection of authentic Yemeni flavors",
            filters: {
                all: "All",
            },
        },
        footer: {
            location: "123 Champs-Élysées Avenue, Paris",
            rights: "All rights reserved.",
        },
    },
    ar: {
        nav: {
            home: "الرئيسية",
            menu: "القائمة",
            story: "قصتنا",
            gallery: "المعرض",
            contact: "تواصل",
            reserve: "حجز",
            bookTable: "احجز طاولتك",
        },
        hero: {
            est: "باريس • منذ ١٩٢٤",
            titlePart1: "تراث",
            titlePart2: "من الذوق",
            subtitle: "انطلق في رحلة طهي حيث تلتقي توابل الجزيرة العربية القديمة بالأناقة الباريسية الحديثة. تجربة طعام مصممة للحواس.",
            explore: "اكتشف القائمة",
            watch: "قصتنا",
        },
        menu: {
            title: "تـشكيلتنا",
            subtitle: "مختارات فاخرة من النكهات اليمنية الأصيلة",
            filters: {
                all: "الكل",
            },
        },
        footer: {
            location: "١٢٣ شارع الشانزليزيه، باريس",
            rights: "جميع الحقوق محفوظة.",
        },
    },
};
