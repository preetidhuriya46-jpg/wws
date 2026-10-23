import React from 'react';
import { ArrowDown } from 'lucide-react';
import { heroMedia } from '../config/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
  onTalkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#22221F]">
      {/* Background Cinematic Image with Subtle Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMedia.heroImage}
          alt="Contemporary luxury living room with floor-to-ceiling glass windows and travertine stone details"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] duration-1000 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim for guaranteed AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#22221F] via-[#22221F]/45 to-[#22221F]/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-32 sm:py-40 text-center flex flex-col items-center">
        {/* Small Editorial Label - Unboxed per Zero-Pill Discipline */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.35em] uppercase text-[#E8DFD2] mb-6">
          <span className="w-8 h-px bg-[#B69A69]" />
          <span>INTERIOR DESIGN STUDIO</span>
          <span className="w-8 h-px bg-[#B69A69]" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F7F4EE] tracking-tight leading-[1.08] mb-6 max-w-4xl [text-wrap:balance]">
          Spaces That Tell Your Story.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#E8DFD2]/90 font-light leading-relaxed max-w-2xl mb-10 tracking-wide [text-wrap:balance]">
          Thoughtfully curated interiors that bring together timeless elegance, everyday comfort, and your unique way of living.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#B69A69] text-[#22221F] font-semibold text-xs uppercase tracking-[0.22em] hover:bg-[#F7F4EE] transition-all duration-200 cursor-pointer shadow-lg"
          >
            EXPLORE OUR WORK
          </button>
          <button
            onClick={onTalkClick}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/70 text-white font-medium text-xs uppercase tracking-[0.22em] hover:bg-white/15 transition-all duration-200 cursor-pointer backdrop-blur-xs"
          >
            LET'S TALK
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/20 w-full max-w-lg flex flex-col items-center gap-3">
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#E8DFD2]/80 font-medium text-center">
            RESIDENTIAL · COMMERCIAL · BESPOKE INTERIORS
          </p>
          <button
            onClick={onExploreClick}
            className="text-white/60 hover:text-[#B69A69] transition-colors mt-2 p-1"
            aria-label="Scroll down"
          >
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
