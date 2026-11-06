import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { getCartCheckoutWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onExplore,
}) => {
  const [showCheckoutForm, setShowCheckoutForm] = React.useState(false);
  const [orderConfirmed, setOrderConfirmed] = React.useState(false);
  const [orderId, setOrderId] = React.useState('');

  const [customerInfo, setCustomerInfo] = React.useState({
    fullName: '',
    phone: '',
    city: 'Karachi',
    address: '',
    paymentMethod: 'Cash on Delivery (COD)',
    notes: '',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedSize.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 5000 ? 0 : (items.length > 0 ? 250 : 0);
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCartCheckoutWhatsAppUrl(items, customerInfo);
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Set confirmed state
    setOrderId(`KG-${Math.floor(100000 + Math.random() * 900000)}`);
    setOrderConfirmed(true);
  };

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderId(`KG-${Math.floor(100000 + Math.random() * 900000)}`);
    setOrderConfirmed(true);
  };

  const handleFinish = () => {
    onClearCart();
    setOrderConfirmed(false);
    setShowCheckoutForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-[#faf8f5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#053b2f]" />
              <h2 className="font-cinzel text-lg font-bold text-stone-900">
                {orderConfirmed ? 'Order Summary' : showCheckoutForm ? 'Delivery Details' : 'Shopping Bag'}
              </h2>
              <span className="text-xs text-stone-500 font-mono tabular-nums">
                ({items.length} {items.length === 1 ? 'item' : 'items'})
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-200/50 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {orderConfirmed ? (
              /* Order Confirmation Screen */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-stone-900">
                  JazakAllah Khair for Your Order!
                </h3>
                <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                  Your order <span className="font-mono font-bold text-stone-800">{orderId}</span> has been formatted. Our team will verify dispatch with you.
                </p>

                <div className="p-4 bg-stone-50 rounded-lg text-left text-xs space-y-2 border border-stone-200/70">
                  <p className="font-semibold text-stone-800">Customer: {customerInfo.fullName || 'Valued Customer'}</p>
                  <p className="text-stone-600">Contact: {customerInfo.phone}</p>
                  <p className="text-stone-600">Address: {customerInfo.address}, {customerInfo.city}</p>
                  <p className="text-stone-600">Payment: {customerInfo.paymentMethod}</p>
                  <p className="font-bold text-stone-900 pt-1 border-t border-stone-200">
                    Grand Total: Rs. {grandTotal.toLocaleString()}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href={getCartCheckoutWhatsAppUrl(items, customerInfo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send/Update via WhatsApp ({WHATSAPP_DISPLAY_PHONE})</span>
                  </a>

                  <button
                    onClick={handleFinish}
                    className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                  >
                    Done & Return to Store
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Bag State */
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-stone-500 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-300 stroke-[1.2]" />
                <p className="font-cinzel text-base font-bold text-stone-800">Your shopping bag is empty</p>
                <p className="text-xs text-stone-500 max-w-xs">
                  Discover our pure non-alcoholic attars and Umrah travel essentials.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExplore();
                  }}
                  className="mt-2 px-5 py-2.5 bg-[#053b2f] hover:bg-[#074738] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : showCheckoutForm ? (
              /* Checkout Form */
              <form id="checkout-form" onSubmit={handleWhatsAppCheckout} className="space-y-4">
                <div className="text-xs text-stone-600 bg-stone-100 p-2.5 rounded border border-stone-200">
                  <span className="font-semibold text-stone-900">Direct WhatsApp Dispatch:</span> Orders are confirmed and updated in real-time via WhatsApp to ensure prompt local courier handling.
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.fullName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#053b2f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">WhatsApp / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="e.g. 0345 2364837 or +92 300 1234567"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#053b2f]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">City *</label>
                    <select
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#053b2f]"
                    >
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Quetta">Quetta</option>
                      <option value="Other City">Other City (Pakistan)</option>
                      <option value="International">International</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Payment Method</label>
                    <select
                      value={customerInfo.paymentMethod}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, paymentMethod: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#053b2f]"
                    >
                      <option value="Cash on Delivery (COD)">Cash on Delivery</option>
                      <option value="Bank Transfer / Raast">Bank Transfer / Raast</option>
                      <option value="EasyPaisa / JazzCash">EasyPaisa / JazzCash</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Complete Street Delivery Address *</label>
                  <textarea
                    required
                    rows={2}
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="House/Apartment #, Street, Area/Sector..."
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#053b2f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Order Notes / Instructions (Optional)</label>
                  <input
                    type="text"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    placeholder="e.g. Gift packaging / Urgent dispatch"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#053b2f]"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 transition-colors"
                >
                  ← Back to Bag Items
                </button>
              </form>
            ) : (
              /* Itemized List */
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize.label}`}
                    className="flex gap-3 pb-4 border-b border-stone-100 items-start"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md bg-stone-100 shrink-0 border border-stone-200"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-stone-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-stone-500 mt-0.5">
                        {item.selectedSize.label} ({item.selectedSize.volume})
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 rounded overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-0.5 text-xs font-semibold text-stone-900 font-mono tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs font-bold text-stone-900 font-mono tabular-nums">
                          Rs. {(item.selectedSize.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout Action Module */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#faf8f5] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums font-medium text-stone-800">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Standard Shipping</span>
                  <span className="font-mono tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-semibold">FREE (Over Rs. 5,000)</span>
                    ) : (
                      `Rs. ${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Grand Total</span>
                  <span className="font-mono tabular-nums text-base text-[#053b2f]">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {showCheckoutForm ? (
                <div className="space-y-2">
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-md flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Confirm & Send Order to WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleLocalSubmit}
                    className="w-full py-2 px-3 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-md transition-colors"
                  >
                    Confirm Order Locally without WhatsApp
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => setShowCheckoutForm(true)}
                    className="w-full py-3 px-4 bg-[#053b2f] hover:bg-[#074738] text-white text-xs sm:text-sm font-bold rounded-md flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Proceed to Delivery & Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={getCartCheckoutWhatsAppUrl(items, {
                      fullName: 'Direct Shopper',
                      phone: 'Instant WhatsApp',
                      city: 'Inquiry',
                      address: 'Contacted via WhatsApp',
                      paymentMethod: 'Cash on Delivery'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 border border-[#25D366]/30 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Order without Form</span>
                  </a>
                </div>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>100% Satisfaction Guarantee · Verified Sunnah Standard</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
