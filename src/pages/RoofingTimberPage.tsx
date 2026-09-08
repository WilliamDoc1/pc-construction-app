import React from 'react';
import db from '../data/db.json';
import { AsymmetricCapabilitiesShowcase } from '../components/AsymmetricCapabilitiesShowcase';

interface RoofingTimberPageProps {
  onNavigateToProjects: () => void;
  onOpenContact: () => void;
}

export const RoofingTimberPage: React.FC<RoofingTimberPageProps> = ({
  onNavigateToProjects,
  onOpenContact,
}) => {
  const division = db.divisions.find((d) => d.id === 'roofing') || db.divisions[1];

  const timberCapabilities = [
    {
      number: '01',
      title: 'Curved Glulam Arches',
      desc: 'CNC Milled European Spruce and Sugargum glulam beams capable of 18m column-free internal spans.',
      metric: '18M CLEAR SPAN',
      image: '/images/pc_hero_roofing_timber_1788880244340.jpg',
    },
    {
      number: '02',
      title: 'Concealed Flitch Plates',
      desc: 'Precision laser-cut stainless steel plates embedded inside heavy timber posts for invisible structural load paths.',
      metric: 'LASER-CUT STEEL',
    },
    {
      number: '03',
      title: 'Exposed Truss Engineering',
      desc: 'Hand-sanded King Post and Queen Post timber trusses with matte black architectural tie-rods and turnbuckles.',
      metric: 'HAND-FINISHED',
    },
    {
      number: '04',
      title: 'Architectural Ceilings',
      desc: 'Spaansriet reed, knotty pine tongue-and-groove, and acoustic wood slatted ceiling cladding.',
      metric: 'ACOUSTIC GRADE',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Division Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight">
              PC Roofing & Timber Engineering
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {division.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-stone-900 text-white text-xs tracking-widest font-medium uppercase rounded-full hover:bg-stone-800 transition-colors shadow-lg cursor-pointer"
              >
                REQUEST TIMBER TAKEOFF &rarr;
              </button>
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3.5 border border-stone-400 text-stone-900 text-xs tracking-widest font-medium uppercase rounded-full hover:border-stone-900 transition-colors cursor-pointer"
              >
                VIEW TIMBER PROJECTS
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300 aspect-[4/3]">
            <img src={division.heroImage} alt={division.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p className="text-lg font-light">Pearl Valley Timber Estate — Paarl Winelands</p>
            </div>
          </div>
        </div>

        {/* Asymmetric Capabilities Showcase */}
        <AsymmetricCapabilitiesShowcase
          sectionTitle="Non-Conventional Roof Capabilities"
          sectionSubtitle="ENGINEERING PORTFOLIO"
          capabilities={timberCapabilities}
          heroImage={division.heroImage}
        />

        {/* Timber Standards Banner */}
        <div className="bg-[#1C1917] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">SUSTAINABLE HARVESTING & FIRE SAFETY</span>
            <h3 className="text-2xl font-light text-white">SABS & SATAS Timber Treatment Standards</h3>
            <p className="text-sm text-stone-400 font-light max-w-xl">
              All structural timber elements undergo pressure impregnation and fire-retardant treatment compliant with South African SANS standards.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-white text-stone-900 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
          >
            CONSULT STRUCTURAL TIMBER ENGINEER &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
