import React from 'react';
import { Landmark, Handshake, ShieldCheck, FileCheck, Headphones } from 'lucide-react';

export default function TrustBenefitsStrip({ onFeatureClick }) {
  const features = [
    {
      id: 'subsidies',
      line1: 'Central &',
      line2: 'State Subsidies',
      desc: 'PMEGP, MSME, Capital & Interest Rebates up to 35%',
      icon: Landmark,
    },
    {
      id: 'collateral-free',
      line1: 'Collateral-Free',
      line2: 'Loan Support',
      desc: 'CGTMSE & Mudra loans up to ₹5 Crore with zero property mortgage',
      icon: Handshake,
    },
    {
      id: 'eligibility',
      line1: 'Verified',
      line2: 'Eligibility Check',
      desc: 'Pre-screened against 40+ Public & Private Bank credit policies',
      icon: ShieldCheck,
    },
    {
      id: 'dpr',
      line1: 'Bank-Compliant',
      line2: 'DPR',
      desc: 'Detailed Project Reports & CMA projections with 99.4% acceptance',
      icon: FileCheck,
    },
    {
      id: 'filing',
      line1: 'End-to-End',
      line2: 'Filing Support',
      desc: 'From initial application to final subsidy disbursement release',
      icon: Headphones,
    }
  ];

  return (
    <section className="w-full bg-white border-y border-slate-200/80 py-6 lg:py-8 shadow-[0_2px_15px_rgba(0,0,0,0.02)] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Feature Grid across full viewport container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-0 lg:divide-x divide-slate-200/80 items-start">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                onClick={() => onFeatureClick && onFeatureClick(item)}
                className={`flex flex-col items-center text-center px-3 sm:px-4 lg:px-5 group cursor-pointer transition-all duration-200 ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                {/* Icon Container with generous touch/visual target */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-blue-50/80 border border-blue-100/70 text-[#0062FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0062FF] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>

                {/* Two-line clean typography scaled up */}
                <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0062FF] transition-colors leading-snug">
                  <span className="block">{item.line1}</span>
                  <span className="block">{item.line2}</span>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[12.5px] text-slate-500 mt-1 leading-relaxed max-w-[210px] mx-auto">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
