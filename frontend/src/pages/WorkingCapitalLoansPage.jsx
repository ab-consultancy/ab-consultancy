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
  Bookmark,
  Warehouse
} from 'lucide-react';

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

export default function WorkingCapitalLoansPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useSEO({
    title: "Working Capital Loans & Cash Credit (CC/OD) Ahilyanagar | AB Consultancy",
    description: "Secure working capital loans in Ahilyanagar & Maharashtra. Cash Credit (CC), Overdraft (OD), Letter of Credit (LC), Bank Guarantee (BG), and MPBF CMA modeling across 40+ banks.",
    canonical: "https://www.abconsultancy.net.in/services/working-capital-loans",
    keywords: "Working Capital Loan Ahilyanagar, Cash Credit CC Limit Ahmednagar, Overdraft OD Facility Maharashtra, MPBF Working Capital DPR, Letter of Credit LC Advisory Nagar, Bank Guarantee BG Consultant"
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://www.abconsultancy.net.in/services/working-capital-loans#service",
        "name": "AB Consultancy - Working Capital & Cash Credit (CC/OD) Advisory",
        "serviceType": "Working Capital Loan Advisory, Cash Credit (CC), Overdraft (OD), Trade Finance LC/BG",
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
        "description": "Professional working capital consultancy for Cash Credit (CC), Overdraft (OD), inventory funding, and trade finance limits under RBI Nayak/Tandon MPBF norms across 40+ scheduled banks."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abconsultancy.net.in/services/working-capital-loans#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between Cash Credit (CC) and Overdraft (OD) facilities in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Cash Credit (CC) facility is a revolving business credit limit sanctioned against the primary hypothecation of current assets (raw materials, stock-in-trade, work-in-progress, and sundry debtors) following regular drawing power (DP) calculation. An Overdraft (OD) facility is an operating limit sanctioned against collateral security such as commercial property, fixed deposits, or financial instruments. In both facilities, interest is charged only on the daily utilized balance, not on the sanctioned limit."
            }
          },
          {
            "@type": "Question",
            "name": "How do banks calculate Maximum Permissible Bank Finance (MPBF) for working capital limits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks compute working capital limits using RBI-mandated MPBF guidelines. For MSMEs with limits up to ₹5 Crores, the Turnover Method (Nayak Committee) is typically applied, sanctioning a minimum of 20% of projected annual gross turnover as working capital debt, with 5% brought by the promoter as margin money. For larger limits above ₹5 Crores, the Tandon Committee Method assesses current assets and liabilities, requiring a minimum Net Working Capital (NWC) margin of 25%."
            }
          },
          {
            "@type": "Question",
            "name": "Can MSMEs in Maharashtra get working capital limits without collateral property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under the CGTMSE scheme, micro and small enterprises can secure fund-based Cash Credit limits up to ₹5 Crores completely collateral-free. The loan is secured by the primary hypothecation of inventory and book debts without requiring personal residential property mortgage. AB Consultancy models your stock statement audits, debtor aging schedules, and bank CMA reports to achieve CGTMSE-backed working capital sanctions."
            }
          },
          {
            "@type": "Question",
            "name": "What are non-fund based working capital facilities (Letter of Credit & Bank Guarantee)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non-fund based limits include Letters of Credit (Inland & Foreign LC) and Bank Guarantees (Financial & Performance BG). These instruments allow manufacturers and contractors to procure raw materials or bid for tenders with bank-backed assurance without tying up immediate cash liquidity. Banks convert LC into fund-based bills discounting upon receipt of commercial transport documents."
            }
          },
          {
            "@type": "Question",
            "name": "How does AB Consultancy assist businesses in Ahilyanagar and Maharashtra with working capital sanctions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Headquartered at Office No. 106, Baiju Height, Ahilyanagar, Maharashtra (Phone: +91 91308 94308), AB Consultancy has 15+ years of experience and 7,100+ clients advised across India. We structure MPBF calculations, compile CMA projections, prepare stock audit statements, resolve Drawing Power (DP) deficits, and coordinate directly with bank credit cells across 40+ leading public and private banks."
            }
          }
        ]
      }
    ]
  };

  const evaluationBenchmarks = [
    {
      title: "1. Operating Cycle & Cash Conversion",
      point: "Inventory holding period, manufacturing turnaround days, and receivable collection cycle.",
      impact: "Calculates total working capital gap and sets sustainable Drawing Power (DP).",
      badge: "Operating Cycle",
      icon: Clock
    },
    {
      title: "2. MPBF Calculation (Nayak/Tandon)",
      point: "Minimum 20% of projected annual GST turnover or current ratio (CR ≥ 1.33x) assessment.",
      impact: "Determines eligible revolving limits and prevents over-leveraging of short-term debt.",
      badge: "MPBF Compliance",
      icon: Calculator
    },
    {
      title: "3. Stock & Debtor Aging Quality",
      point: "Quality of paid stock, raw material inventory, and debtors under 90 to 120 days.",
      impact: "Directly determines monthly Drawing Power eligibility and primary security hypothecation.",
      badge: "Drawing Power (DP)",
      icon: Layers
    },
    {
      title: "4. GST Turnover & Bank Route Volume",
      point: "Reconciliation of audited GSTR-3B filings, ledger sales, and active bank account throughput.",
      impact: "Validates genuine commercial revenue velocity and supports credit limit enhancements.",
      badge: "Revenue Verification",
      icon: TrendingUp
    },
    {
      title: "5. Security: Stock Hypothecation & CGTMSE",
      point: "Primary charge on current assets plus CGTMSE collateral-free guarantee cover up to ₹5 Cr.",
      impact: "Waiver of immovable residential property mortgage for micro and small manufacturing units.",
      badge: "Collateral Structure",
      icon: ShieldCheck
    },
    {
      title: "6. Non-Fund Based Limits (LC / BG)",
      point: "Letters of Credit for supplier payments and Bank Guarantees for government tenders.",
      impact: "Preserves liquid cash reserves and optimizes raw material supplier procurement credit.",
      badge: "Trade Finance",
      icon: Handshake
    }
  ];

  const coreMilestones = [
    {
      number: 1,
      stageLabel: "STAGE 1 • OPERATING AUDIT",
      trackLabel: "Appraisal",
      title: "Operating Cycle & Stock Audit",
      desc: "Fast 24-hour evaluation of current debtor turnaround, inventory holding, and working capital gap.",
      tag: "Working Capital Assessment",
      deliverable: "Working Capital Assessment",
      accentColor: "#1769E8",
      accentBg: "bg-[#1769E8]",
      bgTint: "bg-blue-50",
      textAccent: "text-[#1769E8]",
      icon: Search
    },
    {
      number: 2,
      stageLabel: "STAGE 2 • MPBF & CMA DATA",
      trackLabel: "Financials",
      title: "RBI MPBF & 5-Year CMA Formulation",
      desc: "Comprehensive Credit Monitoring Arrangement (CMA) modeling, current ratio analysis, and turnover sizing.",
      tag: "Bank-Grade CMA Dossier",
      deliverable: "Bank-Grade CMA Dossier",
      accentColor: "#0D9488",
      accentBg: "bg-[#0D9488]",
      bgTint: "bg-teal-50",
      textAccent: "text-[#0D9488]",
      icon: FileText
    },
    {
      number: 3,
      stageLabel: "STAGE 3 • FACILITY STRUCTURING",
      trackLabel: "Limits",
      title: "Fund & Non-Fund Limit Optimization",
      desc: "Allocating limits between Cash Credit (CC), Overdraft (OD), Letter of Credit (LC), and Bank Guarantee (BG).",
      tag: "Multi-Facility Sizing Note",
      deliverable: "Multi-Facility Sizing Note",
      accentColor: "#8B5CF6",
      accentBg: "bg-[#8B5CF6]",
      bgTint: "bg-purple-50",
      textAccent: "text-[#8B5CF6]",
      icon: Calculator
    },
    {
      number: 4,
      stageLabel: "STAGE 4 • COLLATERAL & CGTMSE",
      trackLabel: "Security",
      title: "CGTMSE & Hypothecation Structuring",
      desc: "Primary current asset hypothecation documentation and collateral-free CGTMSE trust fee alignment.",
      tag: "Security Structure Dossier",
      deliverable: "Security Structure Dossier",
      accentColor: "#10B981",
      accentBg: "bg-[#10B981]",
      bgTint: "bg-emerald-50",
      textAccent: "text-[#10B981]",
      icon: Zap
    },
    {
      number: 5,
      stageLabel: "STAGE 5 • BANK SUBMISSION",
      trackLabel: "Documentation",
      title: "Credit Cell Application Submission",
      desc: "Compiling audited ITRs, GST 3B reconciliations, stock statements, and debtor aging reports.",
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
      stageLabel: "STAGE 6 • SANCTION & DP RELEASE",
      trackLabel: "Disbursement",
      title: "Credit Sanction & Drawing Power Setup",
      desc: "Liaison with bank branch manager and credit processing cell for account opening and DP release.",
      tag: "End-to-End Sanction Support",
      deliverable: "End-to-End Sanction Support",
      accentColor: "#F43F5E",
      accentBg: "bg-[#F43F5E]",
      bgTint: "bg-rose-50",
      textAccent: "text-[#F43F5E]",
      icon: Handshake
    }
  ];

  const financingPrograms = [
    {
      id: "cash-credit",
      title: "1. Cash Credit (CC) Facility",
      category: "Revolving Operating Debt",
      summary: "Primary working capital credit facility sanctioned against hypothecation of inventory, raw material stock, and sundry trade debtors.",
      specs: [
        { label: "Limit Quantum", value: "₹10 Lakhs to\n₹25 Crores", sub: null },
        { label: "Assessment", value: "20% of Turnover", sub: "(Nayak Committee Norms)" },
        { label: "Interest Cost", value: "Usage-Based", sub: "On daily utilized balance" },
        { label: "Tenure", value: "Annual Renewal", sub: "Subject to annual review" }
      ],
      points: [
        "Interest payable solely on utilized funds, never on the overall sanctioned ceiling",
        "Drawing Power (DP) calculated monthly based on certified stock and debtor statements",
        "Available under CGTMSE collateral-free guarantee scheme up to ₹5 Crores"
      ],
      bestFor: "Manufacturers, Wholesale Traders, Assembly Units, Engineering Job Works",
      icon: Coins,
      badge: "Cash Credit (CC)"
    },
    {
      id: "overdraft-facility",
      title: "2. Business Overdraft (OD) Facility",
      category: "Asset-Backed Liquidity",
      summary: "Flexible operating credit facility sanctioned against commercial/residential property mortgage, fixed deposits, or financial securities.",
      specs: [
        { label: "Limit Quantum", value: "₹10 Lakhs to\n₹15 Crores", sub: null },
        { label: "Security", value: "Property Mortgage", sub: "Or Liquid Deposits" },
        { label: "Repayment", value: "Flexible Revolving", sub: "Pay & withdraw freely" },
        { label: "Processing", value: "Fast-Track", sub: "Without stock audit checks" }
      ],
      points: [
        "Zero monthly stock statement submission hassle; operates as a pure current account buffer",
        "Higher limits up to 60% to 70% of property market value (Drop-line OD options available)",
        "Ideal for tackling unexpected operational overheads and supplier bulk purchasing discounts"
      ],
      bestFor: "Distributors, Retailers, Professional Service Firms, Contractors",
      icon: Building2,
      badge: "Business Overdraft (OD)"
    },
    {
      id: "letter-of-credit",
      title: "3. Letter of Credit (Inland & Foreign LC)",
      category: "Non-Fund Trade Credit",
      summary: "Bank-guaranteed commitment assuring overseas or domestic raw material suppliers of payment upon compliant transport documentation.",
      specs: [
        { label: "Facility Type", value: "Sight & Usance LC", sub: "Inland & Foreign trade" },
        { label: "Credit Period", value: "90 to 180 Days", sub: "Supplier credit window" },
        { label: "Cash Outflow", value: "Nil at Issuance", sub: "Only bank commission" },
        { label: "Conversion", value: "To Buyer's Credit", sub: "Upon document arrival" }
      ],
      points: [
        "Empowers manufacturers to negotiate superior raw material prices and cash discounts",
        "Backed by scheduled commercial banks, eliminating supplier counterparty risk",
        "Can be converted into fund-based bill discounting upon arrival of commercial goods"
      ],
      bestFor: "Importers, Heavy Industrial Fabricators, Agro Processors, Plastic Resin Buyers",
      icon: Landmark,
      badge: "Trade Finance (LC)"
    },
    {
      id: "bank-guarantee",
      title: "4. Bank Guarantee (Financial & Performance BG)",
      category: "Tender & Contract Security",
      summary: "Non-fund based bank guarantees for industrial contractors and manufacturers executing government, PSU, and corporate contracts.",
      specs: [
        { label: "Guarantee Types", value: "Performance / EMD", sub: "Financial / Advance BG" },
        { label: "Margin Required", value: "10% to 25% FD", sub: "(Subject to bank rating)" },
        { label: "Validity", value: "Up to 3–5 Years", sub: "Contract execution cycle" },
        { label: "Collateral", value: "Primary Security", sub: "+ Property / Liquid Cover" }
      ],
      points: [
        "Unlocks high-value government bids and PSU contracts without locking up operational capital",
        "Fast-track processing for registered MSMEs under public procurement priority norms",
        "Includes Advance Payment Guarantees, Retention Money Guarantees, and Bid Bond BGs"
      ],
      bestFor: "Infrastructure Contractors, Machinery Suppliers, Electrical EPC Developers",
      icon: ShieldCheck,
      badge: "Bank Guarantee (BG)"
    },
    {
      id: "wctl-facility",
      title: "5. Working Capital Term Loans (WCTL)",
      category: "Structured Liquidity Debt",
      summary: "Structured medium-term amortizing loan to clear long-standing supplier dues, bridge seasonal debtor lags, or build buffer inventory.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹10 Crores", sub: null },
        { label: "Tenure", value: "3 to 5 Years", sub: "Structured EMI repayment" },
        { label: "Interest Rate", value: "8.75% – 11.5% p.a.", sub: "(Linked to EBLR)" },
        { label: "Purpose", value: "Core Working Capital", sub: "Permanent NWC funding" }
      ],
      points: [
        "Infuses permanent Net Working Capital (NWC) without straining revolving CC drawing power",
        "Structured with comfortable 36 to 60-month monthly repayment schedules",
        "Helps enterprises recover from delayed client payments and expand production capacity"
      ],
      bestFor: "Expanding Manufacturers, Textile Mills, Export Packaging Units",
      icon: TrendingUp,
      badge: "Term Liquidity (WCTL)"
    },
    {
      id: "cgtmse-working-capital",
      title: "6. Collateral-Free MSME Working Capital Loans",
      category: "Credit Guarantee Scheme",
      summary: "Flagship Central Government CGTMSE-backed working capital limits up to ₹5 Crores without pledging residential or commercial property.",
      specs: [
        { label: "CGTMSE Limit", value: "Up to ₹5 Crores", sub: "100% Collateral-Free" },
        { label: "Facility Type", value: "CC / OD / WCTL", sub: "Revolving or Term Debt" },
        { label: "Guarantee Cover", value: "75% to 85%", sub: "Backed by Govt Trust" },
        { label: "Eligibility", value: "All MSME Sectors", sub: "Manufacturing & Services" }
      ],
      points: [
        "100% legal waiver of immovable mortgage and personal third-party guarantors",
        "Available across all Public Sector Banks (SBI, BoM, PNB, BoB) and private commercial banks",
        "Comprehensive DPR support demonstrating healthy cash turnover and debtor liquidity"
      ],
      bestFor: "Small Manufacturers, Engineering Startups, Agro Hubs, Ancillary Suppliers",
      icon: Zap,
      badge: "Collateral-Free (CGTMSE)"
    }
  ];

  const faqs = [
    {
      q: "What is the difference between Cash Credit (CC) and Overdraft (OD) facilities in India?",
      a: "A Cash Credit (CC) facility is a revolving business credit limit sanctioned against the primary hypothecation of current assets (raw materials, stock-in-trade, work-in-progress, and sundry debtors) following regular drawing power (DP) calculation. An Overdraft (OD) facility is an operating limit sanctioned against collateral security such as commercial property, fixed deposits, or financial instruments. In both facilities, interest is charged only on the daily utilized balance, not on the sanctioned limit."
    },
    {
      q: "How do banks calculate Maximum Permissible Bank Finance (MPBF) for working capital limits?",
      a: "Banks compute working capital limits using RBI-mandated MPBF guidelines. For MSMEs with limits up to ₹5 Crores, the Turnover Method (Nayak Committee) is typically applied, sanctioning a minimum of 20% of projected annual gross turnover as working capital debt, with 5% brought by the promoter as margin money. For larger limits above ₹5 Crores, the Tandon Committee Method assesses current assets and liabilities, requiring a minimum Net Working Capital (NWC) margin of 25%."
    },
    {
      q: "Can MSMEs in Maharashtra get working capital limits without collateral property?",
      a: "Yes. Under the CGTMSE scheme, micro and small enterprises can secure fund-based Cash Credit limits up to ₹5 Crores completely collateral-free. The loan is secured by the primary hypothecation of inventory and book debts without requiring personal residential property mortgage. AB Consultancy models your stock statement audits, debtor aging schedules, and bank CMA reports to achieve CGTMSE-backed working capital sanctions."
    },
    {
      q: "What are non-fund based working capital facilities (Letter of Credit & Bank Guarantee)?",
      a: "Non-fund based limits include Letters of Credit (Inland & Foreign LC) and Bank Guarantees (Financial & Performance BG). These instruments allow manufacturers and contractors to procure raw materials or bid for tenders with bank-backed assurance without tying up immediate cash liquidity. Banks convert LC into fund-based bills discounting upon receipt of commercial transport documents."
    },
    {
      q: "How does AB Consultancy assist businesses in Ahilyanagar and Maharashtra with working capital sanctions?",
      a: "Headquartered at Office No. 106, Baiju Height, Ahilyanagar, Maharashtra (Phone: +91 91308 94308), AB Consultancy has 15+ years of experience and 7,100+ clients advised across India. We structure MPBF calculations, compile CMA projections, prepare stock audit statements, resolve Drawing Power (DP) deficits, and coordinate directly with bank credit cells across 40+ leading public and private banks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* 1. Hero Section */}
      <section className="relative pt-10 sm:pt-14 pb-14 sm:pb-18 bg-gradient-to-b from-[#E6F0FE] via-[#EDF4FE] to-[#F4F8FD] border-b border-slate-200/60 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0062FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0062FF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 sm:mb-6">
            <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#0062FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0062FF] font-semibold">Working Capital Loans</span>
          </div>

          <div className="max-w-4xl">
            <AnimatedBadge 
              icon={Coins} 
              text="Corporate Liquidity & Credit Desk • Cash Credit (CC) & Overdraft (OD)" 
              isHero={true} 
            />

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Working Capital Loans & Cash Credit (CC/OD) Advisory
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-[#0062FF] leading-snug">
              Optimize your operational cash flow with structured Cash Credit (CC), Overdraft (OD), Letters of Credit (LC) & bank-grade MPBF CMA modeling.
            </p>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              AB Consultancy provides specialized working capital advisory for manufacturers, traders, and contractors in Ahilyanagar and across Maharashtra. We structure MPBF turnover limits, resolve Drawing Power gaps, and secure credit lines across 40+ scheduled banks.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl">
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Limit Quantum</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">₹10L – ₹25+ Cr</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Collateral-Free</span>
                <span className="text-xs sm:text-sm font-black text-[#0062FF] block mt-0.5">Up to ₹5 Cr (CGTMSE)</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">CMA Modeling</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">3 to 5 Days</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Lending Network</span>
                <span className="text-xs sm:text-sm font-black text-emerald-600 block mt-0.5">40+ Scheduled Banks</span>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,98,255,0.3)] hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check CC/OD Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0062FF]" />
                <span>Book Working Capital Audit</span>
              </button>

              <a
                href="tel:+919130894308"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0062FF] transition-colors py-2 px-1"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>+91 91308 94308</span>
              </a>
            </div>

            <div className="mt-6 sm:mt-7 inline-flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-500 bg-white/70 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-slate-200/60">
              <span className="text-[#0062FF] font-bold">Supported Facilities:</span>
              <span>Cash Credit (CC)</span>
              <span>•</span>
              <span>Overdraft (OD)</span>
              <span>•</span>
              <span>Letter of Credit (LC)</span>
              <span>•</span>
              <span>Bank Guarantee (BG)</span>
              <span>•</span>
              <span>CGTMSE Collateral-Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bank Evaluation Framework */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <AnimatedBadge icon={Scale} text="Credit Committee Appraisal Criteria" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bank Evaluation Framework for Working Capital Limits
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Understand how credit sanction committees appraise drawing power, debtor turnaround, and MPBF ratios.
            </p>
          </div>

          <div className="bg-[#F8FAFD] border-l-4 border-[#0062FF] p-5 sm:p-6 rounded-r-2xl mb-10 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
              What is Working Capital Finance and How Do Banks Sanction Revolving Cash Credit (CC) Limits?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Working Capital Finance</strong> provides revolving operating credit lines (₹10 Lakhs to ₹25+ Crores) enabling businesses to fund procurement of raw material inventory, bridge debtor collection cycles, and meet operational payroll. Banks evaluate proposals based on <strong>Nayak Committee MPBF guidelines</strong> (typically 20% of projected annual GST turnover), <strong>Current Ratio (CR ≥ 1.33x)</strong>, monthly Drawing Power (DP) formulas, stock statement audits, and debtor aging. Credit facilities are primarily secured through the hypothecation of stock and book debts, with collateral-free options up to ₹5 Crores under CGTMSE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {evaluationBenchmarks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0062FF]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062FF] flex items-center justify-center font-bold">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
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

      {/* 3. Structured Financing Pre-Audit */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <AnimatedBadge icon={ShieldCheck} text="Pre-Sanction Liquidity Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Working Capital Eligibility & MPBF Turnover Pre-Audit
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid bank application delays or drawing power restrictions. Our preliminary audit reconciles GST turnover, reviews stock holding ratios, resolves debtor aging discrepancies, and formats CMA projections to bank credit committee standards.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "GST Turnover & MPBF Limit Sizing Validation",
                    "Monthly Stock Statement & Drawing Power Modeling",
                    "Debtor Aging & Current Ratio (CR ≥ 1.33x) Optimization",
                    "CGTMSE Collateral-Free CC Limit Structuring up to ₹5 Cr",
                    "Letter of Credit (LC) & Bank Guarantee (BG) Allocation",
                    "Multi-Bank Consortium & Lead Banking Coordination"
                  ].map((check, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{check}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={onCheckEligibility}
                    className="px-6 py-3 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Working Capital Audit</span>
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

              {/* Verified Metrics Card */}
              <div className="lg:col-span-5 bg-[#0B1528] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div className="pb-3 border-b border-slate-800/80">
                  <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#93C5FD]">
                    Advisory Turnaround & Scale
                  </h3>
                </div>

                <div className="divide-y divide-slate-800/80 my-auto">
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      3–5 <span className="text-[#60A5FA] font-bold text-lg sm:text-xl">Days</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      CMA Modeling & MPBF Sizing
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average turnaround for turnover reconciliation and bank-compliant CMA data formulation.
                    </p>
                  </div>

                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      ₹180<span className="text-slate-400 font-bold text-lg sm:text-xl">+ Cr</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Capital & Subsidies Facilitated
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Direct debt limits and government incentive benefits realized for client enterprises.
                    </p>
                  </div>

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

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span>Bank-Grade Financial Models</span>
                  <span>RBI & CGTMSE Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 Procedural Milestones */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F5FD] border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f018_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f018_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1769E8]/5 via-[#0D9488]/4 to-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
            <div className="flex justify-center mb-2.5">
              <AnimatedBadge 
                icon={Layers} 
                text="Liquidity Sizing Roadmap • 6 Procedural Milestones" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#10264F] tracking-tight leading-tight">
              Our 6-Step Working Capital <span className="text-[#1769E8]">Engagement</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-2xl mx-auto leading-relaxed">
              Complete procedural guidance from operational cycle audit through to CMA financial modeling and Drawing Power release.
            </p>
          </div>

          {/* Desktop SVG Radar Layout */}
          <div className="hidden lg:block relative w-full max-w-[1260px] h-[520px] mx-auto select-none">
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10" 
              viewBox="0 0 1260 520" 
              fill="none"
            >
              <defs>
                <linearGradient id="wc-hub-ring-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0D9488" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="wc-hub-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1769E8" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="630" cy="260" r="220" fill="url(#wc-hub-center-glow)" />
              <circle cx="630" cy="260" r="95" stroke="#1769E8" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
              <circle cx="630" cy="260" r="120" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
              <circle cx="630" cy="260" r="180" stroke="url(#wc-hub-ring-glow)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.45" />
              <circle cx="630" cy="260" r="260" stroke="#94A3B8" strokeWidth="1" strokeDasharray="5 7" opacity="0.3" />

              <path d="M 568,198 C 475,198 420,77 350,77" stroke="#1769E8" strokeWidth={hoveredMilestone === 0 ? "2.6" : "1.85"} strokeLinecap="round" strokeOpacity="0.9" />
              <circle cx="568" cy="198" r="4" fill="#1769E8" />
              <circle cx="350" cy="77" r="3.5" fill="#1769E8" />

              <path d="M 546,260 L 350,260" stroke="#0D9488" strokeWidth={hoveredMilestone === 1 ? "2.6" : "1.85"} strokeLinecap="round" strokeOpacity="0.9" />
              <circle cx="546" cy="260" r="4" fill="#0D9488" />
              <circle cx="350" cy="260" r="3.5" fill="#0D9488" />

              <path d="M 568,322 C 475,322 420,443 350,443" stroke="#8B5CF6" strokeWidth={hoveredMilestone === 2 ? "2.6" : "1.85"} strokeLinecap="round" strokeOpacity="0.9" />
              <circle cx="568" cy="322" r="4" fill="#8B5CF6" />
              <circle cx="350" cy="443" r="3.5" fill="#8B5CF6" />

              <path d="M 692,198 C 785,198 840,77 910,77" stroke="#10B981" strokeWidth={hoveredMilestone === 3 ? "2.6" : "1.85"} strokeLinecap="round" strokeOpacity="0.9" />
              <circle cx="692" cy="198" r="4" fill="#10B981" />
              <circle cx="910" cy="77" r="3.5" fill="#10B981" />

              <path d="M 714,260 L 910,260" stroke="#F97316" strokeWidth={hoveredMilestone === 4 ? "2.6" : "1.85"} strokeLinecap="round" strokeOpacity="0.9" />
              <circle cx="714" cy="260" r="4" fill="#F97316" />
              <circle cx="910" cy="260" r="3.5" fill="#F97316" />

              <path d="M 692,322 C 785,322 840,443 910,443" stroke="#F43F5E" strokeWidth={hoveredMilestone === 5 ? "2.6" : "1.85"} strokeLinecap="round" strokeOpacity="0.9" />
              <circle cx="692" cy="322" r="4" fill="#F43F5E" />
              <circle cx="910" cy="443" r="3.5" fill="#F43F5E" />
            </svg>

            {/* Central Master Hub */}
            <div className="absolute left-[546px] top-[176px] w-[168px] h-[168px] rounded-full bg-gradient-to-br from-white via-[#F8FAFD] to-[#EDF4FD] border-2 border-[#1769E8]/35 shadow-[0_12px_36px_rgba(23,105,232,0.18)] flex flex-col items-center justify-center text-center p-3 z-30 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E8] to-[#00A3FF] text-white flex items-center justify-center shadow-md mb-1.5">
                <Coins className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                Working Capital
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                CC • OD • LC • BG
              </div>
            </div>

            {/* Milestone Cards */}
            <div onMouseEnter={() => setHoveredMilestone(0)} onMouseLeave={() => setHoveredMilestone(null)} className="absolute left-[10px] top-[15px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm z-20 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#1769E8]">STAGE 1 • OPERATING AUDIT</span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1769E8]">Appraisal</span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">Operating Cycle & Stock Audit</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">Fast 24-hour evaluation of current debtor turnaround, inventory holding, and working capital gap.</p>
              </div>
              <div className="text-[10px] font-bold text-[#1769E8]">Deliverable: Working Capital Assessment</div>
            </div>

            <div onMouseEnter={() => setHoveredMilestone(1)} onMouseLeave={() => setHoveredMilestone(null)} className="absolute left-[10px] top-[198px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm z-20 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#0D9488]">STAGE 2 • MPBF & CMA DATA</span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-[#0D9488]">Financials</span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">RBI MPBF & 5-Year CMA Formulation</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">Comprehensive Credit Monitoring Arrangement (CMA) modeling, current ratio analysis, and turnover sizing.</p>
              </div>
              <div className="text-[10px] font-bold text-[#0D9488]">Deliverable: Bank-Grade CMA Dossier</div>
            </div>

            <div onMouseEnter={() => setHoveredMilestone(2)} onMouseLeave={() => setHoveredMilestone(null)} className="absolute left-[10px] top-[381px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm z-20 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#8B5CF6]">STAGE 3 • FACILITY SIZING</span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#8B5CF6]">Limits</span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">Fund & Non-Fund Limit Optimization</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">Allocating limits between Cash Credit (CC), Overdraft (OD), Letter of Credit (LC), and Bank Guarantee (BG).</p>
              </div>
              <div className="text-[10px] font-bold text-[#8B5CF6]">Deliverable: Multi-Facility Sizing Note</div>
            </div>

            <div onMouseEnter={() => setHoveredMilestone(3)} onMouseLeave={() => setHoveredMilestone(null)} className="absolute left-[910px] top-[15px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm z-20 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#10B981]">STAGE 4 • COLLATERAL & CGTMSE</span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981]">Security</span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">CGTMSE & Hypothecation Structuring</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">Primary current asset hypothecation documentation and collateral-free CGTMSE trust fee alignment.</p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981]">Deliverable: Security Structure Dossier</div>
            </div>

            <div onMouseEnter={() => setHoveredMilestone(4)} onMouseLeave={() => setHoveredMilestone(null)} className="absolute left-[910px] top-[198px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm z-20 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#F97316]">STAGE 5 • BANK SUBMISSION</span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316]">Documentation</span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">Credit Cell Application Submission</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">Compiling audited ITRs, GST 3B reconciliations, stock statements, and debtor aging reports.</p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316]">Deliverable: Sanction-Ready Application Dossier</div>
            </div>

            <div onMouseEnter={() => setHoveredMilestone(5)} onMouseLeave={() => setHoveredMilestone(null)} className="absolute left-[910px] top-[381px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm z-20 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#F43F5E]">STAGE 6 • SANCTION & DP</span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-[#F43F5E]">Disbursement</span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">Credit Sanction & Drawing Power Setup</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">Liaison with bank branch manager and credit processing cell for account opening and DP release.</p>
              </div>
              <div className="text-[10px] font-bold text-[#F43F5E]">Deliverable: End-to-End Sanction Support</div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block lg:hidden space-y-3 mt-4">
            {coreMilestones.map((m) => (
              <div key={m.number} className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-lg ${m.accentBg} text-white flex items-center justify-center font-bold text-xs`}>
                      {m.number}
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider ${m.textAccent}`}>{m.stageLabel}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.bgTint} ${m.textAccent}`}>{m.trackLabel}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{m.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-2.5">{m.desc}</p>
                <div className={`text-[11px] font-bold ${m.textAccent} pt-2 border-t border-slate-100`}>Deliverable: {m.deliverable}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 6 Institutional Financing Programs */}
      <section id="financing-programs" className="py-14 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Landmark} text="Corporate Working Capital Facilities" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Working Capital Loan Facilities & Specifications
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Select the appropriate revolving limit or non-fund facility to safeguard operational liquidity.
            </p>
          </div>

          <div className="space-y-12 divide-y divide-slate-200/80">
            {financingPrograms.map((prog, idx) => {
              const IconComp = prog.icon;
              return (
                <div key={prog.id} className={idx > 0 ? "pt-12" : ""}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="mb-2">
                          <AnimatedBadge 
                            text={prog.badge} 
                            className="!text-[10px] sm:!text-[10.5px] !px-2.5 !py-0.5 normal-case font-bold tracking-normal" 
                          />
                        </div>

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

                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 bg-slate-50/80 p-3.5 sm:p-4 rounded-2xl border border-slate-200/70">
                          {prog.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="space-y-0.5">
                              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">{spec.label}</span>
                              <span className="text-xs sm:text-sm font-bold text-slate-900 block whitespace-pre-line leading-tight">{spec.value}</span>
                              {spec.sub && <span className="text-[10px] text-slate-500 block leading-tight">{spec.sub}</span>}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-slate-500"><strong className="text-slate-800">Ideal For:</strong> {prog.bestFor}</div>
                        <button
                          type="button"
                          onClick={onCheckEligibility}
                          className="px-4 py-2 rounded-xl bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <span>Check Limit Eligibility</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 xl:col-span-4 bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block mb-3 uppercase tracking-wider">Key Operational Highlights</span>
                        <ul className="space-y-2.5">
                          {prog.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500">
                        <span>MPBF Turnover Assessment</span>
                        <span className="font-semibold text-[#0062FF]">₹10L – ₹25+ Cr</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Institutional Credibility */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Award} text="Advisory Track Record" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why MSME Borrowers Trust AB Consultancy
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Clear professional advisory with bank-grade standards, transparent fee structures, and proven pan-India execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Nayak & Tandon MPBF Modeling</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Rigorous financial modeling calculating maximum permissible bank credit under RBI norms to maximize approved limits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Zero Upfront Hidden Charges</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                100% transparent milestone-based advisory with preliminary working capital gap review provided free of charge.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Drawing Power Deficit Resolution</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Expert stock and debtor aging restructuring to eliminate DP deficits and prevent penalty interest charges.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Direct Bank CPC & Field Coordination</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Active liaison with Credit Processing Cells (CPCs), stock auditors, and branch managers for fast-track credit sanctions.
              </p>
            </div>
          </div>

          <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">15+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Years Experience</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Specialized CC/OD & trade finance</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#60A5FA]">7,100+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Clients Advised</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pan-India enterprise footprint</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹180+ Cr</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Subsidies Facilitated</div>
                <div className="text-[11px] text-slate-400 mt-0.5">State PSI, PMEGP & Central schemes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400">40+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Commercial Banks</div>
                <div className="text-[11px] text-slate-400 mt-0.5">National & private lending network</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Need a Higher Cash Credit or Overdraft Limit?</div>
                <div className="text-xs text-slate-300">Speak directly with our senior credit analyst for custom working capital enhancement.</div>
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
              Our 3-Stage Working Capital Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#0062FF] uppercase tracking-wider">Phase 1</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Turnover & Gap Consultation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss monthly inventory cycles, debtor aging, current bank limits, and projected credit requirements with our desk.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/70 text-[#0062FF] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#059669] uppercase tracking-wider">Phase 2</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">CMA Financial Modeling</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  RBI-compliant CMA data formulation, MPBF limit calculations, current ratio optimization, and CGTMSE guarantee mapping.
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
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Bank Sanction & DP Activation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Credit committee application filing, stock audit query resolution, sanction letter release, and account activation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100/70 text-purple-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Working Capital</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Point-to-Point Document Checklist */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={ClipboardList} text="Documentation Checklist" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Essential Documents Required for Working Capital Loans
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Keep these records organized for rapid bank file processing and credit sanction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0062FF] flex items-center justify-center mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">1. Promoter & Business KYC</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• PAN, Aadhaar & CIBIL of promoters</li>
                <li className="flex items-center gap-2">• Udyam MSME Registration Certificate</li>
                <li className="flex items-center gap-2">• GST Certificate & Partnership/MOA</li>
                <li className="flex items-center gap-2">• Shop Act / Industrial Factory License</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                <Coins className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">2. Operating Stock Statements</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Latest stock valuation statement</li>
                <li className="flex items-center gap-2">• Debtor aging schedule (&lt;90–120 days)</li>
                <li className="flex items-center gap-2">• Creditor list with payment tenures</li>
                <li className="flex items-center gap-2">• CA certified drawing power sheet</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-2.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">3. Financial Statements</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Last 3 years audited ITR & balance sheets</li>
                <li className="flex items-center gap-2">• 12 months primary bank statements</li>
                <li className="flex items-center gap-2">• GSTR-3B & GSTR-1 for last 12 months</li>
                <li className="flex items-center gap-2">• Sanction letters of existing bank limits</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#D97706] flex items-center justify-center mb-2.5">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">4. Bank CMA Dossier</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• RBI-Standard CMA sheets with ratios</li>
                <li className="flex items-center gap-2">• MPBF Nayak/Tandon limit computation</li>
                <li className="flex items-center gap-2">• Detailed project profile / Business notes</li>
                <li className="flex items-center gap-2">• Collateral valuation & title deed (if OD)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Direct-Answer FAQs */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <AnimatedBadge icon={HelpCircle} text="Direct Answers & Liquidity Insights" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Working Capital Loans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Authoritative answers regarding Cash Credit limits, Overdraft rules, Drawing Power (DP) formulas, and CGTMSE collateral waivers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-xs">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0062FF] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
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
                  Connect with AB Consultancy Working Capital Advisors
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Looking to enhance your Cash Credit limit, resolve Drawing Power deficits, or establish LC/BG facilities? Visit our office in Ahilyanagar or speak directly with our senior credit analysts.
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
                <h3 className="text-base font-bold text-white mb-1.5">Get Started Today</h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  Fast preliminary assessment to calculate your MPBF eligibility and optimal working capital structure.
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

      {/* 11. Disclaimer */}
      <section className="py-6 bg-[#F4F8FD] text-slate-500 text-xs">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-1.5 text-center text-[11px] leading-relaxed">
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Disclaimer & Regulatory Boundary</p>
            <p>
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All Cash Credit (CC), Overdraft (OD), and working capital limits are subject to the independent appraisal, sanction policies, and regulatory guidelines of the respective lending banks and financial institutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
