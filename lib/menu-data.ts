
export type MenuItem = {
    name: string; // French
    nameEn: string; // English
    nameAr: string; // Arabic (used for display)
    description: string; // French
    descriptionEn: string; // English
    price: string;
    image: string;
    featured?: boolean;
};

export type MenuCategory = {
    id: string;
    title: string; // French
    titleEn: string; // English
    titleAr: string; // Arabic
    items: MenuItem[];
};

// HELPER: To keep the TSX clean, we convert the numeric price to string with € sign here
const fmt = (p: number) => `${p.toFixed(2)}€`;
const placeholderImg = "/logo.png"; // Using logo as placeholder as per original data

// Helper to quickly create items (reduced boilerplate)
const createItem = (
    name: string, nameEn: string, nameAr: string,
    price: number,
    desc: string, descEn: string,
    img: string = placeholderImg,
    featured = false
): MenuItem => ({
    name, nameEn, nameAr,
    price: fmt(price),
    description: desc, descriptionEn: descEn,
    image: img,
    featured
});

export const menuData: MenuCategory[] = [
    {
        id: "starters",
        title: "Entrées & Salades",
        titleEn: "Starters & Salads",
        titleAr: "المقبلات والسلطات",
        items: [
            createItem("Salade Arabe", "Arabic Salad", "سلطة عربية", 4.99, "Tomate, Concombre, Laitue, Menthe, Citron", "Tomato, Cucumber, Lettuce, Mint, Lemon"),
            createItem("Salade Olive", "Olive Salad", "سلطة زيتون", 4.99, "Mélange d'olives marinées aux épices", "Mixed olives marinated with spices"),
            createItem("Salade Roquette", "Rocket Salad", "سلطة جرجير", 4.99, "Roquette, Tomate, Oignon, Citron", "Arugula, Tomato, Onion, Lemon"),
            createItem("Salade au Thon", "Tuna Salad", "سلطة تونة", 6.99, "Thon, Légumes frais, Huile d'olive", "Tuna, Fresh vegetables, Olive oil"),
            createItem("Salade Grecque", "Greek Salad", "سلطة يونانية", 6.99, "Feta, Olives, Tomate, Concombre", "Feta, Olives, Tomato, Cucumber"),
            createItem("Houmous", "Hummus", "حمص", 5.99, "Pois chiches, Tahini, Citron, Huile d'olive", "Chickpeas, Tahini, Lemon, Olive oil", placeholderImg, true),
            createItem("Moutabal", "Mutabal", "متبل", 5.99, "Aubergine grillée, Tahini, Yaourt", "Grilled Eggplant, Tahini, Yogurt"),
            createItem("Baba Ghanouj", "Baba Ghanoush", "بابا غنوج", 6.99, "Aubergine fumée, Poivrons, Huile d'olive", "Smoked Eggplant, Peppers, Olive oil"),
            createItem("Feuilles de Vigne", "Grape Leaves", "ورق عنب", 5.99, "Riz, Herbes, Cuit à la vapeur (5 pièces)", "Rice, Herbs, Steamed (5 pieces)"),
            createItem("Kibbeh", "Kibbeh", "كبة", 6.99, "Boulettes de viande et blé concassé (3 pièces)", "Meat and bulgur balls (3 pieces)"),
            createItem("Samboussek Fromage", "Cheese Samosa", "سمبوسة جبن", 5.99, "Pâte croustillante farcie au fromage (4 pièces)", "Crispy pastry stuffed with cheese (4 pieces)"),
            createItem("Samboussek Viande", "Meat Samosa", "سمبوسة لحم", 5.99, "Pâte croustillante farcie à la viande (4 pièces)", "Crispy pastry stuffed with meat (4 pieces)"),
            createItem("Frites", "French Fries", "بطاطس مقلية", 3.99, "Pommes de terre dorées et croustillantes", "Golden and crispy potatoes"),
            createItem("Riz", "Rice", "أرز", 3.50, "Riz basmati parfumé aux épices", "Basmati rice scented with spices"),
            createItem("Pain Maison", "House Bread", "خبز ملوح", 1.50, "Pain traditionnel yéménite cuit au four tandoor", "Traditional Yemeni bread baked in tandoor oven", placeholderImg, true),
            createItem("Assiette Mixte", "Mixed Platter", "مقبلات مشكلة", 14.99, "Houmous, Moutabal, Baba Ghanouj, Salade, Feuilles de vigne", "Hummus, Mutabal, Baba Ghanoush, Salad, Grape Leaves"),
        ]
    },
    {
        id: "viandes",
        title: "Viandes",
        titleEn: "Meats",
        titleAr: "اللحوم",
        items: [
            createItem("Kabsa Agneau", "Lamb Kabsa", "كبسة لحم", 16.99, "Riz basmati, Agneau tendre, Épices Kabsa", "Basmati rice, Tender lamb, Kabsa spices", placeholderImg, true),
            createItem("Mandi Agneau", "Lamb Mandi", "مندي لحم", 17.99, "L'authentique, cuit à l'étouffée sous terre", "The authentic, slow-cooked underground"),
            createItem("Haneeth Agneau", "Lamb Haneeth", "حنيذ لحم", 18.99, "Agneau rôti lentement, très tendre", "Slow-roasted lamb, very tender"),
            createItem("Zorbian Agneau", "Lamb Zurbian", "زربيان لحم", 17.99, "Riz parfumé au safran, Agneau, Pommes de terre", "Saffron scented rice, Lamb, Potatoes"),
            createItem("Madghout Agneau", "Lamb Madghout", "مضغوط لحم", 16.99, "Cuit sous pression, riz très fondant", "Pressure cooked, very melting rice"),
            createItem("Burmah Agneau", "Lamb Burmah", "برمة لحم", 15.99, "Ragoût d'agneau traditionnel dans son bouillon", "Traditional lamb stew in its broth"),
        ]
    },
    {
        id: "poulets",
        title: "Poulets",
        titleEn: "Chicken",
        titleAr: "الدجاج",
        items: [
            createItem("Kabsa Poulet", "Chicken Kabsa", "كبسة دجاج", 12.99, "Demi-poulet, Riz basmati, Épices", "Half chicken, Basmati rice, Spices"),
            createItem("Mandi Poulet", "Chicken Mandi", "مندي دجاج", 13.99, "Demi-poulet fumé, Riz Mandi", "Smoked half chicken, Mandi rice", placeholderImg, true),
            createItem("Haneeth Poulet", "Chicken Haneeth", "حنيذ دجاج", 14.99, "Demi-poulet rôti aux épices spéciales", "Half chicken roasted with special spices"),
            createItem("Zorbian Poulet", "Chicken Zurbian", "زربيان دجاج", 14.99, "Demi-poulet, Riz safran, Yaourt", "Half chicken, Saffron rice, Yogurt"),
            createItem("Madghout Poulet", "Chicken Madghout", "مضغوط دجاج", 13.99, "Demi-poulet cuit sous pression avec le riz", "Half chicken pressure cooked with rice"),
        ]
    },
    {
        id: "poissons",
        title: "Poissons",
        titleEn: "Fish",
        titleAr: "الأسماك",
        items: [
            createItem("Dorade Royale", "Sea Bream", "سمك دنيس", 18.99, "Grillée au four avec épices et citron", "Oven grilled with spices and lemon"),
            createItem("Bar", "Sea Bass", "سمك قاروص", 19.99, "Poisson entier grillé, saveur délicate", "Whole grilled fish, delicate flavor"),
            createItem("Saumon", "Salmon", "سلمون", 17.99, "Pavé de saumon grillé ou au four", "Grilled or baked salmon steak"),
            createItem("Crevettes Grillées", "Grilled Shrimp", "روبيان مشوي", 16.99, "Crevettes marinées à l'ail et citron", "Shrimp marinated with garlic and lemon"),
            createItem("Sayadieh Poisson", "Fish Sayadieh", "صيادية سمك", 15.99, "Riz brun aux oignons caramélisés, Poisson", "Brown rice with caramelized onions, Fish"),
        ]
    },
    {
        id: "specialities",
        title: "Spécialités Yéménites",
        titleEn: "Yemeni Specialities",
        titleAr: "المأكولات اليمنية الشعبية",
        items: [
            createItem("Saltah", "Saltah", "سلته", 11.99, "Le plat national, ragoût bouillonnant, fenugrec", "The national dish, bubbling stew, fenugreek", placeholderImg, true),
            createItem("Fahsa", "Fahsa", "فحسه", 12.99, "Ragoût de viande fondante, servi brûlant", "Melting meat stew, served boiling hot"),
            createItem("Aqdah Poulet", "Chicken Aqdah", "عقدة دجاج", 12.99, "Poulet émincé sauté aux légumes", "Sliced chicken sautéed with vegetables"),
            createItem("Aqdah Agneau", "Lamb Aqdah", "عقدة لحم", 14.99, "Agneau émincé sauté aux épices", "Sliced lamb sautéed with spices"),
            createItem("Aqdah Poisson", "Fish Aqdah", "عقدة سمك", 13.99, "Morceaux de poisson épicés et légumes", "Spicy fish pieces and vegetables"),
            createItem("Foul", "Foul", "فول", 7.99, "Fèves mijotées, tomates, oignons, épices", "Simmered fava beans, tomatoes, onions, spices"),
            createItem("Fassoulia", "Fassoulia", "فاصوليا", 7.99, "Haricots blancs ou rouges, sauce tomate", "White or red beans, tomato sauce"),
            createItem("Shakshouka", "Shakshouka", "شكشوكة", 7.99, "Oeufs brouillés aux tomates et oignons", "Scrambled eggs with tomatoes and onions"),
            createItem("Foie d'Agneau", "Lamb Liver", "kibda", 10.99, "Foie sauté à la yéménite, très tendre", "Sautéed liver Yemeni style, very tender"),
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        titleEn: "Desserts",
        titleAr: "الحلويات",
        items: [
            createItem("Masoub Royal", "Royal Masoub", "معصوب ملكي", 7.99, "Banane, Pain émietté, Crème, Miel, Nigelle", "Banana, Crumbled bread, Cream, Honey, Nigella", placeholderImg, true),
            createItem("Arika", "Arika", "عريكة", 8.99, "Dattes, Pain, Crème, Miel, Fromage (option)", "Dates, Bread, Cream, Honey, Cheese (optional)"),
            createItem("Fatut", "Fatut", "فتوت", 6.99, "Pain émietté, Banane ou dattes, Beurre", "Crumbled bread, Banana or dates, Butter"),
            createItem("Kunafa", "Kunafa", "كنافة", 6.99, "Cheveux d'ange, Fromage fondant, Sirop", "Angel hair, Melting cheese, Syrup"),
            createItem("Baklava", "Baklava", "بقلاوة", 5.99, "Feuilleté aux noix et miel (3 pièces)", "Puff pastry with walnuts and honey (3 pieces)"),
            createItem("Muhallabia", "Muhallabia", "مهلبية", 4.50, "Pudding au lait, eau de rose, pistaches", "Milk pudding, rose water, pistachios"),
        ]
    },
    {
        id: "boissons_chaudes",
        title: "Boissons Chaudes",
        titleEn: "Hot Drinks",
        titleAr: "المشروبات الساخنة",
        items: [
            createItem("Thé Adeni", "Adeni Tea", "شاي عدني", 2.50, "Thé au lait, cardamome, clous de girofle", "Milk tea, cardamom, cloves", placeholderImg, true),
            createItem("Thé Rouge", "Red Tea", "شاي أحمر", 2.00, "Thé noir classique ou à la menthe", "Classic black tea or with mint"),
            createItem("Café Qishr", "Qishr Coffee", "قهوة قشر", 2.50, "Infuion d'écorces de café, gingembre", "Coffee husk infusion, ginger"),
            createItem("Thé Sanaa", "Sanaa Tea", "شاي صنعاني", 2.50, "Thé spécial aux épices douces", "Special tea with mild spices"),
        ]
    },
    {
        id: "boissons_fraiches",
        title: "Boissons Fraîches",
        titleEn: "Cold Drinks",
        titleAr: "المشروبات الباردة",
        items: [
            createItem("Jus de Citron Menthe", "Lemon Mint Juice", "ليمون بالنعناع", 4.50, "Frais et rafraîchissant", "Fresh and refreshing"),
            createItem("Vimto", "Vimto", "فيمتو", 3.00, "Boisson aux fruits rouges gazeuse", "Sparkling berry drink"),
            createItem("Coca Cola", "Coca Cola", "كوكاكولا", 2.50, "", ""),
            createItem("Fanta", "Fanta", "فانتا", 2.50, "", ""),
            createItem("Sprite", "Sprite", "سبريت", 2.50, "", ""),
            createItem("Eau Minérale", "Mineral Water", "ماء", 1.50, "50cl", "50cl"),
        ]
    }
];
