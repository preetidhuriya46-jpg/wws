import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroMedia, SiteConfig } from '../config/siteConfig';

interface AboutDesignerProps {
  config: SiteConfig;
  onContactClick: () => void;
}

export const AboutDesigner: React.FC<AboutDesignerProps> = ({ config, onContactClick }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-[#E8DFD2]">
              <img
                src={heroMedia.designerPortraitImage}
                alt="Principal Interior Architect in her design studio curating natural stone and textile finishes"
                className="w-full h-[460px] sm:h-[540px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#22221F]/5 pointer-events-none" />
            </div>

            {/* Subtle editorial photo caption */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#777A67] tracking-wider uppercase">
              <span>Studio Principal & Design Team</span>
              <span>Mumbai · Delhi NCR</span>
            </div>
          </div>

          {/* Text and Statistics Column */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-4">
              <span className="w-6 h-px bg-[#B69A69]" />
              <span>LEADERSHIP & ETHOS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#22221F] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Good Design Begins With Listening.
            </h2>

            <p className="text-base text-[#22221F]/80 leading-relaxed font-light mb-10 [text-wrap:balance]">
              Our design philosophy starts with understanding the people behind every space. We combine creative thinking, practical planning, and carefully selected materials to develop interiors that feel authentic and considered.
            </p>

            {/* 3 Editable Business Details (Clearly marked customizable placeholders) */}
            <div className="w-full py-8 border-y border-[#E8DFD2] mb-10">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#B69A69] block mb-1">
                    {config.stats.yearsOfExperience}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#22221F]/80 font-medium block">
                    Years of Experience
                  </span>
                  <span className="text-[10px] text-[#777A67] hidden sm:block mt-0.5">
                    Practiced Craft
                  </span>
                </div>

                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#B69A69] block mb-1">
                    {config.stats.projectsCompleted}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#22221F]/80 font-medium block">
                    Projects Completed
                  </span>
                  <span className="text-[10px] text-[#777A67] hidden sm:block mt-0.5">
                    Homes & Workplaces
                  </span>
                </div>

                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#B69A69] block mb-1">
                    {config.stats.clientSatisfaction}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#22221F]/80 font-medium block">
                    Client Satisfaction
                  </span>
                  <span className="text-[10px] text-[#777A67] hidden sm:block mt-0.5">
                    Verified Outcomes
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-[#777A67] tracking-wider uppercase">
                * Editable business figures. Easily updated to reflect your verified firm milestones.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={onContactClick}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#22221F] text-[#F7F4EE] hover:bg-[#B69A69] transition-all text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer"
            >
              <span>GET TO KNOW OUR STUDIO</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
