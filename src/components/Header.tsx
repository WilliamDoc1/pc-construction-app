import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenBrochures?: () => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrochures, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/luxury-residential', label: 'LUXURY RESIDENTIAL' },
    { path: '/commercial', label: 'COMMERCIAL' },
    { path: '/roofing-timber', label: 'ROOFING & TIMBER' },
    { path: '/thatch', label: 'THATCH' },
    { path: '/reviews', label: 'REVIEWS' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1C1917]/95 backdrop-blur-md py-4 border-b border-stone-800/80 text-stone-100 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-7 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo Signature */}
        <Link to="/" className="flex items-center space-x-3 shrink-0 group text-left cursor-pointer pr-4">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white">PC</span>
            <span className="h-5 w-[1px] bg-stone-400/40 block"></span>
            <span className="text-xs md:text-sm tracking-[0.3em] font-medium text-stone-300 group-hover:text-white transition-colors uppercase">
              CONSTRUCTION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-[10px] xl:text-[11px] tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-colors py-1 cursor-pointer whitespace-nowrap ${
                  isActive ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0 pl-2">
          <Link
            to="/downloads"
            onClick={onOpenBrochures}
            className="px-4 py-2 text-[10px] tracking-[0.2em] font-medium uppercase text-stone-200 hover:text-white border border-stone-600/70 hover:border-white rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            CATALOGUE
          </Link>
          <Link
            to="/contact"
            onClick={onOpenContact}
            className="px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-900 bg-white hover:bg-stone-200 rounded-full transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Toggle Text */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-4 py-1.5 border border-stone-600 text-xs tracking-widest text-white hover:text-stone-300 transition-colors cursor-pointer rounded uppercase font-medium"
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#1C1917] z-50 flex flex-col p-8 space-y-6 animate-fade-in border-t border-stone-800">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-sm tracking-[0.2em] font-light text-stone-200 hover:text-white border-b border-stone-800 pb-2.5 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col space-y-3 border-t border-stone-800">
            <Link
              to="/downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 text-xs tracking-widest uppercase text-white border border-stone-700 rounded-lg font-medium"
            >
              DOWNLOAD DIGITAL CATALOGUE
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 text-xs tracking-widest uppercase text-stone-900 bg-white font-semibold rounded-lg"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
