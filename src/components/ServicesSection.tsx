import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Info, Sparkles, Building2, Home, Wrench, X } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/siteContent';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuote: (servicePrefill?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'multifamily' | 'specialized'>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-[#0d1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181e2b] border border-[#ff9923]/30 text-xs font-semibold text-[#fcb900]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff9923]" />
            OUR VERIFIED CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Professional Construction &amp; <span className="text-[#ff9923]">Home Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            From single-task repairs to custom renovations and multi-family property developments, IJAM delivers with unwavering craftsmanship and transparency.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#ff9923] text-black shadow-md shadow-[#ff9923]/20'
                  : 'bg-[#151a26] text-gray-300 hover:text-white border border-[#232c3f]'
              }`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'residential'
                  ? 'bg-[#ff9923] text-black shadow-md shadow-[#ff9923]/20'
                  : 'bg-[#151a26] text-gray-300 hover:text-white border border-[#232c3f]'
              }`}
            >
              <Home className="w-4 h-4" />
              Customer Home Services
            </button>
            <button
              onClick={() => setActiveTab('multifamily')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'multifamily'
                  ? 'bg-[#ff9923] text-black shadow-md shadow-[#ff9923]/20'
                  : 'bg-[#151a26] text-gray-300 hover:text-white border border-[#232c3f]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Multi Family Services
            </button>
            <button
              onClick={() => setActiveTab('specialized')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'specialized'
                  ? 'bg-[#ff9923] text-black shadow-md shadow-[#ff9923]/20'
                  : 'bg-[#151a26] text-gray-300 hover:text-white border border-[#232c3f]'
              }`}
            >
              <Wrench className="w-4 h-4" />
              Handy &amp; Contracting
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#131722] border border-[#242d3e] hover:border-[#ff9923]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative h-52 overflow-hidden bg-[#1a202c]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/project-kitchen-1.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-[#131722]/30 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-[#0b0c10]/90 border border-[#2c374c] px-3 py-1 rounded-lg text-xs font-bold text-[#fcb900]">
                  {service.tag}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#ff9923] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mb-3 italic">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#29962c] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#1e2535] flex items-center gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-gray-300 bg-[#191f2c] hover:bg-[#222a3b] hover:text-white border border-[#2a3346] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-[#ff9923]" />
                    <span>Learn More</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#29962c]/20"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Contracting Solutions Connections */}
        <div className="mt-12 bg-gradient-to-r from-[#141926] via-[#1a2133] to-[#141926] border border-[#2c374d] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff9923]">
              <span>IJAM Contracting Network</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Need Licensed Trade Specialists for Your Renovation?
            </h4>
            <p className="text-sm text-gray-300 max-w-2xl">
              Through IJAM Contracting Solutions, we coordinate licensed trades: Plumbers, Carpenters, Masons, Electricians, and HVAC specialists for full residential &amp; commercial scale projects.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote('IJAM Contracting Solutions (Full Trades)')}
              className="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wide text-white bg-[#29962c] hover:bg-[#228025] transition-all shadow-lg shadow-[#29962c]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Request Trade Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Learn More Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121622] border border-[#2e394d] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#1b2130] text-gray-400 hover:text-white border border-[#2c374d]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#ff9923] mb-2">
              <span>{selectedService.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-gray-400 italic mb-4">
              {selectedService.subtitle}
            </p>

            <div className="rounded-xl overflow-hidden mb-6 h-56 bg-black">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-base text-gray-200 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Included Standards &amp; Deliverables
            </h4>
            <div className="space-y-2.5 mb-8">
              {selectedService.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#29962c] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#232c3f]">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(title);
                }}
                className="flex-1 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] flex items-center justify-center gap-2 shadow-lg shadow-[#29962c]/30"
              >
                <span>Request a Quote for This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#162719] border border-[#29962c]/60 flex items-center justify-center gap-2 hover:bg-[#1e3422]"
              >
                <span>WhatsApp IJAM</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
