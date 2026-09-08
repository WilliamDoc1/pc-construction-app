import React from 'react';
import db from '../data/db.json';
import { AsymmetricCapabilitiesShowcase } from '../components/AsymmetricCapabilitiesShowcase';

interface ThatchPageProps {
  onNavigateToProjects: () => void;
  onOpenContact: () => void;
}

export const ThatchPage: React.FC<ThatchPageProps> = ({
  onNavigateToProjects,
  onOpenContact,
}) => {
  const division = db.divisions.find((d) => d.id === 'thatch') || db.divisions[3];

  const thatchSpecs = [
    {
      number: '01',
      title: '350mm Hand-Bound Cape Reed',
      desc: 'Sourced from high-density Albertinia reed beds, offering natural thermal insulation (R-value > 4.5).',
      metric: 'R-VALUE > 4.5',
      image: '/images/pc_hero_heritage_thatch_1788880344746.jpg',
    },
    {
      number: '02',
      title: 'SATAS Chemical Fire Retardance',
      desc: 'Integrated deep-soak fire retardant application reducing flame spread index to Class A standards.',
      metric: 'SATAS CLASS A',
    },
    {
      number: '03',
      title: 'Copper Wire & Ridge Binding',
      desc: 'Hand-woven copper wire binding preventing weather degradation and ensuring a 40+ year lifespan.',
      metric: '40+ YEAR LIFESPAN',
    },
    {
      number: '04',
      title: 'Cape Dutch Historic Restorations',
      desc: 'Master lime plastering and historic masonry restoration for monument-grade architectural heritage.',
      metric: 'MONUMENT STANDARD',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Division Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight">
              PC Thatch & Heritage Restoration
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {division.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-stone-900 text-white text-xs tracking-widest font-medium uppercase rounded-full hover:bg-stone-800 transition-colors shadow-lg cursor-pointer"
              >
                REQUEST THATCH AUDIT &rarr;
              </button>
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3.5 border border-stone-400 text-stone-900 text-xs tracking-widest font-medium uppercase rounded-full hover:border-stone-900 transition-colors cursor-pointer"
              >
                VIEW THATCH PROJECTS
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300 aspect-[4/3]">
            <img src={division.heroImage} alt={division.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p className="text-lg font-light">Silverbay Manor — Shelley Point, West Coast</p>
            </div>
          </div>
        </div>

        {/* Asymmetric Specifications Showcase */}
        <AsymmetricCapabilitiesShowcase
          sectionTitle="4-Decade Craftsmanship Standards"
          sectionSubtitle="THATCHING SPECIFICATIONS"
          capabilities={thatchSpecs}
          heroImage={division.heroImage}
        />

        {/* TASA & SATAS Certification Callout */}
        <div className="bg-[#1C1917] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">TASA & SATAS CERTIFIED</span>
            <h3 className="text-2xl font-light text-white">Full Fire Compliance & Insurance Guarantee</h3>
            <p className="text-sm text-stone-400 font-light max-w-xl">
              All PC Thatchers projects are supplied with official SATAS fire retardant certificates accepted by leading insurance underwriters worldwide.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-white text-stone-900 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
          >
            CONSULT THATCH MASTER &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
