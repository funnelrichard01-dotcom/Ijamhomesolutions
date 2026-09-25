import React from 'react';
import { X } from 'lucide-react';
import { SolutionsForm } from './SolutionsForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e121a]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-[#171d2b] text-gray-400 hover:text-white border border-[#273247] transition-colors"
          aria-label="Close Quote Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <SolutionsForm
          isModal={true}
          onClose={onClose}
          prefilledService={prefilledService}
        />
      </div>
    </div>
  );
};
