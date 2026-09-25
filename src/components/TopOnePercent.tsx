import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Star, TrendingUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

export const TopOnePercent: React.FC = () => {
  return (
    <section className="py-16 bg-[#0e121a] border-y border-[#202838] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#141926] via-[#161c2b] to-[#121622] border-2 border-[#ff9923]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          {/* Subtle gold glow corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fcb900]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left badge & metric presentation */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#ff9923] to-[#fcb900] flex items-center justify-center shadow-lg shadow-[#ff9923]/30">
                <Award className="w-10 h-10 text-black" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#fcb900] block">
                  Contractor Benchmark Study
                </span>
                <h3 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-1">
                  Top 1%
                </h3>
                <p className="text-sm font-semibold text-gray-300">
                  99th Percentile in Florida
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a2130] border border-[#2d384c] text-xs text-gray-300">
                <TrendingUp className="w-4 h-4 text-[#29962c]" />
                <span>Pool: 191,478 Florida Contractors</span>
              </div>
            </div>

            {/* Right text body with exact wording */}
            <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-[#263144] lg:pl-8">
              
              <div className="space-y-3">
                <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Statewide Recognition &amp; Performance
                </h4>
                
                {/* EXACT SOURCE QUOTE FROM IJAM WEBSITE */}
                <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed bg-[#191f2e] border-l-4 border-[#ff9923] p-4 sm:p-5 rounded-r-xl italic">
                  “When compared to the 191,478 Contractors in Florida, IJAM Home Solutions ranks in the 99th percentile, meaning in the top 1%. This study was based on metrics such as communication, experience, and customer feedback.”
                </blockquote>
              </div>

              {/* Verified Metrics Breakdown based strictly on original text */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#121622] border border-[#232b3d] p-3.5 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#ff9923] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#ff9923]" />
                    <span>Communication</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Full transparency &amp; regular updates at every step of your project.
                  </p>
                </div>

                <div className="bg-[#121622] border border-[#232b3d] p-3.5 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#fcb900] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#fcb900]" />
                    <span>Experience</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Real estate insight combined with hands-on contracting expertise.
                  </p>
                </div>

                <div className="bg-[#121622] border border-[#232b3d] p-3.5 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#29962c] mb-1">
                    <Star className="w-4 h-4 text-[#29962c]" />
                    <span>Customer Feedback</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Consistent adherence to budget, timelines, and craftsmanship quality.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
