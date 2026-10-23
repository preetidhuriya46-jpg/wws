import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SiteConfig } from '../config/siteConfig';

interface FloatingWhatsAppProps {
  config: SiteConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const prefilledMessage = encodeURIComponent(
    'Hello, I am interested in your interior design services. I would like to discuss my project.'
  );

  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip on hover or desktop subtle presence */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 bg-[#22221F] text-[#F7F4EE] text-xs shadow-lg border border-[#B69A69]/40 animate-fadeIn whitespace-nowrap">
          <span>Chat with Studio Principal</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-[#E8DFD2] hover:text-white"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-108 hover:bg-[#20ba59] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle size={26} className="fill-current text-white stroke-0" />
      </a>
    </div>
  );
};
