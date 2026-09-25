import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProject } from './components/FeaturedProject';
import { PortfolioSection } from './components/PortfolioSection';
import { TopOnePercent } from './components/TopOnePercent';
import { QualityAssurance } from './components/QualityAssurance';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { MobileStickyBar } from './components/MobileStickyBar';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleOpenQuote = (serviceName?: string) => {
    setPrefilledService(serviceName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setPrefilledService('');
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] flex flex-col font-sans selection:bg-[#ff9923] selection:text-black">
      {/* Responsive Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Immediate Trust Section */}
        <TrustSection />

        {/* Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Visual Featured Project Showcase */}
        <FeaturedProject onOpenQuote={handleOpenQuote} />

        {/* Portfolio / View Our Work */}
        <PortfolioSection onOpenQuote={handleOpenQuote} />

        {/* Top 1% Benchmark Section */}
        <TopOnePercent />

        {/* Quality Assurance Section */}
        <QualityAssurance onOpenQuote={() => handleOpenQuote('General Inquiries')} />

        {/* Verified Testimonials */}
        <TestimonialsSection />

        {/* About IJAM Section */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Contact & Solutions Form Section */}
        <ContactSection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Chatbot Assistant */}
      <Chatbot onOpenQuote={handleOpenQuote} />

      {/* Mobile Sticky CTA Bar (Call | WhatsApp | Get a Quote) */}
      <MobileStickyBar onOpenQuote={() => handleOpenQuote()} />

      {/* Reusable Quote / Solutions Form Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        prefilledService={prefilledService}
      />
    </div>
  );
}
