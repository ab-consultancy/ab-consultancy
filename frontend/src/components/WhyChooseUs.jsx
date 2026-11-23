import React, { useEffect, useRef } from 'react';
import { CheckCircle2, TrendingUp, Award, Clock, ArrowRight, ShieldCheck, FileCheck2, Users, Building2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatsCard from './StatsCard';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ onStartNow }) {
  const processSectionRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);

  const steps = [
    {
      num: '01',
      title: 'Free Scheme Mapping & Pre-Check',
      desc: 'We analyze your business activity, project cost, promoter background, and geographical zone to map optimal Central & State subsidies.'
    },
    {
      num: '02',
      title: 'Bank-Grade DPR & Financial Projections',
      desc: 'Our financial analysts craft detailed CMA sheets, break-even analyses, and DSCR metrics formulated to satisfy bank credit managers.'
    },
    {
      num: '03',
      title: 'Portal Filing & District Task Force Liaison',
      desc: 'Complete digital submission on government portals (KVIC, DIC, Samarth) with proactive follow-up for speedy task-force recommendation.'
    },
    {
      num: '04',
      title: 'Sanction & Subsidy Margin Disbursal',
      desc: 'We coordinate with bank branch heads to ensure seamless loan disbursement and release of the government subsidy back to your TDR.'
    }
  ];

  useEffect(() => {
    // Only run horizontal scroll-triggered pin animation on mobile/tablet (< 1024px)
    const mm = gsap.matchMedia();

    mm.add('(max-width: 1023px)', () => {
      // Respect accessibility prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const cards = cardsRef.current;
      const dots = dotsRef.current;
      if (!cards || cards.length < 4 || !processSectionRef.current) return;

      // Helper to update active indicator dot based on continuous progress
      let currentActiveDot = -1;
      const updateDots = (activeIdx) => {
        if (currentActiveDot === activeIdx) return;
        currentActiveDot = activeIdx;
        dots.forEach((dot, idx) => {
          if (dot) {
            if (idx === activeIdx) {
              gsap.to(dot, { width: 22, backgroundColor: '#0062FF', duration: 0.2, overwrite: 'auto' });
            } else {
              gsap.to(dot, { width: 6, backgroundColor: '#CBD5E1', duration: 0.2, overwrite: 'auto' });
            }
          }
        });
      };

      // Set initial positions:
      // Card 0: centered, visible, z-10
      // Cards 1-3: placed off-screen right with autoAlpha: 0
      gsap.set(cards[0], { xPercent: 0, autoAlpha: 1, zIndex: 10 });
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { xPercent: 100, autoAlpha: 0, zIndex: 1 });
      }
      updateDots(0);

      // Create scroll-driven pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: processSectionRef.current,
          start: 'top 72px',
          end: '+=1600',
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.28) {
              updateDots(0);
            } else if (p < 0.58) {
              updateDots(1);
            } else if (p < 0.88) {
              updateDots(2);
            } else {
              updateDots(3);
            }
          }
        }
      });

      // Continuous scrubbed timeline using autoAlpha (zero discrete callbacks or hidden styles)
      tl
        // 0–22%: Hold Card 01
        .to({}, { duration: 22 })

        // 22–32%: Transition Card 01 -> Card 02 (Card 01 slides left, Card 02 enters from right)
        .set(cards[1], { zIndex: 10 }, 't1')
        .to(cards[0], { xPercent: -100, autoAlpha: 0, duration: 10, ease: 'power1.inOut' }, 't1')
        .to(cards[1], { xPercent: 0, autoAlpha: 1, duration: 10, ease: 'power1.inOut' }, 't1')
        .set(cards[0], { zIndex: 1 }, 't1+=10')

        // 32–54%: Hold Card 02
        .to({}, { duration: 22 })

        // 54–64%: Transition Card 02 -> Card 03 (Card 02 slides left, Card 03 enters from right)
        .set(cards[2], { zIndex: 10 }, 't2')
        .to(cards[1], { xPercent: -100, autoAlpha: 0, duration: 10, ease: 'power1.inOut' }, 't2')
        .to(cards[2], { xPercent: 0, autoAlpha: 1, duration: 10, ease: 'power1.inOut' }, 't2')
        .set(cards[1], { zIndex: 1 }, 't2+=10')

        // 64–86%: Hold Card 03
        .to({}, { duration: 22 })

        // 86–96%: Transition Card 03 -> Card 04 (Card 03 slides left, Card 04 enters from right)
        .set(cards[3], { zIndex: 10 }, 't3')
        .to(cards[2], { xPercent: -100, autoAlpha: 0, duration: 10, ease: 'power1.inOut' }, 't3')
        .to(cards[3], { xPercent: 0, autoAlpha: 1, duration: 10, ease: 'power1.inOut' }, 't3')
        .set(cards[2], { zIndex: 1 }, 't3+=10')

        // 96–100%: Hold Card 04 until smooth unpinning
        .to({}, { duration: 10 });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  const stats = [
    { value: '₹180+ Cr', label: 'Government Subsidies Unlocked' },
    { value: '1,200+', label: 'MSMEs & Startups Assisted' },
    { value: '99.4%', label: 'First-Attempt DPR Sanction Rate' },
    { value: '40+ Banks', label: 'PSU & Commercial Bank Network' },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
        
        {/* Desktop Metric Counter Banner (Preserved as original on Desktop) */}
        <div className="hidden lg:block bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-16">
          <div className="grid grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            {stats.map((s, idx) => (
              <div key={idx} className={idx > 0 ? 'pl-4' : ''}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Symmetrical 2x2 Statistics Card (< 1024px) */}
        <div className="lg:hidden flex justify-center mb-12 sm:mb-16">
          <StatsCard />
        </div>

        {/* 4-Step Process Section */}
        <div 
          id="process" 
          ref={processSectionRef} 
          className="scroll-mt-24 bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-3 py-1 rounded-full inline-block mb-2 sm:mb-3">
                Frictionless Execution
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                From Concept to Bank Disbursal in 4 Smooth Steps
              </h2>
              <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                Navigating government procedures and bank requirements can be overwhelming. 
                Our team takes ownership of documentation, technical reports, and portal liaisons 
                so you don’t face bureaucratic delays.
              </p>

              {/* Value Checkmarks */}
              <div className="mt-4 sm:mt-8 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 flex-shrink-0" />
                  <span>Zero guesswork—verified against official gazette rules</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 flex-shrink-0" />
                  <span>Transparent fixed advisory milestones</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 flex-shrink-0" />
                  <span>Dedicated relationship manager assigned in 24 hours</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 sm:mt-8">
                <button
                  onClick={onStartNow}
                  className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-brand hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Your Application Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile-Only Horizontal Scroll-Triggered Card Slider (< 1024px) - 2mm gap from content */}
              <div className="lg:hidden mt-[2mm] sm:mt-2 relative w-full overflow-hidden">
                <div className="relative w-full h-[155px] xs:h-[145px] overflow-hidden">
                  {steps.map((st, idx) => (
                    <div
                      key={st.num}
                      ref={(el) => (cardsRef.current[idx] = el)}
                      className="absolute inset-0 w-full pt-[2mm] pb-[2mm] px-3.5 xs:p-5 rounded-2xl border border-slate-200/90 bg-white shadow-soft flex items-start gap-3 xs:gap-4 will-change-transform"
                    >
                      <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 font-black text-base xs:text-lg flex items-center justify-center flex-shrink-0 shadow-xs">
                        {st.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm xs:text-base font-bold text-slate-900 leading-snug">
                          {st.title}
                        </h3>
                        <p className="text-[11.5px] xs:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-3">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle Step Progress Indicator Dots */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {steps.map((st, idx) => (
                    <div
                      key={st.num}
                      ref={(el) => (dotsRef.current[idx] = el)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === 0 ? 'w-5.5 bg-brand-500' : 'w-1.5 bg-slate-300'
                      }`}
                      aria-label={`Step ${st.num}`}
                    />
                  ))}
                </div>

                {/* Mobile-Only Handshake Image to fill temporary scroll gap (< 1024px) */}
                <div className="mt-3.5 xs:mt-4 relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-soft">
                  <img
                    src="/assets/process-handshake.jpg"
                    alt="AB Consultancy successful bank sanction and subsidy disbursal partnership"
                    className="w-full h-[150px] xs:h-[170px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-2.5 xs:p-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[10.5px] xs:text-xs font-semibold shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                      <span>Direct Bank Sanction & Disbursal</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Desktop-Only Stacked Cards (Unchanged, 100% Preserved) */}
            <div className="hidden lg:block lg:col-span-7 space-y-4">
              {steps.map((st) => (
                <div 
                  key={st.num}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-100 hover:border-brand-200 bg-slate-50/50 hover:bg-white hover:shadow-soft transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-brand-600 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 font-black text-lg flex items-center justify-center flex-shrink-0 shadow-sm transition-colors">
                    {st.num}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-500 transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
