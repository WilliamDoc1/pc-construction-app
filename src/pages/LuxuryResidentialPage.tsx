import React from 'react';
import db from '../data/db.json';
import { AsymmetricCapabilitiesShowcase } from '../components/AsymmetricCapabilitiesShowcase';

interface LuxuryResidentialPageProps {
  onNavigateToProjects: () => void;
  onOpenContact: () => void;
}

export const LuxuryResidentialPage: React.FC<LuxuryResidentialPageProps> = ({
  onNavigateToProjects,
  onOpenContact,
}) => {
  const division = db.divisions.find((d) => d.id === 'residential') || db.divisions[0];

  const residentialCapabilities = [
    {
      number: '01',
      title: 'Ultra-Luxury Coastal Estates',
      desc: 'Bespoke multi-level cliffside and beachfront villas engineered for harsh marine environments.',
      metric: 'UP TO 5 STOREYS',
      image: '/images/pc_hero_bantry_villa_1788880151974.jpg',
    },
    {
      number: '02',
      title: 'Post-Tensioned Slabs & Cantilevers',
      desc: 'Complex structural concrete engineering allowing 12m column-free living spaces and panoramic ocean views.',
      metric: '12M COLUMN-FREE',
    },
    {
      number: '03',
      title: 'Custom Joinery & Millwork Integrations',
      desc: 'Flawless execution of custom teak cabinetry, secret pivot doors, and architectural timber ceiling features.',
      metric: 'SUB-MM PRECISION',
    },
    {
      number: '04',
      title: 'Architectural Glazing Systems',
      desc: 'Minimalist double- and triple-glazed motorized glass sliding curtain walls with recessed floor tracks.',
      metric: 'CLASS A MARINE',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Division Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight">
              PC Luxury Residential
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {division.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-stone-900 text-white text-xs tracking-widest font-medium uppercase rounded-full hover:bg-stone-800 transition-colors shadow-lg cursor-pointer"
              >
                COMMISSION RESIDENTIAL ESTATE &rarr;
              </button>
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3.5 border border-stone-400 text-stone-900 text-xs tracking-widest font-medium uppercase rounded-full hover:border-stone-900 transition-colors cursor-pointer"
              >
                VIEW RESIDENTIAL PORTFOLIO
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300 aspect-[4/3]">
            <img src={division.heroImage} alt={division.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p className="text-lg font-light">Wave Villa — Bantry Bay, Cape Town</p>
            </div>
          </div>
        </div>

        {/* Asymmetric Capabilities Showcase */}
        <AsymmetricCapabilitiesShowcase
          sectionTitle="Luxury Residential Capabilities"
          sectionSubtitle="CRAFTSMANSHIP & ENGINEERING"
          capabilities={residentialCapabilities}
          heroImage={division.heroImage}
        />

        {/* Quality Banner */}
        <div className="bg-[#1C1917] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">UNCOMPROMISING QUALITY CONTROL</span>
            <h3 className="text-2xl font-light text-white">NHBRC & MBA Gold Class Standard</h3>
            <p className="text-sm text-stone-400 font-light max-w-xl">
              Every PC Residential project features dedicated site engineers, stringent quality audits, and structural integrity warranties backed by 30+ years of building excellence.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-white text-stone-900 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
          >
            SCHEDULE PRIVATE CONSULTATION &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
