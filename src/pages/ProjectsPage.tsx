import React, { useState } from 'react';
import type { Project } from '../components/AsymmetricProjectGrid';
import db from '../data/db.json';

interface ProjectsPageProps {
  onNavigateToSlug: (slug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateToSlug,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'LUXURY RESIDENTIAL', 'COMMERCIAL', 'ROOFING & TIMBER', 'THATCH'];

  const filteredProjects = (db.projects as Project[]).filter((project) => {
    const matchCategory =
      selectedCategory === 'ALL' ||
      (selectedCategory === 'LUXURY RESIDENTIAL' && project.category === 'Luxury Residential') ||
      (selectedCategory === 'COMMERCIAL' && project.category === 'Commercial') ||
      (selectedCategory === 'ROOFING & TIMBER' && project.category === 'Roofing & Timber') ||
      (selectedCategory === 'THATCH' && project.category === 'Thatch');

    const matchSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.credits?.architect && project.credits.architect.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-300 pb-8 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-widest text-stone-500 uppercase">
              PORTFOLIO SHOWCASE & PROJECTS
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-900">
              Featured Projects
            </h1>
            <p className="text-sm md:text-base font-light text-stone-600 max-w-xl">
              Explore our curated selection of luxury coastal estates, commercial developments, intricate timber structures, and master thatching.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project, architect, location..."
              className="w-full bg-white border border-stone-300 rounded-full px-5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors shadow-sm font-mono"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-stone-400 mr-2">
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wider rounded-full transition-all duration-300 uppercase ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white font-semibold shadow-md'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300 font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigateToSlug(project.slug || project.id)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block">
                    {project.location}
                  </span>
                  <h3 className="text-xl font-light text-stone-900 group-hover:text-amber-800 transition-colors">
                    {project.title}
                  </h3>
                  {project.credits?.architect && (
                    <span className="text-xs text-stone-500 font-light block pt-1">
                      Architect: <strong className="text-stone-700 font-medium">{project.credits.architect}</strong>
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs tracking-wider text-stone-600 group-hover:text-stone-950 uppercase font-medium">
                  <span>VIEW PROJECT</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-stone-100 rounded-xl border border-stone-200">
            <p className="text-stone-500 font-light">No projects match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-mono text-stone-900 underline uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
