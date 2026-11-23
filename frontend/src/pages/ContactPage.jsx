import React, { useState, useEffect } from 'react';
import { useSEO } from '../utils/seo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  Calendar,
  Building,
  User,
  HelpCircle,
  FileText,
  ChevronDown,
  ExternalLink,
  Landmark
} from 'lucide-react';

// Reusable Animated Eyebrow Badge (Character Reveal & Pill Expansion)
function AnimatedBadge({ icon: Icon, text, className = '', isHero = false, isDark = false }) {
  return (
    <div 
      className={`relative inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-semibold w-fit select-none overflow-hidden ${
        isHero 
          ? 'text-[11px] xs:text-xs sm:text-[12.5px] mb-3.5 text-[#0062FF]' 
          : 'text-xs uppercase tracking-wider mb-2'
      } ${isDark ? 'text-[#93C5FD]' : 'text-[#0062FF]'} ${className}`}
      aria-label={text}
    >
      <div 
        className={`absolute inset-0 rounded-full border shadow-xs animate-badge-pill pointer-events-none z-0 ${
          isHero 
            ? 'bg-[#EBF3FE] border-[#D5E5FD] shadow-[0_1px_2px_rgba(0,98,255,0.05)]' 
            : isDark
            ? 'bg-white/10 border-white/20 shadow-xs'
            : 'bg-blue-50/90 border-blue-200/70'
        }`} 
      />
      {Icon && (
        <span className={`relative z-10 w-4 h-4 xs:w-4.5 xs:h-4.5 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs ${
          isDark ? 'bg-blue-500/30 text-white' : 'bg-[#00A3FF] text-white'
        }`}>
          <Icon className="w-2.5 h-2.5" />
        </span>
      )}
      <span className="relative z-10 inline-flex items-center" aria-hidden="true">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="animate-badge-char"
            style={{ animationDelay: `${(isHero ? 350 : 150) + index * (isHero ? 20 : 15)}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </div>
  );
}

export default function ContactPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  // SEO Title & Scroll to Top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useSEO({
    title: "Contact Us | AB Consultancy Ahilyanagar Office",
    description: "Contact AB Consultancy in Ahilyanagar: Office 106, Baiju Height, Ahilyanagar. Call +91 91308 94308 or book an in-person / remote expert consultation.",
    canonical: "https://www.abconsultancy.net.in/contact",
    keywords: "Contact AB Consultancy, Ahilyanagar Consultant Address, Ahmednagar Office Phone, Book Subsidy Consultation"
  });

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Do you charge any upfront fee for initial eligibility checks?',
      a: 'No. Our initial scheme mapping and eligibility pre-check are 100% complimentary. We review your project parameters, geographical zone, and category to identify eligible subsidies before any formal engagement.'
    },
    {
      q: 'Can you assist enterprises located outside Ahilyanagar or Maharashtra?',
      a: 'Yes. While our headquarters are in Ahilyanagar (Ahmednagar), Maharashtra, we deliver digital DPR preparation, portal filing (KVIC, DIC, Samarth), and bank liaison services for MSMEs and startups across PAN-India.'
    },
    {
      q: 'What basic documents should I have ready for our first meeting?',
      a: 'For an initial assessment, keep your Aadhaar, PAN card, Udyam Registration (if registered), electricity bill/land documents, and a rough estimate of machinery or project costs handy.'
    },
    {
      q: 'How fast can our DPR (Detailed Project Report) be completed?',
      a: 'A standard bank-grade DPR with comprehensive 10-year financial projections, CMA data, and DSCR debt sensitivity ratios is typically completed within 3 to 5 business days after receiving required inputs.'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  // Structured Data (JSON-LD) for LocalBusiness Contact Page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AB Consultancy",
    "url": "https://www.abconsultancy.net.in/contact",
    "mainEntity": {
      "@type": "FinancialService",
      "name": "AB Consultancy",
      "telephone": "+919130894308",
      "email": "info@abconsulting.net.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 106, Baiju Height, Near Old Vasant Talkies",
        "addressLocality": "Ahilyanagar",
        "addressRegion": "Maharashtra",
        "postalCode": "414001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0952",
        "longitude": "74.7496"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "18:30"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Top Hero Banner */}
      <section className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-[#E6F0FE] via-[#EDF4FE] to-[#F4F8FD] border-b border-slate-200/60 overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0062FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 sm:mb-6">
            <a href="/" className="hover:text-brand-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-brand-600 font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            {/* Signature Eyebrow Pill Tag with Smooth Left-to-Right Reveal & Character Animation */}
            <AnimatedBadge 
              icon={Landmark} 
              text="Direct Advisory Desk • 24-Hour Callback SLA" 
              isHero 
            />

            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Get in Touch with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">Government Scheme</span> Experts
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Whether you are planning a new manufacturing unit, seeking CGTMSE collateral-free credit, or claiming state industrial subsidies, our ex-bank accredited specialists are here to assist.
            </p>

            {/* Quick Trust Highlights */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Upfront Eligibility Fee</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>100% Confidential Appraisal</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <Building className="w-4 h-4 text-brand-600" />
                <span>Ahilyanagar HQ & PAN-India</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 2-Column Section: Contact Details & Interactive Form */}
      <section className="py-10 sm:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Direct Office Details & Live Support (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/80 shadow-soft">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-600 text-[10.5px] font-bold uppercase tracking-wider mb-2">
                  In-Person Advisory Desk
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Office Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Drop by our main consulting office or connect directly with our advisory specialists.
                </p>

                <div className="mt-6 space-y-4.5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Head Office Location</div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        Office No. 106, Baiju Height,<br />
                        Near Old Vasant Talkies,<br />
                        Ahilyanagar (Ahmednagar), Maharashtra - 414001
                      </p>
                      <a 
                        href="https://maps.google.com/?q=19.0952,74.7496" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 mt-1.5 transition-colors"
                      >
                        <span>Get Directions on Map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 pt-3.5 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Direct Phone & WhatsApp</div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-2">
                        <a 
                          href="tel:+919130894308" 
                          className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-brand-600 transition-colors"
                        >
                          +91 91308 94308
                        </a>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-[11px] text-slate-500">Advisory Desk</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Quick guidance on ongoing scheme deadlines</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 pt-3.5 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Official Correspondence</div>
                      <a 
                        href="mailto:info@abconsulting.net.in" 
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-brand-600 transition-colors block mt-0.5"
                      >
                        info@abconsulting.net.in
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">DPR submissions & formal queries</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5 pt-3.5 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Consultation Timings</div>
                      <div className="text-xs sm:text-sm text-slate-700 mt-0.5">
                        <span className="font-semibold text-slate-900">Monday – Saturday:</span> 9:30 AM – 6:30 PM (IST)
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Sunday: Prior Appointment Only
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct Action Pills - Pinned to bottom to match form submit button baseline */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center gap-3">
                <a 
                  href="https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20government%20subsidies%20and%20loans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a 
                  href="tel:+919130894308"
                  className="flex-1 min-w-[130px] py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
              </div>

            </div>

            {/* Right Column: Comprehensive Contact & Application Form (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/80 shadow-soft relative">
              
              {submitted ? (
                /* Success State Confirmation */
                <div className="py-12 px-4 text-center animate-in fade-in zoom-in-95 duration-300 my-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Thank You, {formData.fullName}!
                  </h3>
                  
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                    Your project inquiry has been received by our senior advisory desk.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between text-slate-600">
                      <span>Promoter Name:</span>
                      <span className="font-semibold text-slate-900">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Enterprise Name:</span>
                      <span className="font-semibold text-slate-900">{formData.businessName || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Contact Number:</span>
                      <span className="font-semibold text-slate-900">+91 {formData.phone}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Email Address:</span>
                      <span className="font-semibold text-slate-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 pt-2 border-t border-slate-200">
                      <span>Expected Callback:</span>
                      <span className="font-bold text-brand-600">Within 24 Hours (IST)</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          businessName: '',
                          phone: '',
                          email: '',
                          message: ''
                        });
                      }}
                      className="py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                    <a
                      href={`https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20just%20submitted%20an%20inquiry%20(Name:%20${encodeURIComponent(formData.fullName)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Quick Connect on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Live Form Fill-up */
                <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                  <div className="space-y-4 sm:space-y-4.5">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-600 text-[10.5px] font-bold uppercase tracking-wider mb-2">
                        Online Consultation Desk
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Send Your Project Inquiry
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill in your business details below. A dedicated consultant will review and respond with an eligibility roadmap.
                      </p>
                    </div>

                    {/* Row 1: Full Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Promoter / Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Rajesh Kumar Sharma" 
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Enterprise / Firm Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            placeholder="e.g. Apex Engineering Solutions" 
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Mobile / WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex">
                          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold">
                            +91
                          </span>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="98765 43210" 
                            className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="rajesh@example.com" 
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message / Project Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Brief Project Details or Queries <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your proposed manufacturing or service activity, existing machinery, or specific queries..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Privacy Notice */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-0.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Your details are strictly confidential and shared only with accredited bank appraisal officers.</span>
                    </div>
                  </div>

                  {/* Submit Button - Pinned to bottom to match left card action buttons */}
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:bg-brand-400 text-white font-bold text-sm shadow-brand hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application & Request Callback</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

          {/* Full-Width 3-Pillar Commitment Banner */}
          <div className="mt-8 sm:mt-10 bg-[#0B1528] rounded-2xl lg:rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 text-[#93C5FD] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      The AB Consultancy Commitment
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Institutional appraisal benchmarks guaranteed for every entrepreneur
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-semibold w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Client Confidentiality & Bank Compliance</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Direct Ex-Bank Scrutiny</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Every file undergoes rigorous credit underwriting analysis for maximum first-attempt bank sanction rate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Milestone-Based Pricing</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Transparent milestone fee schedule with zero hidden charges or surprise deductions at any stage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Dedicated RM in 24h</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      An accredited relationship manager is assigned within 24 hours to handle paperwork and bank interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Google Maps Section */}
      <section className="py-6 sm:py-10 bg-white border-t border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-600 text-[10.5px] font-bold uppercase tracking-wider mb-1.5">
                <MapPin className="w-3 h-3" />
                Physical Location
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Visit Our Ahilyanagar Office
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Centrally located at Baiju Height near Old Vasant Talkies with accessible parking.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=19.0952,74.7496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-brand-50 text-brand-600 font-bold text-xs border border-slate-200 hover:border-brand-200 transition-all shadow-xs"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Frame Card */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft bg-slate-100">
            <iframe
              title="AB Consultancy Office Location Map"
              src="https://maps.google.com/maps?q=19.0952,74.7496&hl=en&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-105"
            />

            {/* Floating Location Badge on Map */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-lg max-w-[280px] xs:max-w-[320px] hidden sm:block pointer-events-none">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">AB Consultancy Head Office</h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Office No. 106, Baiju Height, Ahilyanagar - 414001
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Open Mon - Sat (9:30 AM - 6:30 PM)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Contact Questions */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-t border-slate-200/60">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-2">
              <AnimatedBadge 
                icon={HelpCircle} 
                text="Common Queries" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Before You Connect
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Key questions on our consulting process, turnaround timelines, and service coverage.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-brand-600' : ''
                  }`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
