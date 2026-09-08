import React, { useState } from 'react';
import db from '../data/db.json';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'PC Residential',
    location: 'Cape Town',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FCFBF7] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4">
          <div className="text-xs font-mono tracking-widest text-stone-500 uppercase">
            REGIONAL OFFICE DIRECTORY & CONSULTATION PORTAL
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-900">
            Initiate a Project Consultation
          </h1>
          <p className="text-base md:text-lg font-light text-stone-600">
            Connect directly with our master builders, structural timber engineers, and quantity surveyors across our Western Cape regional offices.
          </p>
        </div>

        {/* Regional Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {db.company.offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-stone-300 shadow-sm space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-mono tracking-widest text-amber-700 font-bold uppercase">
                  REGIONAL HUB 0{idx + 1}
                </span>
                <span className="text-xs font-mono text-stone-400">SA</span>
              </div>

              <h3 className="text-2xl font-light text-stone-900">{office.city}</h3>

              <div className="space-y-3 text-xs text-stone-600 font-light">
                <div className="space-y-0.5">
                  <span className="font-mono text-stone-400 uppercase text-[10px] block">ADDRESS</span>
                  <span>{office.address}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono text-stone-400 uppercase text-[10px] block">DIRECT LINE</span>
                  <a href={`tel:${office.phone}`} className="font-mono font-semibold text-stone-900 hover:underline">
                    {office.phone}
                  </a>
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono text-stone-400 uppercase text-[10px] block">HOURS</span>
                  <span>Mon &ndash; Fri: 08:00 &ndash; 17:00 SAST</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Form Section */}
        <div className="bg-[#1C1917] text-white p-8 md:p-12 rounded-2xl shadow-2xl border border-stone-800 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              EXECUTIVE PROJECT TAKEOFF
            </span>
            <h2 className="text-3xl font-light text-white leading-tight">
              Request Architectural Consultation
            </h2>
            <p className="text-sm font-light text-stone-400 leading-relaxed">
              Submit your architectural drawings, tender schedules, or project brief for a formal preliminary review by our master building executive team.
            </p>

            <div className="pt-6 border-t border-stone-800 space-y-3 text-xs text-stone-300 font-mono">
              <div>&bull; NDA & Confidentiality Guaranteed</div>
              <div>&bull; Turnaround within 48 Business Hours</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {formSubmitted ? (
              <div className="bg-stone-900 p-8 rounded-xl border border-stone-800 text-center space-y-4 my-auto">
                <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center font-mono font-bold mx-auto">
                  OK
                </div>
                <h3 className="text-xl font-light text-white">Consultation Request Received</h3>
                <p className="text-xs text-stone-400 max-w-md mx-auto font-light">
                  Thank you. A PC Construction quantity surveyor will review your submission and contact you within 48 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-stone-800 text-xs font-mono text-stone-200 rounded-full hover:bg-stone-700 uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono text-stone-400 uppercase block mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Venter"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-stone-400 uppercase block mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@architecture.co.za"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono text-stone-400 uppercase block mb-2">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+27 82 000 0000"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-stone-400 uppercase block mb-2">TARGET DIVISION</label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="PC Residential">PC Residential (Coastal Estates)</option>
                      <option value="PC Roofing & Timber">PC Roofing & Timber (Glulam & Trusses)</option>
                      <option value="PC Heritage & Thatch">PC Heritage & Thatch (Restorations)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-stone-400 uppercase block mb-2">PROJECT DETAILS / BRIEF</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site location, architect, approximate square meters, and desired timeframe..."
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-stone-900 font-mono font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-stone-200 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  TRANSMIT CONSULTATION BRIEF &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
