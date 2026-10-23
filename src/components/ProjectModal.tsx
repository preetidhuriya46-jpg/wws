import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight, Compass, Layers, Maximize2 } from 'lucide-react';
import { ProjectItem } from '../config/siteConfig';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onEnquireProject: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onEnquireProject,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#22221F]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#F7F4EE] border border-[#E8DFD2] shadow-2xl overflow-hidden my-auto animate-fadeIn"
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#22221F] text-[#F7F4EE] hover:bg-[#B69A69] transition-colors rounded-none cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Hero Modal Image */}
        <div className="relative w-full h-[280px] sm:h-[400px] bg-[#22221F] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#22221F]/80 via-transparent to-black/20" />
          
          {/* Concept Showcase Notice Banner */}
          <div className="absolute top-4 left-4 bg-[#22221F]/90 backdrop-blur-xs text-[#E8DFD2] text-[10px] uppercase tracking-[0.25em] px-3 py-1 border border-white/10">
            Portfolio Concept Design
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B69A69] font-medium block mb-1">
              {project.category} · Project {project.number}
            </span>
            <h2 id="project-modal-title" className="font-serif text-3xl sm:text-4xl text-[#F7F4EE]">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Concept Project Explanatory Note */}
          <div className="bg-[#E8DFD2]/40 border-l-2 border-[#B69A69] p-4 text-xs text-[#22221F]/80 leading-relaxed">
            <span className="font-semibold block mb-0.5 text-[#22221F]">Studio Concept Note:</span>
            This project serves as an illustrative portfolio showcase of our spatial philosophy, custom finishes, and lighting choreography. Real projects are tailored specifically to each client’s architectural blueprint and lifestyle.
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#777A67] font-semibold mb-3">
              ARCHITECTURAL NARRATIVE
            </h3>
            <p className="text-sm sm:text-base text-[#22221F]/85 font-light leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-[#E8DFD2]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A67] block mb-1">
                Spatial Footprint
              </span>
              <span className="font-serif text-lg text-[#22221F]">
                {project.specifications.area}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A67] block mb-1">
                Project Classification
              </span>
              <span className="font-serif text-lg text-[#22221F]">
                {project.specifications.timeline}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A67] block mb-1">
                Typology Concept
              </span>
              <span className="font-serif text-lg text-[#22221F]">
                {project.specifications.locationConcept}
              </span>
            </div>
          </div>

          {/* Materials & Palette */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#777A67] font-semibold mb-3 flex items-center gap-2">
                <Layers size={14} className="text-[#B69A69]" />
                <span>MATERIAL SPECIFICATION</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#22221F]/80">
                {project.materials.map((mat) => (
                  <li key={mat} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B69A69] rounded-full" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#777A67] font-semibold mb-3 flex items-center gap-2">
                <Compass size={14} className="text-[#B69A69]" />
                <span>TONAL HARMONY</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#22221F]/80">
                {project.palette.map((pal) => (
                  <li key={pal} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B69A69] rounded-full" />
                    <span>{pal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer / Direct Enquiry */}
          <div className="pt-6 border-t border-[#E8DFD2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#777A67] text-center sm:text-left">
              Interested in a bespoke interior in this aesthetic?
            </span>
            <button
              onClick={() => {
                onClose();
                onEnquireProject(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#22221F] text-[#F7F4EE] hover:bg-[#B69A69] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer"
            >
              <span>DISCUSS SIMILAR PROJECT</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
