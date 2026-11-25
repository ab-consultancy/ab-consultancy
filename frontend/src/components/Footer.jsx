import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

// Official Social Brand SVGs
const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.031 2C6.511 2 2.022 6.489 2.022 12.008c0 1.761.459 3.48 1.332 5l-1.417 5.176 5.308-1.392a9.96 9.96 0 0 0 4.786 1.226h.004c5.518 0 10.007-4.489 10.007-10.01 0-2.673-1.041-5.186-2.932-7.077A9.946 9.946 0 0 0 12.031 2zm0 18.334h-.004a8.314 8.314 0 0 1-4.238-1.161l-.304-.18-3.151.826.841-3.071-.198-.315a8.31 8.31 0 0 1-1.274-4.426c0-4.588 3.734-8.322 8.327-8.322 2.223 0 4.313.866 5.885 2.438a8.27 8.27 0 0 1 2.438 5.888c0 4.59-3.734 8.323-8.327 8.323zm4.561-6.223c-.25-.125-1.478-.729-1.707-.812-.229-.083-.396-.125-.562.125-.166.25-.646.812-.792.979-.146.166-.292.187-.542.062s-1.056-.389-2.012-1.241c-.744-.664-1.246-1.484-1.392-1.734-.146-.25-.016-.385.109-.509.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438s-.562-1.354-.771-1.854c-.203-.488-.41-.422-.562-.43-.146-.007-.313-.009-.479-.009s-.438.062-.667.312c-.229.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.167 1.763 2.693 4.271 3.776.597.258 1.063.412 1.427.528.6.191 1.146.164 1.578.1.481-.072 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.167-.479-.292z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Footer({ onOpenEligibility, onOpenConsultant }) {
  const navigate = useNavigate();

  const handleNav = (target, type = 'scroll') => {
    if (type === 'route') {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="relative z-20 bg-gradient-to-b from-[#0A0F1D] via-[#0F172A] to-[#080D1A] text-slate-300 pt-16 pb-12 border-t border-slate-800/80 scroll-mt-20 overflow-hidden">
      
      {/* ===================== CREATIVE PATTERN & DEPTH LAYERS (ANIMATED) ===================== */}
      {/* 1. Precision Top Border Glow Line with Gliding Shimmer Beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-800/80 pointer-events-none z-10 overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#0062FF] to-transparent animate-footer-beam" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-14 bg-[#0062FF]/15 blur-2xl pointer-events-none z-0 animate-footer-glow" />

      {/* 2. Architectural Blueprint Grid Pattern with Breathing Depth */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_65%,transparent_100%)] pointer-events-none z-0 animate-footer-grid" 
      />

      {/* 3. Dot Matrix Texture - Upper Right with Diagonal Wave Twinkle Animation */}
      <div className="absolute top-8 right-10 hidden sm:grid grid-cols-6 gap-2.5 pointer-events-none z-0">
        {[...Array(24)].map((_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const delay = (col * 180 + row * 240) % 2400;
          return (
            <div 
              key={i} 
              className="w-1 h-1 rounded-full bg-blue-400 animate-footer-dot"
              style={{ animationDelay: `${delay}ms` }}
            />
          );
        })}
      </div>

      {/* 4. Dot Matrix Texture - Lower Left Accent with Cascading Pulse */}
      <div className="absolute bottom-16 left-8 hidden lg:grid grid-cols-4 gap-2.5 pointer-events-none z-0">
        {[...Array(16)].map((_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const delay = (col * 220 + row * 280) % 2000;
          return (
            <div 
              key={i} 
              className="w-1 h-1 rounded-full bg-slate-400 animate-footer-dot"
              style={{ animationDelay: `${delay}ms` }}
            />
          );
        })}
      </div>

      {/* 5. Concentric Orbital Contour Lines with Independent Smooth Rotations */}
      <svg 
        className="absolute -bottom-28 -right-28 w-[420px] h-[420px] pointer-events-none opacity-25 z-0" 
        viewBox="0 0 400 400" 
        fill="none"
      >
        <circle 
          cx="200" cy="200" r="190" 
          stroke="#0062FF" strokeWidth="1.2" strokeDasharray="6 6" 
          className="animate-footer-orbit-outer"
        />
        <circle 
          cx="200" cy="200" r="145" 
          stroke="#38BDF8" strokeWidth="1" 
          className="animate-footer-orbit-mid"
        />
        <circle 
          cx="200" cy="200" r="100" 
          stroke="#0062FF" strokeWidth="1" strokeDasharray="4 4" 
          className="animate-footer-orbit-inner"
        />
        <circle 
          cx="200" cy="200" r="60" 
          stroke="#60A5FA" strokeWidth="0.8" strokeDasharray="2 3"
          className="animate-footer-orbit-core"
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (4 cols on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleNav('/', 'route')}
              className="bg-white/95 p-3 rounded-2xl inline-block cursor-pointer transition-transform hover:opacity-95"
            >
              <BrandLogo />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-3">
              Enabling ambitious Indian startups and MSMEs to unlock government grants, 
              secure low-cost bank credit, and build compliant, bank-ready documentation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Advisory Firm</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <span>Pan-India Assistance</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20government%20subsidies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60 shadow-xs group"
                  aria-label="WhatsApp"
                  title="Connect on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/ab.consultancy14022026/?utm_source=qr&r=nametag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#E4405F] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60 shadow-xs group"
                  aria-label="Instagram"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60 shadow-xs group"
                  aria-label="Facebook"
                  title="Connect on Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60 shadow-xs group"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#38BDF8] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols on lg) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => handleNav('home', 'scroll')} className="hover:text-white transition-colors text-left cursor-pointer">Home</button></li>
              <li><button onClick={() => handleNav('/services', 'route')} className="hover:text-white transition-colors text-left cursor-pointer">Services</button></li>
              <li><button onClick={() => handleNav('/about-us', 'route')} className="hover:text-white transition-colors text-left cursor-pointer">About Us</button></li>
              <li><button onClick={() => handleNav('/blog', 'route')} className="hover:text-white transition-colors text-left cursor-pointer">Blog & Guides</button></li>
              <li><button onClick={() => handleNav('faq', 'scroll')} className="hover:text-white transition-colors text-left cursor-pointer">FAQ</button></li>
              <li><button onClick={() => handleNav('/contact', 'route')} className="hover:text-white transition-colors text-left cursor-pointer">Contact Us</button></li>
              <li><button onClick={onOpenEligibility} className="hover:text-white transition-colors text-left cursor-pointer">Eligibility Check</button></li>
              <li><button onClick={onOpenConsultant} className="hover:text-white transition-colors text-left cursor-pointer">Book Consultation</button></li>
            </ul>
          </div>

          {/* Key Schemes (2 cols on lg, beside Quick Links on mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Schemes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/services/pmegp" className="hover:text-white transition-colors">PMEGP Subsidy</Link></li>
              <li><Link to="/services/cmegp" className="hover:text-white transition-colors">CMEGP Maharashtra</Link></li>
              <li><Link to="/services/pmfme" className="hover:text-white transition-colors">PMFME Food Processing</Link></li>
              <li><Link to="/services/ahidf" className="hover:text-white transition-colors">AHIDF Dairy & Feed</Link></li>
              <li><Link to="/services/aif" className="hover:text-white transition-colors">Agri Infra Fund (AIF)</Link></li>
              <li><Link to="/services/psi" className="hover:text-white transition-colors">Maharashtra PSI 2019</Link></li>
            </ul>
          </div>

          {/* Contact Details & Embedded Map (4 cols on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919130894308" className="text-white font-medium hover:text-brand-400 transition-colors">
                    +91 91308 94308
                  </a>
                  <div className="text-[11px] text-slate-500">Mon - Sat (9:30 AM - 6:30 PM)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@abconsulting.net.in" className="text-white font-medium hover:text-brand-400 transition-colors">
                    info@abconsulting.net.in
                  </a>
                  <div className="text-[11px] text-slate-500">Official Inquiries & DPR Submissions</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Head Office Location</div>
                  <div className="text-[11px] text-slate-400 leading-snug mt-0.5">
                    Office No. 106, Baiju Height, Near Old Vasant Talkies, Ahilyanagar (Ahmednagar) - 414001
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="mt-3.5 lg:mt-6 rounded-xl overflow-hidden border border-slate-700/80 shadow-md h-[130px] sm:h-[145px] lg:h-[185px] relative group bg-slate-900">
              <iframe
                title="AB Consultancy Head Office Map"
                src="https://maps.google.com/maps?q=19.0952,74.7496&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-125 contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <a 
                href="https://maps.google.com/?q=19.0952,74.7496" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-transparent p-2.5 lg:p-3 flex items-center justify-between text-[11px] text-white hover:text-brand-300 transition-colors pointer-events-auto"
              >
                <span className="font-semibold flex items-center gap-1.5 text-xs text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Open in Google Maps</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] text-slate-300 group-hover:underline font-medium">
                  Get Directions <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

          </div>

        </div>

        {/* Disclaimer & Legal */}
        <div className="pt-8 text-center text-xs text-slate-500 space-y-3">
          <p className="max-w-3xl mx-auto leading-relaxed text-[11px]">
            <strong className="text-slate-400">Disclaimer:</strong> AB Consultancy is a private professional consultancy offering techno-financial analysis, DPR preparation, and project guidance for MSMEs. We are not a government agency nor a lending bank. Scheme disbursements are subject to verification and sanction by competent government authorities and commercial banks in accordance with official guidelines.
          </p>
          <div className="pt-2 text-[12px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} AB Consultancy. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-[11px]">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Engagement</a>
              <a href="#disclaimer" className="hover:text-white transition-colors">Scheme Disclaimers</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

