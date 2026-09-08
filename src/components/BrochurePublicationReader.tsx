import React, { useState, useEffect } from 'react';

interface BrochureItem {
  id: string;
  serviceKey?: string;
  title: string;
  subtitle?: string;
  fileSize: string;
  pageCount: number;
  pdfUrl: string;
  coverImage: string;
  description?: string;
}

interface KeyProjectData {
  title: string;
  typeOfConstruction: string;
  description: string;
  location: string;
  client: string;
  architects: string;
  engineer: string;
  quantitySurveyor: string;
  dateCompleted: string;
  value: string;
  image: string;
}

interface ServicePublicationPreset {
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  director: {
    name: string;
    title: string;
    headshot: string;
    quote: string;
  };
  keyProjects: KeyProjectData[];
  contents: { page: number; title: string }[];
}

interface BrochurePublicationReaderProps {
  brochure: BrochureItem | null;
  onClose: () => void;
}

export const BrochurePublicationReader: React.FC<BrochurePublicationReaderProps> = ({
  brochure,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'reader' | 'contents'>('reader');

  useEffect(() => {
    setCurrentPage(1);
    setActiveTab('reader');
  }, [brochure?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (brochure && currentPage < (brochure.pageCount || 6)) {
          setCurrentPage((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, brochure, onClose]);

  if (!brochure) return null;

  const totalPages = brochure.pageCount || 6;
  const serviceKey = brochure.serviceKey || 'residential';

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Simple, ultra-readable buyer-focused service presets
  const servicePresets: Record<string, ServicePublicationPreset> = {
    residential: {
      badge: 'PC LUXURY RESIDENTIAL',
      title: 'PC LUXURY RESIDENTIAL MONOGRAPH',
      subtitle: 'Bespoke Coastal Estates & Architectural Villas',
      overview:
        'PC Residential constructs high-end oceanfront estates, cliffside villas, and private luxury residences across Southern Africa with flawless project management and clear accounting.',
      director: {
        name: 'Peter Clark',
        title: 'Founder & Managing Director',
        headshot: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        quote: 'Every villa and luxury residence we construct represents a lifelong milestone for our clients. We build with absolute structural integrity, hand-finished craftsmanship, and total cost transparency.',
      },
      contents: [
        { page: 1, title: 'Cover & Division Overview' },
        { page: 2, title: 'Key Project: Wave Villa (Bantry Bay)' },
        { page: 3, title: 'Key Project: Ridge Estate (Clifton 3rd Beach)' },
        { page: 4, title: 'Key Project: House Combretum (Drakenstein)' },
        { page: 5, title: 'Our Quality Guarantee & Building Heritage' },
        { page: 6, title: 'Director Message & Regional Office Contacts' },
      ],
      keyProjects: [
        {
          title: 'Wave Villa',
          typeOfConstruction: 'Luxury Coastal Estate',
          description: 'Construction of new multi-level cliffside villa with infinity pool deck and custom hardwood finishes.',
          location: 'Bantry Bay, Cape Town',
          client: 'Private Family Estate',
          architects: 'ARRCC',
          engineer: 'C-Plan Structural Engineers',
          quantitySurveyor: 'RLB Pentad Cape Town',
          dateCompleted: 'November 2024',
          value: 'R68 500 000',
          image: '/images/pc_hero_bantry_villa_1788880151974.jpg',
        },
        {
          title: 'Ridge Estate',
          typeOfConstruction: 'Luxury Oceanfront Villa',
          description: 'Master build of contemporary beachfront residence incorporating motorized sliding glass and off-shutter concrete.',
          location: 'Clifton 3rd Beach, Cape Town',
          client: 'Atlantic Seaboard Holdings',
          architects: 'SAOTA',
          engineer: 'Eksteen & Le Roux',
          quantitySurveyor: 'De Leeuw Group',
          dateCompleted: 'March 2023',
          value: 'R52 000 000',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'House Combretum',
          typeOfConstruction: 'Luxury Winelands Residence',
          description: 'Construction of modern estate home featuring cantilevered deck and seamless indoor-outdoor living spaces.',
          location: 'Drakenstein Valley, Winelands',
          client: 'Combretum Trust',
          architects: 'VR Architects',
          engineer: 'C-Plan Structural Engineers',
          quantitySurveyor: 'Ezlu QS Consultancy',
          dateCompleted: 'August 2025',
          value: 'R38 900 000',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    commercial: {
      badge: 'PC COMMERCIAL DEVELOPMENTS',
      title: 'PC COMMERCIAL DEVELOPMENTS PORTFOLIO',
      subtitle: 'Boutique Hospitality Pavilions & Corporate Architecture',
      overview:
        'PC Commercial delivers turnkey commercial developments, wine estate tasting rooms, boutique lodges, and luxury retail flagships on-time and within budget.',
      director: {
        name: 'Thabo Mokoena',
        title: 'Commercial Projects Director (Pr.CPM)',
        headshot: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        quote: 'In commercial development, timing and budget discipline are non-negotiable. Our team delivers architecturally striking pavilions and commercial facilities on-schedule and on-budget.',
      },
      contents: [
        { page: 1, title: 'Cover & Commercial Division Overview' },
        { page: 2, title: 'Key Project: Constantia Hospitality Pavilion' },
        { page: 3, title: 'Key Project: Stellenbosch Innovation HQ' },
        { page: 4, title: 'Key Project: Paarl Wine Estate Visitor Centre' },
        { page: 5, title: 'Turnkey Management & Budget Transparency' },
        { page: 6, title: 'Director Message & Regional Office Contacts' },
      ],
      keyProjects: [
        {
          title: 'Constantia Hospitality Pavilion',
          typeOfConstruction: 'Commercial & Hospitality',
          description: 'Construction of new wine tasting pavilion, restaurant facilities, and private wine cellar.',
          location: 'Constantia Winelands, Cape Town',
          client: 'Constantia Estate',
          architects: 'Malan Vorster Architects',
          engineer: 'Kantey & Templer',
          quantitySurveyor: 'RLB Pentad',
          dateCompleted: 'October 2024',
          value: 'R34 200 000',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Stellenbosch Innovation HQ',
          typeOfConstruction: 'Commercial Office Building',
          description: 'Construction of 3-story corporate headquarters with solar canopy roof and energy-efficient climate control.',
          location: 'Technopark, Stellenbosch',
          client: 'Innovation Park (Pty) Ltd',
          architects: 'DHK Architects',
          engineer: 'Aurecon Group',
          quantitySurveyor: 'VDM Quantity Surveyors',
          dateCompleted: 'August 2025',
          value: 'R48 900 000',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Paarl Wine Estate Visitor Centre',
          typeOfConstruction: 'Commercial & Hospitality',
          description: 'Construction of luxury wine tasting hall, subterranean maturation cellar, and farm-to-table bistro facility.',
          location: 'Paarl, Western Cape',
          client: 'Paarl Winelands Holdings',
          architects: 'Malan Vorster Architects',
          engineer: 'Kantey & Templer',
          quantitySurveyor: 'RLB Pentad',
          dateCompleted: 'May 2024',
          value: 'R31 400 000',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    timber: {
      badge: 'PC ROOFING & TIMBER ENGINEERING',
      title: 'PC ROOFING & TIMBER ENGINEERING GUIDE',
      subtitle: 'Curved Glulam Arches & Exposed Timber Trusses',
      overview:
        'PC Roofing & Timber builds non-conventional timber roof structures, curved glulam arches, exposed decorative trusses, and architectural wood ceilings.',
      director: {
        name: 'Jacques van der Merwe',
        title: 'Director of Timber Engineering (Pr.Eng)',
        headshot: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        quote: 'Structural timber framing requires exact engineering and passion for wood craft. We ensure every glulam arch and exposed truss assembly is manufactured to exceed SABS & SANS standards.',
      },
      contents: [
        { page: 1, title: 'Cover & Timber Division Overview' },
        { page: 2, title: 'Key Project: Pearl Valley Timber Estate' },
        { page: 3, title: 'Key Project: Franschhoek Valley Lodge' },
        { page: 4, title: 'Key Project: Paarl Equestrian Pavilion' },
        { page: 5, title: 'Structural Timber Quality & Treatment Standards' },
        { page: 6, title: 'Director Message & Regional Office Contacts' },
      ],
      keyProjects: [
        {
          title: 'Pearl Valley Timber Estate',
          typeOfConstruction: 'Timber & Roof Structure',
          description: 'Installation of sweeping curved glulam roof arches and exposed pine ceiling cladding for equestrian villa.',
          location: 'Paarl Winelands, Western Cape',
          client: 'Pearl Valley Golf & Country Estate',
          architects: 'Kritzinger Architects',
          engineer: 'LTA Timber Engineers',
          quantitySurveyor: 'Bernard James & Partners',
          dateCompleted: 'February 2024',
          value: 'R22 800 000',
          image: '/images/pc_hero_roofing_timber_1788880244340.jpg',
        },
        {
          title: 'Franschhoek Valley Lodge',
          typeOfConstruction: 'Exposed Timber Trusses',
          description: 'Erection of heavy timber King Post trusses and acoustic wood slatted ceilings for luxury lodge.',
          location: 'Franschhoek, Western Cape',
          client: 'Franschhoek Hospitality Group',
          architects: 'Van Der Merwe Miszewski',
          engineer: 'C-Plan Structural Engineers',
          quantitySurveyor: 'Benchmark QS',
          dateCompleted: 'June 2025',
          value: 'R18 400 000',
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Paarl Equestrian Pavilion',
          typeOfConstruction: 'Timber Arena Structure',
          description: 'Construction of exposed timber roof canopy over private equestrian arena and viewing gallery.',
          location: 'Paarl, Western Cape',
          client: 'Private Estate Trust',
          architects: 'Hammerhead Designs',
          engineer: 'LTA Structural Engineers',
          quantitySurveyor: 'Bernard James & Partners',
          dateCompleted: 'November 2023',
          value: 'R14 200 000',
          image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    thatch: {
      badge: 'PC THATCH & HERITAGE RESTORATION',
      title: 'PC THATCH & HERITAGE COMPENDIUM',
      subtitle: 'Cape Reed Thatching & Monument Restorations',
      overview:
        'PC Thatchers specializes in hand-bound Cape reed thatched roofs, fire-retardant applications, and historic Cape Dutch gable restorations.',
      director: {
        name: 'Willem Bester',
        title: 'Master Thatching & Heritage Director',
        headshot: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        quote: 'Thatching is an authentic craft rooted in South African heritage. Our master craftsmen combine traditional Cape reed binding with certified chemical fire retardant barriers for unmatched safety.',
      },
      contents: [
        { page: 1, title: 'Cover & Thatch Division Overview' },
        { page: 2, title: 'Key Project: Silverbay Manor' },
        { page: 3, title: 'Key Project: Groot Drakenstein Homestead' },
        { page: 4, title: 'Key Project: Shelley Point West Coast Estate' },
        { page: 5, title: 'Fire Safety Certification & 40-Year Guarantee' },
        { page: 6, title: 'Director Message & Regional Office Contacts' },
      ],
      keyProjects: [
        {
          title: 'Silverbay Manor',
          typeOfConstruction: 'Thatch & Heritage Restoration',
          description: 'Master thatching of Cape reed roof with chemical fire protection and copper ridge wiring for coastal manor.',
          location: 'Shelley Point, West Coast',
          client: 'Silverbay Private Estate',
          architects: 'Wynand Wilsenach Architects',
          engineer: 'Structural Hive',
          quantitySurveyor: 'Coastal Quantity Surveyors',
          dateCompleted: 'September 2023',
          value: 'R19 600 000',
          image: '/images/pc_hero_heritage_thatch_1788880344746.jpg',
        },
        {
          title: 'Groot Drakenstein Homestead',
          typeOfConstruction: 'Heritage Thatch & Gable Restoration',
          description: 'Historic monument restoration including Cape Dutch gable lime plastering and authentic reed thatched roof.',
          location: 'Simondium, Western Cape',
          client: 'Drakenstein Heritage Trust',
          architects: 'Gabriel Fagan Architects',
          engineer: 'Heritage Structural Consult',
          quantitySurveyor: 'Cape Heritage QS',
          dateCompleted: 'November 2025',
          value: 'R15 750 000',
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Shelley Point West Coast Estate',
          typeOfConstruction: 'Coastal Thatch Residence',
          description: 'Construction of new Cape Dutch style beach residence with hand-bound reed thatch and fire barrier.',
          location: 'Shelley Point, West Coast',
          client: 'West Coast Holdings',
          architects: 'Malan Vorster Architects',
          engineer: 'Structural Hive',
          quantitySurveyor: 'Coastal QS',
          dateCompleted: 'January 2024',
          value: 'R21 300 000',
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
  };

  const currentPreset = servicePresets[serviceKey] || servicePresets.residential;

  // Helper component to render clean Key Project fact sheet
  const RenderKeyProjectCard: React.FC<{ project: KeyProjectData }> = ({ project }) => (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5 text-stone-900 text-xs md:text-sm">
      <div className="border-b border-stone-200 pb-2">
        <span className="text-amber-800 font-mono font-bold tracking-widest text-[10px] uppercase block">
          KEY PROJECT
        </span>
        <h3 className="text-lg md:text-xl font-semibold text-stone-900 mt-0.5">
          {project.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-1.5 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Type of Construction:</span>
          <span className="text-stone-700">{project.typeOfConstruction}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Description:</span>
          <span className="text-stone-700 leading-relaxed">{project.description}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Location:</span>
          <span className="text-stone-700">{project.location}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Client:</span>
          <span className="text-stone-700">{project.client}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Architects:</span>
          <span className="text-stone-700">{project.architects}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Engineer:</span>
          <span className="text-stone-700">{project.engineer}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Quantity Surveyor:</span>
          <span className="text-stone-700">{project.quantitySurveyor}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
          <span className="font-semibold text-stone-900 min-w-[150px]">Date Completed:</span>
          <span className="text-stone-700">{project.dateCompleted}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 pt-1 border-t border-stone-100">
          <span className="font-bold text-amber-900 min-w-[150px]">Value:</span>
          <span className="font-bold text-amber-900 text-sm md:text-base">{project.value}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#141210]/95 backdrop-blur-xl flex flex-col justify-between text-[#1C1917] overflow-hidden animate-fade-in">
      {/* Top Bar Header */}
      <div className="bg-[#1C1917] text-stone-200 border-b border-stone-800 px-4 md:px-8 py-3.5 flex items-center justify-between z-20 shadow-xl shrink-0">
        <div className="flex items-center space-x-3 md:space-x-4 min-w-0">
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xl font-light tracking-widest text-white">PC</span>
            <span className="h-4 w-[1px] bg-stone-700"></span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-amber-400 uppercase">
              {currentPreset.badge}
            </span>
          </div>
          <span className="hidden md:inline text-xs text-stone-700">|</span>
          <h2 className="hidden lg:block text-xs font-mono tracking-widest uppercase text-stone-300 truncate max-w-md">
            {brochure.title}
          </h2>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
          <button
            onClick={() => setActiveTab(activeTab === 'reader' ? 'contents' : 'reader')}
            className="px-3 py-1.5 text-[11px] tracking-wider border border-stone-700 hover:border-stone-400 rounded-full text-stone-300 hover:text-white transition-colors font-medium cursor-pointer"
          >
            {activeTab === 'reader' ? 'INDEX' : 'SPREAD VIEW'}
          </button>

          <button
            onClick={handlePrint}
            className="hidden sm:block px-3 py-1.5 text-[11px] tracking-wider border border-stone-700 hover:border-stone-400 rounded-full text-stone-300 hover:text-white transition-colors font-medium cursor-pointer"
          >
            PRINT
          </button>

          <a
            href={brochure.pdfUrl}
            download
            className="px-3.5 py-1.5 text-[11px] tracking-wider font-semibold bg-white text-stone-900 hover:bg-stone-200 rounded-full transition-colors shadow uppercase cursor-pointer"
          >
            DOWNLOAD PDF
          </a>

          <button
            onClick={onClose}
            className="px-3 py-1.5 text-[11px] border border-stone-700 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors ml-1 uppercase font-medium cursor-pointer"
          >
            CLOSE &times;
          </button>
        </div>
      </div>

      {/* Main Publication Canvas Container */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {activeTab === 'contents' ? (
          /* Table of Contents & Index View */
          <div className="max-w-3xl w-full bg-[#FCFBF7] p-6 md:p-10 rounded-2xl shadow-2xl border border-stone-300 animate-fade-in text-[#1C1917] my-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-300 mb-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-amber-800 uppercase font-semibold block">
                  {currentPreset.badge}
                </span>
                <h3 className="text-xl md:text-2xl font-light tracking-wide mt-1 text-stone-900">
                  {brochure.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-500 bg-stone-200 px-3 py-1 rounded-full font-bold">
                {totalPages} SPREADS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {currentPreset.contents.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setActiveTab('reader');
                  }}
                  className="flex items-center justify-between p-3.5 bg-stone-100/80 hover:bg-stone-200/90 rounded-xl text-left transition-colors border border-stone-200/80 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3 min-w-0 pr-2">
                    <span className="w-7 h-7 rounded-full bg-stone-900 text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0 group-hover:bg-amber-700 transition-colors">
                      0{item.page}
                    </span>
                    <span className="text-xs font-medium text-stone-800 group-hover:text-stone-950 truncate">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold shrink-0">
                    SPREAD {item.page}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* A4 Horizontal Publication Spread (Fits cleanly within viewport) */
          <div className="relative w-full max-w-[1060px] max-h-[78vh] aspect-[1.414/1] bg-[#FCFBF7] rounded-2xl shadow-2xl overflow-hidden border border-stone-300 flex flex-col justify-between p-6 md:p-10 transition-all duration-300 my-auto">
            {/* Page 1: Cover Spread */}
            {currentPage === 1 && (
              <div className="relative flex-1 flex flex-col justify-between text-[#1C1917] overflow-hidden rounded-xl">
                <div className="absolute inset-0 -m-6 md:-m-10">
                  <img
                    src={brochure.coverImage}
                    alt={brochure.title}
                    className="w-full h-full object-cover filter brightness-[0.7]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 flex justify-between items-start text-white">
                  <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20">
                    <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-stone-200">
                      PC CONSTRUCTION | EST. 1994
                    </span>
                  </div>
                  <span className="text-[11px] font-mono tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md px-3 py-1 rounded-lg">
                    EDITION 2026/2027
                  </span>
                </div>

                <div className="relative z-10 text-white max-w-2xl space-y-3">
                  <span className="text-[11px] font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold block">
                    SERVICE CATALOGUE • {currentPreset.badge}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-light tracking-wide leading-tight text-white">
                    {brochure.title}
                  </h1>
                  <p className="text-xs md:text-sm font-light text-stone-300 tracking-wider max-w-xl leading-relaxed">
                    {currentPreset.overview}
                  </p>
                </div>
              </div>
            )}

            {/* Page 2: Key Project 01 Showcase Spread */}
            {currentPage === 2 && currentPreset.keyProjects[0] && (
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden">
                <div className="md:col-span-6 relative rounded-xl overflow-hidden shadow-md h-full min-h-[240px]">
                  <img
                    src={currentPreset.keyProjects[0].image}
                    alt={currentPreset.keyProjects[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-md tracking-widest uppercase border border-white/10">
                    COMPLETED PROJECT PHOTOGRAPHY
                  </div>
                </div>

                <div className="md:col-span-6 h-full flex flex-col justify-center">
                  <RenderKeyProjectCard project={currentPreset.keyProjects[0]} />
                </div>
              </div>
            )}

            {/* Page 3: Key Project 02 Showcase Spread */}
            {currentPage === 3 && currentPreset.keyProjects[1] && (
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden">
                <div className="md:col-span-6 h-full flex flex-col justify-center">
                  <RenderKeyProjectCard project={currentPreset.keyProjects[1]} />
                </div>

                <div className="md:col-span-6 relative rounded-xl overflow-hidden shadow-md h-full min-h-[240px]">
                  <img
                    src={currentPreset.keyProjects[1].image}
                    alt={currentPreset.keyProjects[1].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-md tracking-widest uppercase border border-white/10">
                    COMPLETED PROJECT PHOTOGRAPHY
                  </div>
                </div>
              </div>
            )}

            {/* Page 4: Key Project 03 Showcase Spread */}
            {currentPage === 4 && (
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden">
                {currentPreset.keyProjects[2] ? (
                  <>
                    <div className="md:col-span-6 relative rounded-xl overflow-hidden shadow-md h-full min-h-[240px]">
                      <img
                        src={currentPreset.keyProjects[2].image}
                        alt={currentPreset.keyProjects[2].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-md tracking-widest uppercase border border-white/10">
                        COMPLETED PROJECT PHOTOGRAPHY
                      </div>
                    </div>

                    <div className="md:col-span-6 h-full flex flex-col justify-center">
                      <RenderKeyProjectCard project={currentPreset.keyProjects[2]} />
                    </div>
                  </>
                ) : (
                  <div className="md:col-span-12 flex flex-col justify-center items-center text-center p-8 space-y-4">
                    <h3 className="text-2xl font-light text-stone-900">{currentPreset.title}</h3>
                    <p className="text-sm text-stone-600 max-w-xl leading-relaxed">{currentPreset.overview}</p>
                  </div>
                )}
              </div>
            )}

            {/* Page 5: Master Building Heritage & Quality Guarantee */}
            {currentPage === 5 && (
              <div className="flex-1 flex flex-col justify-between space-y-3 overflow-hidden">
                <div className="border-b border-stone-300 pb-2 flex items-center justify-between shrink-0">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-amber-800 uppercase font-semibold">
                      MASTER BUILDER MANDATE
                    </span>
                    <h3 className="text-base md:text-lg font-light tracking-wide text-stone-900">
                      32 Years of Hands-on Construction Excellence
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono bg-stone-900 text-white px-3 py-1 rounded-full shrink-0">
                    SPREAD 05 OF {totalPages}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1 min-h-0 overflow-hidden">
                  <div className="space-y-2.5 text-xs text-stone-700 font-light leading-relaxed">
                    <p className="line-clamp-3">
                      Since 1994, PC Construction has operated with a simple mandate: delivering exceptional quality with complete cost transparency. Our proactive leadership ensures senior master builders direct every project on-site.
                    </p>
                    <div className="bg-stone-100 p-3 rounded-xl border border-stone-200 space-y-1.5">
                      <span className="font-semibold text-stone-900 uppercase font-mono text-[10px] block">
                        INSTITUTIONAL REGISTRATIONS:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 font-mono text-[11px] text-stone-800">
                        <li>&bull; Master Builders Association (MBA) Gold Member</li>
                        <li>&bull; National Home Builders Registration Council (NHBRC #10948)</li>
                        <li>&bull; Thatchers Association of South Africa (TASA Master)</li>
                        <li>&bull; SATAS Official Chemical Fire Retardant Certified</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border border-stone-200 h-full max-h-[190px] min-h-[150px]">
                    <img
                      src="/images/pc_hero_roofing_timber_1788880244340.jpg"
                      alt="Master Building Execution"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-light">
                      On-site Quality Auditing & Hand-Finished Joinery
                    </div>
                  </div>
                </div>

                <div className="bg-stone-900 text-white p-2.5 px-4 rounded-xl flex items-center justify-between shrink-0">
                  <span className="text-xs font-light">Transparent budget tracking & guaranteed completion timelines.</span>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">100% ON-TIME RECORD &check;</span>
                </div>
              </div>
            )}

            {/* Page 6: Director Message, Regional Offices & Inquiries */}
            {currentPage === 6 && (
              <div className="flex-1 flex flex-col justify-between space-y-3 overflow-hidden">
                <div className="border-b border-stone-300 pb-2 flex items-center justify-between shrink-0">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-amber-800 uppercase font-semibold">
                      DIRECT CONSULTATION & INQUIRIES
                    </span>
                    <h3 className="text-base md:text-lg font-light tracking-wide text-stone-900">
                      Regional Headquarter Offices & Executive Leadership
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono bg-stone-900 text-white px-3 py-1 rounded-full shrink-0">
                    SPREAD 06 OF {totalPages}
                  </span>
                </div>

                {/* Director Message Section */}
                <div className="bg-stone-100/90 border border-stone-200 rounded-xl p-3.5 flex items-center space-x-4 shrink-0 shadow-sm">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-amber-600/60 shrink-0 shadow">
                    <img
                      src={currentPreset.director.headshot}
                      alt={currentPreset.director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[10px] font-mono tracking-widest text-amber-800 font-bold uppercase">
                        A MESSAGE FROM OUR DIRECTOR
                      </span>
                      <span className="text-xs font-semibold text-stone-900 font-sans truncate">
                        {currentPreset.director.name} &bull; <span className="text-stone-600 font-normal">{currentPreset.director.title}</span>
                      </span>
                    </div>
                    <p className="text-xs text-stone-700 italic font-light leading-relaxed">
                      &ldquo;{currentPreset.director.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Regional Offices Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
                  <div className="bg-stone-100/70 p-3 rounded-xl border border-stone-200 space-y-1">
                    <span className="text-xs font-mono font-bold text-stone-900 uppercase block">CAPE TOWN HQ</span>
                    <p className="text-[11px] text-stone-600">20 Tarentaal Crescent, Brackenfell</p>
                    <p className="text-[11px] font-mono font-bold text-amber-900 pt-0.5">+27 (0)21 919 8397</p>
                  </div>
                  <div className="bg-stone-100/70 p-3 rounded-xl border border-stone-200 space-y-1">
                    <span className="text-xs font-mono font-bold text-stone-900 uppercase block">FRANSCHHOEK</span>
                    <p className="text-[11px] text-stone-600">Main Road, Franschhoek Valley</p>
                    <p className="text-[11px] font-mono font-bold text-amber-900 pt-0.5">+27 (0)21 876 2200</p>
                  </div>
                  <div className="bg-stone-100/70 p-3 rounded-xl border border-stone-200 space-y-1">
                    <span className="text-xs font-mono font-bold text-stone-900 uppercase block">STELLENBOSCH</span>
                    <p className="text-[11px] text-stone-600">Technopark Campus</p>
                    <p className="text-[11px] font-mono font-bold text-amber-900 pt-0.5">+27 (0)21 887 1140</p>
                  </div>
                </div>

                {/* Bottom Consultation Banner */}
                <div className="bg-[#1C1917] text-white p-3.5 px-5 rounded-2xl flex items-center justify-between gap-4 shadow-xl shrink-0">
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="text-sm md:text-base font-light text-white truncate">Discuss your upcoming building project</h4>
                    <p className="text-[11px] text-stone-400 font-light truncate">Consult directly with our master builders and quantity surveyors.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-white text-stone-900 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-stone-200 transition-colors shrink-0 cursor-pointer shadow whitespace-nowrap"
                  >
                    REQUEST CONSULTATION &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Publication Footer Bar */}
            <div className="mt-4 pt-3 border-t border-stone-300 flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span>SPREAD {currentPage} OF {totalPages}</span>
              <span className="uppercase tracking-widest hidden sm:inline text-stone-600 truncate max-w-md">
                PC CONSTRUCTION | {brochure.title} | {currentPreset.badge}
              </span>
              <span>A4 HORIZONTAL SPREAD</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer Bar */}
      <div className="bg-[#1C1917] text-stone-300 border-t border-stone-800 px-4 md:px-8 py-3 flex items-center justify-between z-20 shrink-0">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="text-xs font-medium tracking-widest text-stone-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors uppercase cursor-pointer flex items-center space-x-1"
        >
          <span>&larr;</span>
          <span className="hidden sm:inline">PREVIOUS SPREAD</span>
        </button>

        {/* Page Dots / Numbers Bar for 6 Spreads */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => (
            <button
              key={pNum}
              onClick={() => setCurrentPage(pNum)}
              className={`w-7 h-7 rounded-full text-xs font-mono flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                currentPage === pNum
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700'
              }`}
            >
              0{pNum}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="text-xs font-medium tracking-widest text-stone-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors uppercase cursor-pointer flex items-center space-x-1"
        >
          <span className="hidden sm:inline">NEXT SPREAD</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

