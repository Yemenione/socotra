export type MenuItem = {
    name: string;
    description: string;
    price: string;
    image: string; // Placeholder for now, or mapped if we have them
    featured?: boolean;
    arabicName?: string;
};

export type MenuCategory = {
    id: string;
    title: string;
    arabicTitle: string;
    items: MenuItem[];
};

export const menuData: MenuCategory[] = [
    {
        id: "starters",
        title: "Entrées & Salades",
        arabicTitle: "المقبلات والسلطات",
        items: [
            { name: "Salade Arabe", arabicName: "سلطة عربية", price: "4.99€", description: "Salade fraîche traditionnelle", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop" },
            { name: "Salade Yéménite", arabicName: "سلطة يمنية", price: "5.99€", description: "Salade épicée aux saveurs du Yémen", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
            { name: "Houmous", arabicName: "حمص", price: "4.99€", description: "Crémeux de pois chiches à l'huile d'olive", image: "https://images.unsplash.com/photo-1577906096429-f7bad7d7bf82?q=80&w=800&auto=format&fit=crop" },
            { name: "Mutabbal", arabicName: "متبل", price: "5.49€", description: "Caviar d'aubergines fumé", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
            { name: "Foul", arabicName: "فول", price: "4.99€", description: "Fèves mijotées aux épices", image: "https://images.unsplash.com/photo-1582234057962-432d72f913d8?q=80&w=800&auto=format&fit=crop" },
            { name: "Chourbah Adas", arabicName: "شوربة عدس", price: "4.49€", description: "Soupe de lentilles", image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?q=80&w=800&auto=format&fit=crop" },
            { name: "Samboussa", arabicName: "سمبوسة", price: "5.49€", description: "Chaussons croustillants farcis (Viande/Fromage)", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop" },
            { name: "Fatayer", arabicName: "فطاير", price: "5.49€", description: "Petits pains farcis", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" }, // reusing placeholder
            { name: "Salade de la Maison", arabicName: "سلطة الدار", price: "6.99€", description: "Spécialité du chef", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop" },
            { name: "Mezze Socotra", arabicName: "مزة سقطرى", price: "12.99€", description: "Assortiment complet de nos entrées", image: "https://images.unsplash.com/photo-1541518763669-27fef04b14fe?q=80&w=800&auto=format&fit=crop", featured: true },
        ]
    },
    {
        id: "meat",
        title: "Viandes",
        arabicTitle: "لحوم",
        items: [
            { name: "Mandi d'Agneau", arabicName: "مندي لحم", price: "19.99€", description: "Agneau tendre cuit au four tandoor avec riz basmati", image: "https://images.unsplash.com/photo-1544025162-d76690b60f61?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Hanid d'Agneau", arabicName: "حنيذ لحم", price: "24.99€", description: "Agneau grillé lentement à l'étouffée", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6f54262?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Mandi Hadrami", arabicName: "مندي حضرمي", price: "22.99€", description: "Spécialité du Hadramaout", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
            { name: "Zurbian", arabicName: "زربيان", price: "21.99€", description: "Biryani yéménite onctueux", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
            { name: "Fahsah", arabicName: "فحسة", price: "18.99€", description: "Ragoût de viande fondant servi dans un plat en pierre", image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?q=80&w=800&auto=format&fit=crop" },
            { name: "Saltah", arabicName: "سلته", price: "16.99€", description: "Le plat national, ragoût de légumes et mousse de fenugrec", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Ogda", arabicName: "عقدة", price: "17.99€", description: "Viande émincée sautée aux légumes", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop" },
            { name: "Madfoun", arabicName: "مدفون", price: "24.99€", description: "Viande cuite sous terre (style traditionnel)", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" },
            { name: "Kabsa Viande", arabicName: "كبسة لحم", price: "18.99€", description: "Riz épicé à la viande", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop" },
            { name: "Côtelettes d'Agneau", arabicName: "ريش", price: "19.99€", description: "Grillées aux épices", image: "https://images.unsplash.com/photo-1544025162-d76690b60f61?q=80&w=800&auto=format&fit=crop" },
            { name: "Brochettes de Viande", arabicName: "أوصال", price: "16.99€", description: "Brochettes tendres marinées", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop" },
        ]
    },
    {
        id: "chicken",
        title: "Poulet",
        arabicTitle: "دجاج",
        items: [
            { name: "Mandi Poulet", arabicName: "مندي دجاج", price: "15.99€", description: "Demi-poulet tendre avec riz", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Hanid Poulet", arabicName: "حنيذ دجاج", price: "19.99€", description: "Poulet cuit à l'étouffée", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
            { name: "Zurbian Poulet", arabicName: "زربيان دجاج", price: "17.99€", description: "Biryani au poulet", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
            { name: "Kabsa Poulet", arabicName: "كبسة دجاج", price: "15.99€", description: "Riz safrané au poulet", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop" },
            { name: "Poulet Rôti", arabicName: "دجاج شواية", price: "14.99€", description: "Poulet rôti aux herbes", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
            { name: "Fahsah Poulet", arabicName: "فحسة دجاج", price: "15.99€", description: "Ragoût de poulet", image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?q=80&w=800&auto=format&fit=crop" },
            { name: "Saltah Poulet", arabicName: "سلته دجاج", price: "14.99€", description: "Saltah version poulet", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
            { name: "Brochettes de Poulet", arabicName: "شيش طاووق", price: "13.99€", description: "Marinées au citron et épices", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop" },
        ]
    },
    {
        id: "fish",
        title: "Poissons",
        arabicTitle: "مأكولات بحرية",
        items: [
            { name: "Mandi de Poisson", arabicName: "مندي سمك", price: "18.99€", description: "Poisson du jour façon Mandi", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a3a2720?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Sayyadia", arabicName: "صيادية", price: "19.99€", description: "Riz brun au poisson", image: "https://images.unsplash.com/photo-1615141982880-1313d41dbc4e?q=80&w=800&auto=format&fit=crop" },
            { name: "Zurbian Poisson", arabicName: "زربيان سمك", price: "19.99€", description: "Biryani de poisson", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" }, // Placeholder
            { name: "Poisson Grillé", arabicName: "سمك مشوي", price: "17.99€", description: "Grillé au four traditionnel", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a3a2720?q=80&w=800&auto=format&fit=crop" },
            { name: "Crevettes Grillées", arabicName: "جمبري مشوي", price: "21.99€", description: "Grosses crevettes marinées", image: "https://images.unsplash.com/photo-1535400255456-984241443b29?q=80&w=800&auto=format&fit=crop" },
            { name: "Kabsa Fruits de Mer", arabicName: "كبسة ثمار البحر", price: "22.99€", description: "Riz aux fruits de mer", image: "https://images.unsplash.com/photo-1615141982880-1313d41dbc4e?q=80&w=800&auto=format&fit=crop", featured: true },
        ]
    },
    {
        id: "traditional",
        title: "Plats Traditionnels",
        arabicTitle: "أطباق تقليدية",
        items: [
            { name: "Lahsah", arabicName: "لحسه", price: "9.99€", description: "Spécialité aux œufs et fromage", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Foul Medra", arabicName: "فول مدرى", price: "4.99€", description: "Fèves mijotées", image: "https://images.unsplash.com/photo-1582234057962-432d72f913d8?q=80&w=800&auto=format&fit=crop" },
            { name: "Malawah", arabicName: "ملوح", price: "4.99€", description: "Grand pain traditionnel feuilleté", image: "https://images.unsplash.com/photo-1573147796253-332308cf2b3e?q=80&w=800&auto=format&fit=crop" },
            { name: "Shafout", arabicName: "شفوت", price: "7.99€", description: "Pain, yaourt et herbes", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
            { name: "Aseed", arabicName: "عصيد", price: "8.99€", description: "Bouillie de farine traditionnelle", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
        ]
    },
    {
        id: "fatta",
        title: "Plats Fattah",
        arabicTitle: "فتة",
        items: [
            { name: "Fatta au Bouillon", arabicName: "فتة مرق", price: "5.99€", description: "Pain émietté au bouillon", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
            { name: "Fatta Complète", arabicName: "فتة مشكل", price: "8.99€", description: "Mélange royal", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", featured: true },
        ]
    },
    {
        id: "sides",
        title: "Accompagnements",
        arabicTitle: "مقبلات",
        items: [
            { name: "Riz Basmati", arabicName: "رز بسمتي", price: "3.99€", description: "Portion de riz parfumé", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop" },
            { name: "Pain Frais", arabicName: "خبز", price: "1.00€", description: "Cuit au four tandoor", image: "https://images.unsplash.com/photo-1573147796253-332308cf2b3e?q=80&w=800&auto=format&fit=crop" },
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        arabicTitle: "حلويات",
        items: [
            { name: "Arika Classique", arabicName: "عريكة", price: "6.99€", description: "Dattes, miel, et pain", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop" },
            { name: "Bint al-Sahn", arabicName: "بنت الصحن", price: "8.99€", description: "Gâteau au miel feuilleté", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop", featured: true },
            { name: "Kunafa", arabicName: "كنافة", price: "7.99€", description: "Cheveux d'ange et fromage", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop" },
        ]
    },
    {
        id: "drinks",
        title: "Boissons",
        arabicTitle: "مشروبات",
        items: [
            { name: "Thé Yéménite", arabicName: "شاي عدني", price: "2.99€", description: "Thé au lait et épices (Adani)", image: "https://images.unsplash.com/photo-1571934811356-5cc55449d032?q=80&w=800&auto=format&fit=crop" },
            { name: "Qishr", arabicName: "قشر", price: "3.49€", description: "Boisson à base de cosse de café", image: "https://images.unsplash.com/photo-1571934811356-5cc55449d032?q=80&w=800&auto=format&fit=crop" },
            { name: "Jus d'Orange", arabicName: "عصير برتقال", price: "4.99€", description: "Frais pressé", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop" },
        ]
    }
];
