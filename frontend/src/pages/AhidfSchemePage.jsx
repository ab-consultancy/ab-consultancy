import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  Building2, 
  Factory, 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  Award, 
  ChevronRight, 
  ChevronDown, 
  HelpCircle, 
  Rocket, 
  Briefcase, 
  TrendingUp, 
  Zap, 
  Layers, 
  Coins, 
  Scale, 
  Check, 
  Calendar, 
  FileCheck, 
  Search, 
  ExternalLink,
  AlertCircle,
  Calculator,
  ClipboardList,
  Handshake,
  Store,
  Crown,
  Users,
  Wrench,
  Percent,
  Warehouse,
  Sprout,
  Tractor,
  Milk,
  Beef,
  Flame,
  BadgeCheck,
  Building,
  CheckSquare2,
  FileSpreadsheet,
  Globe2,
  Sparkles
} from 'lucide-react';

// Reusable Animated Eyebrow Badge
function AnimatedBadge({ icon: Icon, text, className = '', isHero = false, isDark = false }) {
  return (
    <div 
      className={`relative inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-semibold w-fit select-none overflow-hidden ${
        isHero 
          ? 'text-[11px] xs:text-xs sm:text-[12.5px] mb-4 sm:mb-5 text-[#0062FF]' 
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

export default function AhidfSchemePage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedVertical, setSelectedVertical] = useState('dairy');
  const [selectedTier, setSelectedTier] = useState('micro');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "AHIDF Scheme Consultant Ahilyanagar | Animal Husbandry Subsidy DPR",
    description: "Apply for Animal Husbandry Infrastructure Development Fund (AHIDF) in Ahilyanagar & Maharashtra. 3% interest subvention, up to 90% bank loan, 25% credit guarantee & bank-grade DPRs for dairy, feed & meat plants.",
    canonical: "https://www.abconsultancy.net.in/services/ahidf",
    keywords: "AHIDF Scheme Ahilyanagar, Animal Husbandry Infrastructure Development Fund Ahmednagar, AHIDF Subsidy Consultant Maharashtra, Dairy Processing Plant Loan Sangamner, Cattle Feed Plant DPR Nagar, Animal Husbandry 3 Percent Subvention, Udyamimitra AHIDF Portal Advisory"
  });

  // Comprehensive JSON-LD Structured Schema (FinancialProduct + GovernmentService + LocalBusiness + FAQPage)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "GovernmentService",
          "@id": "https://www.abconsultancy.net.in/services/ahidf#service",
          "name": "Animal Husbandry Infrastructure Development Fund (AHIDF) Advisory",
          "alternateName": "AHIDF Central Sector Scheme DPR & Subsidy Facilitation",
          "description": "End-to-end consulting for AHIDF scheme by DAHD, GoI: techno-economic feasibility DPR preparation, bank loan structuring up to 90%, 3% annual interest subvention tagging, and Udyamimitra portal approval across Maharashtra.",
          "serviceOperator": {
            "@type": "LocalBusiness",
            "name": "AB Consultancy",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No. 106, 1st Floor, Baiju Height, Near Old ST Stand",
              "addressLocality": "Ahilyanagar",
              "addressRegion": "Maharashtra",
              "postalCode": "414001",
              "addressCountry": "IN"
            },
            "telephone": "+91 91308 94308"
          },
          "areaServed": [
            { "@type": "City", "name": "Ahilyanagar" },
            { "@type": "City", "name": "Sangamner" },
            { "@type": "City", "name": "Shrirampur" },
            { "@type": "City", "name": "Kopargaon" },
            { "@type": "City", "name": "Rahata" },
            { "@type": "AdministrativeArea", "name": "Maharashtra" }
          ],
          "offers": {
            "@type": "Offer",
            "description": "3.0% per annum interest subvention for up to 8 years (including up to 2 years moratorium) with 25% credit guarantee under CGFTAH."
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.abconsultancy.net.in/services/ahidf#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Animal Husbandry Infrastructure Development Fund (AHIDF) scheme?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AHIDF is a flagship Central Sector Scheme launched by the Department of Animal Husbandry and Dairying (DAHD), Ministry of Fisheries, Animal Husbandry & Dairying, Government of India, with a national corpus of ₹29,610.25 Crores. It incentivizes investments in dairy processing, meat processing, animal feed plants, breed multiplication farms, veterinary biologicals, and waste-to-wealth (CBG) projects by providing a 3% per annum interest subvention on bank term loans and a credit guarantee of up to 25% through NABSanrakshan."
              }
            },
            {
              "@type": "Question",
              "name": "What is the quantum of loan and promoter margin required under AHIDF?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under AHIDF, scheduled commercial banks and cooperative banks can fund up to 90% of total project cost. Minimum promoter margin contribution is strictly: 10% for Micro and Small enterprises, 15% for Medium enterprises, and 20%–25% for Large corporates and other entities. There is no predetermined upper cap on total project investment."
              }
            },
            {
              "@type": "Question",
              "name": "What is the duration of the 3% interest subvention and principal moratorium?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The 3% interest subvention is provided for a maximum period of 8 years. This includes an initial moratorium period of up to 2 years on the principal repayment (only simple interest during construction/gestation), followed by 6 years of subsidized repayment tenure."
              }
            },
            {
              "@type": "Question",
              "name": "Are dairy cooperatives and FPOs eligible for AHIDF funding in Maharashtra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Following recent Union Cabinet approvals, eligible beneficiaries explicitly include Individual Entrepreneurs, Private Limited Companies, MSMEs, Farmer Producer Organizations (FPOs), Section 8 Companies, and Dairy Cooperatives seeking to establish or modernize processing infrastructure."
              }
            },
            {
              "@type": "Question",
              "name": "How does AB Consultancy assist in obtaining AHIDF approval in Ahilyanagar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AB Consultancy provides complete advisory: preliminary agronomic and techno-economic feasibility assessment, formulation of a bank-compliant DPR with CMA data and 8-year DSCR sensitivity, loan syndication with nationalized and private banks, online portal filing on the official ahidf.udyamimitra.in platform, and representation before the DAHD Project Approval Committee (PAC)."
              }
            }
          ]
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
  }, []);

  // 6 Eligible Industry Verticals Data
  const eligibleVerticals = {
    dairy: {
      id: 'dairy',
      title: 'Dairy Processing & Value Addition Infrastructure',
      badge: 'Priority Vertical 1',
      icon: Milk,
      summary: 'Establishment of new milk chilling centers, automated bulk milk chillers (BMC), dairy processing plants, and specialized value-added product lines.',
      quantum: '₹50 Lakhs to ₹50+ Crores',
      funding: 'Up to 90% Bank Debt',
      subvention: '3.0% Annual Relief',
      moratorium: 'Up to 24 Months',
      scope: [
        'Automated Milk Processing Units (Pasteurization, Homogenization, Pouch Packing)',
        'Value-Added Infrastructure (Cheese, Butter, Ghee, Paneer, Whey, Ice-Cream, Yogurt)',
        'Milk Powder Plants (Skimmed Milk Powder - SMP, Whole Milk Powder - WMP)',
        'Bulk Milk Chillers (BMC) & Village Cold Chain Refrigerated Transport Vans'
      ],
      marketImpact: 'Ideal for Ahilyanagar’s dairy clusters in Sangamner, Shrirampur, and Rahata producing millions of liters of cow milk daily.'
    },
    feed: {
      id: 'feed',
      title: 'Animal Feed Manufacturing Plants',
      badge: 'Priority Vertical 2',
      icon: Warehouse,
      summary: 'High-capacity automated feed mills producing scientifically balanced compound cattle feed, poultry feeds, aqua feeds, and total mixed rations (TMR).',
      quantum: '₹25 Lakhs to ₹30+ Crores',
      funding: 'Up to 90% Bank Debt',
      subvention: '3.0% Annual Relief',
      moratorium: 'Up to 18 Months',
      scope: [
        'Compound Cattle Feed Mills (Mesh, Pellet, and Crumble feeds)',
        'Bypass Protein & Bypass Fat Manufacturing Units',
        'Poultry Broiler & Layer Feed Manufacturing Plants',
        'Total Mixed Ration (TMR) Block Making & Silage Baling Facilities'
      ],
      marketImpact: 'Supplies nutritional concentrate feeds to the massive dairy and poultry livestock population across Ahmednagar and Marathwada.'
    },
    meat: {
      id: 'meat',
      title: 'Meat Processing & Value Addition Infrastructure',
      badge: 'Priority Vertical 3',
      icon: Beef,
      summary: 'Modern, hygienic, and automated meat abattoirs, cold slaughterhouses, blast freezers, and meat product processing lines complying with APEDA & FSSAI norms.',
      quantum: '₹1 Crore to ₹40+ Crores',
      funding: 'Up to 90% Bank Debt',
      subvention: '3.0% Annual Relief',
      moratorium: 'Up to 24 Months',
      scope: [
        'Modern Hygienic Abattoir Facilities for Sheep, Goat, and Poultry',
        'Meat Processing & Value Addition (Sausages, Nuggets, Ready-to-Cook products)',
        'Blast Freezers, Plate Freezers & Deep Cold Storage Infrastructure',
        'Effluent Treatment Plants (ETP) & Rendering By-Product Processing Plants'
      ],
      marketImpact: 'Creates formal, hygienic processing infrastructure with high export potential from western Maharashtra.'
    },
    breed: {
      id: 'breed',
      title: 'Breed Multiplication Farms & Genetics',
      badge: 'Priority Vertical 4',
      icon: Tractor,
      summary: 'Commercial breeding units to multiply elite genetics of high-yielding dairy cattle (HF, Jersey, Gir, Sahiwal) and indigenous buffalo breeds.',
      quantum: '₹50 Lakhs to ₹20+ Crores',
      funding: 'Up to 90% Bank Debt',
      subvention: '3.0% Annual Relief',
      moratorium: 'Up to 24 Months',
      scope: [
        'Breed Multiplication Farms (Min 200 high-yielding female cattle/buffaloes)',
        'IVF (In-Vitro Fertilization) Labs & Embryo Transfer Technology (ETT) Centers',
        'Sex-Sorted Semen Production Facilities & Liquid Nitrogen Storage Networks',
        'Pedigree Recording, Genomic Selection & Calf Rearing Stations'
      ],
      marketImpact: 'Upgrades productivity from 8–10 liters to 25+ liters per animal per day, transforming herd economics in Maharashtra.'
    },
    veterinary: {
      id: 'veterinary',
      title: 'Veterinary Vaccine & Biological Production Units',
      badge: 'Priority Vertical 5',
      icon: Wrench,
      summary: 'Manufacturing facilities for life-saving animal health formulations, veterinary vaccines, disease diagnostics, and clinical medical devices.',
      quantum: '₹1 Crore to ₹50+ Crores',
      funding: 'Up to 85%–90% Bank Debt',
      subvention: '3.0% Annual Relief',
      moratorium: 'Up to 24 Months',
      scope: [
        'Veterinary Vaccine Manufacturing Plants (FMD, Brucellosis, PPR vaccines)',
        'Animal Disease Diagnostic Kit Manufacturing Units',
        'Veterinary Formulations & Nutritional Supplement Factories',
        'Animal Care Medical Equipment & Modern Surgical Diagnostic Labs'
      ],
      marketImpact: 'Ensures biosecurity, disease surveillance, and herd longevity across intensive livestock belts.'
    },
    cbg: {
      id: 'cbg',
      title: 'Animal Waste-to-Wealth (CBG & Bio-CNG Plants)',
      badge: 'Priority Vertical 6',
      icon: Flame,
      summary: 'Commercial biogas and Compressed Biogas (CBG / Bio-CNG) plants utilizing cattle dung (gobar) and dairy wash water for green energy and organic fertilizer.',
      quantum: '₹2 Crores to ₹50+ Crores',
      funding: 'Up to 90% Bank Debt',
      subvention: '3.0% Annual Relief',
      moratorium: 'Up to 24 Months',
      scope: [
        'Compressed Biogas (CBG / Bio-CNG) Production Units linked to SATAT scheme',
        'Fermented Organic Manure (FOM) & Solid Bio-Fertilizer Pelletization Units',
        'Liquid Bio-Fertilizer (LFOM) Packaging & Distribution Facilities',
        'Biogas Bottling & Grid/Cascade Transportation Infrastructure'
      ],
      marketImpact: 'Generates dual revenue streams (gas sales to oil marketing companies + organic fertilizer) while eliminating farm emissions.'
    }
  };

  // Enterprise Margin & Guarantee Tiers
  const enterpriseTiers = {
    micro: {
      name: 'Micro & Small Enterprises',
      margin: '10%',
      marginDetail: 'Promoter Equity Contribution',
      bankLoan: '90%',
      bankDetail: 'Funded via Scheduled Commercial Bank',
      guarantee: 'Up to 25%',
      guaranteeDetail: 'CGFTAH / NABSanrakshan Coverage',
      subvention: '3.0% p.a.',
      subventionDetail: 'Credited directly for 8 Years'
    },
    medium: {
      name: 'Medium Enterprises',
      margin: '15%',
      marginDetail: 'Promoter Equity Contribution',
      bankLoan: '85%',
      bankDetail: 'Funded via Scheduled Commercial Bank',
      guarantee: 'Up to 25%',
      guaranteeDetail: 'CGFTAH / NABSanrakshan Coverage',
      subvention: '3.0% p.a.',
      subventionDetail: 'Credited directly for 8 Years'
    },
    large: {
      name: 'Large Enterprises & Corporates',
      margin: '20% – 25%',
      marginDetail: 'Promoter Equity Contribution',
      bankLoan: '75% – 80%',
      bankDetail: 'Structured Corporate Project Debt',
      guarantee: 'Self / Collateral',
      guaranteeDetail: 'Standard Bank Security Appraisal',
      subvention: '3.0% p.a.',
      subventionDetail: 'Credited directly for 8 Years'
    },
    fpo: {
      name: 'Farmer Producer Orgs (FPOs) & Cooperatives',
      margin: '10%',
      marginDetail: 'Member Equity / Grant Blending',
      bankLoan: '90%',
      bankDetail: 'Nabkisan / Commercial Bank Syndication',
      guarantee: 'Up to 25%',
      guaranteeDetail: 'Full CGFTAH Scheme Coverage',
      subvention: '3.0% p.a.',
      subventionDetail: 'Credited directly for 8 Years'
    }
  };

  // 5-Stage Stepper
  const approvalSteps = [
    {
      step: '01',
      title: 'Agronomic & Site Feasibility Scrutiny',
      duration: 'Day 1–3',
      desc: 'Audit of land title (7/12 & 8A / Industrial NA / MIDC allotment), water quality test, raw milk/dung catchment yield, and electricity load feasibility.'
    },
    {
      step: '02',
      title: 'Bank-Grade AHIDF DPR Formulation',
      duration: 'Day 4–8',
      desc: 'Comprehensive Detailed Project Report detailing equipment proformas, civil drawings, CMA data, 8-year cash flow DSCR, and break-even sensitivity.'
    },
    {
      step: '03',
      title: 'Lending Bank Appraisal & Sanction',
      duration: 'Day 9–20',
      desc: 'Submitting the proposal to scheduled commercial or cooperative banks, defending technical viability, and securing formal in-principle bank sanction.'
    },
    {
      step: '04',
      title: 'DAHD Udyamimitra Portal Submission',
      duration: 'Day 21–25',
      desc: 'Uploading verified application, bank sanction letter, DPR, and KYC on the official ahidf.udyamimitra.in portal for Project Approval Committee (PAC) clearance.'
    },
    {
      step: '05',
      title: 'PAC Clearance & Subvention Release',
      duration: 'Milestone',
      desc: 'Tripartite agreement execution between Bank, DAHD, and SIDBI. Loan fund disbursement and quarterly 3% interest subvention auto-credit.'
    }
  ];

  // 5 AEO/GEO FAQs
  const faqs = [
    {
      q: "What is the Animal Husbandry Infrastructure Development Fund (AHIDF) scheme?",
      a: "AHIDF is a flagship Central Sector Scheme launched by the Department of Animal Husbandry and Dairying (DAHD), Ministry of Fisheries, Animal Husbandry & Dairying, Government of India, with a national corpus of ₹29,610.25 Crores. It incentivizes investments in dairy processing, meat processing, animal feed plants, breed multiplication farms, veterinary biologicals, and waste-to-wealth (CBG) projects by providing a 3% per annum interest subvention on bank term loans and a credit guarantee of up to 25% through NABSanrakshan."
    },
    {
      q: "What is the quantum of loan and promoter margin required under AHIDF?",
      a: "Under AHIDF, scheduled commercial banks and cooperative banks can fund up to 90% of total project cost. Minimum promoter margin contribution is strictly: 10% for Micro and Small enterprises, 15% for Medium enterprises, and 20%–25% for Large corporates and other entities. There is no predetermined upper cap on total project investment."
    },
    {
      q: "What is the duration of the 3% interest subvention and principal moratorium?",
      a: "The 3% interest subvention is provided for a maximum period of 8 years. This includes an initial moratorium period of up to 2 years on the principal repayment (only simple interest during construction/gestation), followed by 6 years of subsidized repayment tenure."
    },
    {
      q: "Are dairy cooperatives and FPOs eligible for AHIDF funding in Maharashtra?",
      a: "Yes. Following recent Union Cabinet approvals, eligible beneficiaries explicitly include Individual Entrepreneurs, Private Limited Companies, MSMEs, Farmer Producer Organizations (FPOs), Section 8 Companies, and Dairy Cooperatives seeking to establish or modernize processing infrastructure."
    },
    {
      q: "How does AB Consultancy assist in obtaining AHIDF approval in Ahilyanagar?",
      a: "AB Consultancy provides complete advisory: preliminary agronomic and techno-economic feasibility assessment, formulation of a bank-compliant DPR with CMA data and 8-year DSCR sensitivity, loan syndication with nationalized and private banks, online portal filing on the official ahidf.udyamimitra.in platform, and representation before the DAHD Project Approval Committee (PAC)."
    }
  ];

  const currentVertical = eligibleVerticals[selectedVertical];

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800 font-sans selection:bg-[#0062FF] selection:text-white">
      
      {/* 1. Hero Section: Authority Scheme Header */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 bg-gradient-to-b from-[#EBF3FE] via-[#F4F8FD] to-[#F4F8FD] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0062FF_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
            <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
              <li>
                <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
              <li>
                <Link to="/services" className="hover:text-[#0062FF] transition-colors">Services</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
              <li>
                <span className="text-slate-500">Government Subsidies</span>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
              <li className="text-slate-900 font-semibold" aria-current="page">AHIDF Scheme</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Animated Eyebrow Badge */}
            <AnimatedBadge 
              icon={Landmark} 
              text="DAHD • Ministry of Fisheries, Animal Husbandry & Dairying | ₹29,610 Cr National Corpus" 
              isHero={true} 
            />

            {/* H1 Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Animal Husbandry Infrastructure Development Fund (<span className="text-[#0062FF]">AHIDF</span>) in Ahilyanagar & Maharashtra
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-bold text-slate-700 leading-snug">
              Avail 3% Central Interest Subvention, 25% Credit Guarantee & Up to 90% Bank Debt Funding for Dairy, Feed, Meat & Biogas Infrastructure.
            </p>

            {/* Paragraph */}
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              Scale your animal husbandry and agro-processing enterprise with India’s highest-impact central sector scheme. Designed for dairy processing plants, compound cattle feed mills, modern hygienic abattoirs, and Bio-CNG waste-to-wealth facilities across Ahilyanagar and Maharashtra. AB Consultancy delivers bank-grade DPRs, Udyamimitra portal filing, and end-to-end PAC approvals.
            </p>

            {/* 4 High-Impact Scheme Metric Badges */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Interest Subvention</span>
                <span className="text-xl sm:text-2xl font-black text-[#0062FF] mt-0.5 block">3.0% p.a.</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">For up to 8 Years</span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Max Bank Funding</span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 block">Up to 90%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Min 10% Promoter Margin</span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Credit Guarantee</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5 block">Up to 25%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Under CGFTAH Trust</span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Principal Moratorium</span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 block">Up to 2 Yrs</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">During project gestation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check AHIDF Scheme Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book Bankable DPR Advisory</span>
              </button>
              <a
                href="tel:+919130894308"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0062FF] transition-colors py-2 px-3"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>+91 91308 94308</span>
              </a>
            </div>

            {/* Official Ministry & Agency Verification Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] sm:text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <BadgeCheck className="w-4 h-4 text-[#0062FF]" />
                DAHD Central Sector Scheme
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <BadgeCheck className="w-4 h-4 text-[#0062FF]" />
                SIDBI Nodal Fund Manager
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <BadgeCheck className="w-4 h-4 text-[#0062FF]" />
                NABSanrakshan CGFTAH Guarantee
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <BadgeCheck className="w-4 h-4 text-[#0062FF]" />
                ahidf.udyamimitra.in Portal Compliant
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive AHIDF Financial Incentive & Comparison Matrix */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Scale} text="Financial Scheme Economics" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why AHIDF is India’s Most Lucrative Agro-Infrastructure Scheme
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Compare a conventional commercial bank term loan against an AHIDF-subsidized debt facility. The 3% interest relief directly boosts cash flows and project IRR.
            </p>
          </div>

          {/* AEO Quick Answer Callout Box */}
          <div className="mb-10 bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-blue-50/80 rounded-2xl p-5 sm:p-7 border border-blue-100/90 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#0062FF] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <HelpCircle className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  What Financial Benefits Does AHIDF Offer to Animal Husbandry Entrepreneurs in Maharashtra?
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  Under the AHIDF scheme, entrepreneurs receive: (1) <strong>3.0% Annual Interest Subvention</strong> credited quarterly by DAHD for up to 8 years (saving lakhs to crores in interest), (2) <strong>Up to 90% Bank Term Loan</strong> reducing promoter equity burden to just 10%–15%, (3) <strong>Credit Guarantee Coverage up to 25%</strong> of the loan through CGFTAH (managed by NABSanrakshan/NABARD), and (4) <strong>Up to 2 Years Principal Repayment Moratorium</strong> so the plant can achieve steady production before principal EMIs commence.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table: Standard Loan vs AHIDF Loan */}
          <div className="overflow-x-auto">
            <div className="min-w-[680px] bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
              <div className="grid grid-cols-12 bg-slate-900 text-white p-4 text-xs font-bold uppercase tracking-wider">
                <div className="col-span-4">Financial Parameter</div>
                <div className="col-span-4 text-slate-300">Standard Commercial Loan</div>
                <div className="col-span-4 text-[#60A5FA]">AHIDF Subsidized Project Debt</div>
              </div>

              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="grid grid-cols-12 p-4 items-center bg-white">
                  <div className="col-span-4 font-bold text-slate-900">Net Effective Interest Rate</div>
                  <div className="col-span-4 text-slate-600">9.50% to 11.50% p.a.</div>
                  <div className="col-span-4 font-extrabold text-[#0062FF]">6.50% to 8.25% p.a. (3% Subvention)</div>
                </div>

                <div className="grid grid-cols-12 p-4 items-center bg-slate-50/50">
                  <div className="col-span-4 font-bold text-slate-900">Maximum Bank Debt Quantum</div>
                  <div className="col-span-4 text-slate-600">70% to 75% of Project Cost</div>
                  <div className="col-span-4 font-extrabold text-emerald-600">Up to 90% of Total Project Cost</div>
                </div>

                <div className="grid grid-cols-12 p-4 items-center bg-white">
                  <div className="col-span-4 font-bold text-slate-900">Required Promoter Margin</div>
                  <div className="col-span-4 text-slate-600">25% to 30% Down Payment</div>
                  <div className="col-span-4 font-extrabold text-slate-900">Just 10% (Micro/Small) or 15% (Medium)</div>
                </div>

                <div className="grid grid-cols-12 p-4 items-center bg-slate-50/50">
                  <div className="col-span-4 font-bold text-slate-900">Credit Guarantee Coverage</div>
                  <div className="col-span-4 text-slate-600">None / Full Real Estate Mortgage</div>
                  <div className="col-span-4 font-extrabold text-[#0062FF]">25% Sovereign Guarantee (CGFTAH)</div>
                </div>

                <div className="grid grid-cols-12 p-4 items-center bg-white">
                  <div className="col-span-4 font-bold text-slate-900">Principal Repayment Moratorium</div>
                  <div className="col-span-4 text-slate-600">6 to 12 Months Maximum</div>
                  <div className="col-span-4 font-extrabold text-emerald-600">Up to 24 Months (2 Full Years)</div>
                </div>

                <div className="grid grid-cols-12 p-4 items-center bg-slate-50/50">
                  <div className="col-span-4 font-bold text-slate-900">Total Facility Tenure</div>
                  <div className="col-span-4 text-slate-600">5 to 7 Years Repayment</div>
                  <div className="col-span-4 font-extrabold text-slate-900">Up to 8 Years (2 Yr Moratorium + 6 Yr EMI)</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The 6 Eligible Industry Verticals (Interactive Visual Category Showcase) */}
      <section className="py-12 sm:py-20 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-12">
            <AnimatedBadge icon={Building2} text="DAHD Approved Sectors" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6 Eligible Industry Verticals Under AHIDF Scheme
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore the six government-approved infrastructure sectors eligible for 3% interest subvention and 90% debt funding.
            </p>
          </div>

          {/* Vertical Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
            {[
              { id: 'dairy', label: 'Dairy Processing', icon: Milk },
              { id: 'feed', label: 'Feed Mills', icon: Warehouse },
              { id: 'meat', label: 'Meat Processing', icon: Beef },
              { id: 'breed', label: 'Breed Farms', icon: Tractor },
              { id: 'veterinary', label: 'Vaccines & Bio', icon: Wrench },
              { id: 'cbg', label: 'CBG & Biogas', icon: Flame }
            ].map((btn) => {
              const IconComponent = btn.icon;
              const isSelected = selectedVertical === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setSelectedVertical(btn.id)}
                  className={`p-3 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-white border-[#0062FF] shadow-md ring-2 ring-[#0062FF]/20 text-[#0062FF]'
                      : 'bg-white/70 border-slate-200/90 hover:bg-white text-slate-700'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isSelected ? 'text-[#0062FF]' : 'text-slate-500'}`} />
                  <span className="text-xs font-bold leading-tight">{btn.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Vertical Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <AnimatedBadge text={currentVertical.badge} className="!text-[10px] !px-2.5 !py-0.5 normal-case font-bold" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {currentVertical.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentVertical.summary}
                </p>

                {/* Scope of Investment Checklist */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Eligible Project Scope & Machinery Capex:
                  </h4>
                  <ul className="space-y-2.5">
                    {currentVertical.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900">
                  <strong className="font-bold">Regional Relevance:</strong> {currentVertical.marketImpact}
                </div>
              </div>

              {/* Right Column: Funding Specs */}
              <div className="lg:col-span-5 bg-[#0B1528] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#93C5FD] pb-3 border-b border-slate-800">
                    Scheme Financing Architecture
                  </h4>

                  <div className="divide-y divide-slate-800/80 my-4 space-y-3">
                    <div className="pt-2">
                      <span className="text-[11px] text-slate-400 block">Project Investment Quantum</span>
                      <span className="text-lg sm:text-xl font-black text-white">{currentVertical.quantum}</span>
                    </div>

                    <div className="pt-3">
                      <span className="text-[11px] text-slate-400 block">Bank Debt Support</span>
                      <span className="text-lg sm:text-xl font-black text-emerald-400">{currentVertical.funding}</span>
                    </div>

                    <div className="pt-3">
                      <span className="text-[11px] text-slate-400 block">Central Interest Subvention</span>
                      <span className="text-lg sm:text-xl font-black text-[#60A5FA]">{currentVertical.subvention}</span>
                    </div>

                    <div className="pt-3">
                      <span className="text-[11px] text-slate-400 block">Principal Moratorium</span>
                      <span className="text-lg sm:text-xl font-black text-amber-400">{currentVertical.moratorium}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={onCheckEligibility}
                    className="w-full py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Check DPR Feasibility for this Vertical</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Enterprise Classification & Margin Money Tiers */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Scale} text="Promoter Contribution Norms" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Promoter Margin & Debt Ratios by Enterprise Category
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              AHIDF categorizes applicants into four distinct tiers, offering favorable terms for MSMEs, FPOs, and cooperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(enterpriseTiers).map(([key, tier]) => (
              <div 
                key={key}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:border-blue-300 transition-all"
              >
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                    {tier.name}
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Promoter Margin</span>
                      <span className="text-xl font-black text-slate-900 block">{tier.margin}</span>
                      <span className="text-[11px] text-slate-500">{tier.marginDetail}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Bank Debt Share</span>
                      <span className="text-xl font-black text-[#0062FF] block">{tier.bankLoan}</span>
                      <span className="text-[11px] text-slate-500">{tier.bankDetail}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Credit Guarantee</span>
                      <span className="text-lg font-black text-emerald-600 block">{tier.guarantee}</span>
                      <span className="text-[11px] text-slate-500">{tier.guaranteeDetail}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Interest Subvention</span>
                      <span className="text-lg font-black text-slate-900 block">{tier.subvention}</span>
                      <span className="text-[11px] text-slate-500">{tier.subventionDetail}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 text-center">
                  <span className="text-[10px] font-bold text-[#0062FF] uppercase tracking-wider">
                    Eligible for Full DAHD Subvention
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. End-to-End AHIDF Portal Approval Workflow (5-Stage Horizontal Stepper) */}
      <section className="py-12 sm:py-20 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <AnimatedBadge icon={Rocket} text="Application & Disbursement Protocol" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              5-Stage AHIDF Sanction & Subvention Release Stepper
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              From site feasibility to bank loan sanction, online portal submission on ahidf.udyamimitra.in, and PAC subsidy credit.
            </p>
          </div>

          {/* Stepper Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {approvalSteps.map((st, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062FF] font-black text-xs flex items-center justify-center border border-blue-100">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {st.duration}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-[#0062FF]">
                  Verified Milestone Output
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Statutory Approvals & Regulatory Clearances Matrix */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={FileCheck} text="Regulatory Compliance Matrix" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Statutory Clearances Required for AHIDF Loan Disbursement
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              We guide you through mandatory local body, environmental, food safety, and electrical clearances to satisfy bank covenants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">1. Pollution Control (MPCB)</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Consent to Establish (CTE) before civil work</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Consent to Operate (CTO) before production</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Effluent Treatment Plant (ETP) blueprint</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Air emissions clearance for boilers & DG sets</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Milk className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">2. Food Safety & Licensing</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>FSSAI Central / State Manufacturing License</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>APEDA Registration (for meat & dairy export)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Factory Inspectorate (DISH) plan approval</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Water safety & potability lab certificate</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">3. Land & Civil Permissions</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Non-Agricultural (Industrial NA) Order</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>MIDC Plot Allotment & Tripartite Agreement</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sanctioned building layout from Town Planning</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Grampanchayat / Municipal NOC</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">4. Electrical & Animal Health</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>MSEDCL High-Tension (HT) Power Sanction</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Electrical Inspectorate Installation Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>District Animal Husbandry Veterinary Health NOC</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Biosecurity layout compliance certification</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Regional Agro-Climatic Advantage: Why Ahilyanagar is Maharashtra's Dairy Capital */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="bg-gradient-to-br from-[#0B1528] to-[#132238] rounded-3xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedBadge icon={MapPin} text="Regional Dairy & Agro Hub" isDark={true} className="mb-3" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Ahilyanagar: The Epicenter for Animal Husbandry in Maharashtra
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ahilyanagar (Ahmednagar) district is recognized as Maharashtra’s premier dairy cluster, producing millions of liters of milk every day across Sangamner, Kopargaon, Shrirampur, and Akole. Setting up processing and feed infrastructure here offers unparalleled logistical and supply-side advantages.
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[#60A5FA] block">#1</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Cow Milk District</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">40+ Lakh</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Liters/Day Output</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white block">15+</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Major Dairy Brands</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 block">3 Highways</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Direct Mumbai/Pune</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-2">Strategic Local Advantages</h3>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Dense network of cooperative milk societies and bulk chillers for assured raw milk supply.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Abundant sugarcane tops, corn silage, and oilseed cakes for economic feed manufacturing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Established industrial belts in Nagapur MIDC, Supa Parner, and Shrirampur with power infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Direct access to the Samruddhi Mahamarg & Pune-Nagar highway for fresh milk transport.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. Comprehensive Document Checklist (4-Column Matrix) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={FileCheck} text="Documentation Requisites" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              AHIDF Scheme Document Checklist
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Compile these primary documents to ensure zero rejection during bank appraisal and Udyamimitra portal filing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">1. Entity & Promoters</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Promoter PAN, Aadhaar & Residence Proof</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Certificate of Incorporation & MOA/AOA / Deed</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Udyam MSME Registration Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Board Resolution / Authorization Letter</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">2. Land & Civil Works</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sale Deed / Registered Lease Deed (Min 10 Yrs)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>7/12 & 8A Extract / Industrial NA Order</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>MIDC Allotment Letter & Possession Receipt</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Certified Architect Civil Estimate & Blueprints</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Factory className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">3. Machinery & Technology</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>OEM Quotations with GST & Technical Specs</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Plant Machinery Layout & Flowchart Diagram</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Refrigeration, Chiller & Boiler Specifications</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Raw milk/dung supply commitment letters</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">4. Financials & DPR</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 3 years audited balance sheets & ITRs</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 12 months primary bank statements</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Proof of promoter margin capital (10%–15%)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Bank-Compliant Detailed Project Report (DPR)</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Direct-Answer FAQs (AEO & GEO Targeted) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={HelpCircle} text="Frequently Asked Questions" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              AHIDF Scheme Advisory FAQs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear, factual answers regarding interest subventions, bank loan margins, Udyamimitra portal filing, and PAC approvals.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-[#0062FF]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Local GEO Advisory Desk Box */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="bg-gradient-to-br from-[#0B1528] to-[#1A2E4D] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-3">
                <AnimatedBadge icon={MapPin} text="Ahilyanagar AHIDF Advisory Desk" isDark={true} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Consult Our AHIDF Scheme Specialists in Ahilyanagar
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visit our office near Old ST Stand with your land 7/12 extract, vendor quotations, and business blueprint for an in-person DPR and subvention appraisal.
                </p>

                <div className="pt-2 space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                    <span>Office No. 106, 1st Floor, Baiju Height, Near Old ST Stand, Ahilyanagar (Ahmednagar), Maharashtra – 414001</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct: +91 91308 94308</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Email: info@abconsulting.net.in</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Office Hours: Monday – Saturday | 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-base font-bold text-white mb-1.5">Get Started Today</h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  Fast preliminary assessment to calculate your project loan quantum, 3% interest relief, and Udyamimitra portal readiness.
                </p>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={onBookAppointment}
                    className="w-full py-3 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    Book Priority Appointment
                  </button>
                  <a
                    href="tel:+919130894308"
                    className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Call Us (+91 91308 94308)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 11. Disclaimer & Regulatory Boundary */}
      <section className="py-6 bg-[#F4F8FD] text-slate-500 text-xs">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-1.5 text-center text-[11px] leading-relaxed">
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Disclaimer & Regulatory Boundary</p>
            <p>
              AB Consultancy is an independent project and financial advisory firm. We do not lend funds directly. All bank loans, credit guarantees, and interest subventions under the Animal Husbandry Infrastructure Development Fund (AHIDF) are subject to the independent credit evaluation and sanction policies of the respective lending banks and final approval by the Project Approval Committee (PAC), Department of Animal Husbandry & Dairying (DAHD), Government of India.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
