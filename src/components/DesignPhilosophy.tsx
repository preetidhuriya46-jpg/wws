import React from 'react';

export const DesignPhilosophy: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'INTENTION',
      description: 'Every element has a reason to be there.',
      detail: 'Eliminating excess to let the inherent grace of natural materials, volumes, and custom architectural elements breathe.',
    },
    {
      number: '02',
      title: 'BALANCE',
      description: 'A considered relationship between materials, light, and form.',
      detail: 'Choreographing the counterpoint between textured limestone, warm timber, polished metals, and shifting natural sunlight.',
    },
    {
      number: '03',
      title: 'PERSONALITY',
      description: 'Spaces that reflect the people who live and work in them.',
      detail: 'Rejecting cookie-cutter luxury trends to create bespoke sanctuaries deeply attuned to your personal rituals and daily peace.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#22221F] text-[#F7F4EE] relative overflow-hidden">
      {/* Decorative hairline grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-3 border-x border-[#F7F4EE]">
          <div className="border-r border-[#F7F4EE]" />
          <div className="border-r border-[#F7F4EE]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#B69A69] mb-4">
            <span className="w-8 h-px bg-[#B69A69]" />
            <span>OUR DESIGN PHILOSOPHY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            Beauty in Every Detail.
          </h2>

          <p className="text-base sm:text-lg text-[#E8DFD2]/85 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
            Great design is not about filling a space. It is about understanding what belongs, what matters, and how every element works together. From the first material selection to the final finishing touch, every decision serves a purpose.
          </p>
        </div>

        {/* 3 Principles Editorial Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-12 border-t border-white/15">
          {principles.map((item) => (
            <div key={item.number} className="flex flex-col justify-between group">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#B69A69] block mb-4 font-light">
                  {item.number}
                </span>
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#E8DFD2] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#F7F4EE] leading-snug mb-3">
                  "{item.description}"
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#E8DFD2]/65 font-light leading-relaxed pt-4 border-t border-white/10">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
