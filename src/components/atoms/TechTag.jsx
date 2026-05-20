import { cn } from '../../utils/cn';

/**
 * Small technology/skill chip.
 *  - tone="cyan"  : cyan-tinted, used for project & case-study stacks.
 *  - tone="slate" : neutral, interactive, used in the skills grid.
 */
const TONES = {
  cyan: 'px-2.5 py-1 bg-cyan-950/30 text-cyan-300 border-cyan-900/50',
  slate:
    'px-3 py-1.5 bg-slate-800 text-slate-300 border-slate-700/50 ' +
    'hover:bg-slate-700 hover:text-cyan-300 cursor-default',
};

export default function TechTag({ tone = 'cyan', children }) {
  return (
    <span
      className={cn(
        'rounded text-xs font-medium border transition-colors duration-300',
        TONES[tone],
      )}
    >
      {children}
    </span>
  );
}
