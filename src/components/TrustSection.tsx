import React from 'react';
import { MessageSquareText, ShieldCheck, Hammer, CheckCircle2 } from 'lucide-react';
import { TRUST_PILLARS } from '../data/siteContent';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-8 h-8 text-[#ff9923]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#29962c]" />;
      case 'Hammer':
        return <Hammer className="w-8 h-8 text-[#fcb900]" />;
      default:
        return <CheckCircle2 className="w-8 h-8 text-[#ff9923]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121622] border border-[#262f42] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#232b3d]">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''
              } ${idx !== TRUST_PILLARS.length - 1 ? 'md:pr-6' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#191f2e] border border-[#2b3548]">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#192233] text-gray-300 border border-[#2f3b52]">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1c2333] flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29962c]" />
                <span>Verified IJAM Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
