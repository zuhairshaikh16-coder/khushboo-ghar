import React from 'react';
import { MessageCircle, ShoppingBag, Star, Check } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, size: { label: string; price: number; volume: string }) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
}) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(0);
  const [justAdded, setJustAdded] = React.useState(false);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, currentSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = getProductWhatsAppUrl(product, currentSize, 1);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group bg-white rounded-lg border border-stone-200/90 hover:border-stone-300 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer text-left"
    >
      {/* Image Showcase */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Subtle Single Badge (anti-pill spam, clean subtle tag) */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-stone-950/75 backdrop-blur-sm text-[#e8d8b0] text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded">
            {product.badge}
          </div>
        )}

        {/* Origin / Sunnah indicator */}
        {product.isOrganic && (
          <div className="absolute top-2.5 right-2.5 bg-emerald-900/80 backdrop-blur-sm text-emerald-100 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
            Alcohol-Free
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Category & Arabic Name */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span className="uppercase tracking-wider font-semibold text-[11px] text-[#053b2f]">
              {product.categoryLabel}
            </span>
            <span className="font-serif text-[#966b0a] font-medium text-xs">
              {product.arabicName}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#053b2f] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-stone-500 text-xs mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-stone-600">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-semibold text-stone-800 font-mono tabular-nums">{product.rating}</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="text-stone-500 font-mono tabular-nums">({product.reviewsCount} reviews)</span>
          </div>
        </div>

        {/* Size Selection (if multiple) & Price */}
        <div className="mt-4 pt-3 border-t border-stone-100">
          {product.sizes.length > 1 && (
            <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto scrollbar-none" onClick={(e) => e.stopPropagation()}>
              {product.sizes.map((s, idx) => (
                <button
                  key={s.label}
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`px-2 py-0.5 text-[11px] rounded transition-colors cursor-pointer ${
                    selectedSizeIndex === idx
                      ? 'bg-[#053b2f] text-white font-medium'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {s.volume}
                </button>
              ))}
            </div>
          )}

          {/* Price & Action Row */}
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-stone-400 font-medium mr-1">Rs.</span>
              <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                {currentSize.price.toLocaleString()}
              </span>
            </div>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through font-mono tabular-nums">
                Rs. {((product.originalPrice / product.sizes[0].price) * currentSize.price).toFixed(0)}
              </span>
            )}
          </div>

          {/* 2 Functional Buttons: Add to Bag & WhatsApp Direct Order */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#e8d8b0]" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-semibold rounded bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] border border-[#25D366]/30 transition-colors cursor-pointer"
              title="Order this product directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
