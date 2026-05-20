import { PageLayout } from '../components/templates';
import {
  HeroSection,
  ValuePropsSection,
  AboutSection,
  ExperienceSection,
  CaseStudySection,
  SkillsSection,
  AIWorkflowSection,
  LabSection,
  CollaborationSection,
} from '../components/organisms';

/**
 * The portfolio page — arranges section organisms in display order.
 * Pure composition: no markup, no logic, no data. Each organism is
 * self-contained, so reordering the page is a one-line change here.
 */
export default function PortfolioPage() {
  return (
    <PageLayout>
      <HeroSection />
      <ValuePropsSection />
      <AboutSection />
      <ExperienceSection />
      <CaseStudySection />
      <SkillsSection />
      <AIWorkflowSection />
      <LabSection />
      <CollaborationSection />
    </PageLayout>
  );
}
