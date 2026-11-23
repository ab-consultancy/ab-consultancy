import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function FAQSection({ onTalkConsultant }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Can I obtain a business loan without offering property collateral?',
      a: 'Yes, under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme, eligible MSMEs can secure working capital and term loans up to ₹5 Crore without offering immovable property mortgage. The trust provides guarantee coverage up to 85% to the lending bank.'
    },
    {
      q: 'How does the PMEGP government subsidy work?',
      a: 'PMEGP (Prime Minister Employment Generation Programme) offers credit-linked subsidies between 15% to 35% on project costs up to ₹50 Lakhs for manufacturing and ₹20 Lakhs for services. The subsidy is kept in a Term Deposit Receipt (TDR) for 3 years without interest and adjusted against your loan upon successful verification.'
    },
    {
      q: 'What is a Bank-Compliant DPR and why is it necessary?',
      a: 'A Detailed Project Report (DPR) includes techno-commercial feasibility, 10-year projected balance sheets, CMA data, debt service coverage ratio (DSCR), and break-even calculations. Banks reject unformatted proposals; our reports are prepared adhering strictly to RBI and bank credit policy requirements.'
    },
    {
      q: 'How long does the entire sanction and subsidy approval process take?',
      a: 'DPR preparation takes 2 to 4 business days. Bank processing and sanction typically takes 15 to 30 days depending on the bank branch, and government task force approval for subsidy claims takes 3 to 6 weeks. Our team actively liaisons to minimize turnaround.'
    },
    {
      q: 'Who is eligible to apply for these schemes?',
      a: 'Any Indian citizen above 18 years of age setting up a new business or expanding an existing manufacturing/service enterprise is eligible. Special incentives and higher subsidy percentages are allocated for women, SC/ST, OBC, and rural-based entrepreneurs.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-slate-50 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Queries
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Clear, honest answers about government subsidies, bank loans, and documentation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-brand-500 transition-colors"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                  openIdx === idx ? 'rotate-180 text-brand-500' : ''
                }`} />
              </button>

              {openIdx === idx && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA help card */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-brand-100 shadow-soft text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">Have a custom query regarding your project?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Speak with our senior project finance analyst for tailored advice.</p>
          </div>
          <button
            onClick={onTalkConsultant}
            className="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs flex items-center gap-2 flex-shrink-0 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Request Immediate Callback</span>
          </button>
        </div>

      </div>
    </section>
  );
}

