import React from 'react';

export interface CapabilityItem {
  number: string;
  title: string;
  desc: string;
  metric?: string;
  image?: string;
}

interface AsymmetricCapabilitiesShowcaseProps {
  sectionTitle: string;
  sectionSubtitle: string;
  capabilities: CapabilityItem[];
  heroImage: string;
}

export const AsymmetricCapabilitiesShowcase: React.FC<AsymmetricCapabilitiesShowcaseProps> = ({
  sectionTitle,
  sectionSubtitle,
  capabilities,
  heroImage,
}) => {
  if (!capabilities || capabilities.length === 0) return null;

  const featured = capabilities[0];
  const secondary = capabilities.slice(1);

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b border-stone-300 pb-4">
        <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">
          {sectionSubtitle}
        </span>
        <h2 className="text-3xl font-light text-stone-900 mt-1">{sectionTitle}</h2>
      </div>

      {/* Asymmetric Grid Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Large Featured Capability Card (Spans 7 cols) */}
        <div className="lg:col-span-7 bg-[#1C1917] text-white rounded-2xl overflow-hidden relative shadow-xl min-h-[420px] flex flex-col justify-end p-8 md:p-12 group border border-stone-800">
          <img
            src={featured.image || heroImage}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-transparent"></div>

          <div className="relative z-10 space-y-3">
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide">
              {featured.title}
            </h3>
            <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed max-w-xl">
              {featured.desc}
            </p>
          </div>
        </div>

        {/* 3 Staggered Technical Cards (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
          {secondary.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-stone-400/40 transition-all duration-300 space-y-3 group"
            >
              <div className="border-b border-stone-100 pb-2">
                <span className="text-xs font-mono font-bold text-stone-400 tracking-wider">
                  {cap.number}
                </span>
              </div>
              <h4 className="text-lg font-medium text-stone-900 group-hover:text-stone-950 transition-colors">
                {cap.title}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
