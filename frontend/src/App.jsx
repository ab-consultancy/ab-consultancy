import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SchemesSection from './components/SchemesSection';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import EligibilityModal from './components/EligibilityModal';
import ConsultantModal from './components/ConsultantModal';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import CentralStateSchemesPage from './pages/CentralStateSchemesPage';
import BusinessLoansPage from './pages/BusinessLoansPage';
import ProjectFinancePage from './pages/ProjectFinancePage';
import MachineryLoansPage from './pages/MachineryLoansPage';
import WorkingCapitalLoansPage from './pages/WorkingCapitalLoansPage';
import LoanAgainstPropertyPage from './pages/LoanAgainstPropertyPage';
import HotelRestaurantLoansPage from './pages/HotelRestaurantLoansPage';
import AgricultureLoansPage from './pages/AgricultureLoansPage';
import GovernmentSponsoredLoansPage from './pages/GovernmentSponsoredLoansPage';
import AhidfSchemePage from './pages/AhidfSchemePage';
import SchemeDetailPage, {
  PmegpSchemePage,
  CmegpSchemePage,
  PmfmeSchemePage,
  AifSchemePage,
  PmksySchemePage,
  NhbSchemePage,
  NhmSchemePage,
  PsiSchemePage
} from './pages/SchemeDetailPage';
import ConsultancyDetailPage, {
  BusinessDevelopmentConsultancyPage,
  FranchiseModelConsultancyPage,
  MarketLinkagePage,
  ImportExportPage,
  BusinessFinancePage,
  LicensesApprovalsPage,
  RocRegistrationPage,
  BusinessConsultancyPage,
  BusinessSetupGuidancePage,
  FinancialConsultancyPage,
  ProjectReportPreparationPage,
  GovernmentSchemeApplicationAssistancePage,
  SubsidyApplicationAssistancePage
} from './pages/ConsultancyDetailPage';
import { useSEO } from './utils/seo';

function HomePageView({ onCheckEligibility, onTalkConsultant, onBookAppointment, onFeatureClick, onSelectScheme }) {
  useSEO({
    title: "AB Consultancy | Govt Schemes & Subsidies Ahilyanagar",
    description: "AB Consultancy is the top consultant in Ahilyanagar for Government Schemes, Subsidies, Business Loans & Bank DPRs. 15+ yrs experience, 7,100+ clients.",
    canonical: "https://www.abconsultancy.net.in/",
    keywords: "Consultancy in ahilyanagar, Consultancy in nagar, best Consultancy in ahilyanagar, best Consultancy in nagar, Government Schemes, Government Subsidy, PMEGP Subsidy Consultant Ahilyanagar, Bank DPR Preparation Nagar"
  });

  return (
    <>
      {/* 100% Exact One-Page Hero Canvas */}
      <div id="home">
        <Hero 
          onCheckEligibility={onCheckEligibility}
          onTalkConsultant={onTalkConsultant}
          onBookAppointment={onBookAppointment}
          onFeatureClick={onFeatureClick}
        />
      </div>

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Core Government Schemes Grid */}
        <SchemesSection 
          onSelectScheme={onSelectScheme}
        />

        {/* 4-Step Process & Trust Stats */}
        <WhyChooseUs 
          onStartNow={onCheckEligibility}
        />

        {/* FAQ Section */}
        <FAQSection 
          onTalkConsultant={onTalkConsultant}
        />
      </main>
    </>
  );
}

export default function App() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [consultantOpen, setConsultantOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change unless an anchor hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleBookAppointment = () => {
    setConsultantOpen(true);
  };

  const handleCheckEligibility = () => {
    setEligibilityOpen(true);
  };

  const handleTalkConsultant = () => {
    setConsultantOpen(true);
  };

  const handleFeatureClick = (feature) => {
    if (feature.id === 'eligibility' || feature.id === 'subsidies' || feature.id === 'collateral-free') {
      setEligibilityOpen(true);
    } else {
      setConsultantOpen(true);
    }
  };

  const handleSelectScheme = (schemeName) => {
    setEligibilityOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FD] selection:bg-[#0062FF] selection:text-white relative">
      {/* Production-Ready Sticky Glassmorphism Navbar */}
      <Navbar 
        onBookAppointment={handleBookAppointment}
        onCheckEligibility={handleCheckEligibility}
      />

      {/* Primary Routes */}
      <Routes>
        {/* Route 1: Home Page */}
        <Route 
          path="/" 
          element={
            <HomePageView 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
              onFeatureClick={handleFeatureClick}
              onSelectScheme={handleSelectScheme}
            />
          } 
        />

        {/* Route 2: About Us Page (/about-us & /about) */}
        <Route 
          path="/about-us" 
          element={
            <AboutUsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/about" 
          element={
            <AboutUsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 3: Dedicated Standalone Blog Page (/blog & /blogs) */}
        <Route 
          path="/blog" 
          element={
            <BlogPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/blogs" 
          element={
            <BlogPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 4: Dedicated Standalone Contact Page (/contact & /contact-us) */}
        <Route 
          path="/contact" 
          element={
            <ContactPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/contact-us" 
          element={
            <ContactPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 5: Dedicated Standalone Services Page (/services & /service) */}
        <Route 
          path="/services" 
          element={
            <ServicesPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/service" 
          element={
            <ServicesPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 6: Central & State Government Scheme Guidance Detail Page */}
        <Route 
          path="/services/central-state-schemes" 
          element={
            <CentralStateSchemesPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/central-and-state-government-schemes" 
          element={
            <CentralStateSchemesPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 7: Business Loans & Financial Assistance Detail Page */}
        <Route 
          path="/services/business-loans" 
          element={
            <BusinessLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/business-loans" 
          element={
            <BusinessLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 8: Project Finance & Industrial Debt Advisory Page */}
        <Route 
          path="/services/project-finance" 
          element={
            <ProjectFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/project-finance" 
          element={
            <ProjectFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 9: Machinery Loans & Equipment Finance Advisory Page */}
        <Route 
          path="/services/machinery-loans" 
          element={
            <MachineryLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/machinery-loans" 
          element={
            <MachineryLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 10: Working Capital Loans (CC/OD & LC/BG) Advisory Page */}
        <Route 
          path="/services/working-capital-loans" 
          element={
            <WorkingCapitalLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/working-capital-loans" 
          element={
            <WorkingCapitalLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 11: Loan Against Property (LAP) & Mortgage Advisory Page */}
        <Route 
          path="/services/loan-against-property" 
          element={
            <LoanAgainstPropertyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/loan-against-property" 
          element={
            <LoanAgainstPropertyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/lap" 
          element={
            <LoanAgainstPropertyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 12: Hotel & Restaurant Loans Advisory Page */}
        <Route 
          path="/services/hotel-restaurant-loans" 
          element={
            <HotelRestaurantLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/hotel-restaurant-loans" 
          element={
            <HotelRestaurantLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 13: Agriculture Loans & Agro-Infrastructure Advisory Page */}
        <Route 
          path="/services/agriculture-loans" 
          element={
            <AgricultureLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/agriculture-loans" 
          element={
            <AgricultureLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 14: Government-Sponsored Loan Schemes & Subsidies Advisory Page */}
        <Route 
          path="/services/government-sponsored-loans" 
          element={
            <GovernmentSponsoredLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/government-sponsored-loans" 
          element={
            <GovernmentSponsoredLoansPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 15: Animal Husbandry Infrastructure Development Fund (AHIDF) Scheme Page */}
        <Route 
          path="/services/ahidf" 
          element={
            <AhidfSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/animal-husbandry-infrastructure-development-fund" 
          element={
            <AhidfSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/ahidf" 
          element={
            <AhidfSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 16: PMEGP Scheme Page */}
        <Route 
          path="/services/pmegp" 
          element={
            <PmegpSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/pmegp" 
          element={
            <PmegpSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 17: CMEGP Scheme Page */}
        <Route 
          path="/services/cmegp" 
          element={
            <CmegpSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/cmegp" 
          element={
            <CmegpSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 18: PMFME Scheme Page */}
        <Route 
          path="/services/pmfme" 
          element={
            <PmfmeSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/pmfme" 
          element={
            <PmfmeSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 19: AIF Scheme Page */}
        <Route 
          path="/services/aif" 
          element={
            <AifSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/aif" 
          element={
            <AifSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 20: PMKSY Scheme Page */}
        <Route 
          path="/services/pmksy" 
          element={
            <PmksySchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/pmksy" 
          element={
            <PmksySchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 21: NHB Scheme Page */}
        <Route 
          path="/services/nhb" 
          element={
            <NhbSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/nhb" 
          element={
            <NhbSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 22: NHM Scheme Page */}
        <Route 
          path="/services/nhm" 
          element={
            <NhmSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/nhm" 
          element={
            <NhmSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 23: Maharashtra PSI Scheme Page */}
        <Route 
          path="/services/psi" 
          element={
            <PsiSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/psi" 
          element={
            <PsiSchemePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 24: Business Development Consultancy Page */}
        <Route 
          path="/services/business-development-consultancy" 
          element={
            <BusinessDevelopmentConsultancyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/business-development-consultancy" 
          element={
            <BusinessDevelopmentConsultancyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/business-consultancy" 
          element={
            <BusinessDevelopmentConsultancyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/business-consultancy" 
          element={
            <BusinessDevelopmentConsultancyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 25: Franchise Model Consultancy Page */}
        <Route 
          path="/services/franchise-model-consultancy" 
          element={
            <FranchiseModelConsultancyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/franchise-model-consultancy" 
          element={
            <FranchiseModelConsultancyPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 26: Market Linkage Page */}
        <Route 
          path="/services/market-linkage" 
          element={
            <MarketLinkagePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/market-linkage" 
          element={
            <MarketLinkagePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 27: Import & Export Consultancy Page */}
        <Route 
          path="/services/import-export" 
          element={
            <ImportExportPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/import-export" 
          element={
            <ImportExportPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 28: Business & Finance Advisory Page */}
        <Route 
          path="/services/business-finance" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/business-finance" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/financial-consultancy" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/financial-consultancy" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/project-report-preparation" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/project-report-preparation" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/subsidy-application-assistance" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/subsidy-application-assistance" 
          element={
            <BusinessFinancePage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 29: Industrial Licenses & Approvals Page */}
        <Route 
          path="/services/licenses-approvals" 
          element={
            <LicensesApprovalsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/licenses-approvals" 
          element={
            <LicensesApprovalsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/business-setup-guidance" 
          element={
            <LicensesApprovalsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/business-setup-guidance" 
          element={
            <LicensesApprovalsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/services/government-scheme-application-assistance" 
          element={
            <LicensesApprovalsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/government-scheme-application-assistance" 
          element={
            <LicensesApprovalsPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />

        {/* Route 30: ROC Registration & Incorporation Page */}
        <Route 
          path="/services/roc-registration" 
          element={
            <RocRegistrationPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
        <Route 
          path="/roc-registration" 
          element={
            <RocRegistrationPage 
              onCheckEligibility={handleCheckEligibility}
              onTalkConsultant={handleTalkConsultant}
              onBookAppointment={handleBookAppointment}
            />
          } 
        />
      </Routes>

      {/* Professional Corporate Footer */}
      <Footer 
        onOpenEligibility={handleCheckEligibility}
        onOpenConsultant={handleTalkConsultant}
      />

      {/* Interactive Modals */}
      <EligibilityModal 
        isOpen={eligibilityOpen}
        onClose={() => setEligibilityOpen(false)}
        onScheduleConsultation={() => {
          setEligibilityOpen(false);
          setConsultantOpen(true);
        }}
      />

      <ConsultantModal 
        isOpen={consultantOpen}
        onClose={() => setConsultantOpen(false)}
      />
    </div>
  );
}
