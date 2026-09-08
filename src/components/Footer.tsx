import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenBrochures?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochures }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-light tracking-widest text-white">PC</span>
              <span className="h-6 w-[1px] bg-stone-600"></span>
              <span className="text-sm tracking-[0.25em] font-medium text-stone-300 uppercase">
                CONSTRUCTION
              </span>
            </div>
            <p className="text-stone-400 text-xs font-light max-w-sm leading-relaxed">
              PC Construction is South Africa's premier master builder specializing in high-end luxury coastal residential architecture, non-conventional timber roof engineering, and Cape Dutch historic thatch restorations.
            </p>
            <p className="text-[11px] font-mono text-stone-500">
              REGISTRATION: NHBRC 10948 &bull; MBA MEMBER &bull; TASA CERTIFIED
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs tracking-[0.25em] font-mono font-semibold text-white uppercase block">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-stone-400 font-light tracking-wider">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  ABOUT PC CONSTRUCTION
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  PROJECTS PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="/luxury-residential" className="hover:text-white transition-colors">
                  LUXURY RESIDENTIAL
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-white transition-colors">
                  COMMERCIAL DEVELOPMENTS
                </Link>
              </li>
              <li>
                <Link to="/roofing-timber" className="hover:text-white transition-colors">
                  ROOFING & TIMBER ENGINEERING
                </Link>
              </li>
              <li>
                <Link to="/thatch" className="hover:text-white transition-colors">
                  THATCH & HERITAGE RESTORATION
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  REVIEWS & ENDORSEMENTS
                </Link>
              </li>
              <li>
                <Link to="/downloads" onClick={onOpenBrochures} className="hover:text-white transition-colors">
                  DIGITAL CATALOGUE PORTAL
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  CONTACT & REGIONAL OFFICES
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Regional Offices */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs tracking-[0.25em] font-mono font-semibold text-white uppercase block">
              REGIONAL HEADQUARTERS
            </span>
            <div className="text-xs text-stone-400 font-light space-y-3">
              <div>
                <p className="font-semibold text-white uppercase font-mono">CAPE TOWN</p>
                <p>20 Tarentaal Crescent, Brackenfell &bull; +27 (0)21 919 8397</p>
              </div>
              <div>
                <p className="font-semibold text-white uppercase font-mono">FRANSCHHOEK</p>
                <p>Main Road, Franschhoek Valley &bull; +27 (0)21 876 2200</p>
              </div>
              <div>
                <p className="font-semibold text-white uppercase font-mono">STELLENBOSCH</p>
                <p>Technopark Campus &bull; +27 (0)21 887 1140</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 font-light">
          <p>&copy; {new Date().getFullYear()} PC Construction (Pty) Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white text-xs font-medium rounded-full border border-stone-800 transition-colors cursor-pointer uppercase"
            >
              TOP &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
