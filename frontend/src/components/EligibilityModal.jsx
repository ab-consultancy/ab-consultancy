import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calculator, ArrowRight } from 'lucide-react';

export default function EligibilityModal({ isOpen, onClose, onScheduleConsultation }) {
  const [businessType, setBusinessType] = useState('manufacturing');
  const [area, setArea] = useState('rural');
  const [category, setCategory] = useState('women');
  const [loanAmount, setLoanAmount] = useState(25); // in Lakhs
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({ name: '', phone: '', email: '', city: '' });

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset submitted state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Subsidy calculation logic based on Indian Government PMEGP guidelines
  // Rural: Special category (Women, SC/ST, OBC, Minorities, Ex-Servicemen) = 35%
  // Rural: General category = 25%
  // Urban: Special category = 25%
  // Urban: General category = 15%
  let subsidyPercent = 15;
  if (area === 'rural') {
    subsidyPercent = (category === 'general') ? 25 : 35;
  } else {
    subsidyPercent = (category === 'general') ? 15 : 25;
  }

  // Max project limit under PMEGP: 50L for manufacturing, 20L for service
  const maxProjectLimit = businessType === 'manufacturing' ? 50 : 20;
  const eligibleAmountForPmegp = Math.min(loanAmount, maxProjectLimit);
  const estimatedSubsidy = ((eligibleAmountForPmegp * subsidyPercent) / 100).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-[504px] w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Compact Header: ~25% reduced height & proportional padding */}
        <div className="bg-gradient-to-r from-brand-500 to-blue-700 px-4.5 sm:px-5 py-3 sm:py-3.5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-base font-bold leading-tight">
                Government Scheme Eligibility Calculator
              </h3>
              <p className="text-[11px] text-blue-100 leading-tight">
                Check PMEGP, CGTMSE & State Subsidies Instantly
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer ml-2"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {!submitted ? (
          <div className="p-3.5 sm:p-4 space-y-2.5 sm:space-y-3 max-h-[85vh] overflow-y-auto">
            
            {/* Step 1: Business Sector */}
            <div>
              <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                1. Select Sector
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'manufacturing', label: 'Manufacturing', limit: 'Max ₹50L PMEGP' },
                  { id: 'service', label: 'Service Business', limit: 'Max ₹20L PMEGP' },
                  { id: 'trading', label: 'Trading / MSME', limit: 'CGTMSE up to ₹5 Cr' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBusinessType(item.id)}
                    className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      businessType === item.id
                        ? 'border-brand-500 bg-brand-50 text-brand-600 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs sm:text-[12.5px] font-semibold leading-tight">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{item.limit}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Location & Category Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  2. Unit Location
                </label>
                <div className="flex gap-1.5">
                  {[
                    { id: 'rural', label: 'Rural Area (Higher Subsidy)' },
                    { id: 'urban', label: 'Urban Area' },
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setArea(loc.id)}
                      className={`flex-1 py-1.5 px-2 text-[11px] sm:text-xs rounded-lg border text-center transition-all cursor-pointer ${
                        area === loc.id
                          ? 'border-brand-500 bg-brand-50 text-brand-600 font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  3. Promoter Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-[11px] sm:text-xs font-medium py-1.5 px-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20"
                >
                  <option value="women">Women Entrepreneur (Special 35% / 25%)</option>
                  <option value="sc_st">SC / ST / Ex-Serviceman (Special 35% / 25%)</option>
                  <option value="obc">OBC / Minority (Special 35% / 25%)</option>
                  <option value="general">General Category (25% / 15%)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Required Loan / Project Amount */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                  4. Estimated Project / Loan Requirement
                </label>
                <span className="text-sm sm:text-[15px] font-extrabold text-brand-600">
                  ₹{loanAmount} Lakhs
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>₹5 Lakhs</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹1 Crore+</span>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/50 rounded-xl p-2.5 sm:p-3 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div>
                <div className="text-[11px] font-semibold text-brand-700">
                  Estimated Non-Repayable Government Subsidy
                </div>
                <div className="text-xl sm:text-[22px] font-black text-slate-900 mt-0.5 leading-none">
                  ₹{estimatedSubsidy} Lakhs <span className="text-[11px] font-bold text-emerald-600">({subsidyPercent}% Grant)</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                  Eligible for 100% Collateral-Free Bank Sanction under CGTMSE guarantee.
                </p>
              </div>

              <div className="text-left sm:text-right flex-shrink-0">
                <div className="text-[10px] font-semibold text-slate-500">Own Contribution Needed</div>
                <div className="text-xs sm:text-[13px] font-bold text-slate-800">
                  {category === 'general' ? '10% (General)' : '5% (Special / Women)'}
                </div>
              </div>
            </div>

            {/* Contact Lead Form */}
            <form onSubmit={handleSubmit} className="space-y-2 pt-0.5">
              <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-600">
                Claim Free Detailed Scheme Report & DPR Review
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Full Name / Promoter Name"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200 text-xs sm:text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Mobile Number"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200 text-xs sm:text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-bold text-xs sm:text-[13px] shadow-[0_4px_14px_rgba(0,98,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,98,255,0.4)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Detailed Sanction Roadmap & Free DPR Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        ) : (
          <div className="p-5 text-center space-y-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Eligibility Report Generated!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1 leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{contact.name}</span>. 
                Our Senior Scheme Consultant will reach out on <span className="font-semibold text-brand-600">{contact.phone}</span> within 2 business hours with your customized Bank DPR & Subsidy filing blueprint.
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setSubmitted(false);
                }}
                className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setSubmitted(false);
                  if (onScheduleConsultation) onScheduleConsultation();
                }}
                className="px-5 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
              >
                Book 1-on-1 Video Consultation
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
