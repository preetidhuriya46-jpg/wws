import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../config/siteConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-3">
            <span className="w-6 h-px bg-[#B69A69]" />
            <span>COMMON QUESTIONS</span>
            <span className="w-6 h-px bg-[#B69A69]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#22221F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#777A67] tracking-wider uppercase">
            Everything you need to know about initiating a bespoke interior partnership.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-[#E8DFD2] border-y border-[#E8DFD2]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#22221F] group-hover:text-[#B69A69] transition-colors pr-6">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-[#E8DFD2] flex items-center justify-center text-[#22221F] group-hover:border-[#B69A69] group-hover:text-[#B69A69] transition-colors shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 text-sm sm:text-base text-[#22221F]/80 font-light leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
