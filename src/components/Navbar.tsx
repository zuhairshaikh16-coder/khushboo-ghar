import React from 'react';
import { ShoppingBag, Sparkles, Download, MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onOpenZipModal: () => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
  onOpenZipModal,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (category: string) => {
    onSelectCategory(category);
    setMobileMenuOpen(false);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement top ribbon */}
      <div className="bg-[#03241c] text-[#e8d8b0] text-xs py-2 px-4 border-b border-[#0f4d3c]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="font-semibold text-[#dfb746]">✨ Pure Sunnah & Ihram Approved:</span>
            <span className="hidden sm:inline">100% Non-Alcoholic Organic Attars & Umrah Essentials</span>
            <span className="sm:hidden">100% Non-Alcoholic Attars</span>
          </div>
          <div className="flex items-center gap-4 text-xs shrink-0">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#e8d8b0] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline font-mono">{WHATSAPP_DISPLAY_PHONE}</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar strictly obeying Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group cursor-pointer"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-[#053b2f] group-hover:text-[#0a5242] transition-colors">
                  Khushboo Ghar
                </span>
                <span className="font-serif text-sm text-[#c59b27] font-semibold opacity-90 hidden sm:inline">
                  بيت العطور
                </span>
              </div>
              <p className="text-[11px] tracking-wider uppercase text-stone-500 font-medium -mt-1 hidden sm:block">
                Pure Attars · Umrah & Islamic Goods
              </p>
            </button>
          </div>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <button
              onClick={() => handleNavClick('all')}
              className="hover:text-[#053b2f] transition-colors whitespace-nowrap cursor-pointer"
            >
              All Treasures
            </button>
            <button
              onClick={() => handleNavClick('attar')}
              className="hover:text-[#053b2f] transition-colors whitespace-nowrap cursor-pointer"
            >
              Organic Attars
            </button>
            <button
              onClick={() => handleNavClick('umrah')}
              className="hover:text-[#053b2f] transition-colors whitespace-nowrap cursor-pointer"
            >
              Umrah & Hajj
            </button>
            <button
              onClick={() => handleNavClick('islamic-lifestyle')}
              className="hover:text-[#053b2f] transition-colors whitespace-nowrap cursor-pointer"
            >
              Islamic Lifestyle
            </button>
            <button
              onClick={onOpenQuiz}
              className="text-[#966b0a] font-semibold hover:text-[#053b2f] transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              Scent Quiz
            </button>
          </nav>

          {/* Zone 3: 1 primary action + Cart & ZIP */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Scent Quiz pill trigger */}
            <button
              onClick={onOpenQuiz}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#053b2f] bg-[#053b2f]/8 hover:bg-[#053b2f]/15 border border-[#053b2f]/15 rounded-md transition-colors cursor-pointer"
              title="Find your personalized signature attar"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span className="whitespace-nowrap">Find Scent</span>
            </button>

            {/* Download Code ZIP button */}
            <button
              onClick={onOpenZipModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 rounded-md transition-colors cursor-pointer"
              title="Download clean project source ZIP for self-hosting"
            >
              <Download className="w-3.5 h-3.5 text-stone-600" />
              <span className="whitespace-nowrap">Export ZIP</span>
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-[#053b2f] hover:bg-[#074738] rounded-md shadow-sm transition-all cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#e8d8b0]" />
              <span className="hidden sm:inline font-medium">Bag</span>
              <span className="ml-0.5 px-1.5 py-0.2 bg-[#c59b27] text-stone-950 text-xs font-bold rounded-full min-w-4 text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf8f5] border-b border-stone-200 px-4 py-4 space-y-3 shadow-lg animate-in fade-in duration-150">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => handleNavClick('all')}
                className="text-left px-3 py-2 rounded-md hover:bg-stone-100 font-medium text-stone-800"
              >
                All Treasures
              </button>
              <button
                onClick={() => handleNavClick('attar')}
                className="text-left px-3 py-2 rounded-md hover:bg-stone-100 font-medium text-stone-800"
              >
                Organic Attars
              </button>
              <button
                onClick={() => handleNavClick('umrah')}
                className="text-left px-3 py-2 rounded-md hover:bg-stone-100 font-medium text-stone-800"
              >
                Umrah & Hajj
              </button>
              <button
                onClick={() => handleNavClick('islamic-lifestyle')}
                className="text-left px-3 py-2 rounded-md hover:bg-stone-100 font-medium text-stone-800"
              >
                Islamic Lifestyle
              </button>
            </div>
            <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-semibold text-[#053b2f] bg-[#053b2f]/10 rounded-md"
              >
                <Sparkles className="w-4 h-4 text-[#c59b27]" />
                Virtual Scent Matching Quiz
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZipModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-stone-700 bg-stone-100 rounded-md"
              >
                <Download className="w-4 h-4" />
                Download Website Code (.ZIP)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
