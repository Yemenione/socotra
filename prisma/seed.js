const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const menuData = [
  {
    id: "starters",
    title: "Entrées & Salades",
    titleEn: "Starters & Salads",
    titleAr: "المقبلات والسلطات",
    items: [
      { name: "Salade Arabe", nameEn: "Arabic Salad", nameAr: "سلطة عربية", price: 4.99, description: "Tomate, Concombre, Laitue, Menthe, Citron", descriptionEn: "Tomato, Cucumber, Lettuce, Mint, Lemon", image: "/logo.png" },
      { name: "Salade Olive", nameEn: "Olive Salad", nameAr: "سلطة زيتون", price: 4.99, description: "Mélange d'olives marinées aux épices", descriptionEn: "Mixed olives marinated with spices", image: "/logo.png" },
      { name: "Houmous", nameEn: "Hummus", nameAr: "حمص", price: 5.99, description: "Pois chiches, Tahini, Citron, Huile d'olive", descriptionEn: "Chickpeas, Tahini, Lemon, Olive oil", image: "/logo.png", featured: true },
      { name: "Moutabal", nameEn: "Mutabal", nameAr: "متبل", price: 5.99, description: "Aubergine grillée, Tahini, Yaourt", descriptionEn: "Grilled Eggplant, Tahini, Yogurt", image: "/logo.png" },
      { name: "Samboussek Fromage", nameEn: "Cheese Samosa", nameAr: "سمبوسة جبن", price: 5.99, description: "Pâte croustillante farcie au fromage (4 pièces)", descriptionEn: "Crispy pastry stuffed with cheese (4 pieces)", image: "/logo.png" },
      { name: "Samboussek Viande", nameEn: "Meat Samosa", nameAr: "سمبوسة لحم", price: 5.99, description: "Pâte croustillante farcie à la viande (4 pièces)", descriptionEn: "Crispy pastry stuffed with meat (4 pieces)", image: "/logo.png" },
    ]
  },
  {
    id: "viandes",
    title: "Viandes",
    titleEn: "Meats",
    titleAr: "اللحوم",
    items: [
      { name: "Mandi Agneau", nameEn: "Lamb Mandi", nameAr: "مندي لحم", price: 17.99, description: "L'authentique, cuit à l'étouffée sous terre", descriptionEn: "The authentic, slow-cooked underground", image: "/logo.png", featured: true },
      { name: "Haneeth Agneau", nameEn: "Lamb Haneeth", nameAr: "حنيذ لحم", price: 18.99, description: "Agneau rôti lentement, très tendre", descriptionEn: "Slow-roasted lamb, very tender", image: "/logo.png" },
      { name: "Zorbian Agneau", nameEn: "Lamb Zurbian", nameAr: "زربيان لحم", price: 17.99, description: "Riz parfumé au safran, Agneau, Pommes de terre", descriptionEn: "Saffron scented rice, Lamb, Potatoes", image: "/logo.png" },
    ]
  },
  {
    id: "poulets",
    title: "Poulets",
    titleEn: "Chicken",
    titleAr: "الدجاج",
    items: [
      { name: "Mandi Poulet", nameEn: "Chicken Mandi", nameAr: "مندي دجاج", price: 13.99, description: "Demi-poulet fumé, Riz Mandi", descriptionEn: "Smoked half chicken, Mandi rice", image: "/logo.png", featured: true },
      { name: "Haneeth Poulet", nameEn: "Chicken Haneeth", nameAr: "حنيذ دجاج", price: 14.99, description: "Demi-poulet rôti aux épices spéciales", descriptionEn: "Half chicken roasted with special spices", image: "/logo.png" },
      { name: "Zorbian Poulet", nameEn: "Chicken Zurbian", nameAr: "زربيان دجاج", price: 14.99, description: "Demi-poulet, Riz safran, Yaourt", descriptionEn: "Half chicken, Saffron rice, Yogurt", image: "/logo.png" },
    ]
  },
  {
    id: "specialities",
    title: "Spécialités Yéménites",
    titleEn: "Yemeni Specialities",
    titleAr: "المأكولات اليمنية الشعبية",
    items: [
      { name: "Saltah", nameEn: "Saltah", nameAr: "سلته", price: 11.99, description: "Le plat national, ragoût bouillonnant, fenugrec", descriptionEn: "The national dish, bubbling stew, fenugreek", image: "/logo.png", featured: true },
      { name: "Fahsa", nameEn: "Fahsa", nameAr: "فحسه", price: 12.99, description: "Ragoût de viande fondante, servi brûlant", descriptionEn: "Melting meat stew, served boiling hot", image: "/logo.png" },
      { name: "Foul", nameEn: "Foul", nameAr: "فول", price: 7.99, description: "Fèves mijotées, tomates, oignons, épices", descriptionEn: "Simmered fava beans, tomatoes, onions, spices", image: "/logo.png" },
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    titleEn: "Desserts",
    titleAr: "الحلويات",
    items: [
      { name: "Masoub Royal", nameEn: "Royal Masoub", nameAr: "معصوب ملكي", price: 7.99, description: "Banane, Pain émietté, Crème, Miel, Nigelle", descriptionEn: "Banana, Crumbled bread, Cream, Honey, Nigella", image: "/logo.png", featured: true },
      { name: "Arika", nameEn: "Arika", nameAr: "عريكة", price: 8.99, description: "Dattes, Pain, Crème, Miel, Fromage (option)", descriptionEn: "Dates, Bread, Cream, Honey, Cheese (optional)", image: "/logo.png" },
    ]
  },
  {
    id: "boissons",
    title: "Boissons",
    titleEn: "Drinks",
    titleAr: "المشروبات",
    items: [
      { name: "Thé Adeni", nameEn: "Adeni Tea", nameAr: "شاي عدني", price: 2.50, description: "Thé au lait, cardamome, clous de girofle", descriptionEn: "Milk tea, cardamom, cloves", image: "/logo.png", featured: true },
      { name: "Jus de Citron Menthe", nameEn: "Lemon Mint Juice", nameAr: "ليمون بالنعناع", price: 4.50, description: "Frais et rafraîchissant", descriptionEn: "Fresh and refreshing", image: "/logo.png" },
    ]
  }
];

async function main() {
  const email = 'admin@socotra.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);

  // 1. Seed Admin
  const admin = await prisma.admin.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
      name: 'Super Admin',
    },
  });
  console.log({ admin });

  // 2. Seed SiteConfig (Video URL and Dynamic Text)
  const config = await prisma.siteConfig.create({
    data: {
      heroVideoUrl: "https://www.youtube.com/embed/VN5EoMGb-xw?autoplay=1&mute=1&controls=0&loop=1&playlist=VN5EoMGb-xw&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1",
      whatsappNumber: "33612345678",
      contactEmail: "contact@socotra.fr",
      signatureTitle: "Le Mandi Royal",
      signatureTitleAr: "المندي الملكي",
      signatureDesc: "Un chef-d'œuvre culinaire. Agneau tendre mariné aux épices secrètes de Socotra, cuit lentement dans un four souterrain traditionnel.",
      signatureDescAr: "تحفة طهوية. لحم ضأن طري متبل بتوابل سقطرى السرية، مطهو ببطء في فرن تقليدي.",
      aboutTitle: "Notre Histoire",
      aboutTitleAr: "قصتنا",
      aboutText: "Bienvenue à Socotra, un voyage culinaire au cœur du Yémen...",
      aboutTextAr: "مرحبًا بكم في سقطرى، رحلة طهي في قلب اليمن..."
    }
  });
  console.log('Site Config seeded');

  // 3. Seed Menu
  for (const cat of menuData) {
    const category = await prisma.menuCategory.upsert({
      where: { id: cat.id },
      update: {
        title: cat.title,
        titleEn: cat.titleEn,
        titleAr: cat.titleAr
      },
      create: {
        id: cat.id,
        slug: cat.id,
        title: cat.title,
        titleEn: cat.titleEn,
        titleAr: cat.titleAr
      }
    });

    for (const item of cat.items) {
      // We assume items don't have static IDs in this simple seed, but let's try to find them by name to avoid duplicates if re-seeding
      // Since we don't have a unique constraint on item name + category, we might just delete existing or checking first.
      // For simplicity in this fix, let's just create if not exists or similar.
      // Actually, standard seed practice for simple lists:
      const existingItem = await prisma.menuItem.findFirst({
        where: {
          name: item.name,
          categoryId: category.id
        }
      });

      if (!existingItem) {
        await prisma.menuItem.create({
          data: {
            name: item.name,
            nameEn: item.nameEn,
            nameAr: item.nameAr,
            description: item.description,
            descriptionEn: item.descriptionEn,
            price: item.price,
            image: item.image,
            featured: item.featured || false,
            categoryId: category.id
          }
        });
      }
    }
  }
  console.log('Menu seeded');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
