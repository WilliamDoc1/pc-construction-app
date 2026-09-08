import React from 'react';
import db from '../data/db.json';
import { AsymmetricCapabilitiesShowcase } from '../components/AsymmetricCapabilitiesShowcase';

interface CommercialPageProps {
  onNavigateToProjects: () => void;
  onOpenContact: () => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({
  onNavigateToProjects,
  onOpenContact,
}) => {
  const division = db.divisions.find((d) => d.id === 'commercial') || db.divisions[1];

  const commercialCapabilities = [
    {
      number: '01',
      title: 'Boutique Hospitality Pavilions',
      desc: 'Constructing wine estate tasting rooms, luxury safari lodges, and high-end restaurant spaces with off-shutter finishes.',
      metric: 'WINELANDS & COASTAL',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '02',
      title: 'Corporate Headquarters & Fitouts',
      desc: 'Premium commercial structures incorporating off-shutter concrete, structural steel framing, and frameless glass facades.',
      metric: 'TURNKEY EXECUTION',
    },
    {
      number: '03',
      title: 'Luxury Retail Flagships',
      desc: 'Precision retail interior fitouts and structural transformations for international luxury brands.',
      metric: 'HIGH-TRAFFIC SPEC',
    },
    {
      number: '04',
      title: 'Commercial Green Building Standards',
      desc: 'Sustainable building practices compliance, solar canopy roof integration, and rainwater harvesting systems.',
      metric: 'GBCSA CERTIFIED',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Division Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight">
              PC Commercial Developments
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {division.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-stone-900 text-white text-xs tracking-widest font-medium uppercase rounded-full hover:bg-stone-800 transition-colors shadow-lg cursor-pointer"
              >
                REQUEST COMMERCIAL TENDER &rarr;
              </button>
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3.5 border border-stone-400 text-stone-900 text-xs tracking-widest font-medium uppercase rounded-full hover:border-stone-900 transition-colors cursor-pointer"
              >
                VIEW COMMERCIAL PROJECTS
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300 aspect-[4/3]">
            <img src={division.heroImage} alt={division.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p className="text-lg font-light">Constantia Hospitality Pavilion — Constantia Winelands</p>
            </div>
          </div>
        </div>

        {/* Asymmetric Capabilities Showcase */}
        <AsymmetricCapabilitiesShowcase
          sectionTitle="Commercial Construction Capabilities"
          sectionSubtitle="COMMERCIAL EXCELLENCE"
          capabilities={commercialCapabilities}
          heroImage={division.heroImage}
        />

        {/* Commercial Banner */}
        <div className="bg-[#1C1917] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">COMMERCIAL PRECISION</span>
            <h3 className="text-2xl font-light text-white">Full-Turnkey Project Management</h3>
            <p className="text-sm text-stone-400 font-light max-w-xl">
              From site prep and structural civil engineering to final occupancy certification, PC Commercial manages turnkey developments with transparent cost tracking and timeline management.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-white text-stone-900 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
          >
            DISCUSS COMMERCIAL TENDER &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
