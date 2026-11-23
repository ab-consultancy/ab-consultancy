import React, { useState } from 'react';
import { Landmark, ArrowRight, MessageSquare, Check, Handshake, ShieldCheck, FileCheck, Headphones, Calendar, ChevronDown } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Hero({ onCheckEligibility, onTalkConsultant, onBookAppointment, onFeatureClick }) {

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

  // Mobile 3-column features matching exact user design
  const mobileFeatures = [
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
      desc: 'CGTMSE & Mudra loans up to ₹5 Crore',
      icon: ShieldCheck,
    },
    {
      id: 'dpr',
      line1: 'Bank-Compliant',
      line2: 'DPR',
      desc: 'Detailed Project Reports & CMA',
      icon: Handshake,
    }
  ];

  return (
    <div className="w-full min-h-[calc(100vh-65px)] flex flex-col justify-between select-none overflow-x-hidden bg-gradient-to-b from-[#E6F0FE] via-[#EDF5FE] to-[#DFEDFE] relative">
      
      {/* Subtle Decorative Background Wave - Top Right */}
      <div className="absolute top-0 right-0 w-[320px] sm:w-[620px] h-[220px] sm:h-[420px] pointer-events-none opacity-40 overflow-hidden">
        <svg viewBox="0 0 620 420" fill="none" className="w-full h-full">
          <path 
            d="M160 0 C 320 100, 480 190, 620 390 L 620 0 Z" 
            fill="url(#topRightGrad)" 
          />
          <defs>
            <linearGradient id="topRightGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0866FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#DCEBFF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle Decorative Background Wave - Bottom Left */}
      <div className="absolute bottom-16 left-0 w-[260px] sm:w-[420px] h-[150px] sm:h-[240px] pointer-events-none opacity-40 overflow-hidden">
        <svg viewBox="0 0 420 240" fill="none" className="w-full h-full">
          <path 
            d="M0 240 L 0 110 C 100 130, 240 175, 420 240 Z" 
            fill="url(#bottomLeftGrad)" 
          />
          <defs>
            <linearGradient id="bottomLeftGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0866FF" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#DCEBFF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[500px] h-[200px] sm:h-[300px] bg-white/60 blur-3xl pointer-events-none rounded-full" />

      {/* ================= UPPER-LEFT BACKGROUND DEPTH & GEOMETRIC CURVES ================= */}
      {/* Very Soft Blue Radial Glow */}
      <div className="absolute -top-12 -left-12 w-[340px] sm:w-[640px] h-[300px] sm:h-[540px] bg-gradient-to-br from-[#0866FF]/18 via-[#38BDF8]/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-12 left-10 w-[220px] sm:w-[360px] h-[220px] sm:h-[360px] bg-white/75 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Subtle Oversized Abstract Geometric Curves, Circular Outlines & Flowing Lines */}
      <div className="absolute top-0 left-0 w-[420px] sm:w-[780px] h-[320px] sm:h-[580px] pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 780 580" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="ulSwooshGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0866FF" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#DCEBFF" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="ulStrokeGrad" x1="0" y1="0" x2="1" y2="0.8">
              <stop offset="0%" stopColor="#0866FF" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#0062FF" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.10" />
            </linearGradient>
            <linearGradient id="ulAccentGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0866FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* 1. Oversized Abstract Geometric Curve / Translucent Swoosh */}
          <path 
            d="M -60 10 C 160 0, 360 80, 460 210 C 540 320, 520 440, 420 540 L -60 540 Z" 
            fill="url(#ulSwooshGrad)" 
          />

          {/* 2. Concentric Low-Opacity Circular Outlines */}
          {/* Outer dashed circular outline */}
          <g className="animate-orbit-ul-outer-cw">
            <circle 
              cx="160" 
              cy="140" 
              r="400" 
              stroke="#0866FF" 
              strokeWidth="1.5" 
              strokeDasharray="10 8" 
              opacity="0.26" 
            />
          </g>
          {/* Middle solid delicate ring */}
          <g className="animate-orbit-ul-inner-ccw">
            <circle 
              cx="160" 
              cy="140" 
              r="290" 
              stroke="url(#ulStrokeGrad)" 
              strokeWidth="2" 
              opacity="0.36" 
            />
          </g>
          {/* Inner dashed accent orbit (rotates clockwise at 45s) */}
          <g className="animate-orbit-ul-accent-cw">
            <circle 
              cx="160" 
              cy="140" 
              r="190" 
              stroke="#0062FF" 
              strokeWidth="1.5" 
              strokeDasharray="6 6" 
              opacity="0.30" 
            />
          </g>
          {/* Core soft circular glow (stationary) */}
          <circle 
            cx="160" 
            cy="140" 
            r="110" 
            fill="#DCEBFF" 
            fillOpacity="0.35" 
          />

          {/* 3. Flowing Decorative Architectural Lines extending toward center */}
          <path 
            d="M -30 180 C 180 170, 380 250, 600 210" 
            stroke="url(#ulAccentGrad)" 
            strokeWidth="2" 
            strokeDasharray="8 6" 
            opacity="0.32" 
          />
          <path 
            d="M -10 270 C 200 260, 420 340, 660 290" 
            stroke="#0062FF" 
            strokeWidth="1.5" 
            opacity="0.25" 
          />
          <path 
            d="M 40 360 C 250 340, 480 410, 720 380" 
            stroke="#38BDF8" 
            strokeWidth="1.2" 
            strokeDasharray="5 5" 
            opacity="0.22" 
          />
        </svg>
      </div>

      {/* ===================== MIDDLE HERO CONTENT ===================== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12 pt-5 xs:pt-5 sm:pt-6 lg:pt-2 pb-0 flex flex-col justify-between lg:grid lg:grid-cols-12 gap-0 lg:gap-2 lg:items-end flex-1">
        
        {/* Left Column: Eyebrow + 3-line Headline + Subtitle + CTAs + Micro Trust */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start lg:justify-center translate-y-0 lg:-translate-y-16 xl:-translate-y-20 z-20">
          
          {/* Eyebrow Pill Tag with Smooth Left-to-Right Reveal Animation */}
          <div 
            className="relative inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[#0062FF] text-[11px] xs:text-xs sm:text-[12.5px] font-semibold mb-2 xs:mb-2.5 sm:mb-3 w-fit select-none"
            aria-label="Government Scheme & Business Support"
          >
            {/* 1. Stationary Bank Icon - In cyan/blue circle matching design */}
            <span className="relative z-10 w-4 h-4 xs:w-4.5 xs:h-4.5 rounded-full bg-[#00A3FF] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Landmark className="w-2.5 h-2.5" />
            </span>

            {/* 2. Badge Background / Pill Layer - Reveals smoothly left-to-right (0–900ms) */}
            <div 
              className="absolute inset-0 rounded-full bg-[#EBF3FE] border border-[#D5E5FD] shadow-[0_1px_2px_rgba(0,98,255,0.05)] animate-badge-pill pointer-events-none z-0" 
            />

            {/* 3. Text - Reveals sequentially character-by-character (400–1800ms) */}
            <span className="relative z-10 inline-flex items-center" aria-hidden="true">
              {'Government Scheme & Business Support'.split('').map((char, index) => (
                <span
                  key={index}
                  className="animate-badge-char"
                  style={{
                    animationDelay: `${400 + index * 32}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>

          {/* Main Headline - Slightly increased for commanding optical presence & balanced upper spacing */}
          <h1 className="text-[32px] xs:text-[36px] sm:text-[42px] md:text-5xl lg:text-[52px] xl:text-[58px] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.08] sm:leading-[1.06] [text-wrap:balance]">
            <span className="block">Your Business.</span>
            <span className="block mt-0.5 sm:mt-1">Your Opportunities.</span>
            <span className="block mt-0.5 sm:mt-1 text-[#0062FF]">
              Our Guidance.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2.5 sm:mt-3 text-[12.5px] xs:text-[13.5px] sm:text-base lg:text-[15.5px] text-slate-600 font-normal leading-[1.48] sm:leading-[1.55] max-w-[330px] xs:max-w-[370px] sm:max-w-[480px]">
            Helping startups and MSMEs unlock Central & State government schemes, 
            secure low-interest business loans, and prepare bank-ready documentation—fast 
            and hassle-free.
          </p>

          {/* CTAs - Stacked compact pill buttons on mobile */}
          <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <button
              onClick={onCheckEligibility}
              className="group relative inline-flex items-center justify-between gap-3 px-5 sm:pl-6 sm:pr-3.5 py-2.5 sm:py-3.5 rounded-full bg-[#0062FF] hover:bg-[#0052CC] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(0,98,255,0.35)] hover:shadow-[0_6px_22px_rgba(0,98,255,0.42)] transition-all duration-200 cursor-pointer min-h-[42px] sm:min-h-[48px] w-fit min-w-[210px] xs:min-w-[220px]"
            >
              <span>Check Your Eligibility</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 flex-shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onTalkConsultant}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0062FF] font-semibold text-xs sm:text-sm border border-[#0062FF] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer min-h-[42px] sm:min-h-[48px] w-fit min-w-[210px] xs:min-w-[220px]"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0062FF] flex-shrink-0" />
              <span>Talk to Our Consultant</span>
            </button>
          </div>

          {/* Micro Trust Indicators - Vertically stacked on mobile matching design */}
          <div className="mt-2.5 sm:mt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-x-6 sm:gap-y-2 text-[11px] xs:text-xs sm:text-[12.5px] text-slate-600 font-medium">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#0062FF] stroke-[2.5] flex-shrink-0" />
              <span>Zero Upfront Eligibility Fee</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#0062FF] stroke-[2.5] flex-shrink-0" />
              <span>Direct Ex-Bank Credit Appraisal</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#0062FF] stroke-[2.5] flex-shrink-0" />
              <span>100% RBI & Gazette Compliant</span>
            </div>
          </div>

        </div>

        {/* Right Column: Layered Composition (+30% Enlarge, Depth & Architectural Rings) */}
        <div className="lg:col-span-7 xl:col-span-7 flex items-end justify-end relative -mb-1 overflow-hidden lg:overflow-visible -mr-4 xs:-mr-5 sm:-mr-10 lg:-mr-6 xl:-mr-12 2xl:-mr-16 w-[calc(100%+2rem)] xs:w-[calc(100%+2.5rem)] lg:w-full mt-auto lg:mt-0 pointer-events-none select-none z-10">
          
          <div className="relative w-[420px] xs:w-[470px] sm:w-[560px] md:w-[640px] lg:w-full max-w-[880px] xl:max-w-[980px] 2xl:max-w-[1040px] flex items-end justify-end ml-auto translate-x-6 xs:translate-x-8 sm:translate-x-10 lg:translate-x-0">

            {/* ================= LAYER 1: BACKGROUND GEOMETRY & SOFT RADIAL GRADIENTS ================= */}
            {/* Deep Ambient Atmospheric Glow */}
            <div className="absolute -top-16 right-0 w-[640px] h-[520px] bg-gradient-to-bl from-[#0866FF]/16 via-[#DCEBFF]/35 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
            
            {/* Subject Separation Spotlight directly behind person */}
            <div className="absolute top-8 left-[22%] w-[340px] h-[340px] bg-white/80 rounded-full blur-2xl pointer-events-none z-0" />

            {/* Subtle Dotted Pattern Texture in Upper Right */}
            <div className="absolute top-2 right-4 hidden sm:grid grid-cols-6 gap-2 opacity-25 pointer-events-none z-0">
              {[...Array(24)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0866FF]" />
              ))}
            </div>

            {/* ================= LAYER 2: SVG CONCENTRIC ARCS, CURVED SHAPES & FLOWING LINES ================= */}
            <svg 
              viewBox="0 0 1024 576" 
              fill="none" 
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            >
              <defs>
                {/* Crescent Gradient */}
                <linearGradient id="crescentGrad" x1="0" y1="1" x2="0.6" y2="0">
                  <stop offset="0%" stopColor="#0866FF" stopOpacity="0.32" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#DCEBFF" stopOpacity="0.04" />
                </linearGradient>

                {/* Bold Stroke Gradient */}
                <linearGradient id="arcStrokeGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0866FF" />
                  <stop offset="60%" stopColor="#0062FF" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>

                {/* Sky / Cloud Ribbon behind Dome */}
                <linearGradient id="domeRibbonGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#DCEBFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0866FF" stopOpacity="0.08" />
                </linearGradient>
              </defs>

              {/* 1. Large Abstract Curved Crescent framing the Person */}
              <path 
                d="M 120 576 C 110 380, 180 230, 310 130 C 410 50, 540 40, 660 70 C 580 120, 460 160, 380 230 C 280 320, 240 440, 240 576 Z" 
                fill="url(#crescentGrad)" 
              />

              {/* 2. Concentric Circular Arcs Centered around Person's Torso (400, 350) */}
              {/* Inner Focus Core Glow (Stationary) */}
              <circle cx="400" cy="350" r="140" fill="#DCEBFF" fillOpacity="0.22" />

              {/* Inner Solid Circular Line - Anti-Clockwise Rotation (22s) */}
              <g className="animate-orbit-inner-ccw">
                <path 
                  d="M 180 440 A 240 240 0 0 1 480 120" 
                  stroke="url(#arcStrokeGrad)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  opacity="0.75" 
                />
              </g>

              {/* Outer Dashed Circular Orbit Ring - Clockwise Rotation (40s) */}
              <g className="animate-orbit-outer-cw">
                <path 
                  d="M 120 460 A 300 300 0 0 1 540 60" 
                  stroke="#0866FF" 
                  strokeWidth="1.5" 
                  strokeDasharray="8 6" 
                  opacity="0.35" 
                />
              </g>

              {/* Inner Dashed Accent Ring - Subtle Orbit (50s) */}
              <g className="animate-orbit-accent-cw">
                <path 
                  d="M 230 420 A 185 185 0 0 1 460 175" 
                  stroke="#0062FF" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                  opacity="0.45" 
                />
              </g>

              {/* 3. Delicate Flowing Architectural Lines extending across the Parliament Dome */}
              <path 
                d="M 440 370 C 540 240, 680 160, 960 130" 
                stroke="#0866FF" 
                strokeWidth="2" 
                strokeDasharray="8 5" 
                opacity="0.32" 
              />
              <path 
                d="M 490 410 C 590 290, 740 210, 1024 180" 
                stroke="#0062FF" 
                strokeWidth="1.2" 
                opacity="0.28" 
              />
              <path 
                d="M 600 480 C 720 370, 840 290, 1024 270" 
                stroke="#38BDF8" 
                strokeWidth="1" 
                strokeDasharray="5 5" 
                opacity="0.22" 
              />

              {/* 4. Subtle Curved Ribbon behind Parliament Base */}
              <path 
                d="M 640 200 C 760 160, 880 190, 1024 260 L 1024 576 L 680 576 Z" 
                fill="url(#domeRibbonGrad)" 
              />
            </svg>

            {/* Translucent Frosted Glass Geometry for Added 3D Depth */}
            <div className="absolute top-12 left-4 w-32 h-14 rounded-2xl bg-white/25 backdrop-blur-md border border-white/50 -rotate-6 shadow-[0_8px_24px_rgba(8,102,255,0.05)] pointer-events-none hidden xl:block opacity-65 z-0" />
            <div className="absolute top-24 right-12 w-20 h-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 rotate-12 shadow-[0_4px_16px_rgba(8,102,255,0.03)] pointer-events-none hidden 2xl:block opacity-50 z-0" />

            {/* ================= LAYER 3: FOREGROUND ENLARGED HERO VISUAL (+30% SIZE) ================= */}
            <img 
              src="/assets/hero_user_provided.png" 
              alt="AB Consultancy Government Scheme Advisory & Business Loan Facilitation" 
              className="w-full h-auto object-contain select-none pointer-events-none relative z-10 drop-shadow-[0_12px_36px_rgba(8,102,255,0.10)]"
              loading="eager"
            />

            {/* Bottom Natural Blend: Subtle gradient fade on desktop */}
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-20" />
          </div>

        </div>

      </div>

      {/* ===================== 3. FULL-WIDTH TRUST & BENEFITS FEATURE STRIP (DARK THEME LIKE FOOTER) ===================== */}
      <section className="relative z-20 w-full bg-gradient-to-b from-[#0A0F1D] via-[#0F172A] to-[#080D1A] border-t border-b border-slate-800/90 py-2.5 sm:py-3.5 lg:py-5 shadow-2xl overflow-hidden">
        
        {/* Creative Pattern & Depth Layers (Matching Footer) */}
        {/* 1. Precision Top Border Glow Line with Gliding Shimmer Beam */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-800/80 pointer-events-none z-10 overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#0062FF] to-transparent animate-footer-beam" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-12 bg-[#0062FF]/15 blur-2xl pointer-events-none z-0 animate-footer-glow" />

        {/* 2. Architectural Blueprint Grid Pattern with Breathing Depth */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-40 animate-footer-grid" 
        />

        {/* 3. Subtle Bottom Edge Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-800/60 pointer-events-none z-10" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-2 xs:px-4 sm:px-8 lg:px-12">
          
          {/* Mobile: Sleek 3-Column Strip with Dividers (Matching exact mobile design) */}
          <div className="lg:hidden w-full grid grid-cols-3 divide-x divide-slate-800/80 items-stretch">
            {mobileFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => onFeatureClick && onFeatureClick(item)}
                  className="flex flex-col items-center text-center px-1.5 xs:px-2.5 group cursor-pointer transition-all duration-200"
                >
                  {/* Glowing Blue/Cyan Icon */}
                  <div className="mb-0.5 text-[#38BDF8] group-hover:text-white transition-all duration-200 drop-shadow-[0_0_8px_rgba(56,189,248,0.35)]">
                    <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 stroke-[1.8]" />
                  </div>

                  {/* Two-Line Title */}
                  <h4 className="text-[10px] xs:text-[11px] font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-[1.2]">
                    <span className="block">{item.line1}</span>
                    <span className="block">{item.line2}</span>
                  </h4>

                  {/* Description */}
                  <p className="text-[8px] xs:text-[8.5px] text-slate-400 group-hover:text-slate-300 mt-0.5 leading-[1.2] transition-colors line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Desktop: Full 5-Column Feature Bar */}
          <div className="hidden lg:grid w-full grid-cols-5 divide-x divide-slate-800/80 items-center">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => onFeatureClick && onFeatureClick(item)}
                  className="flex flex-col items-center text-center px-3 group cursor-pointer transition-all duration-200"
                >
                  {/* Glowing Blue/Cyan Icon */}
                  <div className="mb-1 text-[#38BDF8] group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(56,189,248,0.35)]">
                    <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                  </div>

                  {/* Two-Line Title */}
                  <h4 className="text-[13px] font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-[1.25]">
                    <span className="block">{item.line1}</span>
                    <span className="block">{item.line2}</span>
                  </h4>

                  {/* Description */}
                  <p className="text-[10.5px] text-slate-400 group-hover:text-slate-300 mt-1 leading-[1.3] max-w-[195px] transition-colors">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
