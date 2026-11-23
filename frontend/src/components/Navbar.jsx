import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  ArrowRight, 
  Landmark, 
  Handshake, 
  FileCheck, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Trophy, 
  Users, 
  BookOpen, 
  FileText 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

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

export default function Navbar({ onBookAppointment, onCheckEligibility }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [activeServicesCategory, setActiveServicesCategory] = useState('loans');
  const [insightsDropdown, setInsightsDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLoansOpen, setMobileLoansOpen] = useState(true);
  const [mobileSubsidiesOpen, setMobileSubsidiesOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Route / Page detection
  const isAboutPage = location.pathname.startsWith('/about');
  const isBlogPage = location.pathname.startsWith('/blog');
  const isContactPage = location.pathname.startsWith('/contact');
  const isServicesPage = location.pathname.startsWith('/service');
  const isHomePage = location.pathname === '/';

  // In-page section tracking for Home page scroll-spy
  const [homeActiveSection, setHomeActiveSection] = useState('Home');

  // Deterministic activeTab derivation:
  // On dedicated subpages, activeTab is strictly locked to that page's tab.
  // On Home page ('/'), it reflects the in-page scrolled section.
  const activeTab = isServicesPage
    ? 'Services'
    : isAboutPage
    ? 'About Us'
    : isBlogPage
    ? 'Blog'
    : isContactPage
    ? 'Contact Us'
    : homeActiveSection;

  const servicesTimeoutRef = useRef(null);
  const insightsTimeoutRef = useRef(null);
  const navRef = useRef(null);

  // 1. Scroll listener for sticky navbar styling & active section highlight on Home
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll-spy ONLY applies to the Home page ('/')
      if (location.pathname !== '/') return;

      // Determine active section based on scroll position on home page
      const servicesEl = document.getElementById('services');
      const aboutEl = document.getElementById('about');
      const faqEl = document.getElementById('faq');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop - 200) {
        setHomeActiveSection('Contact Us');
      } else if (faqEl && scrollPos >= faqEl.offsetTop - 200) {
        setHomeActiveSection('Insights');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop - 200) {
        setHomeActiveSection('About Us');
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop - 200) {
        setHomeActiveSection('Services');
      } else {
        setHomeActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // 2. Click outside & Escape key listeners to close dropdowns and mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setServicesDropdown(false);
        setInsightsDropdown(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdown(false);
        setInsightsDropdown(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Helper navigation handler across routes and in-page sections
  const navigateToSection = (sectionId, tabName) => {
    if (location.pathname === '/') {
      setHomeActiveSection(tabName);
    }
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setInsightsDropdown(false);

    if (sectionId === 'about-us') {
      navigate('/about-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'blog') {
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'contact') {
      if (location.pathname !== '/contact') {
        navigate('/contact');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'services') {
      if (location.pathname !== '/services') {
        navigate('/services');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // For other sections like insights/faq
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    clearTimeout(insightsTimeoutRef.current);
    setInsightsDropdown(false);
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const handleInsightsMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    clearTimeout(insightsTimeoutRef.current);
    setServicesDropdown(false);
    setInsightsDropdown(true);
  };

  const handleInsightsMouseLeave = () => {
    insightsTimeoutRef.current = setTimeout(() => {
      setInsightsDropdown(false);
    }, 150);
  };

  // 2. Services Mega Dropdown & Sub-Menu Data (3 Core Sections & 23 Clickable Offerings)
  const serviceCategories = {
    loans: {
      id: 'loans',
      title: 'Loan Services',
      desc: 'Business loans, project funding & bank credit',
      icon: Handshake,
      countBadge: '8 Options',
      categoryQuery: 'Business Loans',
      items: [
        { title: 'Business Loans', query: 'Business Loans' },
        { title: 'Project Finance', query: 'Project Finance' },
        { title: 'Machinery Loans', query: 'Machinery Loans' },
        { title: 'Working Capital Loans', query: 'Working Capital Loans' },
        { title: 'Loan Against Property (LAP)', query: 'Loan Against Property' },
        { title: 'Hotel & Restaurant Loans', query: 'Hotel & Restaurant Loans' },
        { title: 'Agriculture Loans', query: 'Agriculture Loans' },
        { title: 'Government-Sponsored Loans', query: 'Government-Sponsored Loans' }
      ]
    },
    subsidies: {
      id: 'subsidies',
      title: 'Subsidy Schemes',
      desc: 'Central & State non-repayable capital grants',
      icon: Landmark,
      countBadge: '9 Schemes',
      categoryQuery: 'Government Subsidies',
      items: [
        { code: 'AHIDF', fullName: 'Animal Husbandry Infrastructure Development Fund', query: 'AHIDF' },
        { code: 'AIF', fullName: 'Agriculture Infrastructure Fund', query: 'AIF' },
        { code: 'CMEGP', fullName: 'Chief Minister Employment Generation Programme', query: 'CMEGP' },
        { code: 'NHB', fullName: 'National Horticulture Board', query: 'NHB' },
        { code: 'NHM', fullName: 'National Horticulture Mission', query: 'NHM' },
        { code: 'PMFME', fullName: 'PM Formalisation of Micro Food Processing Enterprises', query: 'PMFME' },
        { code: 'PMEGP', fullName: "Prime Minister's Employment Generation Programme", query: 'PMEGP' },
        { code: 'PMKSY', fullName: 'Pradhan Mantri Kisan Sampada Yojana', query: 'PMKSY' },
        { code: 'PSI', fullName: 'Package Scheme of Incentives', query: 'PSI' }
      ]
    },
    other: {
      id: 'other',
      title: 'Other Consultancy Services',
      desc: 'Statutory registration, DPR modeling & advisory',
      icon: FileCheck,
      countBadge: '6 Solutions',
      categoryQuery: 'DPR & Financial Reports',
      items: [
        { title: 'Business Consultancy', query: 'Business Consultancy' },
        { title: 'Business Setup Guidance', query: 'Business Setup Guidance' },
        { title: 'Financial Consultancy', query: 'Financial Consultancy' },
        { title: 'Project Report Preparation', query: 'Project Report Preparation' },
        { title: 'Government Scheme Application Assistance', query: 'Government Scheme Application Assistance' },
        { title: 'Subsidy Application Assistance', query: 'Subsidy Application Assistance' }
      ]
    }
  };

  const handleSubServiceClick = (searchTerm) => {
    setServicesDropdown(false);
    setMobileMenuOpen(false);
    if (searchTerm === 'Business Loans' || searchTerm === 'business-loans') {
      navigate('/services/business-loans');
    } else if (searchTerm === 'Project Finance' || searchTerm === 'project-finance') {
      navigate('/services/project-finance');
    } else if (searchTerm === 'Machinery Loans' || searchTerm === 'machinery-loans') {
      navigate('/services/machinery-loans');
    } else if (searchTerm === 'Working Capital Loans' || searchTerm === 'working-capital-loans') {
      navigate('/services/working-capital-loans');
    } else if (searchTerm === 'Loan Against Property (LAP)' || searchTerm === 'Loan Against Property' || searchTerm === 'loan-against-property' || searchTerm === 'lap') {
      navigate('/services/loan-against-property');
    } else if (searchTerm === 'Hotel & Restaurant Loans' || searchTerm === 'hotel-restaurant-loans' || searchTerm === 'Hotel and Restaurant Loans') {
      navigate('/services/hotel-restaurant-loans');
    } else if (searchTerm === 'Agriculture Loans' || searchTerm === 'agriculture-loans') {
      navigate('/services/agriculture-loans');
    } else if (searchTerm === 'Government-Sponsored Loans' || searchTerm === 'government-sponsored-loans' || searchTerm === 'Government Sponsored Loans') {
      navigate('/services/government-sponsored-loans');
    } else if (searchTerm === 'AHIDF' || searchTerm === 'Animal Husbandry Infrastructure Development Fund' || searchTerm === 'ahidf' || searchTerm === 'animal-husbandry-infrastructure-development-fund') {
      navigate('/services/ahidf');
    } else if (searchTerm === 'PMEGP' || searchTerm === "Prime Minister's Employment Generation Programme" || searchTerm === 'pmegp') {
      navigate('/services/pmegp');
    } else if (searchTerm === 'CMEGP' || searchTerm === 'Chief Minister Employment Generation Programme' || searchTerm === 'cmegp') {
      navigate('/services/cmegp');
    } else if (searchTerm === 'PMFME' || searchTerm === 'PM Formalisation of Micro Food Processing Enterprises' || searchTerm === 'pmfme') {
      navigate('/services/pmfme');
    } else if (searchTerm === 'AIF' || searchTerm === 'Agriculture Infrastructure Fund' || searchTerm === 'aif') {
      navigate('/services/aif');
    } else if (searchTerm === 'PMKSY' || searchTerm === 'Pradhan Mantri Kisan Sampada Yojana' || searchTerm === 'pmksy') {
      navigate('/services/pmksy');
    } else if (searchTerm === 'NHB' || searchTerm === 'National Horticulture Board' || searchTerm === 'nhb') {
      navigate('/services/nhb');
    } else if (searchTerm === 'NHM' || searchTerm === 'National Horticulture Mission' || searchTerm === 'nhm') {
      navigate('/services/nhm');
    } else if (searchTerm === 'PSI' || searchTerm === 'Package Scheme of Incentives' || searchTerm === 'psi') {
      navigate('/services/psi');
    } else if (searchTerm === 'Business Consultancy' || searchTerm === 'business-consultancy') {
      navigate('/services/business-consultancy');
    } else if (searchTerm === 'Business Setup Guidance' || searchTerm === 'business-setup-guidance') {
      navigate('/services/business-setup-guidance');
    } else if (searchTerm === 'Financial Consultancy' || searchTerm === 'financial-consultancy') {
      navigate('/services/financial-consultancy');
    } else if (searchTerm === 'Project Report Preparation' || searchTerm === 'project-report-preparation') {
      navigate('/services/project-report-preparation');
    } else if (searchTerm === 'Government Scheme Application Assistance' || searchTerm === 'government-scheme-application-assistance') {
      navigate('/services/government-scheme-application-assistance');
    } else if (searchTerm === 'Subsidy Application Assistance' || searchTerm === 'subsidy-application-assistance') {
      navigate('/services/subsidy-application-assistance');
    } else {
      navigate(`/services?q=${encodeURIComponent(searchTerm)}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryName) => {
    setServicesDropdown(false);
    setMobileMenuOpen(false);
    if (categoryName === 'Business Loans' || categoryName === 'Loan Services') {
      navigate('/services/business-loans');
    } else {
      navigate(`/services?category=${encodeURIComponent(categoryName)}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Insights Dropdown List (4 items)
  const insightsList = [
    {
      title: 'Success Stories',
      desc: 'Real MSME founder journeys and verified sanction breakthroughs',
      icon: Trophy,
      action: () => navigateToSection('about', 'Insights')
    },
    {
      title: 'Client Experiences',
      desc: 'Verified client reviews from 1,200+ assisted MSME enterprises',
      icon: Users,
      action: () => navigateToSection('about', 'Insights')
    },
    {
      title: 'Case Studies',
      desc: 'In-depth project viability, subsidy release & ROI analyses',
      icon: BookOpen,
      action: () => navigateToSection('process', 'Insights')
    },
    {
      title: 'Business Resources',
      desc: 'Eligibility checklists, DPR guides & statutory subsidy FAQs',
      icon: FileText,
      action: () => navigateToSection('faq', 'Insights')
    }
  ];

  return (
    <header 
      ref={navRef}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-slate-200/80 py-2.5 sm:py-3' 
          : 'bg-[#E6F0FE]/90 backdrop-blur-sm border-b border-transparent py-3.5 sm:pt-4 sm:pb-3'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div 
          onClick={() => navigateToSection('home', 'Home')} 
          className="flex-shrink-0 cursor-pointer transition-transform hover:opacity-95"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigateToSection('home', 'Home')}
          aria-label="AB Consultancy Home"
        >
          <BrandLogo />
        </div>

        {/* Center: Floating Pill Capsule Navigation (Desktop) */}
        <nav 
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-6 px-6 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        >
          {/* Position 1: Home (Direct Link) */}
          <button
            onClick={() => navigateToSection('home', 'Home')}
            className={`relative text-xs sm:text-[13px] font-medium transition-colors py-0.5 cursor-pointer ${
              activeTab === 'Home' ? 'text-[#0062FF] font-semibold' : 'text-slate-700 hover:text-[#0062FF]'
            }`}
          >
            <span>Home</span>
            {activeTab === 'Home' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#0062FF] rounded-full" />
            )}
          </button>

          {/* Position 2: Services (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              onClick={() => {
                if (!isServicesPage) {
                  navigateToSection('services', 'Services');
                } else {
                  setServicesDropdown((prev) => !prev);
                }
              }}
              aria-haspopup="true"
              aria-expanded={servicesDropdown}
              aria-controls="services-menu"
              className={`flex items-center gap-1 text-xs sm:text-[13px] font-medium transition-colors py-0.5 cursor-pointer ${
                activeTab === 'Services' ? 'text-[#0062FF] font-semibold' : 'text-slate-700 hover:text-[#0062FF]'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#0062FF]' : ''}`} />
              {activeTab === 'Services' && (
                <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#0062FF] rounded-full" />
              )}
            </button>

            {/* Desktop Services Dropdown Menu (Split Flyout with 3 Categories & Sub-items) */}
            {servicesDropdown && (
              <div 
                id="services-menu"
                role="menu"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className="absolute top-full left-1/2 -translate-x-[36%] mt-3 w-[720px] bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.16)] border border-slate-100 p-3.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
              >
                <div className="grid grid-cols-12 gap-3.5">
                  
                  {/* Left Column: 3 Core Categories (5 cols) */}
                  <div className="col-span-5 pr-2 flex flex-col justify-between border-r border-slate-100">
                    <div>
                      <div className="px-2.5 py-1.5 border-b border-slate-100 mb-2 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Services & Schemes</span>
                        <span className="text-[10px] font-semibold text-[#0062FF] bg-blue-50 px-2 py-0.5 rounded-full">3 Sectors</span>
                      </div>
                      
                      <div className="space-y-1">
                        {Object.values(serviceCategories).map((cat) => {
                          const Icon = cat.icon;
                          const isActive = activeServicesCategory === cat.id;
                          return (
                            <div
                              key={cat.id}
                              onMouseEnter={() => setActiveServicesCategory(cat.id)}
                              className={`group relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                                isActive 
                                  ? 'bg-blue-50/90 text-[#0062FF] border border-blue-100/90 shadow-xs' 
                                  : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                              }`}
                              onClick={() => handleCategoryClick(cat.categoryQuery)}
                            >
                              <div className="flex items-start gap-2.5 min-w-0">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isActive ? 'bg-[#0062FF] text-white shadow-xs' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0062FF]'
                                }`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className={`text-xs font-bold leading-tight ${isActive ? 'text-[#0062FF]' : 'text-slate-800 group-hover:text-[#0062FF]'}`}>
                                    {cat.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                                    {cat.desc}
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 ml-1.5 ${
                                isActive ? 'text-[#0062FF] translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                              }`} />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <button
                        role="menuitem"
                        onClick={() => {
                          setServicesDropdown(false);
                          navigateToSection('services', 'Services');
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-blue-50/70 hover:bg-[#0062FF] text-[#0062FF] hover:text-white font-semibold text-xs flex items-center justify-between transition-colors cursor-pointer group"
                      >
                        <span>View All Services & Schemes</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Sub-items List / Flyout panel (7 cols) */}
                  <div className="col-span-7 pl-1">
                    <div className="px-2 py-1.5 border-b border-slate-100 mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {serviceCategories[activeServicesCategory]?.title}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {serviceCategories[activeServicesCategory]?.countBadge}
                      </span>
                    </div>

                    <div className="max-h-[370px] overflow-y-auto pr-1 space-y-0.5 scrollbar-thin [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                      {serviceCategories[activeServicesCategory]?.id === 'subsidies' ? (
                        serviceCategories.subsidies.items.map((item, idx) => (
                          <button
                            key={idx}
                            role="menuitem"
                            onClick={() => handleSubServiceClick(item.code)}
                            className="w-full text-left py-1.5 px-2 rounded-lg hover:bg-blue-50/80 transition-colors flex items-center justify-between group cursor-pointer border border-transparent hover:border-blue-100/60"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="px-1.5 py-0.5 rounded bg-blue-100/70 text-[#0062FF] text-[10px] font-bold tracking-wide flex-shrink-0">
                                {item.code}
                              </span>
                              <span className="text-xs font-medium text-slate-700 group-hover:text-[#0062FF] transition-colors truncate">
                                {item.fullName}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0062FF] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1.5" />
                          </button>
                        ))
                      ) : (
                        serviceCategories[activeServicesCategory]?.items.map((item, idx) => (
                          <button
                            key={idx}
                            role="menuitem"
                            onClick={() => handleSubServiceClick(item.query)}
                            className="w-full text-left py-1.5 px-2 rounded-lg hover:bg-blue-50/80 transition-colors flex items-center justify-between group cursor-pointer border border-transparent hover:border-blue-100/60"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]/50 group-hover:bg-[#0062FF] group-hover:scale-125 transition-all flex-shrink-0" />
                              <span className="text-xs font-medium text-slate-700 group-hover:text-[#0062FF] transition-colors truncate">
                                {item.title}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0062FF] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1.5" />
                          </button>
                        ))
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Position 3: Insights (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={handleInsightsMouseEnter}
            onMouseLeave={handleInsightsMouseLeave}
          >
            <button
              onClick={() => {
                setServicesDropdown(false);
                setInsightsDropdown((prev) => !prev);
              }}
              aria-haspopup="true"
              aria-expanded={insightsDropdown}
              aria-controls="insights-menu"
              className={`flex items-center gap-1 text-xs sm:text-[13px] font-medium transition-colors py-0.5 cursor-pointer ${
                activeTab === 'Insights' ? 'text-[#0062FF] font-semibold' : 'text-slate-700 hover:text-[#0062FF]'
              }`}
            >
              <span>Insights</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${insightsDropdown ? 'rotate-180 text-[#0062FF]' : ''}`} />
              {activeTab === 'Insights' && (
                <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#0062FF] rounded-full" />
              )}
            </button>

            {/* Desktop Insights Dropdown Menu */}
            {insightsDropdown && (
              <div 
                id="insights-menu"
                role="menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[350px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-2.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
              >
                <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Insights</span>
                </div>
                <div className="space-y-0.5">
                  {insightsList.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        role="menuitem"
                        onClick={item.action}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0062FF] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0062FF] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Position 4: About Us (Direct Link) */}
          <button
            onClick={() => navigateToSection('about-us', 'About Us')}
            className={`text-xs sm:text-[13px] font-medium transition-colors py-0.5 cursor-pointer relative ${
              activeTab === 'About Us' ? 'text-[#0062FF] font-semibold' : 'text-slate-700 hover:text-[#0062FF]'
            }`}
          >
            <span>About Us</span>
            {activeTab === 'About Us' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#0062FF] rounded-full" />
            )}
          </button>

          {/* Position 5: Blog (Direct Link) */}
          <button
            onClick={() => navigateToSection('blog', 'Blog')}
            className={`text-xs sm:text-[13px] font-medium transition-colors py-0.5 cursor-pointer relative ${
              activeTab === 'Blog' ? 'text-[#0062FF] font-semibold' : 'text-slate-700 hover:text-[#0062FF]'
            }`}
          >
            <span>Blog</span>
            {activeTab === 'Blog' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#0062FF] rounded-full" />
            )}
          </button>

          {/* Position 6: Contact Us (Direct Link) */}
          <button
            onClick={() => navigateToSection('contact', 'Contact Us')}
            className={`text-xs sm:text-[13px] font-medium transition-colors py-0.5 cursor-pointer relative ${
              activeTab === 'Contact Us' ? 'text-[#0062FF] font-semibold' : 'text-slate-700 hover:text-[#0062FF]'
            }`}
          >
            <span>Contact Us</span>
            {activeTab === 'Contact Us' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#0062FF] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right: Social Media Icons + Book Appointment (Primary CTA) + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Social Icons (WhatsApp, Instagram, Facebook) - visible on xs (480px) and up */}
          <div className="hidden xs:flex items-center gap-1.5 sm:gap-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20government%20subsidies."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="w-8 h-8 rounded-full bg-white/95 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              title="Follow on Instagram"
              className="w-8 h-8 rounded-full bg-white/95 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#E4405F] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on Facebook"
              title="Connect on Facebook"
              className="w-8 h-8 rounded-full bg-white/95 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
            >
              <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Direct WhatsApp Quick-Chat on compact mobile (<480px) */}
          <a
            href="https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20government%20subsidies."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="xs:hidden w-8 h-8 rounded-full bg-emerald-50 text-[#25D366] border border-emerald-200/80 shadow-xs flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          {/* Book Appointment CTA Button */}
          <button
            onClick={onBookAppointment}
            className="hidden sm:flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0062FF] hover:bg-[#0052CC] text-white text-xs sm:text-[13px] font-semibold shadow-[0_2px_12px_rgba(0,98,255,0.28)] hover:shadow-[0_4px_18px_rgba(0,98,255,0.38)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/90 border border-slate-200/80 text-slate-700 hover:text-[#0062FF] hover:bg-slate-50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* ================= MOBILE SLIDE-DOWN DRAWER / ACCORDION MENU ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            
            {/* Position 1: Mobile Home */}
            <button
              onClick={() => navigateToSection('home', 'Home')}
              className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                activeTab === 'Home' ? 'bg-blue-50 text-[#0062FF]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
              {activeTab === 'Home' && <span className="w-2 h-2 rounded-full bg-[#0062FF]" />}
            </button>

            {/* Position 2: Mobile Services Accordion (6 items) */}
            <div className="border-t border-slate-100 pt-1">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigateToSection('services', 'Services')}
                  className={`flex-1 text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    activeTab === 'Services' ? 'bg-blue-50 text-[#0062FF]' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>Services</span>
                  {activeTab === 'Services' && <span className="w-2 h-2 rounded-full bg-[#0062FF]" />}
                </button>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2.5 text-slate-400 hover:text-[#0062FF] focus:outline-none cursor-pointer"
                  aria-label="Toggle Services submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1.5 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigateToSection('services', 'Services');
                    }}
                    className="w-full text-left p-2 rounded-lg text-xs font-bold text-[#0062FF] hover:bg-white flex items-center justify-between transition-colors border-b border-slate-200/60 pb-2 mb-1 cursor-pointer"
                  >
                    <span>Explore All Services & Schemes Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* 1. Loan Services Mobile Accordion (8 items) */}
                  <div className="bg-white/90 rounded-xl border border-slate-200/60 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setMobileLoansOpen(!mobileLoansOpen)}
                      className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:text-[#0062FF] flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Handshake className="w-4 h-4 text-[#0062FF]" />
                        <span>Loan Services</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0062FF] font-bold">8</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${mobileLoansOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
                    </button>
                    {mobileLoansOpen && (
                      <div className="px-2.5 pb-2 pt-0.5 space-y-0.5 border-t border-slate-100 bg-slate-50/50">
                        {serviceCategories.loans.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSubServiceClick(item.query)}
                            className="w-full text-left py-1.5 px-2 rounded-lg text-[11px] font-medium text-slate-700 hover:text-[#0062FF] hover:bg-white flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]/60 flex-shrink-0" />
                            <span>{item.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. Subsidy Schemes Mobile Accordion (9 items) */}
                  <div className="bg-white/90 rounded-xl border border-slate-200/60 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setMobileSubsidiesOpen(!mobileSubsidiesOpen)}
                      className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:text-[#0062FF] flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Landmark className="w-4 h-4 text-[#0062FF]" />
                        <span>Subsidy Schemes</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0062FF] font-bold">9</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${mobileSubsidiesOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
                    </button>
                    {mobileSubsidiesOpen && (
                      <div className="px-2.5 pb-2 pt-0.5 space-y-0.5 border-t border-slate-100 bg-slate-50/50">
                        {serviceCategories.subsidies.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSubServiceClick(item.code)}
                            className="w-full text-left py-1.5 px-2 rounded-lg text-[11px] font-medium text-slate-700 hover:text-[#0062FF] hover:bg-white flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="px-1.5 py-0.2 rounded bg-blue-100/70 text-[#0062FF] text-[9.5px] font-bold flex-shrink-0">
                              {item.code}
                            </span>
                            <span className="truncate">{item.fullName}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 3. Other Consultancy Services Mobile Accordion (6 items) */}
                  <div className="bg-white/90 rounded-xl border border-slate-200/60 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setMobileOtherOpen(!mobileOtherOpen)}
                      className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:text-[#0062FF] flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-[#0062FF]" />
                        <span>Other Consultancy Services</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0062FF] font-bold">6</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${mobileOtherOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
                    </button>
                    {mobileOtherOpen && (
                      <div className="px-2.5 pb-2 pt-0.5 space-y-0.5 border-t border-slate-100 bg-slate-50/50">
                        {serviceCategories.other.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSubServiceClick(item.query)}
                            className="w-full text-left py-1.5 px-2 rounded-lg text-[11px] font-medium text-slate-700 hover:text-[#0062FF] hover:bg-white flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]/60 flex-shrink-0" />
                            <span>{item.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* Position 3: Mobile Insights Accordion (4 items) */}
            <div className="border-t border-slate-100 pt-1">
              <button
                onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-800 flex items-center justify-between hover:bg-slate-50"
              >
                <span>Insights</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileInsightsOpen ? 'rotate-180 text-[#0062FF]' : ''}`} />
              </button>

              {mobileInsightsOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  {insightsList.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full text-left p-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#0062FF] hover:bg-white flex items-center gap-2 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Position 4: Mobile About Us */}
            <div className="border-t border-slate-100 pt-1">
              <button
                onClick={() => navigateToSection('about-us', 'About Us')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeTab === 'About Us' ? 'bg-blue-50 text-[#0062FF]' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                {activeTab === 'About Us' && <span className="w-2 h-2 rounded-full bg-[#0062FF]" />}
              </button>
            </div>

            {/* Position 5: Mobile Blog */}
            <div className="border-t border-slate-100 pt-1">
              <button
                onClick={() => navigateToSection('blog', 'Blog')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeTab === 'Blog' ? 'bg-blue-50 text-[#0062FF]' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Blog</span>
                {activeTab === 'Blog' && <span className="w-2 h-2 rounded-full bg-[#0062FF]" />}
              </button>
            </div>

            {/* Position 6: Mobile Contact Us */}
            <div className="border-t border-slate-100 pt-1">
              <button
                onClick={() => navigateToSection('contact', 'Contact Us')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeTab === 'Contact Us' ? 'bg-blue-50 text-[#0062FF]' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Contact Us</span>
                {activeTab === 'Contact Us' && <span className="w-2 h-2 rounded-full bg-[#0062FF]" />}
              </button>
            </div>

            {/* Position 6: Mobile Book Appointment Full Width Button */}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookAppointment();
                }}
                className="w-full py-3 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Position 7: Mobile Social Links */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-1">
              <span className="text-xs text-slate-500 font-medium">Follow & Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919130894308?text=Hello%20AB%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20government%20subsidies."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-slate-100 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-slate-100 text-[#E4405F] flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-slate-100 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-xs"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
