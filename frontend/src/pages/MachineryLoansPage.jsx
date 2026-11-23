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

export default function MachineryLoansPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Machinery Loans & Equipment Finance Ahilyanagar | AB Consultancy",
    description: "Apply for machinery loans in Ahilyanagar & Maharashtra. Up to 85%–90% plant equipment finance, CNC/VMC machines, CGTMSE collateral-free loans up to ₹5 Cr, bank-grade DPRs & subsidies.",
    canonical: "https://www.abconsultancy.net.in/services/machinery-loans",
    keywords: "Machinery Loans Ahilyanagar, Equipment Finance Consultant Ahmednagar, CNC Machine Loan Maharashtra, Plant Machinery Finance Nagar, CGTMSE Machinery Loan, Factory Equipment DPR Preparation, Maharashtra PSI Machinery Subsidy"
  });

  // JSON-LD Structured Data (Optimized for Google Rich Snippets & AI Answer Engines)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://www.abconsultancy.net.in/services/machinery-loans#service",
        "name": "AB Consultancy - Machinery Loan & Industrial Equipment Financing Advisory",
        "serviceType": "Machinery Loan Advisory, Equipment Term Finance, Bank DPR Preparation, CGTMSE Collateral-Free Loans",
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
        "description": "Comprehensive industrial machinery and equipment loan consultancy for CNC machines, food processing plants, plastic injection molding, and printing presses with up to 85% financing and CGTMSE coverage across 40+ scheduled banks."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abconsultancy.net.in/services/machinery-loans#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What percentage of machinery cost do banks fund, and what is the margin money requirement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commercial banks and NBFCs typically fund 75% to 85% of the total machinery cost (including ex-factory price, GST, freight, transit insurance, and installation charges). For established MSME units with strong cash flows or under special vendor-tied programs, financing can extend up to 90%. The promoter is required to contribute the remaining 10% to 25% as margin money. In government subsidy schemes such as PMEGP, CMEGP, or Stand-Up India, promoter margin contribution can be as low as 5% to 15%."
            }
          },
          {
            "@type": "Question",
            "name": "Can MSME manufacturers get collateral-free machinery loans without mortgaging property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under the Government of India's CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) scheme, MSME manufacturers can secure machinery term loans up to ₹5 Crores completely collateral-free. The purchased plant and machinery serves as the primary security via hypothecation to the lending bank, without requiring residential property mortgage or third-party guarantors. AB Consultancy structures your machinery DPR and coordinates CGTMSE trust fee coverage across nationalized and private banking partners."
            }
          },
          {
            "@type": "Question",
            "name": "Do banks finance imported or second-hand/refurbished plant machinery in Maharashtra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For imported machinery, banks provide term loan facilities backed by Foreign Letters of Credit (FLC) and EPCG concessional duty benefits. For second-hand or refurbished equipment, scheduled commercial banks and SIDBI finance purchases subject to a Chartered Engineer's inspection report certifying a minimum residual economic life of 5 to 10 years, valuation accuracy, and production efficiency. Margin money for second-hand machines is typically 25% to 35%."
            }
          },
          {
            "@type": "Question",
            "name": "What capital subsidies and interest rebates are available on machinery loans in Maharashtra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the Maharashtra Package Scheme of Incentives (PSI 2019 / 2024), new machinery investments qualify for 40% to 100% Industrial Promotion Subsidy (IPS) via SGST reimbursement, 5% interest subvention on term debt, electricity tariff rebates (₹1 to ₹2 per unit), and 100% electricity duty exemption for 7 to 10 years. In food processing, schemes like MoFPI PMFME and Agriculture Infrastructure Fund (AIF) offer up to 35% capital grants and 3% interest relief on equipment purchase."
            }
          },
          {
            "@type": "Question",
            "name": "How does AB Consultancy assist businesses in Ahilyanagar and Maharashtra with machinery loan sanctions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Headquartered at Office No. 106, Baiju Height, Ahilyanagar, Maharashtra (Phone: +91 91308 94308), AB Consultancy has 15+ years of experience and 7,100+ clients advised across India. We evaluate vendor quotations, compile bank-grade Detailed Project Reports (DPR), prepare 7-year CMA financial projections with DSCR and BEP modeling, and liaise directly with bank credit processing cells and CPCs across 40+ leading commercial banks to fast-track machinery debt sanction within 2 to 3 weeks."
            }
          }
        ]
      }
    ]
  };

  // 6 Point-to-Point Evaluation Benchmarks
  const evaluationBenchmarks = [
    {
      title: "1. Vendor Quotation & Proforma Validity",
      point: "Detailed OEM machinery quotation, tax invoice breakup, freight, and commissioning cost.",
      impact: "Establishes eligible project cost and determines maximum loan quantum (up to 85%).",
      badge: "Asset Costing",
      icon: Cpu
    },
    {
      title: "2. Economic Asset Life & Depreciation Tenure",
      point: "Manufacturer warranty, rated production hours, and standard 3 to 7-year asset lifecycle.",
      impact: "Governs bank term loan repayment tenure and statutory depreciation tax shielding.",
      badge: "Asset Lifecycle",
      icon: Clock
    },
    {
      title: "3. Incremental Cash Flow & DSCR Viability",
      point: "Projected output expansion, capacity utilization, and incremental operational EBITDA.",
      impact: "Minimum DSCR ≥ 1.50x guarantees repayment capacity directly from machinery earnings.",
      badge: "DSCR & Capacity",
      icon: TrendingUp
    },
    {
      title: "4. Factory Floor Space & Power Load Sanction",
      point: "Adequate industrial shed area, civil foundation drawings, and connected MSEDCL power load.",
      impact: "Confirms site readiness and eliminates post-disbursement commissioning bottlenecks.",
      badge: "Site Readiness",
      icon: Factory
    },
    {
      title: "5. Asset Hypothecation & CGTMSE Coverage",
      point: "Primary hypothecation of purchased machinery plus CGTMSE guarantee up to ₹5 Crores.",
      impact: "Provides 100% legal waiver of immovable residential property mortgage.",
      badge: "Security Structuring",
      icon: ShieldCheck
    },
    {
      title: "6. State Incentive & Interest Subvention Synergy",
      point: "Maharashtra PSI 2019/2024 interest relief (5%), AIF 3% subvention, and power rebates.",
      impact: "Substantially lowers effective borrowing interest rates and shortens payback periods.",
      badge: "Subsidy Synergy",
      icon: Award
    }
  ];

  // 6 Procedural Milestones (Interactive Infographic Roadmap)
  const coreMilestones = [
    {
      number: 1,
      stageLabel: "STAGE 1 • PROFORMA & SCOPING",
      trackLabel: "Appraisal",
      title: "Vendor Proforma & Eligibility Scoping",
      desc: "Fast 24-hour review of OEM machinery quotes, promoter CIBIL, factory site, and bank scheme fitment.",
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
      stageLabel: "STAGE 2 • BANK-GRADE DPR",
      trackLabel: "Feasibility",
      title: "Bank-Grade Equipment DPR Formulation",
      desc: "Comprehensive Detailed Project Report detailing machine tech specs, output, and capacity utilization.",
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
      title: "7-Year CMA & DSCR Financial Modeling",
      desc: "Projected P&L, balance sheets, cash flows, MPBF working capital, DSCR, and break-even point analysis.",
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
      stageLabel: "STAGE 4 • SCHEME & SUBSIDY",
      trackLabel: "Incentives",
      title: "CGTMSE & State Incentive Alignment",
      desc: "Structuring CGTMSE collateral-free guarantee, Maharashtra PSI interest rebate, or AIF 3% subvention.",
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
      title: "Sanction-Ready Bank Dossier Compilation",
      desc: "Compiling audited records, GST returns, signed quotations, and factory power/shed certificates.",
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
      stageLabel: "STAGE 6 • SANCTION & LIAISON",
      trackLabel: "Disbursement",
      title: "Bank Liaison & Direct Vendor Disbursement",
      desc: "Active coordination with credit processing cells (CPCs) through to sanction and direct OEM payment.",
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
      id: "cnc-engineering",
      title: "1. CNC, VMC & Precision Engineering Machinery",
      category: "Engineering & Tooling",
      summary: "Term debt funding for purchasing high-precision CNC lathes, 3/4/5-axis VMC milling centers, laser cutting beds, and press brakes.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹15 Crores", sub: null },
        { label: "Tenure", value: "5 to 7 Years", sub: "(Moratorium up to 6 Mos)" },
        { label: "Financing Ratio", value: "Up to 85%", sub: "Of Machine Invoice" },
        { label: "Security", value: "Machine Hypothecation", sub: "+ CGTMSE Cover" }
      ],
      points: [
        "Direct manufacturer or dealer payment through bank disbursement / Letter of Credit",
        "Includes installation, voltage stabilizer, and essential tooling kit financing",
        "Eligible for 5% interest subvention under Maharashtra PSI Package Scheme"
      ],
      bestFor: "Automotive Ancillaries, Precision Machining Job Works, Aerospace Tooling",
      icon: Cpu,
      badge: "CNC & Tooling"
    },
    {
      id: "food-packaging",
      title: "2. Food Processing & Packaging Plant Machinery",
      category: "Agro-Processing Priority",
      summary: "Dedicated equipment finance for automated food processing lines, grading/sorting equipment, pouch packaging, and cold chain blast freezers.",
      specs: [
        { label: "Loan Quantum", value: "₹20 Lakhs to\n₹20 Crores", sub: null },
        { label: "Interest Subsidy", value: "3% Subvention", sub: "(Under AIF Scheme)" },
        { label: "Capital Grant", value: "Up to 35%", sub: "MoFPI / PMFME Synergy" },
        { label: "Tenure", value: "5 to 8 Years", sub: "(Moratorium up to 12 Mos)" }
      ],
      points: [
        "Synergized with Agriculture Infrastructure Fund (AIF) for 3% interest relief up to ₹2 Cr",
        "Eligible for PMFME capital investment subsidy (35% up to ₹10 Lakhs or ₹3 Cr for groups)",
        "Includes commercial packaging machinery, stainless steel tanks, and pasteurizers"
      ],
      bestFor: "Flour/Dal Mills, Dairy Units, Bakery Lines, Fruit Juices, Spices, Pickles",
      icon: Store,
      badge: "Food & Agro Plant"
    },
    {
      id: "plastic-molding",
      title: "3. Plastic Injection Molding & Extrusion Equipment",
      category: "Polymer & Plastics",
      summary: "Equipment financing for servo-driven plastic injection molding machines, blow molding setups, PVC pipe extruders, and recycling plants.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹12 Crores", sub: null },
        { label: "Tenure", value: "4 to 7 Years", sub: "(Linked to asset life)" },
        { label: "Down Payment", value: "15% to 20%", sub: "Promoter Margin" },
        { label: "Collateral", value: "Primary Machine", sub: "Hypothecation Only" }
      ],
      points: [
        "Energy-efficient servo hydraulic systems qualify for green industrial subsidies",
        "Covers heavy mold tooling, chillers, hopper loaders, and auxiliary equipment",
        "Zero residential property collateral requirement when covered under CGTMSE"
      ],
      bestFor: "Plastic Components, Household Products, Packaging Containers, Pipe Extrusion",
      icon: Factory,
      badge: "Plastics & Polymers"
    },
    {
      id: "textile-weaving",
      title: "4. Textile, Weaving & Garment Manufacturing Machinery",
      category: "Textile Sector Debt",
      summary: "Term loans for shuttleless rapier looms, air-jet looms, spinning frames, computer embroidery, and automated industrial sewing setups.",
      specs: [
        { label: "Loan Quantum", value: "₹30 Lakhs to\n₹25 Crores", sub: null },
        { label: "State Subsidy", value: "Up to 30%–40%", sub: "Maharashtra Textile Policy" },
        { label: "Interest Rebate", value: "5%–7% p.a.", sub: "State + Central TUFS" },
        { label: "Tenure", value: "5 to 8 Years", sub: "(Moratorium up to 12 Mos)" }
      ],
      points: [
        "Special interest subsidy and capital grants under Maharashtra Integrated Textile Policy",
        "Finances electronic jacquards, auto coners, sizing machines, and fabric dyeing units",
        "Fast-track processing for textile clusters in Ahilyanagar, Solapur, Ichalkaranji, and Bhiwandi"
      ],
      bestFor: "Weaving Mills, Power Loom Units, Garment Exporters, Spinning Facilities",
      icon: Layers,
      badge: "Textiles & Apparel"
    },
    {
      id: "imported-machinery",
      title: "5. Imported Plant Machinery & Foreign Letter of Credit",
      category: "Import Capital Debt",
      summary: "Structured project debt and foreign exchange trade credit facilities for importing advanced industrial machinery from Germany, Japan, Taiwan, and Italy.",
      specs: [
        { label: "Loan Quantum", value: "₹1 Crore to\n₹50 Crores", sub: null },
        { label: "Facility Type", value: "Term Debt + FLC", sub: "Foreign Letter of Credit" },
        { label: "Duty Benefit", value: "Zero Duty", sub: "(EPCG Scheme Aligned)" },
        { label: "Tenure", value: "5 to 10 Years", sub: "(Long-Term Moratorium)" }
      ],
      points: [
        "Complete banking liaison for issuing Foreign Letters of Credit (FLC) and Buyers Credit",
        "Synchronized with EPCG (Export Promotion Capital Goods) scheme for 0% customs duty",
        "Includes sea freight, customs clearance, and overseas technician installation costs"
      ],
      bestFor: "Export Manufacturing Units, High-Tech Electronics, Specialty Chemicals",
      icon: Landmark,
      badge: "Imported Equipment"
    },
    {
      id: "refurbished-equipment",
      title: "6. Certified Second-Hand & Refurbished Machinery Loans",
      category: "Refurbished Plant Asset",
      summary: "Cost-effective term financing for high-value imported or domestic pre-owned machinery backed by certified technical appraisal.",
      specs: [
        { label: "Loan Quantum", value: "₹15 Lakhs to\n₹8 Crores", sub: null },
        { label: "Appraisal", value: "CE Certified", sub: "Chartered Engineer Vetted" },
        { label: "Residual Life", value: "Min 5–10 Years", sub: "Required by Bank" },
        { label: "Tenure", value: "3 to 5 Years", sub: "(Commensurate with life)" }
      ],
      points: [
        "Reduces startup capital outlay by 50% to 70% compared to new machine purchase",
        "Mandatory Chartered Engineer valuation certifying asset health, output, and residual life",
        "Structured against hypothecation with standard 25% to 35% promoter margin"
      ],
      bestFor: "Startups, Heavy Fabrication Workshops, Ancillary Job-Work Suppliers",
      icon: Award,
      badge: "Pre-Owned Machinery"
    }
  ];

  // 5 High-Authority Local SEO & Instant-Index FAQs (AEO & GEO Standard)
  const faqs = [
    {
      q: "What percentage of machinery cost do banks fund, and what is the margin money requirement?",
      a: "Commercial banks and NBFCs typically fund 75% to 85% of the total machinery cost (including ex-factory price, GST, freight, transit insurance, and installation charges). For established MSME units with strong cash flows or under special vendor-tied programs, financing can extend up to 90%. The promoter is required to contribute the remaining 10% to 25% as margin money. In government subsidy schemes such as PMEGP, CMEGP, or Stand-Up India, promoter margin contribution can be as low as 5% to 15%."
    },
    {
      q: "Can MSME manufacturers get collateral-free machinery loans without mortgaging property?",
      a: "Yes. Under the Government of India's CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) scheme, MSME manufacturers can secure machinery term loans up to ₹5 Crores completely collateral-free. The purchased plant and machinery serves as the primary security via hypothecation to the lending bank, without requiring residential property mortgage or third-party guarantors. AB Consultancy structures your machinery DPR and coordinates CGTMSE trust fee coverage across nationalized and private banking partners."
    },
    {
      q: "Do banks finance imported or second-hand/refurbished plant machinery in Maharashtra?",
      a: "Yes. For imported machinery, banks provide term loan facilities backed by Foreign Letters of Credit (FLC) and EPCG concessional duty benefits. For second-hand or refurbished equipment, scheduled commercial banks and SIDBI finance purchases subject to a Chartered Engineer's inspection report certifying a minimum residual economic life of 5 to 10 years, valuation accuracy, and production efficiency. Margin money for second-hand machines is typically 25% to 35%."
    },
    {
      q: "What capital subsidies and interest rebates are available on machinery loans in Maharashtra?",
      a: "Under the Maharashtra Package Scheme of Incentives (PSI 2019 / 2024), new machinery investments qualify for 40% to 100% Industrial Promotion Subsidy (IPS) via SGST reimbursement, 5% interest subvention on term debt, electricity tariff rebates (₹1 to ₹2 per unit), and 100% electricity duty exemption for 7 to 10 years. In food processing, schemes like MoFPI PMFME and Agriculture Infrastructure Fund (AIF) offer up to 35% capital grants and 3% interest relief on equipment purchase."
    },
    {
      q: "How does AB Consultancy assist businesses in Ahilyanagar and Maharashtra with machinery loan sanctions?",
      a: "Headquartered at Office No. 106, Baiju Height, Ahilyanagar, Maharashtra (Phone: +91 91308 94308), AB Consultancy has 15+ years of experience and 7,100+ clients advised across India. We evaluate vendor quotations, compile bank-grade Detailed Project Reports (DPR), prepare 7-year CMA financial projections with DSCR and BEP modeling, and liaise directly with bank credit processing cells and CPCs across 40+ leading commercial banks to fast-track machinery debt sanction within 2 to 3 weeks."
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
            <span className="text-[#0062FF] font-semibold">Machinery Loans</span>
          </div>

          <div className="max-w-4xl">
            {/* Signature Eyebrow Pill Tag with Smooth Reveal & Character Animation */}
            <AnimatedBadge 
              icon={Cpu} 
              text="Industrial Equipment Capital Desk • New & Imported Machinery Debt" 
              isHero={true} 
            />

            {/* Main SEO/AEO Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Machinery Loans & Equipment Finance Advisory
            </h1>

            {/* Point-to-Point Value Proposition */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-[#0062FF] leading-snug">
              Secure up to 85%–90% plant machinery financing, CNC machine loans & commercial equipment funding with bank-ready DPRs, CGTMSE coverage & interest subsidies.
            </p>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              AB Consultancy provides specialized machinery loan and equipment term finance advisory for MSME manufacturers, engineering workshops, and industrial plants in Ahilyanagar, Pune, Chhatrapati Sambhajinagar, and across Maharashtra. We structure equipment debt across 40+ scheduled banks with fast-track vendor invoice processing.
            </p>

            {/* Point-to-Point Quick Facts Bar (AEO Snippet-Targetable) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl">
              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Financing Quantum</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">₹10L – ₹25+ Cr</span>
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
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Lending Network</span>
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
                <span>Check Machinery Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0062FF]" />
                <span>Book Equipment Consultation</span>
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
              <span className="text-[#0062FF] font-bold">Supported Machine Categories:</span>
              <span>CNC & VMC Machines</span>
              <span>•</span>
              <span>Food Processing</span>
              <span>•</span>
              <span>Plastic Injection Molding</span>
              <span>•</span>
              <span>Textile Looms</span>
              <span>•</span>
              <span>Imported Equipment</span>
              <span>•</span>
              <span>CGTMSE Collateral-Free</span>
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
              Bank Evaluation Framework for Machinery Loans
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Understand how nationalized, private commercial banks, and SIDBI assess industrial equipment term loan proposals.
            </p>
          </div>

          {/* AEO Direct Answer Callout Box */}
          <div className="bg-[#F8FAFD] border-l-4 border-[#0062FF] p-5 sm:p-6 rounded-r-2xl mb-10 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
              What is an Industrial Machinery Loan and How Do Banks Sanction Equipment Debt in India?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              An <strong>Industrial Machinery Loan</strong> is an asset-backed commercial term loan (typically ₹10 Lakhs to ₹25+ Crores) sanctioned by scheduled banks, NBFCs, and SIDBI to finance the acquisition of new, imported, or refurbished manufacturing equipment, automated production lines, and CNC machining centers. Banks typically fund <strong>75% to 85% of the total machinery proforma cost</strong> (including tax, freight, and installation). The loan is primarily secured by the <strong>hypothecation of the machinery itself</strong>, with tenures of 3 to 7 years matching asset depreciation life. Credit appraisal evaluates vendor quotation authenticity, Debt Service Coverage Ratio (DSCR ≥ 1.50x), factory floor power load sanction, production capacity expansion, and eligible capital subsidies like Maharashtra PSI 2019/2024.
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
                <AnimatedBadge icon={ShieldCheck} text="Pre-Procurement Feasibility Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Machinery Loan Eligibility & Equipment Costing Pre-Audit
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid bank application rejections. Our preliminary pre-procurement audit verifies vendor quotation authenticity, models debt service coverage, optimizes margin money requirements, and prepares bank-ready DPRs.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Vendor Machinery Quotation & Technology Validation",
                    "Down Payment & Margin Money Structuring (10% to 20%)",
                    "7-Year Cash Flow & Incremental DSCR Sensitivity",
                    "CGTMSE Collateral-Free Guarantee Coverage Application",
                    "Letter of Credit (LC) / Bank Guarantee (BG) for Machinery Import",
                    "Maharashtra PSI, CLCSS & Central Capital Subsidy Synchronization"
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
                    <span>Request Pre-Procurement Audit</span>
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
                      3–5 <span className="text-[#60A5FA] font-bold text-lg sm:text-xl">Days</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Machinery DPR & Appraisal
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average turnaround for equipment proforma vetting, technical review, and bank-grade DPR compilation.
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
                      Direct state and central industrial investment incentives and grants realized for client units.
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
                text="Equipment Financing Roadmap • 6 Procedural Milestones" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#10264F] tracking-tight leading-tight">
              Our 6-Step Machinery Loan <span className="text-[#1769E8]">Engagement</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-2xl mx-auto leading-relaxed">
              Complete procedural guidance from vendor quotation appraisal through to bank credit approval and direct supplier disbursement.
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
                <linearGradient id="machinery-hub-ring-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0D9488" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="machinery-hub-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1769E8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft Radial Background Circle behind Hub */}
              <circle cx="630" cy="260" r="220" fill="url(#machinery-hub-center-glow)" />

              {/* Concentric Radar Guide Rings centered at Hub Center (630, 260) */}
              <circle cx="630" cy="260" r="95" stroke="#1769E8" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
              <circle cx="630" cy="260" r="120" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
              <circle cx="630" cy="260" r="180" stroke="url(#machinery-hub-ring-glow)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.45" />
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
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                Machinery Finance
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                Up to 85%–90% Funding
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
                  STAGE 1 • PROFORMA & SCOPING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1769E8] border border-blue-100">
                  Appraisal
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Vendor Proforma & Eligibility Scoping
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Fast 24-hour review of OEM machinery quotes, promoter CIBIL, factory site, and bank scheme fitment.
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
                  STAGE 2 • BANK-GRADE DPR
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-[#0D9488] border border-teal-100">
                  Feasibility
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Bank-Grade Equipment DPR Formulation
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Comprehensive Detailed Project Report detailing machine tech specs, output, and capacity utilization.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0D9488] flex items-center gap-1">
                <span>Deliverable: Bank-Compliant DPR File</span>
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
                  7-Year CMA & DSCR Financial Modeling
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Projected P&L, balance sheets, cash flows, MPBF working capital, DSCR, and break-even point analysis.
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
                  STAGE 4 • SCHEME & SUBSIDY
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-100">
                  Incentives
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  CGTMSE & State Incentive Alignment
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Structuring CGTMSE collateral-free guarantee, Maharashtra PSI interest rebate, or AIF 3% subvention.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981] flex items-center gap-1">
                <span>Deliverable: Subsidy & Guarantee Mapping</span>
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
                  STAGE 5 • BANK DOSSIER
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100">
                  Documentation
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Sanction-Ready Bank Dossier Compilation
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Compiling audited records, GST returns, signed quotations, and factory power/shed certificates.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316] flex items-center gap-1">
                <span>Deliverable: Sanction-Ready Application Dossier</span>
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
                  Bank Liaison & Direct Vendor Disbursement
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Active coordination with credit processing cells (CPCs) through to sanction and direct OEM payment.
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
            <AnimatedBadge icon={Landmark} text="Specialized Equipment Financing Facilities" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Machinery Loan Options & Specifications
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-600">
              Select the appropriate equipment financing facility for your engineering workshop, processing line, or commercial manufacturing plant.
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
                        <span>Direct OEM Disbursement</span>
                        <span className="font-semibold text-[#0062FF]">Up to 85%–90%</span>
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
              Why MSME Manufacturers Trust AB Consultancy
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
                <span>OEM & Vendor Quotation Vetting</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Detailed proforma invoice review, tax breakup validation, and technical output modeling satisfying bank credit committee norms.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Zero Upfront Hidden Charges</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                100% transparent milestone-based advisory with preliminary machine loan eligibility review provided free of charge.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>State & Central Subsidy Integration</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Synchronization with Maharashtra PSI 2019/2024 capital incentives, 5% interest subvention, AIF 3% relief, and power tariff rebates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Direct Bank CPC & Field Coordination</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Active liaison with Credit Processing Cells (CPCs), field inspection officers, and branch managers to ensure direct OEM release.
              </p>
            </div>
          </div>

          {/* 4 Track Record Stats */}
          <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">15+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Years Experience</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Specialized equipment & loan advisory</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#60A5FA]">7,100+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Clients Advised</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pan-India enterprise footprint</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹180+ Cr</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Subsidies Facilitated</div>
                <div className="text-[11px] text-slate-400 mt-0.5">State PSI, AIF & Central schemes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400">40+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Commercial Banks</div>
                <div className="text-[11px] text-slate-400 mt-0.5">National & private lending network</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Need Financing for Specific Machinery?</div>
                <div className="text-xs text-slate-300">Speak directly with our senior credit analyst for custom equipment debt structuring.</div>
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
              Our 3-Stage Machinery Loan Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#0062FF] uppercase tracking-wider">Phase 1</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Proforma & Site Consultation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss vendor machine quotation, factory shed readiness, promoter margin capacity, and funding objectives with our advisory desk.
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
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">DPR & CMA Financial Modeling</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bank-grade DPR drafting, 7-year CMA financial projections, DSCR optimization, and CGTMSE/Maharashtra PSI scheme mapping.
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
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Bank Sanction & Disbursement</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Complete bank dossier submission, credit cell query resolution, sanction letter release, and direct OEM machine disbursement.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onCheckEligibility}
                  className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100/70 text-purple-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Machinery Assistance</span>
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
              Essential Documents Required for Machinery Loans
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Keep these records organized for rapid bank file processing and equipment sanction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0062FF] flex items-center justify-center mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">1. Promoter & Business KYC</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• PAN, Aadhaar & CIBIL of all promoters</li>
                <li className="flex items-center gap-2">• Udyam MSME Registration Certificate</li>
                <li className="flex items-center gap-2">• GST Registration & Partnership/MOA</li>
                <li className="flex items-center gap-2">• Factory License / Shop Act License</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">2. Machinery Quotations & Specs</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Official proforma invoice with tax breakup</li>
                <li className="flex items-center gap-2">• Detailed machine technical specifications</li>
                <li className="flex items-center gap-2">• Delivery timeline & warranty commitment</li>
                <li className="flex items-center gap-2">• MSEDCL power sanction confirmation</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-2.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">3. Financial Statements</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Last 3 years ITR with computations</li>
                <li className="flex items-center gap-2">• Audited balance sheets & P&L statements</li>
                <li className="flex items-center gap-2">• 12 months primary bank statements</li>
                <li className="flex items-center gap-2">• Latest GSTR-3B & GSTR-1 returns</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#D97706] flex items-center justify-center mb-2.5">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">4. Project DPR & CMA Dossier</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Bank-Grade Detailed Project Report (DPR)</li>
                <li className="flex items-center gap-2">• 7-Year CMA projections with DSCR & BEP</li>
                <li className="flex items-center gap-2">• Factory premise lease or ownership deed</li>
                <li className="flex items-center gap-2">• Existing debt schedule (if applicable)</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Direct-Answer FAQs (AEO & GEO Gold Standard) */}
      <section className="py-12 sm:py-16 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <AnimatedBadge icon={HelpCircle} text="Direct Answers & Equipment Insights" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Machinery Loans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Authoritative answers regarding CGTMSE collateral-free limits, bank margin money, imported equipment letters of credit, and Maharashtra PSI subsidies.
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
                  Connect with AB Consultancy Machinery Loan Analysts
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Planning to acquire new CNC machines, food processing lines, or industrial plant equipment? Visit our office in Ahilyanagar or connect with our senior equipment finance specialists for tailored debt structuring.
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
                  Fast preliminary assessment to understand your machinery loan eligibility, margin money requirements, and optimal financing routes.
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
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All machinery loans, equipment term facilities, and credit guarantee approvals are subject to the independent appraisal, sanction policies, and regulatory guidelines of the respective lending banks and financial institutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
