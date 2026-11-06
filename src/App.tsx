
import React from 'react';
import whiteMuskImage from './assets/images/product_white_musk_1793948058935.jpg';
import umrahKitImage from './assets/images/product_umrah_kit_1793948059954.jpg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ScentQuizModal } from './components/ScentQuizModal';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { CartItem, Product } from './types';
import { Sparkles, CheckCircle2, MessageCircle, ShoppingBag, Compass } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE, getGeneralWhatsAppUrl } from './utils/whatsapp';

export default function App() {
  const [cart, setCart] = React.useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('khushboo_ghar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isQuizOpen, setIsQuizOpen] = React.useState(false);
  const [activeProduct, setActiveProduct] = React.useState<Product | null>(null);

  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedScentFamily, setSelectedScentFamily] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // Persist cart
  React.useEffect(() => {
    try {
      localStorage.setItem('khushboo_ghar_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Cart operations
  const handleAddToCart = (
    product: Product,
    selectedSize: { label: string; price: number; volume: string },
    quantity: number = 1
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize.label === selectedSize.label
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, selectedSize, quantity }];
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Filter products
  const filteredProducts = React.useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Scent family filter
      if (selectedScentFamily !== 'all') {
        if (selectedScentFamily === 'unscented' && product.scentFamily !== 'unscented') {
          return false;
        }
        if (selectedScentFamily !== 'unscented' && product.scentFamily !== selectedScentFamily) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesArabic = product.arabicName.includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesNotes =
          product.notes &&
          (product.notes.top.toLowerCase().includes(q) ||
            product.notes.heart.toLowerCase().includes(q) ||
            product.notes.base.toLowerCase().includes(q));
        const matchesOrigin = product.origin?.toLowerCase().includes(q);
        if (!matchesName && !matchesArabic && !matchesDesc && !matchesNotes && !matchesOrigin) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedScentFamily, searchQuery]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onExplore={scrollToCatalog}
        />

        {/* Featured Collection & Catalog */}
        <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-6">

            {/* Header Title with Editorial numbering */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#053b2f]">
                  01. Curated Artisanal Vault
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Authentic Attars & Pilgrimage Essentials
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-1 max-w-xl">
                  Hand-blended pure non-alcoholic perfume oils, Ihram-approved travel care, and Turkish devotional items.
                </p>
              </div>

              {/* Direct Quiz trigger badge */}
              <button
                onClick={() => setIsQuizOpen(true)}
                className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#053b2f] bg-[#053b2f]/8 hover:bg-[#053b2f]/15 border border-[#053b2f]/20 rounded-md transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#c59b27]" />
                <span>Not sure which attar? Take the Scent Quiz</span>
              </button>
            </div>

            {/* Filter and Search Bar */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              selectedScentFamily={selectedScentFamily}
              onSelectScentFamily={(fam) => setSelectedScentFamily(fam)}
              searchQuery={searchQuery}
              onSearchChange={(q) => setSearchQuery(q)}
              totalCount={filteredProducts.length}
            />

            {/* Product Cards Grid (Lead with imagery, 3-column desktop) */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenDetails={(p) => setActiveProduct(p)}
                    onAddToCart={(p, size) => handleAddToCart(p, size, 1)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-white rounded-xl border border-stone-200 p-8 space-y-3">
                <Compass className="w-10 h-10 text-stone-300 mx-auto" />
                <h3 className="font-cinzel text-lg font-bold text-stone-800">No matching treasures found</h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Try adjusting your search keywords or resetting filters to explore all available items.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedScentFamily('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-[#053b2f] text-white rounded-md hover:bg-[#074738] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* Story & Craftsmanship / Umrah Guide Section */}
        <section className="bg-[#f4efe8] border-y border-stone-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-6 space-y-5 text-left">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#c59b27]">
                  02. The Sacred Tradition
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  Why 100% Organic, Alcohol-Free Attars Matter
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Unlike commercial alcohol sprays (Eau de Parfum) that evaporate in alcohol vapors within two hours, traditional Attar is pure distilled essence carried in pure sandalwood or natural base oils. It harmonizes with your body chemistry, providing intimate, non-invasive aromatic presence that is beloved in Sunnah.
                </p>

                <div className="space-y-3 pt-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#053b2f] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Valid for Prayer & Masjid:</strong> Zero ethanol content ensures your wudu and clothes remain in a state of uncompromised purity for Salah.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#053b2f] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Ihram Compliance on Pilgrimage:</strong> In the state of Ihram, scented products are forbidden. Our specially formulated Unscented Tawaf Soap and Lotion safeguard your skin against chafing and dryness without violating Ihram restrictions.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#053b2f] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Direct WhatsApp Concierge:</strong> Every order is personally confirmed with you via WhatsApp <span className="font-mono font-bold text-[#053b2f]">{WHATSAPP_DISPLAY_PHONE}</span> with Cash on Delivery across Pakistan.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp ({WHATSAPP_DISPLAY_PHONE})</span>
                  </a>
                </div>
              </div>

              {/* Showcase Dual Bento Image Feature */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-stone-300 shadow-md bg-stone-100 aspect-square">
                  <img
                    src={whiteMuskImage}
                    alt="Misk Taharah white musk"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-stone-300 shadow-md bg-stone-100 aspect-square mt-6">
                  <img
                    src={umrahKitImage}
                    alt="Umrah pilgrimage travel kit"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Scent Quiz Promo Callout */}
        <section className="bg-[#053b2f] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pattern-arabesque opacity-15 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-4 relative">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#dfb746]">
              Personalized Olfactory Consultation
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold">
              Find Your Signature Sunnah Scent in Under 2 Minutes
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Whether you prefer meditative Cambodian oudh, pristine white musk, or the morning freshness of Taif roses, our algorithm pairs you with the perfect bottle.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsQuizOpen(true)}
                className="px-6 py-3 bg-[#c59b27] hover:bg-[#d9ad36] text-stone-950 text-xs sm:text-sm font-bold rounded-md shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>Launch Scent Matching Quiz</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={(product, size, qty) => handleAddToCart(product, size, qty)}
      />

      <ScentQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={(product, size) => handleAddToCart(product, size, 1)}
        onOpenProductDetail={(product) => setActiveProduct(product)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onExplore={() => {
          setSelectedCategory('all');
          scrollToCatalog();
        }}
      />

      {/* Floating WhatsApp chat shortcut button */}
      <WhatsAppFloat />

      {/* Sleek Mobile Bottom Navigation Bar (strictly adheres to 15% mobile sticky cap) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#faf8f5]/95 backdrop-blur-md border-t border-stone-200/90 px-3 py-2 flex items-center justify-around text-[10px] font-medium text-stone-600">
        <button
          onClick={() => {
            setSelectedCategory('all');
            scrollToCatalog();
          }}
          className="flex flex-col items-center gap-1 hover:text-[#053b2f] transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Catalog</span>
        </button>

        <button
          onClick={() => setIsQuizOpen(true)}
          className="flex flex-col items-center gap-1 text-[#966b0a] font-bold"
        >
          <Sparkles className="w-4 h-4 text-[#c59b27]" />
          <span>Scent Quiz</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 relative hover:text-[#053b2f] transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Bag</span>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 right-1.5 w-4 h-4 rounded-full bg-[#c59b27] text-stone-950 font-bold flex items-center justify-center text-[9px]">
              {totalCartCount}
            </span>
          )}
        </button>

        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[#128C7E] font-semibold"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
