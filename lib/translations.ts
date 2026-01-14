export type TranslationKey = string;

export const translations = {
    fr: {
        logo: "Socotra",
        nav: {
            home: "Accueil",
            about: "À Propos",
            gallery: "Galerie",
            menu: "Menu",
            reservation: "Réserver",
            contact: "Contact",
        },
        hero: {
            title: "Bienvenue au Restaurant Socotra",
            subtitle: "Cuisine Yéménite Authentique",
            description:
                "Découvrez les saveurs uniques de la cuisine yéménite au cœur de Paris",
            cta: "Voir le Menu",
        },
        about: {
            title: "L'Authenticité Yéménite à Paris",
            text1:
                "Bienvenue au Restaurant Socotra, votre destination pour une cuisine yéménite authentique au cœur de Paris. Nous vous proposons des plats traditionnels préparés avec passion et des ingrédients de première qualité, inspirés de l'île mythique de Socotra et des traditions culinaires ancestrales du Yémen.",
            text2:
                "Tous nos plats sont préparés avec des ingrédients frais et halal. Nous utilisons les épices authentiques et les techniques de cuisson traditionnelles pour vous offrir des saveurs inoubliables.",
            feature1: "100% Halal",
            feature1desc: "Ingrédients certifiés",
            feature2: "Frais & Bio",
            feature2desc: "Produits de qualité",
            feature3: "Recettes Authentiques",
            feature3desc: "Traditions ancestrales",
        },
        gallery: {
            title: "Galerie",
            subtitle: "Découvrez nos plats en images",
        },
        menu: {
            title: "Notre Menu",
            subtitle: "Découvrez Nos Spécialités",
            description: "Une sélection authentique de plats yéménites traditionnels",
            featured: "Spécialité",
            tab: {
                meat: "Viandes",
                chicken: "Poulet",
                fish: "Poissons",
                seafood: "Plats de la Mer",
                starters: "Entrées & Salades",
                traditional: "Plats Traditionnels",
                fattah: "Plats Fattah",
                bread: "Accompagnements",
                offers: "Offres de Viandes",
                vegetarian: "Plats Végétariens",
                desserts: "Desserts",
                drinks: "Boissons",
            },
        },
        reservation: {
            label: "Réservation",
            title: "Réservez Votre Table",
            subtitle:
                "Nous serions ravis de vous accueillir au Restaurant Socotra. Réservez votre table dès maintenant pour une expérience culinaire inoubliable.",
            chooseMethod: "Choisissez votre méthode de réservation",
            whatsapp: "Réserver via WhatsApp",
            email: "Réserver par Email",
            or: "OU",
            formIntro: "Remplissez le formulaire ci-dessous",
            contact: {
                whatsapp: "WhatsApp",
                phone: "Téléphone",
                email: "Email",
            },
            form: {
                name: "Nom Complet",
                namePlaceholder: "Nom Complet",
                phone: "Téléphone",
                phonePlaceholder: "+33 X XX XX XX XX",
                email: "Email",
                emailPlaceholder: "votre@email.com",
                guests: "Nombre de Personnes",
                selectGuests: "Sélectionner...",
                guest1: "1 personne",
                guest2: "2 personnes",
                guest3: "3 personnes",
                guest4: "4 personnes",
                guest5: "5 personnes",
                guest6plus: "6+ personnes",
                moreThan6: "Plus de 6",
                date: "Date",
                time: "Heure",
                selectTime: "Choisir...",
                message: "Message (optionnel)",
                messagePlaceholder: "Notes spéciales...",
                submit: "Confirmer la Réservation",
            },
            info: {
                title: "Informations de Réservation",
                arrive: "Veuillez arriver 15 minutes avant votre réservation",
                hold: "La table sera réservée pendant 15 minutes seulement",
                large: "Pour les grands groupes (plus de 6 personnes), veuillez nous contacter directement",
                cancel: "Vous pouvez annuler ou modifier jusqu'à 24h avant",
            },
            hours: {
                title: "Horaires d'Ouverture",
                days: "Dimanche - Samedi",
                open247: "Ouvert 7j/7",
                lunch: "Déjeuner",
                dinner: "Dîner",
                monday: "Lundi",
                closed: "Fermé",
            },
            success: {
                title: "Réservation Confirmée !",
                message:
                    "Merci d'avoir choisi le Restaurant Socotra. Nous vous enverrons un email de confirmation bientôt.",
                lookForward: "Nous avons hâte de vous accueillir !",
            },
            errors: {
                fillAll: "Veuillez remplir tous les champs requis",
                validEmail: "Veuillez entrer une adresse email valide",
                validPhone: "Veuillez entrer un numéro de téléphone valide",
                pastDate: "La date ne peut pas être dans le passé",
                mondayClosed:
                    "Désolé, le restaurant est fermé le lundi. Veuillez choisir un autre jour.",
            },
        },
        footer: {
            tagline: "Cuisine yéménite authentique au cœur de Paris depuis 2020",
            rights: "Tous droits réservés",
        },
    },
    ar: {
        logo: "سقطرى",
        nav: {
            home: "الرئيسية",
            about: "عن المطعم",
            gallery: "المعرض",
            menu: "القائمة",
            reservation: "احجز",
            contact: "اتصل بنا",
        },
        hero: {
            title: "مرحباً بكم في مطعم سقطرى",
            subtitle: "مطبخ يمني أصيل",
            description: "اكتشف النكهات الفريدة للمطبخ اليمني في قلب باريس",
            cta: "شاهد القائمة",
        },
        about: {
            title: "الأصالة اليمنية في باريس",
            text1:
                "مرحباً بكم في مطعم سقطرى، وجهتكم للمطبخ اليمني الأصيل في قلب باريس. نقدم لكم أطباقاً تقليدية محضرة بشغف ومكونات عالية الجودة، مستوحاة من جزيرة سقطرى الأسطورية والتقاليد الطهوية اليمنية العريقة.",
            text2:
                "جميع أطباقنا محضرة بمكونات طازجة وحلال. نستخدم التوابل الأصيلة وتقنيات الطهي التقليدية لنقدم لكم نكهات لا تُنسى.",
            feature1: "100% حلال",
            feature1desc: "مكونات معتمدة",
            feature2: "طازج وعضوي",
            feature2desc: "منتجات عالية الجودة",
            feature3: "وصفات أصيلة",
            feature3desc: "تقاليد عريقة",
        },
        menu: {
            title: "قائمة الطعام",
            subtitle: "اكتشف أطباقنا المميزة",
            description: "مجموعة أصيلة من الأطباق اليمنية التقليدية",
            featured: "مميز",
            tab: {
                meat: "اللحوم",
                chicken: "الدجاج",
                fish: "السمك",
                seafood: "المأكولات البحرية",
                starters: "المقبلات والسلطات",
                traditional: "الأطباق التقليدية",
                fattah: "أطباق الفتة",
                bread: "المقبلات",
                offers: "عروض اللحوم",
                vegetarian: "الأطباق النباتية",
                desserts: "التحلية",
                drinks: "المشروبات",
            },
        },
        reservation: {
            label: "الحجز",
            title: "احجز طاولتك",
            subtitle: "نتطلع لاستقبالكم في مطعم سقطرى. احجز طاولتك الآن لتجربة طهي لا تُنسى.",
            chooseMethod: "اختر طريقة الحجز",
            whatsapp: "احجز عبر واتساب",
            email: "احجز عبر الإيميل",
            or: "أو",
            formIntro: "املأ النموذج أدناه",
            contact: {
                whatsapp: "واتساب",
                phone: "الهاتف",
                email: "البريد الإلكتروني"
            },
            form: {
                name: "الاسم الكامل",
                namePlaceholder: "الاسم الكامل",
                phone: "رقم الهاتف",
                phonePlaceholder: "+33 X XX XX XX XX",
                email: "البريد الإلكتروني",
                emailPlaceholder: "your@email.com",
                guests: "عدد الأشخاص",
                selectGuests: "اختر...",
                guest1: "شخص واحد",
                guest2: "شخصان",
                guest3: "3 أشخاص",
                guest4: "4 أشخاص",
                guest5: "5 أشخاص",
                guest6plus: "6+ أشخاص",
                moreThan6: "أكثر من 6",
                date: "التاريخ",
                time: "الوقت",
                selectTime: "اختر...",
                message: "رسالة (اختياري)",
                messagePlaceholder: "ملاحظات خاصة...",
                submit: "تأكيد الحجز"
            },
            info: {
                title: "معلومات الحجز",
                arrive: "يرجى الوصول قبل 15 دقيقة من موعد حجزك",
                hold: "سيتم الاحتفاظ بالطاولة لمدة 15 دقيقة فقط",
                large: "للمجموعات الكبيرة (أكثر من 6 أشخاص)، يرجى الاتصال بنا مباشرة",
                cancel: "يمكنك إلغاء أو تعديل الحجز حتى 24 ساعة قبل الموعد"
            },
            hours: {
                title: "أوقات العمل",
                days: "الأحد - السبت",
                open247: "مفتوح 7/7",
                lunch: "الغداء",
                dinner: "العشاء",
                monday: "يوم الإثنين",
                closed: "مغلق"
            },
            success: {
                title: "تم تأكيد حجزك بنجاح!",
                message: "شكراً لاختياركم مطعم سقطرى. سنرسل لكم رسالة تأكيد عبر البريد الإلكتروني قريباً.",
                lookForward: "نتطلع لاستقبالكم!"
            },
            errors: {
                fillAll: "يرجى ملء جميع الحقول المطلوبة",
                validEmail: "يرجى إدخال بريد إلكتروني صحيح",
                validPhone: "يرجى إدخال رقم هاتف صحيح",
                pastDate: "لا يمكن الحجز في تاريخ سابق",
                mondayClosed: "عذراً، المطعم مغلق يوم الإثنين. يرجى اختيار يوم آخر."
            }
        },
        footer: {
            tagline: "مطبخ يمني أصيل في قلب باريس منذ 2020",
            rights: "جميع الحقوق محفوظة",
        },
    },
    en: {
        logo: "Socotra",
        nav: {
            home: "Home",
            about: "About",
            gallery: "Gallery",
            menu: "Menu",
            reservation: "Book",
            contact: "Contact"
        },
        hero: {
            title: "Welcome to Restaurant Socotra",
            subtitle: "Authentic Yemeni Cuisine",
            description: "Discover the unique flavors of Yemeni cuisine in the heart of Paris",
            cta: "View Menu"
        },
        about: {
            title: "Yemeni Authenticity in Paris",
            text1: "Welcome to Restaurant Socotra, your destination for authentic Yemeni cuisine in the heart of Paris. We offer traditional dishes prepared with passion and premium quality ingredients, inspired by the mythical island of Socotra and the ancestral culinary traditions of Yemen.",
            text2: "All our dishes are prepared with fresh and halal ingredients. We use authentic spices and traditional cooking techniques to offer you unforgettable flavors.",
            feature1: "100% Halal",
            feature1desc: "Certified ingredients",
            feature2: "Fresh & Organic",
            feature2desc: "Quality products",
            feature3: "Authentic Recipes",
            feature3desc: "Ancestral traditions"
        },
        menu: {
            title: "Our Menu",
            subtitle: "Discover Our Specialties",
            description: "An authentic selection of traditional Yemeni dishes",
            featured: "Specialty",
            tab: {
                meat: "Meats",
                chicken: "Chicken",
                fish: "Fish",
                seafood: "Seafood Dishes",
                starters: "Starters & Salads",
                traditional: "Traditional Dishes",
                fattah: "Fattah Dishes",
                bread: "Sides",
                offers: "Meat Offers",
                vegetarian: "Vegetarian Dishes",
                desserts: "Desserts",
                drinks: "Beverages"
            }
        },
        reservation: {
            label: "Reservation",
            title: "Reserve Your Table",
            subtitle: "We would be delighted to welcome you to Restaurant Socotra. Reserve your table now for an unforgettable culinary experience.",
            chooseMethod: "Choose your reservation method",
            whatsapp: "Reserve via WhatsApp",
            email: "Reserve by Email",
            or: "OR",
            formIntro: "Fill out the form below",
            contact: {
                whatsapp: "WhatsApp",
                phone: "Phone",
                email: "Email"
            },
            form: {
                name: "Full Name",
                namePlaceholder: "Full Name",
                phone: "Phone",
                phonePlaceholder: "+33 X XX XX XX XX",
                email: "Email",
                emailPlaceholder: "your@email.com",
                guests: "Number of Guests",
                selectGuests: "Select...",
                guest1: "1 person",
                guest2: "2 people",
                guest3: "3 people",
                guest4: "4 people",
                guest5: "5 people",
                guest6plus: "6+ people",
                moreThan6: "More than 6",
                date: "Date",
                time: "Time",
                selectTime: "Select...",
                message: "Message (optional)",
                messagePlaceholder: "Special notes...",
                submit: "Confirm Reservation"
            },
            info: {
                title: "Reservation Information",
                arrive: "Please arrive 15 minutes before your reservation",
                hold: "The table will be held for 15 minutes only",
                large: "For large groups (more than 6 people), please contact us directly",
                cancel: "You can cancel or modify up to 24 hours before"
            },
            hours: {
                title: "Opening Hours",
                days: "Sunday - Saturday",
                open247: "Open 7/7",
                lunch: "Lunch",
                dinner: "Dinner",
                monday: "Monday",
                closed: "Closed"
            },
            success: {
                title: "Reservation Confirmed!",
                message: "Thank you for choosing Restaurant Socotra. We will send you a confirmation email soon.",
                lookForward: "We look forward to welcoming you!"
            },
            errors: {
                fillAll: "Please fill in all required fields",
                validEmail: "Please enter a valid email address",
                validPhone: "Please enter a valid phone number",
                pastDate: "The date cannot be in the past",
                mondayClosed: "Sorry, the restaurant is closed on Mondays. Please choose another day."
            }
        },
        footer: {
            tagline: "Authentic Yemeni cuisine in the heart of Paris since 2020",
            rights: "All rights reserved"
        }
    }
};

export type Language = keyof typeof translations;
