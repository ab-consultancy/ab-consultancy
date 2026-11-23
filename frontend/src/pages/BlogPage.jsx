import React, { useState, useEffect, useMemo } from 'react';
import { useSEO } from '../utils/seo';
import { 
  Folder, BookOpen, Clock, Calendar, ArrowRight, User, Tag, Search, 
  CheckCircle2, ChevronRight, X, Share2, Landmark, 
  FileText, ShieldCheck, TrendingUp, HelpCircle, ChevronDown,
  Building2, Handshake, Award, BellRing, Layers, Check, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPage({ onCheckEligibility, onTalkConsultant, onBookAppointment }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedSlug, setCopiedSlug] = useState(false);

  // SEO Title & Meta Management on Route Load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useSEO({
    title: "Blog & Subsidy Playbooks | AB Consultancy",
    description: "Read actionable guides on PMEGP subsidies, CGTMSE loans, Maharashtra PSI policy, and bank-grade DPR preparation from AB Consultancy Ahilyanagar.",
    canonical: "https://www.abconsultancy.net.in/blog",
    keywords: "PMEGP Subsidy Guide, CGTMSE Loan Eligibility, Bank DPR Preparation, Maharashtra PSI Industrial Policy"
  });

  // Structured Data Schema for Blog & Publications (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.abconsultancy.net.in/blog#blog",
        "name": "AB Consultancy Knowledge Hub & MSME Subsidy Blog",
        "description": "Authoritative guides on PMEGP subsidy, CGTMSE collateral-free loans, bank-compliant DPR preparation, and Maharashtra Industrial Policy for MSMEs in Ahilyanagar and across India.",
        "url": "https://www.abconsultancy.net.in/blog",
        "publisher": {
          "@type": "Organization",
          "name": "AB Consultancy",
          "url": "https://www.abconsultancy.net.in"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.abconsultancy.net.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog & Knowledge Hub",
            "item": "https://www.abconsultancy.net.in/blog"
          }
        ]
      }
    ]
  };

  const categories = [
    'All',
    'PMEGP Scheme',
    'Collateral-Free Loans',
    'DPR & CMA Reports',
    'State Industrial Schemes',
    'Mudra Yojana',
    'Government Subsidies'
  ];

  const articles = [
    {
      id: 'pmegp-subsidy-guide-2026',
      title: 'PMEGP 2026 Comprehensive Guide: Unlocking Up to 35% Capital Subsidy for New Units',
      slug: 'pmegp-subsidy-guide-2026',
      category: 'PMEGP Scheme',
      badgeLabel: 'PMEGP',
      date: '18 Nov 2026',
      readTime: '6 min read',
      featured: true,
      rowType: 'featured', // Featured top row (2-column)
      imageType: 'flowchart', // Custom flowchart matching user's Image 1 Left
      summary: 'A step-by-step roadmap to maximizing your PMEGP grant under the revised 2026 guidelines. Learn how rural vs urban classification and promoter category impact your subsidy percentage...',
      keyPoints: [
        'Manufacturing projects eligible up to ₹50 Lakhs; Service projects up to ₹20 Lakhs',
        'Special Category promoters (Women, SC/ST, OBC, Ex-Servicemen) receive 35% in Rural, 25% in Urban areas',
        'General Category promoters receive 25% in Rural, 15% in Urban areas',
        'Beneficiary own contribution required: only 5% for Special Categories and 10% for General Category',
        'Mandatory 5 to 10 days EDP (Entrepreneurship Development Training) prior to margin disbursal'
      ],
      content: `
        <h3>Understanding the Prime Minister Employment Generation Programme (PMEGP)</h3>
        <p>The Prime Minister’s Employment Generation Programme (PMEGP) continues to be the flagship credit-linked subsidy initiative administered by the Ministry of MSME through the Khadi and Village Industries Commission (KVIC) and District Industries Centres (DIC). For aspiring entrepreneurs in Maharashtra and nationwide, it provides the most accessible avenue to secure non-repayable capital assistance alongside commercial bank financing.</p>

        <h4>Project Ceilings and Permissible Costs</h4>
        <p>Under the revised guidelines, eligible project cost limits remain capped at <strong>₹50 Lakhs for manufacturing ventures</strong> and <strong>₹20 Lakhs for business/service enterprises</strong>. The project cost covers capital expenditure (machinery, factory shed, electrification) plus one cycle of working capital.</p>

        <h4>Subsidy Matrix Breakdown</h4>
        <div class="table-container my-4">
          <table class="w-full text-left text-sm border-collapse border border-slate-200">
            <thead>
              <tr class="bg-slate-100 text-slate-800">
                <th class="p-3 border border-slate-200">Category</th>
                <th class="p-3 border border-slate-200">Beneficiary Share</th>
                <th class="p-3 border border-slate-200">Urban Subsidy</th>
                <th class="p-3 border border-slate-200">Rural Subsidy</th>
              </tr>
            </thead>
            <tbody class="text-slate-700">
              <tr class="border-b border-slate-200">
                <td class="p-3 border border-slate-200 font-medium text-slate-900">General Category</td>
                <td class="p-3 border border-slate-200">10% of Project Cost</td>
                <td class="p-3 border border-slate-200">15% Grant</td>
                <td class="p-3 border border-slate-200 font-semibold text-[#0062FF]">25% Grant</td>
              </tr>
              <tr class="bg-blue-50/50">
                <td class="p-3 border border-slate-200 font-medium text-slate-900">Special Category (Women, SC/ST, OBC, Minorities, Ex-Defence)</td>
                <td class="p-3 border border-slate-200">5% of Project Cost</td>
                <td class="p-3 border border-slate-200">25% Grant</td>
                <td class="p-3 border border-slate-200 font-bold text-emerald-600">35% Grant</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>4 Critical Common Rejection Triggers to Avoid</h4>
        <ol>
          <li><strong>Mismatched Rural/Urban Certification:</strong> Applying under Rural quota without valid Gram Panchayat NOC or Talati certificate.</li>
          <li><strong>Negative List Inclusions:</strong> Meat processing, alcohol products, tobacco, and standalone transport vehicles (without specialized body) are non-eligible.</li>
          <li><strong>Over-inflated Quotations:</strong> Submitting non-GST or non-genuine machinery invoices that fail bank valuation scrutiny.</li>
          <li><strong>Deficient DPR Projections:</strong> Inconsistent Debt Service Coverage Ratio (DSCR below 1.4) or unrealistic sales forecasts on Day 1.</li>
        </ol>

        <h4>How AB Consultancy Ensures 100% First-Time Sanctions</h4>
        <p>Our team in Ahilyanagar conducts pre-scrutiny with ex-bank credit appraisers, formats bank-standard CMA schedules, uploads verified KVIC portal documentation, and actively interfaces with the District Task Force Committee (DTFC) and designated branch managers through to final TDR margin deposit.</p>
      `
    },
    {
      id: 'cgtmse-collateral-free-loan-playbook',
      title: 'CGTMSE Salary & Business Loan Guide: Roles, Guarantee Limits & Approval Factors',
      slug: 'cgtmse-collateral-free-loan-playbook',
      category: 'Collateral-Free Loans',
      badgeLabel: 'CGTMSE',
      date: '18 Nov 2026',
      readTime: '5 min read',
      featured: true,
      rowType: 'featured', // Featured top row (2-column)
      imageType: 'banner_corporate', // Corporate banner matching user's Image 1 Right
      imageSrc: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      summary: '"Can I really get a ₹5 Crore loan with zero property mortgage?" Sooner or later, every entrepreneur asks this, and the honest answer depends on bank appraisal parameters...',
      keyPoints: [
        'Coverage ceiling elevated up to ₹5 Crore per eligible MSME borrower',
        'Guarantee coverage up to 85% for Women entrepreneurs, Micro enterprises, and ZED-certified units',
        'Annual Guarantee Fee (AGF) reduced to as low as 0.37% for smaller ticket sanctions',
        'Hybrid Security model permitted: Partial collateral + CGTMSE coverage for remainder'
      ],
      content: `
        <h3>Unlocking Institutional Credit Without Property Mortgage</h3>
        <p>The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), jointly set up by the Ministry of MSME and SIDBI, remains India’s most powerful financial instrument for collateral-free business expansion. Despite widespread bank marketing, many MSMEs struggle to get their proposals sanctioned under CGTMSE without expert liaison.</p>

        <h4>Core Parameters for Bank Sanction</h4>
        <ul>
          <li><strong>Eligible Borrowers:</strong> New and existing Micro and Small enterprises engaged in manufacturing or service activities (including wholesale trade up to specified limits).</li>
          <li><strong>Guarantee Cover:</strong> Ranging from 75% to 85% depending on category, location, and enterprise scale.</li>
          <li><strong>Maximum Facility Limit:</strong> ₹500 Lakhs (₹5 Crore) aggregate fund-based and non-fund-based credit per borrower.</li>
        </ul>

        <h4>The Hybrid Collateral Advantage</h4>
        <p>Under revised RBI directions, banks are permitted to adopt a hybrid security structure: where a borrower offers collateral for a portion of the loan (e.g. 30%), the remaining unsecured portion (70%) can be covered under CGTMSE guarantee, enabling much higher loan sanction amounts.</p>
      `
    },
    {
      id: 'bank-grade-dpr-cma-metrics',
      title: 'Bank-Grade DPR Mastery: 7 Critical Financial Ratios Underwriters Look For',
      slug: 'bank-grade-dpr-cma-metrics',
      category: 'DPR & CMA Reports',
      badgeLabel: 'DPR & CMA',
      date: '18 Nov 2026',
      readTime: '7 min read',
      featured: false,
      rowType: 'standard', // Standard row (3-column)
      imageType: 'illustration_blue', // Blue illustration matching user's Image 2 Left
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      summary: 'You’ve drafted your project report, and everyone asks, "Will the bank accept it?" Why 78% of self-prepared project reports get rejected and the metrics that matter...',
      keyPoints: [
        'Why DSCR below 1.5 triggers immediate scrutiny by PSU credit committees',
        'Ideal Current Ratio benchmark: 1.33:1 under Tandon / Nayak committee norms',
        'Break-Even Point (BEP) should ideally be achieved within 40-55% of operating capacity'
      ],
      content: `
        <h3>Why Most Self-Prepared Project Reports Get Rejected</h3>
        <p>Every week, dozens of ambitious entrepreneurs approach banks with generic 10-page project reports downloaded from generic templates. Over 78% of these applications face immediate queries or outright rejections by commercial bank credit officers. The reason? They fail standard CMA (Credit Monitoring Arrangement) stress tests.</p>

        <h4>1. Debt Service Coverage Ratio (DSCR)</h4>
        <p>The DSCR measures your enterprise's cash flow ability to service principal and interest obligations. While 1.0 is technically break-even, banks mandate an average <strong>DSCR of 1.50 to 1.80</strong> across the loan tenure. Anything under 1.25 triggers automatic red flags.</p>

        <h4>2. Current Ratio (Liquidity Benchmark)</h4>
        <p>Following Nayak Committee guidelines for MSME working capital assessment, banks look for a <strong>minimum Current Ratio of 1.33:1</strong>. This proves your current assets comfortably exceed short-term liabilities and ensures working capital won't bleed into term debt.</p>
      `
    },
    {
      id: 'maharashtra-psi-industrial-policy',
      title: 'Maharashtra PSI 2026 Scheme: Capital Grants, Electricity & 100% Stamp Duty Rebates',
      slug: 'maharashtra-psi-industrial-policy',
      category: 'State Industrial Schemes',
      badgeLabel: 'State Subsidy',
      date: '18 Nov 2026',
      readTime: '6 min read',
      featured: false,
      rowType: 'standard', // Standard row (3-column)
      imageType: 'photo_graduate', // Photo matching user's Image 2 Middle
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      summary: 'Choosing an industrial location in Maharashtra is an important decision. How Taluka zoning (A, B, C, D, D+) dictates up to 100% fixed capital investment subsidy...',
      keyPoints: [
        'Industrial Promotion Subsidy (IPS) linked to SGST reimbursement for up to 10 years',
        'Up to ₹2/unit power tariff subsidy for manufacturing units in developing talukas',
        '100% stamp duty exemption on industrial land acquisition and mortgage deeds'
      ],
      content: `
        <h3>Maharashtra Package Scheme of Incentives (PSI)</h3>
        <p>The Government of Maharashtra’s Package Scheme of Incentives (PSI) is widely recognized as one of the most generous state industrial support frameworks in India. Designed to foster industrial dispersal to developing and underdeveloped regions, it offers extensive fiscal benefits to Micro, Small, Medium, and Large enterprises.</p>

        <h4>Key Incentive Components for Ahilyanagar & Maharashtra Units</h4>
        <ol>
          <li><strong>Industrial Promotion Subsidy (IPS):</strong> Reimbursement of Gross State Goods and Services Tax (SGST) paid on intra-state sales, capped up to 80% to 100% of eligible Fixed Capital Investment over 7 to 10 years.</li>
          <li><strong>Interest Subsidy:</strong> 5% per annum on term loans for micro and small enterprises in C, D, and D+ areas, drastically lowering your effective borrowing cost.</li>
          <li><strong>Power Tariff Concession:</strong> ₹1.00 to ₹2.00 per unit reduction in power bills for 3 to 5 years.</li>
          <li><strong>100% Stamp Duty Exemption:</strong> Zero stamp duty on acquisition of MIDC land or private industrial plots during the investment period.</li>
        </ol>
      `
    },
    {
      id: 'mudra-scheme-expansion-guide',
      title: 'Mudra Scheme 2026 Expansion: Tarun Category Raised to ₹20 Lakhs for Proven MSMEs',
      slug: 'mudra-scheme-expansion-guide',
      category: 'Mudra Yojana',
      badgeLabel: 'Mudra',
      date: '27 Oct 2026',
      readTime: '4 min read',
      featured: false,
      rowType: 'standard', // Standard row (3-column)
      imageType: 'photo_team', // Group photo matching user's Image 2 Right
      imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      summary: 'Twelfth-hour expansion allows established MSMEs with a clean repayment history to access up to ₹20 Lakhs collateral-free under Tarun Plus. Here is how to apply...',
      keyPoints: [
        'Tarun tier expanded from ₹10 Lakhs to ₹20 Lakhs for entrepreneurs with previous Mudra track record',
        'Zero processing charges and collateral-free mandate for micro loans',
        'Seamless integration with Mudra Debit Card for revolving cash credit access'
      ],
      content: `
        <h3>The Pradhan Mantri MUDRA Yojana (PMMY) Evolution</h3>
        <p>Announced in the Union Budget, the enhancement of the MUDRA scheme limit represents a massive boost for micro enterprises that have outgrown the original ₹10 Lakh ceiling but still require quick, unsecured working capital and term funding.</p>

        <h4>MUDRA Category Classifications</h4>
        <ul>
          <li><strong>Shishu:</strong> Covering loans up to ₹50,000 for early-stage setups.</li>
          <li><strong>Kishor:</strong> Covering loans from ₹50,001 up to ₹5,00,000 for established small businesses.</li>
          <li><strong>Tarun & Tarun Plus:</strong> Covering loans up to ₹20,00,000 for mature entrepreneurs seeking capital expansion.</li>
        </ul>
      `
    },
    {
      id: 'interest-subvention-schemes-2026',
      title: 'Interest Subvention Schemes: Cutting Your Effective Bank Borrowing Cost by 2% to 5%',
      slug: 'interest-subvention-schemes-2026',
      category: 'Government Subsidies',
      badgeLabel: 'Subvention',
      date: '24 Oct 2026',
      readTime: '5 min read',
      featured: false,
      rowType: 'standard', // Standard row (3-column)
      imageType: 'illustration_blue',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      summary: 'High bank interest rates eating into your gross margins? How central and state interest rebate programs reduce your effective annual interest rates for plant & machinery term loans...',
      keyPoints: [
        'Interest rate relief of 2% to 5% credited directly against your term loan account',
        'Combinable with capital subsidy programs under specific state guidelines',
        'Requires quarterly auditor certification of asset utilization and timely EMI repayment'
      ],
      content: `
        <h3>Maximizing Profitability with Interest Subvention</h3>
        <p>Interest subvention is one of the most underutilized financial reliefs available to Indian manufacturers. Under various central ministry schemes (Textiles TUFS, Food Processing MoFPI, Agriculture Infrastructure Fund) and State Industrial Policies, eligible enterprises can receive 2% to 5% interest reimbursements credited directly by lending banks.</p>

        <h4>Qualifying Criteria</h4>
        <p>Units must ensure zero default history on working capital or term loan EMIs during the claimed financial year. AB Consultancy handles the statutory interest certificate consolidation and nodal agency filings.</p>
      `
    }
  ];

  // Filter articles based on Category and Search Query
  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Split into Top Row (First 2 articles) and Bottom Grid (Remaining)
  const topRowArticles = filteredArticles.slice(0, 2);
  const bottomRowArticles = filteredArticles.slice(2);

  const handleShareArticle = (art) => {
    const url = `${window.location.origin}/blog#${art.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedSlug(true);
      setTimeout(() => setCopiedSlug(false), 2000);
    }
  };

  return (
    <div className="relative w-full bg-[#F4F8FD] text-slate-800 min-h-screen selection:bg-[#0062FF] selection:text-white pb-20 overflow-hidden">
      
      {/* Inject Structured Data Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Ambient Gradient Background Glows (Contained strictly within BlogPage, never bleeding to footer) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-50/70 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">

        {/* ===================== PAGE HEADER (LIGHT THEME) ===================== */}
        <header className="pt-8 sm:pt-12 pb-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 border-b border-slate-200/80">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0062FF] font-semibold">Blog & Scheme Playbooks</span>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow Pill Tag with Smooth Left-to-Right Reveal Animation (Brand Continuity) */}
            <div 
              className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[#0062FF] text-xs sm:text-[12.5px] font-semibold mb-4 w-fit select-none"
              aria-label="Official Knowledge Hub & Policy Advisory"
            >
              {/* 1. Stationary Book Icon - Visible immediately (Zero duplicate building icon) */}
              <span className="relative z-10 w-4 h-4 rounded-full bg-[#0062FF] text-white flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-2.5 h-2.5" />
              </span>

              {/* 2. Badge Background / Pill Layer - Reveals smoothly left-to-right (0–900ms) */}
              <div 
                className="absolute inset-0 rounded-full bg-[#EBF3FE] border border-[#D5E5FD] shadow-[0_1px_2px_rgba(0,98,255,0.05)] animate-badge-pill pointer-events-none z-0" 
              />

              {/* 3. Text - Reveals sequentially character-by-character (400–1800ms) */}
              <span className="relative z-10 inline-flex items-center" aria-hidden="true">
                {'Official Knowledge Hub & Policy Advisory'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="animate-badge-char"
                    style={{
                      animationDelay: `${400 + index * 28}ms`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </div>

            {/* Page Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Government Schemes, Subsidies & DPR Playbooks
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Authoritative financial blueprints, policy notifications, and bank credit appraisals curated by senior ex-bank underwriters and certified MSME project consultants in Ahilyanagar (Ahmednagar) & Pan-India.
            </p>

            {/* Trust Metrics Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-700">
              <span className="flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Updated for 2026 Guidelines
              </span>
              <span className="flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0062FF]" />
                100% RBI & Gazette Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-xs font-medium">
                <Landmark className="w-3.5 h-3.5 text-blue-600" />
                40+ PSU & Commercial Bank Network
              </span>
            </div>
          </div>

        </header>

        {/* ===================== CONTROLS BAR: CATEGORIES & SEARCH ===================== */}
        <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0062FF] text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search schemes, DPR, subsidy..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#0062FF] transition-all shadow-xs"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ===================== BLOG STRUCTURE (EXACT MATCH TO REFERENCE) ===================== */}
        <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-4">

          {/* Empty Search State */}
          {filteredArticles.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12 shadow-sm">
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching articles found</h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">
                Try adjusting your search query or reset the category filters.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-5 py-2.5 bg-[#0062FF] text-white font-semibold text-xs rounded-xl hover:bg-blue-600 transition-colors cursor-pointer shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ================= 1. TOP ROW: 12-COLUMN ASYMMETRIC GRID (1st Card: 1/3rd, 2nd Card: 2/3rds) ================= */}
          {topRowArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-8 sm:mb-10">
              {topRowArticles.map((article, index) => {
                const isFirstCard = index === 0;
                return (
                  <div 
                    key={article.id}
                    className={`bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                      isFirstCard 
                        ? 'col-span-12 md:col-span-4' 
                        : 'col-span-12 md:col-span-8'
                    }`}
                  >
                    <div>
                      {/* Top Media / Illustration Container (Reduced 20% in height) */}
                      <div className="rounded-2xl overflow-hidden h-56 sm:h-60 lg:h-[250px] w-full bg-slate-50 border border-slate-200/70 mb-3.5 relative flex items-center justify-center p-3">
                        {article.imageType === 'flowchart' ? (
                          /* Flowchart Infographic matching user's Image 1 Left (Light Theme, 1/3 Column Optimized) */
                          <div className="w-full h-full flex flex-col justify-center items-center select-none py-0.5">
                            <div className="w-full grid grid-cols-2 gap-x-2 gap-y-1.5 text-[9.5px] sm:text-[10px]">
                              
                              {/* Node 1 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">01</span>
                                <span className="text-slate-800 font-medium truncate">RBI / KVIC Form</span>
                              </div>

                              {/* Node 2 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">02</span>
                                <span className="text-slate-800 font-medium truncate">DTFC Scrutiny</span>
                              </div>

                              {/* Node 3 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">03</span>
                                <span className="text-slate-800 font-medium truncate">DPR & CMA Matrix</span>
                              </div>

                              {/* Node 4 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">04</span>
                                <span className="text-slate-800 font-medium truncate">Credit Appraisal</span>
                              </div>

                              {/* Node 5 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">05</span>
                                <span className="text-slate-800 font-medium truncate">Bank Sanction</span>
                              </div>

                              {/* Node 6 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">06</span>
                                <span className="text-slate-800 font-medium truncate">EDP Training</span>
                              </div>

                              {/* Node 7 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">07</span>
                                <span className="text-slate-800 font-medium truncate">Loan Disbursal</span>
                              </div>

                              {/* Node 8 */}
                              <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-2 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold flex items-center justify-center text-[9px] shrink-0">08</span>
                                <span className="text-slate-800 font-medium truncate">TDR Subsidy</span>
                              </div>

                            </div>
                          </div>
                        ) : (
                          /* Corporate Banner matching user's Image 1 Right (Expansive 2/3rds Layout) */
                          <div className="w-full h-full relative overflow-hidden rounded-xl">
                            <img 
                              src={article.imageSrc} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                            <div className="absolute top-2.5 left-2.5 bg-[#0062FF] px-2.5 py-0.5 rounded-md text-[10px] font-bold text-white shadow-xs">
                              CGTMSE ₹5 CR GUARANTEE
                            </div>
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] sm:text-[12px] font-semibold text-white tracking-wide">
                              ZERO COLLATERAL • 85% RECOVERY BACKING • PSU & PRIVATE BANKS
                            </div>
                          </div>
                        )}
                      </div>

                    {/* Category Pill with Folder Icon (Directly underneath image) */}
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-[#0062FF]">
                        <Folder className="w-3 h-3 text-[#0062FF]" />
                        <span>{article.badgeLabel || article.category}</span>
                      </span>
                    </div>

                    {/* Card Title */}
                    <h2 
                      onClick={() => setActiveArticle(article)}
                      className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062FF] transition-colors leading-snug line-clamp-2 cursor-pointer mb-2"
                    >
                      {article.title}
                    </h2>

                    {/* Card Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Bottom Row: Date & Amber "Read Article →" */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-500 font-medium">
                      {article.date}
                    </span>

                    <button
                      onClick={() => setActiveArticle(article)}
                      className="text-[#D97706] hover:text-[#B45309] font-bold text-xs sm:text-sm flex items-center gap-1 cursor-pointer transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>Read Article</span>
                      <span className="text-base leading-none">→</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

          {/* ================= 2. BOTTOM ROW: 3-COLUMN GRID (Matching Reference Image 2) ================= */}
          {bottomRowArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {bottomRowArticles.map((article) => {
                return (
                <div 
                  key={article.id}
                  className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Top Media Container (Reduced 20% in height) */}
                    <div className="rounded-2xl overflow-hidden h-44 sm:h-48 lg:h-[180px] w-full bg-slate-100 border border-slate-200/60 mb-3.5 relative flex items-center justify-center">
                      <img 
                        src={article.imageSrc} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      
                      {/* Stylized Badge Overlay for Visual Variety */}
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md text-[9.5px] font-bold text-slate-800 border border-slate-200 shadow-xs">
                        {article.category}
                      </div>
                    </div>

                    {/* Category Pill with Folder Icon (Directly underneath image) */}
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-[#0062FF]">
                        <Folder className="w-3 h-3 text-[#0062FF]" />
                        <span>{article.badgeLabel || article.category}</span>
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 
                      onClick={() => setActiveArticle(article)}
                      className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#0062FF] transition-colors leading-snug line-clamp-2 cursor-pointer mb-2"
                    >
                      {article.title}
                    </h3>

                    {/* Card Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Bottom Row: Date & Amber "Read Article →" */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-500 font-medium">
                      {article.date}
                    </span>

                    <button
                      onClick={() => setActiveArticle(article)}
                      className="text-[#D97706] hover:text-[#B45309] font-bold text-xs sm:text-sm flex items-center gap-1 cursor-pointer transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>Read Article</span>
                      <span className="text-base leading-none">→</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        </main>

        {/* ===================== SUBSIDY CONSULTATION BANNER ===================== */}
        <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mt-16 sm:mt-20">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-[#0062FF] to-blue-700 p-8 sm:p-12 overflow-hidden shadow-xl text-white">
            <div className="relative z-10 max-w-2xl">
              {/* Consultation Eyebrow Pill Tag with Smooth Reveal Animation (Brand Continuity, Zero Stars) */}
              <div 
                className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-white text-xs sm:text-[12.5px] font-semibold mb-4 w-fit select-none"
                aria-label="Ahilyanagar & Maharashtra MSME Advisory"
              >
                {/* 1. Stationary Icon Circle - White circle with Blue Handshake advisory icon */}
                <span className="relative z-10 w-4 h-4 rounded-full bg-white text-[#0062FF] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Handshake className="w-2.5 h-2.5" />
                </span>

                {/* 2. Badge Background / Pill Layer - Reveals smoothly left-to-right (0–900ms) */}
                <div 
                  className="absolute inset-0 rounded-full bg-white/15 border border-white/30 backdrop-blur-md shadow-sm animate-badge-pill pointer-events-none z-0" 
                />

                {/* 3. Text - Reveals sequentially character-by-character (400–1800ms) */}
                <span className="relative z-10 inline-flex items-center" aria-hidden="true">
                  {'Ahilyanagar & Maharashtra MSME Advisory'.split('').map((char, index) => (
                    <span
                      key={index}
                      className="animate-badge-char"
                      style={{
                        animationDelay: `${400 + index * 28}ms`,
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have questions about your project cost or subsidy qualification?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Connect directly with our ex-bank credit appraisers and project consultants. We audit your project feasibility, compute non-repayable grant margins, and structure bank-grade DPRs.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={onCheckEligibility}
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0062FF] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Check Subsidy Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onTalkConsultant}
                  className="px-6 py-3 rounded-full bg-blue-700/80 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm border border-blue-400/40 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Handshake className="w-4 h-4 text-white" />
                  <span>Talk to Consultant</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ===================== FULL ARTICLE READER MODAL (LIGHT THEME) ===================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0062FF]">
                  <Folder className="w-3.5 h-3.5 text-[#0062FF]" />
                  <span>{activeArticle.badgeLabel || activeArticle.category}</span>
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShareArticle(activeArticle)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#0062FF] hover:bg-blue-50 transition-colors cursor-pointer"
                  title="Share article link"
                >
                  {copiedSlug ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Article Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeArticle.title}
              </h1>

              {/* Publication Meta */}
              <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Published on {activeArticle.date}</span>
                </div>
                <span>•</span>
                <span className="text-emerald-600 font-semibold">Verified by Ex-Bank Underwriter</span>
              </div>

              {/* Key Takeaways Box */}
              {activeArticle.keyPoints && (
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0062FF]">
                    <ShieldCheck className="w-4 h-4 text-[#0062FF]" />
                    <span>Executive Summary & Key Takeaways</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {activeArticle.keyPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Article HTML Body */}
              <div 
                className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              {/* CTAs inside article */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Need tailored assistance for this scheme?</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Our consultants can screen your eligibility and prepare a compliant DPR.</p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onCheckEligibility();
                    }}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0062FF] hover:bg-blue-600 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer"
                  >
                    Check Eligibility
                  </button>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onTalkConsultant();
                    }}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-all cursor-pointer"
                  >
                    Talk to Consultant
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Sticky Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                AB Consultancy Scheme Advisory Hub
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
              >
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
