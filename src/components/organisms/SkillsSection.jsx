import { Container, Section, SectionHeading } from '../atoms';
import { SkillCard } from '../molecules';
import { skills } from '../../data';

/** "Keahlian Teknis" — grouped technical skills grid. */
export default function SkillsSection() {
  return (
    <Section id="keahlian">
      <Container>
        <SectionHeading title="Keahlian Teknis" className="mb-16" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
