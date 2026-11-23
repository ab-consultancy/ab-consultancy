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
  Tractor,
  Sprout,
  Sun,
  Warehouse,
  Percent,
  Wheat
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

export default function AgricultureLoansPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Agriculture Loans & Agro-Infrastructure Finance Ahilyanagar | AB Consultancy",
    description: "Avail agriculture loans in Ahilyanagar & Maharashtra. Polyhouse, commercial dairy, poultry sheds, cold storage & drip irrigation finance with 3% AIF interest subvention, NABARD subsidies & bank-grade DPRs.",
    canonical: "https://www.abconsultancy.net.in/services/agriculture-loans",
    keywords: "Agriculture Loans Ahilyanagar, Agri Infrastructure Fund AIF Ahmednagar, Polyhouse Loan Maharashtra, Dairy Farm Project Finance Nagar, Poultry Shed Loan, Cold Storage Subsidy Consultant, NABARD Agri Project DPR Ahilyanagar"
  });

  // Comprehensive JSON-LD Structured Schema (FinancialProduct + LocalBusiness + FAQPage)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FinancialProduct",
          "@id": "https://www.abconsultancy.net.in/services/agriculture-loans#product",
          "name": "Agriculture Loans & Agro-Infrastructure Project Finance",
          "alternateName": "Agri Debt & AIF Interest Subvention Advisory",
          "description": "Comprehensive agricultural project financing and subsidy synchronization covering polyhouses, commercial dairy units, poultry farms, cold chain warehouses, and micro-irrigation across Ahilyanagar and Maharashtra.",
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
            { "@type": "City", "name": "Sangamner" },
            { "@type": "City", "name": "Kopargaon" },
            { "@type": "City", "name": "Shrirampur" },
            { "@type": "City", "name": "Rahata" },
            { "@type": "AdministrativeArea", "name": "Maharashtra" }
          ],
          "termsOfService": "Subject to land ownership 7/12 & 8A records, water availability, techno-economic feasibility, and lending bank underwriting.",
          "annualPercentageRate": "7.00% to 9.50% p.a. (with 3% AIF subvention effective 4.00%–6.50%)"
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.abconsultancy.net.in/services/agriculture-loans#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Agriculture Infrastructure Fund (AIF) scheme and how does it lower loan interest?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Agriculture Infrastructure Fund (AIF) is a central government scheme providing a 3% per annum interest subvention on bank term loans up to ₹2 Crores for post-harvest management projects, cold storages, sorting/grading units, and primary processing centers. The subvention is available for a maximum tenure of 7 years, effectively reducing the net borrowing rate to just 4%–6% p.a."
              }
            },
            {
              "@type": "Question",
              "name": "Can I get a loan for high-tech polyhouse and shade-net farming in Ahilyanagar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Banks fund up to 80%–85% of polyhouse and shade-net installation costs for horticulture and floriculture (Dutch roses, carnations, capsicum, seedless cucumbers). Projects also qualify for 50% capital subsidies under the National Horticulture Mission (NHM/MIDH), which is adjusted against the term loan."
              }
            },
            {
              "@type": "Question",
              "name": "What are the eligibility criteria for commercial dairy farming loans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Applicants must hold agricultural land with 7/12 extract, ensure assured perennial green fodder and water supply, and submit civil shed blueprints and quotes for crossbred cows or Murrah buffaloes. Projects with bulk milk chillers (BMC) and automated milking parlors qualify for subsidies under the AHIDF scheme."
              }
            },
            {
              "@type": "Question",
              "name": "Do agriculture infrastructure loans require agricultural land mortgaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For loans up to ₹2 Crores under AIF and CGTMSE, credit guarantee coverage is available to minimize or eliminate collateral mortgage requirements. For larger commercial cold storages or warehouse projects exceeding ₹2 Crores, primary charge on the project land, civil sheds, and machinery is standard."
              }
            },
            {
              "@type": "Question",
              "name": "How does AB Consultancy assist farmers and Farmer Producer Companies (FPCs)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We prepare bank-compliant techno-economic DPRs, coordinate soil and water testing certifications, align NHM/AIF/AHIDF capital subsidies, structure FPC governance models, and defend credit proposals directly before agricultural credit officers across commercial and cooperative banks."
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

  // 6 Institutional Agricultural Programs
  const agriPrograms = [
    {
      id: "polyhouse-horticulture",
      title: "1. Polyhouse, Shade-Net & Hi-Tech Horticulture Project Loan",
      category: "Protected Cultivation",
      summary: "Comprehensive capital funding for climate-controlled polyhouses, shade-net structures, automation controllers, and hi-tech horticulture crops.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹10 Crores", sub: null },
        { label: "Subsidy Benefit", value: "Up to 50%", sub: "Under NHM / MIDH" },
        { label: "Bank Funding", value: "80% to 85%", sub: "Of Total Project Cost" },
        { label: "Tenure", value: "5 to 8 Years", sub: "(Moratorium up to 12 Mos)" }
      ],
      points: [
        "Finances galvanized steel structures, UV-stabilized polythene, and misting systems",
        "Includes automated fertigation systems, foggers, and climate control units",
        "High profitability modeling for colored capsicum, gerbera, orchids, and Dutch roses"
      ],
      bestFor: "Progressive Farmers, Agri-Entrepreneurs, Floriculture & Exotic Vegetable Growers",
      icon: Sprout,
      badge: "Protected Cultivation"
    },
    {
      id: "commercial-dairy-farming",
      title: "2. Commercial Dairy Farm Setup & Milking Mechanization",
      category: "Dairy & Livestock",
      summary: "Term debt for establishing modern 20 to 200+ cattle dairy farms, automated milking parlors, cattle sheds, and Bulk Milk Chillers (BMC).",
      specs: [
        { label: "Loan Quantum", value: "₹15 Lakhs to\n₹15 Crores", sub: null },
        { label: "Interest Relief", value: "3% Subvention", sub: "AHIDF Central Scheme" },
        { label: "Herd Size", value: "10 to 500+", sub: "HF Cows / Murrah Buffaloes" },
        { label: "Tenure", value: "5 to 7 Years", sub: "(Moratorium up to 6 Mos)" }
      ],
      points: [
        "Finances animal purchase, modern shed civil construction, and silage storage bunkers",
        "Covers herringbone/rotary milking machines, dung scrapers, and milk testing units",
        "Direct tie-up models with cooperative milk federations and private dairies for milk buyback"
      ],
      bestFor: "Dairy Entrepreneurs, Milk Producer Groups, Livestock Farmers in Sangamner & Rahata",
      icon: Tractor,
      badge: "Dairy & Livestock"
    },
    {
      id: "poultry-farm-infrastructure",
      title: "3. Poultry Farm Infrastructure & Modern Shed Construction",
      category: "Poultry Farming",
      summary: "Capital debt for constructing environmentally controlled (EC) broiler sheds, layer houses, automated feeding systems, and hatchery setups.",
      specs: [
        { label: "Loan Quantum", value: "₹20 Lakhs to\n₹12 Crores", sub: null },
        { label: "Shed Type", value: "EC Closed / Open", sub: "Climate Controlled" },
        { label: "Capacity", value: "5,000 to 1,00,000+", sub: "Birds Per Batch" },
        { label: "Tenure", value: "5 to 8 Years", sub: "(Moratorium up to 9 Mos)" }
      ],
      points: [
        "Structured for commercial integration contract farming with top poultry corporates",
        "Finances automated nipple drinking, pan feeding systems, and cooling pad ventilation",
        "Ensures complete biosecurity layout compliance matching bank technical norms"
      ],
      bestFor: "Commercial Broiler Growers, Layer Egg Farmers, Poultry Integrators across Nagar",
      icon: Building2,
      badge: "Poultry Infrastructure"
    },
    {
      id: "cold-storage-warehouse",
      title: "4. Cold Storage, Ripening Chamber & Post-Harvest Warehouses",
      category: "Post-Harvest Supply Chain",
      summary: "Large-scale project finance for temperature-controlled cold storages, multi-commodity pack-houses, fruit ripening chambers, and grain godowns.",
      specs: [
        { label: "Loan Quantum", value: "₹50 Lakhs to\n₹25 Crores", sub: null },
        { label: "Interest Subvention", value: "3% p.a. AIF", sub: "For Up to ₹2 Cr Limit" },
        { label: "Capital Grant", value: "35% to 50%", sub: "MoFPI / MIDH Subsidies" },
        { label: "Tenure", value: "7 to 10 Years", sub: "(Moratorium up to 18 Mos)" }
      ],
      points: [
        "AIF (Agriculture Infrastructure Fund) 3% interest relief for 7 consecutive years",
        "Finances ammonia/freon refrigeration plants, insulated panels, and solar rooftop plants",
        "Essential infrastructure for onion, pomegranate, grape, and citrus clusters in Ahilyanagar"
      ],
      bestFor: "Cold Storage Promoters, Agri-Warehouse Operators, Exporters, Large FPCs",
      icon: Warehouse,
      badge: "Cold Chain & Logistics"
    },
    {
      id: "micro-irrigation-solar",
      title: "5. Micro-Irrigation, Drip Networks & Solar Agricultural Pumps",
      category: "Farm Mechanization",
      summary: "Affordable credit facilities for pressurized drip irrigation networks, sprinkler systems, farm ponds (Shet-Tale), and solar-powered water pumping stations.",
      specs: [
        { label: "Loan Quantum", value: "₹5 Lakhs to\n₹50 Lakhs", sub: null },
        { label: "State Subsidy", value: "Up to 55%–80%", sub: "PMKSY / MahaDBT Scheme" },
        { label: "Interest Rate", value: "7.00% – 8.50%", sub: "Priority Sector Lending" },
        { label: "Tenure", value: "3 to 5 Years", sub: "(Seasonal Repayment)" }
      ],
      points: [
        "High water-use efficiency reducing water consumption by 50% and boosting crop yield",
        "Direct integration with Maharashtra MahaDBT subsidy portals for direct benefit release",
        "Finances HDPE piping, sand filters, fertigation tanks, and solar PV pumping arrays"
      ],
      bestFor: "Small & Marginal Farmers, Sugarcane Growers, Orchard Farmers, Horticulture Units",
      icon: Sun,
      badge: "Irrigation & Solar"
    },
    {
      id: "fpc-agri-business",
      title: "6. Farmer Producer Company (FPC) & Agri-Business Centers",
      category: "Institutional Agri-Debt",
      summary: "Project term loans and working capital credit for Farmer Producer Organizations (FPOs/FPCs), input supply centers, grain grading, and custom hiring centers.",
      specs: [
        { label: "Loan Quantum", value: "₹25 Lakhs to\n₹10 Crores", sub: null },
        { label: "Equity Matching", value: "Up to ₹15 Lakhs", sub: "SFAC Equity Grant" },
        { label: "Guarantee", value: "NABKISAN / CGTMSE", sub: "Credit Guarantee Backing" },
        { label: "Interest Rate", value: "7.50% – 8.90%", sub: "Special Agri-Cluster Rate" }
      ],
      points: [
        "SFAC Equity Grant Scheme and Credit Guarantee Scheme integration",
        "Finances seed cleaning/grading lines, pulse processing (dal mill), and collective cold rooms",
        "Enables FPCs to achieve economies of scale and bypass local agricultural middlemen"
      ],
      bestFor: "Registered FPCs, Farmer Collectives, Agri-Graduates establishing Custom Hiring Units",
      icon: Wheat,
      badge: "FPC & Agri-Business"
    }
  ];

  // 6 Procedural Milestones
  const proceduralMilestones = [
    {
      number: "01",
      title: "Land Title & Water Feasibility Audit",
      stage: "STAGE 1 • FEASIBILITY",
      tag: "Land Scrutiny",
      desc: "Scrutiny of 7/12 & 8A extracts, land boundary, water yield report, soil suitability certificate, and electricity connectivity.",
      deliverable: "Deliverable: Agronomic & Legal Feasibility Report",
      borderColor: "#0062FF",
      tagBg: "bg-blue-50 text-[#0062FF] border-blue-100"
    },
    {
      number: "02",
      title: "Bank-Grade Agri DPR & Cash Flow Modeling",
      stage: "STAGE 2 • DPR MODELING",
      tag: "DPR Formulation",
      desc: "Detailed project report modeling crop cycle revenues, mortality risk, yield estimates, input costs, and 7-year DSCR viability.",
      deliverable: "Deliverable: Bank-Compliant Agricultural DPR",
      borderColor: "#0284C7",
      tagBg: "bg-sky-50 text-[#0284C7] border-sky-100"
    },
    {
      number: "03",
      title: "AIF / NHM / AHIDF Subsidy Integration",
      stage: "STAGE 3 • SUBSIDIES",
      tag: "Subsidy Mapping",
      desc: "Online portal registration under AIF (3% interest subvention), National Horticulture Mission (NHM), or AHIDF for maximum capital relief.",
      deliverable: "Deliverable: Formal In-Principle Subsidy Approval",
      borderColor: "#7C3AED",
      tagBg: "bg-purple-50 text-[#7C3AED] border-purple-100"
    },
    {
      number: "04",
      title: "Vendor Technical Quoting & Civil Blueprints",
      stage: "STAGE 4 • TECHNICALS",
      tag: "OEM Vetting",
      desc: "Gathering approved quotations for greenhouse fabrication, milking automation, poultry cages, and cold room refrigeration units.",
      deliverable: "Deliverable: Certified Engineering Cost Estimates",
      borderColor: "#10B981",
      tagBg: "bg-emerald-50 text-[#10B981] border-emerald-100"
    },
    {
      number: "05",
      title: "Agricultural Credit Committee Defense",
      stage: "STAGE 5 • UNDERWRITING",
      tag: "Bank Sanction",
      desc: "Presenting the project before the bank's rural credit officers, justifying agronomic viability, seasonal cycles, and repayment capability.",
      deliverable: "Deliverable: Formal Bank Agri Sanction Letter",
      borderColor: "#F97316",
      tagBg: "bg-orange-50 text-[#F97316] border-orange-100"
    },
    {
      number: "06",
      title: "Disbursement & Subsidy Release Escrow",
      stage: "STAGE 6 • DISBURSEMENT",
      tag: "Tranche Release",
      desc: "Executing mortgage/hypothecation documents, milestone-based direct payments to vendors, and subsidy fund tracking into loan account.",
      deliverable: "Deliverable: Project Fund Release & Subsidy Credit",
      borderColor: "#F43F5E",
      tagBg: "bg-rose-50 text-[#F43F5E] border-rose-100"
    }
  ];

  // 5 AEO/GEO FAQ Accordions
  const faqs = [
    {
      q: "What is the Agriculture Infrastructure Fund (AIF) scheme and how does it lower loan interest?",
      a: "The Agriculture Infrastructure Fund (AIF) is a central government scheme providing a 3% per annum interest subvention on bank term loans up to ₹2 Crores for post-harvest management projects, cold storages, sorting/grading units, and primary processing centers. The subvention is available for a maximum tenure of 7 years, effectively reducing the net borrowing rate to just 4%–6% p.a."
    },
    {
      q: "Can I get a loan for high-tech polyhouse and shade-net farming in Ahilyanagar?",
      a: "Yes. Banks fund up to 80%–85% of polyhouse and shade-net installation costs for horticulture and floriculture (Dutch roses, carnations, capsicum, seedless cucumbers). Projects also qualify for 50% capital subsidies under the National Horticulture Mission (NHM/MIDH), which is adjusted against the term loan."
    },
    {
      q: "What are the eligibility criteria for commercial dairy farming loans?",
      a: "Applicants must hold agricultural land with 7/12 extract, ensure assured perennial green fodder and water supply, and submit civil shed blueprints and quotes for crossbred cows or Murrah buffaloes. Projects with bulk milk chillers (BMC) and automated milking parlors qualify for subsidies under the AHIDF scheme."
    },
    {
      q: "Do agriculture infrastructure loans require agricultural land mortgaging?",
      a: "For loans up to ₹2 Crores under AIF and CGTMSE, credit guarantee coverage is available to minimize or eliminate collateral mortgage requirements. For larger commercial cold storages or warehouse projects exceeding ₹2 Crores, primary charge on the project land, civil sheds, and machinery is standard."
    },
    {
      q: "How does AB Consultancy assist farmers and Farmer Producer Companies (FPCs)?",
      a: "We prepare bank-compliant techno-economic DPRs, coordinate soil and water testing certifications, align NHM/AIF/AHIDF capital subsidies, structure FPC governance models, and defend credit proposals directly before agricultural credit officers across commercial and cooperative banks."
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
              <li className="text-slate-900 font-semibold" aria-current="page">Agriculture Loans</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Animated Eyebrow Badge */}
            <AnimatedBadge 
              icon={Sprout} 
              text="Agro-Infrastructure & Farm Project Debt • 3% AIF Interest Subvention" 
              isHero={true} 
            />

            {/* H1 Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Agriculture Loans & Agro-Infrastructure Finance in <span className="text-[#0062FF]">Ahilyanagar</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-bold text-slate-700 leading-snug">
              Fund Polyhouses, Commercial Dairy, Poultry Sheds & Cold Storage: ₹10 Lakhs to ₹25 Crores with 3% Central Interest Subvention & Up to 50% Subsidies.
            </p>

            {/* Paragraph */}
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              Modernize your agricultural operations with institutional bank credit. From climate-controlled polyhouses in Sangamner and high-tech dairy setups in Rahata to post-harvest cold storage chains across Ahilyanagar district, AB Consultancy provides techno-economic DPR preparation, AIF/NHM subsidy mapping, and seamless bank sanctions.
            </p>

            {/* Quick Facts Stat Strip */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Loan Quantum</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">₹10L – ₹25 Cr</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Capex & Working Capital</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">AIF Interest Relief</span>
                <span className="text-lg sm:text-xl font-black text-[#0062FF] mt-0.5 block">3.0% Subvention</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">On loans up to ₹2 Crores</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Capital Subsidy</span>
                <span className="text-lg sm:text-xl font-black text-emerald-600 mt-0.5 block">Up to 50%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">NHM / MIDH / AHIDF</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Repayment Tenure</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">5 to 10 Yrs</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Moratorium up to 18 Mos</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check Agri Loan & Subsidy Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book Agri DPR Consultation</span>
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
                AIF 3% Interest Subvention
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                NABARD & NHM Capital Grants
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Polyhouses, Dairy, Poultry & Cold Stores
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Farmer Producer Companies (FPCs) Eligible
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Bank Evaluation Framework */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Scale} text="Agricultural Underwriting Framework" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Banks Appraise & Sanction Agriculture Infrastructure Loans
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Agricultural credit committees assess land records, perennial water sources, crop/yield cycles, buyback tie-ups, and subsidy synchronization before sanctioning term debt.
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
                  What Are the Key Requisites for Agricultural Project Loan Approvals in Ahilyanagar?
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  Lenders mandate: (1) <strong>Valid 7/12 & 8A Land Records</strong> showing unencumbered ownership or registered long lease, (2) <strong>Perennial Water & Power Proof</strong> (borewell, open well, or canal lift with electricity bill), (3) <strong>Techno-Economic DPR</strong> modeling input costs, seasonal yield, market wholesale prices, and minimum 1.30 DSCR, (4) <strong>Vendor Equipment Quotations</strong> for greenhouse steel, milking units, or refrigeration machinery, and (5) <strong>Registration on Subsidy Portals</strong> (AIF, NHM, or MahaDBT).
                </p>
              </div>
            </div>
          </div>

          {/* 6 Point-to-Point Evaluation Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">01</span>
                <h3 className="text-sm font-bold text-slate-900">7/12 & 8A Land Title Scrutiny</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of non-encumbrance on land records, mutation entries (Ferfar), no existing co-operative society charges, and clear access road connectivity.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">02</span>
                <h3 className="text-sm font-bold text-slate-900">Perennial Water & Soil Analysis</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified water quality and soil suitability lab reports confirming safe TDS and pH levels for polyhouse floriculture, dairy livestock, or poultry bird health.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">03</span>
                <h3 className="text-sm font-bold text-slate-900">Techno-Economic Feasibility DPR</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A professional DPR incorporating seasonal harvest yields, animal mortality rates, market pricing sensitivity, operating expenses, and cash flow DSCR.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">04</span>
                <h3 className="text-sm font-bold text-slate-900">AIF 3% Interest Subvention Portal</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-sanction registration on the Central Agriculture Infrastructure Fund portal to lock in the 3% interest relief on loans up to ₹2 Crores for 7 years.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">05</span>
                <h3 className="text-sm font-bold text-slate-900">OEM Quotations & Civil Blueprints</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed civil drawings and quotes from empanelled vendors for greenhouse fabrication, poultry closed sheds, milking parlors, or cold room compressors.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">06</span>
                <h3 className="text-sm font-bold text-slate-900">Crop / Cattle Insurance Coverage</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandatory risk mitigation via comprehensive livestock insurance for cattle, polyhouse asset cover against storms, and Pradhan Mantri Fasal Bima Yojana (PMFBY).
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
                <AnimatedBadge icon={ShieldCheck} text="Agro-Project Pre-Procurement Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Agricultural Loan Feasibility & Subsidy Pre-Audit
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid bank rejections or missed subsidy grants. Our agricultural pre-audit verifies land title readiness, reviews irrigation capacity, structures AIF/NHM subsidies, and drafts a bank-grade DPR.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "7/12 & 8A Land Record Clear Title Verification",
                    "Agriculture Infrastructure Fund (AIF) 3% Subvention Mapping",
                    "National Horticulture Mission (NHM/MIDH) 50% Subsidy Alignment",
                    "Techno-Economic DPR with 7-Year DSCR & Sensitivity Modeling",
                    "Greenhouse / Dairy / Cold Storage OEM Proforma Vetting",
                    "Credit Guarantee (CGTMSE / NABKISAN) Collateral Relief Structuring"
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
                    <span>Request Agri Pre-Audit</span>
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
                      3–5 <span className="text-[#60A5FA] font-bold text-lg sm:text-xl">Days</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Agri DPR & Subsidy Modeling
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average preliminary assessment, vendor quote review, and bank-grade DPR turnaround.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      ₹180<span className="text-slate-400 font-bold text-lg sm:text-xl">+ Cr</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Agri Loans & Subsidies Facilitated
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Direct capital subsidies and low-interest project credit realized for farmers and FPCs.
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
                  <span>Bank-Grade Agricultural Models</span>
                  <span>AIF & NABARD Aligned</span>
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
              6-Step Agricultural Financing & Subsidy Roadmap
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              From land record scrutiny and DPR modeling to credit sanction, AIF subsidy tagging, and fund release.
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
                <Sprout className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                Agri Project Debt
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                3% AIF Subvention
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
                  STAGE 1 • FEASIBILITY
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0062FF] border border-blue-100">
                  Land Scrutiny
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Land Title & Water Feasibility Audit
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Scrutiny of 7/12 & 8A extracts, land boundary, water yield report, soil suitability certificate, and electricity connectivity.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0062FF] flex items-center gap-1">
                <span>Deliverable: Agronomic & Legal Feasibility Report</span>
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
                  Bank-Grade Agri DPR & Cash Flow Modeling
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Detailed project report modeling crop cycle revenues, mortality risk, yield estimates, input costs, and 7-year DSCR viability.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0284C7] flex items-center gap-1">
                <span>Deliverable: Bank-Compliant Agricultural DPR</span>
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
                  STAGE 3 • SUBSIDIES
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-100">
                  Subsidy Mapping
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  AIF / NHM / AHIDF Subsidy Integration
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Online portal registration under AIF (3% interest subvention), National Horticulture Mission (NHM), or AHIDF for maximum capital relief.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#7C3AED] flex items-center gap-1">
                <span>Deliverable: Formal In-Principle Subsidy Approval</span>
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
                  STAGE 4 • TECHNICALS
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-100">
                  OEM Vetting
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Vendor Technical Quoting & Civil Blueprints
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Gathering approved quotations for greenhouse fabrication, milking automation, poultry cages, and cold room refrigeration units.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981] flex items-center gap-1">
                <span>Deliverable: Certified Engineering Cost Estimates</span>
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
                  STAGE 5 • UNDERWRITING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100">
                  Bank Sanction
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Agricultural Credit Committee Defense
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Presenting the project before the bank's rural credit officers, justifying agronomic viability, seasonal cycles, and repayment capability.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316] flex items-center gap-1">
                <span>Deliverable: Formal Bank Agri Sanction Letter</span>
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
                  STAGE 6 • DISBURSEMENT
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-[#F43F5E] border border-rose-100">
                  Tranche Release
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Disbursement & Subsidy Release Escrow
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Executing mortgage/hypothecation documents, milestone-based direct payments to vendors, and subsidy fund tracking into loan account.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F43F5E] flex items-center gap-1">
                <span>Deliverable: Project Fund Release & Subsidy Credit</span>
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

      {/* 5. 6 Institutional Agricultural Programs */}
      <section className="py-12 sm:py-20 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <AnimatedBadge icon={Building2} text="Specialized Agro-Debt Facilities" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6 Tailored Agricultural & Infrastructure Debt Programs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore bank credit facilities aligned with central/state schemes for horticulture, livestock, poultry, cold chain, and solar irrigation.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {agriPrograms.map((prog, idx) => {
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
                          Key Operational Highlights
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
                  15+ Years of Bank Advisory & Agricultural Debt Structuring
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Navigating agrarian risk modeling, NABARD guidelines, and multi-tier subsidy release portals requires specialized knowledge. AB Consultancy bridges the gap between progressive farmers and institutional banking committees.
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
                    <span>Bank-grade DPRs modeling seasonal crop cash flows & 7-year DSCR.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Direct portal filing on AIF, NHM, and AHIDF for prompt subsidy tagging.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Up to 18-month gestation moratorium negotiation to protect initial harvest.</span>
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
              3-Stage Agricultural Advisory Workflow
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our structured protocol accelerates loan sanctions and synchronizes subsidy payouts seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P1
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 1: DPR & Subsidy Tagging</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We review 7/12 land papers, water sources, and equipment proformas. We prepare a detailed techno-economic DPR and register the proposal on the AIF/NHM portal.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 3–5 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P2
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 2: Bank Appraisal & Defense</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We submit the dossier to regional agricultural credit cells, coordinate site inspections, resolve legal title queries, and secure the in-principle sanction.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 7–12 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P3
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 3: Sanction & Tranche Payouts</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We coordinate loan agreement signing, mortgage/hypothecation charge creation, milestone payouts to OEMs, and post-sanction subsidy claim tracking.
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
              Agricultural Project Document Checklist
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Compile these primary documents to ensure rapid processing by bank credit and technical officers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Sprout className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">1. Land & Water Records</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Latest 7/12 & 8A Extract (within 3 mos)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Mutation Entries (Ferfar नोंदी)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Certified Soil & Water Test Lab Report</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Borewell / Well electricity bills & pump proof</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Tractor className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">2. Technical & Civil</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Polyhouse / Shed Civil Blueprints</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Certified Engineer / Architect Cost Estimate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Machinery OEM Proforma Invoices</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Breeder / Livestock Quotation (if dairy/poultry)</span>
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
                  <span>Last 3 years ITR & Agricultural Income Proof</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 12 months Bank Account Statements</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Existing KCC & crop loan track record</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Proof of promoter margin capital</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">4. KYC & Entity Documents</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Farmer PAN, Aadhaar & Voter ID</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>FPC Certificate of Incorporation & MOA/AOA</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Buyback / Corporate Off-Take Agreement</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>AIF / MahaDBT Registration Acknowledgement</span>
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
              Agriculture Loans Advisory FAQs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear answers regarding AIF interest subvention, polyhouse subsidies, dairy loans, and bank DPR requirements.
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
                  Consult Our Agricultural Advisory Desk in Ahilyanagar
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bring your 7/12 extract, water test reports, and vendor equipment quotations to our Ahilyanagar office for a direct DPR and subsidy evaluation.
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
                  Fast preliminary assessment to calculate your loan quantum, AIF 3% interest relief, and applicable capital grants.
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
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All agriculture loans, Kisan Credit Cards, AIF interest subventions, and capital grants are subject to the independent credit evaluation, land scrutiny, and sanction policies of the respective lending banks and government nodal agencies.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
