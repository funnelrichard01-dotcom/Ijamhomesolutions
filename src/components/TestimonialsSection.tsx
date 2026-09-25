import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteContent';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="reviews" className="py-20 bg-[#090b10] border-t border-[#1a202d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181f2d] border border-[#ff9923]/30 text-xs font-semibold text-[#fcb900]">
            <Quote className="w-3.5 h-3.5 text-[#ff9923]" />
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            What Some Of Our <span className="text-[#ff9923]">Clients Have Said...</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Real feedback from verified homeowners and property owners who trusted IJAM Home Solutions with their renovations.
          </p>
        </div>

        {/* Carousel Featured Card */}
        <div className="max-w-4xl mx-auto bg-[#121622] border border-[#263144] rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#fcb900] text-[#fcb900]" />
              ))}
              <span className="text-xs font-bold text-gray-300 ml-2">5.0 Star Rating</span>
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#ff9923] bg-[#1a2232] px-3 py-1 rounded-lg border border-[#29364d]">
              {current.highlight}
            </span>
          </div>

          {/* Exact Quote */}
          <div className="relative mb-8">
            <Quote className="w-12 h-12 text-[#ff9923]/15 absolute -top-4 -left-4 pointer-events-none" />
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed italic relative z-10">
              {current.quote}
            </p>
          </div>

          {/* Client Info & Carousel Navigation */}
          <div className="pt-6 border-t border-[#1e2638] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#29962c] to-[#00d084] flex items-center justify-center font-bold text-white text-sm">
                IJAM
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{current.author}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#29962c]" />
                </h4>
                <p className="text-xs text-gray-400">
                  {current.location} &bull; Verified Client
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl bg-[#19202e] text-gray-300 hover:text-white hover:bg-[#222a3d] border border-[#2a3449] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-3">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex ? 'w-6 bg-[#ff9923]' : 'w-2 bg-[#2a3449]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl bg-[#19202e] text-gray-300 hover:text-white hover:bg-[#222a3d] border border-[#2a3449] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 cards preview on larger displays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'bg-[#151a26] border-[#ff9923]/60 shadow-lg'
                  : 'bg-[#10141e] border-[#1f2636] hover:border-gray-600 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#fcb900] text-[#fcb900]" />
                ))}
              </div>
              <p className="text-xs text-gray-300 line-clamp-3 italic mb-3">
                {item.quote}
              </p>
              <div className="text-[11px] font-bold text-white flex items-center justify-between">
                <span>{item.author}</span>
                <span className="text-[#fcb900]">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
