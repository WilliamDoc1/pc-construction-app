import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ElevationCrossfadeSlider } from '../components/ElevationCrossfadeSlider';
import type { Project } from '../components/AsymmetricProjectGrid';
import db from '../data/db.json';

interface ProjectDetailPageProps {
  onOpenContact: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projects = db.projects as Project[];
  const projectIndex = projects.findIndex((p) => p.slug === slug || p.id === slug);
  const project = projects[projectIndex] || projects[0];

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl text-stone-800">Project Not Found</h2>
        <Link to="/projects" className="text-amber-800 underline mt-4 inline-block font-mono text-xs">
          Return to Projects Portfolio
        </Link>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="pt-28 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Back Link */}
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-stone-500 hover:text-stone-900 transition-colors uppercase cursor-pointer"
        >
          <span>&larr; BACK TO ALL PROJECTS</span>
        </button>

        {/* Hero Section & Title */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-stone-500 uppercase">
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-900">
            {project.title}
          </h1>

          {project.leadQuote && (
            <p className="text-lg md:text-2xl font-light text-stone-600 italic border-l-2 border-stone-800 pl-6 py-2 max-w-4xl">
              "{project.leadQuote}"
            </p>
          )}
        </div>

        {/* 50/50 Monograph Hero Photography & Credits Matrix Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300 aspect-[16/10]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Credits Matrix */}
          <div className="bg-[#1C1917] text-stone-200 p-8 rounded-2xl border border-stone-800 space-y-6 shadow-xl">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">PROJECT CREDITS MATRIX</span>
              <h3 className="text-lg font-light text-white mt-1">Professional Directory</h3>
            </div>

            <dl className="space-y-4 text-xs">
              {project.credits?.architect && (
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <dt className="text-stone-400 font-mono">ARCHITECT:</dt>
                  <dd className="font-semibold text-white">{project.credits.architect}</dd>
                </div>
              )}
              {project.credits?.interiorDesigner && (
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <dt className="text-stone-400 font-mono">INTERIOR DESIGNER:</dt>
                  <dd className="font-semibold text-white">{project.credits.interiorDesigner}</dd>
                </div>
              )}
              {project.credits?.photographer && (
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <dt className="text-stone-400 font-mono">PHOTOGRAPHY:</dt>
                  <dd className="font-semibold text-white">{project.credits.photographer}</dd>
                </div>
              )}
              {project.credits?.quantitySurveyor && (
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <dt className="text-stone-400 font-mono">QUANTITY SURVEYOR:</dt>
                  <dd className="font-semibold text-white">{project.credits.quantitySurveyor}</dd>
                </div>
              )}
              {project.credits?.constructionDivisions && (
                <div className="space-y-1.5 pt-2">
                  <dt className="text-stone-400 font-mono uppercase">EXECUTING PC DIVISIONS:</dt>
                  <dd className="text-stone-300 font-mono pt-1">
                    {project.credits.constructionDivisions.join(', ')}
                  </dd>
                </div>
              )}
            </dl>

            <button
              onClick={onOpenContact}
              className="w-full py-3 bg-white text-stone-900 font-mono font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-stone-200 transition-colors shadow"
            >
              INQUIRE ABOUT SIMILAR BUILD
            </button>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">EDITORIAL NARRATIVE</span>
          <h2 className="text-3xl font-light text-stone-900">Architectural Context & Execution</h2>
          <p className="text-base md:text-lg font-light text-stone-700 leading-relaxed">
            {project.narrative}
          </p>
        </div>

        {/* Architectural Elevation Sketch vs Photo Slider */}
        <ElevationCrossfadeSlider
          photoUrl={project.heroImage}
          sketchUrl={project.elevationSketchUrl || project.heroImage}
          projectTitle={project.title}
        />

        {/* Specifications Matrix Table */}
        {project.specifications && (
          <div className="space-y-6">
            <div className="border-b border-stone-300 pb-4">
              <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">SPECIFICATIONS MATRIX</span>
              <h2 className="text-2xl font-light text-stone-900 mt-1">Material & Structural Breakdown</h2>
            </div>

            <div className="bg-white rounded-xl border border-stone-300 overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-stone-100 font-mono text-stone-600 uppercase border-b border-stone-300">
                  <tr>
                    <th className="p-4 md:p-5">SPECIFICATION PARAMETER</th>
                    <th className="p-4 md:p-5">ENGINEERING DETAIL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="p-4 md:p-5 font-semibold font-mono text-stone-600 bg-stone-50/50">
                      STRUCTURAL SYSTEM
                    </td>
                    <td className="p-4 md:p-5">{project.specifications.structuralSystem}</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-semibold font-mono text-stone-600 bg-stone-50/50">
                      PRIMARY MATERIALS
                    </td>
                    <td className="p-4 md:p-5">{project.specifications.primaryMaterials?.join(', ')}</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-semibold font-mono text-stone-600 bg-stone-50/50">
                      ROOF SYSTEM
                    </td>
                    <td className="p-4 md:p-5">{project.specifications.roofType}</td>
                  </tr>
                  {project.specifications.areaSquareMeters && (
                    <tr>
                      <td className="p-4 md:p-5 font-semibold font-mono text-stone-600 bg-stone-50/50">
                        TOTAL FOOTPRINT
                      </td>
                      <td className="p-4 md:p-5 font-mono">{project.specifications.areaSquareMeters} m²</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-6">
            <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">VISUAL ARCHIVE</span>
            <h2 className="text-2xl font-light text-stone-900">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
                  <img src={imgUrl} alt={`${project.title} slide ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Footer Bar */}
        <div className="border-t border-stone-300 pt-8 flex items-center justify-between">
          <span className="text-xs font-mono text-stone-500 uppercase">NEXT PROJECT</span>
          <button
            onClick={() => navigate(`/projects/${nextProject.slug || nextProject.id}`)}
            className="flex items-center space-x-3 text-lg md:text-xl font-light text-stone-900 hover:text-amber-800 transition-colors uppercase"
          >
            <span>{nextProject.title} ({nextProject.location}) &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
