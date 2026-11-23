import React from 'react';

/**
 * Premium 2x2 Statistics Card
 * 
 * - Strict 2×2 symmetrical grid layout with mathematically centered cross-dividers
 * - Identical column widths and row heights across all viewports
 * - Desktop: 34px bold numbers, 14px regular descriptions
 * - Mobile: Scaled 26–28px numbers with zero text-wrapping disruptions
 * - Dark navy background (#0B1528) with subtle light-blue accent (#93C5FD)
 */
export default function StatsCard({ className = "" }) {
  const stats = [
    {
      valueMain: '₹180+',
      valueAccent: ' Cr',
      line1: 'Government Subsidies',
      line2: 'Unlocked',
    },
    {
      valueMain: '1,200',
      valueAccent: '+',
      line1: 'MSMEs & Startups',
      line2: 'Assisted',
    },
    {
      valueMain: '99.4',
      valueAccent: '%',
      line1: 'First-Attempt DPR',
      line2: 'Sanction Rate',
    },
    {
      valueMain: '40+',
      valueAccent: ' Banks',
      line1: 'PSU & Commercial Bank',
      line2: 'Network',
    },
  ];

  return (
    <div className={`relative w-full max-w-[620px] mx-auto bg-[#0B1528] border border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_12px_32px_rgba(11,21,40,0.28)] overflow-hidden ${className}`}>
      {/* 2x2 Grid */}
      <div className="relative grid grid-cols-2 grid-rows-2 w-full">
        
        {/* Subtle Horizontal Divider */}
        <div 
          className="absolute left-3 right-3 sm:left-6 sm:right-6 top-1/2 -translate-y-1/2 h-[1px] bg-slate-800/70 pointer-events-none" 
          aria-hidden="true"
        />

        {/* Subtle Vertical Divider */}
        <div 
          className="absolute top-3 bottom-3 sm:top-6 sm:bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-slate-800/70 pointer-events-none" 
          aria-hidden="true"
        />

        {/* 4 Equal-Sized Statistic Cells */}
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center py-5 sm:py-7 px-2 sm:px-4 z-10"
          >
            {/* Bold Numerical Headline with Subtle Light-Blue Accent */}
            <div className="text-[22px] xs:text-[28px] sm:text-[34px] font-bold text-white tracking-tight leading-none whitespace-nowrap">
              <span>{item.valueMain}</span>
              <span className="text-[#93C5FD] font-semibold">{item.valueAccent}</span>
            </div>

            {/* Supporting Description with Consistent Cadence */}
            <p className="text-[11px] xs:text-[12.5px] sm:text-[14px] text-slate-400 font-normal mt-1.5 sm:mt-2.5 leading-tight sm:leading-relaxed">
              <span className="block">{item.line1}</span>
              <span className="block">{item.line2}</span>
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
