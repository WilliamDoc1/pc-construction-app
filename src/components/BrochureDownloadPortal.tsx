import React from 'react';

interface Brochure {
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

interface BrochureDownloadPortalProps {
  brochures: Brochure[];
  onReadBrochure?: (brochure: Brochure) => void;
}

export const BrochureDownloadPortal: React.FC<BrochureDownloadPortalProps> = ({
  brochures,
  onReadBrochure,
}) => {
  return (
    <section id="downloads" className="py-12 bg-[#1C1917] text-white rounded-3xl p-8 md:p-12 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-stone-800 pb-8 gap-6">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono font-semibold text-amber-400 uppercase block">
              OFFICIAL DIGITAL LITERATURE PORTAL
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              SERVICE <span className="font-bold">PUBLICATIONS & MONOGRAPHS.</span>
            </h2>
          </div>
          <p className="text-stone-400 text-sm font-light max-w-md leading-relaxed">
            Launch our interactive A4 digital publication reader or download high-resolution PDF catalogues for each of our 4 core master building divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brochures.map((b) => (
            <div
              key={b.id}
              className="bg-stone-900/90 rounded-2xl overflow-hidden border border-stone-800 shadow-xl flex flex-col justify-between group hover:border-amber-600/50 transition-all duration-300"
            >
              <div>
                {/* Cover Image Container */}
                <div className="relative h-56 overflow-hidden bg-stone-950">
                  <img
                    src={b.coverImage}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                      {b.serviceKey?.toUpperCase() || 'PUBLICATION'}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-sm font-bold tracking-wide text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {b.title}
                  </h3>

                  {b.subtitle && (
                    <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                      {b.subtitle}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono border-y border-stone-800/80 py-2">
                    <span>{b.pageCount} PAGES</span>
                    <span>A4 SPREAD</span>
                  </div>

                  <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-3">
                    {b.description || 'Comprehensive digital publication detailing project case studies, material specifications, and architectural credits.'}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2.5">
                {onReadBrochure && (
                  <button
                    onClick={() => onReadBrochure(b)}
                    className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-white text-xs tracking-wider font-medium rounded-xl flex items-center justify-center transition-colors cursor-pointer border border-stone-700 uppercase"
                  >
                    LAUNCH READER &rarr;
                  </button>
                )}
                <a
                  href={b.pdfUrl}
                  download
                  className="w-full py-2.5 bg-white text-stone-950 hover:bg-stone-200 font-semibold text-xs tracking-wider rounded-xl flex items-center justify-center transition-colors cursor-pointer shadow-md uppercase"
                >
                  DOWNLOAD PDF ({b.fileSize})
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
