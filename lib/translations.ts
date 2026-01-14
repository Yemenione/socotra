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

        titlePart1: string;
        titlePart2: string; // "OF TASTE"
        subtitle: string;
        explore: string;
        watch: string;
        reserve: string;
    };
    about: {
        label: string;
        title: string;
        p1: string;
        p2: string;
        stats: {
            halal: string;
            daily: string;
            guests: string;
        };
        imageTitle: string;
        imageSubtitle: string;
    };
    menu: {
        title: string;
        subtitle: string;
        filters: {
            all: string;
        };
    };
    reservation: {
        label: string;
        titlePart1: string;
        titlePart2: string;
        subtitle: string;
        phone: string;
        address: string;
        formTitle: string;
        formSubtitle: string;
        labels: {
            name: string;
            date: string;
            time: string;
            guests: string;
        };
        confirm: string;
    };
    footer: {
        description: string;
        brand: string;
        explore: string;
        visit: string;
        openDaily: string;
        rights: string;
        location: string;
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

            titlePart1: "SOCOTRA",
            titlePart2: "L'HÉRITAGE DU GOÛT",
            subtitle: "Embarquez pour une odyssée culinaire où les épices anciennes d'Arabie rencontrent l'élégance parisienne moderne.",
            explore: "DÉCOUVRIR LE MENU",
            watch: "NOTRE HISTOIRE",
            reserve: "RÉSERVER UNE TABLE",
        },
        about: {
            label: "Notre Histoire",
            title: "Traditions Ancestrales, Luxe Moderne",
            p1: "Bienvenue à Socotra, où la mystique de l'île légendaire rencontre l'élégance parisienne. Notre voyage a commencé avec un désir simple : partager le joyau caché de la cuisine yéménite avec le monde.",
            p2: "De la tendresse mijotée de notre Mandi aux marmites grésillantes de Saltah, chaque plat raconte une histoire de routes commerciales, d'épices anciennes et de la chaleur de l'hospitalité arabe.",
            stats: {
                halal: "100% Halal",
                daily: "Frais du Jour",
                guests: "Visiteurs",
            },
            imageTitle: "L'Heure Dorée",
            imageSubtitle: "Une expérience culinaire unique.",
        },
        menu: {
            title: "NOTRE COLLECTION",
            subtitle: "Une sélection exquise de saveurs yéménites authentiques",
            filters: {
                all: "Tout",
            },
        },
        reservation: {
            label: "RÉSERVATIONS",
            titlePart1: "Réservez Votre",
            titlePart2: "Expérience",
            subtitle: "Immergez-vous dans l'atmosphère authentique de Socotra. Places limitées pour un voyage culinaire intime.",
            phone: "+33 1 78 99 06 78",
            address: "47 Rue Notre Dame de Lorette",
            formTitle: "Réservation Privée",
            formSubtitle: "Confirmation Immédiate",
            labels: {
                name: "Nom Complet",
                date: "Date",
                time: "Heure",
                guests: "Invités",
            },
            confirm: "CONFIRMER LA DEMANDE",
        },
        footer: {
            brand: "SOCOTRA",
            description: "Découvrez l'héritage culinaire du Yémen dans un cadre de luxe moderne. De l'île de la félicité au cœur de Paris.",
            explore: "Explorer",
            visit: "Nous Rendre Visite",
            openDaily: "Ouvert Tous les Jours",
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

            titlePart1: "SOCOTRA",
            titlePart2: "A LEGACY OF TASTE",
            subtitle: "Embark on a culinary odyssey where the ancient spices of Arabia meet modern Parisian elegance. A dining experience curated for the senses.",
            explore: "EXPLORE MENU",
            watch: "OUR STORY",
            reserve: "RESERVE A TABLE",
        },
        about: {
            label: "The Story",
            title: "Ancestral Traditions, Modern Luxury",
            p1: "Welcome to Socotra, where the legendary island's mystique meets Parisian elegance. Our journey began with a simple desire: to share the hidden gem of Yemeni cuisine with the world.",
            p2: "From the slow-cooked tenderness of our Mandi to the sizzling stone pots of Saltah, every dish tells a story of trade routes, ancient spices, and the warmth of Arab hospitality.",
            stats: {
                halal: "100% Halal",
                daily: "Fresh Daily",
                guests: "Guests",
            },
            imageTitle: "The Golden Hour",
            imageSubtitle: "Experience dining like never before.",
        },
        menu: {
            title: "OUR COLLECTION",
            subtitle: "An exquisite selection of authentic Yemeni flavors",
            filters: {
                all: "All",
            },
        },
        reservation: {
            label: "RESERVATIONS",
            titlePart1: "Secure Your",
            titlePart2: "Experience",
            subtitle: "Immerse yourself in the authentic atmosphere of Socotra. Limited seating available for an intimate dining journey.",
            phone: "+33 1 78 99 06 78",
            address: "47 Rue Notre Dame de Lorette",
            formTitle: "Private Booking",
            formSubtitle: "Instant Confirmation",
            labels: {
                name: "Full Name",
                date: "Date",
                time: "Time",
                guests: "Guests",
            },
            confirm: "CONFIRM REQUEST",
        },
        footer: {
            brand: "SOCOTRA",
            description: "Experience the culinary heritage of Yemen in a setting of modern luxury. From the island of bliss to the heart of Paris.",
            explore: "Explore",
            visit: "Visit Us",
            openDaily: "Open Daily",
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

            titlePart1: "سقطرى",
            titlePart2: "تراث من الذوق الرفيع",
            subtitle: "انطلق في رحلة طهي حيث تلتقي توابل الجزيرة العربية القديمة بالأناقة الباريسية الحديثة. تجربة طعام مصممة للحواس.",
            explore: "اكتشف القائمة",
            watch: "قصتنا",
            reserve: "احجز طاولتك",
        },
        about: {
            label: "قصتنا",
            title: "تقاليد عريقة، فخامة عصرية",
            p1: "مرحباً بكم في سقطرى، حيث يلتقي سحر الجزيرة الأسطورية بالأناقة الباريسية. بدأت رحلتنا برغبة بسيطة: مشاركة الجوهرة المخفية للمطبخ اليمني مع العالم.",
            p2: "من طراوة المندي المطهو ببطء إلى أواني السلتة الحجرية الساخنة، يحكي كل طبق قصة طرق التجارة، والتوابل القديمة، ودفء الضيافة العربية.",
            stats: {
                halal: "١٠٠٪ حلال",
                daily: "طازج يومياً",
                guests: "ضيوف",
            },
            imageTitle: "الساعة الذهبية",
            imageSubtitle: "تخيل تجربة طعام لا مثيل لها.",
        },
        menu: {
            title: "تـشكيلتنا",
            subtitle: "مختارات فاخرة من النكهات اليمنية الأصيلة",
            filters: {
                all: "الكل",
            },
        },
        reservation: {
            label: "الحجز",
            titlePart1: "احجز",
            titlePart2: "تجربتك",
            subtitle: "انغمس في الأجواء الأصيلة لمطعم سقطرى. أماكن محدودة لرحلة طهي حميمة.",
            phone: "+33 1 78 99 06 78",
            address: "47 شارع نوتردام دي لوريت",
            formTitle: "حجز خاص",
            formSubtitle: "تأكيد فوري",
            labels: {
                name: "الاسم الكامل",
                date: "التاريخ",
                time: "الوقت",
                guests: "الضيوف",
            },
            confirm: "تأكيد الطلب",
        },
        footer: {
            brand: "سقطرى",
            description: "اكتشف التراث الطهوي لليمن في بيئة من الفخامة العصرية. من جزيرة السعادة إلى قلب باريس.",
            explore: "اكتشف",
            visit: "زرنا",
            openDaily: "مفتوح يومياً",
            location: "١٢٣ شارع الشانزليزيه، باريس",
            rights: "جميع الحقوق محفوظة.",
        },
    },
};
