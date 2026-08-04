import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { InteriorStyling } from './pages/InteriorStyling';
import { InteriorStylingBedroom } from './pages/InteriorStylingBedroom';
import { InteriorStylingTVUnit } from './pages/InteriorStylingTVUnit';
import { InteriorStylingModernCeilings } from './pages/InteriorStylingModernCeilings';
import { InteriorStylingLEDStripCeilings } from './pages/InteriorStylingLEDStripCeilings';
import { ArchitecturalDesign } from './pages/ArchitecturalDesign';
import { DesignProject1 } from './pages/DesignProject1';
import { DesignProject2 } from './pages/DesignProject2';
import { DesignProject3 } from './pages/DesignProject3';
import { DesignProject4 } from './pages/DesignProject4';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      <div className="flex flex-col min-h-screen bg-[#111111] text-[#f2f0e9]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/interior-styling" element={<InteriorStyling />} />
            <Route path="/services/interior-styling/bedroom" element={<InteriorStylingBedroom />} />
            <Route path="/services/interior-styling/tv-unit" element={<InteriorStylingTVUnit />} />
            <Route path="/services/interior-styling/modern-ceilings" element={<InteriorStylingModernCeilings />} />
            <Route path="/services/interior-styling/led-strip-ceilings" element={<InteriorStylingLEDStripCeilings />} />
            <Route path="/services/architectural-design" element={<ArchitecturalDesign />} />
            <Route path="/services/architectural-design/project-1" element={<DesignProject1 />} />
            <Route path="/services/architectural-design/project-2" element={<DesignProject2 />} />
            <Route path="/services/architectural-design/project-3" element={<DesignProject3 />} />
            <Route path="/services/architectural-design/project-4" element={<DesignProject4 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/projects/:id/:subfolder" element={<Projects />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
