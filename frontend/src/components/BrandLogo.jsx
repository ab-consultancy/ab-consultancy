import React from 'react';

export default function BrandLogo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer ${className}`}>
      {/* 3D Ribbon Icon Mark */}
      <div className="relative flex items-center justify-center">
        <img 
          src="/logo-mark.png" 
          alt="AB Consultancy 3D Ribbon Logo" 
          className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,98,255,0.18)]"
          loading="eager"
        />
      </div>

      {/* Vertical separator line */}
      <div className={`h-8 w-[1.5px] mx-0.5 ${light ? 'bg-slate-700' : 'bg-slate-300/80'}`}></div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <span className={`text-[19px] font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
          AB Consultancy
        </span>
        <span className={`text-[11px] font-medium tracking-wider ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          Grow • Comply • Expand
        </span>
      </div>
    </div>
  );
}

