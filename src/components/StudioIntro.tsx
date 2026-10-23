import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroMedia } from '../config/siteConfig';

interface StudioIntroProps {
  onDiscoverClick: () => void;
}

export const StudioIntro: React.FC<StudioIntroProps> = ({ onDiscoverClick }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Large Architectural Image with Asymmetrical Offset */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden bg-[#E8DFD2]">
              <img
                src={heroMedia.studioImage}
                alt="Architectural hallway featuring fluted warm oak wood paneling, floating limestone bench, and bespoke lighting"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#22221F]/5 pointer-events-none" />
            </div>

            {/* Subtle Typographic Accent Badge (clean unboxed or hairline) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#F7F4EE] border border-[#E8DFD2] p-6 shadow-md max-w-xs">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#777A67] block mb-1">
                Studio Philosophy
              </span>
              <p className="font-serif text-lg text-[#22221F] italic leading-snug">
                "Architecture and light in harmonious dialogue."
              </p>
            </div>
          </div>

          {/* Column 2: Editorial Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pl-4">
            {/* Section label */}
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-4">
              <span className="w-6 h-px bg-[#B69A69]" />
              <span>THE STUDIO</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#22221F] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Designing Beyond the Ordinary.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#22221F]/80 leading-relaxed font-light mb-8 [text-wrap:balance]">
              At Luxora Interiors, we believe exceptional spaces are created through thoughtful details, meaningful materials, and a deep understanding of the people who inhabit them. Our approach balances aesthetics with functionality to create interiors that feel personal, timeless, and effortlessly refined.
            </p>

            {/* Editorial Features / Core Pillars */}
            <div className="grid grid-cols-2 gap-6 w-full py-6 border-y border-[#E8DFD2] mb-8">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#B69A69] block mb-1">
                  12+
                </span>
                <span className="text-xs tracking-wider uppercase text-[#22221F]/70 font-medium">
                  Years of Practice
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#B69A69] block mb-1">
                  100%
                </span>
                <span className="text-xs tracking-wider uppercase text-[#22221F]/70 font-medium">
                  Bespoke Craft
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onDiscoverClick}
              className="group inline-flex items-center gap-3 px-6 py-3.5 border border-[#22221F] text-[#22221F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#22221F] hover:text-[#F7F4EE] transition-all duration-200 cursor-pointer"
            >
              <span>DISCOVER OUR APPROACH</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
