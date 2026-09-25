import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';

interface FeaturedProjectProps {
  onOpenQuote: (servicePrefill?: string) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#0a0c10] border-y border-[#1e2535] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#ff9923]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18202d] border border-[#ff9923]/30 text-xs font-semibold text-[#fcb900]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff9923]" />
              <span>CRAFTSMANSHIP SPOTLIGHT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              Featured Project: <span className="text-[#ff9923]">Kitchen &amp; Interior Remodeling</span>
            </h2>
            <p className="text-base text-gray-300">
              Quality delivered through craftsmanship, precision, and care. Real photos from projects executed right here in the Tampa Bay community.
            </p>
          </div>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ff9923] hover:text-[#fcb900] transition-colors"
          >
            <span>SEE MORE OF OUR WORK</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Featured Big Showcase Card */}
        <div className="bg-[#121622] border border-[#273247] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Primary Large Image */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden group bg-black">
              <img
                src="/images/project-kitchen-1.jpeg"
                alt="IJAM Home Solutions Custom Kitchen Remodel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/30"></div>
              
              <div className="absolute top-5 left-5 bg-[#0b0c10]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#2b3548] text-xs font-bold text-white flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#29962c]" />
                <span>Verified IJAM Project</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#fcb900] block mb-1">
                  Custom Home Remodel
                </span>
                <h3 className="text-2xl font-heading font-bold">
                  Modern Kitchen Cabinetry &amp; Space Optimization
                </h3>
              </div>
            </div>

            {/* Right Breakdown Info */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff9923]">
                    The IJAM Approach
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                    Where You Jam, and We Provide Home Solutions
                  </h4>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    We specialize in custom home remodeling designed to fit your lifestyle, needs, and vision. From material selection to constant communication, our team ensures the highest standard without blowing your budget.
                  </p>
                </div>

                <div className="space-y-3 border-y border-[#20293b] py-4">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#29962c] shrink-0 mt-0.5" />
                    <span>Transparent breakdown of costs and materials upfront</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#29962c] shrink-0 mt-0.5" />
                    <span>Selection of durable, beautiful materials within your exact budget</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#29962c] shrink-0 mt-0.5" />
                    <span>Full transparency and constant contact throughout the build</span>
                  </div>
                </div>

                {/* Secondary Photo Thumbnail Preview */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden border border-[#2b3548] h-24 relative group">
                    <img
                      src="/images/project-remodel-2.jpeg"
                      alt="Living room interior detail"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white">Interior Renovation</span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#2b3548] h-24 relative group">
                    <img
                      src="/images/project-interior-3.jpeg"
                      alt="Custom finishes detail"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white">Custom Remodel</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuote('Custom Home Remodeling')}
                  className="flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#29962c] hover:bg-[#228025] flex items-center justify-center gap-2 shadow-lg shadow-[#29962c]/30"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#17271a] border border-[#29962c]/60 hover:bg-[#203624] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#29962c]" />
                  <span>WhatsApp IJAM</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
