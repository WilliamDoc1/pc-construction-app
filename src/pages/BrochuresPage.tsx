import React from 'react';
import { BrochureDownloadPortal } from '../components/BrochureDownloadPortal';
import db from '../data/db.json';

interface BrochuresPageProps {
  onOpenBrochureReader: (brochure: any) => void;
}

export const BrochuresPage: React.FC<BrochuresPageProps> = ({ onOpenBrochureReader }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="max-w-4xl space-y-4">
          <div className="text-xs font-mono tracking-widest text-stone-500 uppercase">
            DIGITAL CATALOGUE PORTAL
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-900">
            Digital Catalogue & Publications
          </h1>
          <p className="text-base md:text-lg font-light text-stone-600">
            Launch our interactive 6-spread digital reader or download high-resolution PDF catalogues for each of our four core divisions: PC Residential, PC Commercial, PC Roofing & Timber, and PC Thatch & Heritage.
          </p>
        </div>

        <BrochureDownloadPortal
          brochures={db.brochures}
          onReadBrochure={onOpenBrochureReader}
        />
      </div>
    </div>
  );
};
