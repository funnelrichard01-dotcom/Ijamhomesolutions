import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { ABOUT_STORY, BUSINESS_INFO } from '../data/siteContent';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 bg-[#0c0f16] border-t border-[#1e2535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Imagery & Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#2b3548] shadow-2xl bg-black">
              <img
                src="/images/project-interior-3.jpeg"
                alt="IJAM Home Solutions Craftsmanship"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#121622]/90 backdrop-blur-md p-4 rounded-xl border border-[#2b3548]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#fcb900] uppercase mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#ff9923]" />
                  <span>Nearly A Decade of Experience</span>
                </div>
                <p className="text-xs text-gray-200">
                  Blending real estate market insight with licensed contracting execution.
                </p>
              </div>
            </div>

            {/* Micro grid with second photo & stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#242e40] h-28 relative">
                <img
                  src="/images/project-remodel-2.jpeg"
                  alt="IJAM Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white uppercase">
                  Multi-Family &amp; Residential
                </span>
              </div>

              <div className="bg-[#141926] border border-[#252f42] rounded-xl p-3 flex flex-col justify-center text-center">
                <span className="text-xl font-heading font-extrabold text-[#fcb900]">
                  99th %tile
                </span>
                <span className="text-[11px] text-gray-300 font-semibold">
                  Top 1% in Florida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Value */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182030] border border-[#ff9923]/30 text-xs font-semibold text-[#fcb900]">
                <Sparkles className="w-3.5 h-3.5 text-[#ff9923]" />
                <span>ABOUT US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                About <span className="text-[#ff9923]">IJAM Home Solutions</span>
              </h2>
              <p className="text-lg font-heading font-medium text-gray-200 italic">
                “{ABOUT_STORY.slogan}”
              </p>
            </div>

            {/* Exact original narrative paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                {ABOUT_STORY.paragraphs[0]}
              </p>
              <p>
                {ABOUT_STORY.paragraphs[1]}
              </p>
              <p>
                {ABOUT_STORY.paragraphs[2]}
              </p>
            </div>

            {/* Pillars summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {ABOUT_STORY.stats.map((s, idx) => (
                <div key={idx} className="bg-[#131722] border border-[#232b3d] p-3 rounded-xl text-center">
                  <div className="text-lg font-heading font-extrabold text-[#ff9923]">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-bold text-white mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1 leading-tight line-clamp-2">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] transition-all shadow-lg shadow-[#29962c]/30"
              >
                Request My Solution
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#162719] border border-[#29962c]/60 hover:bg-[#203623] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#29962c]" />
                <span>WhatsApp (+1 727-692-5922)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-xs font-semibold text-gray-400 hover:text-[#ff9923] flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff9923]" />
                <span>Call Us Direct</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
