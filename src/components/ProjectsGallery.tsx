import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projectsData, ProjectItem } from '../config/siteConfig';
import { ProjectModal } from './ProjectModal';

interface ProjectsGalleryProps {
  onEnquireProject: (projectName: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onEnquireProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'residential' | 'kitchen' | 'commercial' | 'styling'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Spaces' },
    { id: 'residential', label: 'Residential' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'styling', label: 'Styling' },
  ] as const;

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.filterCategory === selectedFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-3">
              <span className="w-6 h-px bg-[#B69A69]" />
              <span>PORTFOLIO COLLECTION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#22221F] tracking-tight">
              Selected Spaces
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#22221F]/75 font-light leading-relaxed max-w-xl">
              A collection of thoughtfully designed interiors, created with a focus on materiality, balance, and everyday living.
            </p>
          </div>

          {/* Interactive Filter Controls - Functional segmented buttons */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2 p-1.5 bg-[#E8DFD2]/60 border border-[#E8DFD2]">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#22221F] text-[#F7F4EE] shadow-xs'
                    : 'text-[#22221F]/70 hover:text-[#22221F] hover:bg-[#F7F4EE]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Concept Notice Disclaimer */}
        <div className="mb-10 p-3 bg-[#E8DFD2]/30 border border-[#E8DFD2] text-[11px] text-[#777A67] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong className="text-[#22221F]">Concept Showcase Note:</strong> The projects displayed below represent illustrative design concepts demonstrating our studio's architectural aesthetics, materials, and lighting standards.
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#B69A69] font-medium whitespace-nowrap">
            Curated Portfolio Demo
          </span>
        </div>

        {/* Editorial Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => {
            // Give 1st and 4th projects subtle visual prominence
            const isFeatured = index === 0 || index === 3;

            return (
              <div
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View details of ${project.title}`}
                onClick={() => setActiveProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
                className={`group flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A69] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="relative overflow-hidden bg-[#E8DFD2] h-[340px] sm:h-[420px] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#22221F]/10 group-hover:bg-[#22221F]/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-[#F7F4EE]/95 text-[#22221F] text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={14} />
                      <span>VIEW SPACE</span>
                    </span>
                  </div>

                  {/* Corner Category Tag */}
                  <div className="absolute top-4 left-4 bg-[#22221F]/80 backdrop-blur-xs text-[#E8DFD2] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
                    {project.category}
                  </div>
                </div>

                {/* Information Footer */}
                <div className="pt-5 pb-2 flex items-baseline justify-between border-b border-[#E8DFD2] group-hover:border-[#B69A69] transition-colors">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#777A67] font-medium mb-1">
                      PROJECT {project.number}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#22221F] group-hover:text-[#B69A69] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#777A67] group-hover:text-[#22221F] transition-colors">
                    <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Details</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center flex flex-col items-center">
          <p className="font-serif text-xl sm:text-2xl text-[#22221F] mb-4">
            Have a distinct architectural space or floor plan in mind?
          </p>
          <button
            onClick={() => onEnquireProject('Custom Architecture')}
            className="px-8 py-3.5 bg-[#22221F] text-[#F7F4EE] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#B69A69] transition-colors cursor-pointer"
          >
            START YOUR CUSTOM PROJECT
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onEnquireProject={onEnquireProject}
      />
    </section>
  );
};
