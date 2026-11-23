import React, { useState, useEffect } from 'react';
import { useSEO } from '../utils/seo';
import { 
  Building, 
  Target, 
  ShieldCheck, 
  Award, 
  Landmark, 
  Handshake, 
  FileCheck, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  ChevronRight,
  Calculator,
  Compass,
  Users,
  Briefcase,
  Layers,
  Scale,
  HelpCircle,
  ChevronDown,
  BadgeCheck,
  Tag
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

export default function AboutUsPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  // Collapsible Accordion State for Local FAQ Section
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // SEO Title & Meta Management on Route Load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useSEO({
    title: "About Us | AB Consultancy Ahilyanagar",
    description: "Learn about AB Consultancy in Ahilyanagar. 15+ years of excellence, 7,100+ businesses guided for Government Subsidies, MSME Schemes & Bank DPRs.",
    canonical: "https://www.abconsultancy.net.in/about-us",
    keywords: "About AB Consultancy, Government Scheme Consultant Ahilyanagar, Ahmednagar Business Advisory, MSME Subsidies Expert"
  });

  // Structured Data Schema for LocalBusiness, FinancialService and FAQPage (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "FinancialService"],
        "@id": "https://www.abconsultancy.net.in/#organization",
        "name": "AB Consultancy - Best Consultancy in Ahilyanagar / Nagar",
        "alternateName": [
          "AB Consultancy",
          "Consultancy in Ahilyanagar",
          "Consultancy in Nagar",
          "Best Consultancy in Ahilyanagar",
          "Best Consultancy in Nagar",
          "AB Consultancy Nagar"
        ],
        "url": "https://www.abconsultancy.net.in/about-us",
        "logo": "https://www.abconsultancy.net.in/logo.png",
        "image": "https://www.abconsultancy.net.in/og-image.jpg",
        "description": "AB Consultancy is recognized as the best consultancy in Ahilyanagar / Nagar offering expert Government Schemes advisory, Government Subsidy, Incentive Guidance, Business & Startup Support, Business Registration, and Sector-Specific Schemes with a 99.4% DPR bank acceptance rate.",
        "telephone": "+919130894308",
        "email": "info@abconsulting.net.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 106, Baiju Height, Near Old Vasant Talkies",
          "addressLocality": "Ahilyanagar",
          "addressRegion": "Maharashtra",
          "postalCode": "414001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0952",
          "longitude": "74.7496"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "18:30"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Ahilyanagar" },
          { "@type": "City", "name": "Nagar" },
          { "@type": "City", "name": "Ahmednagar" },
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Chhatrapati Sambhaji Nagar" },
          { "@type": "City", "name": "Nashik" },
          { "@type": "AdministrativeArea", "name": "Maharashtra" },
          { "@type": "Country", "name": "India" }
        ],
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
        "knowsAbout": [
          "Consultancy in Ahilyanagar",
          "Consultancy in Nagar",
          "Best Consultancy in Ahilyanagar",
          "Best Consultancy in Nagar",
          "Government Schemes",
          "Government Subsidy",
          "Business & Startup Support",
          "Incentive Guidance",
          "Business Registration",
          "Sector-Specific Scheme",
          "PMEGP Subsidy",
          "MSME Loans",
          "Bank DPR Preparation",
          "CMA Data",
          "CGTMSE Collateral-Free Loans",
          "PMFME Food Processing Subsidy",
          "Maharashtra Package Scheme of Incentives (PSI)"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abconsultancy.net.in/about-us#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best consultancy in Ahilyanagar / Nagar for government schemes and subsidies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AB Consultancy is recognized as the best consultancy in Ahilyanagar / Nagar, with a 9+ year track record, 50+ funded enterprises, and an industry-leading 99.4% DPR bank acceptance rate. We provide end-to-end Business & Startup Support, legal Business Registration, and expert Incentive Guidance for Central and Maharashtra State government schemes."
            }
          },
          {
            "@type": "Question",
            "name": "What Business & Startup Support and Business Registration services are offered in Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide complete startup launch enablement, including official Business Registration (Udyam MSME certificate, Startup India DPIIT recognition, GST, and statutory licenses), Detailed Project Report (DPR) preparation, CMA data modeling for bank loans, and direct liaison with local bank branches across Ahilyanagar / Nagar."
            }
          },
          {
            "@type": "Question",
            "name": "How does Incentive Guidance and Sector-Specific Scheme mapping help my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every industry has tailored incentives. Through dedicated Incentive Guidance, we map Sector-Specific Schemes—such as agro & food processing (PMFME), manufacturing (PMEGP), engineering, textiles, and green energy (Maharashtra PSI 2019)—to secure non-repayable capital subsidies up to 35%, interest subvention up to 5%, and 100% electricity duty exemptions."
            }
          },
          {
            "@type": "Question",
            "name": "How does AB Consultancy help businesses secure up to 35% PMEGP Government Subsidy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AB Consultancy conducts an upfront eligibility audit based on project location (rural areas qualify for up to 35% margin money), promoter category (Special category including Women, SC/ST, Ex-Servicemen, Minorities, and OBC receive enhanced benefits), drafts an ex-banker grade Detailed Project Report (DPR) with CMA data, files the application on the KVIC e-portal, and liaises with your preferred bank branch until final sanction and TDR subsidy credit."
            }
          },
          {
            "@type": "Question",
            "name": "Can I obtain a business loan without collateral in Ahilyanagar under CGTMSE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under the CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) framework, eligible new and existing manufacturing, service, and retail trading enterprises can access credit up to ₹5 Crore without pledging residential, commercial, or agricultural land as collateral. AB Consultancy ensures your proposal meets bank underwriting parameters for direct CGTMSE coverage."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-800">
      
      {/* Inject Search Engine & Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* =========================================================================
          HERO & BREADCRUMB BANNER (Full-Viewport Balanced Vertical Rhythm)
          ========================================================================= */}
      <section className="relative w-full min-h-[calc(100vh-70px)] flex flex-col justify-center pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#E6F0FE] via-[#EDF5FE] to-[#F1F6FD]">
        {/* Soft Ambient Radial Background Lights */}
        <div className="absolute top-0 right-0 w-[580px] h-[380px] bg-gradient-to-bl from-[#0866FF]/14 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-12 left-10 w-[380px] h-[380px] bg-white/70 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 w-full my-auto">
          
          {/* Breadcrumbs for Search Crawlers */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 mb-5 font-medium">
            <a href="/" className="hover:text-[#0062FF] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0062FF] font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl">
            {/* Local Authority & Target Keyword Eyebrow Tag with Smooth Reveal Animation */}
            <AnimatedBadge 
              icon={Award} 
              text="Best Consultancy in Ahilyanagar / Nagar for Government Schemes & Subsidies" 
              isHero 
            />

            {/* High-Impact SEO H1 Headline with Core Target Keywords */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.03em] leading-[1.14]">
              Best Consultancy in <span className="text-[#0062FF]">Ahilyanagar / Nagar</span> for Government Schemes, Subsidies &amp; Startup Support
            </h1>

            {/* Snippet-Targetable First 100 Words for Google & AI Overviews */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Looking for the <strong>best consultancy in Ahilyanagar / Nagar</strong>? <strong>AB Consultancy</strong> is your 
              trusted partner for comprehensive <strong>Business &amp; Startup Support</strong>, fast-track <strong>Business Registration</strong>, 
              maximum <strong>Government Subsidy</strong> capture up to 35%, and expert <strong>Incentive Guidance</strong> across 
              Central &amp; State <strong>Government Schemes</strong>. We specialize in <strong>Sector-Specific Schemes</strong> with 
              bank-approved <strong>Detailed Project Reports (DPR)</strong> boasting a proven <strong>99.4% sanction success rate</strong>.
            </p>

            {/* Quick Action CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onBookAppointment}
                className="px-6 py-3.5 rounded-full bg-[#0062FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(0,98,255,0.3)] hover:shadow-[0_6px_22px_rgba(0,98,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Free 1-on-1 Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onCheckEligibility}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0062FF] text-xs sm:text-sm font-semibold border border-[#0062FF] transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Subsidy (PMEGP / PSI)</span>
              </button>
            </div>

            {/* Core Capability & Keyword Pills Ribbon */}
            <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">Core Practice:</span>
              {[
                "Consultancy in Ahilyanagar & Nagar",
                "Government Schemes",
                "Government Subsidy",
                "Business & Startup Support",
                "Incentive Guidance",
                "Business Registration",
                "Sector-Specific Schemes"
              ].map((pill, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  <Tag className="w-2.5 h-2.5 text-[#0062FF]" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          STATISTICS & ACHIEVEMENTS SECTION (Dedicated Section with Natural Spacing)
          ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F1F6FD] via-[#F8FAFC] to-white border-t border-blue-100/60">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Impact Numbers Banner (E-E-A-T Proof) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,98,255,0.05)]">
            <div className="text-center sm:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl sm:text-4xl font-black text-[#0062FF]">9+</div>
              <div className="text-xs sm:text-[13px] font-bold text-slate-800 mt-1">Years Of Advisory Excellence</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Top Consultancy in Nagar</div>
            </div>

            <div className="text-center sm:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl sm:text-4xl font-black text-[#0062FF]">50+</div>
              <div className="text-xs sm:text-[13px] font-bold text-slate-800 mt-1">Founders Funded</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Across Ahilyanagar &amp; Maharashtra</div>
            </div>

            <div className="text-center sm:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl sm:text-4xl font-black text-[#0062FF]">99.4%</div>
              <div className="text-xs sm:text-[13px] font-bold text-slate-800 mt-1">DPR Bank Approval Rate</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Nationalized &amp; Private Banks</div>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-black text-[#0062FF]">100%</div>
              <div className="text-xs sm:text-[13px] font-bold text-slate-800 mt-1">Transparent Advisory</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Zero Hidden Cuts &amp; Strict Norms</div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          1. COMPANY OVERVIEW SECTION (High Authority Copy & Local Entity Grounding)
          ========================================================================= */}
      <section id="company-overview" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative: High Conversion Copywriting */}
            <div className="lg:col-span-7 space-y-5">
              <AnimatedBadge 
                icon={Building} 
                text="1. Company Overview | Best Consultancy in Ahilyanagar / Nagar" 
                className="mb-3" 
              />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                Top-Rated Business Consultancy in Ahilyanagar &amp; Nagar for Government Schemes &amp; MSME Growth
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Operating from our corporate office in <strong>Ahilyanagar (widely known across Maharashtra as Nagar)</strong>, 
                <strong> AB Consultancy</strong> is recognized as the premier <strong>consultancy in Ahilyanagar / Nagar</strong> for 
                end-to-end <strong>Business &amp; Startup Support</strong>, legal <strong>Business Registration</strong>, and multi-tier 
                <strong> Incentive Guidance</strong>. We cater to new manufacturing startups, expanding agro-food processing facilities, 
                trading units, and service enterprises across Maharashtra and India.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Navigating complex gazette notifications, District Industries Centre (DIC Ahilyanagar) mandates, KVIB/KVIC procedures, 
                and bank credit underwriting standards can stall new ventures. Whether you require assistance with Central <strong>Government Schemes</strong> (PMEGP, 
                PMFME, CGTMSE) or state <strong>Government Subsidy</strong> frameworks (Maharashtra Package Scheme of Incentives - PSI 2019), 
                our team structures each <strong>Sector-Specific Scheme</strong> with <strong>ex-banker standard financial documentation</strong> and 
                zero-intermediary execution.
              </p>

              {/* Local Grounding & Operational Facts */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-[#0062FF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Head Office Location (Ahilyanagar / Nagar)</div>
                    <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      Office No. 106, Baiju Height, Near Old Vasant Talkies, Ahilyanagar – 414001, Maharashtra
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-[#0062FF] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Direct Founder Advisory Hotline</div>
                    <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      Mon – Sat: 9:30 AM – 6:30 PM <br />
                      Direct Support: <a href="tel:+919130894308" className="text-[#0062FF] font-semibold hover:underline">+91 9130 894308</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mission & Vision Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EBF3FE] to-[#F3F8FE] border border-[#D5E5FD] shadow-xs relative overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-[#0062FF] text-white flex items-center justify-center mb-3.5 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">Our Mission</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  To eliminate bureaucratic friction and maximize government financial benefits for Indian businesses by translating complex 
                  Central and State Government Schemes into tangible, non-repayable working capital, subsidies, and sanctioned bank loans.
                </p>
                <div className="mt-3.5 flex items-center gap-1.5 text-xs font-semibold text-[#0062FF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Empowering Founders with Clear Numbers</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 text-white border border-slate-800 shadow-md relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-blue-200 flex items-center justify-center mb-3.5">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Our Vision</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  To establish the benchmark for ethical, responsible business consultancy across Ahilyanagar, Nagar, and all of Maharashtra, 
                  fostering a thriving ecosystem of bank-sanctioned, commercially resilient MSMEs and industrial units.
                </p>
                <div className="mt-3.5 flex items-center gap-1.5 text-xs font-semibold text-blue-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Policy Compliance &amp; Zero Misrepresentation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          2. OUR APPROACH SECTION (Actionable 4-Stage Framework)
          ========================================================================= */}
      <section id="our-approach" className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="flex justify-center mb-3">
              <AnimatedBadge 
                icon={Layers} 
                text="2. Our Approach | Structured Incentive Guidance" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              Our 4-Stage Incentive Guidance &amp; Bank Sanction Process
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We reject generic paperwork and broker guesswork. Our systematic roadmap follows institutional credit underwriting standards 
              to guarantee maximum Government Subsidy capture and rapid bank loan approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Viability & Sector-Specific Scheme Mapping',
                desc: 'We examine your business activity, project location (Rural vs. Urban in Ahilyanagar/Nagar), promoter category (Women, SC/ST, General), and CAPEX to map eligible Central (PMEGP, PMFME) & State (PSI 2019) Government Schemes.',
                icon: Compass,
                badge: 'Stage 1: Eligibility Audit'
              },
              {
                step: '02',
                title: 'Bank-Grade DPR & CMA Modeling',
                desc: 'We craft comprehensive Detailed Project Reports with 5-year projected balance sheets, CMA data, Debt Service Coverage Ratio (DSCR), Break-Even Point (BEP), and verified supplier quotes.',
                icon: FileCheck,
                badge: 'Stage 2: Financial Modeling'
              },
              {
                step: '03',
                title: 'Business Registration & Portal Lodgment',
                desc: 'Expedited statutory Business Registration (Udyam MSME, GST) and direct application lodgment through official government portals (KVIC/DIC/MoFPI) with proactive bank branch tracking (SBI, BoM, PNB, Canara, Private Banks).',
                icon: Landmark,
                badge: 'Stage 3: Application Lodgment'
              },
              {
                step: '04',
                title: 'Government Subsidy Realization',
                desc: 'Guidance through physical field verification, sanction letter release, term loan disbursement, and credit of the non-repayable capital subsidy into your 3-year TDR subsidy reserve account.',
                icon: CheckCircle2,
                badge: 'Stage 4: Grant Realization'
              }
            ].map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#0062FF] bg-blue-50 px-2.5 py-1 rounded-md">
                        {stage.badge}
                      </span>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-[#0062FF] transition-colors">
                        {stage.step}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062FF] flex items-center justify-center mb-3 group-hover:bg-[#0062FF] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0062FF] transition-colors">
                      {stage.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0062FF]">
                    <span>Institutional Standard</span>
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. WHY CHOOSE US SECTION (Direct Value Differentiation vs Middlemen)
          ========================================================================= */}
      <section id="why-choose-us" className="py-16 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="flex justify-center mb-3">
              <AnimatedBadge 
                icon={ShieldCheck} 
                text="3. Why Choose Us | Best Consultancy in Nagar" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              Why Founders Choose the Best Consultancy in Ahilyanagar / Nagar
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We replace unreliable commission agents and arbitrary document brokers with institutional financial advisory, 
              strategic Incentive Guidance, and a proven 99.4% bank appraisal success rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0062FF] flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Business &amp; Startup Support with Ex-Banker Rigor
              </h3>
              <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                From initial market feasibility to bank committee presentation, we design Detailed Project Reports (DPR) and CMA projections 
                precisely aligned with Reserve Bank of India (RBI) lending prudential norms.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>DSCR, BEP, and IRR ratio sensitivity modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>Machinery supplier quotations &amp; layout vetting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>Pre-screened against 40+ Bank appraisal parameters</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0062FF] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Strategic Incentive Guidance &amp; Government Subsidy
              </h3>
              <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Many businesses miss out on eligible grants due to wrong scheme selection. We strategically combine Central Government Schemes 
                (PMEGP, PMFME) with Maharashtra State incentives (PSI 2019) for maximum capital savings up to 35%.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>Up to 35% rural margin money grant capture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>Promoter equity optimization as low as 5% to 10%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>Interest subvention &amp; electricity duty waivers</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0062FF] flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Turnkey Business Registration &amp; Zero Hidden Cuts
              </h3>
              <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                We provide complete legal Business Registration (Udyam MSME, GST, Startup India) with total transparency. 
                Our advisory fees are fixed upfront—with zero percentage cuts taken from your sanctioned loan or subsidy credit.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>Zero percentage deduction on sanctioned capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>No false &quot;guaranteed loan sanction&quot; gimmicks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                  <span>NDA protected 100% founder data confidentiality</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. OUR EXPERTISE POINTS SECTION (Detailed Practice Areas with Key Metrics)
          ========================================================================= */}
      <section id="our-expertise" className="py-16 sm:py-20 bg-[#F4F8FD]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="flex justify-center mb-3">
              <AnimatedBadge 
                icon={Target} 
                text="4. Our Expertise | Government Schemes & Subsidies" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              Comprehensive Government Schemes &amp; Sector-Specific Advisory
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Targeted expertise across major Central Government assistance schemes, collateral-free credit programs, 
              Maharashtra State Industrial incentives, and institutional documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'PMEGP Government Subsidy Scheme',
                tag: 'Central Govt Scheme',
                grant: 'Up to 35% Capital Subsidy',
                desc: 'Prime Minister’s Employment Generation Programme. Capital subsidies up to ₹50 Lakhs for manufacturing units and ₹20 Lakhs for service businesses with low promoter contribution.',
                icon: Landmark,
                features: [
                  '15% to 35% non-repayable margin money grant',
                  'Low promoter contribution: only 5% to 10%',
                  'Facilitation across KVIC, KVIB & DIC channels'
                ]
              },
              {
                title: 'CGTMSE Collateral-Free Loans',
                tag: 'Business & Startup Support',
                grant: 'Up to ₹5 Crore',
                desc: 'Credit Guarantee Fund Trust for Micro and Small Enterprises. Secure institutional term loans and working capital without pledging third-party property mortgage or residential collateral.',
                icon: Handshake,
                features: [
                  '100% zero property or real estate mortgage required',
                  'Coverage across PSU & Private commercial banks',
                  'Covers manufacturing, services & retail trading'
                ]
              },
              {
                title: 'PMFME Food Processing Scheme',
                tag: 'Sector-Specific Scheme',
                grant: '35% Grant (Max ₹10 Lakhs)',
                desc: 'Pradhan Mantri Formalisation of Micro food processing Enterprises scheme offering 35% credit-linked capital subsidy for spices, bakery, dairy, oil extraction, packaging, and agro units.',
                icon: Award,
                features: [
                  'Micro-processing, packaging & cold chain setups',
                  'ODOP (One District One Product) prioritized support',
                  'End-to-end portal documentation and loan appraisal'
                ]
              },
              {
                title: 'Bank-Compliant DPR & CMA Data',
                tag: 'Credit Underwriting',
                grant: '99.4% Approval Benchmark',
                desc: 'Institutional-grade Detailed Project Reports, financial feasibility analysis, CMA data, DSCR computations, and cash flow projections structured to meet strict bank credit committee policies.',
                icon: FileCheck,
                features: [
                  'Accepted across 40+ nationalized & private banks',
                  '5-year detailed balance sheet projections',
                  'Machinery quotation & layout verification'
                ]
              },
              {
                title: 'State Industrial Policies (PSI 2019)',
                tag: 'Incentive Guidance',
                grant: 'Interest & Power Rebates',
                desc: 'Maharashtra Package Scheme of Incentives (PSI 2019). Benefit from term loan interest subventions up to 5%, electricity duty exemptions, stamp duty waivers, and industrial promotion subsidies (IPS).',
                icon: TrendingUp,
                features: [
                  'Interest subsidy on sanctioned bank term loans',
                  '100% Electricity duty & stamp duty exemptions',
                  'Anchor, MSME & expansion unit incentives'
                ]
              },
              {
                title: 'Business Registration & Compliance',
                tag: 'Business Registration',
                grant: 'Turnkey Enablement',
                desc: 'Complete statutory business enablement including Udyam MSME certification, Startup India DPIIT recognition, GST registration, and statutory licensing required for Priority Sector Lending (PSL).',
                icon: ShieldCheck,
                features: [
                  'Instant Udyam MSME certification issuance',
                  'Priority Sector Lending (PSL) interest concession',
                  'Government e-Marketplace (GeM) & tender fee waivers'
                ]
              }
            ].map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {exp.tag}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                        {exp.grant}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062FF] flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {exp.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {exp.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0062FF] flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={onTalkConsultant}
                      className="text-xs font-semibold text-[#0062FF] hover:text-[#0052CC] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Inquire about this scheme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          LOCAL SEO & GEO QUICK-ANSWER ENGINE (Collapsible Accordion FAQ)
          Optimized for Google Snippets, PAA, and AI Overviews (Perplexity, Gemini, ChatGPT)
          ========================================================================= */}
      <section id="local-faq" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <AnimatedBadge 
                icon={HelpCircle} 
                text="Local Search & Scheme FAQs" 
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              Frequently Asked Questions: Subsidies &amp; Loans in Ahilyanagar / Nagar
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Clear, direct answers regarding government schemes, business registration, bank eligibility criteria, and our advisory terms.
            </p>
          </div>

          {/* Interactive Collapsible Accordion List */}
          <div className="space-y-3.5">
            {[
              {
                q: "Which is the best consultancy in Ahilyanagar / Nagar for government schemes and subsidies?",
                a: "AB Consultancy is recognized as the best consultancy in Ahilyanagar / Nagar, with a 9+ year track record, 50+ funded enterprises, and an industry-leading 99.4% DPR bank acceptance rate. We provide end-to-end Business & Startup Support, legal Business Registration, and expert Incentive Guidance for Central and Maharashtra State government schemes."
              },
              {
                q: "What Business & Startup Support and Business Registration services are offered in Nagar?",
                a: "We provide complete startup launch enablement in Ahilyanagar / Nagar, including official Business Registration (Udyam MSME certificate, Startup India DPIIT recognition, GST, and statutory licenses), Detailed Project Report (DPR) preparation, CMA data modeling for bank loans, and direct liaison with local bank branches across Ahilyanagar and Nagar district."
              },
              {
                q: "How does Incentive Guidance and Sector-Specific Scheme mapping help my business?",
                a: "Every industry has tailored incentives. Through dedicated Incentive Guidance, we map Sector-Specific Schemes—such as agro & food processing (PMFME), manufacturing (PMEGP), engineering, textiles, and green energy (Maharashtra PSI 2019)—to secure non-repayable capital subsidies up to 35%, interest subvention up to 5%, and 100% electricity duty exemptions."
              },
              {
                q: "How does AB Consultancy help businesses secure up to 35% PMEGP Government Subsidy?",
                a: "AB Consultancy conducts an upfront eligibility audit based on project location (rural areas qualify for up to 35% margin money), promoter category (Special category including Women, SC/ST, Ex-Servicemen, Minorities, and OBC receive enhanced benefits), drafts an ex-banker grade Detailed Project Report (DPR) with CMA data, files the application on the KVIC e-portal, and liaises with your preferred bank branch until final sanction and TDR subsidy credit."
              },
              {
                q: "Can I obtain a business loan without collateral in Ahilyanagar under CGTMSE?",
                a: "Yes. Under the CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) framework, eligible new and existing manufacturing, service, and retail trading enterprises can access credit up to ₹5 Crore without pledging residential, commercial, or agricultural land as collateral. AB Consultancy ensures your proposal meets bank underwriting parameters for direct CGTMSE coverage."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-slate-200/90 bg-slate-50/50 overflow-hidden transition-all duration-200 hover:border-blue-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#0062FF] text-white rotate-180' : 'bg-slate-200/70 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          CALL TO ACTION & CONSULTATION SCHEDULE BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#0052CC] via-[#0062FF] to-[#0052CC] text-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-md">
              Start Your Financial Roadmap Today
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Ready to Claim Your Eligible Government Subsidy or Business Loan in Nagar?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Connect directly with our senior project finance advisors in Ahilyanagar / Nagar. We verify your scheme eligibility, 
              calculate non-repayable subsidies, provide statutory business registration, and prepare bank-sanction ready project documentation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onBookAppointment}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#0062FF] hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20would%20like%20to%20consult%20regarding%20Government%20Subsidies%20and%20Business%20Registration%20in%20Nagar."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>WhatsApp Advisory Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          OFFICIAL REGULATORY DISCLAIMER (AS ON OFFICIAL SITE)
          ========================================================================= */}
      <section className="py-8 bg-slate-100 border-t border-slate-200/80 text-center">
        <div className="max-w-[1100px] mx-auto px-6 text-xs text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Official Advisory Disclaimer</p>
          <p>
            AB Consultancy is an independent professional business advisory firm headquartered in Ahilyanagar (Nagar), Maharashtra. 
            We assist startups, MSMEs, and industrial enterprises with Detailed Project Reports (DPR), financial feasibility, scheme 
            mapping, statutory business registration, and incentive guidance only. Loan sanctioning decisions rest solely with the concerned lending Bank or Financial 
            Institution, and subsidy approvals are granted by relevant State or Central Government Departments subject to official 
            statutory guidelines and eligibility criteria.
          </p>
        </div>
      </section>

    </div>
  );
}
