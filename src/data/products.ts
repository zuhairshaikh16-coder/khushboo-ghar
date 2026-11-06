import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- ORGANIC ATTARS ---
  {
    id: 'dehn-al-oudh-royal',
    name: 'Dehn Al Oudh Cambodi Royal',
    arabicName: 'دهن العود الكمبودي الملكي',
    category: 'attar',
    categoryLabel: 'Pure Organic Attar',
    scentFamily: 'woody-oudh',
    price: 6800,
    originalPrice: 8500,
    rating: 4.9,
    reviewsCount: 142,
    shortDescription: 'Distilled aged Cambodian agarwood oil with deep balsamic smoke and sweetened wood nuances.',
    description: 'An exquisite vintage attar slow-distilled from heartwood agarwood trees. Free from synthetics, DPG, or alcohol. Matures beautifully over hours with warm leather, honeyed resin, and deep meditative woods that linger for over 24 hours on fabrics.',
    image: '/src/assets/images/product_royal_oudh_1793948059199.jpg',
    sizes: [
      { label: '3ml (1/4 Tola)', price: 3600, volume: '3ml' },
      { label: '6ml (1/2 Tola)', price: 6800, volume: '6ml' },
      { label: '12ml (1 Tola Crystal Flacon)', price: 12500, volume: '12ml' },
    ],
    notes: {
      top: 'Cambodian Wild Agarwood, Warm Spiced Nutmeg',
      heart: 'Sweet Birch Bark, Balsamic Smoke, Earthy Resin',
      base: 'Deep Cambodian Oud, Aged Leather, Sacred Amber'
    },
    inStock: true,
    isOrganic: true,
    isAlcoholFree: true,
    badge: 'Artisanal Reserve',
    origin: 'Cambodia / Assam Steam Distilled'
  },
  {
    id: 'white-musk-taharah',
    name: 'Misk Al-Taharah Pure White',
    arabicName: 'مسك الطهارة الأبيض النقي',
    category: 'attar',
    categoryLabel: 'Pure Organic Attar',
    scentFamily: 'musk',
    price: 2400,
    originalPrice: 2900,
    rating: 5.0,
    reviewsCount: 318,
    shortDescription: 'Thick, creamy royal white musk with gentle powdery florals. The classic Sunnah hygiene fragrance.',
    description: 'Prized for centuries for personal purity and wudu routine. Its rich, velvety texture delivers an angelic, clean scent of crushed white petals, powdery softness, and subtle sweet vanilla musk. 100% alcohol-free and soothing for direct skin application.',
    image: '/src/assets/images/product_white_musk_1793948058935.jpg',
    sizes: [
      { label: '6ml (Roll-on Glass)', price: 2400, volume: '6ml' },
      { label: '12ml (With Glass Wand Applicator)', price: 4200, volume: '12ml' },
      { label: '24ml (Double Bottle Value Set)', price: 7800, volume: '24ml' },
    ],
    notes: {
      top: 'White Lotus, Morning Dew, Cotton Blossom',
      heart: 'Powdery Lily of the Valley, Soft Jasmine',
      base: 'Creamy Velvety White Musk, Warm Bourbon Amber'
    },
    inStock: true,
    isOrganic: true,
    isAlcoholFree: true,
    badge: 'Best Seller',
    origin: 'Madinah Heritage Blend'
  },
  {
    id: 'wardh-taifi-imperial',
    name: 'Wardh Taifi Imperial Rose',
    arabicName: 'ورد الطائف الإمبراطوري',
    category: 'attar',
    categoryLabel: 'Pure Organic Attar',
    scentFamily: 'floral',
    price: 5200,
    originalPrice: 6200,
    rating: 4.8,
    reviewsCount: 89,
    shortDescription: 'Freshly harvested mountain roses from Taif, Saudi Arabia with sparkling citrus honey notes.',
    description: 'Steam hydro-distilled from tens of thousands of pink Taif damask rose petals handpicked before dawn in the mountains of Saudi Arabia. Possesses an intoxicating natural depth that is dewy, green, tea-like, and richly sweet without synthetic additives.',
    image: '/src/assets/images/hero_attar_perfume_1793948058716.jpg',
    sizes: [
      { label: '3ml (Tester Vial)', price: 2900, volume: '3ml' },
      { label: '6ml (Half Tola)', price: 5200, volume: '6ml' },
      { label: '12ml (Royal Flacon)', price: 9800, volume: '12ml' },
    ],
    notes: {
      top: 'Fresh Pink Rosebuds, Green Leaf, Lemon Peel',
      heart: 'Taif Damask Rose Absolute, Wild Honey',
      base: 'Gentle Sandalwood, Powdered Amber'
    },
    inStock: true,
    isOrganic: true,
    isAlcoholFree: true,
    badge: 'Limited Harvest',
    origin: 'Taif, Saudi Arabia'
  },
  {
    id: 'shamamatul-amber-kannauj',
    name: 'Shamamatul Amber Vintage 96',
    arabicName: 'شمامة العنبر التراثية',
    category: 'attar',
    categoryLabel: 'Pure Organic Attar',
    scentFamily: 'oriental-amber',
    price: 4400,
    originalPrice: 5500,
    rating: 4.9,
    reviewsCount: 76,
    shortDescription: 'Traditional Deg-Bhapka hydro-distillation of over 40 Himalayan herbs, roots, saffron, and Mysore sandalwood.',
    description: 'An ancient heritage formula distilled into pure sandalwood oil over 30 days of continuous wood fire. Warm, spicy, earthy, and profoundly calming for prayer, meditation, and cold evenings. Revered as the quintessential natural oriental attar.',
    image: '/src/assets/images/product_royal_oudh_1793948059199.jpg',
    sizes: [
      { label: '6ml (Half Tola)', price: 4400, volume: '6ml' },
      { label: '12ml (1 Tola)', price: 7900, volume: '12ml' },
    ],
    notes: {
      top: 'Saffron Threads, Cardamom Pods, Star Anise',
      heart: 'Clove Bark, Himalayan Spikenard, Cedar Root',
      base: 'Mysore Sandalwood, Earthy Ambergris, Fossil Resin'
    },
    inStock: true,
    isOrganic: true,
    isAlcoholFree: true,
    badge: 'Ancient Recipe',
    origin: 'Kannauj, India'
  },
  {
    id: 'sandalwood-mysore-shandar',
    name: 'Chandan Mysore Royal Sandal',
    arabicName: 'صندل ميسور الفاخر',
    category: 'attar',
    categoryLabel: 'Pure Organic Attar',
    scentFamily: 'woody-oudh',
    price: 4900,
    originalPrice: 5800,
    rating: 4.9,
    reviewsCount: 114,
    shortDescription: '100% Pure Santalum Album heartwood oil. Silky smooth, buttery, meditative and grounding.',
    description: 'Distilled from seasoned rootwood, yielding an unmatched creamy woody sweetness that calms the nervous system and enhances focus during prayer and Quran recitation. A timeless classic mentioned in classic medical and spiritual treatises.',
    image: '/src/assets/images/hero_attar_perfume_1793948058716.jpg',
    sizes: [
      { label: '6ml (Half Tola)', price: 4900, volume: '6ml' },
      { label: '12ml (1 Tola)', price: 8900, volume: '12ml' },
    ],
    notes: {
      top: 'Creamy Milk Wood, Soft Sweet Spice',
      heart: 'Santalum Album Heartwood, Warm Tonka',
      base: 'Deep Golden Sandalwood, Cashmere Resin'
    },
    inStock: true,
    isOrganic: true,
    isAlcoholFree: true,
    badge: '100% Pure Wood',
    origin: 'Mysore Heartwood'
  },
  {
    id: 'jannat-ul-firdous-supreme',
    name: 'Jannat-ul-Firdous Supreme',
    arabicName: 'جنات الفردوس الخاصة',
    category: 'attar',
    categoryLabel: 'Pure Organic Attar',
    scentFamily: 'oriental-amber',
    price: 3200,
    originalPrice: 3800,
    rating: 4.7,
    reviewsCount: 205,
    shortDescription: 'Vibrant green heavenly bouquet with wild mint, lotus blossom, musk, and spicy cinnamon bark.',
    description: 'The legendary "Garden of Paradise" scent reimagined with strictly botanical essential oils. Refreshingly green, uplifting, and spiritually revitalizing. Ideal for Jummah prayers and warm weather days.',
    image: '/src/assets/images/product_white_musk_1793948058935.jpg',
    sizes: [
      { label: '6ml (Roll-on)', price: 3200, volume: '6ml' },
      { label: '12ml (Crystal Bottle)', price: 5800, volume: '12ml' },
    ],
    notes: {
      top: 'Spearmint Leaf, Green Fern, Bergamot Zest',
      heart: 'Blue Lotus, Cinnamon Bark, Clove Flower',
      base: 'Earthy Patchouli, White Amber, Pure Botanical Musk'
    },
    inStock: true,
    isOrganic: true,
    isAlcoholFree: true,
    badge: 'Jummah Favorite',
    origin: 'Madinah Artisan Blend'
  },

  // --- UMRAH & HAJJ ITEMS ---
  {
    id: 'umrah-essential-kit',
    name: 'Complete Umrah Pilgrim Care Kit (Ihram-Safe)',
    arabicName: 'طقم المعتمر الكامل الخالي من العطور',
    category: 'umrah',
    categoryLabel: 'Umrah & Hajj Essentials',
    scentFamily: 'unscented',
    price: 4500,
    originalPrice: 5600,
    rating: 5.0,
    reviewsCount: 167,
    shortDescription: '100% Unscented & Halal certified kit compliant with Ihram state restrictions during Tawaf and Sa’i.',
    description: 'Everything a Muhrim needs in the state of Ihram where scented cosmetics are strictly forbidden. Contains: 2x 100g Fragrance-Free Cold-Pressed Olive Soap, 1x 100ml Unscented Organic Moisturizing Lotion (prevents skin chafing during Tawaf), 1x Natural Miswak with bamboo case, 1x Compact Pocket Prayer Mat, and 1x 33-Bead Olive Wood Tawaf Tasbih.',
    image: '/src/assets/images/product_umrah_kit_1793948059954.jpg',
    sizes: [
      { label: 'Standard Pilgrim Kit', price: 4500, volume: '5-Piece Set' },
      { label: 'Deluxe Kit (+ Microfiber Towel & Pouch)', price: 7200, volume: '7-Piece Set' },
    ],
    features: [
      '100% Fragrance-Free (Zero Perfume/Essential Oils for Ihram)',
      'Cold-Pressed Olive Oil Soap prevents skin dryness',
      'Anti-chafing petroleum-free natural balm for long walks',
      'Pocket travel prayer mat with water-resistant backing',
      'Handy zippered airport travel organizer bag'
    ],
    inStock: true,
    isUmrahApproved: true,
    badge: 'Ihram Compliant',
    origin: 'Certified Halal Pakistan & KSA'
  },
  {
    id: 'ihram-fragrance-free-soap-set',
    name: 'Pure Ihram Tawaf Soap & Cream Duo',
    arabicName: 'صابون وكريم الإحرام العضوي بدون رائحة',
    category: 'umrah',
    categoryLabel: 'Umrah & Hajj Essentials',
    scentFamily: 'unscented',
    price: 1800,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 94,
    shortDescription: 'Pure goat milk & extra virgin olive oil bar with deep moisturizing skin protectant balm.',
    description: 'Specially formulated for pilgrims performing Umrah and Hajj. Zero artificial fragrances, no masking chemicals, no animal cruelty. Protects the skin against harsh desert winds and prevents chafing between thighs during the 7 rounds of Tawaf and Saee.',
    image: '/src/assets/images/product_umrah_kit_1793948059954.jpg',
    sizes: [
      { label: 'Soap Bar (120g) + Balm (60ml)', price: 1800, volume: '2 Items' },
      { label: 'Family Pack (3x Soaps + 2x Balms)', price: 4200, volume: '5 Items' },
    ],
    features: [
      'Strictly non-scented for Muhrim requirements',
      'Rich in natural Vitamin E and Shea Butter',
      'Pocket-sized compact twist tube for easy portability in Haramain'
    ],
    inStock: true,
    isUmrahApproved: true,
    badge: '100% Unscented',
    origin: 'Artisanal Organic Farm'
  },
  {
    id: 'digital-tawaf-counter-ring',
    name: 'Tawaf & Dhikr Smart Digital Counter Ring',
    arabicName: 'خاتم تسبيح ذكي رقمي للطواف',
    category: 'umrah',
    categoryLabel: 'Umrah & Hajj Essentials',
    price: 1950,
    originalPrice: 2500,
    rating: 4.8,
    reviewsCount: 188,
    shortDescription: 'Ergonomic silicone finger counter with LED backlight for night Tawaf and vibrating lap alerts.',
    description: 'Never lose count of your Tawaf or Sa’i circuits again amidst the crowd in Masjid Al-Haram. Fits snugly on your index finger with a soft silicone strap, large tactile count button, silent click mechanism, and subtle vibration every 7 counts.',
    image: '/src/assets/images/product_umrah_kit_1793948059954.jpg',
    sizes: [
      { label: 'Matte Emerald Green', price: 1950, volume: '1 Piece' },
      { label: 'Obsidian Black', price: 1950, volume: '1 Piece' },
      { label: 'Pearl White & Gold', price: 2150, volume: '1 Piece' },
    ],
    features: [
      'Automatic lap notification vibration at 7 & 33 counts',
      'Gentle OLED display with soft night backlight',
      'Rechargeable Type-C battery lasts up to 30 days',
      'Water and sweat resistant for ablution'
    ],
    inStock: true,
    isUmrahApproved: true,
    badge: 'Pilgrim Essential',
    origin: 'Engineered for Haramain'
  },

  // --- ISLAMIC LIFESTYLE ITEMS ---
  {
    id: 'turkish-velvet-janamaz',
    name: 'Royal Ottoman Arch Velvet Janamaz (Prayer Mat)',
    arabicName: 'سجادة صلاة عثمانية مخملية فاخرة',
    category: 'islamic-lifestyle',
    categoryLabel: 'Islamic Lifestyle',
    price: 5800,
    originalPrice: 7200,
    rating: 5.0,
    reviewsCount: 230,
    shortDescription: 'High-density Turkish micro-velvet prayer rug with double-layer orthopedic memory cushioning.',
    description: 'Crafted on historic looms in Bursa, Turkey. Features a magnificent Mihrab arch motif woven with deep emerald green and metallic golden threads. The 15mm thick memory foam layer provides effortless knee and joint comfort during extended Sajdah and Tahajjud prayers.',
    image: '/src/assets/images/product_turkish_janamaz_1793948060299.jpg',
    sizes: [
      { label: 'Standard (75 x 120 cm)', price: 5800, volume: 'Standard' },
      { label: 'Extra Wide Orthopedic (85 x 135 cm)', price: 7900, volume: 'Large' },
    ],
    features: [
      'Silky soft Turkish velvet with gold fringe detailing',
      'Anti-slip studded rubber base prevents sliding on tiles',
      'Pressure-relieving high density foam for joints & knees',
      'Includes breathable canvas zipper carry bag'
    ],
    inStock: true,
    badge: 'Masterpiece Weave',
    origin: 'Bursa, Turkey'
  },
  {
    id: 'handcrafted-tasbih-olive-wood',
    name: 'Palestinian Olive Wood 99-Bead Tasbih',
    arabicName: 'سبحة خشب الزيتون الفلسطيني الطبيعي',
    category: 'islamic-lifestyle',
    categoryLabel: 'Islamic Lifestyle',
    price: 2200,
    originalPrice: 2800,
    rating: 4.9,
    reviewsCount: 156,
    shortDescription: 'Turned from aged Palestinian olive wood with natural grain veins and hand-tied silk tassel.',
    description: 'Each bead is individually turned and polished using organic beeswax, releasing a faint honey-olive aroma as you make Dhikr. Threaded on high-tensile braided military cord that will never snap during daily usage.',
    image: '/src/assets/images/product_umrah_kit_1793948059954.jpg',
    sizes: [
      { label: '33 Beads (Pocket Size 8mm)', price: 1400, volume: '33 Beads' },
      { label: '99 Beads (Classic Size 8mm)', price: 2200, volume: '99 Beads' },
      { label: '99 Beads (Jumbo 10mm Scholar Size)', price: 3100, volume: '99 Beads' },
    ],
    features: [
      'Hand-carved from sacred olive groves',
      'Natural honeyed sheen with no synthetic lacquer',
      'Durable silk tassel with metal filigree bead'
    ],
    inStock: true,
    badge: 'Handmade Sunnah',
    origin: 'Al-Quds Olive Timber'
  },
  {
    id: 'madinah-bakhoor-burner-set',
    name: 'Madinah Heritage Mabkhara & Raw Oud Wood Set',
    arabicName: 'مبخرة نحاسية وتشكيلة بخور فاخرة',
    category: 'islamic-lifestyle',
    categoryLabel: 'Islamic Lifestyle',
    scentFamily: 'woody-oudh',
    price: 4900,
    originalPrice: 6000,
    rating: 4.9,
    reviewsCount: 88,
    shortDescription: 'Heavy solid brass engraved incense burner with 30g Indonesian agarwood chips and brass tongs.',
    description: 'Fill your home with the venerable fragrance of the Prophet’s Mosque before Jummah and family gatherings. Contains a heat-dissipating solid brass burner with pierced dome lid, stainless tongs, quick-light coconut charcoals, and premium grade agarwood chips.',
    image: '/src/assets/images/hero_attar_perfume_1793948058716.jpg',
    sizes: [
      { label: 'Burner + 30g Oud Chips + Tongs', price: 4900, volume: 'Complete Set' },
      { label: 'Deluxe Set (+ 60g Reserve Bakhoor)', price: 7500, volume: 'Gift Box' },
    ],
    features: [
      'Heavy engraved brass with heat-insulating wooden base',
      'Aromatic natural agarwood chips soaked in musk and rose',
      'Charcoal tongs and charcoal roll included'
    ],
    inStock: true,
    badge: 'Home Fragrance',
    origin: 'Madinah / Java Woods'
  },
  {
    id: 'sunnah-miswak-holder-gift-set',
    name: 'Natural Salvadora Persica Miswak & Brass Holder',
    arabicName: 'سواك طبيعي مع حافظة نحاسية فاخرة',
    category: 'islamic-lifestyle',
    categoryLabel: 'Islamic Lifestyle',
    price: 1600,
    originalPrice: 2000,
    rating: 4.8,
    reviewsCount: 112,
    shortDescription: 'Fresh vacuum-sealed Arak tree roots with a ventilated brass travel capsule.',
    description: 'Revive the Sunnah of dental cleanliness. Harvested fresh from Salvadora Persica trees with active natural fluorides, silica, and antibacterial resins. Keeps your miswak moist, hygienic, and ready for prayer in your pocket.',
    image: '/src/assets/images/product_umrah_kit_1793948059954.jpg',
    sizes: [
      { label: 'Brass Holder + 3x Vacuum Miswaks', price: 1600, volume: '1 Set' },
      { label: 'Pocket Bamboo Holder + 5x Miswaks', price: 2100, volume: '1 Set' },
    ],
    features: [
      'Fresh vacuum-sealed root sticks with natural bristle oils',
      'Ventilated antibacterial travel holder preventing mold',
      'Clinically proven oral hygiene benefits'
    ],
    inStock: true,
    badge: 'Pure Sunnah',
    origin: 'Peshawar & Madinah Valley'
  }
];

export const SCENT_QUIZ_QUESTIONS = [
  {
    id: 1,
    title: 'What mood or spiritual atmosphere do you cherish most?',
    subtitle: 'Choose the energy you want your scent to evoke throughout the day.',
    options: [
      {
        label: 'Majestic & Regal',
        description: 'Commanding, deep presence reminiscent of ancient palaces and ceremonial gatherings.',
        scentFamily: 'woody-oudh' as const,
        iconName: 'Crown'
      },
      {
        label: 'Pure, Clean & Angelic',
        description: 'Fresh, serene, skin-close purity after Wudu and morning Tahajjud.',
        scentFamily: 'musk' as const,
        iconName: 'Sparkles'
      },
      {
        label: 'Uplifting & Radiant Floral',
        description: 'Joyful sweetness of fresh mountain roses, bright dawn gardens, and hospitality.',
        scentFamily: 'floral' as const,
        iconName: 'Flower2'
      },
      {
        label: 'Warm, Earthy & Meditative',
        description: 'Deep grounding comfort of resins, incense smoke, saffron, and sweet spices.',
        scentFamily: 'oriental-amber' as const,
        iconName: 'Flame'
      }
    ]
  },
  {
    id: 2,
    title: 'Which aromatic notes naturally draw your senses?',
    subtitle: 'Think of scents that bring warmth and peace to your heart.',
    options: [
      {
        label: 'Smoky Agarwood, Leather & Forest Woods',
        description: 'Rich Cambodian Oud, cedar resin, and aged bark.',
        scentFamily: 'woody-oudh' as const,
        iconName: 'Trees'
      },
      {
        label: 'Silky White Musk, Cotton & Soft Florals',
        description: 'Creamy Taharah musk, powdery lilies, and delicate white blossom.',
        scentFamily: 'musk' as const,
        iconName: 'Feather'
      },
      {
        label: 'Taif Mountain Damask Rose & Wild Honey',
        description: 'Sweet petal nectar, morning dew, and green rose stems.',
        scentFamily: 'floral' as const,
        iconName: 'Heart'
      },
      {
        label: 'Mysore Sandalwood, Saffron & Ambergris',
        description: 'Buttery woods, golden warmth, and ancient temple resins.',
        scentFamily: 'oriental-amber' as const,
        iconName: 'Compass'
      }
    ]
  },
  {
    id: 3,
    title: 'What is your primary occasion for wearing this attar?',
    subtitle: 'Your lifestyle helps determine optimal longevity and character.',
    options: [
      {
        label: 'Special Jummah Prayers & Eid Celebrations',
        description: 'You want a distinctive, memorable scent when greeting fellow worshipers.',
        scentFamily: 'woody-oudh' as const,
        iconName: 'Moon'
      },
      {
        label: 'Daily Sunnah Hygiene & Post-Wudu Routine',
        description: 'Subtle, soft fragrance that stays close to the skin and clothes.',
        scentFamily: 'musk' as const,
        iconName: 'Droplet'
      },
      {
        label: 'Family Gatherings & Welcoming Guests',
        description: 'Inviting, hospitable floral trail that brings smiles to loved ones.',
        scentFamily: 'floral' as const,
        iconName: 'Coffee'
      },
      {
        label: 'Night Tahajjud & Quiet Quran Contemplation',
        description: 'Deep meditative aroma that grounds your thoughts in stillness.',
        scentFamily: 'oriental-amber' as const,
        iconName: 'BookOpen'
      }
    ]
  },
  {
    id: 4,
    title: 'What scent projection (sillage) do you prefer?',
    subtitle: 'How noticeable do you like your attar to be around you?',
    options: [
      {
        label: 'Long-Lasting & Noticeable (12+ hours)',
        description: 'Leaves a distinguished aromatic trail wherever you walk.',
        scentFamily: 'woody-oudh' as const,
        iconName: 'Wind'
      },
      {
        label: 'Intimate & Soft (Skin Scent)',
        description: 'Pleasant for you and those who embrace you, never overpowering.',
        scentFamily: 'musk' as const,
        iconName: 'Smile'
      },
      {
        label: 'Balanced & Airy (6-8 hours)',
        description: 'Effortless daytime elegance that breathes with body temperature.',
        scentFamily: 'floral' as const,
        iconName: 'Sun'
      },
      {
        label: 'Rich & Resinous Warmth (All Day Comfort)',
        description: 'Enveloping cocoon that evolves gradually across morning and evening.',
        scentFamily: 'oriental-amber' as const,
        iconName: 'Shield'
      }
    ]
  }
];
