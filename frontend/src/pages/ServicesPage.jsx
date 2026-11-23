import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { 
  Landmark, 
  ShieldCheck, 
  FileText, 
  Award, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Search, 
  Filter, 
  TrendingUp, 
  Handshake, 
  FileCheck, 
  Building2, 
  Briefcase, 
  Factory, 
  Coins, 
  ChevronRight, 
  HelpCircle, 
  ChevronDown,
  ArrowUpRight,
  Shield,
  Layers,
  PhoneCall,
  Cog,
  Cpu,
  Wheat,
  Shirt,
  HeartPulse,
  FlaskConical,
  SunMedium,
  Eye,
  X,
  Maximize2
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

export default function ServicesPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const navigate = useNavigate();
  // Scroll to top & set document title on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useSEO({
    title: "Our Advisory Services | AB Consultancy Ahilyanagar",
    description: "Explore 7+ advisory services by AB Consultancy Ahilyanagar: Central & State Subsidies, PMEGP, PMFME, CGTMSE loans, and bank-grade DPR reports.",
    canonical: "https://www.abconsultancy.net.in/services",
    keywords: "Government Schemes Services Ahilyanagar, Bank Loan Advisory, DPR Preparation, PMEGP Consultant, PMFME Subsidy"
  });

  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') || searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('category') || 'All');
  const [faqTopic, setFaqTopic] = useState(() => {
    const cat = searchParams.get('category');
    return (cat && ['Loan Services', 'Subsidy Schemes', 'Other Consultancy Services'].includes(cat)) ? cat : 'All';
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedSectorTab, setSelectedSectorTab] = useState('All');
  const [activePosterModal, setActivePosterModal] = useState(null);

  // Sync URL search / category parameters on navigation
  useEffect(() => {
    const q = searchParams.get('q') || searchParams.get('search');
    if (q !== null && q !== undefined) {
      setSearchQuery(q);
      setSelectedCategory('All');
      const searchEl = document.getElementById('services-search-grid');
      if (searchEl) {
        setTimeout(() => searchEl.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
      if (['Loan Services', 'Subsidy Schemes', 'Other Consultancy Services'].includes(cat)) {
        setFaqTopic(cat);
      }
      const searchEl = document.getElementById('services-search-grid');
      if (searchEl) {
        setTimeout(() => searchEl.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  }, [searchParams]);

  // Escape key and body scroll lock for poster modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activePosterModal) {
        setActivePosterModal(null);
      }
    };
    if (activePosterModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePosterModal]);

  // Category Tabs (Aligned with 3 Core Sections)
  const categories = [
    'All',
    'Loan Services',
    'Subsidy Schemes',
    'Other Consultancy Services'
  ];

  // Official Services & Schemes Cards (Old 7 cards removed, ready for new cards)
  const allServices = [];

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = q === '' || 
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        (service.fullDesc && service.fullDesc.toLowerCase().includes(q)) ||
        service.category.toLowerCase().includes(q) ||
        service.benefit.toLowerCase().includes(q) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Specialized Industrial Sectors Database (Structured Matrix)
  const sectorCategories = [
    'All',
    'Manufacturing & Heavy Industry',
    'Agro & Consumer Goods',
    'Healthcare & Clean Tech'
  ];

  const industrySectors = [
    {
      id: 'mfg',
      category: 'Manufacturing & Heavy Industry',
      title: 'Manufacturing & Precision Engineering',
      shortName: 'Manufacturing',
      tagline: 'Auto-components, CNC job-works, fabrication & sheet metal tooling',
      icon: Cog,
      accentColor: 'blue',
      unitsCount: '180+ Units',
      capexRange: '₹25 Lakhs – ₹15 Crores',
      maxBenefit: 'Up to 35% Capital Grant + 7% Rebate',
      activities: ['Auto Components', 'CNC Machining', 'Fabrication', 'Press Tooling'],
      schemes: ['PMEGP Subsidy', 'CGTMSE Loans', 'Maharashtra PSI 2019', 'ZED Scheme']
    },
    {
      id: 'agro',
      category: 'Agro & Consumer Goods',
      title: 'Agro, Food Processing & Cold Chains',
      shortName: 'Agro & Food',
      tagline: 'Flour mills, spice processing, pulses, dairy & post-harvest pack houses',
      icon: Wheat,
      accentColor: 'emerald',
      unitsCount: '140+ Units',
      capexRange: '₹15 Lakhs – ₹8 Crores',
      maxBenefit: '35% Capital Subsidy (Max ₹10L) + 3% AIF Rebate',
      activities: ['Flour & Dal Mills', 'Spice Grinding', 'Dairy Units', 'Cold Storage'],
      schemes: ['PMFME (MoFPI)', 'Agri Infra Fund (AIF)', 'PMEGP Scheme', 'NABARD']
    },
    {
      id: 'textiles',
      category: 'Agro & Consumer Goods',
      title: 'Textiles, Apparel & Technical Weaving',
      shortName: 'Textiles',
      tagline: 'Ready-made garments, automated power looms & technical fabric finishing',
      icon: Shirt,
      accentColor: 'indigo',
      unitsCount: '90+ Units',
      capexRange: '₹20 Lakhs – ₹10 Crores',
      maxBenefit: '5% to 7% Interest Subvention + Power Tariff Waiver',
      activities: ['Apparel & Garments', 'Weaving Looms', 'Technical Textiles', 'Spinning'],
      schemes: ['State Textile Policy', 'PMEGP Subsidy', 'CGTMSE Term Debt', 'State PSI']
    },
    {
      id: 'healthcare',
      category: 'Healthcare & Clean Tech',
      title: 'Healthcare, Diagnostics & Pharma',
      shortName: 'Healthcare',
      tagline: 'Multi-specialty clinics, diagnostic pathology labs & pharmaceutical formulations',
      icon: HeartPulse,
      accentColor: 'rose',
      unitsCount: '60+ Units',
      capexRange: '₹30 Lakhs – ₹12 Crores',
      maxBenefit: 'Zero Property Mortgage up to ₹5 Cr + Priority Lending',
      activities: ['Diagnostic Labs', 'Hospitals & Clinics', 'Pharma Formulation', 'Surgical Units'],
      schemes: ['CGTMSE Healthcare', 'Stand-Up India', 'Equipment Term Debt', 'Emergency Credit']
    },
    {
      id: 'chemicals',
      category: 'Manufacturing & Heavy Industry',
      title: 'Chemicals, Polymers & Packaging',
      shortName: 'Chemicals',
      tagline: 'Plastic injection molding, corrugated boxes, resins & flexible packaging',
      icon: FlaskConical,
      accentColor: 'amber',
      unitsCount: '75+ Units',
      capexRange: '₹40 Lakhs – ₹20 Crores',
      maxBenefit: 'Gross SGST Refund (Up to 100% FCI) + Power Rebate',
      activities: ['Injection Molding', 'Corrugated Boxes', 'Industrial Resins', 'Polymers'],
      schemes: ['State PSI 2019', 'CGTMSE Loans', 'MPCB CTE/CTO Consent', 'CLCSS']
    },
    {
      id: 'solar',
      category: 'Healthcare & Clean Tech',
      title: 'Renewable Energy, Solar & Clean Tech',
      shortName: 'Clean Energy',
      tagline: 'Industrial rooftop solar plants, agricultural pumps & biomass briquettes',
      icon: SunMedium,
      accentColor: 'cyan',
      unitsCount: '50+ Units',
      capexRange: '₹25 Lakhs – ₹15 Crores',
      maxBenefit: '40% Accelerated Depreciation + Net-Metering Offsets',
      activities: ['Rooftop Solar', 'Biomass Briquettes', 'Solar Pumps', 'Waste-to-Wealth'],
      schemes: ['PM-KUSUM Scheme', 'IREDA Green Debt', 'CGTMSE Green Loans', 'State Solar Policy']
    }
  ];

  // Topic-Specific Frequently Asked Questions (Curated for each service pillar)
  const serviceFaqs = [
    // 1. Loan Services FAQs
    {
      topic: 'Loan Services',
      q: 'What types of business and project loans does AB Consultancy facilitate?',
      a: 'We facilitate end-to-end processing for Business Loans, Industrial Project Finance, Machinery Term Loans, Working Capital (Cash Credit / Overdraft), Loan Against Property (LAP), Hotel & Restaurant Loans, Agriculture Loans, and Government-Sponsored Credit Schemes across 40+ nationalized and private banking partners.'
    },
    {
      topic: 'Loan Services',
      q: 'Can I obtain a business or machinery loan without pledging property collateral?',
      a: 'Yes, under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme, eligible MSMEs can secure collateral-free term loans and working capital facilities up to ₹5 Crore. The guarantee coverage is extended directly by the trust to the lending bank, eliminating the requirement for third-party collateral or personal immovable property mortgage.'
    },
    {
      topic: 'Loan Services',
      q: 'What documents are required for sanctioning business, machinery, or project loans?',
      a: 'Standard documentation includes KYC of promoters, 3 years ITR with computation, audited balance sheets & P&L statements, 6–12 months bank statements, proforma invoice/quotations for plant and machinery or civil works, Udyam registration, and a bank-compliant Detailed Project Report (DPR) with CMA data.'
    },
    {
      topic: 'Loan Services',
      q: 'How do banks evaluate Loan Against Property (LAP) and Working Capital limits?',
      a: 'For LAP, banks assess clear title deed records, approved building plans, and fair market valuation (typically sanctioning 50% to 70% Loan-to-Value). For Working Capital (CC/OD), limits are evaluated against your operating cash cycle, debtor turnaround velocity, and projected annual sales turnover adhering strictly to RBI turnover and MPBF appraisal norms.'
    },
    {
      topic: 'Loan Services',
      q: 'What is the typical interest rate and repayment tenure for machinery and project finance?',
      a: 'Interest rates generally range from 8.5% to 11.5% p.a. depending on external credit rating and EBLR/MCLR benchmarks. Machinery term loans typically span 5 to 7 years, while larger Greenfield/Brownfield project finance tenures can extend up to 10 years, including a 6 to 18-month principal moratorium during factory construction.'
    },

    // 2. Subsidy Schemes FAQs
    {
      topic: 'Subsidy Schemes',
      q: 'How much government capital subsidy can I receive under PMEGP or CMEGP?',
      a: 'Under PMEGP (Central Government) and CMEGP (Government of Maharashtra), eligible entrepreneurs can avail 15% to 35% capital subsidy on project costs up to ₹50 Lakhs for manufacturing units and ₹20 Lakhs for service units. Priority categories (Women, SC/ST, OBC, Minorities, Ex-servicemen, and Rural factory locations) receive the highest 25% to 35% subsidy bracket.'
    },
    {
      topic: 'Subsidy Schemes',
      q: 'Can a single manufacturing enterprise combine Central Subsidies with Maharashtra State PSI incentives?',
      a: 'Yes. Eligible industrial units can synergize central credit-linked capital subsidies (such as PMEGP or PMFME) along with Maharashtra Package Scheme of Incentives (PSI 2019/2024). This provides substantial cumulative benefits including Industrial Promotion Subsidy (IPS), electricity duty exemption, power tariff rebates, and term loan interest subvention based on Taluka zonal categorization.'
    },
    {
      topic: 'Subsidy Schemes',
      q: 'How does the PMFME scheme support food processing micro-enterprises?',
      a: 'PMFME provides a 35% credit-linked capital subsidy up to ₹10 Lakhs per micro-enterprise for technology upgradation, hygienic processing machinery, and testing equipment. For Farmer Producer Organizations (FPOs), SHGs, and Producer Cooperatives, capital grants extend up to ₹3 Crore for common incubation and processing infrastructure.'
    },
    {
      topic: 'Subsidy Schemes',
      q: 'When and how is the government subsidy amount credited and adjusted against my loan?',
      a: 'Government capital subsidies are credit-linked and not disbursed as upfront cash. Upon loan disbursement, the subsidy amount is released by the nodal agency (such as KVIC or DIC) into a Subsidy Reserve Fund / Term Deposit Receipt (TDR) account in the financing bank. It is held for a 3-year lock-in period without interest and adjusted against the term loan principal after successful joint physical verification.'
    },
    {
      topic: 'Subsidy Schemes',
      q: 'What subsidies and interest concessions exist for Agriculture Infrastructure (AIF, AHIDF, NHB)?',
      a: 'Under the Agriculture Infrastructure Fund (AIF), projects receive a 3% per annum interest subvention on term loans up to ₹2 Crore for post-harvest storage and processing. Animal Husbandry Infrastructure Development Fund (AHIDF) offers a 3% interest subvention for dairy and feed plants, while National Horticulture Board (NHB) provides 35% to 50% capital subsidies for commercial horticulture, cold chains, and packhouses.'
    },

    // 3. Other Consultancy Services FAQs
    {
      topic: 'Other Consultancy Services',
      q: 'Why is a Bank-Grade DPR crucial for loan and subsidy sanctions?',
      a: 'Commercial banks and government subsidy sanction committees reject generic business outlines. A professional Detailed Project Report (DPR) formulated by ex-bank credit analysts contains comprehensive technical feasibility, 7–10 year balance sheet and cash flow projections, CMA financial statements, Debt Service Coverage Ratio (DSCR), Break-Even Points, and sensitivity models that meet strict credit committee criteria.'
    },
    {
      topic: 'Other Consultancy Services',
      q: 'What does your Business Setup & Statutory Licensing Guidance cover?',
      a: 'We provide 360-degree setup support for new ventures: entity structure advisory (Proprietorship, Partnership, LLP, or Private Limited), Udyam MSME registration, GST registration, Shop Act licensing, FSSAI food licenses, Pollution Control Board NOCs, and sector-specific industrial clearances needed for legal, uninterrupted operations.'
    },
    {
      topic: 'Other Consultancy Services',
      q: 'How long does the entire consulting engagement take from DPR drafting to bank sanction?',
      a: 'A bank-compliant DPR and CMA file is prepared within 3 to 5 business days. Once submitted to the bank alongside government portal filings, credit appraisal and formal bank sanction typically take 2 to 4 weeks depending on the bank branch, followed immediately by government portal subsidy tracking.'
    },
    {
      topic: 'Other Consultancy Services',
      q: 'Do you assist with government portal filings and answering departmental queries?',
      a: 'Yes, our engagement covers end-to-end liaison. We manage registration and document uploads on national portals (PMEGP e-Portal, PMFME, AIF) and state portals (Maitri / Maharashtra PSI), draft structured replies to technical queries raised by District Industries Centres (DIC) or bank managers, and guide your file until final sanction.'
    },
    {
      topic: 'Other Consultancy Services',
      q: 'What is your consultation fee structure and are there upfront hidden costs?',
      a: 'Our initial scheme suitability consultation and eligibility appraisal are 100% free of charge. Our formal consulting engagement operates on transparent, milestone-based professional fees directly tied to concrete deliverables (DPR drafting, bank file submission, sanction milestone). We strictly uphold ethical advisory with zero hidden charges.'
    }
  ];

  // FAQ Topics configuration with matching icons and active counts
  const faqTopics = [
    { id: 'All', label: 'All Topics', icon: HelpCircle },
    { id: 'Loan Services', label: 'Loan Services', icon: Coins },
    { id: 'Subsidy Schemes', label: 'Subsidy Schemes', icon: Award },
    { id: 'Other Consultancy Services', label: 'Other Consultancy Services', icon: Briefcase }
  ];

  // Filtered FAQs based on selected FAQ topic
  const filteredFaqs = useMemo(() => {
    if (faqTopic === 'All') return serviceFaqs;
    return serviceFaqs.filter(faq => faq.topic === faqTopic);
  }, [faqTopic, serviceFaqs]);

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800">
      
      {/* 1. Services Hero Banner */}
      <section className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-[#E6F0FE] via-[#EDF4FE] to-[#F4F8FD] border-b border-slate-200/60 overflow-hidden">
        {/* Subtle Decorative Background Blobs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0062FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 sm:mb-6">
            <a href="/" className="hover:text-brand-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-brand-600 font-semibold">Services</span>
          </div>

          <div className="max-w-4xl">
            {/* Signature Eyebrow Pill Tag with Smooth Left-to-Right Reveal & Character Animation */}
            <AnimatedBadge 
              icon={Landmark} 
              text="Core Advisory Desk • Key Services & Schemes" 
              isHero 
            />

            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">Government Schemes</span>, Bank Loans & Advisory Services
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              From Central & State subsidy grants and collateral-free bank funding, to bank-compliant DPR financial modeling and industrial state incentives — explore our primary consulting solutions.
            </p>

            {/* Quick Metrics & Trust Highlights */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>₹180+ Cr Subsidies Disbursed</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>99.4% First-Attempt Bank Sanction</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <Building2 className="w-4 h-4 text-brand-600" />
                <span>40+ Commercial Banks Network</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive Search & Category Filter Section */}
      <section id="services-search-grid" className="py-6 sm:py-8 bg-white border-b border-slate-200/80 relative z-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, schemes, DPR, CGTMSE..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills (Wrap neatly on desktop, smooth hidden-scrollbar swipe on mobile) */}
            <div className="w-full lg:w-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto lg:overflow-visible lg:flex-wrap pb-1 sm:pb-0 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                      isSelected
                        ? 'bg-brand-500 text-white shadow-brand shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Results Count & Active Filter indicator */}
          {allServices.length > 0 && (
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong className="text-slate-900">{filteredServices.length}</strong> of {allServices.length} services
              </span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-brand-600 hover:text-brand-700 font-semibold cursor-pointer underline"
                >
                  Reset all filters
                </button>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 3. Core Services Grid (Ready for New Cards) */}
      <section className="py-10 sm:py-14">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          
          {allServices.length === 0 ? (
            <div className="text-center py-16 px-6 bg-white rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062FF] flex items-center justify-center mx-auto mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Ready for New Service Cards</h3>
              <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto">
                All 7 previous cards have been removed from the code. Ready to implement the new cards.
              </p>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 max-w-lg mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No Services Found</h3>
              <p className="text-xs text-slate-500 mt-1">
                We couldn't find any service matching "{searchQuery}". Try searching for another term like "PMEGP", "Loan", or "Subsidy".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-5 px-5 py-2.5 rounded-full bg-brand-500 text-white text-xs font-bold shadow-brand hover:bg-brand-600 transition-colors cursor-pointer"
              >
                View All Services
              </button>
            </div>
          ) : (
            /* Official 7 Schemes & Services Poster Cards Grid (4 Cards in One Line on Desktop) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl lg:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,98,255,0.12)] hover:border-brand-500/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group w-full"
                >
                  {/* Poster Graphic Container (Aspect Ratio 2:3 matching 1024x1536, full height shown without crop) */}
                  <div 
                    className="relative aspect-[2/3] w-full bg-slate-100 overflow-hidden cursor-pointer"
                    onClick={() => setActivePosterModal(service)}
                  >
                    <img
                      src={service.poster}
                      alt={`${service.title} - Official Poster`}
                      className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Gradient Overlay & Hover Preview Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-4 pointer-events-none">
                      <div className="flex justify-end">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-md">
                          <Maximize2 className="w-3 h-3 text-brand-600" />
                          <span>View Full Poster</span>
                        </span>
                      </div>
                      <div className="text-white">
                        <p className="text-[11px] font-medium text-slate-200 line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Category / Badge Pill */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10 pointer-events-none">
                      <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-200/80 shadow-xs">
                        {service.category}
                      </span>
                      {service.popular && (
                        <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider bg-brand-500 text-white px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                          <Zap className="w-2.5 h-2.5" />
                          <span>High Demand</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content & Action Bar */}
                  <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-white border-t border-slate-100">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-bold text-emerald-600 flex items-center gap-1.5 mt-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {service.benefit}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (service.detailUrl) {
                            navigate(service.detailUrl);
                          } else {
                            onCheckEligibility();
                          }
                        }}
                        className="flex-1 py-2 px-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-brand transition-all cursor-pointer whitespace-nowrap"
                      >
                        <span>Check Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                      </button>
                      <button
                        onClick={() => setActivePosterModal(service)}
                        className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        title="View high-resolution poster"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Poster</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Specialized Industry Sector Coverage Matrix */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-3xl">
              <AnimatedBadge 
                icon={Factory} 
                text="Multi-Sector Industrial Expertise • 590+ Projects Funded" 
                className="mb-2.5" 
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sectors We Specialize In
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 mt-2 leading-relaxed max-w-2xl">
                Every industry operates under distinct government gazettes, capex subsidy ceilings, and bank appraisal metrics. Explore our structured financing frameworks across 6 core industrial sectors.
              </p>
            </div>

            {/* Sector Quick Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none [&::-webkit-scrollbar]:hidden flex-shrink-0">
              {sectorCategories.map((cat) => {
                const isSelected = selectedSectorTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedSectorTab(cat)}
                    className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6 Structured Sector Cards (Balanced 3x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {industrySectors
              .filter(sec => selectedSectorTab === 'All' || sec.category === selectedSectorTab)
              .map((sec) => {
                const IconComp = sec.icon;
                
                // Color mapping for structured accents
                const theme = {
                  blue: {
                    badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
                    iconBg: 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
                    topBorder: 'bg-gradient-to-r from-blue-600 to-brand-500',
                    highlightBadge: 'text-blue-700 bg-blue-50/80 border-blue-100',
                    benefitTag: 'text-blue-700 font-bold'
                  },
                  emerald: {
                    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
                    iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
                    topBorder: 'bg-gradient-to-r from-emerald-600 to-teal-500',
                    highlightBadge: 'text-emerald-700 bg-emerald-50/80 border-emerald-100',
                    benefitTag: 'text-emerald-700 font-bold'
                  },
                  indigo: {
                    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
                    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
                    topBorder: 'bg-gradient-to-r from-indigo-600 to-purple-500',
                    highlightBadge: 'text-indigo-700 bg-indigo-50/80 border-indigo-100',
                    benefitTag: 'text-indigo-700 font-bold'
                  },
                  rose: {
                    badge: 'bg-rose-50 text-rose-700 border-rose-200/80',
                    iconBg: 'bg-rose-50 border-rose-200 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
                    topBorder: 'bg-gradient-to-r from-rose-600 to-pink-500',
                    highlightBadge: 'text-rose-700 bg-rose-50/80 border-rose-100',
                    benefitTag: 'text-rose-700 font-bold'
                  },
                  amber: {
                    badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
                    iconBg: 'bg-amber-50 border-amber-200 text-amber-700 group-hover:bg-amber-600 group-hover:text-white',
                    topBorder: 'bg-gradient-to-r from-amber-600 to-orange-500',
                    highlightBadge: 'text-amber-800 bg-amber-50/80 border-amber-100',
                    benefitTag: 'text-amber-800 font-bold'
                  },
                  cyan: {
                    badge: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
                    iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white',
                    topBorder: 'bg-gradient-to-r from-cyan-600 to-sky-500',
                    highlightBadge: 'text-cyan-800 bg-cyan-50/80 border-cyan-100',
                    benefitTag: 'text-cyan-800 font-bold'
                  }
                }[sec.accentColor];

                return (
                  <div
                    key={sec.id}
                    className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-brand-400/80 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group overflow-hidden"
                  >
                    {/* Subtle Watermark Icon in Background */}
                    <div className="absolute -bottom-6 -right-6 text-slate-100/70 pointer-events-none group-hover:scale-110 group-hover:text-slate-200/60 transition-transform duration-500">
                      <IconComp className="w-36 h-36" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Header: Icon + Units Badge */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 shadow-xs transition-colors duration-200 ${theme.iconBg}`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border shadow-xs ${theme.badge}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{sec.unitsCount} Funded</span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {sec.tagline}
                      </p>

                      {/* Financial Parameter Strip (Structured Matrix) */}
                      <div className="mt-4 p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/70 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-medium">Capex Bracket:</span>
                          <strong className="text-slate-900 font-semibold">{sec.capexRange}</strong>
                        </div>
                        <div className="h-px bg-slate-200/60" />
                        <div className="flex items-start justify-between text-xs gap-2">
                          <span className="text-slate-500 font-medium flex-shrink-0">Max Govt Incentive:</span>
                          <span className={`text-right text-[11.5px] ${theme.benefitTag}`}>{sec.maxBenefit}</span>
                        </div>
                      </div>

                      {/* Focus Sub-Activities */}
                      <div className="mt-4">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Eligible Sub-Activities:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {sec.activities.map((act, aIdx) => (
                            <span 
                              key={aIdx} 
                              className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/90 px-2 py-0.5 rounded-md shadow-xs"
                            >
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Core Schemes Alignment */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 flex-1 flex flex-col justify-end">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Core Schemes Mapped:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {sec.schemes.map((sch, sIdx) => (
                            <span 
                              key={sIdx}
                              className={`text-[10.5px] font-bold px-2 py-0.5 rounded-md border ${theme.highlightBadge}`}
                            >
                              {sch}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action CTA */}
                    <div className="relative z-10 mt-5 pt-3.5 border-t border-slate-100">
                      <button
                        onClick={onCheckEligibility}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-brand-500 text-slate-700 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 group/btn cursor-pointer border border-slate-200 hover:border-brand-500 shadow-xs"
                      >
                        <span>Check {sec.shortName} Eligibility</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>

                  </div>
                );
              })}
          </div>

          {/* Bottom High-Trust Industrial Banner */}
          <div className="mt-10 lg:mt-12 p-6 sm:p-7 rounded-2xl lg:rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center lg:text-left">
                <div 
                  className="relative inline-flex items-center px-3 py-1 rounded-full text-brand-300 text-[11px] font-bold uppercase tracking-wider mb-2 w-fit select-none overflow-hidden"
                  aria-label="Cross-Sector Advisory Advantage"
                >
                  {/* Badge Background / Pill Layer - Reveals smoothly left-to-right (0–900ms) */}
                  <div 
                    className="absolute inset-0 rounded-full bg-brand-500/20 border border-brand-500/30 shadow-xs animate-badge-pill pointer-events-none z-0" 
                  />

                  {/* Text - Reveals sequentially character-by-character (400–1800ms) */}
                  <span className="relative z-10 inline-flex items-center" aria-hidden="true">
                    {'Cross-Sector Advisory Advantage'.split('').map((char, index) => (
                      <span
                        key={index}
                        className="animate-badge-char"
                        style={{
                          animationDelay: `${400 + index * 28}ms`,
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Don’t See Your Specific Industrial Activity Listed?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  We formulate DPRs and unlock subsidies for 50+ specialized manufacturing sub-sectors, including paper conversion, foundry casting, recycling, warehousing, and tech services.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
                <button
                  onClick={onTalkConsultant}
                  className="py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-brand transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Sector Scheme Mapping</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onCheckEligibility}
                  className="py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition-colors border border-slate-700 cursor-pointer"
                >
                  Check General Eligibility
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Frequently Asked Service Questions */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-t border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <div className="flex justify-center mb-2">
              <AnimatedBadge 
                icon={HelpCircle} 
                text="Frequently Asked Questions" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Select a service topic below to explore tailored answers regarding business loans, government subsidies, and project consultancy.
            </p>

            {/* Interactive Topic Selector Tabs */}
            <div className="mt-6 flex items-center justify-start sm:justify-center sm:flex-wrap gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-2 pt-1 px-1">
              {faqTopics.map((topic) => {
                const IconComponent = topic.icon;
                const isActive = faqTopic === topic.id;
                const count = topic.id === 'All' 
                  ? serviceFaqs.length 
                  : serviceFaqs.filter(f => f.topic === topic.id).length;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      setFaqTopic(topic.id);
                      setOpenFaq(0);
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shadow-xs ${
                      isActive
                        ? 'bg-[#0062FF] text-white shadow-[0_2px_8px_rgba(0,98,255,0.25)] ring-2 ring-[#0062FF]/20'
                        : 'bg-white text-slate-600 hover:text-[#0062FF] hover:bg-slate-50 border border-slate-200/80'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{topic.label}</span>
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={`${faq.topic}-${idx}`}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0062FF] transition-colors cursor-pointer"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`inline-flex items-center text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                          faq.topic === 'Loan Services'
                            ? 'bg-blue-50 text-blue-700 border-blue-200/60'
                            : faq.topic === 'Subsidy Schemes'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
                            : 'bg-purple-50 text-purple-700 border-purple-200/60'
                        }`}>
                          {faq.topic}
                        </span>
                      </div>
                      <span className="leading-snug">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'rotate-180 text-[#0062FF]' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Full-Width Consultation Call-to-Action */}
      <section className="py-14 sm:py-20 bg-[#0B1528] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <AnimatedBadge 
              icon={ShieldCheck} 
              text="Zero Upfront Advisory Fee" 
              isDark 
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Fund Your New Enterprise or Machinery?
          </h2>

          <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Connect with our ex-bank accredited financial analysts to map your optimal Central & State subsidy package and prepare a bank-compliant DPR file.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onCheckEligibility}
              className="px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-brand hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Check Scheme Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBookAppointment}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Book Priority Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* High-Resolution Poster Lightbox Modal */}
      {activePosterModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActivePosterModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-white/10 bg-slate-900/95 text-white">
              <div className="min-w-0 pr-3">
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {activePosterModal.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-brand-300 font-medium">
                  {activePosterModal.benefit}
                </p>
              </div>
              <button
                onClick={() => setActivePosterModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close poster preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image (Full Resolution) */}
            <div className="relative max-h-[75vh] overflow-y-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src={activePosterModal.poster}
                alt={activePosterModal.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg mx-auto"
              />
            </div>

            {/* Modal Footer CTA */}
            <div className="p-3.5 sm:p-4 border-t border-white/10 bg-slate-900 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-300 font-medium">
                Official Scheme Consultation Desk
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const detailUrl = activePosterModal?.detailUrl;
                    setActivePosterModal(null);
                    if (detailUrl) {
                      navigate(detailUrl);
                    } else {
                      onCheckEligibility?.();
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-brand transition-all cursor-pointer"
                >
                  <span>Check Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setActivePosterModal(null);
                    onTalkConsultant?.();
                  }}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Talk to Consultant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
