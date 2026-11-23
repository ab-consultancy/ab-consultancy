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
  Send
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

export default function CentralStateSchemesPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // SEO Meta, Title (< 60 chars), Description (150-160 chars), Canonical, Author & Publisher
  useSEO({
    title: "Government Scheme Guidance | AB Consultancy Ahilyanagar",
    description: "Expert Central & State government scheme guidance in Ahilyanagar. Complete procedural support for PMEGP, PMFME, PSI subsidies & bank DPRs. Call now.",
    canonical: "https://www.abconsultancy.net.in/services/central-state-schemes",
    keywords: "Government Schemes Guidance Ahilyanagar, Central Govt Schemes, State Industrial Policy PSI, PMEGP Subsidy Ahilyanagar, PMFME Food Processing, Stand-Up India MUDRA"
  });

  // JSON-LD Structured Data for SEO / GEO Rich Snippets
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.abconsultancy.net.in/services/central-state-schemes#service",
        "name": "Central & State Government Scheme Guidance",
        "serviceType": "Government Subsidy & Industrial Incentive Advisory",
        "provider": {
          "@type": "LocalBusiness",
          "name": "AB Consultancy",
          "telephone": "+919130894308",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No. 106, Second Floor, Baiju Height, Near Old Vasant Talkies",
            "addressLocality": "Ahilyanagar",
            "postalCode": "414001",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description": "Comprehensive advisory for Central and State government schemes, capital investment subsidies, PMEGP, PMFME, and MSME industrial policy incentives."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abconsultancy.net.in/services/central-state-schemes#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What factors determine my business's eligibility for Central and State schemes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eligibility depends on five primary parameters: your specific business activity (manufacturing, agro-processing, services), enterprise physical location (urban vs backward rural talukas), proposed capital investment, ownership category (including general, women entrepreneurs, SC/ST, and rural enterprises), and whether the unit is new or already operating."
            }
          },
          {
            "@type": "Question",
            "name": "Can a business combine Central Government schemes with State Industrial Incentives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, in many cases businesses can bundle compatible programs. For example, availing a Central capital subsidy (like PMEGP or PMFME) while simultaneously unlocking State Package Scheme of Incentives (PSI) such as stamp duty waivers and electricity tariff concessions, provided guidelines allow co-funding."
            }
          },
          {
            "@type": "Question",
            "name": "What is AB Consultancy's exact role in the subsidy process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AB Consultancy is an independent consulting organization providing pre-application eligibility audits, bank-grade Detailed Project Reports (DPR), procedural portal filings, and query compliance support. Final loan sanctions rest with lending banks, and subsidy grants rest with government departments."
            }
          }
        ]
      }
    ]
  };

  // Evaluation Factors Data Matrix
  const evaluationFactors = [
    {
      title: "Business Activity & Sector",
      description: "Whether your operations fall under manufacturing, agro & food processing, technical textiles, engineering, or designated priority service sectors.",
      badge: "Sector Classification",
      icon: Factory
    },
    {
      title: "Geographical Location",
      description: "State, district, and taluka categorization. Units established in industrially backward or notified rural zones often qualify for 10% to 15% higher subsidies.",
      badge: "Zonal Categorization",
      icon: MapPin
    },
    {
      title: "Investment & Capex Size",
      description: "Total project cost, plant & machinery investments, and eligible capex brackets governing Micro, Small, or Medium (MSME) thresholds.",
      badge: "Project Sizing",
      icon: Coins
    },
    {
      title: "Ownership Category",
      description: "Special affirmative incentive categories including Women Entrepreneurs, SC/ST, Ex-Servicemen, Rural Promoters, and Differently-Abled individuals.",
      badge: "Special Benefits",
      icon: Award
    },
    {
      title: "Enterprise Lifecycle Stage",
      description: "Differentiating between brand-new greenfield setups, modernization programs, technology upgrades, and brownfield capex expansions.",
      badge: "Unit Maturity",
      icon: TrendingUp
    }
  ];

  // Core Services List (6 Connected Service Cards)
  const coreServices = [
    {
      number: 1,
      stageLabel: "STAGE 1 • CENTRAL SCHEMES",
      trackLabel: "Central",
      title: "Identifying Potentially Suitable Central Schemes",
      desc: "Thorough analysis of flagship initiatives under MSME, MoFPI, Commerce, and related central ministries.",
      tag: "PMEGP credit-linked subsidies",
      accentColor: "#1769E8",
      accentBg: "bg-[#1769E8]",
      bgTint: "bg-blue-50",
      textAccent: "text-[#1769E8]",
      icon: Building2
    },
    {
      number: 2,
      stageLabel: "STAGE 2 • STATE INCENTIVES",
      trackLabel: "State Policy",
      title: "Researching Relevant State Government Schemes",
      desc: "In-depth exploration of state industrial development policies and District Industries Centre (DIC) incentives.",
      tag: "State Package Scheme (PSI)",
      accentColor: "#0D9488",
      accentBg: "bg-[#0D9488]",
      bgTint: "bg-teal-50",
      textAccent: "text-[#0D9488]",
      icon: Layers
    },
    {
      number: 3,
      stageLabel: "STAGE 3 • ELIGIBILITY MATRIX",
      trackLabel: "Appraisal",
      title: "Explaining Eligibility Conditions & Available Benefits",
      desc: "Clear breakdown of capital grants, interest subventions (3%–7%), turnover caps, and beneficiary requirements.",
      tag: "Margin-money calculations",
      accentColor: "#8B5CF6",
      accentBg: "bg-[#8B5CF6]",
      bgTint: "bg-purple-50",
      textAccent: "text-[#8B5CF6]",
      icon: Calculator
    },
    {
      number: 4,
      stageLabel: "STAGE 4 • CHECKLISTS",
      trackLabel: "Dossier",
      title: "Providing Application Requirements & Documentation",
      desc: "Complete documentation checklists tailored to your enterprise category.",
      tag: "Statutory licenses (Udyam, GST, FSSAI)",
      accentColor: "#10B981",
      accentBg: "bg-[#10B981]",
      bgTint: "bg-emerald-50",
      textAccent: "text-[#10B981]",
      icon: ClipboardList
    },
    {
      number: 5,
      stageLabel: "STAGE 5 • PORTAL FILINGS",
      trackLabel: "Submission",
      title: "Assisting with Application Preparation & Filing",
      desc: "Practical support for portal registrations, paperwork formatting, and formalities.",
      tag: "Single-window portal filings",
      accentColor: "#F97316",
      accentBg: "bg-[#F97316]",
      bgTint: "bg-orange-50",
      textAccent: "text-[#F97316]",
      icon: Send
    },
    {
      number: 6,
      stageLabel: "STAGE 6 • DISBURSEMENT",
      trackLabel: "Tracking",
      title: "Helping Clients Track Application Progress",
      desc: "Monitor application status, departmental queries, and processing progress.",
      tag: "Departmental query management",
      accentColor: "#F43F5E",
      accentBg: "bg-[#F43F5E]",
      bgTint: "bg-rose-50",
      textAccent: "text-[#F43F5E]",
      icon: TrendingUp
    }
  ];

  // Flagship Programs Matrix
  const flagshipPrograms = [
    {
      name: "PMEGP Scheme",
      category: "Central Government",
      fullName: "Prime Minister's Employment Generation Programme",
      coverage: "Manufacturing up to ₹50 Lakhs | Services up to ₹20 Lakhs",
      benefit: "15% to 35% Capital Subsidy",
      tags: ["Micro Units", "New Enterprises", "KVIC / DIC / Banks"],
      desc: "Flagship credit-linked subsidy initiative aimed at generating continuous self-employment opportunities across urban and rural India."
    },
    {
      name: "PMFME Scheme",
      category: "Central Government (MoFPI)",
      fullName: "PM Formalisation of Micro Food Processing Enterprises",
      coverage: "Food products, flour mills, spices, dairy, cold chains",
      benefit: "35% Credit-Linked Grant (Max ₹10 Lakhs)",
      tags: ["Food Processing", "ODOP Focus", "Capacity Upgrades"],
      desc: "Specialized initiative empowering individual food entrepreneurs and farmer producer groups to modernize equipment and scale operations."
    },
    {
      name: "State Industrial Policy (PSI)",
      category: "State Government (Maharashtra / Pan-India)",
      fullName: "Package Scheme of Incentives (PSI 2019 / State Polices)",
      coverage: "New and expanding industrial manufacturing units",
      benefit: "Up to 25% Fixed Capital Subsidy + 5% Interest Rebate",
      tags: ["Industrial Units", "Taluka Zones", "DIC Incentives"],
      desc: "State-sponsored package delivering capital investment subsidies, electricity duty exemptions, power tariff concessions, and stamp duty refunds."
    },
    {
      name: "Stand-Up India & MUDRA",
      category: "Central Financial Services",
      fullName: "Institutional Debt Facilitation Programs",
      coverage: "Loans from ₹50,000 up to ₹1 Crore for greenfield units",
      benefit: "Collateral-Free Concessional Credit",
      tags: ["Women Promoters", "SC / ST Entrepreneurs", "MSME Debt"],
      desc: "Structured institutional credit channels providing subsidized working capital and term funding without onerous property mortgages."
    }
  ];

  // 3-Step Process
  const processSteps = [
    {
      number: "01",
      phase: "Phase 1",
      title: "Book Appointment",
      desc: "Schedule a one-on-one session online or by phone with our accredited financial analysts.",
      actionText: "Book Appointment",
      action: onBookAppointment,
      badgeBg: "text-[#1769E8] bg-blue-50/90 border-blue-100",
      numBg: "bg-gradient-to-br from-[#1769E8] to-[#0D55C7]",
      numShadow: "shadow-[0_4px_14px_rgba(23,105,232,0.35)]",
      cardHover: "hover:border-[#1769E8]/40 hover:shadow-[0_16px_40px_rgba(23,105,232,0.12)]",
      titleHover: "group-hover:text-[#1769E8]",
      btnStyle: "bg-slate-50 hover:bg-[#1769E8] text-[#1769E8] hover:text-white border-slate-200/90 hover:border-[#1769E8]"
    },
    {
      number: "02",
      phase: "Phase 2",
      title: "Visit Office or Call",
      desc: "Meet us at our Ahilyanagar headquarters or consult remotely via phone / video conference.",
      actionText: "Call +91 91308 94308",
      action: () => window.open('tel:+919130894308'),
      badgeBg: "text-[#0D9488] bg-teal-50/90 border-teal-100",
      numBg: "bg-gradient-to-br from-[#0D9488] to-[#0A7268]",
      numShadow: "shadow-[0_4px_14px_rgba(13,148,136,0.35)]",
      cardHover: "hover:border-[#0D9488]/40 hover:shadow-[0_16px_40px_rgba(13,148,136,0.12)]",
      titleHover: "group-hover:text-[#0D9488]",
      btnStyle: "bg-slate-50 hover:bg-[#0D9488] text-[#0D9488] hover:text-white border-slate-200/90 hover:border-[#0D9488]"
    },
    {
      number: "03",
      phase: "Phase 3",
      title: "Get Expert Consultation",
      desc: "Receive an exhaustive Scheme Suitability Matrix, eligibility audit, and clear procedural roadmap.",
      actionText: "Check Eligibility",
      action: onCheckEligibility,
      badgeBg: "text-[#8B5CF6] bg-purple-50/90 border-purple-100",
      numBg: "bg-gradient-to-br from-[#8B5CF6] to-[#703DE3]",
      numShadow: "shadow-[0_4px_14px_rgba(139,92,246,0.35)]",
      cardHover: "hover:border-[#8B5CF6]/40 hover:shadow-[0_16px_40px_rgba(139,92,246,0.12)]",
      titleHover: "group-hover:text-[#8B5CF6]",
      btnStyle: "bg-slate-50 hover:bg-[#8B5CF6] text-[#8B5CF6] hover:text-white border-slate-200/90 hover:border-[#8B5CF6]"
    }
  ];

  // In-Depth FAQs
  const schemeFaqs = [
    {
      q: "What factors determine my enterprise's eligibility for Central and State government schemes?",
      a: "Eligibility is evaluated holistically across five core variables: your specific business sector (manufacturing, agro-processing, service), physical plant location (industrial zone vs notified rural taluka), total project capex (plant and machinery value), ownership background (general, women, SC/ST, rural), and the enterprise lifecycle stage (greenfield start-up vs brownfield expansion). At AB Consultancy, we conduct a rigorous pre-assessment to pinpoint matching schemes."
    },
    {
      q: "Can a business apply for both Central and State government schemes simultaneously?",
      a: "In many cases, yes. While you cannot claim double capital subsidies for the exact same capex item under two conflicting central grants, you can frequently combine a Central Scheme (such as PMEGP or PMFME for primary capital subsidy) with State Schemes (such as Maharashtra PSI for electricity duty exemptions, power tariff rebates, and 100% stamp duty refunds). Our advisors structure your funding package to legally maximize allowable cumulative incentives."
    },
    {
      q: "How long does the entire scheme application and subsidy disbursement process take?",
      a: "Preparation of bank-compliant documentation and DPR typically takes 3 to 7 business days. Bank loan sanction and task force committee clearance usually take 3 to 6 weeks. Following physical machine installation, commercial production commencement, and joint physical inspection, the capital subsidy margin money is credited into the entrepreneur's subsidy reserve account according to departmental disbursement calendars."
    },
    {
      q: "What is AB Consultancy's exact scope of responsibility?",
      a: "AB Consultancy is a 100% independent advisory and financial documentation consultancy. We provide expert scheme identification, eligibility auditing, bank-compliant DPR & CMA formulation, online application guidance, and departmental compliance liaison. Formal loan sanction is the sole prerogative of the lending bank/financial institution, and subsidy approval rests with the competent government authority (such as DIC, KVIC, or MoFPI)."
    },
    {
      q: "Do you assist clients outside Ahilyanagar / Maharashtra?",
      a: "Yes. While our headquarters are in Ahilyanagar (Ahmednagar), Maharashtra, our specialized advisory team has successfully structured scheme documentation and project reports for 7,100+ clients across multiple states in India, coordinating with both Central ministries and respective state industrial boards."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800">
      
      {/* Inject Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Header & Hero Section */}
      <section className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-[#E6F0FE] via-[#EDF4FE] to-[#F4F8FD] border-b border-slate-200/70 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0062FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 sm:mb-6">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-brand-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-brand-600 font-semibold">Central & State Scheme Guidance</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (Hero Text & CTAs) */}
            <div className="lg:col-span-7 xl:col-span-8">
              
              {/* Eyebrow Pill */}
              <AnimatedBadge 
                icon={Landmark} 
                text="Government Grants & Industrial Subsidies Desk" 
                isHero 
              />

              {/* H1 Heading (Keyword-Rich & Reader-Centric) */}
              <h1 className="text-2xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Comprehensive Central & State Government Scheme Guidance
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                Find government schemes that may be relevant to your business, investment plans, and eligibility. Central and State government authorities offer specialized assistance programs, financial incentives, and subsidized credit to catalyze industrial growth, technology adoption, and enterprise development.
              </p>

              {/* E-E-A-T Authority Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <Award className="w-3.5 h-3.5 text-brand-600" />
                  15+ Years Specialized Experience
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  7,100+ Clients Advised Across India
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  100% Transparent Milestone Advisory
                </span>
              </div>

              {/* Call to Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onCheckEligibility}
                  className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-brand hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Check Scheme Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onBookAppointment}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-brand-600" />
                  <span>Book Priority Appointment</span>
                </button>
                <a
                  href="tel:+919130894308"
                  className="px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm border border-emerald-200/80 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>+91 91308 94308</span>
                </a>
              </div>

            </div>

            {/* Right Column: Featured Poster Graphic Card */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
              <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.08)] max-w-sm w-full relative overflow-hidden group">
                <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <img 
                    src="/assets/services/central-state-schemes.png" 
                    alt="Central & State Government Schemes Official Poster - AB Consultancy" 
                    className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-brand-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      Official Scheme Guide
                    </span>
                  </div>
                </div>
                <div className="mt-3.5 px-2 pb-1 text-center">
                  <h4 className="text-xs font-black text-slate-900">
                    National & State Subsidy Architecture
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Covers PMEGP, PMFME, MSME Grants & State PSI Policies
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Eligibility & Evaluation Factors - Hybrid Layout (Paragraphs + Key Points + Strategic Card) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Authoritative Editorial Paragraphs + Pure Text Key Points (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <AnimatedBadge 
                  icon={Scale} 
                  text="Evaluation Methodology & Framework" 
                  className="mb-3" 
                />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight leading-tight">
                  Understanding Central & State Scheme Eligibility
                </h2>
              </div>

              {/* Editorial Paragraph 1 */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Government incentives and industrial capital subsidies are not generic or automatic benefits—they are strictly regulated policy instruments crafted by Central ministries and State Directorates of Industries to encourage specific industrial outcomes. Every initiative evaluates applications against rigorous statutory parameters.
              </p>

              {/* Editorial Paragraph 2 */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Eligibility is governed primarily by your National Industrial Classification (NIC) manufacturing code, geographical plant location, and eligible productive machinery investments. In notified industrially backward talukas or rural zones, capital grants often increase by 10% to 25% compared to municipal centers, while pure trading activities are legally excluded from capital subsidies.
              </p>

              {/* Editorial Paragraph 3 */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Attempting to submit applications without verifying eligible capex ratios or securing prior approval before ordering equipment often results in procedural rejection or permanent forfeiture of subsidies. At AB Consultancy, we conduct a structured pre-investment audit to ensure your operational model aligns with all statutory requirements before any financial commitments are made.
              </p>

              {/* Pure Text Key Points List (No card boxes, no borders, clean editorial bullets) */}
              <div className="pt-3 border-t border-slate-100">
                <h3 className="text-base font-bold text-[#10264F] mb-3">
                  Core Evaluation Benchmarks:
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1769E8] mt-2 flex-shrink-0" />
                    <span><strong className="text-slate-900 font-semibold">Priority Sector Alignment:</strong> Verification of eligible 4-digit NIC manufacturing codes under MSME, MoFPI, and KVIC policies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2 flex-shrink-0" />
                    <span><strong className="text-slate-900 font-semibold">Taluka & Zonal Multipliers:</strong> Categorization into backward industrial tiers (Zone B/C/D) to maximize allowable subsidy percentages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
                    <span><strong className="text-slate-900 font-semibold">Allowable Capex Scope:</strong> Segregating productive machinery from excluded civil structures, vehicles, and non-qualifying expenses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                    <span><strong className="text-slate-900 font-semibold">Affirmative Subsidies:</strong> Leveraging special 25%–35% margin money provisions for Women, SC/ST, and rural enterprise promoters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
                    <span><strong className="text-slate-900 font-semibold">Greenfield vs. Modernization:</strong> Aligning project milestones with provisional approval windows before physical machinery installation.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Single Strategic Executive Card (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              
              <div className="bg-gradient-to-b from-white to-[#F8FAFD] rounded-[28px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_rgba(16,38,79,0.08)] relative overflow-hidden">
                
                {/* Top Subtle Glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#1769E8]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="relative z-10 mb-6 pb-6 border-b border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Structured Pre-Audit Protocol</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#10264F] tracking-tight">
                    Scheme Applicability Scorecard
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Before purchasing machinery, signing land leases, or applying for bank term loans, verify your maximum qualifying benefits.
                  </p>
                </div>

                {/* Checklist Items inside Card */}
                <div className="space-y-3 mb-6 relative z-10">
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      NIC Code & Manufacturing Activity Match
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      District & Taluka Zone Incentive Tier Mapping
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      Central & State Co-Funding Compatibility Check
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      Bank-Compliant DPR & CMA Eligibility Feasibility
                    </div>
                  </div>

                </div>

                {/* Key Metrics Strip inside Card */}
                <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 relative z-10 text-center">
                  <div>
                    <div className="text-lg font-black text-[#1769E8]">3-7 Days</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Turnaround</div>
                  </div>
                  <div className="border-x border-slate-200">
                    <div className="text-lg font-black text-[#0D9488]">7,100+</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Audits Done</div>
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">100%</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Transparent</div>
                  </div>
                </div>

                {/* CTA Buttons inside Card */}
                <div className="space-y-2.5 relative z-10">
                  <button 
                    onClick={onCheckEligibility}
                    className="w-full py-3.5 rounded-xl bg-[#1769E8] hover:bg-[#1255c2] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Free Scheme Pre-Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                    <span>Or speak directly:</span>
                    <a href="tel:+919130894308" className="font-bold text-[#1769E8] hover:underline">+91 91308 94308</a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Corporate Infographic Section: Our Core Services Include */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#EDF4FD] via-[#F6FAFE] to-[#E8F1FB] border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Layer 1: Dot-Matrix Radial Grid with Vignette Mask (28px spacing) */}
        <div className="absolute inset-0 bg-[radial-gradient(#1769E826_1.5px,transparent_1.5px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_95%)] pointer-events-none" />
        
        {/* Layer 2: Volumetric 3D Ambient Lighting Mesh */}
        {/* Central Hub Backlight Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#1769E8]/18 via-[#0D9488]/12 to-[#8B5CF6]/15 rounded-full blur-[90px] pointer-events-none" />
        {/* Left Stages Ambient Glow */}
        <div className="absolute top-1/4 -left-20 w-[520px] h-[520px] bg-gradient-to-br from-[#1769E8]/10 via-[#0D9488]/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        {/* Right Stages Ambient Glow */}
        <div className="absolute bottom-1/4 -right-20 w-[520px] h-[520px] bg-gradient-to-tl from-[#F97316]/10 via-[#F43F5E]/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        {/* Center White Diffusion Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] bg-white/70 rounded-full blur-[95px] pointer-events-none" />

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* 2. Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <div className="flex justify-center mb-3">
              <AnimatedBadge 
                icon={CheckCircle2} 
                text="Brainstorming Process Roadmap • 6 Procedural Milestones" 
              />
            </div>

            {/* Large bold heading with bright blue highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10264F] tracking-tight leading-tight">
              Our Core Services <span className="text-[#1769E8]">Include</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-500 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Complete procedural guidance across Central & State industrial initiatives through an interconnected advisory roadmap.
            </p>
          </div>

          {/* DESKTOP VIEW: Wide Landscape Symmetrical Composition (16:9 feel, 1280 x 728) */}
          <div className="hidden lg:block relative w-full max-w-[1280px] h-[728px] mx-auto select-none">
            
            {/* 5. Connecting Lines & Concentric Radar Background (SVG Layer - z-10 behind cards & hub) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10" 
              viewBox="0 0 1280 728" 
              fill="none"
            >
              <defs>
                <linearGradient id="hub-ring-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0D9488" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="hub-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1769E8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1769E8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft Radial Background Circle behind Hub */}
              <circle cx="640" cy="364" r="280" fill="url(#hub-center-glow)" />

              {/* Concentric Radar Guide Rings centered at Hub Center (640, 364) */}
              <circle cx="640" cy="364" r="118" stroke="#1769E8" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
              <circle cx="640" cy="364" r="148" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
              <circle cx="640" cy="364" r="224" stroke="url(#hub-ring-glow)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.45" />
              <circle cx="640" cy="364" r="330" stroke="#94A3B8" strokeWidth="1" strokeDasharray="5 7" opacity="0.3" />
              <circle cx="640" cy="364" r="460" stroke="#1769E8" strokeWidth="1" strokeDasharray="8 10" opacity="0.22" />
              <circle cx="640" cy="364" r="600" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />

              {/* Subtle Radial Guide Rays radiating outward from Hub center */}
              <line x1="530" y1="254" x2="420" y2="144" stroke="#1769E8" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
              <line x1="750" y1="254" x2="860" y2="144" stroke="#10B981" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
              <line x1="530" y1="474" x2="420" y2="584" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
              <line x1="750" y1="474" x2="860" y2="584" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />

              {/* Blueprint Coordinates & Crosshairs */}
              <g opacity="0.4" stroke="#1769E8" strokeWidth="1">
                <line x1="640" y1="36" x2="640" y2="48" />
                <line x1="634" y1="42" x2="646" y2="42" />
                <circle cx="640" cy="42" r="6" fill="none" strokeDasharray="2 2" />
              </g>
              <g opacity="0.4" stroke="#1769E8" strokeWidth="1">
                <line x1="640" y1="680" x2="640" y2="692" />
                <line x1="634" y1="686" x2="646" y2="686" />
                <circle cx="640" cy="686" r="6" fill="none" strokeDasharray="2 2" />
              </g>

              {/* Line 1: Blue (Hub: 556, 292 -> Card 1: 380, 112) */}
              <path 
                d="M 556,292 C 475,292 435,112 380,112" 
                stroke="#1769E8" 
                strokeWidth={hoveredStep === 0 ? "2.5" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredStep === 0 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="556" cy="292" r={hoveredStep === 0 ? "5" : "4"} fill="#1769E8" className="transition-all duration-300" />

              {/* Line 2: Teal (Hub: 536, 364 -> Card 2: 380, 364) */}
              <path 
                d="M 536,364 L 380,364" 
                stroke="#0D9488" 
                strokeWidth={hoveredStep === 1 ? "2.5" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredStep === 1 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="536" cy="364" r={hoveredStep === 1 ? "5" : "4"} fill="#0D9488" className="transition-all duration-300" />

              {/* Line 3: Purple (Hub: 556, 436 -> Card 3: 380, 616) */}
              <path 
                d="M 556,436 C 475,436 435,616 380,616" 
                stroke="#8B5CF6" 
                strokeWidth={hoveredStep === 2 ? "2.5" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredStep === 2 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="556" cy="436" r={hoveredStep === 2 ? "5" : "4"} fill="#8B5CF6" className="transition-all duration-300" />

              {/* Line 4: Green (Hub: 724, 292 -> Card 4: 900, 112) */}
              <path 
                d="M 724,292 C 805,292 845,112 900,112" 
                stroke="#10B981" 
                strokeWidth={hoveredStep === 3 ? "2.5" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredStep === 3 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="724" cy="292" r={hoveredStep === 3 ? "5" : "4"} fill="#10B981" className="transition-all duration-300" />

              {/* Line 5: Orange (Hub: 744, 364 -> Card 5: 900, 364) */}
              <path 
                d="M 744,364 L 900,364" 
                stroke="#F97316" 
                strokeWidth={hoveredStep === 4 ? "2.5" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredStep === 4 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="744" cy="364" r={hoveredStep === 4 ? "5" : "4"} fill="#F97316" className="transition-all duration-300" />

              {/* Line 6: Pink (Hub: 724, 436 -> Card 6: 900, 616) */}
              <path 
                d="M 724,436 C 805,436 845,616 900,616" 
                stroke="#F43F5E" 
                strokeWidth={hoveredStep === 5 ? "2.5" : "1.85"} 
                strokeLinecap="round" 
                strokeOpacity={hoveredStep === 5 ? "1" : "0.9"}
                className="transition-all duration-300"
              />
              <circle cx="724" cy="436" r={hoveredStep === 5 ? "5" : "4"} fill="#F43F5E" className="transition-all duration-300" />
            </svg>

            {/* Terminal Sockets Layer (SVG Layer - z-25 on top of card edges) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-25" 
              viewBox="0 0 1280 728" 
              fill="none"
            >
              {/* Left Terminal Nodes on Card Edges (X: 380) */}
              <circle cx="380" cy="112" r={hoveredStep === 0 ? "5.5" : "4.5"} fill="#1769E8" stroke="white" strokeWidth="2.5" className="transition-all duration-300" />
              <circle cx="380" cy="364" r={hoveredStep === 1 ? "5.5" : "4.5"} fill="#0D9488" stroke="white" strokeWidth="2.5" className="transition-all duration-300" />
              <circle cx="380" cy="616" r={hoveredStep === 2 ? "5.5" : "4.5"} fill="#8B5CF6" stroke="white" strokeWidth="2.5" className="transition-all duration-300" />

              {/* Right Terminal Nodes on Card Edges (X: 900) */}
              <circle cx="900" cy="112" r={hoveredStep === 3 ? "5.5" : "4.5"} fill="#10B981" stroke="white" strokeWidth="2.5" className="transition-all duration-300" />
              <circle cx="900" cy="364" r={hoveredStep === 4 ? "5.5" : "4.5"} fill="#F97316" stroke="white" strokeWidth="2.5" className="transition-all duration-300" />
              <circle cx="900" cy="616" r={hoveredStep === 5 ? "5.5" : "4.5"} fill="#F43F5E" stroke="white" strokeWidth="2.5" className="transition-all duration-300" />
            </svg>

            {/* 3. Central Advisory Hub with Elevated Multi-Layer Depth */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-52 h-52 rounded-full bg-white/95 backdrop-blur-md p-2.5 shadow-[0_20px_50px_-10px_rgba(23,105,232,0.22),0_2px_8px_rgba(16,38,79,0.06)] border border-white ring-1 ring-slate-200/60 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#F6F9FF] to-white border border-[#1769E8]/25 flex flex-col items-center justify-center p-6 text-center shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#1769E8] mb-2 shadow-[0_0_8px_#1769E8]" />
                  <h3 className="text-xl font-bold text-[#10264F] tracking-tight leading-snug">
                    Our Core<br/>Services
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1.5">
                    Central & State Schemes
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Six Connected Service Cards */}
            {/* LEFT COLUMN: Cards 1, 2, 3 (Width 380px, Height 224px) */}
            <div className="absolute left-0 top-0 bottom-0 w-[380px] flex flex-col justify-between z-20">
              {coreServices.slice(0, 3).map((svc, idx) => {
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`bg-white/95 backdrop-blur-md rounded-[20px] p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between h-[224px] cursor-pointer origin-right ring-1 ring-white/90 ${
                      hoveredStep === idx
                        ? 'border-[#1769E8]/50 shadow-[0_18px_42px_-8px_rgba(23,105,232,0.14)] scale-[1.015]'
                        : 'border-slate-200/80 shadow-[0_10px_30px_-6px_rgba(16,38,79,0.07),0_1px_3px_rgba(16,38,79,0.04)] hover:shadow-[0_14px_36px_-6px_rgba(16,38,79,0.1)]'
                    }`}
                  >
                    <div>
                      {/* Stage Label */}
                      <div className="mb-2.5">
                        <span 
                          className="text-[12.5px] font-semibold uppercase tracking-wider"
                          style={{ color: svc.accentColor }}
                        >
                          {svc.stageLabel}
                        </span>
                      </div>

                      {/* Card Heading */}
                      <h4 className="text-[17.5px] font-semibold text-[#10264F] leading-snug">
                        {svc.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[14px] text-slate-500 font-normal mt-2 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Bottom Category Tag */}
                    <div className="pt-2">
                      <span className="inline-block text-[12.5px] font-medium text-slate-600 bg-slate-50/90 border border-slate-200/80 px-3.5 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Cards 4, 5, 6 (Width 380px, Height 224px) */}
            <div className="absolute right-0 top-0 bottom-0 w-[380px] flex flex-col justify-between z-20">
              {coreServices.slice(3, 6).map((svc, idx) => {
                const actualIdx = idx + 3;
                return (
                  <div
                    key={actualIdx}
                    onMouseEnter={() => setHoveredStep(actualIdx)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`bg-white/95 backdrop-blur-md rounded-[20px] p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between h-[224px] cursor-pointer origin-left ring-1 ring-white/90 ${
                      hoveredStep === actualIdx
                        ? 'border-[#1769E8]/50 shadow-[0_18px_42px_-8px_rgba(23,105,232,0.14)] scale-[1.015]'
                        : 'border-slate-200/80 shadow-[0_10px_30px_-6px_rgba(16,38,79,0.07),0_1px_3px_rgba(16,38,79,0.04)] hover:shadow-[0_14px_36px_-6px_rgba(16,38,79,0.1)]'
                    }`}
                  >
                    <div>
                      {/* Stage Label */}
                      <div className="mb-2.5">
                        <span 
                          className="text-[12.5px] font-semibold uppercase tracking-wider"
                          style={{ color: svc.accentColor }}
                        >
                          {svc.stageLabel}
                        </span>
                      </div>

                      {/* Card Heading */}
                      <h4 className="text-[17.5px] font-semibold text-[#10264F] leading-snug">
                        {svc.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[14px] text-slate-500 font-normal mt-2 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Bottom Category Tag */}
                    <div className="pt-2">
                      <span className="inline-block text-[12.5px] font-medium text-slate-600 bg-slate-50/90 border border-slate-200/80 px-3.5 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* MOBILE & TABLET VIEW: Clean Spacious Symmetrical Roadmap with Atmospheric Depth */}
          <div className="lg:hidden">
            {/* Mobile Central Advisory Hub (Clean Symmetrical Circle with Halo Glow) */}
            <div className="flex justify-center mb-6 sm:mb-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-gradient-to-tr from-[#1769E8]/20 to-[#8B5CF6]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative w-36 h-36 rounded-full bg-white/95 backdrop-blur-md p-2 shadow-[0_12px_36px_-6px_rgba(23,105,232,0.18)] border border-white ring-1 ring-slate-200/70 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#F6F9FF] to-white border border-[#1769E8]/20 flex flex-col items-center justify-center p-3 text-center shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1769E8] mb-1 shadow-[0_0_6px_#1769E8]" />
                  <h3 className="text-base font-bold text-[#10264F] leading-tight">
                    Our Core<br/>Services
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    Central & State Schemes
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Cards: Spacious 24px Padding (p-6), Clean Typography, Elevated Depth */}
            <div className="space-y-4">
              {coreServices.map((svc, idx) => {
                return (
                  <div 
                    key={idx}
                    className="bg-white/95 backdrop-blur-md rounded-[22px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_8px_24px_-4px_rgba(16,38,79,0.06),0_1px_2px_rgba(16,38,79,0.04)] ring-1 ring-white/80 hover:shadow-soft transition-all duration-300"
                  >
                    {/* Stage Label */}
                    <div className="mb-2.5">
                      <span 
                        className="text-[12px] font-semibold uppercase tracking-wider"
                        style={{ color: svc.accentColor }}
                      >
                        {svc.stageLabel}
                      </span>
                    </div>

                    {/* Heading */}
                    <h4 className="text-[17px] font-semibold text-[#10264F] leading-snug">
                      {svc.title}
                    </h4>

                    {/* Description with Generous Spacing & Breathing Room */}
                    <p className="text-[14px] text-slate-500 font-normal mt-2.5 leading-relaxed">
                      {svc.desc}
                    </p>

                    {/* Bottom Category Tag with Clean Separation */}
                    <div className="pt-3.5 mt-3.5 border-t border-slate-100">
                      <span className="inline-block text-[12px] font-medium text-slate-600 bg-slate-50/90 border border-slate-200/80 px-3.5 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Flagship Program Coverage Matrix */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mb-10 sm:mb-12">
            <AnimatedBadge 
              icon={Landmark} 
              text="National & Regional Programs" 
              className="mb-2.5" 
            />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2.5 tracking-tight">
              Flagship Program Coverage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Depending on eligibility and current scheme rules, relevant options may include PMEGP (Prime Minister's Employment Generation Programme), PMFME (Food Processing), Stand-Up India, MUDRA loans, State Capital Investment Subsidies, Stamp Duty Exemptions, and Electricity Tariff Subsidies:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {flagshipPrograms.map((prog, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/70 rounded-2xl lg:rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-brand-300 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-600 bg-white px-2.5 py-1 rounded-md border border-slate-200/80">
                      {prog.category}
                    </span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      {prog.benefit}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {prog.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {prog.fullName}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {prog.desc}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Coverage Bracket:
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {prog.coverage}
                    </span>
                  </div>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {prog.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium text-slate-600 bg-slate-200/60 px-2.5 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <button
                    onClick={onCheckEligibility}
                    className="flex-1 py-2 px-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-brand transition-all cursor-pointer"
                  >
                    <span>Check Eligibility for {prog.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Important Scheme Guidelines Callout Box */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="font-bold text-amber-950 block mb-1">
                Important Scheme Guidelines & Compliance Note:
              </strong>
              All benefits depend on the applicable scheme guidelines, availability, departmental approvals, and the applicant meeting the prescribed conditions. AB Consultancy provides independent consultancy and documentation assistance.
            </div>
          </div>

        </div>
      </section>

      {/* 5. Why Choose AB Consultancy for Scheme Advisory? */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD] border-b border-slate-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <AnimatedBadge 
                icon={ShieldCheck} 
                text="Institutional Credibility" 
                className="mb-3" 
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight leading-tight">
                Why Choose AB Consultancy for Scheme Advisory?
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                With <strong>15+ years of experience</strong> and <strong>7,100+ clients advised across India</strong>, AB Consultancy provides transparent, professional, and compliant advisory. We ensure you have total clarity on scheme requirements before committing capital, saving valuable time and effort.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Total Pre-Capital Clarity</h4>
                    <p className="text-xs text-slate-500 mt-0.5">We audit all requirements and covenants before you spend on land or machinery, preventing unrecoverable errors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Ex-Bank Accredited Financial Analysts</h4>
                    <p className="text-xs text-slate-500 mt-0.5">DPR financial models, DSCR ratios, and cash flows engineered strictly according to national banking guidelines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent, Milestone-Based Structure</h4>
                    <p className="text-xs text-slate-500 mt-0.5">No hidden commissions or unexpected upfront demands. Clear milestone progress with full ethical integrity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-600" />
                  <span>Advisory Desk Track Record</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-brand-600">15+</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Years of Advisory</div>
                    <div className="text-[11px] text-slate-400">Continuous excellence</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600">7,100+</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Clients Advised</div>
                    <div className="text-[11px] text-slate-400">Pan-India footprint</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-blue-600">₹180+ Cr</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Subsidies Facilitated</div>
                    <div className="text-[11px] text-slate-400">Total verified value</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-indigo-600">40+</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Commercial Banks</div>
                    <div className="text-[11px] text-slate-400">Nodal network liaisons</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-brand-50/70 border border-brand-100 text-xs text-brand-900 flex items-center justify-between">
                  <span className="font-medium">Ready to discuss your scheme eligibility?</span>
                  <button 
                    onClick={onTalkConsultant} 
                    className="font-bold underline text-brand-700 hover:text-brand-800 cursor-pointer"
                  >
                    Talk with Consultant
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Our 3-Step Process */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#EDF4FD] via-[#F6FAFE] to-[#E9F1FA] border-y border-slate-200/80 overflow-hidden">
        
        {/* Layer 1: Dot-Matrix Radial Grid with Vignette Mask (Distinct architectural blueprint texture) */}
        <div className="absolute inset-0 bg-[radial-gradient(#1769E826_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_95%)] pointer-events-none" />

        {/* Layer 2: Topographical Dynamic Contour Flow Waves & Milestone Concentric Rings */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="process-flow-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1769E8" stopOpacity="0.05" />
              <stop offset="40%" stopColor="#1769E8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#0D9488" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1769E8" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="process-flow-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0D9488" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="process-flow-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.05" />
              <stop offset="60%" stopColor="#1769E8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Smooth flowing contour waves */}
          <path d="M -80 200 C 260 130, 520 320, 820 220 C 1140 120, 1360 280, 1550 180" stroke="url(#process-flow-1)" strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M -80 280 C 240 370, 560 190, 860 300 C 1180 400, 1380 210, 1550 290" stroke="url(#process-flow-2)" strokeWidth="1.5" strokeDasharray="5 7" />
          <path d="M -80 420 C 320 350, 640 480, 960 380 C 1240 300, 1420 420, 1550 360" stroke="url(#process-flow-3)" strokeWidth="1.5" strokeDasharray="7 9" />
          <path d="M -80 110 C 360 190, 660 70, 1020 160 C 1300 240, 1440 120, 1550 140" stroke="url(#process-flow-1)" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.6" />
          
          {/* Subtle Concentric Roadmap Rings behind central header */}
          <g opacity="0.35" stroke="#1769E8" strokeWidth="1">
            <circle cx="720" cy="110" r="140" strokeDasharray="4 6" opacity="0.4" />
            <circle cx="720" cy="110" r="220" strokeDasharray="6 8" opacity="0.25" />
          </g>

          {/* Subtle Blueprint Coordinate Crosshairs & Reference Nodes */}
          <g opacity="0.45" stroke="#1769E8" strokeWidth="1">
            <line x1="160" y1="120" x2="160" y2="134" />
            <line x1="153" y1="127" x2="167" y2="127" />
            <circle cx="160" cy="127" r="8" fill="none" strokeDasharray="2 2" />
          </g>
          <g opacity="0.45" stroke="#0D9488" strokeWidth="1">
            <line x1="720" y1="480" x2="720" y2="494" />
            <line x1="713" y1="487" x2="727" y2="487" />
            <circle cx="720" cy="487" r="8" fill="none" strokeDasharray="2 2" />
          </g>
          <g opacity="0.45" stroke="#8B5CF6" strokeWidth="1">
            <line x1="1280" y1="130" x2="1280" y2="144" />
            <line x1="1273" y1="137" x2="1287" y2="137" />
            <circle cx="1280" cy="137" r="8" fill="none" strokeDasharray="2 2" />
          </g>
        </svg>

        {/* Layer 3: Ambient Light Mesh Glow Spheres (Volumetric 3D Lighting) */}
        <div className="absolute -top-20 left-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#1769E8]/12 via-[#0D9488]/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-[560px] h-[560px] bg-gradient-to-tl from-[#8B5CF6]/12 via-[#1769E8]/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[320px] bg-white/70 rounded-full blur-[85px] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="flex justify-center mb-3">
              <AnimatedBadge 
                icon={Rocket} 
                text="Clear 3-Stage Roadmap" 
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10264F] tracking-tight leading-tight">
              Our <span className="text-[#1769E8]">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2.5 leading-relaxed">
              Three simple, structured steps from initial assessment to actionable scheme clarity.
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`bg-white/95 backdrop-blur-md rounded-[24px] p-6 xs:p-7 sm:p-8 border border-slate-200/70 shadow-[0_12px_36px_-8px_rgba(16,38,79,0.07),0_1px_3px_rgba(16,38,79,0.04)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group ${step.cardHover}`}
                >
                  <div>
                    {/* Phase Badge (Numbers 01, 02, 03 removed) */}
                    <div className="mb-4 sm:mb-5">
                      <span className={`inline-block text-[11.5px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${step.badgeBg}`}>
                        {step.phase}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold text-[#10264F] ${step.titleHover} transition-colors mb-2.5 leading-snug`}>
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <button
                      onClick={step.action}
                      className={`w-full py-3 rounded-xl font-bold text-xs border shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${step.btnStyle}`}
                    >
                      <span>{step.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. Comprehensive FAQ Section */}
      <section className="py-14 sm:py-20 bg-[#F8FBFE] border-b border-slate-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="flex justify-center mb-2.5">
              <AnimatedBadge 
                icon={HelpCircle} 
                text="Frequently Asked Questions" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Key insights into government scheme eligibility, documentation, and disbursement procedures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {schemeFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-brand-600' : ''
                  }`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Office Location, Direct Contact & Booking Card */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0A1A3B] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedBadge 
                  icon={MapPin} 
                  text="Head Office & Advisory Desk" 
                  isDark 
                  className="mb-3" 
                />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-3 leading-tight">
                  Contact Us for Scheme Advisory
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed max-w-xl">
                  Connect with our senior consultants for one-on-one procedural guidance. You can visit our registered office in Ahilyanagar or speak directly with our team.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Office No. 106, Second Floor, Baiju Height, Near Old Vasant Talkies, Ahilyanagar (Ahmednagar) – 414001, Maharashtra, India.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <a href="tel:+919130894308" className="hover:text-white font-bold text-white transition-colors">
                      +91 91308 94308
                    </a>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">Mon – Sat (9:30 AM – 6:30 PM)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a href="mailto:info@abconsulting.net.in" className="hover:text-white transition-colors">
                      info@abconsulting.net.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3.5 justify-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                  <h4 className="text-sm font-bold text-white mb-2">Immediate Next Steps:</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Book an advance consultation slot or call our desk to verify your subsidy bracket before purchasing machinery.
                  </p>
                  <div className="space-y-2.5">
                    <button
                      onClick={onBookAppointment}
                      className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-brand transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </button>
                    <a
                      href="tel:+919130894308"
                      className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-emerald-400" />
                      <span>Call Us (+91 91308 94308)</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. Official Statutory Disclaimer (High Integrity & Legal Clarity) */}
      <section className="py-8 sm:py-10 bg-slate-100/90 text-slate-600 border-t border-slate-200">
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="text-xs leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-slate-800 font-bold block mb-1">
              Disclaimer & Regulatory Boundary:
            </strong>
            We are an independent consultancy. We assist with project reports, documentation, and application guidance only. Loan sanction is strictly by the Bank/Financial Institution, and subsidy approval is by the concerned Government Department as per official guidelines and eligibility criteria.
          </div>
        </div>
      </section>

    </div>
  );
}