import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ElevationCrossfadeSliderProps {
  photoUrl: string;
  sketchUrl: string;
  projectTitle: string;
}

export const ElevationCrossfadeSlider: React.FC<ElevationCrossfadeSliderProps> = ({
  photoUrl,
  sketchUrl,
  projectTitle,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full bg-[#1C1917] p-6 md:p-10 rounded-2xl text-stone-100 shadow-2xl border border-stone-800">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div>
          <div className="text-xs font-mono tracking-widest text-stone-400 uppercase mb-1">
            ARCHITECTURAL ELEVATION VS. BUILT COMPARISON
          </div>
          <h3 className="text-xl md:text-2xl font-light tracking-wide text-white">
            {projectTitle} — <span className="font-semibold text-stone-300">Spatial Inspection</span>
          </h3>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono tracking-wider text-stone-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            <span>HAND-DRAWN BLUEPRINT ({Math.round(100 - sliderPos)}%)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block"></span>
            <span>BUILT PHOTOGRAPHY ({Math.round(sliderPos)}%)</span>
          </div>
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[380px] md:h-[540px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-stone-700/60 shadow-inner group"
      >
        {/* Background Image: Built Photography */}
        <img
          src={photoUrl}
          alt={`${projectTitle} Built Photography`}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Clipped Top Image: Elevation Sketch */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none select-none transition-all duration-75"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={sketchUrl}
            alt={`${projectTitle} Architectural Elevation Sketch`}
            className="absolute inset-y-0 left-0 h-full object-cover filter contrast-125 brightness-90 max-w-none"
            style={{ width: `${containerWidth}px` }}
          />
        </div>

        {/* Divider Slider Handle Bar */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute w-10 h-10 -ml-[1px] bg-white rounded-full text-stone-900 shadow-2xl flex items-center justify-center border-2 border-stone-900 group-hover:scale-110 transition-transform">
            <div className="flex space-x-0.5 text-xs font-mono font-bold">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Instructions */}
      <div className="mt-4 flex items-center justify-between text-xs text-stone-400 font-light">
        <p className="tracking-wider">
          Drag slider horizontally to inspect architectural fidelity from elevation drawing to finished build.
        </p>
      </div>
    </div>
  );
};
