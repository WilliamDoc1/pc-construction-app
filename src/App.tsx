import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import db from './data/db.json';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { LuxuryResidentialPage } from './pages/LuxuryResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { RoofingTimberPage } from './pages/RoofingTimberPage';
import { ThatchPage } from './pages/ThatchPage';
import { HeritageThatchPage } from './pages/HeritageThatchPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BrochuresPage } from './pages/BrochuresPage';
import { ContactPage } from './pages/ContactPage';

import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactModal } from './components/ContactModal';
import { BrochurePublicationReader } from './components/BrochurePublicationReader';
import type { Project } from './components/AsymmetricProjectGrid';
import type { BrochureDocumentSchema } from './types/schema';

function AppContent() {
  const navigate = useNavigate();
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [activeBrochure, setActiveBrochure] = useState<BrochureDocumentSchema | null>(null);

  const handleOpenBrochureReader = (brochure: any) => {
    setActiveBrochure(brochure);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#1C1917] font-sans antialiased selection:bg-stone-900 selection:text-white flex flex-col justify-between">
      <ScrollToTop />

      {/* Sticky Full-Width Header */}
      <Header
        onOpenBrochures={() => navigate('/downloads')}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Content Router View */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigate={(path) => navigate(path)}
                onSelectProject={(proj) => navigate(`/projects/${proj.slug || proj.id}`)}
                onOpenContact={() => setContactOpen(true)}
                onOpenBrochureReader={handleOpenBrochureReader}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={() => setContactOpen(true)} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onNavigateToSlug={(slug) => navigate(`/projects/${slug}`)}
              />
            }
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetailPage onOpenContact={() => setContactOpen(true)} />}
          />
          <Route
            path="/luxury-residential"
            element={
              <LuxuryResidentialPage
                onNavigateToProjects={() => navigate('/projects')}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/commercial"
            element={
              <CommercialPage
                onNavigateToProjects={() => navigate('/projects')}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/roofing-timber"
            element={
              <RoofingTimberPage
                onNavigateToProjects={() => navigate('/projects')}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/thatch"
            element={
              <ThatchPage
                onNavigateToProjects={() => navigate('/projects')}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/heritage-thatching"
            element={
              <HeritageThatchPage
                onNavigateToProjects={() => navigate('/projects')}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/press-articles" element={<ReviewsPage />} />
          <Route
            path="/downloads"
            element={<BrochuresPage onOpenBrochureReader={handleOpenBrochureReader} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenBrochures={() => navigate('/downloads')} />

      {/* Project Detail Quick Modal (if triggered directly from grid) */}
      <ProjectDetailModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Contact Consultation Request Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        offices={db.company.offices}
      />

      {/* Digital Brochure Publication Reader Modal */}
      <BrochurePublicationReader
        brochure={activeBrochure}
        onClose={() => setActiveBrochure(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
