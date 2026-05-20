import { Briefcase } from 'lucide-react';
import { ListItem } from '../atoms';
import ProjectCard from './ProjectCard';

/**
 * One entry on the experience timeline: role, company, period,
 * highlight bullets, and an optional project preview.
 *
 * @param {object} experience - an item from data/experiences.js
 */
export default function TimelineEntry({ experience }) {
  const { role, company, period, highlights, project } = experience;

  return (
    <div className="group relative pl-8 sm:pl-40 border-l-2 border-slate-800 hover:border-cyan-400/50 transition-colors duration-300">
      {/* timeline node */}
      <div className="absolute w-5 h-5 bg-slate-950 border-4 border-slate-700 rounded-full -left-[11px] top-1 group-hover:border-cyan-400 transition-colors duration-300 z-10" />

      {/* period rail (desktop) */}
      <div className="hidden sm:block absolute left-0 top-1 -translate-x-full pr-10 text-sm text-slate-400 font-mono w-40 text-right leading-tight">
        {period.split('-').map((part) => (
          <div key={part}>{part.trim()}</div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{role}</h3>
        <div className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          {company}
        </div>

        {/* period (mobile) */}
        <div className="sm:hidden text-sm text-slate-500 font-mono mb-4">{period}</div>

        <ul className="space-y-2 text-slate-400 leading-relaxed">
          {highlights.map((highlight) => (
            <ListItem key={highlight}>{highlight}</ListItem>
          ))}
        </ul>
      </div>

      {project && <ProjectCard project={project} />}
    </div>
  );
}
