import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a0c10]/95 backdrop-blur-lg border-t border-[#1f2638] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#141926] border border-[#232c3f] text-gray-200 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#ff9923] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#152518] border border-[#29962c]/60 text-white active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#29962c] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#29962c]">WHATSAPP</span>
        </a>

        {/* GET A QUOTE */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#29962c] text-white active:scale-95 transition-all text-center shadow-md shadow-[#29962c]/30"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">GET A QUOTE</span>
        </button>

      </div>
    </div>
  );
};
