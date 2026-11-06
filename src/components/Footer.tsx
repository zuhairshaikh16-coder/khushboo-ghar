
import React from 'react';
import { MessageCircle, ShieldCheck, HeartHandshake, Sparkles, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenQuiz,
}) => {
  return (
    <footer className="bg-[#03211a] text-stone-300 border-t border-[#0d4536] relative overflow-hidden">
      <div className="absolute inset-0 pattern-arabesque opacity-20 pointer-events-none" />

      {/* Brand Values Ribbon */}
      <div className="border-b border-[#0f4d3c]/50 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-[#053b2f] rounded-lg text-[#dfb746] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">100% Alcohol-Free & Pure Organic</h4>
              <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">
                Hydro-distilled in traditional deg-bhapka copper stills with zero phthalates, DPG, or synthetic diluents.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-[#053b2f] rounded-lg text-[#dfb746] shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">Ihram & Umrah Compliant</h4>
              <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">
                Certified unscented soaps, creams, and pilgrim accessories adhering to Muhrim Tawaf and Sa’i guidelines.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-[#053b2f] rounded-lg text-[#dfb746] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">WhatsApp Concierge Ordering</h4>
              <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">
                Direct personalized support, scent consultations, and fast nationwide courier dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-cinzel text-2xl font-bold tracking-tight text-white">
                Khushboo Ghar
              </span>
              <span className="font-serif text-sm text-[#dfb746] font-semibold">
                بيت العطور
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Dedicated to reviving the venerable Sunnah of pleasant fragrances, pure non-alcoholic attars, and high quality pilgrimage essentials for worshipers of Allah.
            </p>
            <div className="pt-2 text-xs space-y-2 text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dfb746]" />
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  WhatsApp: {WHATSAPP_DISPLAY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dfb746]" />
                <span>Express Courier Dispatch across Pakistan & Worldwide Shipping</span>
              </div>
            </div>
          </div>

          {/* Catalog Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#dfb746]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('attar')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pure Organic Attars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('umrah')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ihram-Safe Umrah & Hajj Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('islamic-lifestyle')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Turkish Prayer Mats & Janamaz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('islamic-lifestyle')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Olive Wood Tasbih & Natural Miswak
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  View All Islamic Treasures
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#dfb746]">
              Customer Services
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenQuiz}
                className="w-full flex items-center justify-between p-2.5 bg-[#053b2f] hover:bg-[#074738] rounded-md text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#dfb746]" />
                  <span>Virtual Scent Matching Quiz</span>
                </div>
                <span>Start →</span>
              </button>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 rounded-md text-xs font-semibold text-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Order via WhatsApp ({WHATSAPP_DISPLAY_PHONE})</span>
                </div>
                <span>Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Copyright */}
        <div className="mt-12 pt-6 border-t border-[#0e4839] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Khushboo Ghar (بيت العطور). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Made with Sunnah Values</span>
            <span>·</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
