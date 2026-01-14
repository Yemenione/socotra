export type MenuItem = {
    name: string;
    description: string;
    price: string;
    image: string;
    featured?: boolean;
    arabicName: string;
    nameAr?: string; // keeping for compatibility if needed, but we will use arabicName in components
};

export type MenuCategory = {
    id: string;
    title: string;
    arabicTitle: string;
    items: MenuItem[];
};

// HELPER: To keep the TSX clean, we convert the numeric price to string with € sign here
const fmt = (p: number) => `${p.toFixed(2)}€`;
const placeholderImg = "/logo.png"; // Using logo as placeholder as per original data

export const menuData: MenuCategory[] = [
    {
        id: "starters",
        title: "Entrées & Salades",
        arabicTitle: "المقبلات والسلطات",
        items: [
            { name: "Salade Arabe", arabicName: "سلطة عربية", price: fmt(4.99), description: "Tomate, Concombre, Laitue, Menthe, Citron", image: placeholderImg },
            { name: "Salad de Yémen", arabicName: "سلطة يمنية", price: fmt(11.99), description: "Tomate, Oignon, Concombre, Carotte, Coriandre", image: placeholderImg },
            { name: "Salad de Sanaa", arabicName: "سلطة صنعاء", price: fmt(11.99), description: "Tomate, Oignon, Concombre, Carotte, Coriandre, Boulettes de viande, sauce piquante", image: placeholderImg },
            { name: "Salade au Yaourt", arabicName: "سلطة بالزبادي", price: fmt(4.99), description: "Salade fraîche mélangée avec yaourt maison et herbes", image: placeholderImg },
            { name: "Concombre au Yaourt", arabicName: "خيار بالزبادي", price: fmt(4.99), description: "Tzatziki yéménite: concombre, yaourt, menthe et ail", image: placeholderImg },
            { name: "Chafoute", arabicName: "شفوت", price: fmt(4.99), description: "Lahouh (Galette) émietté, Lait fermenté, Tomate, Oignon et herbes", image: placeholderImg },
            { name: "Houmous", arabicName: "حمص", price: fmt(4.99), description: "Purée de pois chiches, Tahini, huile d'olives et cumin", image: placeholderImg },
            { name: "Mutabbal", arabicName: "متبل", price: fmt(4.99), description: "Caviar d'aubergine grillées", image: placeholderImg },
            { name: "Samoussa (3 pièces)", arabicName: "سمبوسة", price: fmt(4.99), description: "Viande Hachée, Légumes ou Fromage", image: placeholderImg },
            { name: "Mix Socotra", arabicName: "مزيج سقطرى", price: fmt(9.99), description: "Assortiment d'entrées: houmous, mutabbal, salade et pain", image: placeholderImg },
        ]
    },
    {
        id: "meat",
        title: "Les Plats de Viande",
        arabicTitle: "أطباق اللحوم",
        items: [
            { name: "Mandi d'Agneau", arabicName: "لحم مندي", price: fmt(19.99), description: "Agneau grillé au four avec riz basmati parfumé et épices yéménites traditionnelles", image: placeholderImg },
            { name: "Hanid d'Agneau", arabicName: "لحم حنيذ", price: fmt(20.99), description: "Viande d'agneau cuite lentement au four traditionnel, servie avec riz", image: placeholderImg },
            { name: "Madfoun d'Agneau", arabicName: "لحم مدفون", price: fmt(21.99), description: "Agneau enterré et cuit à l'étouffée avec épices et riz basmati", image: placeholderImg },
            { name: "Barma d'Agneau", arabicName: "لحم برمة", price: fmt(21.99), description: "Ragoût d'agneau mijoté avec légumes et épices dans un pot traditionnel", image: placeholderImg },
            { name: "Kabsseh d'Agneau", arabicName: "لحم كبسة", price: fmt(25.99), description: "Viande pressée avec riz kabsa épicé, noix et raisins secs", image: placeholderImg },
            { name: "Fahsa de Veau", arabicName: "فحسة", price: fmt(19.99), description: "Ragoût épicé d'agneau servi dans un plat en pierre chaud avec pain", image: placeholderImg },
            { name: "Aqda de Veau", arabicName: "عقدة", price: fmt(19.99), description: "Morceaux d'agneau grillés avec oignons, tomates et épices", image: placeholderImg },
            { name: "Saltah", arabicName: "سلتة", price: fmt(13.99), description: "Viande hachée mijotée dans une sauce tomate et légumes fondants, servie dans un plat en pierre chaude, accompagnée de pain fait maison", image: placeholderImg },
            { name: "Mix Viande et Foie", arabicName: "مشكل لحم وكبدة", price: fmt(15.99), description: "Assortiment de viande tendre et foie d'agneau grillés", image: placeholderImg },
            { name: "Kebdah", arabicName: "كبدة", price: fmt(13.99), description: "Foie d'agneau grillé mariné aux épices yéménites", image: placeholderImg },
            { name: "Lahme Sogar", arabicName: "لحمة صغار", price: fmt(13.99), description: "Petits morceaux d'agneau tendres grillés avec épices", image: placeholderImg },
        ]
    },
    {
        id: "chicken",
        title: "Les Plats de Poulet",
        arabicTitle: "أطباق الدجاج",
        items: [
            { name: "Mandi de Poulet", arabicName: "دجاج مندي", price: fmt(12.99), description: "Poulet tendre cuit à la vapeur de son riz parfumé, puis doré au four traditionnel", image: placeholderImg },
            { name: "Madbi de Poulet", arabicName: "دجاج مظبي", price: fmt(13.99), description: "Poulet mariné et grillé sur pierre chaude, offrant une saveur authentique et une texture juteuse, servi avec un riz délicatement parfumé", image: placeholderImg },
            { name: "Madfoun de Poulet", arabicName: "دجاج مدفون", price: fmt(13.99), description: "Poulet cuit à l'étouffée, accompagné de pommes de terre et d'oignons fondants, servi avec un riz parfumé", image: placeholderImg },
            { name: "Aqdah de Poulet", arabicName: "دجاج عقدة", price: fmt(13.99), description: "Emincés de Poulet fondants, sautés avec des oignons, tomates et poivrons, servis avec un riz parfumé ou un pain fait maison", image: placeholderImg },
            { name: "Mix Légumes et Poulet", arabicName: "مشكل خضار ودجاج", price: fmt(16.99), description: "Assortiment de légumes grillés avec poulet mariné", image: placeholderImg },
            { name: "Poulet Entier", arabicName: "دجاج كامل", price: fmt(20.99), description: "Poulet entier avec du riz", featured: true, image: placeholderImg },
            { name: "Poulet aux Légumes", arabicName: "دجاج بالخضار", price: fmt(16.99), description: "Poulet tendre mariné aux épices, accompagné de légumes grillés colorés et délicatement parfumés", image: placeholderImg },
            { name: "Grillé Poulet", arabicName: "دجاج مشوي", price: fmt(13.99), description: "Poitrines de poulet grillées marinées aux épices yéménites avec riz", image: placeholderImg },
        ]
    },
    {
        id: "fish",
        title: "Les Plats de la Mer",
        arabicTitle: "أطباق البحر",
        items: [
            { name: "Poisson Moufa", arabicName: "سمك موفى", price: fmt(18.99), description: "Poisson frais délicatement grillé au four traditionnel, accompagné de riz parfumé et de quartiers de citron", featured: true, image: placeholderImg },
            { name: "Pain Poisson Dattes", arabicName: "سمك بالخبز والتمر", price: fmt(20.99), description: "Poisson cuit dans le pain yéménite avec dates et fenugrec", image: placeholderImg },
            { name: "Pain Poisson Banane", arabicName: "سمك بالخبز والموز", price: fmt(20.99), description: "Poisson cuit dans le pain yéménite avec bananes et fenugrec", image: placeholderImg },
            { name: "Crevettes Grillées", arabicName: "جمبري مشوي", price: fmt(18.99), description: "Crevettes fraîches grillées à la perfection, subtilement relevées aux épices, servies avec un riz", featured: true, image: placeholderImg },
            { name: "Crevettes Cuites", arabicName: "جمبري مطبوخ", price: fmt(18.99), description: "Crevettes cuites avec oignons, tomates et poivrons dans une sauce spéciale", image: placeholderImg },
            { name: "Aqda de Crevettes", arabicName: "جمبري عقدة", price: fmt(18.99), description: "Crevettes sautées avec oignons, tomates et légumes épicés", image: placeholderImg },
        ]
    },
    {
        id: "traditional",
        title: "Plats Traditionnels",
        arabicTitle: "الأطباق التقليدية",
        items: [
            { name: "Lahsah", arabicName: "لحسة", price: fmt(12.99), description: "Oeufs au fromage", image: placeholderImg },
            { name: "Mix de Légumes", arabicName: "مشكل خضار", price: fmt(12.99), description: "Assortiment coloré de légumes grillés: aubergines, courgettes, poivrons et oignons", image: placeholderImg },
            { name: "Foul Medra", arabicName: "فول مدرع", price: fmt(10.99), description: "Fèves savoureuses mijotées dans plat en pierre cuite avec oignons, tomates et coriandre fraîche", image: placeholderImg },
            { name: "Foul Medra aux Œufs", arabicName: "فول مدرع بالبيض", price: fmt(11.99), description: "Fèves medra accompagnées d'œufs au plat", image: placeholderImg },
            { name: "Foul Medra au Tahini", arabicName: "فول مدرع بالطحينة", price: fmt(11.99), description: "Fèves medra avec sauce tahini crémeuse", image: placeholderImg },
            { name: "Foul Medra au Fromage", arabicName: "فول مدرع بالجبن", price: fmt(11.99), description: "Fèves medra gratinées avec fromage fondu", image: placeholderImg },
            { name: "Haricots Secs", arabicName: "فاصوليا يابسة", price: fmt(12.99), description: "Haricots blancs mijotés avec sauce tomate et epices", image: placeholderImg },
            { name: "Haricots Medra", arabicName: "فاصوليا مدرع", price: fmt(11.99), description: "Haricots cuits dans un plat en pierre cuite avec oignons, tomates, coriandre", image: placeholderImg },
            { name: "Haricots aux Œufs", arabicName: "فاصوليا بالبيض", price: fmt(11.99), description: "Haricots medra avec œufs au plat", image: placeholderImg },
            { name: "Haricots au Tahini", arabicName: "فاصوليا بالطحينة", price: fmt(11.99), description: "Haricots medra avec sauce tahini onctueuse", image: placeholderImg },
            { name: "Haricots au Fromage", arabicName: "فاصوليا بالجبن", price: fmt(11.99), description: "Haricots medra gratinés au fromage", image: placeholderImg },
            { name: "Petits Pois Medra", arabicName: "بازلاء مدرع", price: fmt(10.99), description: "Petits pois cuits avec oignons, tomates et coriandre", image: placeholderImg },
            { name: "Petits Pois aux Œufs", arabicName: "بازلاء بالبيض", price: fmt(11.99), description: "Petits pois medra accompagnés d'œufs au plat", image: placeholderImg },
            { name: "Petits Pois au Tahini", arabicName: "بازلاء بالطحينة", price: fmt(11.99), description: "Petits pois medra avec sauce tahini", image: placeholderImg },
            { name: "Petits Pois au Fromage", arabicName: "بازلاء بالجبن", price: fmt(11.99), description: "Petits pois medra gratinés au fromage", image: placeholderImg },
            { name: "Shakshouka", arabicName: "شكشوكة", price: fmt(12.99), description: "Œufs pochés dans sauce tomate épicée avec poivrons", featured: true, image: placeholderImg },
            { name: "Œufs au Plat", arabicName: "بيض مقلي", price: fmt(11.99), description: "Œufs au plat servis avec pain frais (2 œufs)", image: placeholderImg },
        ]
    },
    {
        id: "fattah",
        title: "Plats Fattah",
        arabicTitle: "أطباق الفتة",
        items: [
            { name: "Fatta au Bouillon (Petit)", arabicName: "فتة بالمرق صغير", price: fmt(8.99), description: "Pain trempé dans bouillon épicé", image: placeholderImg },
            { name: "Fatta au Bouillon (Grand)", arabicName: "فتة بالمرق كبير", price: fmt(10.99), description: "Pain trempé dans bouillon épicé", image: placeholderImg },
            { name: "Fatta aux Œufs (Petit)", arabicName: "فتة بالبيض صغير", price: fmt(9.99), description: "Fatta aux œufs enrichie de lait frais", image: placeholderImg },
            { name: "Fatta aux Œufs (Grand)", arabicName: "فتة بالبيض كبير", price: fmt(10.99), description: "Fatta aux œufs enrichie de lait frais", image: placeholderImg },
            { name: "Fatta à la Viande", arabicName: "فتة باللحم", price: fmt(10.99), description: "Pain en couches avec agneau, bouillon, yaourt", featured: true, image: placeholderImg },
        ]
    },
    {
        id: "bread",
        title: "Les Accompagnements",
        arabicTitle: "المرافقات",
        items: [
            { name: "Bouillon", arabicName: "مرق", price: fmt(1.99), description: "Bouillon traditionnel", image: placeholderImg },
            { name: "Pain Frais", arabicName: "خبز طازج", price: fmt(2.99), description: "Pain frais fait maison", image: placeholderImg },
            { name: "Pain Rustique Socotra", arabicName: "خبز سقطرى ريفي", price: fmt(2.99), description: "Pain rustique traditionnel", image: placeholderImg },
            { name: "Pain Classique", arabicName: "خبز عادي", price: fmt(1.99), description: "Pain classique", image: placeholderImg },
            { name: "Riz", arabicName: "أرز", price: fmt(2.99), description: "Riz basmati parfumé", image: placeholderImg },
            { name: "Frites", arabicName: "بطاطس مقلية", price: fmt(3.99), description: "Frites croustillantes", image: placeholderImg },
            { name: "Salsa au Fromage", arabicName: "صلصة بالجبن", price: fmt(2.99), description: "Sauce au fromage maison", image: placeholderImg },
        ]
    },
    {
        id: "offers",
        title: "Les Offres de Viandes",
        arabicTitle: "عروض اللحوم",
        items: [
            { name: "Mouton Entier", arabicName: "خروف كامل", price: fmt(250.00), description: "Agneau entier grillé au four traditionnel (10-15 personnes) - Commande 24h à l'avance", featured: true, image: placeholderImg },
            { name: "Demi-Mouton", arabicName: "نصف خروف", price: fmt(150.00), description: "Demi-agneau grillé avec riz et sauces (5-8 personnes) - Commande 24h à l'avance", featured: true, image: placeholderImg },
            { name: "Quart de Mouton", arabicName: "ربع خروف", price: fmt(90.99), description: "Quart d'agneau grillé avec accompagnements (3-4 personnes)", image: placeholderImg },
            { name: "Quart de Mouton Spécial", arabicName: "ربع خروف خاص", price: fmt(100.00), description: "Quart d'agneau avec sélection premium (3-4 personnes)", image: placeholderImg },
        ]
    },
    {
        id: "desserts",
        title: "Desserts Yéménites",
        arabicTitle: "الحلويات اليمنية",
        items: [
            { name: "Arika à la Banane", arabicName: "عريكة بالموز", price: fmt(5.99), description: "Pâte feuilletée croustillante avec banane et miel", image: placeholderImg },
            { name: "Arika aux Dattes", arabicName: "عريكة بالتمر", price: fmt(5.99), description: "Pâte feuilletée avec dattes et miel naturel", image: placeholderImg },
            { name: "Arika Royale", arabicName: "عريكة ملكية", price: fmt(5.99), description: "Arika garnie de fruits secs, miel et crème", featured: true, image: placeholderImg },
            { name: "Fatta aux Dattes", arabicName: "فتة بالتمر", price: fmt(4.99), description: "Pain en couches avec dattes, miel et beurre clarifié", image: placeholderImg },
            { name: "Fatta à la Banane", arabicName: "فتة بالموز", price: fmt(4.99), description: "Pain en couches avec banane, miel et crème", image: placeholderImg },
            { name: "Fatta Royale", arabicName: "فتة ملكية", price: fmt(4.99), description: "Pain en couches avec banane, miel et crème", image: placeholderImg },
            { name: "Soussi", arabicName: "سوسي", price: fmt(5.99), description: "Dessert traditionnel au pain, miel et épices", image: placeholderImg },
            { name: "Kunafa", arabicName: "كنافة", price: fmt(5.99), description: "Pâtisserie au fromage doux et sirop sucré", featured: true, image: placeholderImg },
        ]
    },
    {
        id: "drinks",
        title: "Jus Frais & Boissons",
        arabicTitle: "العصائر والمشروبات",
        items: [
            { name: "Jus de Mangue au Lait", arabicName: "عصير مانجو بالحليب", price: fmt(4.99), description: "Jus de mangue frais avec lait", image: placeholderImg },
            { name: "Jus d'Orange", arabicName: "عصير برتقال", price: fmt(4.99), description: "Jus d'orange frais pressé", image: placeholderImg },
            { name: "Jus Citron-Menthe", arabicName: "عصير ليمون ونعناع", price: fmt(4.99), description: "Jus de citron rafraîchissant à la menthe", image: placeholderImg },
            { name: "Jus de Banane", arabicName: "عصير موز", price: fmt(4.99), description: "Jus de banane crémeux", image: placeholderImg },
            { name: "Jus d'Avocat au Lait", arabicName: "عصير أفوكادو بالحليب", price: fmt(4.99), description: "Jus d'avocat onctueux avec lait", image: placeholderImg },
            { name: "Laban Ayran", arabicName: "لبن عيران", price: fmt(3.99), description: "Boisson au yaourt salée", image: placeholderImg },
            { name: "Jus de Fraise au Lait", arabicName: "عصير فراولة بالحليب", price: fmt(4.99), description: "Jus de fraise frais avec lait", featured: true, image: placeholderImg },
            { name: "Jus Mix Socotra", arabicName: "عصير ميكس سقطرى", price: fmt(5.99), description: "Mélange spécial de fruits frais", featured: true, image: placeholderImg },
            { name: "Canette de Jus", arabicName: "عصير معلب", price: fmt(2.99), description: "Jus en canette", image: placeholderImg },
            { name: "Eau Minérale", arabicName: "ماء معدني", price: fmt(1.99), description: "Eau minérale", image: placeholderImg },
            { name: "Thé Socotra", arabicName: "شاي سقطرى", price: fmt(1.99), description: "Thé noir yéménite avec cardamome", image: placeholderImg },
            { name: "Thé Aden", arabicName: "شاي عدن", price: fmt(2.50), description: "Thé au lait d'Aden préparé à la manière traditionnelle", image: placeholderImg },
            { name: "Café Espresso", arabicName: "قهوة إسبرسو", price: fmt(1.99), description: "Café espresso fort", image: placeholderImg },
            { name: "Café Double", arabicName: "قهوة مزدوجة", price: fmt(1.99), description: "Double espresso", image: placeholderImg },
        ]
    }
];
