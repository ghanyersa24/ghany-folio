import { Container } from '../atoms';
import { FeatureCard } from '../molecules';
import { valueProps } from '../../data';

/**
 * Highlight strip below the hero — frames the offering as
 * "bukan sekadar membuat aplikasi" before the detailed sections.
 */
export default function ValuePropsSection() {
  return (
    <section className="py-14 border-y border-cyan-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container>
        <p className="text-center text-xs font-mono text-cyan-500/60 uppercase tracking-widest mb-8">
          Bukan sekadar membuat aplikasi —
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <FeatureCard
              key={prop.title}
              item={prop}
              layout="plain"
              align="center"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
