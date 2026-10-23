import React from 'react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      summary: 'We understand your lifestyle, requirements, aspirations, and budget.',
      deliverables: ['Lifestyle & spatial discovery', 'Budget & site feasibility', 'Initial aesthetic direction'],
    },
    {
      step: '02',
      title: 'CONCEPTUALIZE',
      summary: 'We develop design concepts, layouts, mood boards, and material directions.',
      deliverables: ['Detailed space planning & 2D layouts', 'Tactile material & textile moodboards', '3D spatial visualizations'],
    },
    {
      step: '03',
      title: 'REFINE',
      summary: 'We refine the details, finishes, selections, and design decisions.',
      deliverables: ['Bespoke joinery & millwork drawings', 'Lighting & electrical plans', 'Hardware & stone curation'],
    },
    {
      step: '04',
      title: 'DELIVER',
      summary: 'We coordinate the agreed project requirements and work toward bringing the design vision to life.',
      deliverables: ['Comprehensive design documentation', 'Artisan & material coordination', 'Final styling & space handover'],
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-3">
            <span className="w-6 h-px bg-[#B69A69]" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#22221F] tracking-tight leading-[1.12]">
            From First Conversation <br />
            <span className="italic font-normal">to Final Detail</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#22221F]/75 font-light leading-relaxed max-w-xl">
            A methodical, collaborative journey structured to translate your personal lifestyle into an enduring architectural expression.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting horizontal line on desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-px bg-[#E8DFD2] z-0" />

          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative z-10 bg-[#F7F4EE] pt-2 flex flex-col justify-between group"
            >
              <div>
                {/* Number Circle / Node */}
                <div className="w-14 h-14 bg-[#E8DFD2] border border-[#B69A69]/40 flex items-center justify-center font-serif text-lg text-[#22221F] mb-6 group-hover:bg-[#B69A69] group-hover:text-white transition-colors duration-300">
                  {item.step}
                </div>

                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B69A69] font-medium mb-1">
                  PHASE {item.step}
                </div>
                <h3 className="font-serif text-2xl text-[#22221F] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#22221F]/80 font-light leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Scope Bullet Points */}
              <div className="pt-4 border-t border-[#E8DFD2]/70">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#777A67] block mb-2 font-semibold">
                  KEY MILESTONES
                </span>
                <ul className="space-y-1.5">
                  {item.deliverables.map((del) => (
                    <li key={del} className="text-[11px] text-[#22221F]/70 flex items-start gap-1.5">
                      <span className="text-[#B69A69] text-xs">·</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
