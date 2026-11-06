import React from 'react';
import { X, Star, ShoppingBag, MessageCircle, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: { label: string; price: number; volume: string }, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [addedNotice, setAddedNotice] = React.useState(false);

  if (!product) return null;

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAddToCart = () => {
    onAddToCart(product, currentSize, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
    }, 1800);
  };

  const handleWhatsAppOrder = () => {
    const url = getProductWhatsAppUrl(product, currentSize, quantity);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden border border-stone-200 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Column */}
          <div className="relative bg-stone-100 flex items-center justify-center min-h-[280px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover max-h-[420px] md:max-h-none"
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-stone-950/80 text-[#e8d8b0] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details & Purchase Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Arabic name */}
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold uppercase tracking-wider text-[#053b2f]">
                  {product.categoryLabel}
                </span>
                <span className="font-serif text-[#966b0a] font-bold text-sm">
                  {product.arabicName}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 mt-1 leading-snug">
                {product.name}
              </h2>

              {/* Reviews & Origin */}
              <div className="flex items-center gap-2 mt-2 text-xs text-stone-600">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-stone-900 font-mono tabular-nums">{product.rating}</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="font-mono tabular-nums">{product.reviewsCount} verified reviews</span>
                {product.origin && (
                  <>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500">{product.origin}</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Olfactory Pyramid (for attars) */}
              {product.notes && (
                <div className="mt-4 p-3 bg-[#faf7f2] rounded-lg border border-stone-200/80 text-xs space-y-1.5">
                  <p className="font-semibold text-stone-800 flex items-center gap-1.5 uppercase text-[10px] tracking-wider text-[#053b2f]">
                    <Sparkles className="w-3 h-3 text-[#c59b27]" />
                    Scent Pyramid & Notes
                  </p>
                  <p className="text-stone-700">
                    <span className="font-semibold text-stone-900">Top Notes:</span> {product.notes.top}
                  </p>
                  <p className="text-stone-700">
                    <span className="font-semibold text-stone-900">Heart Notes:</span> {product.notes.heart}
                  </p>
                  <p className="text-stone-700">
                    <span className="font-semibold text-stone-900">Base Notes:</span> {product.notes.base}
                  </p>
                </div>
              )}

              {/* Features List (for Umrah/lifestyle) */}
              {product.features && (
                <div className="mt-4 p-3 bg-[#f3f7f5] rounded-lg border border-emerald-100 text-xs space-y-1">
                  <p className="font-semibold text-[#053b2f] flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Key Specifications & Sunnah Criteria
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-stone-700 pt-1">
                    {product.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Size Selection */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Select Size / Volume
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-2 text-xs rounded-md border text-left transition-all cursor-pointer ${
                        selectedSizeIndex === idx
                          ? 'border-[#053b2f] bg-[#053b2f]/5 text-[#053b2f] font-semibold'
                          : 'border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-medium truncate">{s.label}</div>
                      <div className="text-[11px] text-stone-500 font-mono tabular-nums">
                        Rs. {s.price.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">Quantity:</span>
                <div className="flex items-center border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-bold text-stone-900 font-mono tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Purchase Bar */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider">Subtotal:</span>
                  <span className="text-2xl font-bold text-stone-900 font-mono tabular-nums ml-2">
                    Rs. {(currentSize.price * quantity).toLocaleString()}
                  </span>
                </div>
                <span className="text-xs text-emerald-800 font-medium">In Stock · Ready to Dispatch</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3 px-4 rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    addedNotice
                      ? 'bg-emerald-700 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Shopping Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#e8d8b0]" />
                      <span>Add to Shopping Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white transition-all cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-400">
                Official WhatsApp: <span className="font-mono text-stone-600 font-medium">{WHATSAPP_DISPLAY_PHONE}</span> · Cash on Delivery available across Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
