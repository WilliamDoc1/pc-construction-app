import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  offices: Array<{ city: string; phone: string; address: string }>;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  offices,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'Residential Construction',
    location: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/90 backdrop-blur-xl animate-fade-in flex items-center justify-center p-4 md:p-8">
      <div className="bg-[#1C1917] border border-stone-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs tracking-widest font-medium rounded-full transition-colors z-10 cursor-pointer uppercase"
        >
          CLOSE
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Office Contacts */}
          <div className="md:col-span-5 bg-stone-900 p-8 md:p-10 space-y-8 border-b md:border-b-0 md:border-r border-stone-800">
            <div className="space-y-2">
              <span className="text-xs tracking-[0.25em] font-mono text-amber-400 uppercase">
                COMMISSION A PROJECT
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                REGIONAL OFFICES & CONSULTATION
              </h2>
            </div>

            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Whether you are an architect submitting tender documents or a private client planning a luxury estate, our master building team is at your service.
            </p>

            <div className="space-y-6 pt-4 border-t border-stone-800">
              {offices.map((off, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <span className="font-semibold text-white tracking-wider font-mono uppercase block">
                    {off.city} OFFICE
                  </span>
                  <p className="text-stone-400 font-light">
                    <span>{off.address}</span>
                  </p>
                  <p className="text-stone-300 font-mono font-semibold">
                    <span>{off.phone}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-800 text-xs text-stone-400 space-y-2 font-mono">
              <div>EMAIL: info@pcconstruction.co.za</div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7 p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold">
                  OK
                </div>
                <h3 className="text-2xl font-bold text-white">CONSULTATION REQUEST RECEIVED</h3>
                <p className="text-stone-400 text-xs font-light max-w-sm">
                  Thank you for reaching out to PC Construction. A senior construction executive will review your brief and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-semibold tracking-tight text-white mb-4">
                  REQUEST A PROJECT BRIEF CONSULTATION
                </h3>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Architect Stefan Antoni"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-stone-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-stone-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+27 82 123 4567"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-stone-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">TARGET DIVISION</label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-stone-500"
                    >
                      <option value="Residential Construction">PC Residential (Villas & Estates)</option>
                      <option value="Roofing & Timber">PC Roofing & Timber (Glulam & Trusses)</option>
                      <option value="Heritage & Thatch">PC Heritage & Thatch (Restorations)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">PROJECT LOCATION</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Constantia / Franschhoek"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-stone-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">PROJECT BRIEF DETAILS</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architectural brief, target footprint m², or engineering timeline..."
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-stone-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-stone-950 font-semibold text-xs tracking-[0.2em] rounded-xl flex items-center justify-center hover:bg-stone-200 transition-colors cursor-pointer shadow-xl uppercase"
                >
                  SUBMIT CONSULTATION BRIEF &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
