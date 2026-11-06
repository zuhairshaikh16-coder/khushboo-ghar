import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = React.useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Floating prompt balloon */}
      {showTooltip && (
        <div className="bg-white rounded-lg shadow-xl border border-stone-200 p-3 max-w-[240px] text-left animate-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Khushboo Ghar Online</span>
          </div>
          <p className="text-xs text-stone-700 leading-snug">
            Need advice on attar notes or Umrah essentials? Chat with us on WhatsApp!
          </p>
          <p className="text-[10px] text-stone-400 mt-1 font-mono">
            {WHATSAPP_DISPLAY_PHONE}
          </p>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        title={`Chat on WhatsApp (${WHATSAPP_DISPLAY_PHONE})`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
