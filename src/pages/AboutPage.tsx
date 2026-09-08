import React from 'react';
import db from '../data/db.json';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const { company } = db;

  const milestones = [
    { year: 1994, title: 'Company Establishment', desc: 'PC Construction founded in Cape Town, specializing in bespoke residential master building.' },
    { year: 2002, title: 'Timber Division Launch', desc: 'Established PC Roofing & Timber to engineer complex curved glulam roof structures.' },
    { year: 2011, title: 'Heritage Thatch Integration', desc: 'Acquired master thatch craftsmen, introducing 350mm Cape reed thatching & Cape Dutch gable restorations.' },
    { year: 2018, title: 'Atlantic Seaboard Expansion', desc: 'Completed landmark coastal estates in Bantry Bay, Clifton, and Camps Bay.' },
    { year: 2026, title: '32 Years of Excellence', desc: 'Over 450+ completed architectural luxury projects across Southern Africa.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4">
          <div className="text-xs font-mono tracking-[0.25em] text-stone-500 uppercase">
            HERITAGE, LEADERSHIP & CRAFTSMANSHIP CULTURE
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-900 leading-tight">
            32 Years of Architectural Master Building Authority
          </h1>
          <p className="text-lg md:text-xl font-light text-stone-600 leading-relaxed max-w-3xl">
            Established in 1994, PC Construction combines structural engineering rigor with hand-finished artisan craftsmanship. Our proactive, hands-on leadership ensures every villa, timber truss, and Cape Dutch gable withstands the test of time.
          </p>
        </div>

        {/* Accreditation Matrix */}
        <div className="bg-[#1C1917] text-white p-8 md:p-12 rounded-2xl shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-1">
                GOVERNING COMPLIANCE
              </span>
              <h2 className="text-2xl font-light text-white">Official Institutional Accreditations</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.accreditations.map((acc, index) => (
              <div
                key={index}
                className="bg-stone-900/90 border border-stone-800 p-6 rounded-xl space-y-3 hover:border-amber-500/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-white tracking-wide">{acc}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Strictly audited for structural safety, fire-retardant application, and quality compliance.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 32-Year Timeline */}
        <div className="space-y-10">
          <div className="border-b border-stone-300 pb-4">
            <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">CHRONOLOGY</span>
            <h2 className="text-3xl font-light text-stone-900 mt-1">Our Journey Since 1994</h2>
          </div>

          <div className="relative border-l-2 border-stone-300 ml-4 space-y-12 pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#FCFBF7] border-4 border-stone-900 group-hover:bg-amber-600 transition-colors"></div>
                <span className="text-xs font-mono font-bold text-amber-700 tracking-widest block mb-1">
                  {m.year}
                </span>
                <h3 className="text-xl font-medium text-stone-900">{m.title}</h3>
                <p className="text-sm text-stone-600 font-light mt-1 max-w-2xl">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Leadership & Master Building Team */}
        <div className="space-y-10">
          <div className="border-b border-stone-300 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-stone-500 uppercase block mb-1">
                EXECUTIVE & SPECIALIST LEADERSHIP
              </span>
              <h2 className="text-3xl font-light text-stone-900">Our Leadership Team</h2>
            </div>
            <p className="text-stone-600 text-xs font-light max-w-md">
              Experienced master builders, registered structural engineers, and heritage craftsmen directing our four core operating divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Peter Clark',
                title: 'Founder & Managing Director',
                specialty: 'Luxury Estate Master Building',
                bio: '32+ years leading PC Construction from a bespoke residential builder into South Africa’s premier master building firm. MBA Executive Council Member.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Jacques van der Merwe',
                title: 'Director of Timber Engineering (Pr.Eng)',
                specialty: 'Glulam Arches & Truss Systems',
                bio: 'Pr.Eng Structural Engineer specialized in curved glulam beam design, CNC timber joinery, and heavy timber truss engineering.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Thabo Mokoena',
                title: 'Commercial Projects Director (Pr.CPM)',
                specialty: 'Commercial & Hospitality Pavilions',
                bio: 'Registered Construction Project Manager leading commercial developments, boutique winelands pavilions, and luxury retail fitouts.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Willem Bester',
                title: 'Master Thatching & Heritage Director',
                specialty: 'Cape Reed Thatch & Monument Restorations',
                bio: 'Over 40 years of specialized heritage thatching experience. TASA Certified Master Craftsman leading historic Cape Dutch restorations.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-stone-600 uppercase tracking-wider">
                      {member.title}
                    </p>
                    <p className="text-[11px] font-mono text-stone-400 uppercase tracking-widest pt-1 border-t border-stone-100">
                      SPECIALTY: {member.specialty}
                    </p>
                    <p className="text-xs text-stone-600 font-light leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Callout CTA */}
        <div className="bg-stone-100 border border-stone-300 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-light text-stone-900">Ready to discuss your architectural project?</h3>
            <p className="text-sm text-stone-600 font-light max-w-xl">
              Consult directly with our master builders and quantity surveyors across our Cape Town, Franschhoek, and Stellenbosch offices.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-stone-900 text-white font-medium text-xs tracking-widest uppercase rounded-full hover:bg-stone-800 transition-colors shadow-lg shrink-0 cursor-pointer"
          >
            REQUEST CONSULTATION &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
