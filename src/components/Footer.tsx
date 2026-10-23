import React from 'react';
import { ArrowUp, Instagram, Facebook, Disc as Pinterest } from 'lucide-react';
import { SiteConfig } from '../config/siteConfig';

interface FooterProps {
  config: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#22221F] text-[#F7F4EE] pt-20 pb-12 border-t border-[#33332D]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col text-left mb-6">
                <span className="font-serif text-3xl font-light tracking-[0.2em] text-[#F7F4EE]">
                  {config.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#B69A69] font-medium mt-1">
                  INTERIOR ARCHITECTURE & DESIGN
                </span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#E8DFD2] italic font-light max-w-sm mb-6">
                "{config.tagline}"
              </p>
              <p className="text-xs text-[#E8DFD2]/70 font-light leading-relaxed max-w-sm">
                Bespoke residential sanctuaries, chef-grade modular kitchens, and curated commercial spaces designed with understated elegance and enduring materiality.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={config.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#E8DFD2] hover:border-[#B69A69] hover:text-[#B69A69] transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href={config.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#E8DFD2] hover:border-[#B69A69] hover:text-[#B69A69] transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href={config.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#E8DFD2] hover:border-[#B69A69] hover:text-[#B69A69] transition-colors"
              >
                <Pinterest size={15} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A69] font-semibold block mb-6">
              STUDIO NAVIGATION
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#E8DFD2]/80 hover:text-[#B69A69] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A69] font-semibold block mb-6">
              STUDIO CONTACT
            </span>
            <div className="space-y-4 text-xs font-light text-[#E8DFD2]/80">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#777A67] block">
                  Studio Inquiries:
                </span>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-[#B69A69] transition-colors font-medium text-[#F7F4EE]"
                >
                  {config.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#777A67] block">
                  Telephone:
                </span>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#B69A69] transition-colors font-medium text-[#F7F4EE]"
                >
                  {config.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#777A67] block">
                  Primary Locations:
                </span>
                <p className="text-[#F7F4EE]">{config.location}</p>
                <p className="text-[11px] text-[#777A67] mt-0.5">{config.serviceAreas}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFD2]/60">
          <p>© {currentYear} {config.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#777A67]">
              Demo Showcase Website
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E8DFD2] hover:text-[#B69A69] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
