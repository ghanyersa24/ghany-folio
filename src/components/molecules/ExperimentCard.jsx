import { ExternalLink } from 'lucide-react';
import { getIcon } from '../../constants/icons';
import { Card, IconBox, TechTag } from '../atoms';

/**
 * A side-project / experiment card for the Lab section.
 *
 * @param {object} experiment - an item from data/experiments.js
 */
export default function ExperimentCard({ experiment }) {
  const { icon, title, tagline, description, stack, note, links } = experiment;
  const Icon = getIcon(icon);

  return (
    <Card variant="muted" hover lift as="article" className="p-6 sm:p-7 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <IconBox icon={Icon} size="md" />
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
          <p className="text-cyan-400 text-sm mt-1">{tagline}</p>
        </div>
      </div>

      <p className="text-slate-400 leading-relaxed mb-5">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      {note && <p className="text-xs text-slate-500 italic mb-4">{note}</p>}

      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-800">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 font-medium transition-colors"
          >
            {link.label}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </Card>
  );
}
