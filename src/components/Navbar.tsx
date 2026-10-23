import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SiteConfig } from '../config/siteConfig';

interface NavbarProps {
  config: SiteConfig;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD2] py-4'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Brand Zone: 2-line bespoke luxury architectural wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex flex-col group text-left cursor-pointer tracking-wider"
          >
            <span
              className={`font-serif text-xl sm:text-2xl font-light tracking-[0.2em] transition-colors ${
                isScrolled ? 'text-[#22221F]' : 'text-white'
              }`}
            >
              LUXORA
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.38em] transition-colors -mt-1 font-medium ${
                isScrolled ? 'text-[#B69A69]' : 'text-[#E8DFD2]'
              }`}
            >
              INTERIORS
            </span>
          </a>

          {/* Nav Links: Clean typography without capsules */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative py-1 transition-colors hover:text-[#B69A69] ${
                  isScrolled ? 'text-[#22221F]/80' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onBookClick}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-200 border cursor-pointer ${
                isScrolled
                  ? 'border-[#22221F] bg-[#22221F] text-[#F7F4EE] hover:bg-[#B69A69] hover:border-[#B69A69]'
                  : 'border-white/80 bg-white/10 backdrop-blur-xs text-white hover:bg-white hover:text-[#22221F]'
              }`}
            >
              BOOK A CONSULTATION
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden p-2 transition-colors cursor-pointer ${
              isScrolled ? 'text-[#22221F]' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#22221F]/80 backdrop-blur-sm lg:hidden flex justify-end animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-[85%] max-w-sm bg-[#F7F4EE] h-full p-8 flex flex-col justify-between shadow-2xl text-[#22221F]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD2]">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.2em]">LUXORA</span>
                  <span className="text-[10px] tracking-[0.35em] text-[#B69A69] font-medium -mt-1">
                    INTERIORS
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#22221F] hover:text-[#B69A69]"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5 text-sm uppercase tracking-[0.2em] font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="py-2 border-b border-[#E8DFD2]/60 hover:text-[#B69A69] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#B69A69] text-xs">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E8DFD2] flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-[0.22em] font-semibold bg-[#22221F] text-[#F7F4EE] hover:bg-[#B69A69] transition-colors"
              >
                BOOK A CONSULTATION
              </button>
              <div className="text-xs text-[#777A67] tracking-wider text-center">
                {config.location}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
