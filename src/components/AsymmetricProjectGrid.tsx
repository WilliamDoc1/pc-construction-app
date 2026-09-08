import React, { useState } from 'react';

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  credits: {
    architect?: string;
    interiorDesigner?: string;
    photographer?: string;
    quantitySurveyor?: string;
    constructionDivisions: string[];
  };
  leadQuote?: string;
  narrative: string;
  heroImage: string;
  elevationSketchUrl?: string;
  gallery: string[];
  specifications: {
    structuralSystem: string;
    primaryMaterials: string[];
    roofType: string;
    areaSquareMeters?: number;
  };
}

interface AsymmetricProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const AsymmetricProjectGrid: React.FC<AsymmetricProjectGridProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filters = ['ALL', 'LUXURY RESIDENTIAL', 'COMMERCIAL', 'ROOFING & TIMBER', 'THATCH'];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'LUXURY RESIDENTIAL') return p.category === 'Luxury Residential';
    if (selectedFilter === 'COMMERCIAL') return p.category === 'Commercial';
    if (selectedFilter === 'ROOFING & TIMBER') return p.category === 'Roofing & Timber';
    if (selectedFilter === 'THATCH') return p.category === 'Thatch';
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 space-y-8 lg:space-y-0">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono text-stone-500 uppercase block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
              FEATURED <span className="font-bold">PROJECTS.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all cursor-pointer ${
                    active
                      ? 'bg-[#1C1917] text-white shadow-md font-semibold'
                      : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300 hover:text-stone-900 font-medium'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group relative h-[420px] rounded-xl overflow-hidden shadow-lg cursor-pointer bg-stone-900 border border-stone-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image with zoom hover effect */}
              <img
                src={proj.heroImage}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />

              {/* Top Left Title Overlay */}
              <div className="absolute top-4 left-4 right-4">
                <p className="text-white text-sm font-semibold tracking-wider uppercase drop-shadow-md">
                  {proj.title}
                </p>
                <p className="text-stone-300 text-[10px] tracking-widest font-mono uppercase">
                  {proj.location}
                </p>
              </div>

              {/* Bottom Details (Architect Only) */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                {proj.credits.architect && (
                  <div className="flex items-center justify-between text-[11px] tracking-wider text-stone-300 border-t border-white/20 pt-3">
                    <span className="font-light text-stone-300 uppercase tracking-widest">
                      ARCHITECT: {proj.credits.architect}
                    </span>
                    <span className="font-mono text-stone-400 group-hover:text-white transition-colors">&rarr;</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
