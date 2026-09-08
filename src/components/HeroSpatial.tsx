import React, { useState, useEffect } from 'react';

interface HeroSpatialProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const HeroSpatial: React.FC<HeroSpatialProps> = ({
  onExploreProjects,
  onOpenContact,
}) => {
  const images = [
    {
      url: '/images/pc_hero_bantry_villa_1788880151974.jpg',
      title: 'WAVE VILLA, BANTRY BAY',
      caption: 'Luxury Coastal Estate Architecture',
    },
    {
      url: '/images/pc_hero_roofing_timber_1788880244340.jpg',
      title: 'PEARL VALLEY TIMBER ESTATE',
      caption: 'Non-Conventional Curved Glulam Engineering',
    },
    {
      url: '/images/pc_hero_heritage_thatch_1788880344746.jpg',
      title: 'SILVERBAY HERITAGE MANOR',
      caption: 'Cape Dutch Historic Thatching Restoration',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start">
      {/* Background Images Crossfade */}
      {images.map((img, idx) => (
        <div
          key={img.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-10000`}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40" />
        </div>
      ))}

      {/* Main Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-white pt-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-tight">
            THE ARCHITECTURE OF <br />
            <span className="font-bold tracking-wider text-stone-100">
              UNCOMPROMISING LUXURY.
            </span>
          </h1>

          <p className="text-stone-300 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            South Africa’s premier construction company specializing in ultra-luxury coastal residences, boutique commercial developments, engineered timber structures, and historic thatch restorations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onExploreProjects}
              className="px-8 py-4 bg-white text-stone-950 font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-stone-200 transition-all shadow-xl flex items-center justify-center cursor-pointer"
            >
              <span>EXPLORE PORTFOLIO</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 border border-white/40 hover:border-white text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>COMMISSION A PROJECT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
