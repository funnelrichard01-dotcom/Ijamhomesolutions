import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, Award, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

interface HeroProps {
  onOpenQuote: (servicePrefill?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 bg-[#0b0c10]">
      {/* Subtle ambient lighting effects with brand colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff9923]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#29962c]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Conversions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161c28] border border-[#ff9923]/30 text-xs md:text-sm text-gray-200 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#ff9923]"></span>
              <span className="font-semibold text-[#fcb900]">Top 1% Percentile</span>
              <span className="text-gray-400">&bull;</span>
              <span className="text-gray-300">Tampa Bay Residential & Multi-Family</span>
            </div>

            {/* Main Headline & Existing Slogan */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                IJAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9923] via-[#fcb900] to-[#ff9923]">Home Solutions</span>
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-medium text-gray-200 italic">
                “Where You Jam and We Provide Home Solutions”
              </p>
            </div>

            {/* Conversion-Oriented Supporting Paragraph strictly supported by original site */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              As a leading contractor in the Tampa area, we deliver residential and multi-family solutions with an unwavering commitment to quality, integrity, honesty, and craftsmanship. From custom home remodels to handy repairs, we work with you every step of the way with full transparency to exceed your standards.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2 bg-[#121622]/80 border border-[#232a3a] px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#29962c] shrink-0" />
                <span>Clear Communication</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121622]/80 border border-[#232a3a] px-3 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#ff9923] shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121622]/80 border border-[#232a3a] px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#fcb900] shrink-0" />
                <span>All Projects Welcome</span>
              </div>
            </div>

            {/* CTAs Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA - GET A QUOTE */}
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 rounded-xl text-base font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] active:scale-98 transition-all shadow-xl shadow-[#29962c]/30 hover:shadow-[#29962c]/50 flex items-center justify-center gap-3 cursor-pointer border border-[#3cb540]"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA - VIEW OUR WORK */}
              <a
                href="#portfolio"
                className="px-6 py-4 rounded-xl text-base font-semibold text-gray-200 bg-[#161a25] hover:bg-[#1f2636] border border-[#2c3547] transition-all flex items-center justify-center gap-2"
              >
                <span>VIEW OUR WORK</span>
              </a>

              {/* WhatsApp direct pill */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 rounded-xl text-sm font-semibold text-white bg-[#152518] hover:bg-[#1e3422] border border-[#29962c]/50 transition-all flex items-center justify-center gap-2 group"
                title="Chat with IJAM on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#29962c] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">WhatsApp Direct</span>
              </a>
            </div>

            {/* Direct Phone Assistance Prompt */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 pt-1">
              <span>Have an urgent project?</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-[#ff9923] hover:underline font-semibold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Right Column: Real IJAM Visuals & Project Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame with Real Project Photo */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2b3345] shadow-2xl shadow-black/80 bg-[#121622] group">
                <img
                  src="/images/project-kitchen-1.jpeg"
                  alt="IJAM Home Solutions Kitchen Remodel Craftsmanship"
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to second image if first encounters local loading issue
                    (e.target as HTMLImageElement).src = '/images/project-remodel-2.jpeg';
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-black/20"></div>

                {/* Overlaid Badge */}
                <div className="absolute top-4 left-4 bg-[#0b0c10]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#283144] flex items-center gap-2 text-xs font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#29962c]"></span>
                  <span>Authentic IJAM Project</span>
                </div>

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#121622]/90 backdrop-blur-md p-4 rounded-xl border border-[#2b3548]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#ff9923]">
                      Custom Home Remodel
                    </span>
                    <span className="text-xs text-gray-400">Tampa, FL</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Quality delivered through craftsmanship, precision, and care
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-300 pt-1 border-t border-[#232b3b]">
                    <span>Full Transparency</span>
                    <button
                      onClick={() => onOpenQuote('Custom Home Remodeling')}
                      className="text-[#29962c] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      Request Similar Solution &rarr;
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#161b28] border-2 border-[#ff9923]/60 p-4 rounded-2xl shadow-xl shadow-black/70 flex items-center gap-3 z-20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9923] to-[#fcb900] flex items-center justify-center text-black font-extrabold">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Florida Ranking</div>
                  <div className="text-lg font-heading font-extrabold text-white">Top 1% Percentile</div>
                  <div className="text-[11px] text-[#fcb900]">Among 191,478 Contractors</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
