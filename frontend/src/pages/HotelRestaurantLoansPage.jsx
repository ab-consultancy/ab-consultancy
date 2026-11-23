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
  UtensilsCrossed,
  Coffee,
  BedDouble,
  Sparkles,
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

export default function HotelRestaurantLoansPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO, AEO & GEO Optimized Metadata
  useSEO({
    title: "Hotel & Restaurant Loans Ahilyanagar | Hospitality Project Finance",
    description: "Finance restaurants, highway dhabas, banquet lawns & boutique hotels in Ahilyanagar & Maharashtra. ₹20 Lakhs to ₹25 Crores term debt, commercial kitchen equipment, interior fit-outs & working capital advisory.",
    canonical: "https://www.abconsultancy.net.in/services/hotel-restaurant-loans",
    keywords: "Hotel Loans Ahilyanagar, Restaurant Loan Ahmednagar, Highway Dhaba Finance Nagar Pune Highway, Banquet Hall Capex Loan, Cloud Kitchen Funding, Hospitality Project DPR Consultant Maharashtra, Commercial Kitchen Equipment Finance"
  });

  // Comprehensive JSON-LD Structured Schema (FinancialProduct + LocalBusiness + FAQPage)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FinancialProduct",
          "@id": "https://www.abconsultancy.net.in/services/hotel-restaurant-loans#product",
          "name": "Hotel & Restaurant Loans Advisory Services",
          "alternateName": "Hospitality Project Finance & Capex Debt Advisory",
          "description": "Comprehensive bank debt structuring for hospitality entrepreneurs covering commercial kitchen machinery, dining interior fit-outs, banquet lawn development, and boutique hotel civil construction across Ahilyanagar and Maharashtra.",
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
            { "@type": "City", "name": "Shirdi" },
            { "@type": "City", "name": "Pune" },
            { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
            { "@type": "AdministrativeArea", "name": "Maharashtra" }
          ],
          "termsOfService": "Subject to site lease/title clearance, FSSAI/Fire/Local body permissions, and bank credit underwriting.",
          "annualPercentageRate": "9.25% to 11.25% p.a."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.abconsultancy.net.in/services/hotel-restaurant-loans#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What can be funded under a hotel or restaurant loan in Ahilyanagar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hospitality loans cover both capital expenditures (civil construction, dining interiors, HVAC, commercial kitchen appliances, cold storage, generators, and billing POS systems) and operational working capital (inventory, food supplies, and initial staff payroll). Banks fund 75% to 85% of total project cost based on a techno-economic DPR."
              }
            },
            {
              "@type": "Question",
              "name": "Can I get a loan for a leased restaurant or dhaba property?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. If the property is leased, banks require a registered lease agreement with a minimum tenure matching or exceeding the loan repayment period (typically 5 to 9 years) along with a Landlord NOC for commercial operation and interior modifications."
              }
            },
            {
              "@type": "Question",
              "name": "Is collateral-free funding available under CGTMSE for restaurants and food businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Micro and small food service enterprises (cloud kitchens, bakeries, cafes, and family restaurants) can access collateral-free term loans and working capital up to ₹5 Crores under the CGTMSE scheme, where the primary security is the kitchen equipment and hypothecation of business assets."
              }
            },
            {
              "@type": "Question",
              "name": "What licenses and statutory clearances are needed before bank disbursement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Key approvals include FSSAI food license, Municipal/Grampanchayat trade license (Gumasta), Fire Department NOC, building plan approval with commercial/hospitality NA order, and State Excise Bar License (if serving alcohol)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the typical repayment tenure and moratorium for hotel & restaurant loans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Repayment tenures range from 5 to 10 years. Banks provide a fit-out or construction moratorium of 6 to 18 months, during which only simple interest is charged until commercial operations commence and revenue begins flowing."
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

  // 6 Institutional Hospitality Programs
  const hospitalityPrograms = [
    {
      id: "restaurant-cafe-setup",
      title: "1. Fine-Dining, Family Restaurant & Café Setup Loan",
      category: "Restaurant Infrastructure",
      summary: "Comprehensive capital expenditure funding for urban dining restaurants, family eateries, rooftop lounges, and premium coffee shops.",
      specs: [
        { label: "Loan Quantum", value: "₹20 Lakhs to\n₹5 Crores", sub: null },
        { label: "Bank Funding", value: "Up to 80%–85%", sub: "Of Total Capex" },
        { label: "Tenure", value: "5 to 7 Years", sub: "(Moratorium up to 6 Mos)" },
        { label: "Collateral", value: "CGTMSE / Property", sub: "Collateral-Free to ₹5 Cr" }
      ],
      points: [
        "Finances stainless steel commercial kitchens, tandoor/bake ovens, and chillers",
        "Covers acoustic interiors, premium furniture, lighting, HVAC, and POS setups",
        "Fast-track processing for urban hubs in Ahilyanagar city, Savedi, and MIDC sectors"
      ],
      bestFor: "Family Dine-in, Multi-Cuisine Restaurants, Theme Cafés, Rooftop Lounges",
      icon: UtensilsCrossed,
      badge: "Restaurant & Café"
    },
    {
      id: "highway-dhaba-resort",
      title: "2. Highway Dhaba & Family Garden Restaurant Finance",
      category: "Corridor Hospitality",
      summary: "Targeted project debt for sprawling highway garden restaurants, family dhabas, and traveler food plazas on busy state and national highways.",
      specs: [
        { label: "Loan Quantum", value: "₹35 Lakhs to\n₹12 Crores", sub: null },
        { label: "Land Zone", value: "Commercial NA", sub: "Or Highway NOC" },
        { label: "Tenure", value: "5 to 8 Years", sub: "(Moratorium up to 9 Mos)" },
        { label: "Subsidies", value: "State Tourism", sub: "Incentives Mapped" }
      ],
      points: [
        "Structured for high-traffic corridors: Nagar-Pune, Nagar-Shirdi, and Nagar-Aurangabad",
        "Finances open-air gazebos, heavy kitchen setups, paved parking, and children play zones",
        "Includes funding for high-capacity borewells, solar power plants, and backup generators"
      ],
      bestFor: "Highway Dhabas, Garden Restaurants, Highway Food Courts, Transit Plazas",
      icon: Store,
      badge: "Highway Corridor"
    },
    {
      id: "boutique-hotel-lodging",
      title: "3. Boutique Hotel, Pilgrim Lodging & Resort Project Debt",
      category: "Accommodation Capex",
      summary: "Large-scale project term debt for constructing, expanding, or renovating boutique hotels, guest lodges, and pilgrim stay facilities in Shirdi and Ahilyanagar.",
      specs: [
        { label: "Loan Quantum", value: "₹1 Crore to\n₹25 Crores", sub: null },
        { label: "Promoter Margin", value: "20% to 25%", sub: "Promoter Equity" },
        { label: "Tenure", value: "7 to 10 Years", sub: "(Moratorium up to 18 Mos)" },
        { label: "Interest Rate", value: "9.25% – 10.50%", sub: "Institutional Term Debt" }
      ],
      points: [
        "Civil construction financing for multi-storey hotel structures and luxury suites",
        "In-depth RevPAR (Revenue Per Available Room) and occupancy modeling in DPR",
        "Moratorium structured until occupancy readiness and formal ribbon-cutting"
      ],
      bestFor: "Hotel Promoters, Shirdi Pilgrim Lodges, Business Hotels, Eco-Resorts",
      icon: BedDouble,
      badge: "Hotel & Lodging"
    },
    {
      id: "banquet-hall-lawn",
      title: "4. Banquet Hall, Convention Center & Event Lawn Capex",
      category: "Event Infrastructure",
      summary: "Long-term capital funding for building grand marriage halls, air-conditioned banquet convention centers, and landscaped celebration lawns.",
      specs: [
        { label: "Loan Quantum", value: "₹75 Lakhs to\n₹15 Crores", sub: null },
        { label: "Repayment", value: "Up to 8 Years", sub: "(Season-Linked Repayment)" },
        { label: "Security", value: "Lawn Land / Shed", sub: "Hypothecation & Mortgage" },
        { label: "Fit-Out", value: "HVAC & Stage", sub: "Fully Covered in Capex" }
      ],
      points: [
        "Finances steel prefabricated banquet sheds, sound/lighting systems, and bridal suites",
        "Mass catering kitchen equipment, cold storage, and heavy-duty DG power backup",
        "Cash-flow structuring adapted to wedding season highs and lean month variations"
      ],
      bestFor: "Wedding Halls, Corporate Convention Spaces, Celebration Lawns, Party Venues",
      icon: Sparkles,
      badge: "Banquets & Events"
    },
    {
      id: "cloud-kitchen-qsr",
      title: "5. Cloud Kitchen & Quick-Service Restaurant (QSR) Expansion",
      category: "Delivery & QSR Models",
      summary: "Fast-turnaround term loans and credit lines for multi-brand cloud kitchens, takeaway kiosks, delivery-first hubs, and fast-food franchise outlets.",
      specs: [
        { label: "Loan Quantum", value: "₹10 Lakhs to\n₹3 Crores", sub: null },
        { label: "Collateral", value: "Zero (CGTMSE)", sub: "100% Primary Security" },
        { label: "Tenure", value: "3 to 5 Years", sub: "(Working Capital Line)" },
        { label: "Turnaround", value: "7 to 10 Days", sub: "Expedited Processing" }
      ],
      points: [
        "Capital finance for combi-ovens, high-speed fryers, packaging automation, and blast chillers",
        "Includes franchise fee funding and brand security deposits for top food chains",
        "Working capital limits linked to Swiggy/Zomato daily settlement receivables"
      ],
      bestFor: "Cloud Kitchen Operators, Food Franchisees, Bakery Chains, Fast-Food Kiosks",
      icon: Coffee,
      badge: "Cloud Kitchens & QSR"
    },
    {
      id: "working-capital-liquidity",
      title: "6. Hospitality Working Capital & Raw Material Credit Line",
      category: "Operational Cash Flow",
      summary: "Dedicated Cash Credit (CC) limits and revolving overdrafts to manage raw food procurement, dairy/poultry supplies, beverage inventory, and peak season staffing.",
      specs: [
        { label: "Facility Type", value: "Cash Credit (CC)", sub: "Revolving Overdraft" },
        { label: "Quantum", value: "₹15 Lakhs to\n₹5 Crores", sub: "Linked to Annual Turnover" },
        { label: "Security", value: "Stock & Receivables", sub: "Monthly Stock Hypothecation" },
        { label: "Interest Rate", value: "9.50% – 10.75%", sub: "Pay Only on Utilized Amount" }
      ],
      points: [
        "Provides liquid funds to buy wholesale ingredients at bulk volume discounts",
        "Buffers cash flow lags between wedding banquet advance bookings and final settlement",
        "Annual renewal with simplified documentation based on GST turnover verification"
      ],
      bestFor: "Active Hoteliers, Caterers, Banquet Operators, Established Restaurants",
      icon: Coins,
      badge: "Working Capital"
    }
  ];

  // 6 Procedural Milestones
  const proceduralMilestones = [
    {
      number: "01",
      title: "Concept, Site Feasibility & Layout Review",
      stage: "STAGE 1 • CONCEPT",
      tag: "Site Feasibility",
      desc: "Scrutiny of commercial NA land title or registered lease deed, seating capacity layout, footfall potential, and architect cost estimates.",
      deliverable: "Deliverable: Project Viability & Capex Budgeting",
      borderColor: "#0062FF",
      tagBg: "bg-blue-50 text-[#0062FF] border-blue-100"
    },
    {
      number: "02",
      title: "Bank-Grade Hospitality DPR Compilation",
      stage: "STAGE 2 • DPR MODELING",
      tag: "DPR Formulation",
      desc: "Detailed project report modeling kitchen equipment proformas, RevPAR, average cover spends (APC), table turnover, and 7-year DSCR.",
      deliverable: "Deliverable: Bank-Compliant Hospitality DPR",
      borderColor: "#0284C7",
      tagBg: "bg-sky-50 text-[#0284C7] border-sky-100"
    },
    {
      number: "03",
      title: "Statutory Licensing & Clearance Scrutiny",
      stage: "STAGE 3 • COMPLIANCE",
      tag: "Statutory Audit",
      desc: "Validating FSSAI registration, Municipal/Gumasta trade license, Fire Department clearance, and State Excise approvals.",
      deliverable: "Deliverable: Statutory Compliance Verification",
      borderColor: "#7C3AED",
      tagBg: "bg-purple-50 text-[#7C3AED] border-purple-100"
    },
    {
      number: "04",
      title: "CGTMSE & Bank Selection Optimization",
      stage: "STAGE 4 • STRUCTURING",
      tag: "Credit Guarantee",
      desc: "Selecting the optimal PSU/Private lender and structuring collateral-free CGTMSE guarantee up to ₹5 Cr or collateralized LAP synergy.",
      deliverable: "Deliverable: Optimal Debt & Guarantee Structure",
      borderColor: "#10B981",
      tagBg: "bg-emerald-50 text-[#10B981] border-emerald-100"
    },
    {
      number: "05",
      title: "Credit Committee Defense & Sanction",
      stage: "STAGE 5 • UNDERWRITING",
      tag: "Bank Defense",
      desc: "Direct presentation before bank credit committees, defending hospitality cash flows, seasonal sensitivity, and promoter experience.",
      deliverable: "Deliverable: In-Principle Bank Sanction Letter",
      borderColor: "#F97316",
      tagBg: "bg-orange-50 text-[#F97316] border-orange-100"
    },
    {
      number: "06",
      title: "Tranche Disbursement to Vendors",
      stage: "STAGE 6 • DISBURSEMENT",
      tag: "Vendor Payouts",
      desc: "Execution of loan agreements, charge creation, and phase-wise direct payment releases to kitchen equipment OEMs and civil contractors.",
      deliverable: "Deliverable: Milestone-Based Project Capital Release",
      borderColor: "#F43F5E",
      tagBg: "bg-rose-50 text-[#F43F5E] border-rose-100"
    }
  ];

  // 5 AEO/GEO FAQ Accordions
  const faqs = [
    {
      q: "What can be funded under a hotel or restaurant loan in Ahilyanagar?",
      a: "Hospitality loans cover both capital expenditures (civil construction, dining interiors, HVAC, commercial kitchen appliances, cold storage, generators, and billing POS systems) and operational working capital (inventory, food supplies, and initial staff payroll). Banks fund 75% to 85% of total project cost based on a techno-economic DPR."
    },
    {
      q: "Can I get a loan for a leased restaurant or dhaba property?",
      a: "Yes. If the property is leased, banks require a registered lease agreement with a minimum tenure matching or exceeding the loan repayment period (typically 5 to 9 years) along with a Landlord NOC for commercial operation and interior modifications."
    },
    {
      q: "Is collateral-free funding available under CGTMSE for restaurants and food businesses?",
      a: "Yes! Micro and small food service enterprises (cloud kitchens, bakeries, cafes, and family restaurants) can access collateral-free term loans and working capital up to ₹5 Crores under the CGTMSE scheme, where the primary security is the kitchen equipment and hypothecation of business assets."
    },
    {
      q: "What licenses and statutory clearances are needed before bank disbursement?",
      a: "Key approvals include FSSAI food license, Municipal/Grampanchayat trade license (Gumasta), Fire Department NOC, building plan approval with commercial/hospitality NA order, and State Excise Bar License (if serving alcohol)."
    },
    {
      q: "What is the typical repayment tenure and moratorium for hotel & restaurant loans?",
      a: "Repayment tenures range from 5 to 10 years. Banks provide a fit-out or construction moratorium of 6 to 18 months, during which only simple interest is charged until commercial operations commence and revenue begins flowing."
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
              <li className="text-slate-900 font-semibold" aria-current="page">Hotel & Restaurant Loans</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Animated Eyebrow Badge */}
            <AnimatedBadge 
              icon={UtensilsCrossed} 
              text="Hospitality Debt Advisory • Restaurants, Dhabas, Hotels & Banquets" 
              isHero={true} 
            />

            {/* H1 Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Hotel & Restaurant Loans in <span className="text-[#0062FF]">Ahilyanagar</span> & Maharashtra
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-bold text-slate-700 leading-snug">
              Fund Kitchen Capex, Dining Interiors & Civil Construction: ₹20 Lakhs to ₹25 Crores at 9.25%–11.25% with Up to 18-Month Moratorium.
            </p>

            {/* Paragraph */}
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl">
              Turn your hospitality vision into a profitable reality. We specialize in bank project finance for fine-dining restaurants, Nagar-Pune highway dhabas, Shirdi pilgrim hotels, wedding banquet halls, and multi-brand cloud kitchens. AB Consultancy structures bank-ready DPRs, secures collateral-free CGTMSE coverage up to ₹5 Cr, and manages complete bank liaison.
            </p>

            {/* Quick Facts Stat Strip */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Loan Quantum</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">₹20L – ₹25 Cr</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Capex + Working Capital</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Bank Funding</span>
                <span className="text-lg sm:text-xl font-black text-[#0062FF] mt-0.5 block">75% to 85%</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Of total project budget</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">Moratorium Period</span>
                <span className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 block">6 to 18 Mos</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">During setup & fit-out</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">CGTMSE Coverage</span>
                <span className="text-lg sm:text-xl font-black text-emerald-600 mt-0.5 block">Up to ₹5 Cr</span>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Collateral-free eligible</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onCheckEligibility}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#0062FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Check Hospitality Loan Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book DPR Consultation</span>
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
                Kitchen Equipment & Interior Fit-Outs
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Leased & Freehold Properties Funded
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                Up to 18 Months Fit-Out Moratorium
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#0062FF]" />
                FSSAI, Fire & Gumasta Licensing Support
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Bank Evaluation Framework */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <AnimatedBadge icon={Scale} text="Hospitality Underwriting Framework" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Banks Appraise & Sanction Hotel & Restaurant Debt
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hospitality underwriting differs sharply from retail loans. Credit officers examine location footfall, table turnaround, chef credentials, vendor quotations, and operational break-even models.
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
                  What Do Banks Evaluate When Approving Restaurant and Hotel Loans in Maharashtra?
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  Banks evaluate: (1) <strong>Location & Demographics</strong> (highway traffic, city commercial density, or pilgrim proximity in Shirdi), (2) <strong>Project Feasibility & DPR</strong> (justifying Average Per Cover - APC, RevPAR, and food cost margins under 35%), (3) <strong>Promoter Hospitality Experience</strong>, (4) <strong>Premises Security</strong> (freehold property or minimum 5–9 year registered lease with Landlord NOC), and (5) <strong>Statutory Compliance</strong> (FSSAI, Fire NOC, Municipal Gumasta, and commercial electricity load).
                </p>
              </div>
            </div>
          </div>

          {/* 6 Point-to-Point Evaluation Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">01</span>
                <h3 className="text-sm font-bold text-slate-900">Feasibility DPR & Table Economics</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A professional DPR presenting seating capacity, table turnaround speed, expected revenue per cover (APC), beverage margins, and projected 5-year profit and loss.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">02</span>
                <h3 className="text-sm font-bold text-slate-900">Commercial Lease or Property Title</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered lease agreement of at least 5 to 9 years with lock-in period and Landlord NOC for commercial dining modifications, or 30-year clear title for owned plots.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">03</span>
                <h3 className="text-sm font-bold text-slate-900">Kitchen Proformas & Civil Estimates</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Signed vendor proforma invoices for stainless steel kitchens, commercial exhaust ducts, HVAC, refrigeration, and certified architect cost estimates for interiors.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">04</span>
                <h3 className="text-sm font-bold text-slate-900">DSCR & Moratorium Modeling (1.35+)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Financial modeling proving sufficient cash flow to achieve minimum 1.35 DSCR after the 6-to-18-month fit-out moratorium expires and operations reach steady state.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">05</span>
                <h3 className="text-sm font-bold text-slate-900">Statutory Licensing Clearances</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of FSSAI food safety license, Local Body Trade License, Fire Department NOC for kitchens, commercial electricity sanction, and police/entertainment licenses.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#0062FF] font-bold text-xs flex items-center justify-center">06</span>
                <h3 className="text-sm font-bold text-slate-900">Primary Asset Hypothecation</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Primary security via exclusive hypothecation of all commercial kitchen machinery, dining furniture, HVAC plant, and POS electronics funded through the bank term loan.
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
                <AnimatedBadge icon={ShieldCheck} text="Hospitality Pre-Procurement Audit" className="mb-3" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Hospitality Loan Feasibility & Capex Pre-Audit
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid bank delays or high margin demands. Our preliminary audit validates kitchen equipment quotes, models seating revenue projections, examines lease legality, and compiles a bulletproof DPR.
                </p>

                {/* Point-to-Point Deliverables */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Architect Interior & Civil Cost Estimate Validation",
                    "Commercial Kitchen Equipment OEM Proforma Vetting",
                    "Lease Deed Lock-in & Landlord NOC Clause Review",
                    "Break-Even Table Cover (APC) & RevPAR Sensitivity Modeling",
                    "CGTMSE Collateral-Free Scheme Coverage Structuring (Up to ₹5 Cr)",
                    "FSSAI, Fire & Municipal Licensing Roadmapping"
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
                    <span>Request Hospitality Pre-Audit</span>
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
                      Hospitality DPR & Feasibility
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Average preliminary assessment, equipment vetting, and bank-grade DPR turnaround.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="py-3.5 first:pt-2.5 last:pb-2.5">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      ₹180<span className="text-slate-400 font-bold text-lg sm:text-xl">+ Cr</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Hospitality & Project Debt Advised
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Structured for restaurants, hotels, marriage lawns, and food enterprises across Maharashtra.
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
                  <span>Bank-Grade Hospitality Models</span>
                  <span>RBI & CGTMSE Aligned</span>
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
              6-Step Hospitality Loan Sanction Roadmap
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              From site feasibility and DPR formulation to credit committee sanction and direct vendor disbursement.
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
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="text-[12px] font-black text-[#10264F] tracking-tight leading-tight">
                Hospitality Debt
              </div>
              <div className="text-[9px] font-bold text-[#1769E8] uppercase tracking-wider mt-0.5">
                Advisory Hub
              </div>
              <div className="mt-1 text-[8.5px] font-medium text-slate-400">
                Up to 85% Project Funding
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
                  STAGE 1 • CONCEPT
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0062FF] border border-blue-100">
                  Site Feasibility
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Concept, Site Feasibility & Layout Review
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Scrutiny of commercial NA land title or registered lease deed, seating capacity layout, footfall potential, and architect cost estimates.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0062FF] flex items-center gap-1">
                <span>Deliverable: Project Viability & Capex Budgeting</span>
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
                  Bank-Grade Hospitality DPR Compilation
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Detailed project report modeling kitchen equipment proformas, RevPAR, average cover spends (APC), table turnover, and 7-year DSCR.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#0284C7] flex items-center gap-1">
                <span>Deliverable: Bank-Compliant Hospitality DPR</span>
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
                  STAGE 3 • COMPLIANCE
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-100">
                  Statutory Audit
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Statutory Licensing & Clearance Scrutiny
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Validating FSSAI registration, Municipal/Gumasta trade license, Fire Department clearance, and State Excise approvals.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#7C3AED] flex items-center gap-1">
                <span>Deliverable: Statutory Compliance Verification</span>
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
                  STAGE 4 • STRUCTURING
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-100">
                  Credit Guarantee
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  CGTMSE & Bank Selection Optimization
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Selecting the optimal PSU/Private lender and structuring collateral-free CGTMSE guarantee up to ₹5 Cr or collateralized LAP synergy.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#10B981] flex items-center gap-1">
                <span>Deliverable: Optimal Debt & Guarantee Structure</span>
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
                  Bank Defense
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Credit Committee Defense & Sanction
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Direct presentation before bank credit committees, defending hospitality cash flows, seasonal sensitivity, and promoter experience.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F97316] flex items-center gap-1">
                <span>Deliverable: In-Principle Bank Sanction Letter</span>
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
                  Vendor Payouts
                </span>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                  Tranche Disbursement to Vendors
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Execution of loan agreements, charge creation, and phase-wise direct payment releases to kitchen equipment OEMs and civil contractors.
                </p>
              </div>
              <div className="text-[10px] font-bold text-[#F43F5E] flex items-center gap-1">
                <span>Deliverable: Milestone-Based Project Capital Release</span>
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

      {/* 5. 6 Institutional Programs */}
      <section className="py-12 sm:py-20 bg-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <AnimatedBadge icon={Building2} text="Specialized Hospitality Solutions" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6 Tailored Hotel & Restaurant Loan Programs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted debt structures engineered for restaurants, highway corridors, boutique hotels, event lawns, and delivery kitchens.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {hospitalityPrograms.map((prog, idx) => {
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
                  15+ Years of Bank Advisory & Hospitality Debt Structuring
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Hospitality capex carries unique risk perceptions among lenders. We combine certified engineering appraisals, hospitality industry P&L benchmarking, and direct credit committee defense across 40+ banks.
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
                    <span>Bank-grade DPRs modeling RevPAR, table turnaround, and seasonal cash flow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Collateral-free CGTMSE structuring up to ₹5 Crores for eligible food units.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Up to 18-month fit-out moratorium negotiation to protect early cash flow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Milestone-based professional fee structure with zero hidden charges.</span>
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
              3-Stage Hospitality Financing Workflow
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our end-to-end framework bridges promoter culinary vision with strict bank credit approval requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P1
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 1: DPR & Capex Formulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We review vendor equipment proformas, architect estimates, seating layout, and lease clauses. We formulate a comprehensive DPR with DSCR and break-even analysis.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 3–5 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P2
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 2: Bank Appraisal & Defense</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We log the application with chosen PSU/Private credit teams, defend the hospitality model, resolve technical query memos, and secure in-principle sanction.
              </p>
              <div className="text-[11px] font-bold text-[#0062FF]">Timeline: 7–12 Working Days</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0062FF] font-black text-xs flex items-center justify-center mb-4">
                P3
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phase 3: Sanction & Tranche Payouts</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We facilitate documentation, CGTMSE guarantee filing or mortgage creation, and milestone disbursements directly to equipment OEMs and fit-out contractors.
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
              Hospitality Loan Document Checklist
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prepare these primary records to fast-track credit committee appraisal and DPR filing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">1. Property & Lease</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Registered Lease Deed (Min 5–9 Yrs)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Landlord NOC for Commercial Operation</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Title deeds & 7/12 (if owned plot)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sanctioned building layout & OC</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <UtensilsCrossed className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">2. Kitchen & Fit-Outs</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Kitchen equipment OEM proforma invoices</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Certified architect interior cost estimate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>HVAC, exhaust & chiller quotations</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Detailed seating layout & menu pricing</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">3. Promoter Financials</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 3 years ITR & audited balance sheets</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Last 12 months primary bank statements</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Promoter Net Worth Statement & CIBIL</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Proof of margin money contribution</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-[#0062FF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">4. Statutory Licenses</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>FSSAI License / Registration Receipt</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Municipal Gumasta Trade License</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Fire Department Provisional / Final NOC</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>State Excise Bar License (if applicable)</span>
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
              Hotel & Restaurant Loans Advisory FAQs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct insights into kitchen capex funding, CGTMSE limits, moratorium tenures, and licensing requisites.
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
                  Consult Our Hospitality Debt Desk in Ahilyanagar
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bring your site layout plans, kitchen equipment quotes, and lease draft to our Ahilyanagar headquarters for an in-person DPR and loan structuring assessment.
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
                  Fast preliminary assessment to calculate your project loan quantum, promoter margin, and optimal repayment tenure.
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
              AB Consultancy is an independent financial and project advisory firm. We do not lend or disburse funds directly. All hotel, restaurant, capex term loans, and credit approvals are subject to the independent appraisal, sanction policies, and regulatory guidelines of the respective lending banks and financial institutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
