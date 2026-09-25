import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

interface HeaderProps {
  onOpenQuote: (servicePrefill?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar for quick contact and credibility */}
      <div className="bg-[#07080a] border-b border-[#1f2533] text-xs text-gray-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#29962c] animate-pulse"></span>
              Tampa Area Contractor &bull; Open Mon–Fri 9am–5pm
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[#fcb900]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff9923]" />
              Top 1% Ranked in Florida &bull; Licensed, Certified & Insured
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hover:text-[#ff9923] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff9923]" />
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <span className="text-gray-700">|</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#29962c] hover:text-[#00d084] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c10]/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-[#242b3b] py-2.5'
            : 'bg-[#0b0c10] border-b border-[#1b202c] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-[#121620] border border-[#262e3f] group-hover:border-[#ff9923]/50 transition-colors">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="IJAM Home Solutions Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg md:text-xl tracking-wide text-white flex items-center gap-1">
                IJAM <span className="text-[#ff9923]">HOME SOLUTIONS</span>
              </span>
              <span className="text-[11px] text-gray-400 tracking-tight hidden sm:block">
                Where You Jam & We Provide Home Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-[#161b26] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp CTA */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold text-white bg-[#192b1b] border border-[#29962c]/50 hover:bg-[#203722] hover:border-[#29962c] transition-all flex items-center gap-2 group shadow-sm shadow-black"
            >
              <MessageCircle className="w-4 h-4 text-[#29962c] group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            {/* Primary CTA - GET A QUOTE (Green Button) */}
            <button
              onClick={() => onOpenQuote()}
              className="px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide uppercase text-white bg-[#29962c] hover:bg-[#228025] active:scale-95 transition-all shadow-lg shadow-[#29962c]/25 hover:shadow-[#29962c]/40 flex items-center gap-2 cursor-pointer border border-[#3cb540]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase text-white bg-[#29962c] active:scale-95"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141822] text-gray-200 border border-[#242b3b] hover:text-[#ff9923] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0b0c10]/98 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-4 border-b border-[#1e2535]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="IJAM Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-heading font-extrabold text-base text-white">
                IJAM <span className="text-[#ff9923]">HOME SOLUTIONS</span>
              </span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-[#171d2a] text-gray-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold text-gray-200 hover:text-[#ff9923] hover:bg-[#141924] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#1e2535] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl font-bold uppercase text-white bg-[#29962c] hover:bg-[#228025] flex items-center justify-center gap-2 shadow-lg shadow-[#29962c]/30 text-sm tracking-wide"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-white bg-[#142315] border border-[#29962c]/60 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#29962c]" />
                <span>Chat on WhatsApp (+1 727-692-5922)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 rounded-xl font-semibold text-gray-300 bg-[#141822] border border-[#273042] flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#ff9923]" />
                <span>Call Us: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            <div className="pt-4 text-center text-xs text-gray-500">
              Licensed, Certified & Insured &bull; Tampa, Florida
            </div>
          </div>
        </div>
      )}
    </>
  );
};
