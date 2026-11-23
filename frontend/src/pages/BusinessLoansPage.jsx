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
  Cpu,
  Store,
  Truck,
  Users,
  Bookmark
} from 'lucide-react';

// Reusable Animated Eyebrow Badge (Character Reveal & Pill Expansion)
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

export default function BusinessLoansPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Business Loans & MSME Finance Ahilyanagar | AB Consultancy",
    description: "Get business loans in Ahilyanagar & Maharashtra. Collateral-free CGTMSE loans up to ₹5 Cr, machinery finance, working capital (CC/OD) & bank-grade DPR reports.",
    canonical: "https://www.abconsultancy.net.in/services/business-loans",
    keywords: "Business Loans Ahilyanagar, MSME Loans Nagar, Machinery Loan Consultant, Working Capital Loan, Project Finance DPR Ahilyanagar, CGTMSE Collateral Free Loan, Startup Loan Consultancy Ahmednagar"
  });

  // JSON-LD Structured Data (Optimized for Google Rich Snippets & AI Answer Engines)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://www.abconsultancy.net.in/services/business-loans#service",
        "name": "AB Consultancy - Business Loan & MSME Project Finance Advisory",
        "serviceType": "Business Loan Consultancy, CGTMSE Advisory, Bank DPR Preparation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "AB Consultancy",
          "telephone": "+919130894308",
          "email": "info@abconsulting.net.in",
          "priceRange": "Transparent Milestone-Based",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No. 106, Second Floor, Baiju Height, Near Old Vasant Talkies",
            "addressLocality": "Ahilyanagar",
            "addressRegion": "Maharashtra",
            "postalCode": "414001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0952,
            "longitude": 74.7480
          }
        },
        "areaServed": [
          { "@type": "City", "name": "Ahilyanagar" },
          { "@type": "State", "name": "Maharashtra" },
          { "@type": "Country", "name": "India" }
        ],
        "description": "Comprehensive business loan consultancy for startups, MSMEs, machinery purchase, working capital (CC/OD), and large industrial project finance across 40+ scheduled banks."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abconsultancy.net.in/services/business-loans#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can MSMEs and manufacturers in Ahilyanagar and Maharashtra apply for collateral-free business loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MSMEs in Ahilyanagar, Pune, Nashik, and across Maharashtra can secure collateral-free business loans up to ₹5 Crores under the Central Government's CGTMSE scheme. Loans are sanctioned by scheduled commercial banks (including SBI, Bank of Maharashtra, Bank of Baroda, HDFC, and ICICI) without personal property mortgage or third-party guarantors. AB Consultancy structures your project feasibility, verifies Udyam classification, and compiles bank-compliant credit dossiers to fast-track sanction."
            }
          },
          {
            "@type": "Question",
            "name": "Why is a Bank-Grade Detailed Project Report (DPR) and CMA Data mandatory for business loan sanction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commercial banks and credit processing cells (CPCs) require a Bank-Grade Detailed Project Report (DPR) and RBI-compliant Credit Monitoring Arrangement (CMA) data to determine financial viability before sanctioning debt. A complete DPR details technical layout, machinery quotations, DSCR ratio (minimum 1.5x recommended), internal rate of return (IRR), and 7–10 year projected balance sheets. AB Consultancy's ex-banking financial analysts prepare audit-ready DPRs and CMA sheets formatted strictly to bank credit committee standards."
            }
          },
          {
            "@type": "Question",
            "name": "Can a new startup or first-time entrepreneur in Maharashtra get a business loan with government subsidy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. First-time entrepreneurs and new manufacturing units can combine bank term loans with government subsidy schemes such as PMEGP (up to 35% capital subsidy), CMEGP Maharashtra (up to 35% margin money assistance), or Stand-Up India (up to ₹1 Crore for women and SC/ST promoters). These programs require only 5% to 15% promoter contribution, with the remaining project cost financed through commercial bank debt supported by state capital incentives."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum CIBIL score, interest rate, and processing time for a business loan in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business loan interest rates typically range from 8.50% to 11.25% p.a., with banks preferring a promoter CIBIL score of 700 or above (though viable projects with scores of 650+ can be approved with structured cash flow justifications). The complete sanction turnaround is 2 to 4 weeks: 3–5 days for DPR and CMA modeling, followed by 10–14 days for bank site inspection, credit committee appraisal, and sanction letter issuance."
            }
          },
          {
            "@type": "Question",
            "name": "How does AB Consultancy assist businesses in loan sanctions, and where is your office located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AB Consultancy is a premier project finance and loan advisory firm headquartered at Office No. 106, Baiju Height, Near Old Vasant Talkies, Ahilyanagar, Maharashtra (Phone: +91 91308 94308). With 15+ years of experience and 7,100+ clients advised across Maharashtra and India, we provide end-to-end loan consultancy—including scheme mapping, financial modeling, DPR drafting, banker liaison, and subsidy coordination across 40+ leading public and private banks."
            }
          }
        ]
      }
    ]
  };

  // 6 Point-to-Point Evaluation Benchmarks
  const evaluationBenchmarks = [
    {
      title: "1. Business Activity & MSME Code",
      point: "Manufacturing, Service, or Trading classification under NIC/MSME norms.",
      impact: "Determines priority sector lending rates & capital subsidy eligibility.",
      badge: "Sector Classification",
      icon: Factory
    },
    {
      title: "2. Promoter CIBIL & Credit History",
      point: "Minimum commercial & personal credit score review (typically 700+).",
      impact: "Validates repayment track record, existing liabilities, and banking discipline.",
      badge: "Credit Profile",
      icon: ShieldCheck
    },
    {
      title: "3. Capex Sizing & Debt-Equity Ratio",
      point: "Civil works, plant & machinery quotations, and working capital margin.",
      impact: "Optimizes promoter contribution (typically 15% to 25%) and loan quantum.",
      badge: "Capex Sizing",
      icon: Coins
    },
    {
      title: "4. DSCR & Cash Flow Viability",
      point: "Projected annual sales turnover, net margins, and operational EBITDA.",
      impact: "Target Debt Service Coverage Ratio (DSCR ≥ 1.5) ensures loan servicing safety.",
      badge: "DSCR & Cash Flows",
      icon: TrendingUp
    },
    {
      title: "5. Collateral Structuring (CGTMSE vs LAP)",
      point: "Collateral-free CGTMSE coverage up to ₹5 Cr or property mortgage valuation.",
      impact: "Structures primary hypothecation of assets and minimizes personal collateral burden.",
      badge: "Security Structuring",
      icon: Landmark
    },
    {
      title: "6. Business Lifecycle Stage",
      point: "Greenfield startup vs. Brownfield factory expansion or modernization.",
      impact: "Dictates moratorium period (6–18 months) and customized repayment tenures.",
      badge: "Lifecycle Stage",
      icon: Briefcase
    }
  ];

  // 6 Procedural Milestones (Interactive Infographic Roadmap)
  const coreMilestones = [
    {
      number: 1,
      stageLabel: "STAGE 1 • ELIGIBILITY AUDIT",
      trackLabel: "Appraisal",
      title: "Eligibility & Scheme Mapping",
      desc: "Fast 24-hour audit of business activity, funding requirements, and bank scheme fitment.",
      tag: "Preliminary Feasibility Note",
      deliverable: "Preliminary Feasibility Note",
      accentColor: "#1769E8",
      accentBg: "bg-[#1769E8]",
      bgTint: "bg-blue-50",
      textAccent: "text-[#1769E8]",
      icon: Search
    },
    {
      number: 2,
      stageLabel: "STAGE 2 • DPR FORMULATION",
      trackLabel: "Feasibility",
      title: "Bank-Grade DPR Formulation",
      desc: "Comprehensive Detailed Project Report with techno-commercial feasibility and layout plans.",
      tag: "Bank-Compliant DPR File",
      deliverable: "Bank-Compliant DPR File",
      accentColor: "#0D9488",
      accentBg: "bg-[#0D9488]",
      bgTint: "bg-teal-50",
      textAccent: "text-[#0D9488]",
      icon: FileText
    },
    {
      number: 3,
      stageLabel: "STAGE 3 • FINANCIAL MODELING",
      trackLabel: "CMA & Ratios",
      title: "CMA Data & Financial Modeling",
      desc: "10-year projected P&L, balance sheets, cash flows, MPBF working capital, and DSCR ratios.",
      tag: "RBI-Standard CMA Sheets",
      deliverable: "RBI-Standard CMA Sheets",
      accentColor: "#8B5CF6",
      accentBg: "bg-[#8B5CF6]",
      bgTint: "bg-purple-50",
      textAccent: "text-[#8B5CF6]",
      icon: Calculator
    },
    {
      number: 4,
      stageLabel: "STAGE 4 • SCHEME OPTIMIZATION",
      trackLabel: "Guarantee",
      title: "MSME Scheme & Guarantee Mapping",
      desc: "Aligning proposal with CGTMSE collateral-free guarantee, interest subventions, or state subsidies.",
      tag: "Subsidy & Guarantee Mapping",
      deliverable: "Subsidy & Guarantee Mapping",
      accentColor: "#10B981",
      accentBg: "bg-[#10B981]",
      bgTint: "bg-emerald-50",
      textAccent: "text-[#10B981]",
      icon: Zap
    },
    {
      number: 5,
      stageLabel: "STAGE 5 • BANK DOSSIER",
      trackLabel: "Documentation",
      title: "Complete Bank Dossier Preparation",
      desc: "Compiling audited ITRs, GST returns, vendor machinery quotations, and title clearances.",
      tag: "Sanction-Ready Application Dossier",
      deliverable: "Sanction-Ready Application Dossier",
      accentColor: "#F97316",
      accentBg: "bg-[#F97316]",
      bgTint: "bg-orange-50",
      textAccent: "text-[#F97316]",
      icon: FileCheck
    },
    {
      number: 6,
      stageLabel: "STAGE 6 • SANCTION LIAISON",
      trackLabel: "Disbursement",
      title: "Bank Liaison & Query Resolution",
      desc: "Active coordination with branch managers, credit processing cells, and field inspection officers.",
      tag: "End-to-End Sanction Support",
      deliverable: "End-to-End Sanction Support",
      accentColor: "#F43F5E",
      accentBg: "bg-[#F43F5E]",
      bgTint: "bg-rose-50",
      textAccent: "text-[#F43F5E]",
      icon: Handshake
    }
  ];

  // 6 Streamlined Financing Programs (Point-to-Point Specifications)
  const financingPrograms = [
    {
      id: "msme-loans",
      title: "1. MSME Business Loans",
      category: "MSME Priority Lending",
      summary: "Institutional term loans and working capital credit for Micro, Small & Medium Enterprises setting up or expanding industrial units.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹50 Crores", sub: null },
        { label: "Tenure", value: "5 to 10 Years", sub: "(Moratorium up to 18 Mos)" },
        { label: "Interest Rate", value: "8.50% – 11.25% p.a.", sub: "(Bank linked)" },
        { label: "Collateral", value: "Primary Asset", sub: "Hypothecation + CGTMSE" }
      ],
      points: [
        "Factory setup, capacity expansion, and technology modernization",
        "Eligible for interest subvention and MSME priority credit benefits",
        "Supports both manufacturing and designated service enterprises"
      ],
      bestFor: "Existing MSMEs, Industrial Workshops, Expanding Enterprises",
      icon: TrendingUp,
      badge: "Core MSME"
    },
    {
      id: "startup-loans",
      title: "2. Startup & New Business Loans",
      category: "Greenfield Ventures",
      summary: "Structured project debt for new entrepreneurs establishing greenfield manufacturing, processing, or technology facilities.",
      specs: [
        { label: "Loan Quantum", value: "₹10 Lakhs to\n₹10 Crores", sub: null },
        { label: "Tenure", value: "5 to 7 Years", sub: "(Moratorium up to 12 Mos)" },
        { label: "Promoter Share", value: "15% to 25%", sub: "Margin Money" },
        { label: "Scheme Synergy", value: "PMEGP / Stand-Up", sub: "CGTMSE Guarantee" }
      ],
      points: [
        "Greenfield setup without requiring prior business track record",
        "Includes civil construction, plant machinery, and initial working capital",
        "Assisted by bank-ready techno-economic feasibility reports"
      ],
      bestFor: "First-Time Entrepreneurs, Technocrats, Family Business Expansions",
      icon: Rocket,
      badge: "Startups"
    },
    {
      id: "machinery-finance",
      title: "3. Machinery & Equipment Loans",
      category: "Asset Finance",
      summary: "Term loans dedicated to purchasing industrial plant, precision CNC machines, packaging lines, and commercial equipment.",
      specs: [
        { label: "Loan Quantum", value: "Up to 80%–85%", sub: "Of Machinery Invoice" },
        { label: "Tenure", value: "3 to 7 Years", sub: "(Linked to asset life)" },
        { label: "Security", value: "Primary Asset", sub: "Hypothecation of Plant" },
        { label: "Processing", value: "Fast-Track", sub: "On vendor quotation" }
      ],
      points: [
        "Direct manufacturer/dealer payment through bank letter of credit or term loan",
        "Accelerated depreciation & electricity tariff benefits under State PSI",
        "Zero mortgage requirement when covered under CGTMSE guarantee"
      ],
      bestFor: "Manufacturing Plants, Fabrication Units, Packaging & Food Processors",
      icon: Cpu,
      badge: "Capex & Machinery"
    },
    {
      id: "project-finance",
      title: "4. Large Project Finance & Industrial Debt",
      category: "Large Industrial Capex",
      summary: "Syndicated and structured project debt for large industrial plants, multi-acre factory setups, and corporate expansions.",
      specs: [
        { label: "Loan Quantum", value: "₹5 Crores to\n₹100+ Crores", sub: null },
        { label: "Structure", value: "Term Debt + WC", sub: "Consortium Banking" },
        { label: "Repayment", value: "Up to 10–12 Years", sub: "Structured ballooning" },
        { label: "Documentation", value: "TEV Study", sub: "Bank-Compliant DPR" }
      ],
      points: [
        "Complete financial engineering: debt-equity structuring, sensitivity analysis, and DSCR optimization",
        "Coordination with consortium banking cells and national financial institutions",
        "Integration with Central & State industrial incentives (Maharashtra PSI 2019/2024)"
      ],
      bestFor: "Mid-Corporate Enterprises, Greenfield Industrial Estates, Agro-Hubs",
      icon: Building2,
      badge: "Project Debt"
    },
    {
      id: "working-capital",
      title: "5. Working Capital Loans (Cash Credit / Overdraft)",
      category: "Liquidity & Operating Credit",
      summary: "Revolving credit facilities to finance inventory holding, raw material procurement, and debtor turnaround cycles.",
      specs: [
        { label: "Facility Type", value: "CC / OD / LC / BG", sub: "Revolving Limits" },
        { label: "Assessment", value: "MPBF Method", sub: "Nayak / Tandon norms" },
        { label: "Interest Cost", value: "Usage-Based", sub: "On utilized balance" },
        { label: "Renewal", value: "Annual Review", sub: "GST & audited turnover" }
      ],
      points: [
        "Prevents operational liquidity crunches and supports supplier cash discounts",
        "Structured against primary hypothecation of stock and book debts",
        "Non-fund based limits (Bank Guarantee, Letter of Credit) available"
      ],
      bestFor: "Industrial Manufacturers, Wholesale Distributors, Exporters",
      icon: Coins,
      badge: "CC / OD Limits"
    },
    {
      id: "govt-credit",
      title: "6. Government-Backed Collateral-Free Loans",
      category: "Credit Guarantee Schemes",
      summary: "Flagship government guarantee programs enabling entrepreneurs to access bank debt without pledging personal immovable property.",
      specs: [
        { label: "CGTMSE Limit", value: "Up to ₹5 Crores", sub: "100% Collateral-Free" },
        { label: "MUDRA Scheme", value: "Up to ₹20 Lakhs", sub: "Tarun / Kishore limits" },
        { label: "Stand-Up India", value: "₹10L to ₹1 Crore", sub: "For Women & SC/ST" },
        { label: "Guarantee Cover", value: "75% to 85%", sub: "Govt Trust Guarantee" }
      ],
      points: [
        "100% legal waiver of third-party guarantor and residential property mortgage",
        "Available across all Public Sector Banks (PSBs) and private commercial banks",
        "Can be synergized with capital subsidy programs like PMEGP and PMFME"
      ],
      bestFor: "Micro & Small Business Promoters, Women Founders, SC/ST Entrepreneurs",
      icon: ShieldCheck,
      badge: "Collateral-Free"
    }
  ];

  // 5 High-Authority Local SEO & Instant-Index FAQs (AEO & GEO Standard)
  const faqs = [
    {
      q: "How can MSMEs and manufacturers in Ahilyanagar and Maharashtra apply for collateral-free business loans?",
      a: "MSMEs in Ahilyanagar, Pune, Nashik, and across Maharashtra can secure collateral-free business loans up to ₹5 Crores under the Central Government's CGTMSE scheme. Loans are sanctioned by scheduled commercial banks (including SBI, Bank of Maharashtra, Bank of Baroda, HDFC, and ICICI) without personal property mortgage or third-party guarantors. AB Consultancy structures your project feasibility, verifies Udyam classification, and compiles bank-compliant credit dossiers to fast-track sanction."
    },
    {
      q: "Why is a Bank-Grade Detailed Project Report (DPR) and CMA Data mandatory for business loan sanction?",
      a: "Commercial banks and credit processing cells (CPCs) require a Bank-Grade Detailed Project Report (DPR) and RBI-compliant Credit Monitoring Arrangement (CMA) data to determine financial viability before sanctioning debt. A complete DPR details technical layout, machinery quotations, DSCR ratio (minimum 1.5x recommended), internal rate of return (IRR), and 7–10 year projected balance sheets. AB Consultancy's ex-banking financial analysts prepare audit-ready DPRs and CMA sheets formatted strictly to bank credit committee standards."
    },
    {
      q: "Can a new startup or first-time entrepreneur in Maharashtra get a business loan with government subsidy?",
      a: "Yes. First-time entrepreneurs and new manufacturing units can combine bank term loans with government subsidy schemes such as PMEGP (up to 35% capital subsidy), CMEGP Maharashtra (up to 35% margin money assistance), or Stand-Up India (up to ₹1 Crore for women and SC/ST promoters). These programs require only 5% to 15% promoter contribution, with the remaining project cost financed through commercial bank debt supported by state capital incentives."
    },
    {
      q: "What is the minimum CIBIL score, interest rate, and processing time for a business loan in India?",
      a: "Business loan interest rates typically range from 8.50% to 11.25% p.a., with banks preferring a promoter CIBIL score of 700 or above (though viable projects with scores of 650+ can be approved with structured cash flow justifications). The complete sanction turnaround is 2 to 4 weeks: 3–5 days for DPR and CMA modeling, followed by 10–14 days for bank site inspection, credit committee appraisal, and sanction letter issuance."
    },
    {
      q: "How does AB Consultancy assist businesses in loan sanctions, and where is your office located?",
      a: "AB Consultancy is a premier project finance and loan advisory firm headquartered at Office No. 106, Baiju Height, Near Old Vasant Talkies, Ahilyanagar, Maharashtra (Phone: +91 91308 94308). With 15+ years of experience and 7,100+ clients advised across Maharashtra and India, we provide end-to-end loan consultancy—including scheme mapping, financial modeling, DPR drafting, banker liaison, and subsidy coordination across 40+ leading public and private banks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800">
      {/* Inject Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* 1. Hero Section (Streamlined, High-Impact & GEO-Optimized) */}
      <section className="relative pt-10 sm:pt-14 pb-14 sm:pb-18 bg-gradient-to-b from-[#E6F0FE] via-[#EDF4FE] to-[#F4F8FD] border-b border-slate-200/60 overflow-hidden">
        {/* Subtle Depth Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0062FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0062FF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 sm:mb-6">
            <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#0062FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0062FF] font-semibold">Business Loans</span>
          </div>

          <div className="max-w-4xl">
            {/* Signature Eyebrow Pill Tag with Smooth Reveal & Character Animation */}
            <AnimatedBadge 
              icon={Landmark} 
              text="Banking Advisory Desk • Ahilyanagar & Pan-India" 
              isHero={true} 
            />

            {/* Main SEO/AEO Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Business Loans & MSME Project Financing
            </h1>

            {/* Point-to-Point Value Proposition */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-[#0062FF] leading-snug">
              Fast-track your bank credit sanction with bank-ready DPR, CMA data & structured institutional advisory.
            </p>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              AB Consultancy provides professional loan advisory for startups, MSMEs, and industrial manufacturers in Ahilyanagar and across India. We structure your financial proposals to maximize credit approval across 40+ scheduled commercial banks.
            </p>

            {/* Point-to-Point Quick Facts Bar (AEO Snippet-Targetable) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl">
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Loan Quantum</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">₹10L – ₹50+ Cr</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Collateral-Free</span>
                <span className="text-xs sm:text-sm font-black text-[#0062FF] block mt-0.5">Up to ₹5 Cr (CGTMSE)</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">DPR Turnaround</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">3 to 5 Days</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Bank Network</span>
                <span className="text-xs sm:text-sm font-black text-emerald-600 block mt-0.5">40+ Commercial Banks</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,98,255,0.3)] hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check Loan Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0062FF]" />
                <span>Book Priority Appointment</span>
              </button>

              <a
                href="tel:+919130894308"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0062FF] transition-colors py-2 px-1"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>+91 91308 94308</span>
              </a>
            </div>

            {/* Architecture Strip */}
            <div className="mt-6 sm:mt-7 inline-flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-500 bg-white/70 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-slate-200/60">
              <span className="text-[#0062FF] font-bold">Financing Options:</span>
              <span>MSME Loans</span>
              <span>•</span>
              <span>Machinery Finance</span>
              <span>•</span>
              <span>Working Capital (CC/OD)</span>
              <span>•</span>
              <span>CGTMSE Collateral-Free</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Bank Evaluation Framework (AEO Direct Answer Box + Benchmarks) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8">
            <AnimatedBadge icon={Scale} text="Credit Assessment Standards" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How Banks Evaluate Business Loan Eligibility in India
            </h2>
          </div>

          {/* AEO Featured Snippet Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-white border border-blue-200/80 mb-8 shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0062FF] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Core Bank Appraisal Rule (Key Takeaway)
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Financial institutions evaluate business loan eligibility across 4 fundamental parameters: <strong>1) Debt Service Coverage Ratio (DSCR ≥ 1.5)</strong>, <strong>2) Promoter CIBIL Score (700+)</strong>, <strong>3) Project Technical Feasibility</strong>, and <strong>4) Primary Hypothecation / CGTMSE Guarantee</strong>. New ventures are judged on project viability and promoter contribution, while existing units are evaluated on audited balance sheets, GST growth, and bank turnover conduct.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Point-to-Point Evaluation Benchmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {evaluationBenchmarks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#0062FF] group-hover:bg-[#0062FF] group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0062FF] border border-blue-200/60">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0062FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item.point}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] sm:text-xs text-slate-500">
                    <strong className="text-slate-700">Bank Impact:</strong> {item.impact}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Structured Financing Pre-Audit (Point-to-Point Checklist) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedBadge icon={ShieldCheck} text="Pre-Submission Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Business Loan Eligibility & Feasibility Assessment
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid bank application rejections. Our preliminary pre-audit verifies your eligibility, optimizes debt-equity ratios, and pinpoints documentation gaps before formal bank filing.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "MSME & Industry Priority Eligibility Check",
                    "Promoter CIBIL & Repayment Track Record Audit",
                    "Project Costing & Machinery Quotation Validation",
                    "10-Year Cash Flow & DSCR Sensitivity Modeling",
                    "CGTMSE Collateral-Free Structuring Support",
                    "Bank-Grade DPR & RBI-Standard CMA Compilation"
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
                    <span>Request Pre-Audit Review</span>
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

              {/* Verified Metrics Card - Compact Restrained Architectural Presentation */}
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
                      Preliminary DPR & Feasibility Turnaround
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average preliminary assessment and DPR drafting turnaround from complete document submission.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      7,100<span className="text-slate-400 font-bold text-lg sm:text-xl">+</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      MSME Promoters Advised
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      MSME promoters, manufacturers, and industrial enterprises guided across India.
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
                      Transparent milestone-based advisory engagement with zero hidden charges.
                    </p>
                  </div>

                </div>

                {/* Footer Notes */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span>Bank-Grade Financial Models</span>
                  <span>RBI & CGTMSE Aligned</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. 6 Procedural Milestones (Interactive Connected Roadmap Infographic - Compact Viewport Fit) */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F5FD] border-b border-slate-200/80 relative overflow-hidden">
        {/* Light geometric background subtle grid / pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f018_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f018_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1769E8]/5 via-[#0D9488]/4 to-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
            <div className="flex justify-center mb-2.5">
              <AnimatedBadge 
                icon={Layers} 
                text="Brainstorming Process Roadmap • 6 Procedural Milestones" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#10264F] tracking-tight leading-tight">
              Our 6-Step Loan Consulting <span className="text-[#1769E8]">Engagement</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-2xl mx-auto leading-relaxed">
              Complete procedural guidance across bank credit appraisals, DPR preparation, and loan sanctions through an interconnected advisory roadmap.
            </p>
          </div>

          {/* DESKTOP VIEW: Compact Landscape Symmetrical Composition (1260 x 520) */}
          <div className="hidden lg:block relative w-full max-w-[1260px] h-[520px] mx-auto select-none">
            
            {/* Connecting Lines & Concentric Radar Background (SVG Layer - z-10 behind cards & hub) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10" 
              viewBox="0 0 1260 520" 
              fill="none"
            >
              <defs>
                <linearGradient id="loan-hub-ring-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0D9488" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="loan-hub-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1769E8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft Radial Background Circle behind Hub */}
              <circle cx="630" cy="260" r="220" fill="url(#loan-hub-center-glow)" />

              {/* Concentric Radar Guide Rings centered at Hub Center (630, 260) */}
              <circle cx="630" cy="260" r="95" stroke="#1769E8" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
              <circle cx="630" cy="260" r="120" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
              <circle cx="630" cy="260" r="180" stroke="url(#loan-hub-ring-glow)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.45" />
              <circle cx="630" cy="260" r="260" stroke="#94A3B8" strokeWidth="1" strokeDasharray="5 7" opacity="0.3" />
              <circle cx="630" cy="260" r="370" stroke="#1769E8" strokeWidth="1" strokeDasharray="8 10" opacity="0.22" />
              <circle cx="630" cy="260" r="480" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />

              {/* Subtle Radial Guide Rays radiating outward from Hub center */}
              <line x1="540" y1="180" x2="430" y2="90" stroke="#1769E8" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
              <line x1="720" y1="180" x2="830" y2="90" stroke="#10B981" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
              <line x1="540" y1="340" x2="430" y2="430" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
              <line x1="720" y1="340" x2="830" y2="430" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />

              {/* Blueprint Coordinates & Crosshairs */}
              <g opacity="0.4" stroke="#1769E8" strokeWidth="1">
                <line x1="630" y1="24" x2="630" y2="34" />
                <line x1="625" y1="29" x2="635" y2="29" />
                <circle cx="630" cy="29" r="5" fill="none" strokeDasharray="2 2" />
              </g>
              <g opacity="0.4" stroke="#1769E8" strokeWidth="1">
                <line x1="630" y1="486" x2="630" y2="496" />
                <line x1="625" y1="491" x2="635" y2="491" />
                <circle cx="630" cy="491" r="5" fill="none" strokeDasharray="2 2" />
              </g>

              {/* Line 1: Blue (Hub: 568, 198 -> Card 1: 350, 77) */}
              <path 
                d="M 568,198 C 475,198 420,77 350,77" 
                stroke="#1769E8" 
                strokeWidth={hoveredMilestone === 0 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 0 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="568" cy="198" r={hoveredMilestone === 0 ? "5" : "4"} fill="#1769E8" className="transition-all duration-300" />

              {/* Line 2: Teal (Hub: 542, 260 -> Card 2: 350, 260) */}
              <path 
                d="M 542,260 L 350,260" 
                stroke="#0D9488" 
                strokeWidth={hoveredMilestone === 1 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 1 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="542" cy="260" r={hoveredMilestone === 1 ? "5" : "4"} fill="#0D9488" className="transition-all duration-300" />

              {/* Line 3: Purple (Hub: 568, 322 -> Card 3: 350, 443) */}
              <path 
                d="M 568,322 C 475,322 420,443 350,443" 
                stroke="#8B5CF6" 
                strokeWidth={hoveredMilestone === 2 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 2 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="568" cy="322" r={hoveredMilestone === 2 ? "5" : "4"} fill="#8B5CF6" className="transition-all duration-300" />

              {/* Line 4: Green (Hub: 692, 198 -> Card 4: 910, 77) */}
              <path 
                d="M 692,198 C 785,198 840,77 910,77" 
                stroke="#10B981" 
                strokeWidth={hoveredMilestone === 3 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 3 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="692" cy="198" r={hoveredMilestone === 3 ? "5" : "4"} fill="#10B981" className="transition-all duration-300" />

              {/* Line 5: Orange (Hub: 718, 260 -> Card 5: 910, 260) */}
              <path 
                d="M 718,260 L 910,260" 
                stroke="#F97316" 
                strokeWidth={hoveredMilestone === 4 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 4 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="718" cy="260" r={hoveredMilestone === 4 ? "5" : "4"} fill="#F97316" className="transition-all duration-300" />

              {/* Line 6: Pink (Hub: 692, 322 -> Card 6: 910, 443) */}
              <path 
                d="M 692,322 C 785,322 840,443 910,443" 
                stroke="#F43F5E" 
                strokeWidth={hoveredMilestone === 5 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 5 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="692" cy="322" r={hoveredMilestone === 5 ? "5" : "4"} fill="#F43F5E" className="transition-all duration-300" />
            </svg>

            {/* Terminal Sockets Layer (SVG Layer - z-25 on top of card edges) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-25" 
              viewBox="0 0 1260 520" 
              fill="none"
            >
              {/* Left Terminal Nodes on Card Edges (X: 350) */}
              <circle cx="350" cy="77" r={hoveredMilestone === 0 ? "5" : "4"} fill="#1769E8" stroke="white" strokeWidth="2" className="transition-all duration-300" />
              <circle cx="350" cy="260" r={hoveredMilestone === 1 ? "5" : "4"} fill="#0D9488" stroke="white" strokeWidth="2" className="transition-all duration-300" />
              <circle cx="350" cy="443" r={hoveredMilestone === 2 ? "5" : "4"} fill="#8B5CF6" stroke="white" strokeWidth="2" className="transition-all duration-300" />

              {/* Right Terminal Nodes on Card Edges (X: 910) */}
              <circle cx="910" cy="77" r={hoveredMilestone === 3 ? "5" : "4"} fill="#10B981" stroke="white" strokeWidth="2" className="transition-all duration-300" />
              <circle cx="910" cy="260" r={hoveredMilestone === 4 ? "5" : "4"} fill="#F97316" stroke="white" strokeWidth="2" className="transition-all duration-300" />
              <circle cx="910" cy="443" r={hoveredMilestone === 5 ? "5" : "4"} fill="#F43F5E" stroke="white" strokeWidth="2" className="transition-all duration-300" />
            </svg>

            {/* Central Advisory Hub with Elevated Multi-Layer Depth */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-44 h-44 rounded-full bg-white/95 backdrop-blur-md p-2 shadow-[0_16px_45px_-8px_rgba(23,105,232,0.18),0_2px_6px_rgba(16,38,79,0.05)] border border-white ring-1 ring-slate-200/60 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#F6F9FF] to-white border border-[#1769E8]/25 flex flex-col items-center justify-center p-3 text-center shadow-inner">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1769E8] border border-[#1769E8]/20 flex items-center justify-center mb-1 shadow-xs">
                    <Landmark className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#1769E8] bg-blue-50/90 px-2 py-0.5 rounded-full border border-[#1769E8]/25 mb-0.5">
                    Advisory Core
                  </span>
                  <h3 className="text-sm font-bold text-[#10264F] leading-tight">
                    Our Core<br/>Services
                  </h3>
                  <p className="text-[9px] text-slate-500 font-medium mt-0.5">
                    Business Loans &amp; Finance
                  </p>
                </div>
              </div>
            </div>

            {/* Six Connected Milestone Cards */}
            {/* LEFT COLUMN: Cards 1, 2, 3 (Width 350px, Height 154px) */}
            <div className="absolute left-0 top-0 bottom-0 w-[350px] flex flex-col justify-between z-20">
              {coreMilestones.slice(0, 3).map((ms, idx) => {
                const IconComponent = ms.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredMilestone(idx)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    className={`bg-white/95 backdrop-blur-md rounded-[18px] p-4 sm:p-4.5 border transition-all duration-300 relative flex flex-col justify-between h-[154px] cursor-pointer origin-right ring-1 ring-white/90 overflow-hidden ${
                      hoveredMilestone === idx
                        ? 'border-[#1769E8]/50 shadow-[0_14px_34px_-6px_rgba(23,105,232,0.14)] scale-[1.015]'
                        : 'border-slate-200/80 shadow-[0_8px_24px_-6px_rgba(16,38,79,0.06),0_1px_2px_rgba(16,38,79,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(16,38,79,0.1)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div 
                            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${ms.accentColor}18`, color: ms.accentColor }}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span 
                            className="text-[10px] font-extrabold uppercase tracking-wider"
                            style={{ color: ms.accentColor }}
                          >
                            {ms.stageLabel}
                          </span>
                        </div>
                        <div 
                          className="w-5.5 h-5.5 rounded-full text-white text-[10px] font-black flex items-center justify-center shadow-xs"
                          style={{ backgroundColor: ms.accentColor }}
                        >
                          {ms.number}
                        </div>
                      </div>

                      <h4 className="text-[14px] font-bold text-[#10264F] leading-snug">
                        {ms.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-relaxed line-clamp-2">
                        {ms.desc}
                      </p>
                    </div>

                    <div className="pt-1.5">
                      <span className="inline-block text-[10.5px] font-medium text-slate-600 bg-slate-50/90 border border-slate-200/80 px-2.5 py-0.5 rounded-full">
                        {ms.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Cards 4, 5, 6 (Width 350px, Height 154px) */}
            <div className="absolute right-0 top-0 bottom-0 w-[350px] flex flex-col justify-between z-20">
              {coreMilestones.slice(3, 6).map((ms, idx) => {
                const actualIdx = idx + 3;
                const IconComponent = ms.icon;
                return (
                  <div
                    key={actualIdx}
                    onMouseEnter={() => setHoveredMilestone(actualIdx)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    className={`bg-white/95 backdrop-blur-md rounded-[18px] p-4 sm:p-4.5 border transition-all duration-300 relative flex flex-col justify-between h-[154px] cursor-pointer origin-left ring-1 ring-white/90 overflow-hidden ${
                      hoveredMilestone === actualIdx
                        ? 'border-[#1769E8]/50 shadow-[0_14px_34px_-6px_rgba(23,105,232,0.14)] scale-[1.015]'
                        : 'border-slate-200/80 shadow-[0_8px_24px_-6px_rgba(16,38,79,0.06),0_1px_2px_rgba(16,38,79,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(16,38,79,0.1)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div 
                            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${ms.accentColor}18`, color: ms.accentColor }}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span 
                            className="text-[10px] font-extrabold uppercase tracking-wider"
                            style={{ color: ms.accentColor }}
                          >
                            {ms.stageLabel}
                          </span>
                        </div>
                        <div 
                          className="w-5.5 h-5.5 rounded-full text-white text-[10px] font-black flex items-center justify-center shadow-xs"
                          style={{ backgroundColor: ms.accentColor }}
                        >
                          {ms.number}
                        </div>
                      </div>

                      <h4 className="text-[14px] font-bold text-[#10264F] leading-snug">
                        {ms.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-relaxed line-clamp-2">
                        {ms.desc}
                      </p>
                    </div>

                    <div className="pt-1.5">
                      <span className="inline-block text-[10.5px] font-medium text-slate-600 bg-slate-50/90 border border-slate-200/80 px-2.5 py-0.5 rounded-full">
                        {ms.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* MOBILE & TABLET VIEW: Symmetrical Vertical Roadmap */}
          <div className="lg:hidden">
            {/* Mobile Central Advisory Hub */}
            <div className="flex justify-center mb-5 sm:mb-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-tr from-[#1769E8]/20 to-[#8B5CF6]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative w-32 h-32 rounded-full bg-white/95 backdrop-blur-md p-1.5 shadow-[0_12px_36px_-6px_rgba(23,105,232,0.18)] border border-white ring-1 ring-slate-200/70 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#F6F9FF] to-white border border-[#1769E8]/20 flex flex-col items-center justify-center p-2.5 text-center shadow-inner">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#1769E8] border border-[#1769E8]/20 flex items-center justify-center mb-0.5 shadow-xs">
                    <Landmark className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold text-[#10264F] leading-tight">
                    Our Core<br/>Services
                  </h3>
                  <p className="text-[8.5px] text-slate-500 font-medium mt-0.5">
                    Business Loans &amp; Finance
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Cards */}
            <div className="space-y-3.5">
              {coreMilestones.map((ms, idx) => {
                const IconComponent = ms.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white/95 backdrop-blur-md rounded-[18px] p-4 sm:p-5 border border-slate-200/80 shadow-[0_6px_20px_-4px_rgba(16,38,79,0.06),0_1px_2px_rgba(16,38,79,0.04)] ring-1 ring-white/80 hover:shadow-soft transition-all duration-300 relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div 
                            className="w-6.5 h-6.5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${ms.accentColor}18`, color: ms.accentColor }}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span 
                            className="text-[10px] font-extrabold uppercase tracking-wider"
                            style={{ color: ms.accentColor }}
                          >
                            {ms.stageLabel}
                          </span>
                        </div>
                        <div 
                          className="w-5.5 h-5.5 rounded-full text-white text-[10px] font-black flex items-center justify-center shadow-xs"
                          style={{ backgroundColor: ms.accentColor }}
                        >
                          {ms.number}
                        </div>
                      </div>

                      <h4 className="text-[15px] font-semibold text-[#10264F] leading-snug">
                        {ms.title}
                      </h4>
                      <p className="text-[12px] text-slate-500 font-normal mt-1 leading-relaxed">
                        {ms.desc}
                      </p>
                      <div className="pt-2.5 mt-2.5 border-t border-slate-100">
                        <span className="inline-block text-[11px] font-medium text-slate-600 bg-slate-50/90 border border-slate-200/80 px-2.5 py-0.5 rounded-full">
                          {ms.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. 6 Institutional Financing Programs (High Density, Point-to-Point Specs) */}
      <section id="financing-programs" className="py-14 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Landmark} text="Institutional Debt Facilities" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Business Loan Options & Financing Specifications
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Select the appropriate debt structure for your business setup, machinery procurement, or working capital requirements.
            </p>
          </div>

          {/* 6 Structured Loan Facilities (Clean Unboxed Architecture) */}
          <div className="space-y-12 divide-y divide-slate-200/80">
            {financingPrograms.map((prog, idx) => {
              const IconComp = prog.icon;
              return (
                <div 
                  key={prog.id}
                  className={idx > 0 ? "pt-12" : ""}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    
                    {/* Left Column: Icon + Badge + Title + Summary + Specs + CTA */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
                      <div>
                        {/* Eyebrow Badge */}
                        <div className="mb-2">
                          <AnimatedBadge 
                            text={prog.badge} 
                            className="!text-[10px] sm:!text-[10.5px] !px-2.5 !py-0.5 normal-case font-bold tracking-normal" 
                          />
                        </div>

                        {/* Title & Icon Header Block */}
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

                        {/* 4-Column Horizontal Specifications Strip */}
                        <div className="mt-5 sm:mt-6 bg-[#F8FAFC] border border-blue-100/70 rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/60">
                          {prog.specs.map((spec, spIdx) => (
                            <div 
                              key={spIdx} 
                              className={`${spIdx > 0 ? 'sm:pl-4 lg:pl-5' : ''} ${spIdx >= 2 ? 'pt-3 sm:pt-0' : ''}`}
                            >
                              <span className="text-[11px] sm:text-xs font-medium text-slate-500 block">
                                {spec.label}
                              </span>
                              <span className="text-sm sm:text-[14.5px] font-bold text-slate-900 block mt-1 leading-snug whitespace-pre-line">
                                {spec.value}
                              </span>
                              {spec.sub && (
                                <span className="text-[11px] text-slate-500 font-medium block mt-0.5 leading-tight">
                                  {spec.sub}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6 flex items-center">
                        <button
                          type="button"
                          onClick={onCheckEligibility}
                          className="px-6 py-2.5 sm:py-3 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 hover:gap-3 cursor-pointer shadow-[0_4px_16px_rgba(0,98,255,0.24)] group"
                        >
                          <span>Explore {prog.title.replace(/^[0-9]\.\s*/, '')}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Key Coverage Points & Recommended For */}
                    <div className="lg:col-span-5 xl:col-span-4 bg-[#F8FAFC] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 border border-blue-100/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3.5">
                          <div className="w-5 h-5 rounded-full bg-[#0062FF] flex items-center justify-center text-white flex-shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight">
                            Key Coverage Points
                          </h4>
                        </div>

                        <ul className="space-y-2.5 sm:space-y-3">
                          {prog.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs sm:text-[12.5px] text-slate-700 flex items-start gap-2.5 leading-relaxed font-normal">
                              <div className="w-4.5 h-4.5 rounded-full bg-[#0062FF] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-200/60 mt-4 sm:mt-5">
                        <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                          <Bookmark className="w-3.5 h-3.5 text-slate-600 fill-slate-500" />
                          <span className="text-[11px] font-semibold text-slate-500">
                            Recommended For
                          </span>
                        </div>
                        <p className="text-xs sm:text-[12.5px] font-bold text-slate-800 leading-snug">
                          {prog.bestFor}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Guidelines Callout */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                <strong>Regulatory & Credit Assessment Notice:</strong> Loan quantum, interest rates, and sanction approvals are strictly determined by lending banks adhering to independent credit policies and RBI regulations. Government-backed guarantee programs (like CGTMSE) eliminate third-party mortgage requirements but require financial viability.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Institutional Credibility & Verified Track Record */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Award} text="Advisory Track Record" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why MSMEs & Manufacturers Trust AB Consultancy
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Clear professional advisory with bank-grade standards, transparent fee structures, and proven pan-India execution.
            </p>
          </div>

          {/* 4 Point-to-Point Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Ex-Bank Financial Modeling</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Detailed Project Reports and CMA data modeled to meet strict credit appraisal and DSCR benchmarks required by banking sanction committees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Zero Upfront Hidden Charges</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                100% transparent milestone-based advisory with preliminary eligibility assessment provided free of charge.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Multi-Sector Industry Expertise</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Specialized experience across precision manufacturing, agro & food processing, textiles, solar energy, engineering, and service enterprises.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Active Branch & Field Coordination</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Direct liaison with bank managers, credit cells, and DIC officers to swiftly resolve technical queries and expedite sanction.
              </p>
            </div>
          </div>

          {/* 4 Track Record Stats */}
          <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">15+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Years Experience</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Specialized loan & subsidy consulting</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#60A5FA]">7,100+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Clients Advised</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pan-India enterprise footprint</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹180+ Cr</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Subsidies Facilitated</div>
                <div className="text-[11px] text-slate-400 mt-0.5">PMEGP, PMFME & State PSI</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400">40+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Commercial Banks</div>
                <div className="text-[11px] text-slate-400 mt-0.5">National & private lending network</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Have a Specific Project in Mind?</div>
                <div className="text-xs text-slate-300">Speak directly with our senior credit analyst for custom project structuring.</div>
              </div>
              <button
                type="button"
                onClick={onTalkConsultant}
                className="px-6 py-2.5 rounded-full bg-[#0062FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs"
              >
                Talk with Senior Consultant
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Clear 3-Stage Process */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={TrendingUp} text="Engagement Flow" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 3-Stage Consultancy Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#0062FF] uppercase tracking-wider">Phase 1</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Book Your Consultation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss project costing, machinery requirements, promoter contribution, and funding objectives with our advisory desk.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/70 text-[#0062FF] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#059669] uppercase tracking-wider">Phase 2</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Financial Assessment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Share promoter KYC, financial statements, and quotations. Our analysts evaluate eligibility and suitable lending options.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="tel:+919130894308"
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 text-emerald-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 91308 94308</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#7C3AED] uppercase tracking-wider">Phase 3</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Bank Dossier & Sanction</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Receive bank-compliant Detailed Project Reports, CMA sheets, and structured documentation support through to sanction.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100/70 text-purple-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Loan Assistance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Point-to-Point Document Checklist (Scannable 4-Column Grid) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={ClipboardList} text="Documentation Checklist" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Essential Documents Required for Business Loans
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Keep these documents organized for swift bank file processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0062FF] flex items-center justify-center mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">1. Promoter & KYC</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• PAN & Aadhaar of all promoters</li>
                <li className="flex items-center gap-2">• Residence address proof</li>
                <li className="flex items-center gap-2">• Passport photographs</li>
                <li className="flex items-center gap-2">• Net worth statement & CIBIL</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">2. Business Registrations</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Udyam MSME Certificate</li>
                <li className="flex items-center gap-2">• GST Registration Certificate</li>
                <li className="flex items-center gap-2">• Partnership Deed / MOA & AOA</li>
                <li className="flex items-center gap-2">• Shop Act / Industrial Factory License</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-2.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">3. Financial Records</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Last 3 years ITR with computations</li>
                <li className="flex items-center gap-2">• Audited balance sheets & P&L</li>
                <li className="flex items-center gap-2">• 12 months primary bank statements</li>
                <li className="flex items-center gap-2">• GSTR-3B / GSTR-1 returns</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#D97706] flex items-center justify-center mb-2.5">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">4. Project & Quotations</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Bank-Grade DPR (Detailed Project Report)</li>
                <li className="flex items-center gap-2">• CMA Data & 10-year projections</li>
                <li className="flex items-center gap-2">• Official machinery quotations/invoices</li>
                <li className="flex items-center gap-2">• Land ownership deed / Lease agreement</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Direct-Answer FAQs (AEO & GEO Gold Standard) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <AnimatedBadge icon={HelpCircle} text="Direct Answers & Local Insights" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Business Loans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Authoritative answers regarding CGTMSE collateral-free limits, Bank-Grade DPRs, CMA data modeling, and loan sanction procedures in Ahilyanagar and Maharashtra.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0062FF] transition-colors cursor-pointer"
                  >
                    <span className="leading-snug flex-1 pr-2">
                      <span className="text-[#0062FF] mr-2">{idx + 1}.</span>
                      {faq.q}
                    </span>
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

      {/* 10. Local GEO Advisory Desk Contact Box */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <AnimatedBadge icon={MapPin} text="Head Office & Advisory Desk" isDark={true} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  Connect with AB Consultancy Business Loan Advisors
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Planning an industrial expansion, new startup, or machinery purchase? Visit our office in Ahilyanagar or connect with our senior credit analysts for tailored loan documentation support.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                    <span>Office No. 106, Second Floor, Baiju Height, Near Old Vasant Talkies, Ahilyanagar (Ahmednagar) – 414001, Maharashtra, India.</span>
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
                <h3 className="text-base font-bold text-white mb-1.5">
                  Get Started Today
                </h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  Fast preliminary assessment to understand your loan eligibility, project cost feasibility, and optimal financing routes.
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
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
              Disclaimer & Regulatory Boundary
            </p>
            <p>
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All loans and credit guarantee approvals are subject to the independent appraisal, sanction policies, and regulatory guidelines of the respective lending banks and institutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
