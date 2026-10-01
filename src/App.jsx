import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import FeaturedCampaign from './components/FeaturedCampaign';
import Solutions from './components/Solutions';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ServiceModal from './components/ServiceModal';
import LegalModal from './components/LegalModal';
import BackToTop from './components/BackToTop';
import './App.css';

export default function App() {
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);
  const [selectedRequirement, setSelectedRequirement] = useState(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceForInquiry = (service) => {
    setSelectedRequirement(service);
    scrollToContact();
  };

  const handleSelectSolution = (solution) => {
    setSelectedRequirement(solution);
    scrollToContact();
  };

  return (
    <div className="compact-app-root">
      {/* 1. NAVBAR */}
      <Navbar onStartProject={scrollToContact} />

      <main id="main-content">
        {/* 2. HERO / ZERO SECTION (with 3D Centerpiece + Video Badge) */}
        <Hero onStartProject={scrollToContact} />

        {/* 3. ABOUT + SERVICES (Combined compact section) */}
        <AboutServices onSelectService={(service) => setSelectedServiceModal(service)} />

        {/* 4. FEATURED CAMPAIGN (with short looping video) */}
        <FeaturedCampaign onOpenCaseStudy={(campaign) => setSelectedCaseStudy(campaign)} />

        {/* 5. PRODUCTS / SOLUTIONS (3 compact editorial blocks) */}
        <Solutions onSelectSolution={handleSelectSolution} />

        {/* 6. FAQ (Short 5 questions) */}
        <FAQ />

        {/* 7. CONTACT / REQUIREMENT (Compact & validated) */}
        <Contact 
          selectedRequirement={selectedRequirement} 
          onClearRequirement={() => setSelectedRequirement(null)} 
        />
      </main>

      {/* 8. FOOTER */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Back to top button */}
      <BackToTop />

      {/* Modals */}
      <ServiceModal 
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onInquire={handleSelectServiceForInquiry}
      />

      <CaseStudyModal 
        campaign={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={scrollToContact}
      />

      <LegalModal 
        legalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
