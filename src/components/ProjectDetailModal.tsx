import React from 'react';
import { X, MapPin, ArrowLeft } from 'lucide-react';
import type { Project } from './AsymmetricProjectGrid';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/95 backdrop-blur-xl animate-fade-in text-stone-100">
      {/* Top Fixed Sticky Bar */}
      <div className="sticky top-0 z-50 bg-[#1C1917]/90 border-b border-stone-800 px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-xs tracking-widest text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <span className="text-xs tracking-[0.25em] font-mono text-stone-400 uppercase hidden md:inline">
          PC CONSTRUCTION &bull; PROJECT CASE STUDY
        </span>

        <button
          onClick={onClose}
          className="p-2 text-stone-400 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* SPREAD 1: Full-Bleed Title & Credits Matrix */}
        <div className="space-y-8">
          <div className="relative h-[480px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-black/40" />

            {/* Title Block Top Left */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 space-y-2">
              <span className="text-xs tracking-[0.3em] font-light text-stone-300 uppercase block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
                {project.title}
              </h1>
              <p className="text-stone-300 text-sm tracking-widest font-light flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{project.location}</span>
              </p>
            </div>

            {/* Credits Matrix Bottom Right (Matching JNA Brochure Benchmark) */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 max-w-md bg-stone-900/90 backdrop-blur-md p-6 rounded-xl border border-stone-700/60 text-right space-y-2">
              <p className="text-[10px] tracking-[0.25em] text-stone-400 font-mono uppercase border-b border-stone-800 pb-2">
                PROJECT CREDITS & COLLABORATORS
              </p>
              {project.credits.architect && (
                <p className="text-xs text-stone-200">
                  <span className="text-stone-400 font-light">ARCHITECT: </span>
                  <span className="font-semibold text-white">{project.credits.architect}</span>
                </p>
              )}
              {project.credits.interiorDesigner && (
                <p className="text-xs text-stone-200">
                  <span className="text-stone-400 font-light">INTERIOR DESIGNER: </span>
                  <span className="font-semibold text-white">{project.credits.interiorDesigner}</span>
                </p>
              )}
              {project.credits.photographer && (
                <p className="text-xs text-stone-200">
                  <span className="text-stone-400 font-light">PHOTOGRAPHER: </span>
                  <span className="font-semibold text-white">{project.credits.photographer}</span>
                </p>
              )}
              {project.credits.quantitySurveyor && (
                <p className="text-xs text-stone-200">
                  <span className="text-stone-400 font-light">QUANTITY SURVEYOR: </span>
                  <span className="font-semibold text-white">{project.credits.quantitySurveyor}</span>
                </p>
              )}
              <p className="text-xs text-emerald-400 pt-1 font-mono">
                BUILDER: {project.credits.constructionDivisions.join(' & ')}
              </p>
            </div>
          </div>
        </div>

        {/* SPREAD 2: Editorial Sketch & Photo Monograph */}
        <div className="bg-stone-900 p-8 md:p-12 rounded-2xl border border-stone-800 space-y-12">
          <div className="border-b border-stone-800 pb-6 flex items-center justify-between">
            <span className="text-xs tracking-[0.3em] text-stone-400 uppercase font-mono">
              ARCHITECTURAL ANALYSIS & EXECUTION
            </span>
            <span className="text-xs text-stone-500 font-mono">FIG. 02 &bull; PROJECT ANALYSIS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Architectural Sketch / Structural Drawing */}
            <div className="lg:col-span-7 space-y-3">
              <div className="rounded-xl overflow-hidden border border-stone-700 bg-stone-950 p-2 shadow-xl">
                <img
                  src={project.elevationSketchUrl || project.heroImage}
                  alt="Architectural Sketch"
                  className="w-full h-[320px] md:h-[380px] object-cover rounded-lg filter grayscale contrast-125"
                />
              </div>
              <p className="text-[11px] text-stone-400 font-mono text-center">
                ARCHITECTURAL ELEVATION SECTION & STRUCTURAL TIMBER DETAILS
              </p>
            </div>

            {/* Right: Editorial Narrative Summary */}
            <div className="lg:col-span-5 space-y-6">
              {project.leadQuote && (
                <blockquote className="text-base md:text-lg font-light italic text-stone-200 border-l-2 border-amber-400 pl-4 py-1 leading-relaxed">
                  "{project.leadQuote}"
                </blockquote>
              )}

              <p className="text-stone-300 text-sm font-light leading-relaxed">
                {project.narrative}
              </p>

              <div className="pt-4 border-t border-stone-800 space-y-3">
                <p className="text-xs tracking-wider text-stone-400 font-semibold uppercase">
                  KEY STRUCTURAL HIGHLIGHTS:
                </p>
                <ul className="text-xs text-stone-300 space-y-2 font-light">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>System: {project.specifications.structuralSystem}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Roofing: {project.specifications.roofType}</span>
                  </li>
                  {project.specifications.areaSquareMeters && (
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Total Footprint: {project.specifications.areaSquareMeters} m²</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Data Table */}
        <div className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800 space-y-6">
          <h3 className="text-sm tracking-[0.2em] font-semibold text-stone-300 uppercase">
            MATERIAL & SPECIFICATION MATRIX
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
            <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 space-y-1">
              <span className="text-stone-400 block font-mono">PRIMARY MATERIALS</span>
              <span className="text-white font-medium">
                {project.specifications.primaryMaterials.join(', ')}
              </span>
            </div>
            <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 space-y-1">
              <span className="text-stone-400 block font-mono">STRUCTURAL FRAMEWORK</span>
              <span className="text-white font-medium">
                {project.specifications.structuralSystem}
              </span>
            </div>
            <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 space-y-1">
              <span className="text-stone-400 block font-mono">ROOFING ENGINE</span>
              <span className="text-white font-medium">
                {project.specifications.roofType}
              </span>
            </div>
          </div>
        </div>

        {/* Action Call to Action */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400 tracking-wider">
            Interested in building a similar project with PC Construction?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-8 py-3 bg-white text-stone-950 font-semibold text-xs tracking-widest rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
          >
            REQUEST ARCHITECTURAL CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};
