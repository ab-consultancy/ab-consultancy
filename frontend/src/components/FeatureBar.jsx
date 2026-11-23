import React from 'react';
import { Landmark, Handshake, ShieldCheck, FileCheck, Headphones } from 'lucide-react';

export default function FeatureBar({ onFeatureClick }) {
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
    <div className="w-full max-w-[905px] mx-auto px-2 sm:px-4">
      {/* 5-Column Feature Row perfectly centered inside the white floating card */}
      <div className="bg-white/90 lg:bg-transparent backdrop-blur-[2px] lg:backdrop-blur-none p-3 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-0 lg:divide-x divide-slate-200/80 items-center py-0.5">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.id}
              onClick={() => onFeatureClick && onFeatureClick(item)}
              className={`flex flex-col items-center text-center px-1 group cursor-pointer transition-all duration-200 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              {/* Icon matching reference line style */}
              <div className="mb-1 text-[#0062FF] transition-transform duration-200 group-hover:-translate-y-0.5">
                <Icon className="w-4 h-4 stroke-[1.8]" />
              </div>

              {/* Two-line clean typography matching reference */}
              <h4 className="text-[11.5px] font-bold text-slate-800 group-hover:text-[#0062FF] transition-colors leading-[1.2]">
                <span className="block">{item.line1}</span>
                <span className="block">{item.line2}</span>
              </h4>

              {/* Description matching reference without truncation */}
              <p className="text-[8.5px] sm:text-[9px] text-slate-500 mt-0.5 leading-[1.3] max-w-[155px]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
