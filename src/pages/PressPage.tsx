import React from 'react';
import { PressSection } from '../components/PressSection';

export const PressPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="max-w-4xl space-y-4">
          <div className="text-xs font-mono tracking-widest text-stone-500 uppercase">
            PRESS & EDITORIAL MEDIA
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-900">
            Featured In Premier Publications
          </h1>
          <p className="text-base md:text-lg font-light text-stone-600">
            Our architectural estates and structural timber engineering regularly feature in leading global and African design publications.
          </p>
        </div>

        <PressSection />
      </div>
    </div>
  );
};
