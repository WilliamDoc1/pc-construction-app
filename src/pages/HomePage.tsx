import React from 'react';
import { HeroSpatial } from '../components/HeroSpatial';
import { StorySection } from '../components/StorySection';
import { DivisionTriptych } from '../components/DivisionTriptych';
import { AsymmetricProjectGrid } from '../components/AsymmetricProjectGrid';
import type { Project } from '../components/AsymmetricProjectGrid';
import { ReviewsSection } from '../components/ReviewsSection';
import db from '../data/db.json';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
  onOpenBrochureReader: (brochure: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenContact,
}) => {
  return (
    <div className="space-y-0">
      <HeroSpatial
        onExploreProjects={() => onNavigate('/projects')}
        onOpenContact={onOpenContact}
      />

      <StorySection company={db.company} />

      <DivisionTriptych
        divisions={db.divisions}
        onSelectDivisionCategory={(divId) => {
          if (divId === 'residential') onNavigate('/luxury-residential');
          else if (divId === 'commercial') onNavigate('/commercial');
          else if (divId === 'roofing') onNavigate('/roofing-timber');
          else if (divId === 'thatch') onNavigate('/thatch');
          else onNavigate('/projects');
        }}
      />

      <AsymmetricProjectGrid
        projects={db.projects as Project[]}
        onSelectProject={onSelectProject}
      />

      <ReviewsSection />
    </div>
  );
};
