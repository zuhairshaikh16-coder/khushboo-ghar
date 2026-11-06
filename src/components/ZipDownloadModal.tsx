import React from 'react';
import { X, Download, CheckCircle, Terminal, Globe, FileCode2, Loader2 } from 'lucide-react';
import { downloadKhushbooGharZip } from '../utils/projectZip';
import { WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [downloadComplete, setDownloadComplete] = React.useState(false);

  if (!isOpen) return null;

  const handleStartDownload = async () => {
    try {
      setDownloading(true);
      setProgress(10);
      await downloadKhushbooGharZip((p) => setProgress(p));
      setDownloadComplete(true);
    } catch (err) {
      console.error('Failed to download zip:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-stone-200 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#053b2f] text-white p-5 sm:p-6 border-b border-[#0f4d3c] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-stone-300 hover:text-white bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfb746] font-semibold mb-1">
            <Download className="w-3.5 h-3.5" />
            <span>Developer Source Code Export</span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Download Khushboo Ghar Website (.ZIP)
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-lg font-light">
            Export the complete, standalone codebase so you can customize products, change branding, and host on your own server.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Download Action Box */}
          <div className="p-5 bg-[#faf8f5] rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-left w-full sm:w-auto">
              <h3 className="font-bold text-stone-900 text-sm">
                khushboo-ghar-website-source.zip
              </h3>
              <p className="text-xs text-stone-500">
                Ready-to-run React 19 + TypeScript + Vite + Tailwind CSS bundle with full WhatsApp integration.
              </p>
            </div>

            <button
              onClick={handleStartDownload}
              disabled={downloading}
              className="w-full sm:w-auto px-6 py-3 bg-[#053b2f] hover:bg-[#074738] disabled:bg-stone-400 text-white font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#dfb746]" />
                  <span>Packaging ({progress}%)...</span>
                </>
              ) : downloadComplete ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded! Click to re-download</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#dfb746]" />
                  <span>Download Project .ZIP</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Hosting & Editing Guide */}
          <div className="space-y-4 text-left">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-[#053b2f]">
              How to Edit & Host on Your Own Server
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-stone-900">
                  <Terminal className="w-4 h-4 text-[#053b2f]" />
                  <span>1. Run Locally</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Extract the zip, open a terminal in the folder, and run:
                </p>
                <code className="block p-1.5 bg-stone-900 text-emerald-400 font-mono text-[10px] rounded">
                  npm install<br />npm run dev
                </code>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-stone-900">
                  <FileCode2 className="w-4 h-4 text-[#053b2f]" />
                  <span>2. Edit Products & WhatsApp</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Update your products in <span className="font-mono text-stone-800">src/data/products.ts</span> and phone number in <span className="font-mono text-stone-800">src/utils/whatsapp.ts</span> (currently <span className="font-mono">{WHATSAPP_DISPLAY_PHONE}</span>).
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-stone-900">
                  <Globe className="w-4 h-4 text-[#053b2f]" />
                  <span>3. Host on Any Server</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Run <span className="font-mono bg-stone-200 px-1 rounded">npm run build</span>. Upload the resulting <span className="font-mono font-bold">dist/</span> folder to cPanel, Vercel, Netlify, Cloudflare Pages, or VPS!
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
