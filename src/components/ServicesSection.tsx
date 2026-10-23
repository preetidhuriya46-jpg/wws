import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData, ServiceItem } from '../config/siteConfig';

interface ServicesSectionProps {
  onEnquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#E8DFD2]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-3">
              <span className="w-6 h-px bg-[#B69A69]" />
              <span>EXPERTISE & DISCIPLINES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#22221F] tracking-tight leading-[1.1]">
              Considered Design. <br className="hidden sm:inline" />
              <span className="italic font-normal">Exceptional Living.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#777A67] tracking-wider uppercase max-w-xs font-medium">
            Tailored spatial architecture across residential sanctuaries, modular kitchens, and commercial flagships.
          </p>
        </div>

        {/* Editorial Asymmetrical Service Rows / Cards */}
        <div className="space-y-16 lg:space-y-24">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  } overflow-hidden relative bg-[#E8DFD2]`}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} architectural visualization`}
                    className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#22221F]/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Service Number Watermark Overlay */}
                  <div className="absolute top-6 left-6 text-white font-serif text-3xl sm:text-4xl font-light drop-shadow-md">
                    {service.number}
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  } flex flex-col justify-center`}
                >
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#B69A69] font-medium mb-2">
                    SERVICE {service.number}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#22221F] tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#22221F]/80 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Sub-Offerings List */}
                  <div className="mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#777A67] block mb-3 font-semibold">
                      INCLUDED SCOPE & CAPABILITIES
                    </span>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {service.subOfferings.map((offering) => (
                        <li
                          key={offering}
                          className="text-xs text-[#22221F]/70 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A69]" />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enquiry Link */}
                  <div>
                    <button
                      onClick={() => onEnquireService(service.title)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#22221F] pb-1 border-b border-[#22221F] hover:text-[#B69A69] hover:border-[#B69A69] transition-all cursor-pointer group/btn"
                    >
                      <span>ENQUIRE ABOUT {service.title}</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
