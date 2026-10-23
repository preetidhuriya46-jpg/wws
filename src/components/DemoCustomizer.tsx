import React, { useState } from 'react';
import { Sliders, X, Check, RotateCcw, Copy } from 'lucide-react';
import { SiteConfig, defaultSiteConfig } from '../config/siteConfig';

interface DemoCustomizerProps {
  config: SiteConfig;
  onChangeConfig: (newConfig: SiteConfig) => void;
}

export const DemoCustomizer: React.FC<DemoCustomizerProps> = ({
  config,
  onChangeConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReset = () => {
    onChangeConfig(defaultSiteConfig);
  };

  const handleCopyCode = () => {
    const codeSnippet = `export const siteConfig = ${JSON.stringify(config, null, 2)};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Toggle Button (Discreet, bottom-left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="px-3.5 py-2.5 bg-[#22221F] text-[#E8DFD2] hover:text-[#B69A69] border border-[#B69A69]/40 shadow-xl text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer transition-all hover:bg-[#2A2A26]"
          title="Customize Studio Brand for Client Demos"
        >
          <Sliders size={14} className="text-[#B69A69]" />
          <span className="hidden sm:inline">Pitch & Demo Settings</span>
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#22221F]/70 backdrop-blur-xs flex justify-start animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#F7F4EE] h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-[#22221F]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD2]">
                <div>
                  <h3 className="font-serif text-2xl text-[#22221F]">
                    Client Demo Customizer
                  </h3>
                  <p className="text-[11px] text-[#777A67] mt-0.5">
                    Live-preview this website with any interior designer or modular kitchen firm's branding.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#777A67] hover:text-[#22221F] cursor-pointer"
                  aria-label="Close customizer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form Controls */}
              <div className="space-y-4 my-6 text-xs">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    Studio Brand Name
                  </label>
                  <input
                    type="text"
                    value={config.brandName}
                    onChange={(e) =>
                      onChangeConfig({ ...config, brandName: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. LUXORA INTERIORS or AURA SPACES"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={config.tagline}
                    onChange={(e) =>
                      onChangeConfig({ ...config, tagline: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. Thoughtfully Designed. Beautifully Lived."
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    Studio Phone (Display)
                  </label>
                  <input
                    type="text"
                    value={config.phone}
                    onChange={(e) =>
                      onChangeConfig({ ...config, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    WhatsApp Number (Digits only, no + or spaces)
                  </label>
                  <input
                    type="text"
                    value={config.whatsappNumber}
                    onChange={(e) =>
                      onChangeConfig({
                        ...config,
                        whatsappNumber: e.target.value.replace(/\D/g, ''),
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. 919876543210"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    Studio Email
                  </label>
                  <input
                    type="email"
                    value={config.email}
                    onChange={(e) =>
                      onChangeConfig({ ...config, email: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. contact@yourstudio.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    Location & Hubs
                  </label>
                  <input
                    type="text"
                    value={config.location}
                    onChange={(e) =>
                      onChangeConfig({ ...config, location: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. Studios in Mumbai & Delhi NCR"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#777A67] font-semibold mb-1">
                    Service Areas
                  </label>
                  <input
                    type="text"
                    value={config.serviceAreas}
                    onChange={(e) =>
                      onChangeConfig({ ...config, serviceAreas: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E8DFD2] focus:outline-none focus:border-[#B69A69]"
                    placeholder="e.g. South Mumbai, Bandra, Gurugram"
                  />
                </div>

                {/* Editable Stats */}
                <div className="pt-2 border-t border-[#E8DFD2]">
                  <span className="block text-[11px] uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                    Studio Statistics (Display)
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-[10px] text-[#777A67] block">Years</span>
                      <input
                        type="text"
                        value={config.stats.yearsOfExperience}
                        onChange={(e) =>
                          onChangeConfig({
                            ...config,
                            stats: {
                              ...config.stats,
                              yearsOfExperience: e.target.value,
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 bg-white border border-[#E8DFD2] text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#777A67] block">Projects</span>
                      <input
                        type="text"
                        value={config.stats.projectsCompleted}
                        onChange={(e) =>
                          onChangeConfig({
                            ...config,
                            stats: {
                              ...config.stats,
                              projectsCompleted: e.target.value,
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 bg-white border border-[#E8DFD2] text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#777A67] block">Satisfaction</span>
                      <input
                        type="text"
                        value={config.stats.clientSatisfaction}
                        onChange={(e) =>
                          onChangeConfig({
                            ...config,
                            stats: {
                              ...config.stats,
                              clientSatisfaction: e.target.value,
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 bg-white border border-[#E8DFD2] text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E8DFD2] space-y-2">
              <button
                onClick={handleCopyCode}
                className="w-full py-2.5 bg-[#22221F] text-[#F7F4EE] hover:bg-[#B69A69] transition-colors text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Configuration Copied!' : 'Copy Code for siteConfig.ts'}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2 bg-transparent border border-[#E8DFD2] text-[#777A67] hover:text-[#22221F] hover:border-[#22221F] transition-colors text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>Reset to Default Luxora Data</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
