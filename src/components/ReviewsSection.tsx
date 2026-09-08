import React from 'react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      quote:
        'Executing post-tensioned concrete cantilevers over the cliffs of Bantry Bay required extraordinary structural precision. PC Construction delivered ARRCC’s design with flawless attention to detail and zero compromise on architectural intent.',
      author: 'Stefan Antoni',
      title: 'Principal Architect, ARRCC',
      project: 'Wave Villa — Bantry Bay',
      category: 'Luxury Residential',
    },
    {
      id: 'rev-2',
      quote:
        'The sweeping 18-meter curved glulam roof arches at Pearl Valley demanded CNC milling accuracy and invisible flitch plate engineering. PC Roofing & Timber is the premier contractor in South Africa for non-conventional timber structures.',
      author: 'Henk Kritzinger',
      title: 'Lead Architect, Kritzinger Architects',
      project: 'Pearl Valley Estate — Paarl Winelands',
      category: 'Roofing & Timber',
    },
    {
      id: 'rev-3',
      quote:
        'Restoring historic Cape Dutch gables while installing a 350mm hand-bound Cape reed thatched roof requires decades of specialized craft. PC Thatchers preserved architectural heritage while incorporating full SATAS fire-retardant compliance.',
      author: 'Wynand Wilsenach',
      title: 'Heritage Architect & Restoration Specialist',
      project: 'Silverbay Manor — Shelley Point',
      category: 'Thatch & Heritage',
    },
    {
      id: 'rev-4',
      quote:
        'PC Commercial delivered our boutique winelands tasting pavilion on-budget and three weeks ahead of harvest season. Their proactive site management and transparent cost accounting made the commercial development an unqualified success.',
      author: 'Jean-Luc Du Preez',
      title: 'Estate Director, Constantia Winelands',
      project: 'Constantia Hospitality Pavilion',
      category: 'Commercial',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 border-b border-stone-300 pb-8 gap-6">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono font-semibold text-stone-500 uppercase block">
              ARCHITECT & CLIENT ENDORSEMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
              REVIEWS & <span className="font-bold">COLLABORATIONS.</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm font-light max-w-md mt-4 lg:mt-0 leading-relaxed">
            Testimonials and technical reviews from South Africa’s leading architects, quantity surveyors, and estate owners.
          </p>
        </div>

        {/* 4-Column Editorial Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="text-amber-800 text-3xl font-serif leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-stone-700 text-xs md:text-sm font-light leading-relaxed italic">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-1">
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {rev.author}
                </h3>
                <p className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                  {rev.title}
                </p>
                <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest pt-1">
                  {rev.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
