import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Clock, Calendar, ArrowRight, User, Tag, Search, 
  CheckCircle2, ChevronRight, X, Share2, Landmark, 
  FileText, ShieldCheck, TrendingUp, HelpCircle
} from 'lucide-react';

export default function BlogSection({ onCheckEligibility, onTalkConsultant }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    'All',
    'Government Subsidies',
    'DPR & CMA Reports',
    'Collateral-Free Loans',
    'State Industrial Schemes'
  ];

  const articles = [
    {
      id: 'pmegp-subsidy-guide-2026',
      title: 'PMEGP 2026 Comprehensive Guide: Unlocking Up to 35% Capital Subsidy for New Units',
      slug: 'pmegp-subsidy-guide-2026',
      category: 'Government Subsidies',
      badgeColor: 'bg-blue-50 text-brand-600 border-blue-200',
      readTime: '6 min read',
      date: 'Nov 18, 2026',
      author: {
        name: 'Sanjay Patil',
        role: 'Senior Project Finance Advisor',
        avatarBg: 'bg-blue-600'
      },
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      summary: 'A step-by-step roadmap to maximizing your PMEGP grant under the revised 2026 guidelines. Learn how rural vs urban classification and promoter category impact your subsidy.',
      featured: true,
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
          <table class="w-full text-left text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-800">
                <th class="p-2 border">Category</th>
                <th class="p-2 border">Beneficiary Own Share</th>
                <th class="p-2 border">Urban Subsidy</th>
                <th class="p-2 border">Rural Subsidy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-medium">General Category</td>
                <td class="p-2 border">10% of Project Cost</td>
                <td class="p-2 border">15% Grant</td>
                <td class="p-2 border font-semibold text-brand-600">25% Grant</td>
              </tr>
              <tr class="bg-blue-50/50">
                <td class="p-2 border font-medium">Special Category (Women, SC/ST, OBC, Minorities, Ex-Defence)</td>
                <td class="p-2 border">5% of Project Cost</td>
                <td class="p-2 border">25% Grant</td>
                <td class="p-2 border font-bold text-emerald-600">35% Grant</td>
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
      id: 'bank-grade-dpr-cma-metrics',
      title: 'Bank-Grade DPR Mastery: 7 Critical Financial Ratios Underwriters Look For',
      slug: 'bank-grade-dpr-cma-metrics',
      category: 'DPR & CMA Reports',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      readTime: '5 min read',
      date: 'Nov 15, 2026',
      author: {
        name: 'Adv. Amit Bhide',
        role: 'MSME Banking & Credit Specialist',
        avatarBg: 'bg-emerald-600'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      summary: 'Discover the exact financial metrics that determine whether your business loan is approved or rejected. Master DSCR, Current Ratio, Break-Even Point, and sensitivity modeling.',
      featured: false,
      keyPoints: [
        'Why DSCR below 1.5 triggers immediate scrutiny by PSU credit committees',
        'Ideal Current Ratio benchmark: 1.33:1 under Tandon / Nayak committee norms',
        'Break-Even Point (BEP) should ideally be achieved within 40-55% of operating capacity',
        'Sensitivity analysis under 10% raw material inflation or sales delay scenarios'
      ],
      content: `
        <h3>Why Most Self-Prepared Project Reports Get Rejected</h3>
        <p>Every week, dozens of ambitious entrepreneurs approach banks with generic 10-page project reports downloaded from generic templates. Over 78% of these applications face immediate queries or outright rejections by commercial bank credit officers. The reason? They fail standard CMA (Credit Monitoring Arrangement) stress tests.</p>

        <h4>1. Debt Service Coverage Ratio (DSCR)</h4>
        <p>The DSCR measures your enterprise's cash flow ability to service principal and interest obligations. While 1.0 is technically break-even, banks mandate an average <strong>DSCR of 1.50 to 1.80</strong> across the loan tenure. Anything under 1.25 triggers automatic red flags.</p>

        <h4>2. Current Ratio (Liquidity Benchmark)</h4>
        <p>Following Nayak Committee guidelines for MSME working capital assessment, banks look for a <strong>minimum Current Ratio of 1.33:1</strong>. This proves your current assets comfortably exceed short-term liabilities and ensures working capital won't bleed into term debt.</p>

        <h4>3. Internal Rate of Return (IRR) & Payback Period</h4>
        <p>Your post-tax IRR must exceed the weighted average cost of capital (WACC) by at least 4% to 6%, with typical term loans requiring capital recovery within 4 to 6 operational years.</p>

        <h4>The AB Consultancy Quality Promise</h4>
        <p>We draft comprehensive 45+ page DPRs equipped with dynamic sensitivities, month-by-month cash flows, depreciation schedules under the Companies Act and IT Act, break-even graphs, and full statutory compliance certifications accepted by all leading PSU and private sector banks.</p>
      `
    },
    {
      id: 'cgtmse-collateral-free-loan-playbook',
      title: 'CGTMSE Playbook: How to Get Up to ₹5 Crore Business Loan Without Mortgage',
      slug: 'cgtmse-collateral-free-loan-playbook',
      category: 'Collateral-Free Loans',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
      readTime: '4 min read',
      date: 'Nov 12, 2026',
      author: {
        name: 'Priya Deshmukh',
        role: 'Credit Advisory & Collateral Lead',
        avatarBg: 'bg-purple-600'
      },
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      summary: 'Everything you need to know about securing pure collateral-free credit under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).',
      featured: false,
      keyPoints: [
        'Enhanced credit guarantee coverage limit up to ₹5 Crore per eligible borrower',
        'Coverage up to 85% for micro enterprises and women-owned units',
        'Hybrid security structure permitted: pledge available collateral for higher limits',
        'Annual Guarantee Fee (AGF) reduced to 0.37% - 1.35% based on loan ticket'
      ],
      content: `
        <h3>The Reality of Collateral-Free Lending in India</h3>
        <p>Many entrepreneurs believe that getting a bank loan always requires pledging residential or agricultural property. Under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)—jointly set up by the Ministry of MSME and SIDBI—eligible micro and small enterprises can secure term loans and working capital facilities <strong>up to ₹5 Crore with zero third-party guarantee or property mortgage</strong>.</p>

        <h4>Coverage Ratios and Guarantee Levels</h4>
        <ul>
          <li><strong>Micro Enterprises (Loans up to ₹5 Lakhs):</strong> 85% guarantee cover</li>
          <li><strong>Women Entrepreneurs & SC/ST Promoters:</strong> 85% guarantee cover up to ₹5 Crore</li>
          <li><strong>Units located in Aspirational / Rural Districts:</strong> 85% coverage</li>
          <li><strong>All other MSE borrowers:</strong> 75% coverage up to ₹50 Lakhs; 75% for loans ₹50 Lakhs to ₹5 Crore</li>
        </ul>

        <h4>Why Banks Sometimes Hesitate & How to Overcome It</h4>
        <p>Because the bank bears 15% to 25% residual credit risk in the event of default, branch managers scrutinize repayment capability rigorously. You cannot approach the bank with vague financials. A meticulously engineered CMA sheet, clean promoter CIBIL score (700+), solid commercial viability, and professional credit proposal presentation are essential to convince the sanctioning committee.</p>
      `
    },
    {
      id: 'maharashtra-psi-industrial-policy',
      title: 'Maharashtra Industrial Policy (PSI): Capital, Power & Stamp Duty Subsidies',
      slug: 'maharashtra-psi-industrial-policy',
      category: 'State Industrial Schemes',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      readTime: '5 min read',
      date: 'Nov 08, 2026',
      author: {
        name: 'Vikram Joshi',
        role: 'State Industrial Policy Consultant',
        avatarBg: 'bg-amber-600'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      summary: 'Explore Package Scheme of Incentives (PSI) benefits for units in Ahilyanagar / Ahmednagar district. Learn how taluka categorization delivers up to 80% Gross SGST reimbursement.',
      featured: false,
      keyPoints: [
        'Zonal categorization (Talukas categorized as B, C, D, D+ across Ahilyanagar district)',
        'Gross SGST reimbursement up to 80% to 100% of Fixed Capital Investment (FCI)',
        'Electricity tariff subsidy: ₹1 to ₹2 per unit rebate for 3 to 7 years',
        '100% Stamp Duty and Electricity Duty exemption during construction & production'
      ],
      content: `
        <h3>Package Scheme of Incentives (PSI) for Maharashtra MSMEs</h3>
        <p>The Government of Maharashtra’s Package Scheme of Incentives (PSI) is among India’s most generous state-level industrial promotion frameworks. Designed to disperse industrial development away from Tier-1 metros (Mumbai/Pune), the policy offers escalated incentives for backward and developing talukas such as those in Ahilyanagar (Ahmednagar) district.</p>

        <h4>Key Subsidy Components under PSI</h4>
        <ol>
          <li><strong>Industrial Promotion Subsidy (IPS):</strong> Reimbursement of Gross State Goods and Services Tax (SGST) paid on intra-state sales, capped up to 80% to 100% of eligible Fixed Capital Investment over 7 to 10 years.</li>
          <li><strong>Interest Subsidy:</strong> 5% per annum on term loans for micro and small enterprises in C, D, and D+ areas, drastically lowering your effective borrowing cost.</li>
          <li><strong>Power Tariff Concession:</strong> ₹1.00 to ₹2.00 per unit reduction in power bills for 3 to 5 years, providing massive operational savings for power-intensive manufacturing.</li>
          <li><strong>100% Stamp Duty Exemption:</strong> Zero stamp duty on acquisition of MIDC land or private industrial plots during the investment period.</li>
        </ol>

        <h4>Eligibility Filing Timelines</h4>
        <p>Units must apply for an Eligibility Certificate (EC) with the Directorate of Industries prior to commercial production commencement. Post-facto applications are rejected. AB Consultancy handles your complete dossier filing with the Joint Director of Industries (JDI) to guarantee timely eligibility sanctions.</p>
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
        art.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id);

  return (
    <section id="blog" className="py-20 bg-slate-50/60 border-t border-slate-200/80 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-brand-700 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              <span>Industry Insights & Advisory Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Government Schemes, Subsidies & DPR Playbooks
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Authoritative guides, regulatory updates, and bank credit insights authored by senior ex-bank underwriters and certified MSME project consultants.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 flex-shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search schemes, DPR, subsidy..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
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

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 scale-[1.02]'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto my-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching articles found</h3>
            <p className="text-sm text-slate-500 mt-1 mb-5">
              Try adjusting your search query or select another category filter.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-brand-50 text-brand-600 font-semibold text-xs rounded-xl hover:bg-brand-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Featured Article Card */}
        {featuredArticle && (
          <div className="mb-10 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image Column */}
              <div className="lg:col-span-5 relative overflow-hidden min-h-[260px] lg:min-h-[360px] bg-slate-100">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent lg:hidden" />
                
                {/* Floating Category Badge on Mobile */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-brand-700 shadow-sm backdrop-blur-md">
                    Featured Playbook
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md font-semibold border ${featuredArticle.badgeColor}`}>
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featuredArticle.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {featuredArticle.date}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer leading-snug tracking-tight"
                  >
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {featuredArticle.summary}
                  </p>

                  {/* Highlights Bullet Preview */}
                  <div className="mt-4 space-y-1.5 hidden sm:block">
                    {featuredArticle.keyPoints.slice(0, 3).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Author Bio & CTA */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${featuredArticle.author.avatarBg} text-white flex items-center justify-center font-bold text-xs shadow-sm`}>
                      {featuredArticle.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</div>
                      <div className="text-[11px] text-slate-500">{featuredArticle.author.role}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-600 hover:text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        {regularArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold border backdrop-blur-md bg-white/90 ${article.badgeColor}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2.5">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>

                    <h4 
                      onClick={() => setActiveArticle(article)}
                      className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug cursor-pointer"
                    >
                      {article.title}
                    </h4>

                    <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full ${article.author.avatarBg} text-white flex items-center justify-center font-bold text-[10px]`}>
                      {article.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs font-semibold text-slate-800 line-clamp-1">
                      {article.author.name}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="text-brand-600 hover:text-brand-700 font-bold text-xs inline-flex items-center gap-1 group/btn"
                  >
                    <span>Read</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Fast Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-2">
                Expert Advisory Support
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Need Specific Scheme Analysis or Bank-Ready DPR for Your Unit?
              </h3>
              <p className="mt-1 text-sm text-slate-300 max-w-xl">
                Get your project pre-screened against 40+ bank credit policies and central/state subsidy norms with our Ahilyanagar team.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <button
                onClick={onCheckEligibility}
                className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all"
              >
                Check Subsidy Eligibility
              </button>
              <button
                onClick={onTalkConsultant}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                Book 1-on-1 Consultation
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ===================== FULL ARTICLE READER MODAL ===================== */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${activeArticle.badgeColor}`}>
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {activeArticle.readTime}
                </span>
              </div>

              <button 
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-full hover:bg-slate-200/80 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                {activeArticle.title}
              </h2>

              {/* Author & Meta */}
              <div className="flex items-center justify-between py-3 border-y border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${activeArticle.author.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-sm`}>
                    {activeArticle.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{activeArticle.author.name}</div>
                    <div className="text-xs text-slate-500">{activeArticle.author.role} • {activeArticle.date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="p-2 rounded-xl text-slate-500 hover:text-brand-600 hover:bg-brand-50 border border-slate-200 transition-colors text-xs font-semibold inline-flex items-center gap-1"
                    title="Share article"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  Key Takeaways for MSMEs
                </h4>
                <ul className="space-y-2">
                  {activeArticle.keyPoints.map((pt, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rich HTML Content */}
              <div 
                className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              {/* In-Article Conversion Banner */}
              <div className="bg-gradient-to-br from-slate-900 to-brand-navy rounded-2xl p-6 text-white text-center mt-8">
                <h4 className="text-lg font-bold">Applying for this scheme?</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                  Our certified consultants will calculate your exact subsidy grant entitlement and structure your bank-ready DPR.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onCheckEligibility();
                    }}
                    className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                  >
                    Calculate Subsidy Amount
                  </button>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onTalkConsultant();
                    }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all"
                  >
                    Request Free Call
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-100 flex items-center justify-end bg-slate-50/50">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
