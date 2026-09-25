import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

interface QualityAssuranceProps {
  onOpenQuote: () => void;
}

export const QualityAssurance: React.FC<QualityAssuranceProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0e121a] to-[#0b0c10] relative overflow-hidden">
      {/* Decorative accent lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#121622] border-2 border-[#ff9923]/50 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Gold highlight accent banner */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fcb900]/15 rounded-full blur-2xl"></div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b2230] border border-[#ff9923]/40 text-xs font-bold uppercase tracking-wider text-[#fcb900]">
              <ShieldCheck className="w-4 h-4 text-[#ff9923]" />
              <span>IJAM CORE PROMISE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Quality Assurance; <span className="text-[#ff9923]">Exceeding Standards</span>
            </h2>

            {/* Exact original supporting copy */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              “As a leading contractor in the Tampa area, we deliver with an unwavering commitment to quality, integrity, honesty and craftsmanship. We work with you every step of the way to guarantee project satisfaction and exceed your standards.”
            </p>

            {/* Standards bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left max-w-3xl mx-auto">
              <div className="bg-[#171d2b] border border-[#273247] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#29962c]" />
                  <span>Unwavering Integrity</span>
                </div>
                <p className="text-xs text-gray-300">
                  Honest evaluations, no surprise costs, and clear project scopes.
                </p>
              </div>

              <div className="bg-[#171d2b] border border-[#273247] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#ff9923]" />
                  <span>Caring Craftsmanship</span>
                </div>
                <p className="text-xs text-gray-300">
                  Precision in every joint, tile, cabinet, and finished surface.
                </p>
              </div>

              <div className="bg-[#171d2b] border border-[#273247] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#fcb900]" />
                  <span>Satisfaction Guaranteed</span>
                </div>
                <p className="text-xs text-gray-300">
                  Hands-on walkthroughs until your vision meets our standard.
                </p>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#ff9923] hover:bg-[#fcb900] transition-all shadow-lg shadow-[#ff9923]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] transition-all shadow-lg shadow-[#29962c]/30 flex items-center justify-center gap-2"
              >
                <span>GET A QUOTE</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#172719] border border-[#29962c]/60 hover:bg-[#203624] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#29962c]" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
