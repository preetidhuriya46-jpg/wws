import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialData } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E8DFD2]">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-3">
              <span className="w-6 h-px bg-[#B69A69]" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#22221F] tracking-tight">
              Words From Our Clients
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs text-[#777A67] max-w-xs">
            Reflections on our collaborative design process, bespoke detailing, and spatial execution.
          </div>
        </div>

        {/* Testimonials 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonialData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 bg-[#E8DFD2]/25 border border-[#E8DFD2] relative group hover:border-[#B69A69]/50 transition-colors"
            >
              <div>
                <Quote size={28} className="text-[#B69A69] mb-6 stroke-1 opacity-80" />
                <p className="font-serif text-xl sm:text-2xl text-[#22221F] font-light leading-snug mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8DFD2] flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#22221F] font-semibold">
                  {item.clientType}
                </span>
                <span className="text-[11px] text-[#777A67] font-light">
                  {item.projectContext}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Note for Demo Content */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-[#777A67] tracking-wider uppercase">
            * Sample client feedback for website demonstration. Replace with verified client reviews upon publishing.
          </p>
        </div>
      </div>
    </section>
  );
};
