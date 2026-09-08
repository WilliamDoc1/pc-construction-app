import React from 'react';

interface Division {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
}

interface DivisionTriptychProps {
  divisions: Division[];
  onSelectDivisionCategory: (category: string) => void;
}

export const DivisionTriptych: React.FC<DivisionTriptychProps> = ({
  divisions,
  onSelectDivisionCategory,
}) => {
  return (
    <section className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-800 pb-8">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono text-stone-400 uppercase block">
              OPERATING DIVISIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white">
              FOUR SPECIALIZED <br />
              <span className="font-bold">CENTRES OF EXCELLENCE.</span>
            </h2>
          </div>
          <p className="text-stone-400 text-sm font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            From bespoke luxury coastal architecture and boutique commercial projects to complex timber roof structures and master thatching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((div) => (
            <div
              key={div.id}
              onClick={() => onSelectDivisionCategory(div.id)}
              className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-800"
            >
              {/* Background Image */}
              <img
                src={div.heroImage}
                alt={div.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-end">
                <span className="text-[11px] font-medium tracking-widest text-stone-300 group-hover:text-white uppercase">
                  EXPLORE &rarr;
                </span>
              </div>

              {/* Bottom Content Block */}
              <div className="absolute bottom-8 left-6 right-6 space-y-3 text-white">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-100 transition-colors">
                  {div.title}
                </h3>
                <p className="text-[11px] tracking-wider font-light text-stone-300 uppercase">
                  {div.tagline}
                </p>
                <p className="text-stone-400 text-xs font-light line-clamp-3 leading-relaxed pt-2 border-t border-stone-800">
                  {div.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
