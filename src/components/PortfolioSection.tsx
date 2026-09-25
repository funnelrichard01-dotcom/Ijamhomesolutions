import React, { useState } from 'react';
import { Eye, X, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA, BUSINESS_INFO } from '../data/siteContent';
import { ProjectItem } from '../types';

interface PortfolioSectionProps {
  onOpenQuote: (servicePrefill?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Kitchens',
    'Bathrooms',
    'Interior Renovations',
    'Home Projects',
    'Multi-Family Projects',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182030] border border-[#ff9923]/30 text-xs font-semibold text-[#fcb900]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff9923]" />
            <span>AUTHENTIC PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            View Our <span className="text-[#ff9923]">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Real craftsmanship from IJAM Home Solutions. We deliver quality through craftsmanship, precision, and care for homeowners and multi-family property owners.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#ff9923] text-black shadow-md shadow-[#ff9923]/25 font-bold'
                    : 'bg-[#151a26] text-gray-300 hover:text-white border border-[#232c3f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#121622] border border-[#232b3d] hover:border-[#ff9923]/60 rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-transparent opacity-80"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 bg-[#0b0c10]/85 border border-[#2a3449] px-2.5 py-1 rounded-md text-[11px] font-bold text-[#fcb900]">
                  {project.category}
                </div>

                <div className="absolute top-3 right-3 bg-[#0b0c10]/85 border border-[#2a3449] px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-300">
                  {project.highlight}
                </div>

                {/* Hover Quick Overlay Button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setLightboxProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform"
                  >
                    <Eye className="w-4 h-4 text-[#ff9923]" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#ff9923] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1e2535] flex items-center justify-between">
                  <button
                    onClick={() => setLightboxProject(project)}
                    className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Inspect Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#ff9923]" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(project.title)}
                    className="px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] transition-all"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#121622] border border-[#2e3b52] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#1b2130] text-gray-400 hover:text-white border border-[#2b3548]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#fcb900] bg-[#1a2130] px-2.5 py-1 rounded-md border border-[#2e3a50]">
                {lightboxProject.category}
              </span>
              <span className="text-xs text-gray-400">&bull;</span>
              <span className="text-xs text-gray-300">{lightboxProject.highlight}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-4">
              {lightboxProject.title}
            </h3>

            {/* High-res Image Presentation */}
            <div className="rounded-xl overflow-hidden mb-6 h-72 sm:h-96 bg-black border border-[#283347]">
              <img
                src={lightboxProject.image}
                alt={lightboxProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-base text-gray-200 leading-relaxed mb-6">
              {lightboxProject.description}
            </p>

            {lightboxProject.details && (
              <div className="space-y-2 mb-6 bg-[#161c28] p-4 rounded-xl border border-[#242d3e]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Project Highlights &amp; Standards
                </h4>
                {lightboxProject.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#29962c] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#222a3a]">
              <button
                onClick={() => {
                  const title = lightboxProject.title;
                  setLightboxProject(null);
                  onOpenQuote(title);
                }}
                className="flex-1 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] flex items-center justify-center gap-2 shadow-lg shadow-[#29962c]/30"
              >
                <span>Request Project of This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/17276925922?text=Hi%20IJAM%20Home%20Solutions%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20your%20${encodeURIComponent(lightboxProject.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#172719] border border-[#29962c]/60 flex items-center justify-center gap-2 hover:bg-[#1f3521]"
              >
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
