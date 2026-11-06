import React from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, Check, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';
import { SCENT_QUIZ_QUESTIONS, PRODUCTS } from '../data/products';
import { Product } from '../types';
import { getQuizResultWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

interface ScentQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: { label: string; price: number; volume: string }) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const ScentQuizModal: React.FC<ScentQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onOpenProductDetail,
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, string>>({});
  const [matchedProduct, setMatchedProduct] = React.useState<Product | null>(null);
  const [addedNotice, setAddedNotice] = React.useState(false);

  if (!isOpen) return null;

  const currentQuestion = SCENT_QUIZ_QUESTIONS[currentStep];
  const isFinished = currentStep >= SCENT_QUIZ_QUESTIONS.length;

  const handleSelectOption = (family: string) => {
    const updated = { ...selectedAnswers, [currentQuestion.id]: family };
    setSelectedAnswers(updated);

    if (currentStep < SCENT_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate match
      const counts: Record<string, number> = {
        'woody-oudh': 0,
        'musk': 0,
        'floral': 0,
        'oriental-amber': 0
      };

      Object.values(updated).forEach((fam) => {
        if (counts[fam] !== undefined) counts[fam]++;
      });

      // Find highest tally
      let bestFamily = 'woody-oudh';
      let maxCount = -1;
      for (const [fam, count] of Object.entries(counts)) {
        if (count > maxCount) {
          maxCount = count;
          bestFamily = fam;
        }
      }

      // Pick corresponding flagship attar
      const matched =
        PRODUCTS.find((p) => p.category === 'attar' && p.scentFamily === bestFamily) ||
        PRODUCTS[0];

      setMatchedProduct(matched);
      setCurrentStep(SCENT_QUIZ_QUESTIONS.length);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setMatchedProduct(null);
  };

  const handleAddToCart = () => {
    if (matchedProduct) {
      onAddToCart(matchedProduct, matchedProduct.sizes[0]);
      setAddedNotice(true);
      setTimeout(() => setAddedNotice(false), 1600);
    }
  };

  const handleWhatsAppInquiry = () => {
    if (matchedProduct) {
      const url = getQuizResultWhatsAppUrl(
        matchedProduct.name,
        matchedProduct.categoryLabel,
        matchedProduct.notes ? matchedProduct.notes.top : 'Pure botanical distillation'
      );
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-stone-200 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#04241d] text-white p-5 sm:p-6 border-b border-[#0f4d3c]/40 relative pattern-arabesque">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-stone-300 hover:text-white bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close Quiz"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb746] font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Virtual Scent Matching Sommelier</span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Discover Your Sunnah Signature Attar
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-lg font-light">
            Answer 4 intuitive questions to match your daily prayer routine, personal aura, and fragrance preference.
          </p>

          {/* Progress bar */}
          {!isFinished && (
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#dfb746] to-[#c59b27] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / SCENT_QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-stone-300 whitespace-nowrap">
                Step {currentStep + 1} of {SCENT_QUIZ_QUESTIONS.length}
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {!isFinished ? (
            <div className="space-y-6">
              <div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                  {currentQuestion.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm mt-1">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.scentFamily)}
                    className="p-4 rounded-lg border border-stone-200 hover:border-[#053b2f] bg-stone-50/50 hover:bg-[#053b2f]/5 text-left transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm text-stone-900 group-hover:text-[#053b2f] flex items-center justify-between">
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#053b2f] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Back / Navigation */}
              <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
                {currentStep > 0 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="hover:text-stone-900 transition-colors cursor-pointer"
                  >
                    ← Previous Question
                  </button>
                ) : (
                  <span />
                )}
                <span>100% Botanical · Zero Alcohol Guarantee</span>
              </div>
            </div>
          ) : matchedProduct ? (
            /* Result Screen */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#c59b27] bg-[#c59b27]/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Your Olfactory Signature Match</span>
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-stone-900">
                  {matchedProduct.name}
                </h3>
                <p className="font-serif text-[#966b0a] font-semibold text-sm">
                  {matchedProduct.arabicName}
                </p>
              </div>

              {/* Matched Product Spotlight Card */}
              <div className="bg-[#faf8f5] rounded-xl border border-stone-200 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden shrink-0 border border-stone-200 shadow-sm bg-white">
                  <img
                    src={matchedProduct.image}
                    alt={matchedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2 flex-1 text-left">
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {matchedProduct.description}
                  </p>

                  {matchedProduct.notes && (
                    <div className="text-xs text-stone-700 bg-white p-2.5 rounded border border-stone-200/80 space-y-1">
                      <p><span className="font-semibold text-stone-900">Top Notes:</span> {matchedProduct.notes.top}</p>
                      <p><span className="font-semibold text-stone-900">Heart Notes:</span> {matchedProduct.notes.heart}</p>
                      <p><span className="font-semibold text-stone-900">Base Notes:</span> {matchedProduct.notes.base}</p>
                    </div>
                  )}

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-xs text-stone-500 font-medium">Starting from:</span>
                    <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                      Rs. {matchedProduct.sizes[0].price.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-500">({matchedProduct.sizes[0].label})</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`py-3 px-4 rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      addedNotice
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#053b2f] hover:bg-[#074738] text-white shadow-md'
                    }`}
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Shopping Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#e8d8b0]" />
                        <span>Add Match to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleWhatsAppInquiry}
                    className="py-3 px-4 rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white transition-all cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Order via WhatsApp ({WHATSAPP_DISPLAY_PHONE})</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Scent Quiz</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenProductDetail(matchedProduct);
                    }}
                    className="text-[#053b2f] font-semibold hover:underline cursor-pointer"
                  >
                    View Full Details & Sizes →
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
