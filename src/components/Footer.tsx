import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-[#181d28] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-[#121622] border border-[#273247]">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="IJAM Home Solutions Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                IJAM <span className="text-[#ff9923]">HOME SOLUTIONS</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              “Where You Jam and We Provide Home Solutions”
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              As a leading contractor in the Tampa area, we deliver with an unwavering commitment to quality, integrity, honesty, and craftsmanship.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#fcb900]">
              <ShieldCheck className="w-4 h-4 text-[#ff9923]" />
              <span>Ranked in the 99th Percentile in Florida</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Customer Home Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Multi Family Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">View Our Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-gray-300">Custom Home Remodeling</span>
              </li>
              <li>
                <span className="text-gray-300">Kitchen Remodeling</span>
              </li>
              <li>
                <span className="text-gray-300">Multi-Family Construction</span>
              </li>
              <li>
                <span className="text-gray-300">Handy Repairs &amp; Maintenance</span>
              </li>
              <li>
                <span className="text-gray-300">IJAM Contracting Solutions</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white flex items-center gap-2 text-[#ff9923]"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-2 text-[#29962c] font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white flex items-center gap-2 break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-gray-500" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-500" />
                <span>{BUSINESS_INFO.serviceArea}</span>
              </li>
              <li className="text-[11px] text-gray-500 pt-1">
                {BUSINESS_INFO.hours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#181d28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Licensed, Certified &amp; Insured</span>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
