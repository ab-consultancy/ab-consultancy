import React from 'react';
import { Landmark, Shield, FileText, Award, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

export default function SchemesSection({ onSelectScheme }) {
  const schemes = [
    {
      icon: Landmark,
      title: 'PMEGP Subsidy Scheme',
      tag: 'Up to 35% Capital Grant',
      subtitle: 'Prime Minister Employment Generation Programme',
      description: 'Central government credit-linked subsidy scheme offering 15% to 35% non-repayable grant for setting up new manufacturing or service units.',
      highlights: [
        'Max Project: ₹50 Lakhs (Mfg) / ₹20 Lakhs (Service)',
        '35% Subsidy for Rural / Women / Special Category',
        '25% Subsidy for General Rural Category',
        'Minimal 5% - 10% Promoter Contribution'
      ],
      popular: true
    },
    {
      icon: Shield,
      title: 'CGTMSE Collateral-Free Loans',
      tag: 'Zero Property Mortgage',
      subtitle: 'Credit Guarantee Fund Trust for MSEs',
      description: 'Avail bank funding from ₹10 Lakhs up to ₹5 Crores without pledging immovable property or third-party collateral guarantee.',
      highlights: [
        'Coverage up to ₹500 Lakhs (₹5 Crores)',
        'Up to 85% guarantee coverage to lending bank',
        'Available across Nationalized & Private Banks',
        'Ideal for working capital & machinery purchase'
      ],
      popular: false
    },
    {
      icon: FileText,
      title: 'Bank-Compliant DPR & CMA',
      tag: '99.4% Approval Standard',
      subtitle: 'Detailed Project Report & Financial Model',
      description: 'Comprehensive techno-economic feasibility reports crafted according to RBI guidelines and state bank credit policy norms.',
      highlights: [
        '10-Year Projected Balance Sheet & P&L',
        'CMA Data & Cash Flow Sensitivity Analysis',
        'Break-Even & DSCR Debt Service Ratios',
        'Vetted by Ex-Bank Chief Managers'
      ],
      popular: false
    },
    {
      icon: Award,
      title: 'State Industrial Incentives',
      tag: 'State Package Schemes',
      subtitle: 'State Package Scheme of Incentives',
      description: 'Additional capital investment subsidy, 5% to 7% interest subvention, electricity duty exemptions, and 100% stamp duty waiver.',
      highlights: [
        'Capital Investment Subsidy (10% - 25%)',
        'Interest Rebate on Term Loans for 5 Years',
        'Power Tariff Subsidy up to ₹2/unit',
        '100% Stamp Duty & Registration Waiver'
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="pt-4 pb-7 sm:py-9 lg:py-20 bg-slate-50/70 border-t border-slate-100 scroll-mt-20">
      {/* Container aligned with Navbar & Hero (1440px grid) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-7 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 lg:px-3.5 lg:py-1.5 rounded-full bg-brand-50 text-brand-600 text-[10.5px] lg:text-xs font-bold uppercase tracking-wider mb-1 lg:mb-3">
            <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
            Core Advisory Offerings
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Funding & Subsidy Solutions
          </h2>
          <p className="mt-1 lg:mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-normal lg:leading-relaxed">
            We navigate the intricate landscape of government incentives and bank underwriting so you can concentrate on building your enterprise.
          </p>
        </div>

        {/* Schemes Grid: Aligned to outer 1440px boundary, and structured/balanced internally */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-6 items-stretch">
          {schemes.map((scheme, idx) => {
            const Icon = scheme.icon;
            return (
              <div
                key={idx}
                className={`relative bg-white rounded-xl lg:rounded-2xl p-4 sm:p-4.5 lg:p-6 border transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-1.5 flex flex-col justify-between h-full ${
                  scheme.popular 
                    ? 'border-brand-500 shadow-brand ring-2 ring-brand-500/10' 
                    : 'border-slate-200/90 hover:border-brand-200 shadow-xs lg:shadow-soft hover:shadow-md'
                }`}
              >
                {scheme.popular && (
                  <div className="absolute -top-2.5 lg:-top-3 right-4 lg:right-6 bg-brand-500 text-white text-[9.5px] lg:text-[11px] font-bold uppercase tracking-wider py-0.5 lg:py-1 px-2.5 lg:px-3 rounded-full shadow-xs lg:shadow-sm">
                    Most Requested
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  {/* Card Header: Tag badge + Icon */}
                  <div className="flex items-center justify-between gap-2 mb-2 lg:mb-3">
                    <span className="inline-block text-[10px] lg:text-xs font-bold tracking-wide text-brand-600 bg-brand-50 px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-md lg:rounded-lg border border-brand-100/60">
                      {scheme.tag}
                    </span>
                    <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-slate-100/80 text-brand-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                    </div>
                  </div>

                  {/* Title with aligned vertical height on desktop */}
                  <div className="lg:h-[3.25rem] flex flex-col justify-start">
                    <h3 className="text-[15px] lg:text-lg font-bold text-slate-900 leading-snug lg:leading-tight">
                      {scheme.title}
                    </h3>
                  </div>

                  {/* Subtitle with aligned vertical height on desktop */}
                  <div className="lg:h-[2.5rem] flex flex-col justify-start mt-0.5 lg:mt-1">
                    <p className="text-[11px] lg:text-xs text-slate-400 font-medium truncate lg:truncate-none lg:whitespace-normal">
                      {scheme.subtitle}
                    </p>
                  </div>

                  {/* Description with aligned vertical height on desktop */}
                  <div className="lg:h-[5.5rem] flex flex-col justify-start mt-2 lg:mt-3">
                    <p className="text-[11.5px] lg:text-xs text-slate-600 leading-relaxed line-clamp-2 lg:line-clamp-4">
                      {scheme.description}
                    </p>
                  </div>

                  {/* Highlights: 4 items row-aligned with consistent baseline */}
                  <div className="mt-3 lg:mt-5 pt-2.5 lg:pt-4 border-t border-slate-100 space-y-1.5 lg:space-y-2.5 flex-1 flex flex-col justify-start lg:min-h-[145px]">
                    {scheme.highlights.map((point, pIdx) => (
                      <div 
                        key={pIdx} 
                        className={`items-start gap-1.5 lg:gap-2 text-[11px] lg:text-xs text-slate-700 leading-tight lg:leading-normal ${
                          pIdx === 3 ? 'hidden lg:flex' : 'flex'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="truncate lg:truncate-none lg:whitespace-normal">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button: Perfectly aligned across all cards */}
                <div className="mt-3 lg:mt-5 pt-2.5 lg:pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectScheme && onSelectScheme(scheme.title)}
                    className="w-full py-2 lg:py-2.5 px-3 lg:px-4 rounded-lg lg:rounded-xl bg-slate-50 hover:bg-brand-500 hover:text-white text-slate-700 font-semibold text-[11px] lg:text-xs flex items-center justify-center gap-1 lg:gap-1.5 transition-all duration-200 group cursor-pointer"
                  >
                    <span>Check Eligibility</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
