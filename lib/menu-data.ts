export type MenuItem = {
    name: string;
    nameAr?: string;
    price: number;
    description: string;
    image: string;
    featured?: boolean;
};

export type MenuCategoryData = {
    title: string;
    subtitle: string;
    icon: string;
    items: MenuItem[];
};

export type MenuData = {
    [key: string]: {
        [lang: string]: MenuCategoryData;
    };
};

export const menuData: MenuData = {
    // ENTRÉES & SALADES
    starters: {
        fr: {
            title: "Entrées & Salades",
            subtitle: "المقبلات والسلطات",
            icon: "🥗",
            items: [
                {
                    name: "Salade Arabe",
                    nameAr: "سلطة عربية",
                    price: 4.99,
                    description: "Tomate, Concombre, Laitue, Menthe, Citron",
                    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Salad de Yémen",
                    nameAr: "سلطة يمنية",
                    price: 11.99,
                    description: "Tomate, Oignon, Concombre, Carotte, Coriandre",
                    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Salade au Yaourt",
                    nameAr: "سلطة بالزبادي",
                    price: 4.99,
                    description: "Salade fraîche mélangée avec yaourt maison et herbes",
                    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Houmous",
                    nameAr: "حمص",
                    price: 4.99,
                    description: "Purée de pois chiches, Tahini, huile d'olives et cumin",
                    image: "https://images.unsplash.com/photo-1577906096429-07dea797313a?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Mutabbal",
                    nameAr: "متبل",
                    price: 4.99,
                    description: "Caviar d'aubergine grillées",
                    image: "https://images.unsplash.com/photo-1618118029056-e9185aab273f?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Samoussa (3 pièces)",
                    nameAr: "سمبوسة",
                    price: 4.99,
                    description: "Viande Hachée, Légumes ou Fromage",
                    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
                },
            ],
        },
    },

    // LES PLATS DE VIANDE
    meat: {
        fr: {
            title: "Les Plats de Viande",
            subtitle: "أطباق اللحوم",
            icon: "🍖",
            items: [
                {
                    name: "Mandi d'Agneau",
                    nameAr: "لحم مندي",
                    price: 19.99,
                    description:
                        "Agneau grillé au four avec riz basmati parfumé et épices yéménites traditionnelles",
                    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800&auto=format&fit=crop",
                    featured: true,
                },
                {
                    name: "Hanid d'Agneau",
                    nameAr: "لحم حنيذ",
                    price: 20.99,
                    description:
                        "Viande d'agneau cuite lentement au four traditionnel, servie avec riz",
                    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Fahsa de Veau",
                    nameAr: "فحسة",
                    price: 19.99,
                    description:
                        "Ragoût épicé d'agneau servi dans un plat en pierre chaud avec pain",
                    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Saltah",
                    nameAr: "سلتة",
                    price: 13.99,
                    description:
                        "Viande hachée mijotée dans une sauce tomate et légumes fondants, servie dans un plat en pierre chaude",
                    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Kebdah",
                    nameAr: "كبدة",
                    price: 13.99,
                    description: "Foie d'agneau grillé mariné aux épices yéménites",
                    image: "https://images.unsplash.com/photo-1603073066060-da27c73b063d?q=80&w=800&auto=format&fit=crop",
                },
            ],
        },
    },

    // LES PLATS DE POULET
    chicken: {
        fr: {
            title: "Les Plats de Poulet",
            subtitle: "أطباق الدجاج",
            icon: "🍗",
            items: [
                {
                    name: "Mandi de Poulet",
                    nameAr: "دجاج مندي",
                    price: 12.99,
                    description: "Poulet tendre cuit à la vapeur de son riz parfumé, puis doré au four traditionnel",
                    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
                    featured: true,
                },
                {
                    name: "Madbi de Poulet",
                    nameAr: "دجاج مظبي",
                    price: 13.99,
                    description: "Poulet mariné et grillé sur pierre chaude, offrant une saveur authentique",
                    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Poulet Entier",
                    nameAr: "دجاج كامل",
                    price: 20.99,
                    description: "Poulet entier avec du riz",
                    featured: true,
                    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
                },
            ],
        },
    },

    // LES PLATS DE LA MER
    fish: {
        fr: {
            title: "Les Plats de la Mer",
            subtitle: "أطباق البحر",
            icon: "🐟",
            items: [
                {
                    name: "Poisson Moufa",
                    nameAr: "سمك موفى",
                    price: 18.99,
                    description: "Poisson frais délicatement grillé au four traditionnel, accompagné de riz parfumé",
                    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop",
                    featured: true,
                },
                {
                    name: "Crevettes Grillées",
                    nameAr: "جمبري مشوي",
                    price: 18.99,
                    description: "Crevettes fraîches grillées à la perfection, subtilement relevées aux épices",
                    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
                },
            ],
        },
    },

    // DESSERTS
    desserts: {
        fr: {
            title: "Desserts Yéménites",
            subtitle: "الحلويات اليمنية",
            icon: "🍰",
            items: [
                {
                    name: "Arika Royale",
                    nameAr: "عريكة ملكية",
                    price: 5.99,
                    description: "Arika garnie de fruits secs, miel et crème",
                    image: "https://images.unsplash.com/photo-1551024601-569d6f46319c?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Kunafa",
                    nameAr: "كنافة",
                    price: 5.99,
                    description: "Pâtisserie au fromage doux et sirop sucré",
                    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop",
                },
            ],
        },
    },
};
