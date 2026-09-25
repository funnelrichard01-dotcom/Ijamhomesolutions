import React from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';
import { SolutionsForm } from './SolutionsForm';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="py-20 bg-[#090b10] border-t border-[#1e2535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182030] border border-[#ff9923]/30 text-xs font-semibold text-[#fcb900] mb-3">
                <span>DIRECT ASSISTANCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                Contact <span className="text-[#ff9923]">IJAM</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-2 leading-relaxed">
                “We’re happy to answer any questions and discuss your project needs. Give us a shout — our team is ready to help guide you every step of the way.”
              </p>
            </div>

            {/* Contact channels */}
            <div className="space-y-4">
              
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121622] border border-[#232b3d] hover:border-[#ff9923] transition-all group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a2233] border border-[#2d384d] flex items-center justify-center text-[#ff9923] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block">
                    Phone Direct
                  </span>
                  <span className="text-lg font-heading font-bold text-white group-hover:text-[#ff9923] transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </span>
                  <span className="text-[11px] text-gray-400 block">Available during business hours</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121622] border border-[#232b3d] hover:border-[#29962c] transition-all group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#142617] border border-[#234226] flex items-center justify-center text-[#29962c] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#29962c] block">
                    WhatsApp Chat (Instant)
                  </span>
                  <span className="text-lg font-heading font-bold text-white group-hover:text-[#29962c] transition-colors">
                    {BUSINESS_INFO.whatsappNumber}
                  </span>
                  <span className="text-[11px] text-gray-400 block">Click to start conversation directly</span>
                </div>
              </a>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#121622] border border-[#232b3d] space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a2233] border border-[#2d384d] flex items-center justify-center text-[#fcb900]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-[#ff9923] transition-colors block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <a
                      href={`mailto:${BUSINESS_INFO.contractingEmail}`}
                      className="text-xs text-gray-400 hover:text-white transition-colors block"
                    >
                      {BUSINESS_INFO.contractingEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours & Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#121622] border border-[#232b3d]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff9923] mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-xs text-gray-300 font-medium">
                    {BUSINESS_INFO.hours}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#121622] border border-[#232b3d]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#fcb900] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Service Area</span>
                  </div>
                  <p className="text-xs text-gray-300 font-medium">
                    {BUSINESS_INFO.serviceArea}
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#162217] border border-[#29962c]/40 text-xs text-gray-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#29962c] shrink-0" />
              <span>
                Florida Certified &bull; In the Top 1% of Contractors Statewide
              </span>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div id="contact-form">
              <SolutionsForm isModal={false} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
