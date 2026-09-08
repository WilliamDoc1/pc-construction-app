import React from 'react';

export const PressSection: React.FC = () => {
  const articles = [
    {
      publication: 'ARCHITECTURAL DIGEST',
      title: 'Bantry Bay Sanctuary: The Masterwork of PC Residential',
      date: 'OCTOBER 2025',
      image: '/images/pc_hero_bantry_villa_1788880151974.jpg',
      quote: 'A triumph of structural engineering where concrete and glass hover effortlessly over the Atlantic Ocean.',
    },
    {
      publication: 'VISI MAGAZINE',
      title: 'Curved Glulam Mastery in the Paarl Winelands',
      date: 'FEBRUARY 2026',
      image: '/images/pc_hero_roofing_timber_1788880244340.jpg',
      quote: 'How PC Roofing & Timber created an 18-meter column-free vault using sustainable Sugargum beams.',
    },
    {
      publication: 'HOUSE & LEISURE',
      title: 'Cape Dutch Revival: Restoring Silverbay Manor',
      date: 'JUNE 2025',
      image: '/images/pc_hero_heritage_thatch_1788880344746.jpg',
      quote: 'Preserving 18th-century thatching traditions with modern fire-retardant technology.',
    },
  ];

  return (
    <section id="press" className="py-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-300 pb-8">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono font-semibold text-stone-500 uppercase block">
              MEDIA & EDITORIAL PRESS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
              FEATURED IN <span className="font-bold">LEADING PUBLICATIONS.</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Our architectural builds are regularly showcased in South Africa's and the world's most prestigious design journals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] tracking-widest font-mono text-stone-500 uppercase">
                    <span>{art.publication}</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-900">
                    {art.title}
                  </h3>
                  <blockquote className="text-xs italic text-stone-600 font-light border-l-2 border-stone-400 pl-3 py-1">
                    "{art.quote}"
                  </blockquote>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => alert(`Opening press article: ${art.title}`)}
                  className="text-xs tracking-wider font-semibold text-stone-900 hover:text-amber-800 transition-colors cursor-pointer uppercase"
                >
                  READ EDITORIAL FEATURE &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
