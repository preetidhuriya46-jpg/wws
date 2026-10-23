/**
 * LUXORA INTERIORS — Main Application
 * Luxury Residential & Commercial Interior Design
 */

import React, { useState } from 'react';
import { defaultSiteConfig, SiteConfig } from './config/siteConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { AboutDesigner } from './components/AboutDesigner';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DemoCustomizer } from './components/DemoCustomizer';
import { Footer } from './components/Footer';

export default function App() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToContact = (serviceOrProjectName?: string) => {
    if (serviceOrProjectName) {
      setPreselectedService(serviceOrProjectName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const processElem = document.getElementById('process');
    if (processElem) {
      processElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#22221F] font-sans flex flex-col selection:bg-[#B69A69]/20 selection:text-[#22221F]">
      {/* Sticky Navigation Bar */}
      <Navbar
        config={siteConfig}
        onBookClick={() => scrollToContact('General Consultation')}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToProjects}
          onTalkClick={() => scrollToContact('General Consultation')}
        />

        {/* Studio Introduction */}
        <StudioIntro onDiscoverClick={scrollToProcess} />

        {/* Services & Disciplines */}
        <ServicesSection
          onEnquireService={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* Featured Projects Gallery */}
        <ProjectsGallery
          onEnquireProject={(projectTitle) => scrollToContact(projectTitle)}
        />

        {/* Design Philosophy */}
        <DesignPhilosophy />

        {/* Our Design Process */}
        <ProcessTimeline />

        {/* Testimonials */}
        <Testimonials />

        {/* About the Designer & Team */}
        <AboutDesigner
          config={siteConfig}
          onContactClick={() => scrollToContact('Studio Collaboration')}
        />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact & Consultation Request Form */}
        <ContactSection
          config={siteConfig}
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer config={siteConfig} />

      {/* Floating WhatsApp Integration Button */}
      <FloatingWhatsApp config={siteConfig} />

      {/* Pitch & Client Demo Customizer Drawer */}
      <DemoCustomizer
        config={siteConfig}
        onChangeConfig={(newConfig) => setSiteConfig(newConfig)}
      />
    </div>
  );
}
