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

export default function ProjectFinancePage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Project Finance & Industrial Term Loans Ahilyanagar | AB Consultancy",
    description: "Expert project finance consultancy in Ahilyanagar & Maharashtra. Greenfield factory funding, multi-crore term debt (₹5 Cr–₹150+ Cr), TEV studies, bank-grade DPRs, consortium syndication & PSI subsidies.",
    canonical: "https://www.abconsultancy.net.in/services/project-finance",
    keywords: "Project Finance Ahilyanagar, Industrial Loan Consultant Ahmednagar, Greenfield Factory Finance Maharashtra, Bank DPR Preparation Nagar, TEV Study Consultant, Consortium Loan Syndication, Maharashtra PSI Subsidy Project Finance"
  });

  // JSON-LD Structured Data (Optimized for Google Rich Snippets & AI Answer Engines)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://www.abconsultancy.net.in/services/project-finance#service",
        "name": "AB Consultancy - Industrial Project Finance & TEV Study Advisory",
        "serviceType": "Project Finance Advisory, TEV Study, Bank DPR Preparation, Consortium Syndication",
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
        "description": "Comprehensive industrial project finance advisory for greenfield manufacturing setups, factory expansions, food parks, warehousing infrastructure, and multi-bank consortium syndication across 40+ scheduled banks."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abconsultancy.net.in/services/project-finance#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between general business loans and industrial project finance in Maharashtra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "General business loans are typically balance-sheet backed corporate facilities or working capital lines based on past audited track records. In contrast, Industrial Project Finance is structured long-term debt (typically ₹5 Crores to ₹150+ Crores) raised to fund major capital assets like greenfield factories, heavy plant machinery, and industrial infrastructure. It is evaluated primarily on future cash flow viability, Techno-Economic Viability (TEV), Debt Service Coverage Ratio (DSCR ≥ 1.5x), and project assets as primary security, accompanied by principal repayment moratoriums of 6 to 24 months during factory construction."
            }
          },
          {
            "@type": "Question",
            "name": "What is a Techno-Economic Viability (TEV) study and why is it mandatory for project loans above ₹5 Crores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Techno-Economic Viability (TEV) study is an exhaustive technical and financial appraisal mandated by scheduled commercial banks and RBI guidelines for large industrial credit proposals. Conducted by certified engineers and financial analysts, the TEV study verifies civil construction estimates, machinery specifications, production capacity, input-output ratios, break-even point (BEP), market absorption capacity, and financial internal rate of return (IRR). Banks rely on the TEV study to approve debt-equity ratios and sanction credit committee limits."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Maharashtra Package Scheme of Incentives (PSI 2019/2024) reduce project finance debt burden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the Maharashtra Package Scheme of Incentives (PSI 2019 / PSI 2024), industrial manufacturing units set up in developing talukas of Ahilyanagar, Marathwada, and Vidarbha (categorized as B, C, D, or D+ zones) qualify for massive capital incentives. These include 40% to 100% Industrial Promotion Subsidy (IPS) linked to SGST reimbursement, 5% interest subvention on term loans, power tariff subsidies (₹1 to ₹2 per unit), and 100% electricity duty exemption for 7 to 10 years. Integrating PSI incentives into project finance projections lowers effective debt servicing costs and accelerates loan retirement by 3 to 5 years."
            }
          },
          {
            "@type": "Question",
            "name": "What promoter contribution and debt-equity ratio do banks require for greenfield factory projects in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For greenfield industrial projects, commercial banks and consortiums generally require a debt-to-equity ratio ranging between 70:30 and 75:25. The promoter must bring in 25% to 30% of total project cost (land, civil works, plant, contingencies, and margin money for working capital) as equity or interest-free unsecured loans. In priority government schemes like PMEGP, CMEGP, or AIF, promoter contribution can be structured as low as 10% to 15% when combined with government capital subsidies."
            }
          },
          {
            "@type": "Question",
            "name": "How does AB Consultancy assist industrialists in Ahilyanagar and Maharashtra in securing project finance sanctions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AB Consultancy is headquartered at Office No. 106, Baiju Height, Ahilyanagar, Maharashtra (Phone: +91 91308 94308). With 15+ years of specialized experience and 7,100+ clients advised across India, our senior project finance analysts provide complete lifecycle assistance: from civil costing validation and bank-grade DPR compilation to 10-year CMA financial modeling, consortium bank syndication, and State/Central subsidy integration across 40+ leading public and private banks."
            }
          }
        ]
      }
    ]
  };

  // 6 Point-to-Point Evaluation Benchmarks
  const evaluationBenchmarks = [
    {
      title: "1. Techno-Economic Viability (TEV) & Layout",
      point: "Plant layout, civil engineering BOQ, certified machinery quotations, and rated capacity.",
      impact: "Evaluates construction timeline, technical execution risk, and operational lifecycle.",
      badge: "Technical Feasibility",
      icon: Factory
    },
    {
      title: "2. DSCR & Financial Sensitivity Modeling",
      point: "Projected annual EBITDA, net cash flows, and 10-year debt service capacity.",
      impact: "Target average DSCR ≥ 1.50x guarantees comfortable interest and principal repayment.",
      badge: "DSCR & Cash Flows",
      icon: TrendingUp
    },
    {
      title: "3. Promoter Equity & Tangible Net Worth",
      point: "Promoter capital commitment (25% to 30% margin) and audited CA net worth verification.",
      impact: "Validates promoter skin in the game, credit standing, and long-term commitment.",
      badge: "Equity & Net Worth",
      icon: Coins
    },
    {
      title: "4. Statutory Consents & Industrial Land Title",
      point: "MIDC allotment or NA non-agriculture land clear title, MPCB CTE, and power sanction.",
      impact: "Eliminates legal, zoning, and regulatory stoppage risks before disbursement.",
      badge: "Statutory Clearances",
      icon: Landmark
    },
    {
      title: "5. Consortium Syndication & Multiple Banking",
      point: "Multi-bank participation structure, lead bank appraisal, and shared security documentation.",
      impact: "Enables large-ticket funding beyond individual bank single-borrower exposure limits.",
      badge: "Lending Architecture",
      icon: Scale
    },
    {
      title: "6. Capital Subsidy Synergy & Incentives",
      point: "Alignment with Maharashtra PSI 2019/2024, MoFPI, PLI, and electricity tariff rebates.",
      impact: "Substantially lowers borrowing costs and accelerates debt repayment by 2 to 4 years.",
      badge: "Subsidy Synergy",
      icon: Award
    }
  ];

  // 6 Procedural Milestones (Interactive Infographic Roadmap)
  const coreMilestones = [
    {
      number: 1,
      stageLabel: "STAGE 1 • SITE & CAPEX REVIEW",
      trackLabel: "Appraisal",
      title: "Site & Capex Feasibility Review",
      desc: "Fast technical scoping of industrial plot, civil layout, proposed machinery, and initial capex sizing.",
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
      stageLabel: "STAGE 2 • TEV & DPR FORMULATION",
      trackLabel: "Feasibility",
      title: "TEV Study & Bank-Grade DPR",
      desc: "Chartered engineering assessment, process flowcharts, capacity validation, and detailed project report.",
      tag: "Bank-Grade TEV & DPR",
      deliverable: "Bank-Grade TEV & DPR",
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
      title: "10-Year CMA & Financial Engineering",
      desc: "Projected P&L, balance sheets, cash flows, MPBF working capital, DSCR, IRR, and sensitivity analysis.",
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
      stageLabel: "STAGE 4 • SUBSIDY INTEGRATION",
      trackLabel: "Incentives",
      title: "Industrial Subsidy & Policy Mapping",
      desc: "Synchronizing project capex with Maharashtra PSI Package Scheme, MoFPI grants, and interest subvention.",
      tag: "Subsidy & Grant Structuring",
      deliverable: "Subsidy & Grant Structuring",
      accentColor: "#10B981",
      accentBg: "bg-[#10B981]",
      bgTint: "bg-emerald-50",
      textAccent: "text-[#10B981]",
      icon: Zap
    },
    {
      number: 5,
      stageLabel: "STAGE 5 • CONSORTIUM DOSSIER",
      trackLabel: "Documentation",
      title: "Consortium Credit Dossier Compilation",
      desc: "Compiling audited records, titles, quotations, engineering vetting, and lead bank application papers.",
      tag: "Sanction-Ready Project Dossier",
      deliverable: "Sanction-Ready Project Dossier",
      accentColor: "#F97316",
      accentBg: "bg-[#F97316]",
      bgTint: "bg-orange-50",
      textAccent: "text-[#F97316]",
      icon: FileCheck
    },
    {
      number: 6,
      stageLabel: "STAGE 6 • SANCTION & LIAISON",
      trackLabel: "Disbursement",
      title: "Lead Bank Liaison & Sanction Approval",
      desc: "Coordinating joint bank site inspections, resolving credit committee queries, and securing debt sanction.",
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
      id: "greenfield-setup",
      title: "1. Greenfield Manufacturing & Industrial Setup",
      category: "New Plant Setup",
      summary: "Comprehensive term debt funding for first-time industrialists and corporate groups building new factories on MIDC or private NA land.",
      specs: [
        { label: "Loan Quantum", value: "₹5 Crores to\n₹100+ Crores", sub: null },
        { label: "Tenure", value: "7 to 12 Years", sub: "(Moratorium up to 24 Mos)" },
        { label: "Promoter Share", value: "25% to 30%", sub: "Margin Money" },
        { label: "Security", value: "Primary Asset", sub: "Factory Land & Machinery" }
      ],
      points: [
        "Finances civil factory construction, PEB sheds, electrical transformers, and utilities",
        "Includes indigenous machinery purchase and imported plant technology letters of credit",
        "Fully aligned with Maharashtra Package Scheme of Incentives (PSI 2019/2024)"
      ],
      bestFor: "Automotive, Engineering, Heavy Fabrication, Plastics, Chemical Units",
      icon: Factory,
      badge: "Greenfield Plants"
    },
    {
      id: "brownfield-expansion",
      title: "2. Brownfield Expansion & Modernization",
      category: "Capacity Modernization",
      summary: "Term loans structured for operational factories adding production lines, modernizing CNC automation, or doubling manufacturing capacity.",
      specs: [
        { label: "Loan Quantum", value: "₹3 Crores to\n₹75 Crores", sub: null },
        { label: "Tenure", value: "5 to 8 Years", sub: "(Moratorium up to 12 Mos)" },
        { label: "Processing", value: "Fast-Track", sub: "On operating track record" },
        { label: "Security", value: "Pari-Passu", sub: "Existing + new capex assets" }
      ],
      points: [
        "Rapid processing leveraging existing operational track record and banking relationships",
        "Finances robotic automation, energy-efficient machinery, and pollution control equipment",
        "Eligible for state expansion incentives and accelerated depreciation tax benefits"
      ],
      bestFor: "Established Manufacturers, Export Units, Precision Machining Facilities",
      icon: Cpu,
      badge: "Plant Modernization"
    },
    {
      id: "agro-food-processing",
      title: "3. Food Processing, Cold Chain & Agro-Infrastructure",
      category: "Agro-Industrial Priority",
      summary: "Specialized project funding for food processing plants, cold storages, grain silos, and agro-infrastructure clusters across Maharashtra.",
      specs: [
        { label: "Loan Quantum", value: "₹2 Crores to\n₹50 Crores", sub: null },
        { label: "Interest Subsidy", value: "3% Subvention", sub: "(Under AIF Scheme)" },
        { label: "Capital Grant", value: "Up to 35%–50%", sub: "MoFPI / PMFME / AIF" },
        { label: "Tenure", value: "7 to 10 Years", sub: "(Moratorium up to 24 Mos)" }
      ],
      points: [
        "Synergized with Agriculture Infrastructure Fund (AIF) for 3% interest relief up to ₹2 Cr",
        "Eligible for Ministry of Food Processing Industries (MoFPI) capital investment grants",
        "Comprehensive DPR support detailing cold chain logistics, blast freezers, and packhouses"
      ],
      bestFor: "Dal Mills, Cold Storage, Dairy Processing, Fruit Ripening, Food Packaging",
      icon: Store,
      badge: "Agro & Food Processing"
    },
    {
      id: "warehousing-logistics",
      title: "4. Industrial Warehousing & Logistics Parks",
      category: "Infrastructure Asset Debt",
      summary: "Long-tenure infrastructure project finance for developing Grade-A warehousing, multi-tenant industrial logistics parks, and PEB godowns.",
      specs: [
        { label: "Loan Quantum", value: "₹5 Crores to\n₹80 Crores", sub: null },
        { label: "Tenure", value: "8 to 15 Years", sub: "(Linked to lease contracts)" },
        { label: "Structure", value: "Construction Debt", sub: "Convertible to LRD" },
        { label: "Security", value: "Land & Building", sub: "Mortgage of warehouse" }
      ],
      points: [
        "Finances land development, industrial flooring, automated docking, and PEB roofing",
        "Structured with ballooning repayment or conversion to Lease Rental Discounting (LRD)",
        "Assisted by feasibility studies evaluating location connectivity and tenant rental yields"
      ],
      bestFor: "Logistics Operators, Industrial Park Developers, Supply Chain Hubs",
      icon: Warehouse,
      badge: "Warehousing & Logistics"
    },
    {
      id: "consortium-syndication",
      title: "5. Consortium Banking & Multi-Bank Loan Syndication",
      category: "Large-Ticket Syndication",
      summary: "Syndicated loan structuring for mega manufacturing plants and corporate projects exceeding individual bank single-borrower exposure limits.",
      specs: [
        { label: "Loan Quantum", value: "₹50 Crores to\n₹200+ Crores", sub: null },
        { label: "Structure", value: "Lead + Member", sub: "Consortium Agreement" },
        { label: "Monitoring", value: "Escrow / TRA", sub: "Trust & Retention Account" },
        { label: "Appraisal", value: "Joint TEV", sub: "Chartered engineer vetted" }
      ],
      points: [
        "Coordinates with lead public sector and private commercial banks for joint syndication",
        "Structures uniform loan covenants, security documentation, and pari-passu charge creation",
        "Includes financial closure monitoring, escrow mechanisms, and phased disbursements"
      ],
      bestFor: "Mid-Corporate Groups, Mega Industrial Parks, Steel, Cement, Textile Mills",
      icon: Building2,
      badge: "Consortium Syndication"
    },
    {
      id: "subsidy-linked-finance",
      title: "6. Incentive-Linked Industrial Project Finance",
      category: "Incentive-Leveraged Debt",
      summary: "Strategic project financing structured to unlock maximum non-repayable capital subsidies under Maharashtra PSI and Central Industrial Schemes.",
      specs: [
        { label: "Loan Quantum", value: "₹5 Crores to\n₹150 Crores", sub: null },
        { label: "State Subsidy", value: "Up to 100% FCI", sub: "Maharashtra PSI Scheme" },
        { label: "SGST Refund", value: "100% Eligible", sub: "Over 7 to 10 Years" },
        { label: "Power Rebate", value: "₹1 – ₹2 / Unit", sub: "For 3 to 5 Years" }
      ],
      points: [
        "Structures eligible capital expenditure (civil + plant) to maximize state subsidy approval",
        "State incentives directly offset debt servicing and accelerate bank loan retirement",
        "End-to-end guidance from Eligibility Certificate (EC) to annual subsidy disbursement"
      ],
      bestFor: "MSME & Large Category Industrial Units across Ahilyanagar & Maharashtra",
      icon: Award,
      badge: "Incentive-Linked Finance"
    }
  ];

  // 5 High-Authority Local SEO & Instant-Index FAQs (AEO & GEO Standard)
  const faqs = [
    {
      q: "What is the difference between general business loans and industrial project finance in Maharashtra?",
      a: "General business loans are typically balance-sheet backed corporate facilities or working capital lines based on past audited track records. In contrast, Industrial Project Finance is structured long-term debt (typically ₹5 Crores to ₹150+ Crores) raised to fund major capital assets like greenfield factories, heavy plant machinery, and industrial infrastructure. It is evaluated primarily on future cash flow viability, Techno-Economic Viability (TEV), Debt Service Coverage Ratio (DSCR ≥ 1.5x), and project assets as primary security, accompanied by principal repayment moratoriums of 6 to 24 months during factory construction."
    },
    {
      q: "What is a Techno-Economic Viability (TEV) study and why is it mandatory for project loans above ₹5 Crores?",
      a: "A Techno-Economic Viability (TEV) study is an exhaustive technical and financial appraisal mandated by scheduled commercial banks and RBI guidelines for large industrial credit proposals. Conducted by certified engineers and financial analysts, the TEV study verifies civil construction estimates, machinery specifications, production capacity, input-output ratios, break-even point (BEP), market absorption capacity, and financial internal rate of return (IRR). Banks rely on the TEV study to approve debt-equity ratios and sanction credit committee limits."
    },
    {
      q: "How does the Maharashtra Package Scheme of Incentives (PSI 2019/2024) reduce project finance debt burden?",
      a: "Under the Maharashtra Package Scheme of Incentives (PSI 2019 / PSI 2024), industrial manufacturing units set up in developing talukas of Ahilyanagar, Marathwada, and Vidarbha (categorized as B, C, D, or D+ zones) qualify for massive capital incentives. These include 40% to 100% Industrial Promotion Subsidy (IPS) linked to SGST reimbursement, 5% interest subvention on term loans, power tariff subsidies (₹1 to ₹2 per unit), and 100% electricity duty exemption for 7 to 10 years. Integrating PSI incentives into project finance projections lowers effective debt servicing costs and accelerates loan retirement by 3 to 5 years."
    },
    {
      q: "What promoter contribution and debt-equity ratio do banks require for greenfield factory projects in India?",
      a: "For greenfield industrial projects, commercial banks and consortiums generally require a debt-to-equity ratio ranging between 70:30 and 75:25. The promoter must bring in 25% to 30% of total project cost (land, civil works, plant, contingencies, and margin money for working capital) as equity or interest-free unsecured loans. In priority government schemes like PMEGP, CMEGP, or AIF, promoter contribution can be structured as low as 10% to 15% when combined with government capital subsidies."
    },
    {
      q: "How does AB Consultancy assist industrialists in Ahilyanagar and Maharashtra in securing project finance sanctions?",
      a: "AB Consultancy is headquartered at Office No. 106, Baiju Height, Ahilyanagar, Maharashtra (Phone: +91 91308 94308). With 15+ years of specialized experience and 7,100+ clients advised across India, our senior project finance analysts provide complete lifecycle assistance: from civil costing validation and bank-grade DPR compilation to 10-year CMA financial modeling, consortium bank syndication, and State/Central subsidy integration across 40+ leading public and private banks."
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
            <span className="text-[#0062FF] font-semibold">Project Finance</span>
          </div>

          <div className="max-w-4xl">
            {/* Signature Eyebrow Pill Tag with Smooth Reveal & Character Animation */}
            <AnimatedBadge 
              icon={Factory} 
              text="Industrial Project Capital Desk • Greenfield & Brownfield Infrastructure" 
              isHero={true} 
            />

            {/* Main SEO/AEO Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Industrial Project Finance & Bank DPR Advisory
            </h1>

            {/* Point-to-Point Value Proposition */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-[#0062FF] leading-snug">
              Secure multi-crore term debt for factory setups, machinery acquisition & infrastructure with bank-grade TEV studies, CMA modeling & consortium syndication.
            </p>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              AB Consultancy provides end-to-end industrial project finance advisory for industrialists, manufacturers, and corporate promoters in Ahilyanagar, across Maharashtra, and nationwide. We structure viable debt-equity architecture across 40+ scheduled commercial banks and national financial institutions.
            </p>

            {/* Point-to-Point Quick Facts Bar (AEO Snippet-Targetable) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl">
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Project Quantum</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">₹5 Cr – ₹150+ Cr</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Debt-Equity Sizing</span>
                <span className="text-xs sm:text-sm font-black text-[#0062FF] block mt-0.5">70:30 to 75:25</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">TEV & DPR Ready</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">5 to 7 Days</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Banking Network</span>
                <span className="text-xs sm:text-sm font-black text-emerald-600 block mt-0.5">40+ Scheduled Banks</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,98,255,0.3)] hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check Project Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0062FF]" />
                <span>Book Feasibility Consultation</span>
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
              <span className="text-[#0062FF] font-bold">Key Project Domains:</span>
              <span>Greenfield Factories</span>
              <span>•</span>
              <span>Brownfield Expansions</span>
              <span>•</span>
              <span>TEV Studies</span>
              <span>•</span>
              <span>Consortium Syndication</span>
              <span>•</span>
              <span>Maharashtra PSI Subsidies</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Bank Evaluation Framework (AEO Direct Answer Box + Benchmarks) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-10">
            <AnimatedBadge icon={Scale} text="Credit Committee Appraisal Criteria" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bank Evaluation Framework for Project Financing
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Understand how nationalized, private commercial banks, and consortium cells assess multi-crore term debt proposals.
            </p>
          </div>

          {/* AEO Direct Answer Callout Box */}
          <div className="bg-[#F8FAFD] border-l-4 border-[#0062FF] p-5 sm:p-6 rounded-r-2xl mb-10 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
              What is Industrial Project Finance and How Do Banking Credit Committees Evaluate Multi-Crore Proposals?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Industrial Project Finance</strong> is structured long-term debt (₹5 Crores to ₹150+ Crores) raised by manufacturing companies, agro-processing units, and industrial promoters to finance capital-intensive fixed assets such as industrial factory land development, PEB shed civil works, transformers, and automated plant machinery. Unlike unsecured business loans, project financing is evaluated based on <strong>Techno-Economic Viability (TEV)</strong>, <strong>Debt Service Coverage Ratio (DSCR minimum 1.50x)</strong>, <strong>Internal Rate of Return (IRR)</strong>, promoter equity stake (25% to 30%), and primary hypothecation of project assets, accompanied by principal moratorium periods of 6 to 24 months during construction.
            </p>
          </div>

          {/* 6 Point-to-Point Evaluation Benchmarks */}
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

      {/* 3. Structured Financing Pre-Audit (Point-to-Point Checklist) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedBadge icon={ShieldCheck} text="Pre-Funding Feasibility Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Industrial Project Finance Feasibility & Bank Eligibility Assessment
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid costly application delays and credit committee rejection. Our preliminary pre-funding audit examines technical costing, optimizes your debt-equity structure, validates vendor quotations, and prepares your file for bank consortium approval.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Greenfield & Brownfield Project Costing Validation",
                    "TEV Study & Civil/Machinery BOQ Verification",
                    "10-Year Financial Modeling (P&L, Balance Sheet, Cash Flow)",
                    "DSCR, IRR, BEP & Sensitivity Stress Testing",
                    "Consortium Banking & Multi-Lender Syndication Structuring",
                    "Maharashtra PSI, MoFPI & Central Capital Subsidy Synchronization"
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
                    <span>Request Pre-Funding Audit</span>
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
                      Preliminary TEV & DPR Sizing
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average preliminary assessment and DPR debt structure modeling turnaround from complete file submission.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      ₹180<span className="text-slate-400 font-bold text-lg sm:text-xl">+ Cr</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Capital Subsidies Facilitated
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Direct state and central industrial investment incentives and grants realized for client enterprises.
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
                  <span>Bank-Grade Financial Models</span>
                  <span>RBI & Consortium Aligned</span>
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
                text="Project Financing Roadmap • 6 Procedural Milestones" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#10264F] tracking-tight leading-tight">
              Our 6-Step Project Finance <span className="text-[#1769E8]">Engagement</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-2xl mx-auto leading-relaxed">
              Complete procedural guidance across bank credit committee appraisals, TEV preparation, and debt sanctions through an interconnected advisory roadmap.
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
                <linearGradient id="project-hub-ring-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0D9488" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="project-hub-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1769E8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft Radial Background Circle behind Hub */}
              <circle cx="630" cy="260" r="220" fill="url(#project-hub-center-glow)" />

              {/* Concentric Radar Guide Rings centered at Hub Center (630, 260) */}
              <circle cx="630" cy="260" r="95" stroke="#1769E8" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
              <circle cx="630" cy="260" r="120" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
              <circle cx="630" cy="260" r="180" stroke="url(#project-hub-ring-glow)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.45" />
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
              <circle cx="350" cy="77" r={hoveredMilestone === 0 ? "4.5" : "3.5"} fill="#1769E8" className="transition-all duration-300" />

              {/* Line 2: Teal (Hub: 546, 260 -> Card 2: 350, 260) */}
              <path 
                d="M 546,260 L 350,260" 
                stroke="#0D9488" 
                strokeWidth={hoveredMilestone === 1 ? "2.6" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredMilestone === 1 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="546" cy="260" r={hoveredMilestone === 1 ? "5" : "4"} fill="#0D9488" className="transition-all duration-300" />
              <circle cx="350" cy="260" r={hoveredMilestone === 1 ? "4.5" : "3.5"} fill="#0D9488" className="transition-all duration-300" />

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
              <circle cx="350" cy="443" r={hoveredMilestone === 2 ? "4.5" : "3.5"} fill="#8B5CF6" className="transition-all duration-300" />

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
                d="M 714,260 L 910,260" 
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
              {/* Spinning subtle outer ring decoration */}
              <div className="absolute inset-[-6px] rounded-full border border-dashed border-[#1769E8]/30 pointer-events-none animate-[spin_40s_linear_infinite]" />
              
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E8] to-[#00A3FF] text-white flex items-center justify-center shadow-md mb-1.5 group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                Project Finance
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                ₹5 Cr – ₹150+ Cr
              </div>
            </div>

            {/* Milestone Cards Layer (z-20) */}
            {/* CARD 1 (Top Left: x=10, y=15, w=340, h=124, right-center = 350, 77) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(0)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[10px] top-[15px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 0 
                  ? 'border-[#1769E8] shadow-[0_10px_28px_rgba(23,105,232,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#1769E8]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#1769E8]">
                  STAGE 1 • SITE & CAPEX REVIEW
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1769E8] border border-blue-100">
                  Appraisal
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Site & Capex Feasibility Review
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Fast technical scoping of industrial plot, civil layout, proposed machinery, and initial capex sizing.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#1769E8] flex items-center gap-1">
                <span>Deliverable: Preliminary Feasibility Note</span>
              </div>
            </div>

            {/* CARD 2 (Mid Left: x=10, y=198, w=340, h=124, right-center = 350, 260) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(1)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[10px] top-[198px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 1 
                  ? 'border-[#0D9488] shadow-[0_10px_28px_rgba(13,148,136,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#0D9488]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#0D9488]">
                  STAGE 2 • TEV & DPR FORMULATION
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-[#0D9488] border border-teal-100">
                  Feasibility
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  TEV Study & Bank-Grade DPR
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Chartered engineering assessment, process flowcharts, capacity validation, and detailed project report.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0D9488] flex items-center gap-1">
                <span>Deliverable: Bank-Grade TEV & DPR</span>
              </div>
            </div>

            {/* CARD 3 (Bottom Left: x=10, y=381, w=340, h=124, right-center = 350, 443) */}
            <div 
              onMouseEnter={() => setHoveredMilestone(2)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className={`absolute left-[10px] top-[381px] w-[340px] h-[124px] rounded-2xl p-3.5 bg-white border transition-all duration-300 z-20 flex flex-col justify-between ${
                hoveredMilestone === 2 
                  ? 'border-[#8B5CF6] shadow-[0_10px_28px_rgba(139,92,246,0.18)] scale-[1.02]' 
                  : 'border-slate-200/90 shadow-sm hover:border-[#8B5CF6]/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-[#8B5CF6]">
                  STAGE 3 • FINANCIAL MODELING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#8B5CF6] border border-purple-100">
                  CMA & Ratios
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  10-Year CMA & Financial Engineering
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Projected P&L, balance sheets, cash flows, MPBF working capital, DSCR, IRR, and sensitivity analysis.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#8B5CF6] flex items-center gap-1">
                <span>Deliverable: RBI-Standard CMA Sheets</span>
              </div>
            </div>

            {/* CARD 4 (Top Right: x=910, y=15, w=340, h=124, left-center = 910, 77) */}
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
                  STAGE 4 • SUBSIDY INTEGRATION
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-100">
                  Incentives
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Industrial Subsidy & Policy Mapping
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Synchronizing project capex with Maharashtra PSI Package Scheme, MoFPI grants, and interest subvention.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981] flex items-center gap-1">
                <span>Deliverable: Subsidy & Grant Structuring</span>
              </div>
            </div>

            {/* CARD 5 (Mid Right: x=910, y=198, w=340, h=124, left-center = 910, 260) */}
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
                  STAGE 5 • CONSORTIUM DOSSIER
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100">
                  Documentation
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Consortium Credit Dossier Compilation
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Compiling audited records, titles, quotations, engineering vetting, and lead bank application papers.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316] flex items-center gap-1">
                <span>Deliverable: Sanction-Ready Project Dossier</span>
              </div>
            </div>

            {/* CARD 6 (Bottom Right: x=910, y=381, w=340, h=124, left-center = 910, 443) */}
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
                  STAGE 6 • SANCTION & LIAISON
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-[#F43F5E] border border-rose-100">
                  Disbursement
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Lead Bank Liaison & Sanction Approval
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Coordinating joint bank site inspections, resolving credit committee queries, and securing debt sanction.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F43F5E] flex items-center gap-1">
                <span>Deliverable: End-to-End Sanction Support</span>
              </div>
            </div>

          </div>

          {/* MOBILE / TABLET VIEW: Sequential Connected Vertical Stack */}
          <div className="block lg:hidden space-y-3 mt-4">
            {coreMilestones.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div 
                  key={m.number}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${m.accentBg} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                        {m.number}
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${m.textAccent}`}>
                        {m.stageLabel}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.bgTint} ${m.textAccent}`}>
                      {m.trackLabel}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                    {m.desc}
                  </p>

                  <div className={`text-[11px] font-bold ${m.textAccent} flex items-center gap-1 pt-2 border-t border-slate-100`}>
                    <span>Deliverable:</span>
                    <span>{m.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 6 Institutional Financing Programs (High Density, Point-to-Point Specs) */}
      <section id="financing-programs" className="py-14 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Landmark} text="Institutional Project Debt Facilities" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industrial Project Financing Options & Specifications
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Select the appropriate project debt architecture for your greenfield setup, capacity expansion, or industrial infrastructure project.
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
                          Key Technical Highlights
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

                      <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Bank-Ready DPR Support</span>
                        <span className="font-semibold text-[#0062FF]">₹5 Cr – ₹150+ Cr</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Institutional Credibility & Verified Track Record */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <AnimatedBadge icon={Award} text="Advisory Track Record" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Industrialists & Promoters Trust AB Consultancy
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Clear professional advisory with bank-grade standards, transparent fee structures, and proven pan-India project execution.
            </p>
          </div>

          {/* 4 Point-to-Point Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Chartered Engineers & Credit Analysts</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                In-house engineering vetting, plant layout validation, and CMA financial models compliant with strict banking credit committee standards.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Zero Upfront Hidden Charges</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                100% transparent milestone-based advisory with preliminary feasibility review provided free of charge.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Multi-Crore Subsidy Synchronization</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Strategic alignment with Maharashtra PSI Package Scheme of Incentives, MoFPI, PLI, and power tariff rebates to lower effective borrowing costs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Consortium & Zonal Bank Liaison</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Active coordination with Credit Processing Cells (CPCs), lead consortium managers, and field inspection teams to swiftly resolve technical queries.
              </p>
            </div>
          </div>

          {/* 4 Track Record Stats */}
          <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">15+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Years Experience</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Specialized project debt & TEV consulting</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#60A5FA]">7,100+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Clients Advised</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pan-India industrial footprint</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹180+ Cr</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Subsidies Facilitated</div>
                <div className="text-[11px] text-slate-400 mt-0.5">State PSI, MoFPI & Central schemes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400">40+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Commercial Banks</div>
                <div className="text-[11px] text-slate-400 mt-0.5">National & consortium lending network</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Planning a Greenfield Factory or Expansion?</div>
                <div className="text-xs text-slate-300">Speak directly with our senior project finance analyst for custom debt structuring.</div>
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
              Our 3-Stage Project Finance Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#0062FF] uppercase tracking-wider">Phase 1</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Project Scoping & Capex Sizing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss industrial plot size, machinery vendor quotations, promoter equity margin, and total debt requirements with our senior advisory desk.
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
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">TEV Study & Financial Modeling</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chartered engineering layout vetting, 10-year CMA financial projections, DSCR/IRR optimization, and Maharashtra PSI subsidy synchronization.
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
                  Complete consortium bank dossier compilation, credit processing cell liaison, query resolution, and sanction letter facilitation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100/70 text-purple-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Project Assistance</span>
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
              Essential Documents Required for Project Finance
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Keep these records organized for seamless bank credit cell appraisal and TEV vetting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0062FF] flex items-center justify-center mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">1. Promoter & Corporate KYC</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• PAN, Aadhaar & CIBIL of all directors</li>
                <li className="flex items-center gap-2">• Certificate of Incorporation, MOA & AOA</li>
                <li className="flex items-center gap-2">• CA certified Net Worth statements</li>
                <li className="flex items-center gap-2">• Last 3 years personal & company ITRs</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">2. Land & Statutory Clearances</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• MIDC Allotment Letter & Possession receipt</li>
                <li className="flex items-center gap-2">• Registered NA title deed (for private land)</li>
                <li className="flex items-center gap-2">• MPCB Consent to Establish (CTE)</li>
                <li className="flex items-center gap-2">• Factory Inspector approved civil layout</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-2.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">3. Civil & Machinery BOQ</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Architect certified civil cost estimate</li>
                <li className="flex items-center gap-2">• Detailed vendor plant machinery quotes</li>
                <li className="flex items-center gap-2">• Chartered Engineer technical valuation</li>
                <li className="flex items-center gap-2">• MSEDCL electricity & water load sanctions</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#D97706] flex items-center justify-center mb-2.5">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">4. Project Financials & TEV</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Bank-Grade Detailed Project Report (DPR)</li>
                <li className="flex items-center gap-2">• Techno-Economic Viability (TEV) study</li>
                <li className="flex items-center gap-2">• 10-Year CMA projections with DSCR & IRR</li>
                <li className="flex items-center gap-2">• 12 months primary bank account statements</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Direct-Answer FAQs (AEO & GEO Gold Standard) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <AnimatedBadge icon={HelpCircle} text="Direct Answers & Industrial Insights" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Project Finance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Authoritative answers regarding Techno-Economic Viability (TEV), consortium bank syndication, debt-equity sizing, and Maharashtra PSI subsidy integration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0062FF] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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
                  Connect with AB Consultancy Project Finance Analysts
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Planning a greenfield manufacturing plant, plant modernization, or multi-crore infrastructure project? Visit our office in Ahilyanagar or connect with our senior project finance specialists for customized debt structuring.
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
                  Fast preliminary assessment to understand your project debt eligibility, capex feasibility, and optimal subsidy alignment.
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
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All project term loans, consortium sanctions, and credit approvals are subject to the independent techno-economic appraisal, credit committee policies, and regulatory guidelines of the respective lending banks and financial institutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
