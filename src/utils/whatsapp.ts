import { CartItem, Product } from '../types';

export const WHATSAPP_PHONE_NUMBER = '923452364837';
export const WHATSAPP_DISPLAY_PHONE = '+92 345 2364837';

/**
 * Cleanly generates a WhatsApp click-to-chat URL with properly encoded message
 */
export function getWhatsAppUrl(message: string): string {
  const cleanNumber = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a direct order link for a single product from product card or modal
 */
export function getProductWhatsAppUrl(
  product: Product,
  selectedSize: { label: string; price: number; volume: string },
  quantity: number = 1
): string {
  const message = [
    `*Assalamu Alaikum Khushboo Ghar!*`,
    `I would like to order directly through WhatsApp:`,
    ``,
    `🏷️ *Product:* ${product.name}`,
    `📦 *Selection:* ${selectedSize.label} (${selectedSize.volume})`,
    `🔢 *Quantity:* ${quantity}`,
    `💰 *Unit Price:* Rs. ${selectedSize.price.toLocaleString()}`,
    `💳 *Total Price:* Rs. ${(selectedSize.price * quantity).toLocaleString()}`,
    ``,
    `Please confirm stock availability and share delivery charges & account details. JazakAllah Khair!`
  ].join('\n');

  return getWhatsAppUrl(message);
}

/**
 * Creates a formatted receipt checkout message from the cart
 */
export function getCartCheckoutWhatsAppUrl(
  items: CartItem[],
  customerInfo: {
    fullName: string;
    phone: string;
    city: string;
    address: string;
    paymentMethod: string;
    notes?: string;
  }
): string {
  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedSize.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 5000 ? 0 : 250;
  const grandTotal = subtotal + deliveryFee;

  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}*\n   Size: ${item.selectedSize.label} | Qty: ${
          item.quantity
        } | Rs. ${(item.selectedSize.price * item.quantity).toLocaleString()}`
    )
    .join('\n');

  const message = [
    `*Assalamu Alaikum Khushboo Ghar!*`,
    `🛍️ *NEW ORDER SUBMISSION FROM WEBSITE*`,
    `───────────────────────────`,
    `*Order Items:*`,
    itemsList,
    `───────────────────────────`,
    `💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}`,
    `🚚 *Delivery:* ${deliveryFee === 0 ? 'FREE (Orders over Rs. 5,000)' : `Rs. ${deliveryFee}`}`,
    `🧾 *Grand Total:* Rs. ${grandTotal.toLocaleString()}`,
    `───────────────────────────`,
    `*Customer Details:*`,
    `👤 *Name:* ${customerInfo.fullName || 'Not provided'}`,
    `📞 *Phone:* ${customerInfo.phone || 'Not provided'}`,
    `📍 *City:* ${customerInfo.city || 'Not provided'}`,
    `🏠 *Delivery Address:* ${customerInfo.address || 'Not provided'}`,
    `💳 *Payment Method:* ${customerInfo.paymentMethod}`,
    customerInfo.notes ? `📝 *Special Instructions:* ${customerInfo.notes}` : '',
    `───────────────────────────`,
    `Please verify my order and advise estimated dispatch time. JazakAllah!`
  ]
    .filter(Boolean)
    .join('\n');

  return getWhatsAppUrl(message);
}

/**
 * Generates an inquiry message for the scent quiz result
 */
export function getQuizResultWhatsAppUrl(
  productName: string,
  scentFamilyLabel: string,
  topNotes: string
): string {
  const message = [
    `*Assalamu Alaikum Khushboo Ghar!*`,
    `✨ I just completed your *Virtual Scent Matching Quiz* on the website!`,
    ``,
    `🎯 *My Recommended Match:* ${productName}`,
    `🌿 *Scent Family:* ${scentFamilyLabel}`,
    `🌸 *Key Notes:* ${topNotes}`,
    ``,
    `I would love to learn more about this attar, bottle sizes in stock, and sample discovery options. Thank you!`
  ].join('\n');

  return getWhatsAppUrl(message);
}

/**
 * General inquiry link
 */
export function getGeneralWhatsAppUrl(): string {
  const message = `Assalamu Alaikum Khushboo Ghar! I have an inquiry regarding your pure organic attars and Umrah collection.`;
  return getWhatsAppUrl(message);
}
