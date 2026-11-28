import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { CONSULTANCY_SERVICES_DATA } from '../data/consultancyServicesData';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Factory, 
  Award, 
  ChevronRight, 
  ChevronDown, 
  HelpCircle, 
  TrendingUp, 
  Scale, 
  Check, 
  Calendar, 
  FileCheck, 
  PhoneCall,
  Clock,
  Sparkles,
  Briefcase,
  Layers,
  Compass,
  Landmark,
  FileSpreadsheet,
  Coins
} from 'lucide-react';

// Micro Animated Badge Component
function AnimatedBadge({ icon: Icon, text, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0062FF] text-xs font-semibold tracking-wide ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{text}</span>
    </div>
  );
}

// Trust Benefits Strip
function TrustBenefitsStrip() {
  const benefits = [
    { title: "Institutional Expertise", desc: "15+ Years Direct Advisory Experience" },
    { title: "Proven Track Record", desc: "7,100+ MSMEs & Industrial Units Advised" },
    { title: "Bank-Approved Deliverables", desc: "Formulated to Official Credit Standards" },
    { title: "Fast-Track Processing", desc: "Single-Window Liaison Across Departments" },
    { title: "End-to-End Support", desc: "From Diagnostic Inception to Final Execution" }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/80 py-4 shadow-2xs">
      <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {benefits.map((b, idx) => (
            <div key={idx} className={`flex flex-col justify-center ${idx > 0 ? 'pt-3 md:pt-0 md:pl-4' : ''}`}>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                <span className="truncate">{b.title}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ConsultancyDetailPage({ 
  serviceId: propServiceId, 
  onCheckEligibility, 
  onTalkConsultant, 
  onBookAppointment 
}) {
  const params = useParams();
  const activeId = propServiceId || params.serviceId || 'business-consultancy';
  const service = CONSULTANCY_SERVICES_DATA[activeId] || CONSULTANCY_SERVICES_DATA['business-consultancy'];

  const [openFaq, setOpenFaq] = useState(0);
  const [selectedVerticalIdx, setSelectedVerticalIdx] = useState(0);

  // Scroll to top on mount or service change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaq(0);
    setSelectedVerticalIdx(0);
  }, [activeId]);

  // SEO Hook Integration
  useSEO({
    title: service.seo.title,
    description: service.seo.description,
    canonical: service.seo.canonical,
    keywords: service.seo.keywords
  });

  // Dynamic JSON-LD Schema (ProfessionalService + FAQPage)
  useEffect(() => {
    const faqEntities = (service.faqs || []).map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }));

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "name": service.name,
          "serviceType": service.categoryBadge,
          "provider": {
            "@type": "FinancialService",
            "name": "AB Consultancy",
            "url": "https://www.abconsultancy.net.in",
            "telephone": "+91 94222 25888",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nagar-Manmad Road, Savedi",
              "addressLocality": "Ahilyanagar (Ahmednagar)",
              "addressRegion": "Maharashtra",
              "postalCode": "414003",
              "addressCountry": "IN"
            }
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Maharashtra"
          },
          "description": service.heroDesc
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqEntities
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [service]);

  const currentVertical = (service.verticals && service.verticals[selectedVerticalIdx]) || {
    title: service.name,
    badge: service.categoryBadge,
    summary: service.heroDesc,
    scope: ["Statutory Compliance", "Bankable Documentation", "Operational Optimization", "Execution Tracking"],
    marketImpact: "Direct economic and operational impact across Ahilyanagar and Maharashtra."
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 selection:bg-[#0062FF] selection:text-white">
      
      {/* 1. Hero Section with Trust Benchmarks Card */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FD] to-[#F8FAFD] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-[#0062FF] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0062FF] font-semibold">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3.5">
                <AnimatedBadge icon={Briefcase} text={service.categoryBadge} />
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                  {service.code}
                </span>
                <span className="text-[11px] text-slate-500">
                  {service.department}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {service.heroTitle}
              </h1>

              <div className="mt-3 text-sm sm:text-base font-bold text-[#0062FF]">
                {service.heroHighlight}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {service.heroDesc}
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="px-6 py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request Advisory Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onBookAppointment || onTalkConsultant}
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#0062FF]" />
                  <span>Talk to Senior Consultant</span>
                </button>
              </div>

              {/* Sub-meta Trust Points */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Milestone-Based Advisory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>7,100+ MSMEs Advised Across Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Right Trust Stats Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
                
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0062FF]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD]">
                      Institutional Advisory Benchmarks
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Verified Practice</span>
                </div>

                <div className="divide-y divide-slate-800/80 my-4 space-y-3.5">
                  {(service.trustStats || []).map((stat, i) => (
                    <div key={i} className="pt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 block">{stat.label}</span>
                        <span className="text-xs text-slate-500">{stat.sub}</span>
                      </div>
                      <span className="text-lg sm:text-xl font-black text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={onTalkConsultant}
                    className="w-full py-2.5 rounded-xl bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Executive Strategy Call</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Benefits Strip */}
      <TrustBenefitsStrip />

      {/* 3. Direct Advisory Summary & Operating Framework */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Answer Box */}
            <div className="lg:col-span-7">
              <AnimatedBadge icon={HelpCircle} text="Direct Advisory Summary" className="mb-2.5" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {service.directAnswer.question}
              </h2>
              
              <div className="mt-4 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {service.directAnswer.answer}
              </div>

              {/* Job to be done Context Box */}
              {service.jtbd && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                    <Compass className="w-4 h-4 text-[#0062FF]" />
                    <span>Advisory Mission & Founder Objective</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{service.jtbd.statement}"
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Single-Window Executive Coordination
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Bank & Departmental Liaison
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Comprehensive Documentation
                </span>
              </div>
            </div>

            {/* Service Framework Matrix */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <Layers className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Service Framework & Scope
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-start py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Target Enterprise</span>
                  <span className="font-bold text-slate-800 text-right">{service.architecture.quantum}</span>
                </div>
                <div className="flex justify-between items-start py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Institutional Alignment</span>
                  <span className="font-bold text-emerald-600 text-right">{service.architecture.bankDebt}</span>
                </div>
                <div className="flex justify-between items-start py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Subsidy Integration</span>
                  <span className="font-bold text-[#0062FF] text-right">{service.architecture.subsidyPct}</span>
                </div>
                <div className="flex justify-between items-start py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Initiation Horizon</span>
                  <span className="font-semibold text-slate-800 text-right">{service.architecture.moratorium}</span>
                </div>
                <div className="flex justify-between items-start py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Engagement Tenor</span>
                  <span className="font-semibold text-slate-800 text-right">{service.architecture.tenor}</span>
                </div>
                <div className="flex justify-between items-start py-1.5">
                  <span className="text-slate-500">Advisory Model</span>
                  <span className="font-semibold text-slate-800 text-right">{service.architecture.interestRate}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Core Advisory Verticals Section */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8">
            <AnimatedBadge icon={TrendingUp} text="Core Advisory Modules" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Service Verticals Under {service.shortTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Select an advisory vertical below to review our granular scope of work, technical deliverables, and regional industry impact.
            </p>
          </div>

          {/* Interactive Horizontal Tabs (NO awkward arrows between them) */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {(service.verticals || []).map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVerticalIdx(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedVerticalIdx === idx
                    ? 'bg-[#0062FF] text-white border-[#0062FF] shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>{v.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Active Vertical Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0062FF] text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentVertical.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {currentVertical.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentVertical.summary}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Granular Scope of Execution:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    {(currentVertical.scope || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {currentVertical.marketImpact && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                    <span className="font-bold text-slate-900 block mb-1">Industrial & Regional Market Impact:</span>
                    {currentVertical.marketImpact}
                  </div>
                )}
              </div>

              {/* Advisory Blueprint & Action Box */}
              <div className="lg:col-span-5 bg-[#0B1528] rounded-2xl p-6 text-white border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-bold text-[#93C5FD]">Executive Deliverables</span>
                  <span className="text-[10px] text-slate-400 font-mono">AB Advisory Guarantee</span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Comprehensive Technical Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Statutory Compliance Pre-Audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Financial Ratio Alignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Senior Consultant Direct Oversight</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onTalkConsultant}
                  className="w-full py-3 rounded-xl bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Consult on this Vertical</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Engagement Tiers Matrix Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8">
            <AnimatedBadge icon={Scale} text="Operational Packages" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Advisory Engagement Tiers & Deliverables
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Transparent, milestone-linked structures engineered for micro enterprises, growing manufacturers, and mid-corporate establishments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(service.marginTiers || []).map((tier, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0062FF]/50 transition-all shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Tier {idx + 1} Model
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {tier.category}
                  </h3>
                  
                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scope:</span>
                      <span className="font-semibold text-slate-800">{tier.promoterEquity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Output:</span>
                      <span className="font-semibold text-[#0062FF]">{tier.subsidyGrant}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Turnaround:</span>
                      <span className="font-semibold text-emerald-600">{tier.bankDebt}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.criteria}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80">
                  <button
                    type="button"
                    onClick={onTalkConsultant}
                    className="w-full py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Select Tier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Document Checklist Section (Clean Column Format, NO CARD BACKGROUND SLOP) */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={FileCheck} text="Documentation Requisites" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {service.shortTitle} Document Checklist
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Organize these primary business, financial, and statutory records for seamless processing and swift execution.
            </p>
          </div>

          {/* Clean 4-Column Layout without Background Card Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(service.documents || []).map((doc, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                  <Building2 className="w-4 h-4 text-[#0062FF]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">{doc.group}</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {doc.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Step-by-Step 4-Phase Roadmap */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Calendar} text="Implementation Roadmap" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4-Phase Advisory & Execution Lifecycle
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              A structured, milestone-driven pathway guaranteeing complete transparency from initial audit to final milestone signoff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(service.roadmaps || []).map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-[#0062FF]">{step.phase}</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {(step.deliverables || []).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF] flex-shrink-0" />
                        <span className="truncate">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Regional Industrial Footprint */}
      {service.regionalPresence && (
        <section className="py-10 bg-slate-900 text-white border-b border-slate-800">
          <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <span className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider block mb-1">
                  Regional Focus Areas
                </span>
                <p className="text-xs text-slate-300">
                  {service.regionalPresence.districts.join(' • ')}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider block mb-1">
                  Industrial Hubs & MIDC Estates
                </span>
                <p className="text-xs text-slate-300">
                  {service.regionalPresence.industrialAreas.join(' • ')}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider block mb-1">
                  Banking & Institutional Linkages
                </span>
                <p className="text-xs text-slate-300">
                  {service.regionalPresence.bankLinkages.join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Interactive FAQ Accordion */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8">
            <AnimatedBadge icon={HelpCircle} text="Executive Queries" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions on {service.shortTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Clear, definitive answers to legal, financial, and procedural queries for entrepreneurs and enterprise promoters.
            </p>
          </div>

          <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            {(service.faqs || []).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-bold text-slate-900 hover:text-[#0062FF] transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. Bottom Action Strip */}
      <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to Advance Your Enterprise with AB Consultancy?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Book an in-person advisory session at our Savedi office or schedule an on-site factory visit with our senior consultants.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onCheckEligibility}
              className="px-7 py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Request Advisory Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onBookAppointment || onTalkConsultant}
              className="px-7 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#93C5FD]" />
              <span>Book In-Person Strategy Meeting</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// Named Exports for 7 Core Consultancy Service Pages
export function BusinessDevelopmentConsultancyPage(props) {
  return <ConsultancyDetailPage serviceId="business-development-consultancy" {...props} />;
}
export function FranchiseModelConsultancyPage(props) {
  return <ConsultancyDetailPage serviceId="franchise-model-consultancy" {...props} />;
}
export function MarketLinkagePage(props) {
  return <ConsultancyDetailPage serviceId="market-linkage" {...props} />;
}
export function ImportExportPage(props) {
  return <ConsultancyDetailPage serviceId="import-export" {...props} />;
}
export function BusinessFinancePage(props) {
  return <ConsultancyDetailPage serviceId="business-finance" {...props} />;
}
export function LicensesApprovalsPage(props) {
  return <ConsultancyDetailPage serviceId="licenses-approvals" {...props} />;
}
export function RocRegistrationPage(props) {
  return <ConsultancyDetailPage serviceId="roc-registration" {...props} />;
}

// Backward Compatibility Aliases for Legacy Links
export function BusinessConsultancyPage(props) {
  return <ConsultancyDetailPage serviceId="business-development-consultancy" {...props} />;
}
export function BusinessSetupGuidancePage(props) {
  return <ConsultancyDetailPage serviceId="licenses-approvals" {...props} />;
}
export function FinancialConsultancyPage(props) {
  return <ConsultancyDetailPage serviceId="business-finance" {...props} />;
}
export function ProjectReportPreparationPage(props) {
  return <ConsultancyDetailPage serviceId="business-finance" {...props} />;
}
export function GovernmentSchemeApplicationAssistancePage(props) {
  return <ConsultancyDetailPage serviceId="licenses-approvals" {...props} />;
}
export function SubsidyApplicationAssistancePage(props) {
  return <ConsultancyDetailPage serviceId="business-finance" {...props} />;
}
