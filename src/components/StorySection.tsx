import React from 'react';

interface StorySectionProps {
  company: {
    name: string;
    description: string;
    establishedYear: number;
    accreditations: string[];
  };
}

export const StorySection: React.FC<StorySectionProps> = ({ company }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Metadata Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/pc_hero_roofing_timber_1788880244340.jpg"
                alt="PC Construction Craftsmanship"
                className="w-full h-[480px] md:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white p-6 bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-700/60">
                <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-sans font-semibold">
                  OUR PHILOSOPHY
                </p>
                <p className="text-sm font-light text-stone-200 mt-2 leading-relaxed italic">
                  "Excellence is not an accident. It is the result of high intention, sincere effort, and intelligent execution."
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 md:-right-6 bg-[#1C1917] text-white p-6 rounded-2xl shadow-2xl border border-stone-800 hidden sm:block">
              <span className="block text-4xl font-light font-sans text-amber-400">
                32+
              </span>
              <span className="text-[11px] tracking-[0.2em] font-semibold font-sans text-stone-300 uppercase block mt-1">
                YEARS OF EXCELLENCE
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] font-sans font-semibold text-stone-500 uppercase block">
                OUR STORY & LEADERSHIP
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                TIMELESS DESIGN, <br />
                <span className="font-bold">TRUSTED CRAFTSMANSHIP.</span>
              </h2>
            </div>

            <p className="text-stone-700 text-base md:text-lg font-light leading-relaxed">
              {company.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div className="space-y-1.5">
                <div className="text-stone-900 font-bold text-xs tracking-[0.2em] font-sans uppercase">
                  [ 01 &bull; QUALITY ASSURANCE ]
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Continuous auditing ensures our engineers and carpentry teams master the highest SABS & SANS industry standards.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-stone-900 font-bold text-xs tracking-[0.2em] font-sans uppercase">
                  [ 02 &bull; TURNKEY EXECUTION ]
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Seamlessly integrating design, structural engineering, procurement, and physical construction under one master builder umbrella.
                </p>
              </div>
            </div>

            {/* Accreditations Row */}
            <div className="pt-6 border-t border-stone-200">
              <p className="text-[11px] tracking-[0.25em] font-sans font-semibold text-stone-600 uppercase mb-4">
                OFFICIAL ACCREDITATIONS & CERTIFICATIONS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.accreditations.map((acc, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-stone-800">
                    <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0"></span>
                    <span className="font-medium tracking-wide">{acc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
