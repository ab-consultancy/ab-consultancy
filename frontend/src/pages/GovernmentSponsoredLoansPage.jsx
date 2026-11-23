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

export default function GovernmentSponsoredLoansPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Government-Sponsored Loans & Subsidies Ahilyanagar | AB Consultancy",
    description: "Apply for government-sponsored loan schemes in Ahilyanagar & Maharashtra. PMEGP (up to 35% subsidy), CMEGP, PM Mudra up to ₹20L, Stand-Up India up to ₹1 Cr, PM Vishwakarma & CGTMSE collateral-free loans.",
    canonical: "https://www.abconsultancy.net.in/services/government-sponsored-loans",
    keywords: "Government Sponsored Loans Ahilyanagar, PMEGP Subsidy Consultant Ahmednagar, CMEGP Maharashtra Scheme Nagar, PM Mudra Loan Up to 20 Lakhs, Stand Up India Loan Women SC ST, PM Vishwakarma Loan Nagar, CGTMSE Collateral Free Loans Maharashtra"
  });

  // Comprehensive JSON-LD Structured Schema (FinancialProduct + LocalBusiness + FAQPage)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FinancialProduct",
          "@id": "https://www.abconsultancy.net.in/services/government-sponsored-loans#product",
          "name": "Government-Sponsored Loan Schemes & Subsidy Advisory",
          "alternateName": "PMEGP, CMEGP, Mudra & Stand-Up India Advisory",
          "description": "Professional DPR drafting, subsidy portal registration, and bank coordination for PMEGP, CMEGP, PM Mudra, Stand-Up India, PM Vishwakarma, and CGTMSE schemes across Ahilyanagar and Maharashtra.",
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
          "termsOfService": "Subject to central and state scheme eligibility norms, age/caste criteria, bank appraisal, and DIC/KVIC committee approval.",
          "annualPercentageRate": "5.00% to 9.50% p.a. (with capital subsidies up to 35%)"
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.abconsultancy.net.in/services/government-sponsored-loans#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the maximum subsidy available under the PMEGP scheme in Maharashtra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under the Prime Minister's Employment Generation Programme (PMEGP), beneficiaries in rural areas belonging to special categories (SC/ST/OBC/Women/Ex-Servicemen/Minorities) receive a 35% non-repayable capital subsidy, while general category applicants in rural areas receive 25%. In urban areas, special categories receive 25% and general categories receive 15%. The maximum project limit is ₹50 Lakhs for manufacturing and ₹20 Lakhs for service enterprises."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between PMEGP and CMEGP Maharashtra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PMEGP is a Central Government scheme administered by KVIC and DIC with a maximum ceiling of ₹50 Lakhs (manufacturing) and ₹20 Lakhs (services). CMEGP (Chief Minister Employment Generation Programme) is a Maharashtra State initiative offering up to ₹50 Lakhs for manufacturing and ₹10 Lakhs for services with state-backed margin money subsidies of 15% to 35%, tailored specifically for Maharashtra residents aged 18 to 45 years."
              }
            },
            {
              "@type": "Question",
              "name": "What is the enhanced loan limit under the PM Mudra Yojana (PMMY)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the latest Union Budget, the PM Mudra Yojana limit under the 'Tarun Plus' category was expanded to ₹20 Lakhs (up from ₹10 Lakhs) for entrepreneurs who have previously taken and successfully repaid a Tarun loan. Mudra loans require zero collateral security."
              }
            },
            {
              "@type": "Question",
              "name": "Who is eligible for the Stand-Up India scheme?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Stand-Up India scheme facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one Woman borrower per bank branch for setting up greenfield enterprises in manufacturing, services, agri-allied, or trading sectors."
              }
            },
            {
              "@type": "Question",
              "name": "How does AB Consultancy ensure subsidy approval and bank sanction?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We handle the entire journey: choosing the right scheme, preparing bank-grade DPRs, uploading flawless documentation on official government portals (KVIC/CMEGP/Stand-Up), coordinating with District Industries Centre (DIC) officials, and defending the proposal before bank branch managers."
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

  // 6 Institutional Government Programs
  const govtPrograms = [
    {
      id: "pmegp-scheme",
      title: "1. PMEGP Scheme (Prime Minister Employment Generation Programme)",
      category: "Central Capital Subsidy",
      summary: "Flagship central credit-linked subsidy scheme offering 15% to 35% non-repayable capital grants for setting up new micro-manufacturing or service units.",
      specs: [
        { label: "Manufacturing Limit", value: "Up to ₹50 Lakhs", sub: "Project Ceiling" },
        { label: "Service Limit", value: "Up to ₹20 Lakhs", sub: "Project Ceiling" },
        { label: "Capital Subsidy", value: "15% to 35%", sub: "Credit-Linked Grant" },
        { label: "Own Contribution", value: "5% to 10%", sub: "Promoter Margin" }
      ],
      points: [
        "35% subsidy for rural projects under special categories (Women, SC, ST, OBC, Minorities)",
        "2nd loan expansion up to ₹1 Crore for manufacturing units with 15%–20% additional subsidy",
        "3-year lock-in in a term deposit receipt (TDR) before final adjustment against loan principal"
      ],
      bestFor: "First-time Entrepreneurs, Micro-Factories, Agro-Processors, Rural Workshops",
      icon: Crown,
      badge: "Flagship Central Scheme"
    },
    {
      id: "cmegp-maharashtra",
      title: "2. CMEGP Maharashtra (Chief Minister Employment Generation Programme)",
      category: "State Margin Money Scheme",
      summary: "Dedicated Maharashtra State government initiative providing margin money grants of 15% to 35% for unemployed youth establishing industrial or service businesses.",
      specs: [
        { label: "Manufacturing Cap", value: "Up to ₹50 Lakhs", sub: "State Project Cap" },
        { label: "Service Cap", value: "Up to ₹10 Lakhs", sub: "State Service Cap" },
        { label: "State Subsidy", value: "15% to 35%", sub: "Of Total Project Cost" },
        { label: "Age Eligibility", value: "18 to 45 Yrs", sub: "(50 Yrs for SC/ST/Women)" }
      ],
      points: [
        "Administered through the Directorate of Industries & District Industries Centre (DIC)",
        "Minimum 7th standard pass for projects >₹10 Lakhs and 10th pass for >₹25 Lakhs",
        "Fast-track processing for local residents of Ahilyanagar and Maharashtra"
      ],
      bestFor: "Maharashtra Youth, Technical Diploma Holders, Rural & Semi-Urban Startups",
      icon: Landmark,
      badge: "Maharashtra State Scheme"
    },
    {
      id: "pm-mudra-yojana",
      title: "3. PM Mudra Yojana (PMMY) – Expanded Up to ₹20 Lakhs",
      category: "Collateral-Free Micro-Finance",
      summary: "Collateral-free institutional debt for non-corporate, non-farm small and micro enterprises across Shishu, Kishore, Tarun, and the newly enhanced Tarun Plus tiers.",
      specs: [
        { label: "Shishu Tier", value: "Up to ₹50,000", sub: "Micro-Enterprises" },
        { label: "Kishore Tier", value: "₹50k to ₹5 Lakhs", sub: "Growing Units" },
        { label: "Tarun Tier", value: "₹5L to ₹10 Lakhs", sub: "Established Small Units" },
        { label: "Tarun Plus", value: "Up to ₹20 Lakhs", sub: "Budget 2024 Expansion" }
      ],
      points: [
        "Zero collateral and zero third-party guarantee requirement across all Mudra categories",
        "Includes Mudra Debit Card for seamless revolving working capital withdrawals",
        "Covers traders, shopkeepers, artisans, fabricators, transport operators, and small processors"
      ],
      bestFor: "Small Shopkeepers, Retailers, Micro-Manufacturers, Service Providers",
      icon: Coins,
      badge: "Collateral-Free Micro-Debt"
    },
    {
      id: "standup-india-scheme",
      title: "4. Stand-Up India Scheme (For Women & SC/ST Entrepreneurs)",
      category: "Priority Greenfield Debt",
      summary: "High-value composite bank debt ranging from ₹10 Lakhs to ₹1 Crore for setting up new greenfield enterprises in manufacturing, services, trading, or agri-allied sectors.",
      specs: [
        { label: "Loan Quantum", value: "₹10L to ₹1 Crore", sub: "Term Debt + Working Capital" },
        { label: "Target Segment", value: "Women & SC / ST", sub: "At Least 1 Per Branch" },
        { label: "Promoter Margin", value: "15% Margin", sub: "Can Blend with Subsidies" },
        { label: "Repayment", value: "Up to 7 Years", sub: "(Moratorium up to 18 Mos)" }
      ],
      points: [
        "Every scheduled commercial bank branch is mandated to sanction at least 2 borrowers",
        "Composite loan combining plant machinery term debt and operational cash credit",
        "Backed by Credit Guarantee Fund for Stand-Up India (CGFSI) for bank confidence"
      ],
      bestFor: "Women Founders, SC/ST Promoters starting Greenfield Manufacturing or Service Ventures",
      icon: Users,
      badge: "Women & SC/ST Priority"
    },
    {
      id: "pm-vishwakarma-scheme",
      title: "5. PM Vishwakarma Scheme (Traditional Artisans & Craftspeople)",
      category: "Artisan Credit & Toolkits",
      summary: "End-to-end holistic support including modern skill training, ₹15,000 toolkit grants, and subsidized collateral-free loans at just 5% interest rate for traditional trades.",
      specs: [
        { label: "1st Tranche Loan", value: "Up to ₹1 Lakh", sub: "18-Month Tenure" },
        { label: "2nd Tranche Loan", value: "Up to ₹2 Lakhs", sub: "30-Month Tenure" },
        { label: "Concessional Rate", value: "5.0% Fixed", sub: "8% Interest Subvention" },
        { label: "Modern Toolkit", value: "₹15,000 Grant", sub: "Free E-Voucher" }
      ],
      points: [
        "Covers 18 traditional trades: carpenters, blacksmiths, goldsmiths, potters, cobblers, tailors",
        "Free basic & advanced training with ₹500 per day stipend during the training program",
        "National PM Vishwakarma Certificate & ID card providing formal artisan recognition"
      ],
      bestFor: "Carpenters, Blacksmiths, Masons, Barbers, Tailors, Potters, Traditional Artisans",
      icon: Wrench,
      badge: "Artisan & Craftsmen"
    },
    {
      id: "cgtmse-guarantee-scheme",
      title: "6. CGTMSE Scheme (Collateral-Free Bank Credit Up to ₹5 Crores)",
      category: "Sovereign Credit Guarantee",
      summary: "Credit Guarantee Fund Trust for Micro and Small Enterprises enabling collateral-free bank loans up to ₹5 Crores for both manufacturing and service businesses.",
      specs: [
        { label: "Max Guarantee", value: "Up to ₹5 Crores", sub: "Enhanced Central Limit" },
        { label: "Bank Security", value: "Zero Property", sub: "Hypothecation Only" },
        { label: "Coverage Ratio", value: "Up to 85%", sub: "Guaranteed by Trust" },
        { label: "Eligible Sectors", value: "Mfg & Services", sub: "Trading Also Included" }
      ],
      points: [
        "Eliminates the mandatory requirement of pledging residential or commercial real estate",
        "Overcomes the biggest barrier for first-generation technocrats and emerging entrepreneurs",
        "Applicable across all public sector, private commercial banks, and SIDBI"
      ],
      bestFor: "First-generation MSME Promoters, Engineering Units, Innovators, Service Firms",
      icon: ShieldCheck,
      badge: "Collateral-Free MSME"
    }
  ];

  // 6 Procedural Milestones
  const proceduralMilestones = [
    {
      number: "01",
      title: "Scheme Selection & Promoter Eligibility Audit",
      stage: "STAGE 1 • SCREENING",
      tag: "Scheme Audit",
      desc: "Analyzing applicant category (General/SC/ST/OBC/Women), location (Rural/Urban), project quantum, and education to pick the highest subsidy scheme.",
      deliverable: "Deliverable: Scheme Fitment & Maximum Subsidy Matrix",
      borderColor: "#0062FF",
      tagBg: "bg-blue-50 text-[#0062FF] border-blue-100"
    },
    {
      number: "02",
      title: "Bank-Grade Detailed Project Report (DPR)",
      stage: "STAGE 2 • DPR MODELING",
      tag: "DPR Formulation",
      desc: "Drafting a comprehensive DPR with machinery proformas, civil budgets, working capital cycles, and 5-year financial projections matching DIC/KVIC norms.",
      deliverable: "Deliverable: Government-Compliant Bankable DPR",
      borderColor: "#0284C7",
      tagBg: "bg-sky-50 text-[#0284C7] border-sky-100"
    },
    {
      number: "03",
      title: "Official Government Portal Registration",
      stage: "STAGE 3 • PORTAL FILING",
      tag: "Online Submission",
      desc: "Submitting verified applications on PMEGP e-Portal, CMEGP Maha, Udyam, or Stand-Up India portals with complete KYC, project cost sheets, and quotations.",
      deliverable: "Deliverable: Official Portal Application Acknowledgement",
      borderColor: "#7C3AED",
      tagBg: "bg-purple-50 text-[#7C3AED] border-purple-100"
    },
    {
      number: "04",
      title: "DIC / KVIC Task Force Committee Clearance",
      stage: "STAGE 4 • TASK FORCE",
      tag: "Committee Approval",
      desc: "Coordinating with District Industries Centre (DIC) and KVIC nodal officers for task force interview clearance and forwarding to the designated bank branch.",
      deliverable: "Deliverable: DIC / KVIC Task Force Recommendation Letter",
      borderColor: "#10B981",
      tagBg: "bg-emerald-50 text-[#10B981] border-emerald-100"
    },
    {
      number: "05",
      title: "Bank Credit Committee Defense & Sanction",
      stage: "STAGE 5 • BANK DEFENSE",
      tag: "Loan Sanction",
      desc: "Presenting the sanctioned proposal to bank branch managers, addressing credit underwriting queries, and securing the formal bank loan sanction letter.",
      deliverable: "Deliverable: In-Principle Bank Loan Sanction Letter",
      borderColor: "#F97316",
      tagBg: "bg-orange-50 text-[#F97316] border-orange-100"
    },
    {
      number: "06",
      title: "EDP Training & Capital Subsidy Release",
      stage: "STAGE 6 • SUBSIDY RELEASE",
      tag: "Grant Credit",
      desc: "Facilitating mandatory Entrepreneurship Development Programme (EDP) training, loan disbursement, and credit-linked margin money subsidy release into TDR.",
      deliverable: "Deliverable: Final Disbursement & Subsidy TDR Credit",
      borderColor: "#F43F5E",
      tagBg: "bg-rose-50 text-[#F43F5E] border-rose-100"
    }
  ];

  // 5 AEO/GEO FAQ Accordions
  const faqs = [
    {
      q: "What is the maximum subsidy available under the PMEGP scheme in Maharashtra?",
      a: "Under the Prime Minister's Employment Generation Programme (PMEGP), beneficiaries in rural areas belonging to special categories (SC/ST/OBC/Women/Ex-Servicemen/Minorities) receive a 35% non-repayable capital subsidy, while general category applicants in rural areas receive 25%. In urban areas, special categories receive 25% and general categories receive 15%. The maximum project limit is ₹50 Lakhs for manufacturing and ₹20 Lakhs for service enterprises."
    },
    {
      q: "What is the difference between PMEGP and CMEGP Maharashtra?",
      a: "PMEGP is a Central Government scheme administered by KVIC and DIC with a maximum ceiling of ₹50 Lakhs (manufacturing) and ₹20 Lakhs (services). CMEGP (Chief Minister Employment Generation Programme) is a Maharashtra State initiative offering up to ₹50 Lakhs for manufacturing and ₹10 Lakhs for services with state-backed margin money subsidies of 15% to 35%, tailored specifically for Maharashtra residents aged 18 to 45 years."
    },
    {
      q: "What is the enhanced loan limit under the PM Mudra Yojana (PMMY)?",
      a: "In the latest Union Budget, the PM Mudra Yojana limit under the 'Tarun Plus' category was expanded to ₹20 Lakhs (up from ₹10 Lakhs) for entrepreneurs who have previously taken and successfully repaid a Tarun loan. Mudra loans require zero collateral security."
    },
    {
      q: "Who is eligible for the Stand-Up India scheme?",
      a: "The Stand-Up India scheme facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one Woman borrower per bank branch for setting up greenfield enterprises in manufacturing, services, agri-allied, or trading sectors."
    },
    {
      q: "How does AB Consultancy ensure subsidy approval and bank sanction?",
      a: "We handle the entire journey: choosing the right scheme, preparing bank-grade DPRs, uploading flawless documentation on official government portals (KVIC/CMEGP/Stand-Up), coordinating with District Industries Centre (DIC) officials, and defending the proposal before bank branch managers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800 font-sans selection:bg-[#0062FF] selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#EBF3FE] via-[#F4F8FD] to-[#F4F8FD] border-b border-slate-200/80 overflow-hidden">
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
              <li className="text-slate-900 font-semibold" aria-current="page">Government-Sponsored Loans</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Animated Eyebrow Badge */}
            <AnimatedBadge 
              icon={Crown} 
              text="Central & Maharashtra Subsidized Credit • Up to 35% Capital Grants" 
              isHero={true} 
            />

            {/* H1 Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Government-Sponsored Loan Schemes & Subsidies in <span className="text-[#0062FF]">Ahilyanagar</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-bold text-slate-700 leading-snug">
              Secure PMEGP (Up to 35% Subsidy), CMEGP, PM Mudra Up to ₹20L & Stand-Up India Up to ₹1 Cr with Zero Collateral Hassles.
            </p>

            {/* Paragraph */}
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              Unlock non-repayable government capital subsidies and low-interest credit to launch or scale your business. We provide end-to-end advisory for PMEGP, CMEGP Maharashtra, PM Mudra, Stand-Up India, PM Vishwakarma, and CGTMSE schemes. From bankable DPR compilation to District Industries Centre (DIC) liaison and bank disbursement, AB Consultancy guarantees seamless execution.
            </p>

            {/* Quick Facts Stat Strip */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Max Capital Subsidy</span>
                <span className="text-lg sm:text-xl font-black text-emerald-600 mt-0.5 block">15% to 35%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">PMEGP & CMEGP Grants</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Project Quantum</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">Up to ₹50 Lakhs</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Up to ₹1 Cr in Stand-Up</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Collateral Security</span>
                <span className="text-lg sm:text-xl font-black text-[#0062FF] mt-0.5 block">Zero Collateral</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">CGTMSE & Mudra Backed</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Promoter Margin</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">Just 5% to 10%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">For Special Categories</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check Govt Subsidy Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book Scheme Consultation</span>
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
                PMEGP & CMEGP Portal Filing
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                PM Mudra Loans Up to ₹20 Lakhs
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Stand-Up India Loans for Women & SC/ST
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                DIC & Bank Liaison Handled 100%
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Bank Evaluation Framework */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Scale} text="Government Scheme Evaluation Framework" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Government Agencies & Banks Underwrite Subsidized Loans
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Securing government loans involves a dual appraisal: District Task Force clearance by DIC/KVIC for subsidy eligibility, followed by commercial bank credit underwriting.
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
                  What Are the Primary Eligibility Rules to Qualify for PMEGP and CMEGP Subsidies in Ahilyanagar?
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  Key prerequisites: (1) <strong>Age & Education</strong>: Age 18+ (up to 45 for CMEGP) with minimum 8th standard pass for projects over ₹10 Lakhs (manufacturing) or ₹5 Lakhs (services), (2) <strong>New Greenfield Setup</strong>: The scheme applies strictly to net-new units, not existing setups, (3) <strong>Detailed Project Report (DPR)</strong>: Compliant with DIC costing models, capital expenditure caps, and working capital ratios, and (4) <strong>Caste / Location Certificates</strong>: Domicile, caste validity, and rural Grampanchayat population certificate to secure the maximum 35% rural special category subsidy.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Point-to-Point Evaluation Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">01</span>
                <h3 className="text-sm font-bold text-slate-900">Rural vs Urban Location Mapping</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rural areas (Grampanchayat jurisdictions) qualify for 25%–35% subsidies under PMEGP, while urban Municipal Corporation limits are capped at 15%–25%.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">02</span>
                <h3 className="text-sm font-bold text-slate-900">Beneficiary Social Category</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Special categories (Women, SC, ST, OBC, Ex-Servicemen, Differently-Abled, Minorities) contribute only 5% promoter margin and enjoy 10% higher subsidy rates.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">03</span>
                <h3 className="text-sm font-bold text-slate-900">DIC / KVIC Task Force Interview</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                District Level Task Force Committee (DLTFC) evaluates candidate project knowledge, local market viability, and forwards approved files to partner banks.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">04</span>
                <h3 className="text-sm font-bold text-slate-900">Bank Financial Appraisal & DSCR</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bank credit managers independently vet machine quotations, electricity load, rental agreements, and projected cash flow DSCR of at least 1.25 to 1.35.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">05</span>
                <h3 className="text-sm font-bold text-slate-900">Mandatory EDP Training</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Completion of official Entrepreneurship Development Programme (EDP) online or offline training is mandatory before the first loan disbursement can be initiated.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">06</span>
                <h3 className="text-sm font-bold text-slate-900">Subsidy Lock-in in TDR (3 Years)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The sanctioned subsidy amount is credited into a bank Term Deposit Receipt (TDR) in the borrower’s name, earning zero interest, and adjusted against the loan after 3 years.
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
                <AnimatedBadge icon={ShieldCheck} text="Government Scheme Pre-Sanction Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Subsidy Scheme Feasibility & Portal Pre-Audit
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid portal rejections and DIC disqualifications. Our pre-audit verifies applicant eligibility, reviews caste and education records, formats vendor quotations, and prepares a bank-grade DPR.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "PMEGP / CMEGP Eligibility & Maximum Subsidy Calculation",
                    "Caste Validity, Domicile & Rural Population Certificate Check",
                    "Bankable DPR with Cost Breakup & 5-Year DSCR Cash Flow",
                    "Official Portal Application Upload (KVIC / CMEGP / Mudra)",
                    "DIC & KVIC Task Force Committee Representation Guidance",
                    "Bank Branch Selection & Credit Manager Liaison"
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
                    <span>Request Scheme Pre-Audit</span>
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
                      2–4 <span className="text-[#60A5FA] font-bold text-lg sm:text-xl">Days</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Govt DPR & Portal Upload
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average preliminary assessment, DPR compilation, and official portal filing turnaround.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      ₹180<span className="text-slate-400 font-bold text-lg sm:text-xl">+ Cr</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Subsidies & Govt Debt Advised
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Direct capital subsidies and low-interest credit facilitated across Maharashtra.
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
                  <span>DIC & KVIC Model Aligned</span>
                  <span>CGTMSE & Mudra Compliant</span>
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
              6-Step Government Loan & Subsidy Roadmap
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              From scheme eligibility screening to portal filing, DIC task force interview, bank sanction, and subsidy credit.
            </p>
          </div>

          {/* Desktop Interactive SVG Radar Hub (1260 x 520) */}
          <div className="hidden xl:block relative w-[1260px] h-[520px] mx-auto select-none">
            
            {/* SVG Connecting Vector Rays */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1260 520" fill="none">
              
              {/* Line 1: Blue */}
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

              {/* Line 2: Sky */}
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

              {/* Line 3: Purple */}
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

              {/* Line 4: Emerald */}
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

              {/* Line 5: Orange */}
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

              {/* Line 6: Rose */}
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

            {/* Central Master Circular Hub */}
            <div 
              className="absolute left-[546px] top-[176px] w-[168px] h-[168px] rounded-full bg-gradient-to-br from-white via-[#F8FAFD] to-[#EDF4FD] border-2 border-[#1769E8]/35 shadow-[0_12px_36px_rgba(23,105,232,0.18)] flex flex-col items-center justify-center text-center p-3 z-30 transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_44px_rgba(23,105,232,0.25)] group"
            >
              <div className="absolute inset-[-6px] rounded-full border border-dashed border-[#1769E8]/30 pointer-events-none animate-[spin_40s_linear_infinite]" />
              
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E8] to-[#00A3FF] text-white flex items-center justify-center shadow-md mb-1.5 group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                Govt Subsidies
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                Up to 35% Capital Grants
              </div>
            </div>

            {/* Milestone Cards Layer */}
            {/* CARD 1 */}
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
                  STAGE 1 • SCREENING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0062FF] border border-blue-100">
                  Scheme Audit
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Scheme Selection & Eligibility Audit
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Analyzing applicant category, location, and education to target the highest applicable subsidy scheme.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0062FF] flex items-center gap-1">
                <span>Deliverable: Scheme Fitment & Maximum Subsidy Matrix</span>
              </div>
            </div>

            {/* CARD 2 */}
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
                  STAGE 2 • DPR MODELING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100">
                  DPR Formulation
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Bank-Grade Detailed Project Report (DPR)
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Drafting a comprehensive DPR with machinery proformas, civil budgets, and 5-year cash flow projections.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0284C7] flex items-center gap-1">
                <span>Deliverable: Government-Compliant Bankable DPR</span>
              </div>
            </div>

            {/* CARD 3 */}
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
                  STAGE 3 • PORTAL FILING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-100">
                  Online Submission
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Official Government Portal Registration
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Submitting verified applications on PMEGP e-Portal, CMEGP Maha, Udyam, or Stand-Up India portals.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#7C3AED] flex items-center gap-1">
                <span>Deliverable: Official Portal Application Acknowledgement</span>
              </div>
            </div>

            {/* CARD 4 */}
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
                  STAGE 4 • TASK FORCE
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-100">
                  Committee Approval
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  DIC / KVIC Task Force Clearance
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Coordinating with DIC and KVIC officers for interview clearance and bank branch forwarding.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981] flex items-center gap-1">
                <span>Deliverable: DIC / KVIC Task Force Recommendation Letter</span>
              </div>
            </div>

            {/* CARD 5 */}
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
                  STAGE 5 • BANK DEFENSE
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100">
                  Loan Sanction
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Bank Credit Committee Defense & Sanction
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Defending the proposal before bank branch managers and securing the formal bank loan sanction.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316] flex items-center gap-1">
                <span>Deliverable: In-Principle Bank Loan Sanction Letter</span>
              </div>
            </div>

            {/* CARD 6 */}
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
                  STAGE 6 • SUBSIDY RELEASE
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-[#F43F5E] border border-rose-100">
                  Grant Credit
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  EDP Training & Capital Subsidy Release
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Facilitating mandatory EDP training, loan disbursement, and credit-linked subsidy lock-in in TDR.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F43F5E] flex items-center gap-1">
                <span>Deliverable: Final Disbursement & Subsidy TDR Credit</span>
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

      {/* 5. 6 Institutional Government Programs */}
      <section className="py-12 sm:py-20 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <AnimatedBadge icon={Building2} text="Government Credit Programs" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6 Institutional Government-Sponsored Loan Schemes
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore central and state government credit schemes offering capital grants, margin subsidies, and collateral-free guarantees.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {govtPrograms.map((prog, idx) => {
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
                          Key Scheme Highlights
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
                          Nodal Implementation Agency:
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
                  15+ Years of Government Scheme Advisory & Subsidy Realization
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Navigating multiple government subsidy portals, District Industries Centre (DIC) guidelines, KVIC task force meetings, and bank credit scrutiny requires specialized expertise. AB Consultancy guarantees 100% compliant execution.
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
                    <span className="text-xs text-slate-300 font-medium mt-0.5 block">Subsidies Realized</span>
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
                    <span>Bank-grade DPRs modeling capital cost, DSCR, and working capital limits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Official portal filing on KVIC, CMEGP Maha, Mudra, and Stand-Up India.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Complete liaison with DIC task force committees and bank branch credit teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Transparent milestone-based professional fees with zero hidden retainers.</span>
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
              3-Stage Government Scheme Advisory Workflow
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our systematic protocol ensures fast-track task force clearances, prompt bank sanctions, and timely subsidy lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P1
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 1: DPR & Portal Submission</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We review KYC, caste/rural certificates, machine quotes, and rental lease. We draft a compliant DPR and upload your file on the official PMEGP/CMEGP portal.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 2–4 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P2
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 2: Task Force & Bank Appraisal</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We prepare you for the DIC/KVIC task force interview, track the forwarded proposal to the financing bank, resolve credit queries, and obtain the loan sanction.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 7–14 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P3
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 3: Disbursement & Subsidy TDR</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We guide you through online EDP training, facilitate loan documentation and first tranche release, and track margin money subsidy credit into your loan TDR account.
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
              Government Scheme Document Checklist
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Compile these essential records to ensure zero rejection during DIC screening and bank underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">1. Applicant Identity & Caste</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Applicant PAN Card & Aadhaar Card</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Caste Certificate & Validity (for Special Categories)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Maharashtra Domicile Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Highest Educational Marksheet (8th/10th/Degree)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">2. Business Premises</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Registered Rent Agreement (Min 3–5 Yrs)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Grampanchayat / Municipal Property Tax Receipt</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Grampanchayat Rural Population Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Electricity Bill & Landlord NOC</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Factory className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">3. Machinery & Project Cost</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Machinery OEM Proforma Invoices (with GST)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Raw material supplier quotes</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Civil shed / interior estimate (if applicable)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Detailed Project Report (DPR)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">4. Financial & Statutory</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 6–12 months personal bank statement</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Udyam Aadhaar Registration Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>EDP Training Certificate (if already completed)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Self-declaration of zero prior government subsidy</span>
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
              Government-Sponsored Loans Advisory FAQs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear, factual answers regarding PMEGP subsidies, CMEGP norms, Mudra loans, and bank underwriting procedures.
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
                  Consult Our Government Subsidy Desk in Ahilyanagar
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visit our office near Old ST Stand with your Aadhaar, education certificates, and business ideas for an in-person scheme eligibility and DPR consultation.
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
                  Fast preliminary assessment to calculate your scheme subsidy, minimum promoter margin, and optimal project quantum.
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
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All government subsidy approvals, PMEGP/CMEGP sanctions, and bank loans are subject to the independent appraisal, task force verification, and regulatory sanction guidelines of the respective government nodal agencies (KVIC, DIC) and lending financial institutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
