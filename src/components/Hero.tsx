import React from 'react';
import heroImage from '../assets/images/hero_attar_perfume_1793948058716.jpg';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuiz: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onExplore }) => {
  return (
    <section className="relative overflow-hidden bg-[#04241d] text-stone-100">
      {/* Subtle radial backdrop illumination */}
      <div className="absolute inset-0 pattern-arabesque opacity-35 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c59b27]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#095744]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial & Conversion Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb746] font-semibold">
              <span className="w-6 h-[1px] bg-[#c59b27]" />
              <span>Khushboo Ghar · Artisanal Fragrance House</span>
            </div>

            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] text-balance">
              Pure Organic Attars & Sacred Umrah Essentials
            </h1>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Experience the venerable tradition of non-alcoholic perfume oils distilled from Cambodian agarwood, pure white musk, and mountain roses. Curated with certified Ihram-safe pilgrimage kits and handcrafted Islamic lifestyle pieces.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenQuiz}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-gradient-to-r from-[#dfb746] to-[#c59b27] hover:from-[#e5c35b] hover:to-[#ce9f26] rounded-md shadow-md transition-all cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>Find Your Scent (Quiz)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplore}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 border border-stone-600/70 rounded-md transition-all cursor-pointer"
              >
                <span>Browse Attars & Umrah</span>
              </button>
            </div>

            {/* Adjacency Trust Metrics / Editorial Indicators (strictly unboxed) */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb746]" />
                <span>100% Pure Alcohol-Free</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#dfb746]" />
                <span>Ihram & Tawaf Safe</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Order: <span className="font-mono text-stone-300 ml-1">{WHATSAPP_DISPLAY_PHONE}</span></span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#c59b27]/30 shadow-2xl bg-stone-900 group">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-square relative overflow-hidden bg-stone-900">
                <img
                 src={heroImage}
                  alt="Khushboo Ghar artisanal crystal attar bottles, agarwood chips, and fresh taif rose petals"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-left bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent">
                <p className="text-xs uppercase tracking-wider text-[#dfb746] font-semibold">Featured Masterpiece</p>
                <p className="text-stone-100 font-cinzel font-bold text-base sm:text-lg">Dehn Al Oudh Cambodi & Taif Rose</p>
                <p className="text-stone-300 text-xs mt-0.5 line-clamp-1">Slow hydro-distilled in pure brass alembics with zero synthetic carrier oils.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
