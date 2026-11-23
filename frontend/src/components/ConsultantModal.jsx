import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export default function ConsultantModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    notes: ''
  });
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // Reset error when modal closes or opens
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setPhoneError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, phone: val }));
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate phone number: at least 10 digits
    const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 10) {
      setPhoneError('Please enter a valid 10-digit WhatsApp number');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);

    // Smooth submission experience
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 350);
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
        className="relative bg-white rounded-2xl max-w-[430px] w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Compact Header: ~25% reduced height & padding */}
        <div className="bg-gradient-to-r from-[#0052CC] via-[#005AE0] to-[#0062FF] px-4.5 sm:px-5 py-3.5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-base font-bold leading-snug">
                Book Free Consultation Session
              </h3>
              <p className="text-[11px] text-blue-100 leading-tight">
                Direct 1-on-1 strategy with our Certified Scheme Consultant
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

        {/* Form Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
            
            {/* ROW 1: Full Name * & Email Address * */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0062FF]/20 focus:border-[#0062FF] transition-all"
                />
              </div>

              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rajesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0062FF]/20 focus:border-[#0062FF] transition-all"
                />
              </div>
            </div>

            {/* ROW 2: WhatsApp Phone Number * & Business / Entity Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  WhatsApp Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full text-xs sm:text-[13px] px-3 py-2 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    phoneError 
                      ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500' 
                      : 'border-slate-200 focus:ring-[#0062FF]/20 focus:border-[#0062FF]'
                  }`}
                />
                {phoneError && (
                  <p className="text-[10px] text-rose-500 mt-0.5">{phoneError}</p>
                )}
              </div>

              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Business / Entity Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Industries"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0062FF]/20 focus:border-[#0062FF] transition-all"
                />
              </div>
            </div>

            {/* ROW 3: Brief Requirement (Optional) — Full Width */}
            <div>
              <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Brief Requirement <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                rows="2"
                placeholder="Briefly describe your project or machinery investment..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-xs sm:text-[13px] px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0062FF]/20 focus:border-[#0062FF] transition-all resize-none"
              />
            </div>

            {/* ROW 4: Confirm Appointment Booking — Full Width */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] active:bg-[#0040A3] text-white font-bold text-xs sm:text-[13px] shadow-[0_4px_14px_rgba(0,98,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,98,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>{isSubmitting ? 'Scheduling Session...' : 'Confirm Appointment Booking'}</span>
              </button>

              {/* FOOTER: 100% Confidential message */}
              <p className="text-center text-[10.5px] text-slate-500 mt-2 flex items-center justify-center gap-1">
                <span>🔒</span>
                <span>100% Confidential. We never share your project specifics with third parties.</span>
              </p>
            </div>

          </form>
        ) : (
          <div className="p-5 text-center space-y-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Appointment Confirmed!</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our Senior Scheme Consultant will reach out on WhatsApp / Call shortly.
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400 font-medium">Client:</span>
                <span className="font-bold text-slate-800">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-medium">Email:</span>
                <span className="font-bold text-slate-800">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-medium">WhatsApp:</span>
                <span className="font-bold text-slate-800">{formData.phone}</span>
              </div>
              {formData.businessName && (
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Entity:</span>
                  <span className="font-bold text-slate-800">{formData.businessName}</span>
                </div>
              )}
              {formData.notes && (
                <div className="pt-1 border-t border-slate-200/60">
                  <span className="text-slate-400 font-medium block mb-0.5">Note:</span>
                  <p className="text-slate-700 italic text-[11px] line-clamp-2">{formData.notes}</p>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={`https://wa.me/919999999999?text=Hello%20AB%20Consultancy,%20I%20have%20booked%20a%20consultation%20session%20for%20${encodeURIComponent(formData.businessName || formData.name)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Update</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
