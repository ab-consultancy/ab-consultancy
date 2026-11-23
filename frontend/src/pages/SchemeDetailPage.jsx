import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { SCHEMES_DATA } from '../data/schemesData';
import { 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Factory, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  HelpCircle, 
  Rocket, 
  TrendingUp, 
  Scale, 
  Check, 
  Calendar, 
  FileCheck, 
  Coins, 
  Percent, 
  PhoneCall,
  Clock,
  Sparkles,
  Calculator,
  AlertCircle
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

// Trust Benefits Strip (Consistent with BusinessLoansPage & AhidfSchemePage)
function TrustBenefitsStrip() {
  const benefits = [
    { title: "Central & State Subsidies", desc: "Non-repayable capital grants up to 35%–50%" },
    { title: "Collateral-Free Support", desc: "CGTMSE & Credit Guarantee coverage up to ₹5 Cr" },
    { title: "Verified Eligibility Check", desc: "Pre-screened against 40+ Bank Policies" },
    { title: "Bank-Compliant DPR", desc: "Audited Financials & CMA Projections" },
    { title: "End-to-End Filing Support", desc: "Portal filing to Final Subsidy Disbursement" }
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

export default function SchemeDetailPage({ 
  schemeId: propSchemeId, 
  onCheckEligibility, 
  onTalkConsultant, 
  onBookAppointment 
}) {
  const params = useParams();
  const activeId = propSchemeId || params.schemeId || 'pmegp';
  const scheme = SCHEMES_DATA[activeId] || SCHEMES_DATA.pmegp;

  const [openFaq, setOpenFaq] = useState(0);
  const [selectedVerticalIdx, setSelectedVerticalIdx] = useState(0);

  // Dynamic Calculator State
  const [calcCost, setCalcCost] = useState(2500000);
  const [calcLocation, setCalcLocation] = useState('rural');
  const [calcCategory, setCalcCategory] = useState('special');

  // Scroll to top on mount or scheme change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaq(0);
    setSelectedVerticalIdx(0);
  }, [activeId]);

  // SEO Hook Integration
  useSEO({
    title: scheme.seo.title,
    description: scheme.seo.description,
    canonical: scheme.seo.canonical,
    keywords: scheme.seo.keywords
  });

  // Dynamic JSON-LD Schema (GovernmentService + FAQPage)
  useEffect(() => {
    const faqEntities = (scheme.faqs || []).map((faq) => ({
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
          "@type": "GovernmentService",
          "name": scheme.name,
          "serviceType": "Government Subsidy Advisory & Bank DPR Preparation",
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
          "description": scheme.heroDesc
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
  }, [scheme]);

  // Dynamic Subsidy Calculation Logic
  const calculateSubsidy = () => {
    const cost = parseFloat(calcCost) || 0;
    let subsidyPct = 25;
    let maxCap = Infinity;

    if (scheme.id === 'pmegp' || scheme.id === 'cmegp') {
      if (calcLocation === 'rural') {
        subsidyPct = calcCategory === 'special' ? 35 : 25;
      } else {
        subsidyPct = calcCategory === 'special' ? 25 : 15;
      }
      maxCap = 1750000; // ₹17.5L max for Mfg
    } else if (scheme.id === 'pmfme') {
      subsidyPct = 35;
      maxCap = 1000000; // ₹10L max for micro
    } else if (scheme.id === 'aif') {
      subsidyPct = 3; // 3% annual interest subvention
      const loan = Math.min(cost * 0.9, 20000000);
      const totalSavings = loan * 0.03 * 7; // Approx 7 years subvention savings
      return {
        subsidyAmount: Math.round(totalSavings),
        promoterEquity: Math.round(cost * 0.1),
        bankLoan: Math.round(cost * 0.9),
        pctLabel: "3.0% Annual Relief (~7 Yrs Savings)"
      };
    } else if (scheme.id === 'pmksy' || scheme.id === 'nhb') {
      subsidyPct = calcCategory === 'special' ? 50 : 35;
    } else if (scheme.id === 'nhm') {
      subsidyPct = 50;
    } else if (scheme.id === 'psi') {
      subsidyPct = calcLocation === 'rural' ? 80 : 50; // Zone D vs Zone B
    }

    let calculated = (cost * subsidyPct) / 100;
    if (calculated > maxCap) calculated = maxCap;

    const promoterPct = calcCategory === 'special' ? 5 : 10;
    const promoterEquity = (cost * promoterPct) / 100;
    const bankLoan = cost - promoterEquity;

    return {
      subsidyAmount: Math.round(calculated),
      promoterEquity: Math.round(promoterEquity),
      bankLoan: Math.round(bankLoan),
      pctLabel: `${subsidyPct}% Capital Grant`
    };
  };

  const calcResults = calculateSubsidy();
  const currentVertical = (scheme.verticals && scheme.verticals[selectedVerticalIdx]) || {
    title: scheme.name,
    badge: scheme.categoryBadge,
    summary: scheme.heroDesc,
    scope: ["Statutory DPR Preparation", "Bank Loan Sanction", "Government Portal Filing", "Subsidy Claim Tracking"],
    marketImpact: "Direct economic impact across Ahilyanagar and Maharashtra."
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 selection:bg-[#0062FF] selection:text-white">
      
      {/* 1. Hero Section with Trust Card */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FD] to-[#F8FAFD] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-[#0062FF] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0062FF] font-semibold">{scheme.code} Scheme</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3.5">
                <AnimatedBadge icon={Landmark} text={scheme.categoryBadge} />
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                  {scheme.code}
                </span>
                <span className="text-[11px] text-slate-500">
                  {scheme.ministry}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {scheme.heroTitle}
              </h1>

              <div className="mt-3 text-sm sm:text-base font-bold text-[#0062FF]">
                {scheme.heroHighlight}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {scheme.heroDesc}
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="px-6 py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Check Your Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onBookAppointment || onTalkConsultant}
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#0062FF]" />
                  <span>Talk to Our Consultant</span>
                </button>
              </div>

              {/* Sub-meta details */}
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
                      Verified Scheme Benchmarks
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Official Guidelines</span>
                </div>

                <div className="divide-y divide-slate-800/80 my-4 space-y-3.5">
                  {(scheme.trustStats || []).map((stat, i) => (
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
                    onClick={onCheckEligibility}
                    className="w-full py-2.5 rounded-xl bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Calculate {scheme.code} Subsidy</span>
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

      {/* 3. Direct Advisory Knowledge Block */}
      {scheme.directAnswer && (
        <section className="py-8 bg-white border-b border-slate-200/80">
          <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFD] border border-blue-200/80">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Official Advisory Summary: {scheme.directAnswer.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {scheme.directAnswer.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Scheme Financing Architecture Matrix */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-10">
            <AnimatedBadge icon={Coins} text="Financial Architecture" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {scheme.code} Scheme Funding Parameters & Financial Norms
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Approved norms governing term debt, capital grants, and repayment windows under official government circulars.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
              <span className="text-[11px] font-medium text-slate-500 block">Project Investment</span>
              <span className="text-sm sm:text-base font-bold text-slate-900 mt-1 block">{scheme.architecture.quantum}</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
              <span className="text-[11px] font-medium text-slate-500 block">Government Subsidy</span>
              <span className="text-sm sm:text-base font-bold text-emerald-600 mt-1 block">{scheme.architecture.subsidyPct}</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
              <span className="text-[11px] font-medium text-slate-500 block">Bank Debt Share</span>
              <span className="text-sm sm:text-base font-bold text-[#0062FF] mt-1 block">{scheme.architecture.bankDebt}</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
              <span className="text-[11px] font-medium text-slate-500 block">Principal Moratorium</span>
              <span className="text-sm sm:text-base font-bold text-amber-600 mt-1 block">{scheme.architecture.moratorium}</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
              <span className="text-[11px] font-medium text-slate-500 block">Repayment Tenor</span>
              <span className="text-sm sm:text-base font-bold text-slate-900 mt-1 block">{scheme.architecture.tenor}</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
              <span className="text-[11px] font-medium text-slate-500 block">Interest Rate Norm</span>
              <span className="text-sm sm:text-base font-bold text-purple-600 mt-1 block">{scheme.architecture.interestRate}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Eligible Industry Verticals & Project Scope */}
      {scheme.verticals && scheme.verticals.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <AnimatedBadge icon={Building2} text="Eligible Project Sectors" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Eligible Activities & Machinery CAPEX Under {scheme.code}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                Explore eligible manufacturing, agro-processing, and service lines covered by the government grant.
              </p>
            </div>

            {/* Vertical Switcher Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {scheme.verticals.map((vert, idx) => (
                <button
                  key={vert.id}
                  type="button"
                  onClick={() => setSelectedVerticalIdx(idx)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedVerticalIdx === idx
                      ? 'bg-[#0062FF] border-[#0062FF] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {vert.title}
                </button>
              ))}
            </div>

            {/* Selected Vertical Card */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 sm:p-8 border border-slate-200/80">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-[#0062FF] text-[11px] font-bold">
                  {currentVertical.badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentVertical.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                {currentVertical.summary}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Approved Project Scope & Eligible Capex Items:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentVertical.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentVertical.marketImpact && (
                <div className="mt-6 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-blue-900">
                  <strong className="font-bold">Regional Relevance:</strong> {currentVertical.marketImpact}
                </div>
              )}
            </div>

          </div>
        </section>
      )}

      {/* 6. Promoter Contribution & Margin Money Tiers */}
      {scheme.marginTiers && (
        <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
          <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <AnimatedBadge icon={Scale} text="Promoter Equity Norms" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Subsidy Percentage & Promoter Margin Slabs
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                Government subsidy and promoter equity ratios categorized by promoter status and geographic location.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
                <thead className="bg-slate-100/80 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-5">Beneficiary Slabs</th>
                    <th className="py-3.5 px-5">Promoter Equity</th>
                    <th className="py-3.5 px-5">Government Subsidy</th>
                    <th className="py-3.5 px-5">Bank Debt</th>
                    <th className="py-3.5 px-5">Applicable Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {scheme.marginTiers.map((tier, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900">{tier.category}</td>
                      <td className="py-3.5 px-5 font-bold text-amber-600">{tier.promoterEquity}</td>
                      <td className="py-3.5 px-5 font-bold text-emerald-600">{tier.subsidyGrant}</td>
                      <td className="py-3.5 px-5 font-bold text-[#0062FF]">{tier.bankDebt}</td>
                      <td className="py-3.5 px-5 text-slate-600">{tier.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>
      )}

      {/* 7. Document Checklist (Clean Column Layout with ZERO background card slop) */}
      {scheme.documents && (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
            
            <div className="max-w-3xl mb-8 sm:mb-12">
              <AnimatedBadge icon={FileCheck} text="Documentation Requisites" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {scheme.code} Scheme Document Checklist
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                Organize these essential records for seamless online portal filing and swift bank branch appraisal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {scheme.documents.map((doc, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                    <Building className="w-4 h-4 text-[#0062FF]" />
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
      )}

      {/* 8. Interactive Subsidy & Margin Calculator */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-10">
            <AnimatedBadge icon={Calculator} text="Financial Estimator" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Instant {scheme.code} Subsidy & Margin Calculator
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Simulate your estimated government capital subsidy, promoter equity requirement, and bank loan amount.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-900">Total Project Outlay (₹)</label>
                    <span className="text-sm font-black text-[#0062FF]">
                      ₹{(calcCost / 100000).toFixed(2)} Lakhs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max={scheme.id === 'aif' || scheme.id === 'pmksy' ? "50000000" : "5000000"}
                    step="100000"
                    value={calcCost}
                    onChange={(e) => setCalcCost(Number(e.target.value))}
                    className="w-full accent-[#0062FF] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₹5 Lakhs</span>
                    <span>{scheme.id === 'aif' || scheme.id === 'pmksy' ? '₹5 Crores' : '₹50 Lakhs'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1.5">Project Location</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setCalcLocation('rural')}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                          calcLocation === 'rural'
                            ? 'bg-[#0062FF] border-[#0062FF] text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Rural
                      </button>
                      <button
                        type="button"
                        onClick={() => setCalcLocation('urban')}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                          calcLocation === 'urban'
                            ? 'bg-[#0062FF] border-[#0062FF] text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Urban
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1.5">Promoter Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setCalcCategory('special')}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                          calcCategory === 'special'
                            ? 'bg-[#0062FF] border-[#0062FF] text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                        title="Women, SC, ST, OBC, Minorities, Ex-Servicemen"
                      >
                        Special
                      </button>
                      <button
                        type="button"
                        onClick={() => setCalcCategory('general')}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                          calcCategory === 'general'
                            ? 'bg-[#0062FF] border-[#0062FF] text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                        title="General Male"
                      >
                        General
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 text-slate-600 text-[11px] leading-relaxed">
                  <strong>Special Category:</strong> Includes Women, SC/ST, OBC, Minorities, Ex-Servicemen, and Persons with Disabilities (PwD) qualifying for the highest subsidy bracket.
                </div>
              </div>
            </div>

            {/* Output Display Card */}
            <div className="lg:col-span-6 bg-[#0B1528] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] block pb-3 border-b border-slate-800">
                Estimated Financing Breakdown
              </span>

              <div className="my-5 space-y-4">
                <div>
                  <span className="text-xs text-slate-400 block">Expected Government Subsidy</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                      ₹{calcResults.subsidyAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-emerald-300 font-bold">({calcResults.pctLabel})</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                  <div>
                    <span className="text-xs text-slate-400 block">Promoter Margin Required</span>
                    <span className="text-lg font-black text-amber-400 mt-0.5 block">
                      ₹{calcResults.promoterEquity.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Estimated Bank Debt</span>
                    <span className="text-lg font-black text-[#60A5FA] mt-0.5 block">
                      ₹{calcResults.bankLoan.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="w-full py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Apply for {scheme.code} Subsidy Advisory</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. 4-Phase Sanction & Disbursement Roadmap */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-12">
            <AnimatedBadge icon={Rocket} text="Execution Workflow" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4-Phase Roadmap: From DPR to Final Subsidy Release
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              A systematic advisory pathway preventing query delays, committee rejections, and interest escalations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Feasibility & Category Audit",
                desc: "We analyze land titles, promoter category, and NIC codes to verify optimal subsidy slabs before any capital commitment."
              },
              {
                step: "02",
                title: "Bank-Grade DPR Formulation",
                desc: "Preparation of Detailed Project Report with 5–8 years CMA data, DSCR sensitivity, and machinery quotes meeting bank lending norms."
              },
              {
                step: "03",
                title: "Portal Filing & DIC Liaison",
                desc: `Accurate online submission on ${scheme.portal}, managing Task Force Committee queries and securing formal recommendation.`
              },
              {
                step: "04",
                title: "Sanction & Subsidy Credit",
                desc: "Coordinating bank term loan sanction, first disbursement, and timely TDR subsidy claim deposit without bureaucratic stalls."
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80 relative">
                <span className="text-2xl font-black text-[#0062FF]/40 block mb-2">{phase.step}</span>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{phase.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Frequently Asked Questions (Accordion) */}
      {scheme.faqs && (
        <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
          <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <AnimatedBadge icon={HelpCircle} text="Direct Clarifications" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding {scheme.code}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                Authoritative answers covering eligibility, lock-in periods, subsidy release, and dual benefits.
              </p>
            </div>

            <div className="max-w-4xl space-y-3">
              {scheme.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-[#0062FF]' : ''
                    }`} />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 11. Final High-Conversion Strategy CTA Strip */}
      <section className="py-12 sm:py-16 bg-[#0B1528] text-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-[#93C5FD] text-xs font-semibold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Government Scheme Advisory</span>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
            Ready to Avail {scheme.code} Government Subsidy for Your Business?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect with AB Consultancy’s senior project finance and subsidy specialists in Ahilyanagar. Secure your bank loan sanction, DPR modeling, and timely government grant disbursement.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onCheckEligibility}
              className="px-7 py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Check Eligibility Now</span>
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

// Named Exports for Individual Scheme Pages
export function PmegpSchemePage(props) {
  return <SchemeDetailPage schemeId="pmegp" {...props} />;
}
export function CmegpSchemePage(props) {
  return <SchemeDetailPage schemeId="cmegp" {...props} />;
}
export function PmfmeSchemePage(props) {
  return <SchemeDetailPage schemeId="pmfme" {...props} />;
}
export function AifSchemePage(props) {
  return <SchemeDetailPage schemeId="aif" {...props} />;
}
export function PmksySchemePage(props) {
  return <SchemeDetailPage schemeId="pmksy" {...props} />;
}
export function NhbSchemePage(props) {
  return <SchemeDetailPage schemeId="nhb" {...props} />;
}
export function NhmSchemePage(props) {
  return <SchemeDetailPage schemeId="nhm" {...props} />;
}
export function PsiSchemePage(props) {
  return <SchemeDetailPage schemeId="psi" {...props} />;
}
