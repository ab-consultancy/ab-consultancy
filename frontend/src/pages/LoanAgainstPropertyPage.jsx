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
  Home,
  FileSpreadsheet,
  Percent,
  Warehouse
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

export default function LoanAgainstPropertyPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Loan Against Property (LAP) Ahilyanagar | Mortgage Term Loans",
    description: "Secure high-value Loan Against Property (LAP) in Ahilyanagar & Maharashtra. Up to 75% LTV on commercial, industrial & residential properties, ₹25 Lakhs to ₹50 Crores, 15-year tenure & debt consolidation advisory.",
    canonical: "https://www.abconsultancy.net.in/services/loan-against-property",
    keywords: "Loan Against Property Ahilyanagar, LAP Loan Ahmednagar, Commercial Property Mortgage Loan Nagar, Industrial Land LAP MIDC, Residential LAP Debt Consolidation, Lease Rental Discounting LRD Ahilyanagar, Mortgage Loan Consultant Maharashtra"
  });

  // Comprehensive JSON-LD Structured Schema (FinancialProduct + LocalBusiness + FAQPage)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FinancialProduct",
          "@id": "https://www.abconsultancy.net.in/services/loan-against-property#product",
          "name": "Loan Against Property (LAP) Advisory Services",
          "alternateName": "Mortgage Loan & Debt Consolidation Advisory",
          "description": "Professional advisory for structuring and securing high-value mortgage term loans against residential, commercial, and industrial properties up to 75% LTV across Maharashtra.",
          "provider": {
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
            { "@type": "City", "name": "Ahmednagar" },
            { "@type": "City", "name": "Pune" },
            { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
            { "@type": "City", "name": "Nashik" },
            { "@type": "AdministrativeArea", "name": "Maharashtra" }
          ],
          "termsOfService": "Subject to clear 30-year legal property title, bank-approved valuation, and repayment capacity appraisal.",
          "annualPercentageRate": "8.75% to 10.50% p.a."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.abconsultancy.net.in/services/loan-against-property#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Loan Against Property (LAP) and what is the maximum Loan-to-Value (LTV) funded?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Loan Against Property (LAP) is a secured term loan where borrowers pledge residential, commercial, or industrial real estate as collateral to raise long-term capital with no end-use restriction. In Ahilyanagar and Maharashtra, banks sanction up to 65%–75% LTV for residential properties, 55%–65% for commercial offices/shops, and 50%–60% for industrial plots and factory sheds based on fair market valuation."
              }
            },
            {
              "@type": "Question",
              "name": "Can an industrial plot or MIDC factory shed be pledged for a LAP loan in Ahilyanagar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Freehold industrial NA properties and MIDC leasehold plots (with valid MIDC tripartite agreements and NOC) are eligible for LAP funding. Banks evaluate the remaining lease period, MIDC transfer clearance, industrial building approvals, and enterprise DSCR to sanction loans from ₹50 Lakhs up to ₹50 Crores."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between LAP and an unsecured business loan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unsecured business loans have high interest rates (15%–22%), short tenures (1–3 years), and caps up to ₹50–75 Lakhs. In contrast, LAP offers low interest rates (8.75%–10.50%), extended repayment tenures up to 10–15 years, significantly lower monthly EMIs, and sanction amounts up to ₹50 Crores."
              }
            },
            {
              "@type": "Question",
              "name": "Can I transfer my existing high-interest LAP to another bank with a top-up loan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Balance Transfer (BT) with Top-Up is one of our primary advisory specializations. We evaluate your current outstanding mortgage balance, re-appraise your property at current market value, and transfer your debt to a top-tier PSU or private bank at 1%–2% lower interest rates while unlocking 20%–50% additional liquidity via top-up."
              }
            },
            {
              "@type": "Question",
              "name": "What legal title documents are mandatory for LAP mortgage sanction?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Banks require a 30-year registered title chain, registered sale deed or gift deed, latest 7/12 & 8A extracts or city survey property card (PR Card), sanctioned building layout plan with municipal/Grampanchayat commencement/completion certificates, latest property tax receipts, non-encumbrance certificate (Search Report), and NIL mutation entries."
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

  // 6 Institutional LAP Programs
  const lapPrograms = [
    {
      id: "commercial-property-lap",
      title: "1. Commercial Property LAP (Offices, Showrooms & Malls)",
      category: "Commercial Real Estate",
      summary: "High-quantum mortgage finance against fully completed or leased commercial shops, corporate offices, retail spaces, and standalone commercial complexes.",
      specs: [
        { label: "Loan Quantum", value: "₹50 Lakhs to\n₹50 Crores", sub: null },
        { label: "Max LTV", value: "Up to 65%–70%", sub: "Of Fair Market Value" },
        { label: "Tenure", value: "Up to 15 Years", sub: "(Low Monthly EMI)" },
        { label: "Interest Rate", value: "8.75% – 9.75%", sub: "Floating / Fixed" }
      ],
      points: [
        "Unlocks high liquid capital without liquidating valuable prime commercial assets",
        "Higher loan eligibility based on rental cash flows and business balance sheet",
        "Available for proprietorships, partnerships, LLPs, and Private Limited companies"
      ],
      bestFor: "Retailers, Wholesale Traders, Corporate Offices, Multi-Storey Commercial Complexes",
      icon: Building2,
      badge: "Commercial Real Estate"
    },
    {
      id: "industrial-lap",
      title: "2. Industrial Land & Factory Shed LAP (MIDC & Private NA)",
      category: "Industrial Mortgages",
      summary: "Structured mortgage term funding against industrial land, factory buildings, manufacturing sheds, and warehouse godowns in MIDC and private NA zones.",
      specs: [
        { label: "Loan Quantum", value: "₹1 Crore to\n₹40 Crores", sub: null },
        { label: "Max LTV", value: "50% to 60%", sub: "Industrial Valuation" },
        { label: "Tenure", value: "7 to 12 Years", sub: "(Moratorium Available)" },
        { label: "Processing", value: "MIDC Tripartite", sub: "Clearance Handled" }
      ],
      points: [
        "MIDC tripartite agreement liaison and mortgage permission documentation",
        "Enables factory expansion, working capital infusion, or technology upgrades",
        "Structured against plant premises in Nagapur MIDC, Supa Parner, Shrirampur, and Chakan"
      ],
      bestFor: "Manufacturers, Auto-Component Units, Engineering Works, Large Warehouses",
      icon: Factory,
      badge: "Industrial & MIDC"
    },
    {
      id: "residential-property-lap",
      title: "3. Residential Property Mortgage Loan (Houses, Bungalows & Flats)",
      category: "Residential Mortgages",
      summary: "Cost-effective mortgage debt secured against self-occupied or rented residential homes, bungalows, apartments, and open NA residential plots.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹15 Crores", sub: null },
        { label: "Max LTV", value: "Up to 75%", sub: "Highest Bank LTV" },
        { label: "Tenure", value: "Up to 15 Years", sub: "(Longest Repayment)" },
        { label: "Interest Rate", value: "8.60% – 9.50%", sub: "Prime Lending Rate" }
      ],
      points: [
        "Highest LTV ratio among all property categories for maximum borrowing power",
        "Cheapest funding alternative compared to personal loans and unsecured business finance",
        "Zero end-use restriction: fund business working capital, medical needs, or capital goods"
      ],
      bestFor: "Business Promoters, MSME Directors, Professionals, Doctors, and Self-Employed",
      icon: Home,
      badge: "Residential Mortgage"
    },
    {
      id: "balance-transfer-topup",
      title: "4. LAP Balance Transfer with High-Value Top-Up",
      category: "Refinancing & Equity",
      summary: "Refinance your existing high-cost mortgage loan from NBFCs or cooperative banks to leading public or private banks at substantially lower interest rates.",
      specs: [
        { label: "Rate Reduction", value: "1.0% to 2.5%", sub: "Direct Interest Savings" },
        { label: "Top-Up Quantum", value: "Up to ₹10 Crores", sub: "Additional Liquidity" },
        { label: "Tenure Reset", value: "Fresh 15 Yrs", sub: "Reduces Monthly EMI" },
        { label: "Foreclosure Support", value: "100% Handled", sub: "Smooth NOC Clearance" }
      ],
      points: [
        "Re-valuation at current appreciated real estate prices to unlock surplus top-up funds",
        "Reduces monthly EMI cash outflow by 20% to 35% through extended tenure reset",
        "Seamless takeover of original title deeds with complete legal closure of previous lender"
      ],
      bestFor: "Borrowers with existing NBFC / Co-op loans paying over 10.75% interest",
      icon: Percent,
      badge: "Refinancing & Top-Up"
    },
    {
      id: "debt-consolidation-lap",
      title: "5. Debt Consolidation Term Loan via Property Mortgage",
      category: "Balance Sheet Restructuring",
      summary: "Consolidate multiple high-cost unsecured business loans, credit lines, machinery debts, and NBFC borrowings into a single, low-interest mortgage loan.",
      specs: [
        { label: "Target Reduction", value: "30%–50% Cut", sub: "In Total Monthly EMI" },
        { label: "Unified Loan", value: "Single EMI", sub: "Replaces 5–10 Debts" },
        { label: "Tenure Stretch", value: "Up to 15 Years", sub: "Instant Cash Relief" },
        { label: "Credit Health", value: "CIBIL Boost", sub: "Cleans Debt Ratios" }
      ],
      points: [
        "Eliminates crippling monthly repayment stress and clears high-rate 18%–24% borrowings",
        "Restores working capital cash flow and improves debt-service coverage ratio (DSCR)",
        "Structured financial modeling to prove enhanced repayment viability to the credit committee"
      ],
      bestFor: "Enterprises facing cash flow strain due to multiple short-term unsecured borrowings",
      icon: Scale,
      badge: "Debt Restructuring"
    },
    {
      id: "lease-rental-discounting",
      title: "6. Lease Rental Discounting (LRD) for Commercial Assets",
      category: "Structured Cash-Flow Debt",
      summary: "Term financing against future discounted rental receivables from pre-leased commercial properties rented to banks, retail giants, IT firms, or corporate tenants.",
      specs: [
        { label: "Loan Quantum", value: "Up to 80%–85%", sub: "Of Net Present Rent Value" },
        { label: "Tenure", value: "Lease Period", sub: "Up to 12–15 Years" },
        { label: "Security", value: "Escrow of Rent", sub: "Direct Bank Inflow" },
        { label: "Interest Rate", value: "8.50% – 9.25%", sub: "Corporate Discounting" }
      ],
      points: [
        "Rentals deposited directly into a designated bank escrow account for automatic EMI deduction",
        "Minimal promoter financial scrutiny as loan is backed by AAA/blue-chip tenant leases",
        "Allows commercial property owners to monetize long-term rental income upfront"
      ],
      bestFor: "Owners of commercial buildings, bank branch premises, retail outlets, IT parks",
      icon: Landmark,
      badge: "Rental Discounting"
    }
  ];

  // 6 Procedural Milestones
  const proceduralMilestones = [
    {
      number: "01",
      title: "Property Document & Title Chain Audit",
      stage: "STAGE 1 • PRE-SCRUTINY",
      tag: "Title Scrutiny",
      desc: "Detailed legal check of 30-year title deeds, registered agreements, 7/12 & PR cards, mutation entries, and municipal approvals.",
      deliverable: "Deliverable: Preliminary Legal Title Clearance",
      borderColor: "#0062FF",
      tagBg: "bg-blue-50 text-[#0062FF] border-blue-100"
    },
    {
      number: "02",
      title: "Independent Valuation & LTV Structuring",
      stage: "STAGE 2 • VALUATION",
      tag: "Asset Appraisal",
      desc: "Empanelled bank technical valuation to establish Fair Market Value (FMV), Realizable Value (RV), and Distress Sale Value (DSV).",
      deliverable: "Deliverable: Certified Property Valuation Assessment",
      borderColor: "#0284C7",
      tagBg: "bg-sky-50 text-[#0284C7] border-sky-100"
    },
    {
      number: "03",
      title: "Income & Repayment Capacity Modeling",
      stage: "STAGE 3 • FINANCIALS",
      tag: "Debt Capacity",
      desc: "Financial assessment of audited P&L, balance sheets, ITRs, and GST flows to compute optimal FOIR/DSCR and maximum sanction quantum.",
      deliverable: "Deliverable: DSCR & Borrowing Capacity Model",
      borderColor: "#7C3AED",
      tagBg: "bg-purple-50 text-[#7C3AED] border-purple-100"
    },
    {
      number: "04",
      title: "Bank Search Report & Non-Encumbrance",
      stage: "STAGE 4 • LEGAL AUDIT",
      tag: "Search Report",
      desc: "Obtaining bank advocate search report across Sub-Registrar offices verifying zero court stays, civil suits, or prior bank liens.",
      deliverable: "Deliverable: 30-Year Non-Encumbrance Certificate",
      borderColor: "#10B981",
      tagBg: "bg-emerald-50 text-[#10B981] border-emerald-100"
    },
    {
      number: "05",
      title: "Credit Committee Presentation & Defense",
      stage: "STAGE 5 • UNDERWRITING",
      tag: "Sanction",
      desc: "Pitching structured LAP proposal directly to credit managers and regional credit processing cells (CPCs) for smooth sanction.",
      deliverable: "Deliverable: Formal Bank In-Principle Sanction Letter",
      borderColor: "#F97316",
      tagBg: "bg-orange-50 text-[#F97316] border-orange-100"
    },
    {
      number: "06",
      title: "Equitable Mortgage & Disbursement",
      stage: "STAGE 6 • DISBURSEMENT",
      tag: "Payout",
      desc: "Execution of equitable mortgage, registration of memorandum (MODT), CERSAI filing, and direct account disbursement.",
      deliverable: "Deliverable: Final Disbursement & Original Deed Escrow",
      borderColor: "#F43F5E",
      tagBg: "bg-rose-50 text-[#F43F5E] border-rose-100"
    }
  ];

  // 5 AEO/GEO FAQ Accordions
  const faqs = [
    {
      q: "What is Loan Against Property (LAP) and what is the maximum Loan-to-Value (LTV) funded?",
      a: "Loan Against Property (LAP) is a secured term debt instrument where property owners pledge residential, commercial, or industrial properties as collateral to access long-term liquidity. In Ahilyanagar and Maharashtra, banks sanction up to 65%–75% LTV for residential buildings, 55%–65% for commercial shops/offices, and 50%–60% for industrial plots and warehouses based on the government-approved technical valuation."
    },
    {
      q: "Can an industrial plot or MIDC factory shed be pledged for a LAP loan in Ahilyanagar?",
      a: "Yes. Both freehold industrial NA plots and MIDC leasehold plots (with valid MIDC tripartite agreements and NOC) qualify for LAP funding. Banks evaluate remaining lease tenure, MIDC transfer clearance, industrial layout approvals, and enterprise DSCR. AB Consultancy handles complete MIDC liaison and bank legal documentation to secure loans from ₹50 Lakhs up to ₹50 Crores."
    },
    {
      q: "What is the difference between LAP and an unsecured business loan?",
      a: "Unsecured business loans come with punitive interest rates (15%–22%), short 1–3 year repayment terms, and caps at ₹50–75 Lakhs. LAP offers far cheaper interest rates (8.75%–10.50%), extended tenures up to 10–15 years, drastically lower monthly EMIs, and sanction limits up to ₹50 Crores with zero end-use restrictions."
    },
    {
      q: "Can I transfer my existing high-interest LAP to another bank with a top-up loan?",
      a: "Yes. LAP Balance Transfer (BT) with Top-Up is one of our key financial advisory services. We evaluate your existing mortgage statement, re-value your property at current market prices, and refinance the debt to a leading public or private bank at 1%–2% lower interest rates while unlocking 20%–50% additional capital via top-up."
    },
    {
      q: "What legal title documents are mandatory for LAP mortgage sanction?",
      a: "Banks mandate a 30-year registered title chain, registered sale deed or gift deed, latest 7/12 & 8A extracts or city survey property card (PR Card), sanctioned building layout plan with municipal/Grampanchayat commencement/completion certificates, latest property tax receipts, non-encumbrance certificate (Search Report), and NIL mutation entries."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800 font-sans selection:bg-[#0062FF] selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#EBF3FE] via-[#F4F8FD] to-[#F4F8FD] border-b border-slate-200/80 overflow-hidden">
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
              <li className="text-slate-900 font-semibold" aria-current="page">Loan Against Property</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Animated Eyebrow Badge */}
            <AnimatedBadge 
              icon={Home} 
              text="Secured Mortgage Debt Advisory • Commercial, Industrial & Residential" 
              isHero={true} 
            />

            {/* H1 Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Loan Against Property (LAP) in <span className="text-[#0062FF]">Ahilyanagar</span> & Maharashtra
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-bold text-slate-700 leading-snug">
              Unlock Up to 75% LTV on Real Estate Assets: ₹25 Lakhs to ₹50 Crores at 8.75%–10.50% Interest with 15-Year Tenure.
            </p>

            {/* Paragraph */}
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              Monetize commercial buildings, industrial factory plots, warehouse sheds, and residential properties to raise high-value growth capital or consolidate high-interest unsecured loans. AB Consultancy provides bank-empanelled valuation advisory, 30-year legal search coordination, and complete credit structuring across 40+ leading public and private banks.
            </p>

            {/* Quick Facts Stat Strip */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Loan Quantum</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">₹25L – ₹50 Cr</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Based on valuation</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Max LTV Funded</span>
                <span className="text-lg sm:text-xl font-black text-[#0062FF] mt-0.5 block">Up to 75%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Commercial & Residential</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Repayment Tenure</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">Up to 15 Yrs</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Lowest monthly EMI</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Interest Rate</span>
                <span className="text-lg sm:text-xl font-black text-emerald-600 mt-0.5 block">8.75% – 10.5%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">PSU & Private Banks</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check LAP Eligibility & LTV</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book Legal Title Consultation</span>
              </button>
              <a
                href="tel:+919130894308"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0062FF] transition-colors py-2 px-3"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>+91 91308 94308</span>
              </a>
            </div>

            {/* Domain Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] sm:text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Zero End-Use Restriction
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                MIDC Leasehold Land Eligible
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Balance Transfer + Top-Up
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Bank-Empanelled Valuation
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Bank Evaluation Framework (AEO Quick Answer + 6 Benchmarks) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Scale} text="Bank Underwriting Methodology" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Banks Evaluate & Sanction Loan Against Property (LAP)
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mortgage credit committees approve LAP applications based on two distinct pillars: clear property title with conservative valuation, and verifiable cash flow capacity to service monthly EMIs.
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
                  How Do Banks Calculate Loan Against Property (LAP) Eligibility in Ahilyanagar?
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  Lenders calculate LAP eligibility as the <strong>lesser of two limits</strong>: (1) <strong>Property Valuation LTV Cap</strong> (typically 65%–75% for residential, 55%–65% for commercial, and 50%–60% for industrial property) and (2) <strong>Income Servicing Capacity (FOIR/DSCR)</strong> (where total proposed EMI cannot exceed 50%–65% of net monthly profit/cash accrual). A clear 30-year registered title chain without municipal unauthorized construction is strictly non-negotiable.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Point-to-Point Evaluation Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">01</span>
                <h3 className="text-sm font-bold text-slate-900">30-Year Legal Title Search</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bank advocate conducts title search across Sub-Registrar offices verifying chain of title deeds, mutation entries, zero encumbrance, and no pending civil litigations or third-party claims.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">02</span>
                <h3 className="text-sm font-bold text-slate-900">Technical Valuation (FMV vs RV)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bank-empanelled civil engineers inspect premises to determine Fair Market Value (FMV) and Realizable Value (RV). The sanction amount is strictly capped against the lower Realizable Value.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">03</span>
                <h3 className="text-sm font-bold text-slate-900">Municipal Layout Sanction & OC</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The building plan must be approved by the Municipal Corporation (AMC), Town Planning (ADTP), or MIDC. Demolitions or unauthorized deviations beyond permissible FSI can lead to rejection.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">04</span>
                <h3 className="text-sm font-bold text-slate-900">Income Cash Flow & DSCR (1.30+)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Audited financials and GST returns must demonstrate adequate operational cash flows to service mortgage interest and principal with a minimum Debt Service Coverage Ratio of 1.30.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">05</span>
                <h3 className="text-sm font-bold text-slate-900">CIBIL & Commercial Credit Score</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Promoters require a personal CIBIL of 700+ and a clean CMR (Credit Mutual Report) rating for commercial entities with zero historic DPD (days past due) or write-offs.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">06</span>
                <h3 className="text-sm font-bold text-slate-900">Equitable Mortgage (MODT) & CERSAI</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prior to disbursement, original title deeds are deposited with the lending bank, registered via Memorandum of Deposit of Title Deeds (MODT) at the Sub-Registrar office, and registered on CERSAI.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Structured Financing Pre-Audit (Point-to-Point Checklist + Clean 20% Reduced Metrics Card) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedBadge icon={ShieldCheck} text="Pre-Sanction Feasibility Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Loan Against Property Eligibility & Valuation Pre-Audit
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid bank application rejections or severe valuation cuts. Our preliminary property pre-audit inspects title continuity, verifies municipal sanctions, models debt servicing, and compiles a bank-grade credit proposal.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "30-Year Title Search & Chain Deed Verification",
                    "Government & Bank Fair Market Valuation Alignment",
                    "Municipal Sanction Plan & Construction Deviation Review",
                    "DSCR / FOIR Eligibility & Repayment Capacity Modeling",
                    "Balance Transfer & Top-Up Financial Viability Report",
                    "MIDC Tripartite Agreement & NOC Documentation"
                  ].map((check, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{check}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={onCheckEligibility}
                    className="px-6 py-3 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request LAP Pre-Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+919130894308"
                    className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Call Advisory Desk (+91 91308 94308)</span>
                  </a>
                </div>
              </div>

              {/* Verified Metrics Card - Compact Restrained Architectural Presentation (No AI Slanks) */}
              <div className="lg:col-span-5 bg-[#0B1528] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
                
                {/* Header */}
                <div className="pb-3 border-b border-slate-800/80">
                  <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#93C5FD]">
                    Advisory Turnaround & Scale
                  </h3>
                </div>

                {/* Metrics */}
                <div className="divide-y divide-slate-800/80 my-auto">
                  
                  {/* Metric 1 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      3–7 <span className="text-[#60A5FA] font-bold text-lg sm:text-xl">Days</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Legal Scrutiny & Title Verification
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average preliminary assessment and legal title review turnaround from complete document submission.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      ₹180<span className="text-slate-400 font-bold text-lg sm:text-xl">+ Cr</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Mortgage Debt & Sanctions Structured
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Structured loans against commercial, industrial, and residential properties across Maharashtra.
                    </p>
                  </div>

                  {/* Metric 3 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">
                      100%
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Milestone Fee Structure
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Transparent milestone-based advisory engagement with zero hidden consultation charges.
                    </p>
                  </div>

                </div>

                {/* Footer Notes */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span>Bank-Grade Legal & Valuation Models</span>
                  <span>RBI & CERSAI Aligned</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Procedural Milestones (Interactive SVG Radar Hub on Desktop + Mobile Card Stack) */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <AnimatedBadge icon={Layers} text="End-to-End Execution Roadmap" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6-Step Loan Against Property Sanction Roadmap
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              From preliminary title check to MODT registration and final account credit, we manage the entire bank liaison pipeline.
            </p>
          </div>

          {/* Desktop Interactive SVG Radar Hub (1260 x 520) */}
          <div className="hidden xl:block relative w-[1260px] h-[520px] mx-auto select-none">
            
            {/* SVG Connecting Vector Rays */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1260 520" fill="none">
              
              {/* Line 1: Blue (Card 1: 350, 77 -> Hub: 568, 198) */}
              <path 
                d="M 350,77 C 420,77 475,198 568,198" 
                stroke="#0062FF" 
                strokeWidth={hoveredMilestone === 0 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 0 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="350" cy="77" r={hoveredMilestone === 0 ? "5" : "4"} fill="#0062FF" className="transition-all duration-300" />
              <circle cx="568" cy="198" r={hoveredMilestone === 0 ? "4.5" : "3.5"} fill="#0062FF" className="transition-all duration-300" />

              {/* Line 2: Sky (Card 2: 350, 260 -> Hub: 546, 260) */}
              <path 
                d="M 350,260 C 415,260 480,260 546,260" 
                stroke="#0284C7" 
                strokeWidth={hoveredMilestone === 1 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 1 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="350" cy="260" r={hoveredMilestone === 1 ? "5" : "4"} fill="#0284C7" className="transition-all duration-300" />
              <circle cx="546" cy="260" r={hoveredMilestone === 1 ? "4.5" : "3.5"} fill="#0284C7" className="transition-all duration-300" />

              {/* Line 3: Purple (Card 3: 350, 443 -> Hub: 568, 322) */}
              <path 
                d="M 350,443 C 420,443 475,322 568,322" 
                stroke="#7C3AED" 
                strokeWidth={hoveredMilestone === 2 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 2 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="350" cy="443" r={hoveredMilestone === 2 ? "5" : "4"} fill="#7C3AED" className="transition-all duration-300" />
              <circle cx="568" cy="322" r={hoveredMilestone === 2 ? "4.5" : "3.5"} fill="#7C3AED" className="transition-all duration-300" />

              {/* Line 4: Emerald (Hub: 692, 198 -> Card 4: 910, 77) */}
              <path 
                d="M 692,198 C 785,198 840,77 910,77" 
                stroke="#10B981" 
                strokeWidth={hoveredMilestone === 3 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 3 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="692" cy="198" r={hoveredMilestone === 3 ? "5" : "4"} fill="#10B981" className="transition-all duration-300" />
              <circle cx="910" cy="77" r={hoveredMilestone === 3 ? "4.5" : "3.5"} fill="#10B981" className="transition-all duration-300" />

              {/* Line 5: Orange (Hub: 714, 260 -> Card 5: 910, 260) */}
              <path 
                d="M 714,260 C 780,260 845,260 910,260" 
                stroke="#F97316" 
                strokeWidth={hoveredMilestone === 4 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 4 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="714" cy="260" r={hoveredMilestone === 4 ? "5" : "4"} fill="#F97316" className="transition-all duration-300" />
              <circle cx="910" cy="260" r={hoveredMilestone === 4 ? "4.5" : "3.5"} fill="#F97316" className="transition-all duration-300" />

              {/* Line 6: Rose (Hub: 692, 322 -> Card 6: 910, 443) */}
              <path 
                d="M 692,322 C 785,322 840,443 910,443" 
                stroke="#F43F5E" 
                strokeWidth={hoveredMilestone === 5 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 5 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="692" cy="322" r={hoveredMilestone === 5 ? "5" : "4"} fill="#F43F5E" className="transition-all duration-300" />
              <circle cx="910" cy="443" r={hoveredMilestone === 5 ? "4.5" : "3.5"} fill="#F43F5E" className="transition-all duration-300" />
            </svg>

            {/* Central Master Circular Hub (W: 168px, H: 168px, Center: 630, 260) */}
            <div 
              className="absolute left-[546px] top-[176px] w-[168px] h-[168px] rounded-full bg-gradient-to-br from-white via-[#F8FAFD] to-[#EDF4FD] border-2 border-[#1769E8]/35 shadow-[0_12px_36px_rgba(23,105,232,0.18)] flex flex-col items-center justify-center text-center p-3 z-30 transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_44px_rgba(23,105,232,0.25)] group"
            >
              <div className="absolute inset-[-6px] rounded-full border border-dashed border-[#1769E8]/30 pointer-events-none animate-[spin_40s_linear_infinite]" />
              
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E8] to-[#00A3FF] text-white flex items-center justify-center shadow-md mb-1.5 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                LAP Mortgage
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                Up to 75% LTV Funded
              </div>
            </div>

            {/* Milestone Cards Layer (z-20) */}
            {/* CARD 1 (Top Left) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(0)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[10px] top-[15px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 0 
                  ? 'border-[#0062FF] shadow-[0_10px_28px_rgba(0,98,255,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#0062FF]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#0062FF]">
                  STAGE 1 • PRE-SCRUTINY
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0062FF] border border-blue-100">
                  Title Scrutiny
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Property Document & Title Chain Audit
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Detailed legal check of 30-year title deeds, registered agreements, 7/12 & PR cards, mutation entries, and municipal approvals.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0062FF] flex items-center gap-1">
                <span>Deliverable: Preliminary Legal Title Clearance</span>
              </div>
            </div>

            {/* CARD 2 (Mid Left) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(1)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[10px] top-[198px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 1 
                  ? 'border-[#0284C7] shadow-[0_10px_28px_rgba(2,132,199,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#0284C7]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#0284C7]">
                  STAGE 2 • VALUATION
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100">
                  Asset Appraisal
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Independent Valuation & LTV Structuring
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Empanelled bank technical valuation to establish Fair Market Value (FMV), Realizable Value (RV), and Distress Sale Value (DSV).
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0284C7] flex items-center gap-1">
                <span>Deliverable: Certified Property Valuation Assessment</span>
              </div>
            </div>

            {/* CARD 3 (Bottom Left) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(2)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[10px] top-[381px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 2 
                  ? 'border-[#7C3AED] shadow-[0_10px_28px_rgba(124,58,237,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#7C3AED]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#7C3AED]">
                  STAGE 3 • FINANCIALS
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-100">
                  Debt Capacity
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Income & Repayment Capacity Modeling
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Financial assessment of audited P&L, balance sheets, ITRs, and GST flows to compute optimal FOIR/DSCR and maximum sanction quantum.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#7C3AED] flex items-center gap-1">
                <span>Deliverable: DSCR & Borrowing Capacity Model</span>
              </div>
            </div>

            {/* CARD 4 (Top Right) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(3)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[910px] top-[15px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 3 
                  ? 'border-[#10B981] shadow-[0_10px_28px_rgba(16,185,129,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#10B981]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#10B981]">
                  STAGE 4 • LEGAL AUDIT
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-100">
                  Search Report
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Bank Search Report & Non-Encumbrance
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Obtaining bank advocate search report across Sub-Registrar offices verifying zero court stays, civil suits, or prior bank liens.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981] flex items-center gap-1">
                <span>Deliverable: 30-Year Non-Encumbrance Certificate</span>
              </div>
            </div>

            {/* CARD 5 (Mid Right) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(4)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[910px] top-[198px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 4 
                  ? 'border-[#F97316] shadow-[0_10px_28px_rgba(249,115,22,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#F97316]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#F97316]">
                  STAGE 5 • UNDERWRITING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100">
                  Sanction
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Credit Committee Presentation & Defense
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Pitching structured LAP proposal directly to credit managers and regional credit processing cells (CPCs) for smooth sanction.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316] flex items-center gap-1">
                <span>Deliverable: Formal Bank In-Principle Sanction Letter</span>
              </div>
            </div>

            {/* CARD 6 (Bottom Right) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(5)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[910px] top-[381px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 5 
                  ? 'border-[#F43F5E] shadow-[0_10px_28px_rgba(244,63,94,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#F43F5E]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#F43F5E]">
                  STAGE 6 • DISBURSEMENT
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-[#F43F5E] border border-rose-100">
                  Payout
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Equitable Mortgage & Disbursement
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Execution of equitable mortgage, registration of memorandum (MODT), CERSAI filing, and direct account disbursement.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F43F5E] flex items-center gap-1">
                <span>Deliverable: Final Disbursement & Original Deed Escrow</span>
              </div>
            </div>

          </div>

          {/* Mobile & Tablet Card Stack */}
          <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {proceduralMilestones.map((m, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: m.borderColor }}>
                      {m.stage}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${m.tagBg}`}>
                      {m.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{m.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold" style={{ color: m.borderColor }}>
                  {m.deliverable}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. 6 Institutional LAP Programs */}
      <section className="py-12 sm:py-20 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <AnimatedBadge icon={Building2} text="Tailored Mortgage Facilities" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6 Institutional Loan Against Property (LAP) Programs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore specialized mortgage debt structures designed for commercial property holders, factory units, residential owners, and pre-leased assets.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {lapPrograms.map((prog, idx) => {
              const IconComp = prog.icon;
              return (
                <div 
                  key={prog.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-blue-200 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    
                    {/* Left Column: Title, Specs, CTA */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
                      <div>
                        {/* Eyebrow Badge */}
                        <div className="mb-2">
                          <AnimatedBadge 
                            text={prog.badge} 
                            className="!text-[10px] sm:!text-[10.5px] !px-2.5 !py-0.5 normal-case font-bold tracking-normal" 
                          />
                        </div>

                        {/* Title & Icon Header Block (Aligned with Heading Text) */}
                        <div className="flex items-start gap-3 sm:gap-3.5">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-100 flex items-center justify-center text-[#0062FF] shadow-xs flex-shrink-0 mt-0.5">
                            <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.8]" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                              {prog.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
                              {prog.summary}
                            </p>
                          </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 bg-slate-50/80 p-3.5 sm:p-4 rounded-2xl border border-slate-200/70">
                          {prog.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="space-y-0.5">
                              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                                {spec.label}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-slate-900 block whitespace-pre-line leading-tight">
                                {spec.value}
                              </span>
                              {spec.sub && (
                                <span className="text-[10px] text-slate-500 block leading-tight">
                                  {spec.sub}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Best For Tagline & CTAs */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-slate-500">
                          <strong className="text-slate-800">Ideal For:</strong> {prog.bestFor}
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={onCheckEligibility}
                            className="px-4 py-2 rounded-xl bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                          >
                            <span>Check Eligibility</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Right Column: Key Technical Highlights */}
                    <div className="lg:col-span-5 xl:col-span-4 bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block mb-3 uppercase tracking-wider">
                          Key Underwriting Highlights
                        </span>
                        <ul className="space-y-2.5">
                          {prog.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-200/60">
                        <span className="text-[11px] font-semibold text-slate-500 block">
                          Bank Underwriting Classification:
                        </span>
                        <span className="text-xs font-bold text-[#0062FF] block mt-0.5">
                          {prog.category}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Institutional Credibility & Track Record */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="bg-gradient-to-br from-[#0B1528] to-[#132238] rounded-3xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedBadge icon={Award} text="Institutional Advisory Credibility" isDark={true} className="mb-3" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  15+ Years of Bank Advisory & Mortgage Debt Structuring
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Navigating legal intricacies, title ambiguities, property valuation cuts, and banking committee defenses requires institutional mastery. AB Consultancy ensures seamless mortgage clearances across public and private banks.
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[#60A5FA] block">15+</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Years Advisory</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">7,100+</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Clients Advised</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white block">₹180+ Cr</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Debt Facilitated</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 block">40+</span>
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Partner Banks</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-2">Our Advisory Commitments</h3>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Rigorous 30-year title scrutinies to pre-empt bank advocate objections.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Liaison with bank-empanelled evaluators to optimize Realizable Value (RV).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>End-to-end MIDC tripartite agreement execution and mortgage NOCs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Milestone-based professional fee structure with zero hidden retainers.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. 3-Stage Advisory Process */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Rocket} text="Structured Execution Protocol" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              3-Stage Mortgage Advisory Workflow
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our systematic three-phase methodology ensures fast-track property mortgage sanctions with minimum processing friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P1
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 1: Legal Scrutiny & Pre-Appraisal</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We review title deeds, tax receipts, sanctioned building plans, and 7/12 records. We model financial DSCR to establish your borrowing ceiling before approaching lenders.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 2–4 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P2
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 2: Bank Search & Valuation Defense</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We coordinate site visits with bank-empanelled technical valuers and advocates. We address legal query memos and negotiate maximum LTV and lowest interest pricing.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 5–8 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P3
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 3: Sanction, MODT & Disbursement</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Following sanction letter issuance, we facilitate MODT registration at the Sub-Registrar office, title deed handover, CERSAI registration, and final fund disbursement.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 3–5 Working Days</div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Comprehensive Document Checklist (4-Column Grid) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={FileCheck} text="Documentation Matrix" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive LAP Document Checklist
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Gather these primary documents to ensure rapid preliminary assessment and avoid bank query delays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">1. Property Title Deeds</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Original registered Sale Deed / Gift Deed</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>30-year link chain title documents</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Latest 7/12 & 8A or PR Card (City Survey)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Non-Agricultural (NA) order & Ferfar</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">2. Layout & Approvals</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Municipal / Grampanchayat Sanctioned Plan</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Commencement & Completion / OC Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Latest Property Tax Paid Challan</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>MIDC Tripartite Agreement (if industrial plot)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">3. Financial Records</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 3 years audited Balance Sheets & P&L</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 3 years ITR with computation of income</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 12 months primary bank statements</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 12 months GST returns (GSTR-3B & 1)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">4. KYC & Existing Loans</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Promoter PAN, Aadhaar & Residence Proof</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Entity PAN, GST Registration & MOA/AOA/Deed</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Existing loan sanction letters & repayment track</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Lease agreements (if applying for LRD)</span>
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
              Loan Against Property Advisory FAQs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear, factual answers regarding property valuation, legal searches, balance transfers, and bank sanction norms.
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
                <AnimatedBadge icon={MapPin} text="Ahilyanagar Advisory Desk" isDark={true} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Visit Our Financial Advisory Office in Ahilyanagar
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bring your original or xerox title documents, 7/12 extracts, and audited balance sheets for an in-person legal and LTV assessment.
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
                  Fast preliminary assessment to calculate your maximum property LTV and optimal mortgage term structure.
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
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All Loan Against Property (LAP) sanctions, LTV valuations, interest rates, and loan approvals are subject to the independent credit underwriting, legal scrutiny, and statutory policies of the respective lending banks and financial institutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
